import express from "express";
import authRouter from "./route/authRouter";
import roomRouter from "./route/roomRouter";
const app = express();
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/rooms", roomRouter);

app.listen(3001);
