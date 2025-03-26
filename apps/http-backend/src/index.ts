import express from "express";
import authRouter from "./route/authRouter";
const app = express();

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/rooms",)

app.listen(3001);
