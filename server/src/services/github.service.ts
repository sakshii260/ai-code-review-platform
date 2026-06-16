import axios from "axios";

import { env }
from "../config/env";

export const getGithubAccessToken =
async (
 code:string
)=>{

 const response =
 await axios.post(

  "https://github.com/login/oauth/access_token",

  {
   client_id:
   env.GITHUB_CLIENT_ID,

   client_secret:
   env.GITHUB_CLIENT_SECRET,

   code
  },

  {
   headers:{
    Accept:"application/json"
   }
  }

 );

 return response.data.access_token;

};

export const getGithubUser =
async (
 accessToken:string
)=>{

 const response =
 await axios.get(

  "https://api.github.com/user",

  {
   headers:{
    Authorization:
    `Bearer ${accessToken}`
   }
  }

 );

 return response.data;

};