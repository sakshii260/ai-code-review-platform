import jwt from "jsonwebtoken";

import { env } from "../config/env";

export const generateAccessToken = (
userId: string
): string => {
return jwt.sign(
{ userId },
env.JWT_ACCESS_SECRET as string,
{
expiresIn: "15m"
}
);
};

export const generateRefreshToken = (
userId: string
): string => {
return jwt.sign(
{ userId },
env.JWT_REFRESH_SECRET as string,
{
expiresIn: "7d"
}
);
};

export const verifyAccessToken = (
token: string
) => {
return jwt.verify(
token,
env.JWT_ACCESS_SECRET as string
);
};

export const verifyRefreshToken = (
token: string
) => {
return jwt.verify(
token,
env.JWT_REFRESH_SECRET as string
);
};
