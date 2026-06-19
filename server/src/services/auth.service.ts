import User from "../models/User.model";

import {
generateAccessToken,
generateRefreshToken,
verifyRefreshToken
} from "../utils/jwt";

interface RegisterData {
username: string;
email: string;
password: string;
}

interface LoginData {
email: string;
password: string;
}

export const registerUser = async (
data: RegisterData
) => {

const existingUser =
await User.findOne({
email: data.email
});

if (existingUser) {
throw new Error(
"User already exists"
);
}

const user =
await User.create({
username: data.username,
email: data.email,
password: data.password
});

const userId =
String(user._id);

const accessToken =
generateAccessToken(
userId
);

const refreshToken =
generateRefreshToken(
userId
);

user.refreshToken =
refreshToken;

await user.save();

return {
user,
accessToken,
refreshToken
};
};

export const loginUser = async (
data: LoginData
) => {

const user =
await User.findOne({
email: data.email
});

if (!user) {
throw new Error(
"Invalid email"
);
}


const isMatch =
await user.comparePassword(
 data.password
);

if (!isMatch) {
throw new Error(
"Invalid password"
);
}

const userId =
String(user._id);

const accessToken =
generateAccessToken(
userId
);

const refreshToken =
generateRefreshToken(
userId
);

user.refreshToken =
refreshToken;

await user.save();

return {
user,
accessToken,
refreshToken
};
};

export const getCurrentUser =
async (
userId: string
) => {

const user =
await User.findById(
userId
);

if (!user) {
throw new Error(
"User not found"
);
}

return user;
};

export const refreshAccessToken =
async (
refreshToken: string
) => {

if (!refreshToken) {
throw new Error(
"Refresh token required"
);
}

const payload =
verifyRefreshToken(
refreshToken
) as {
userId: string;
};

const user =
await User.findById(
payload.userId
);

if (!user) {
throw new Error(
"User not found"
);
}

if (
user.refreshToken !==
refreshToken
) {
throw new Error(
"Invalid refresh token"
);
}

const accessToken =
generateAccessToken(
String(user._id)
);

return {
accessToken
};
};

export const logoutUser =
async (
userId: string
) => {

const user =
await User.findById(
userId
);

if (!user) {
throw new Error(
"User not found"
);
}

user.refreshToken = "";

await user.save();

return {
message:
"Logged out successfully"
};
};