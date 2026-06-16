import {
Request,
Response,
NextFunction
} from "express";

import jwt from "jsonwebtoken";

import User from "../models/User.model";

import { env } from "../config/env";

export interface AuthRequest
extends Request {

user?: any;

}

export const authMiddleware =
async (
req: AuthRequest,
res: Response,
next: NextFunction
) => {

try {


const authHeader =
  req.headers.authorization;

if (!authHeader) {

  return res.status(401).json({
    message:
      "No token provided"
  });

}

const token =
  authHeader.split(" ")[1];

if (!token) {

  return res.status(401).json({
    message:
      "Invalid token"
  });

}

const decoded =
  jwt.verify(
    token,
    env.JWT_ACCESS_SECRET
  ) as {
    userId: string;
  };

const user =
  await User.findById(
    decoded.userId
  );

if (!user) {

  return res.status(401).json({
    message:
      "User not found"
  });

}

req.user = user;

next();


}
catch {


return res.status(401).json({
  message:
    "Unauthorized"
});

}

};
