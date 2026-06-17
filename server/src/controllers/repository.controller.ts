import {
 Request,
 Response
}
from "express";

import {

 createRepository,

 getAllRepositories,

 getRepositoryById,

 getMyRepositories

}
from "../services/repository.service";

export const create =
async (
 req:any,
 res:Response
)=>{

 try{

  const repository =
  await createRepository(

   req.body,

   String(
    req.user._id
   )

  );

  return res
  .status(201)
  .json(repository);

 }
 catch{

  return res
  .status(400)
  .json({

   message:
   "Repository creation failed"

  });

 }

};

export const getAll =
async (
 req:Request,
 res:Response
)=>{

 try{

  const repositories =
  await getAllRepositories();

  return res
  .status(200)
  .json(repositories);

 }
 catch{

  return res
  .status(500)
  .json({

   message:
   "Failed to fetch repositories"

  });

 }

};

export const getOne =
async (
 req:Request,
 res:Response
)=>{

 try{

  const repository =
  await getRepositoryById(
  String(req.params.id)
  );

  return res
  .status(200)
  .json(repository);

 }
 catch{

  return res
  .status(500)
  .json({

   message:
   "Repository not found"

  });

 }

};

export const getMine =
async (
 req:any,
 res:Response
)=>{

 try{

  const repositories =
  await getMyRepositories(

   String(
    req.user._id
   )

  );

  return res
  .status(200)
  .json(repositories);

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