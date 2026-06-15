import { Router }
from "express";

import User
from "../models/User.model";

const router =
Router();

router.post(
  "/seed",

  async (_, res) => {

    const user =
    await User.create({

      username:
      "sakshi",

      email:
      "sakshi@gmail.com"

    });

    res.json(user);

  }
);

export default router;