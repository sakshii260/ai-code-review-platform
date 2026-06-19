import { useState }
from "react";

import {
 registerRequest
}
from "../../services/auth.service";

function RegisterPage(){

 const [username,setUsername] =
 useState("");

 const [email,setEmail] =
 useState("");

 const [password,setPassword] =
 useState("");

 const handleSubmit =
 async (
  e:React.FormEvent
 )=>{

  e.preventDefault();

  try{

   await registerRequest({

    username,

    email,

    password

   });

   alert(
    "Registration Success"
   );

  }
  catch{

   alert(
    "Registration Failed"
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

     Register

    </h1>

    <input

     placeholder="Username"

     value={username}

     onChange={
      (e)=>
      setUsername(
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

     Register

    </button>

   </form>

  </div>

 );

}

export default RegisterPage;