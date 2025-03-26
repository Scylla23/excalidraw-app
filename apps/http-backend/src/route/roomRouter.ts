import express, { Router } from "express";
import { createRoom } from "../controller/roomController";
import { authMiddleware } from "../middleware/authMiddleware";

const roomRouter: Router = express.Router();

roomRouter.post("/v1/createRoom", authMiddleware, createRoom);

export default roomRouter;
