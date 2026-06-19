import { useState }
from "react";

import {
 loginRequest
}
from "../../services/auth.service";

import {
 useAuthStore
}
from "../../store/authStore";

function LoginPage(){

 const [email,setEmail] =
 useState("");

 const [password,setPassword] =
 useState("");

 const setToken =
 useAuthStore(
  state=>state.setToken
 );

 const handleSubmit =
 async (
  e:React.FormEvent
 )=>{

  e.preventDefault();

  try{

   const response =
   await loginRequest({

    email,

    password

   });

   setToken(

    response.data
    .accessToken

   );

   alert(
    "Login Success"
   );

  }
  catch{

   alert(
    "Login Failed"
   );

  }

 };

 return(

  <div

   className="

   min-h-screen

   bg-black

   flex

   justify-center

   items-center

   "

  >

   <form

    onSubmit={
     handleSubmit
    }

    className="

    glass

    p-8

    w-[400px]

    "

   >

    <h1

     className="

     text-3xl

     font-bold

     text-white

     mb-6

     "

    >

     Login

    </h1>

    <input

     type="email"

     placeholder="Email"

     value={email}

     onChange={
      (e)=>
      setEmail(
       e.target.value
      )
     }

     className="

     w-full

     p-3

     mb-4

     rounded-lg

     bg-zinc-900

     text-white

     "

    />

    <input

     type="password"

     placeholder="Password"

     value={password}

     onChange={
      (e)=>
      setPassword(
       e.target.value
      )
     }

     className="

     w-full

     p-3

     mb-4

     rounded-lg

     bg-zinc-900

     text-white

     "

    />

    <button

     type="submit"

     className="

     w-full

     p-3

     bg-purple-600

     rounded-lg

     "

    >

     Login

    </button>

   </form>

  </div>

 );

}

export default LoginPage;