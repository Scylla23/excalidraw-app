import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";

// Extend the Request interface to include the user property
declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const decode = jwt.verify(authHeader as string, JWT_SECRET) as { id: string };
  if (decode) {
    req.userId = decode.id;
  }
  {
    res.status(403).json({ message: "Unauthorized" });
  }
  next();
};
