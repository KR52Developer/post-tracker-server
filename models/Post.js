import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        // username,description,duration,date,timestamps

        username: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        date: {
            type: Date,
            require: true,

        },
    },
    {
        timestamps: true
    }
);


const post = mongoose.model("post", postSchema);
export default post;