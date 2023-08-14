import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: [3, "Username must have atleast  3 characters minimum"]
    },
},
    {
        timestamps: true,
    }
);

const user = mongoose.model("user", userSchema);

export default user;