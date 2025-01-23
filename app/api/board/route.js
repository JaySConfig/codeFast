// import { NextResponse } from "next/server";
// import { auth } from "@/auth";
// import connectMongo from "@/libs/mongoose";
// import User from "@/models/User";
// import Board from "@/models/Board";

// export async function POST(req){
//     try {

//        await connectMongo();
//        console.log("MongoDB connected");

//        const body = await req.json();

//        if (!body.name){
//         return NextResponse.json({error: "Board name is required"},
//         {status: 400}
//         );
//        }

//        const session = await auth();
//        console.log("Session data:", session?.user);

//        if (!session){
//         return NextResponse.json(
//             {error: "Not authorised"},
//             {status: 401 }
//         );
//        }

//        await connectMongo();

//        const user = await User.findById(session.user.id);

//        console.log("user", user)

//        const board = await Board.create({
//         userId: user._id,
//         name: body.name,
//        });

//        user.boards.push(board._id);

//        await user.save();

//        return NextResponse.json({board});

//     } catch (e){
//         console.log(e)
//         return NextResponse.json({ error: e.message }, { status: 500});
//     }
// }

import { NextResponse } from "next/server";
import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import Board from "@/models/Board";

export async function POST(req){
    try {
        await connectMongo();
        console.log("MongoDB connected");

        const body = await req.json();
        if (!body.name){
            return NextResponse.json(
                {error: "Board name is required"},
                {status: 400}
            );
        }

        const session = await auth();
        console.log("Session data:", session?.user);

        if (!session){
            return NextResponse.json(
                {error: "Not authorised"},
                {status: 401}
            );
        }

        const user = await User.findById(session.user.id);
        console.log("user", user);

        if (!user.hasAccess){
            return NextResponse.json(
                { error: "Please subscribe first"},
                { status: 403 }
            );
        }

        // Create board using new + save instead of create
        const board = new Board({
            userId: user._id,
            name: body.name,
        });
        await board.save();

        user.boards.push(board._id);
        await user.save();

        return NextResponse.json({board});
    } catch (e){
        console.log("Error:", e);
        return NextResponse.json({ error: e.message }, { status: 500});
    }
}

export async function DELETE(req) {
    try {
        const { searchParams } = new URL(req.url); // Correct way to parse query parameters
        const boardId = searchParams.get("boardId");

        if (!boardId) {
            return NextResponse.json(
                { error: "boardId is required" },
                { status: 400 }
            );
        }

        const session = await auth();
        if (!session) {
            return NextResponse.json(
                { error: "Not authorised" },
                { status: 401 }
            );
        }

        await connectMongo(); // Ensure database connection

       

        if (result.deletedCount === 0) {
            return NextResponse.json(
                { error: "Board not found or not authorised to delete" },
                { status: 404 }
            );
        }

        // Update the user document
        const user = await User.findById(session.user.id);

        if (!user.hasAccess){
            return NextResponse.json(
                { error: "Please subscribe first"},
                { status: 403 }
            );
        }

         // Delete the board
         const result = await Board.deleteOne({
            _id: boardId,
            userId: session.user.id,
        });

        user.boards = user.boards.filter((id) => id.toString() !== boardId);
        await user.save();

        // Return success response
        return NextResponse.json({ success: true });
    } catch (e) {
        console.error("DELETE Error:", e);
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}