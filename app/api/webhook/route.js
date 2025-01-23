import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";

export async function POST(res) {
    try {

        const stripe = new Stripe(process.env.STRIPE_API_KEY);

        const body = await req.text();

        const signature = headers().get("Stripe-signature");

        const webHookSecret = process.env.STRIPE_WEBHOOK_SECRET;
        
        const event = stripe.webhooks.constructEvent(
            body,
            signature,
            webHookSecret
        );

        const { data , type } = event;

        if (type === "checkout.session.completed") {
            await connectMongo();

            const user = await User.findById(data.object.client_reference_id);

            user.hasAccess = true;
            user.customerId = data.object.customer;

            await user.save()
        } else if (type === "customer.subscription.deleted") {
        
            await connectMongo();

            const user = await User.findOne({
                customerId: data.object.customer,
            })

            user.hasAccess = false;
        }

    } catch (e) 
    {
        console.error("Stripe error: " + e?.message);
    }

    return NextResponse.json({})
}