import Button
from "../ui/Button";

function Navbar() {

  return (

    <nav

      className="

      fixed
      top-0

      w-full

      z-50

      backdrop-blur-lg

      border-b

      border-white/10

      bg-black/50

      "

    >

      <div

        className="

        max-w-7xl

        mx-auto

        px-8

        py-4

        flex

        justify-between

        items-center

        "

      >

        <h1

          className="

          text-xl

          font-bold

          text-purple-400

          "

        >

          AI Review

        </h1>

        <div

          className="

          flex

          gap-4

          "

        >

          <Button>

            Login

          </Button>

        </div>

      </div>

    </nav>

  );

}

export default Navbar;