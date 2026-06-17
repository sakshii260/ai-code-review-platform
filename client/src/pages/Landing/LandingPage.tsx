import Button
from "../../components/ui/Button";

import GlassCard
from "../../components/ui/GlassCard";

function LandingPage() {

  return (

    <div
      className="
      min-h-screen
      bg-black
      text-white
      hero-gradient
      flex
      items-center
      justify-center
      px-8
      "
    >

      <div
        className="
        max-w-5xl
        text-center
        "
      >

        <h1
          className="
          text-7xl
          font-bold
          mb-6
          "
        >

          AI Code Review

        </h1>

        <p
          className="
          text-gray-400
          text-xl
          mb-10
          "
        >

          Review Code Faster,
          Smarter and Better
          with AI.

        </p>

        <div
          className="
          flex
          justify-center
          mb-12
          "
        >

          <Button>
            Get Started
          </Button>

        </div>

        <GlassCard>

          <h2
            className="
            text-2xl
            font-semibold
            mb-4
            "
          >

            Features

          </h2>

          <p
            className="
            text-gray-400
            "
          >

            AI Reviews,
            Repository Tracking,
            Issue Detection,
            Team Collaboration

          </p>

        </GlassCard>

      </div>

    </div>

  );

}

export default LandingPage;