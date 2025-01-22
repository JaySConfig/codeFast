// import mongoose from "mongoose";

// const boardSchema = new mongoose.Schema({
//     userId: {
//         type: mongoose.Schema.Types.ObjectId,
//         required: true, 
//         ref: "User" 
//     },
//     name: {
//         type: String,
//         required: true,
//         trim: true,
//     }
// })

// export default mongoose.models.Board || mongoose.model("Board", boardSchema);

import mongoose from "mongoose";

const boardSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    name: {
        type: String,
        required: true,
        trim: true,
    }
});

// First, check if the model exists to avoid recompilation
let Board;
try {
    Board = mongoose.model("Board");
} catch {
    Board = mongoose.model("Board", boardSchema);
}

export default Board;