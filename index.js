import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import postRoutes from "./routers/postRoutes.js";
import userRoutes from "./routers/userRoutes.js";


dotenv.config();
const app = express();
const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/users", userRoutes);

app.get("/", (req, res) => {
    res.status(200).send("<h1>Welcome to Post Tracker</h1>");
});



mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, UseUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is successfully connected with database`);
        });

    })
    .catch((error) => console.log(error));




