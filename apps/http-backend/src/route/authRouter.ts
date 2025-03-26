import express, { Router } from "express";
import { signin, signup } from "../controller/authController";

const authRouter: Router = express.Router();

authRouter.post("/v1/signin", signin);
authRouter.post("/v1/signup", signup);

export default authRouter;
