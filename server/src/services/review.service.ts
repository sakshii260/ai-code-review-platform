import Review
from "../models/Review.model";

export const createReview =
async (
  data: any,
  userId: string
) => {

  const review =
    await Review.create({

      repository:
        data.repository,

      title:
        data.title,

      code:
        data.code,

      language:
        data.language,

      submittedBy:
        userId

    });

  return review;

};

export const getAllReviews =
async () => {

  return Review.find()

  .populate(
    "repository",
    "name"
  )

  .populate(
    "submittedBy",
    "username email"
  )

  .sort({
    createdAt: -1
  });

};

export const getReviewById =
async (
  reviewId: string
) => {

  return Review.findById(
    reviewId
  )

  .populate(
    "repository",
    "name"
  )

  .populate(
    "submittedBy",
    "username email"
  );

};

export const getReviewsByRepository =
async (
 repositoryId:string
)=>{

 return Review.find({

  repository:
  repositoryId

 })

 .sort({
  createdAt:-1
 });

};