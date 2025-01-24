import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";
import Post from "@/models/Post";
import BadWordsFilter from "bad-words"
import { sanitizeFilter } from "mongoose";

export async function POST(req) {
    try {

        const body = await req.json();

        const { title, description} = body;

        const { searchParams } = req.nextUrl;
        const boardId = searchParams.get("boardId");

        const badWordsFilter = new BadWordsFilter();
        const santisedTitle = badWordsFilter.clean(title);
        const sanitisedDescription = badWordsFilter.clean(description);


        if (!title) {
            return NextResponse.json(
                { error: "Title is required"},
                { status: 400}
            );
        }

        await connectMongo();

        const post = await Post.create({
            title: santisedTitle,
            description: sanitisedDescription,
            boardId,
            userId: session?.user?.id,
        });

        return NextResponse.json(post);
    } catch (e) {
        return NextResponse.json({ error: e.message}, { status: 500})
    }
}