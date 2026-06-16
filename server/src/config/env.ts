import dotenv from "dotenv";

dotenv.config();

export const env = {

PORT:
process.env.PORT || "5000",

MONGO_URI:
process.env.MONGO_URI || "",

CLIENT_URL:
process.env.CLIENT_URL || "",

JWT_ACCESS_SECRET:
process.env.JWT_ACCESS_SECRET || "",

JWT_REFRESH_SECRET:
process.env.JWT_REFRESH_SECRET || "",

ACCESS_TOKEN_EXPIRES:
process.env.ACCESS_TOKEN_EXPIRES || "15m",

REFRESH_TOKEN_EXPIRES:
process.env.REFRESH_TOKEN_EXPIRES || "7d",

GITHUB_CLIENT_ID:
  process.env.GITHUB_CLIENT_ID || "",

GITHUB_CLIENT_SECRET:
  process.env.GITHUB_CLIENT_SECRET || "",

GITHUB_CALLBACK_URL:
  process.env.GITHUB_CALLBACK_URL || ""

};
