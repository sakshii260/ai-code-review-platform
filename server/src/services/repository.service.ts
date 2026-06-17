import Repository
from "../models/Repository.model";

export const createRepository =
async (
  data:any,
  ownerId:string
) => {

  const repository =
  await Repository.create({

    name:
    data.name,

    description:
    data.description,

    language:
    data.language,

    owner:
    ownerId

  });

  return repository;

};

export const getAllRepositories =
async ()=>{

  return Repository.find()

  .populate(
    "owner",
    "username email"
  )

  .sort({
    createdAt:-1
  });

};

export const getRepositoryById =
async (
  repositoryId:string
)=>{

  return Repository.findById(
    repositoryId
  )

  .populate(
    "owner",
    "username email"
  )

  .populate(
    "collaborators",
    "username email"
  );

};

export const getMyRepositories =
async (
 ownerId:string
)=>{

 return Repository.find({

  owner:ownerId

 })

 .sort({
  createdAt:-1
 });

};