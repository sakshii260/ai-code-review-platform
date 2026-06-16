import { Router }
from "express";

import User
from "../models/User.model";

import {
 generateAccessToken,
 generateRefreshToken,
 verifyAccessToken
}
from "../utils/jwt";



const router = Router();

router.get("/seed", async (_, res) => {

  const randomNumber = Math.floor(
    Math.random() * 100000
  );

  const user = await User.create({
    username: `sakshi${randomNumber}`,
    email: `sakshi${randomNumber}@gmail.com`,
    password: "12345678"
  });

  res.json(user);

});

router.get(
"/token",

async (_,res)=>{

const accessToken =
generateAccessToken(
"123456"
);

const refreshToken =
generateRefreshToken(
"123456"
);

res.json({

accessToken,

refreshToken

});

}
);

router.get(
"/verify",

async (_,res)=>{

const token =
generateAccessToken(
"123456"
);

const payload =
verifyAccessToken(
token
);

res.json(payload);

}
);



export default router;