interface Props {

  title:string;

  description:string;

}

function FeatureCard({

 title,

 description

}:Props){

 return(

  <div

   className="

   glass

   p-6

   hover:scale-105

   transition-all

   duration-300

   "

  >

   <h3

    className="

    text-xl

    font-semibold

    mb-3

    "

   >

    {title}

   </h3>

   <p

    className="

    text-gray-400

    "

   >

    {description}

   </p>

  </div>

 );

}

export default FeatureCard;