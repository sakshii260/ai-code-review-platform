import {
 Router
}
from "express";

import {

 create,

 getAll,

 getOne,

 getRepositoryReviews

}
from "../controllers/review.controller";

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
 "/:id",
 getOne
);

router.get(
 "/repository/:repositoryId",
 getRepositoryReviews
);

export default router;