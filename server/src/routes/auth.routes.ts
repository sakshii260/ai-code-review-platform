import { Router }
from "express";

import {
register,
login,
me,
refresh,
logout,
githubLogin,
githubCallback
}
from "../controllers/auth.controller";

import {
  authMiddleware
}
from "../middleware/auth.middleware";

const router =
Router();

router.post(
"/register",
register
);

router.post(
"/login",
login
);

router.get(
"/me",
authMiddleware,
me
);

router.post(
"/refresh",
refresh
);

router.post(
"/logout",
authMiddleware,
logout
);

router.get(
 "/github",
 githubLogin
);

router.get(
 "/github/callback",
 githubCallback
);


export default router;
