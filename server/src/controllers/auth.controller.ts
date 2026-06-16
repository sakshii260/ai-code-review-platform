import {
Request,
Response
} from "express";

import User from "../models/User.model";

import {
registerUser,
loginUser,
getCurrentUser,
refreshAccessToken,
logoutUser
} from "../services/auth.service";

import {
generateAccessToken
} from "../utils/jwt";

import {
getGithubAccessToken,
getGithubUser
} from "../services/github.service";

/*
Register
--------------------------------------------------------------------------
*/

export const register = async (
req: Request,
res: Response
) => {

try {

const result =
  await registerUser(
    req.body
  );

return res
  .status(201)
  .json(result);

}
catch (error) {

return res
  .status(400)
  .json({
    message:
      error instanceof Error
        ? error.message
        : "Registration failed"
  });

}

};

/*
Login
--------------------------------------------------------------------------
*/

export const login = async (
req: Request,
res: Response
) => {

try {

const result =
  await loginUser(
    req.body
  );

return res
  .status(200)
  .json(result);

}
catch (error) {

return res
  .status(400)
  .json({
    message:
      error instanceof Error
        ? error.message
        : "Login failed"
  });

}

};

/*
Current User
--------------------------------------------------------------------------
*/

export const me = async (
req: any,
res: Response
) => {

try {

const user =
  await getCurrentUser(
    String(
      req.user._id
    )
  );

return res
  .status(200)
  .json(user);

}
catch (error) {

return res
  .status(400)
  .json({
    message:
      error instanceof Error
        ? error.message
        : "Failed"
  });

}

};

/*
Refresh Token
--------------------------------------------------------------------------
*/

export const refresh = async (
req: Request,
res: Response
) => {

try {

const {
  refreshToken
} = req.body;

const result =
  await refreshAccessToken(
    refreshToken
  );

return res
  .status(200)
  .json(result);

}
catch (error) {

return res
  .status(400)
  .json({
    message:
      error instanceof Error
        ? error.message
        : "Refresh failed"
  });

}

};

/*
Logout
--------------------------------------------------------------------------
*/

export const logout = async (
req: any,
res: Response
) => {

try {

const result =
  await logoutUser(
    String(
      req.user._id
    )
  );

return res
  .status(200)
  .json(result);

}
catch (error) {

return res
  .status(400)
  .json({
    message:
      error instanceof Error
        ? error.message
        : "Logout failed"
  });

}

};

/*
GitHub Login
--------------------------------------------------------------------------
*/

export const githubLogin = (
  req: Request,
  res: Response
) => {

  const url =
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`;

  res.redirect(url);

};

/*
GitHub Callback
--------------------------------------------------------------------------
*/

export const githubCallback = async (
req: Request,
res: Response
) => {

try {

const code =
  req.query.code as string;

const accessToken =
  await getGithubAccessToken(
    code
  );

const githubUser =
  await getGithubUser(
    accessToken
  );

let user =
  await User.findOne({
    githubId:
      githubUser.id.toString()
  });

if (!user) {

  user =
    await User.create({

      githubId:
        githubUser.id.toString(),

      username:
        githubUser.login,

      email:
        githubUser.email ||
        `${githubUser.login}@github.com`,

      password:
        "github-login"

    });

}

const jwtAccessToken =
  generateAccessToken(
    String(user._id)
  );

res.redirect(
  `http://localhost:5173/oauth-success?token=${jwtAccessToken}`
);

}
catch (error) {

console.error(error);

return res
  .status(500)
  .json({
    message:
      "GitHub Login Failed"
  });

}

};