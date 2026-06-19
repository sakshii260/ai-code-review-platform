import { motion }
from "framer-motion";

import Navbar
from "../../components/layout/Navbar";

import Button
from "../../components/ui/Button";

import StatCard
from "../../components/ui/StatCard";

import FeatureCard
from "../../components/ui/FeatureCard";

function LandingPage(){

 return(

  <div

   className="

   min-h-screen

   bg-black

   text-white

   "

  >

   <Navbar />

   <section

    className="

    hero-gradient

    min-h-screen

    flex

    flex-col

    justify-center

    items-center

    text-center

    px-8

    "

   >

    <motion.h1

     initial={{
      opacity:0,
      y:40
     }}

     animate={{
      opacity:1,
      y:0
     }}

     transition={{
      duration:1
     }}

     className="

     text-7xl

     font-bold

     max-w-5xl

     "

    >

     AI Powered

     Code Reviews

    </motion.h1>

    <motion.p

     initial={{
      opacity:0
     }}

     animate={{
      opacity:1
     }}

     transition={{
      delay:0.5
     }}

     className="

     text-gray-400

     text-xl

     mt-6

     max-w-2xl

     "

    >

     Analyze repositories,
     detect issues,
     and improve code quality
     with AI.

    </motion.p>

    <div

     className="

     mt-10

     "

    >

     <Button>

      Start Reviewing

     </Button>

    </div>

   </section>

   <section

    className="

    max-w-6xl

    mx-auto

    px-8

    py-20

    grid

    md:grid-cols-3

    gap-6

    "

   >

    <StatCard

     title="Repositories"

     value="500+"

    />

    <StatCard

     title="Reviews"

     value="12K+"

    />

    <StatCard

     title="Issues Found"

     value="25K+"

    />

   </section>

   <section

    className="

    max-w-6xl

    mx-auto

    px-8

    py-20

    "

   >

    <h2

     className="

     text-5xl

     font-bold

     text-center

     mb-12

     "

    >

     Features

    </h2>

    <div

     className="

     grid

     md:grid-cols-3

     gap-6

     "

    >

     <FeatureCard

      title="AI Reviews"

      description="Automated code analysis."

     />

     <FeatureCard

      title="Repository Tracking"

      description="Manage repositories easily."

     />

     <FeatureCard

      title="Issue Detection"

      description="Find bugs instantly."

     />

    </div>

   </section>

  </div>

 );

}

export default LandingPage;