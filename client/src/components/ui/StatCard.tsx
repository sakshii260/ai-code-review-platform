interface Props {

  title:string;

  value:string;

}

function StatCard({

  title,

  value

}:Props){

  return(

    <div

      className="

      glass

      p-6

      text-center

      "

    >

      <h2

        className="

        text-4xl

        font-bold

        text-purple-400

        "

      >

        {value}

      </h2>

      <p

        className="

        text-gray-400

        mt-2

        "

      >

        {title}

      </p>

    </div>

  );

}

export default StatCard;