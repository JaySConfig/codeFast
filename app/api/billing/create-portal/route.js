import { NextResponse } from "next/server";
import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import Stripe from "stripe";

export async function POST(req) {
    try {
        console.log("Request received");
        const body = await req.json();

        if (!body.returnUrl) {
            return NextResponse.json(
                { error: "returnUrl is required" },
                { status: 400 }
            );
        }

        const session = await auth();
        if (!session || !session.user?.id) {
            console.error("No session or user ID found");
            return NextResponse.json(
                { error: "Not authorised" },
                { status: 401 }
            );
        }

        console.log("Session:", session);

        await connectMongo();
        console.log("MongoDB connected successfully");

        const user = await User.findById(session.user.id);
        console.log("User query result:", user);

        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        if (!user.customerId) {
            console.error("User missing customerId, creating a new one...");
            const stripe = new Stripe(process.env.STRIPE_API_KEY);
            const stripeCustomer = await stripe.customers.create({
                email: user.email,
                name: user.name,
            });

            user.customerId = stripeCustomer.id;
            await user.save();
            console.log("New customerId assigned:", stripeCustomer.id);
        }

        const stripe = new Stripe(process.env.STRIPE_API_KEY);
        const stripeCustomerPortal = await stripe.billingPortal.sessions.create({
            customer: user.customerId,
            return_url: body.returnUrl,
        });

        console.log("Stripe portal created:", stripeCustomerPortal);

        return NextResponse.json({ url: stripeCustomerPortal.url });
    } catch (e) {
        console.error("Error:", e.message);
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
