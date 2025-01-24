import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100,
    },
    description: {
        type: String,
        trim: true,
        maxLength: 1000,
    },
    boardId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Board"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

export default mongoose.models.Post || mongoose.model("Post", postSchema);