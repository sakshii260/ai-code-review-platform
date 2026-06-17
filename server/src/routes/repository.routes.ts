import {
 Router
}
from "express";

import {

 create,

 getAll,

 getOne,

 getMine

}
from "../controllers/repository.controller";

import {
 authMiddleware
}
from "../middleware/auth.middleware";

const router =
Router();

router.post(
 "/",
 authMiddleware,
 create
);

router.get(
 "/",
 getAll
);

router.get(
 "/my",
 authMiddleware,
 getMine
);

router.get(
 "/:id",
 getOne
);

export default router;