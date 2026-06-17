import {
  Request,
  Response
}
from "express";

import {

  createReview,

  getAllReviews,

  getReviewById,

  getReviewsByRepository

}
from "../services/review.service";

export const create =
async (
  req:any,
  res:Response
)=>{

  try{

    const review =
    await createReview(

      req.body,

      String(
        req.user._id
      )

    );

    return res
    .status(201)
    .json(review);

  }
  catch{

    return res
    .status(400)
    .json({

      message:
      "Review creation failed"

    });

  }

};

export const getAll =
async (
 req:Request,
 res:Response
)=>{

 try{

  const reviews =
  await getAllReviews();

  return res
  .status(200)
  .json(reviews);

 }
 catch{

  return res
  .status(500)
  .json({

   message:
   "Failed"

  });

 }

};

export const getOne =
async (
 req:Request,
 res:Response
)=>{

 try{

  const review =
  await getReviewById(

   String(
    req.params.id
   )

  );

  return res
  .status(200)
  .json(review);

 }
 catch{

  return res
  .status(500)
  .json({

   message:
   "Not found"

  });

 }

};

export const getRepositoryReviews =
async (
 req:Request,
 res:Response
)=>{

 try{

  const reviews =
  await getReviewsByRepository(

   String(
    req.params.repositoryId
   )

  );

  return res
  .status(200)
  .json(reviews);

 }
 catch{

  return res
  .status(500)
  .json({

   message:
   "Failed"

  });

 }

};