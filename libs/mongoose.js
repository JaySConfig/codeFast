import mongoose from "mongoose";
import User from "@/models/User";
import Board from "@/models/Board";

const connectMongo = async () => {

    // console.log("MONGO_URI is:", process.env.MONGO_URI);

    try {
        await mongoose.connect(process.env.MONGO_URI);
    } catch (e) {
        console.error("X Mongoose Error: " + e.message);
    }
};

export default connectMongo;