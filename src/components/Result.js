import "../components/imgs/orange.png";

export default function Result() {
  return (
    <div className="flex flex-col h-auto relative w-full">

      {/* Heading */}
      <div className="w-full flex justify-center sticky top-0 py-5 bg-white z-40 px-4 text-center">
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-7xl font-bold text-orange-500">
          Result Driven Projects
        </h1>

        <h1 className="orangeimg absolute font-serif text-3xl sm:text-5xl lg:text-7xl font-bold text-orange-500">
          Result Driven Projects
        </h1>
      </div>

      {/* Main Section */}
      <div className="w-full flex flex-col lg:flex-row relative">

        {/* Left Sticky Image */}
        <div className="w-full lg:w-1/2 flex justify-center pt-10 lg:pt-24">
          <div className="w-40 sm:w-48 lg:w-[50%] h-48 sm:h-56 lg:h-[60vh] sticky lg:top-1/3">
          <img className="rounded-xl" src="result.png"/>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 py-10 px-4 lg:px-0 items-center lg:items-start">

          {/* Card */}
          <div className="w-full lg:w-3/4 borderimgorange rounded-lg p-5">
            <h1 className="text-2xl sm:text-3xl font-bold">
              The Client & The Mission
            </h1>

            <p className="text-base sm:text-lg text-justify pt-3">
              Every project begins with a story — a client with a vision and a
              problem that needs solving. The client wanted more than just a
              digital presence; they wanted an experience that truly represented
              their brand. Their mission was to build something fast, modern,
              and scalable — a place where technology and creativity could come
              together to help their business grow.
            </p>
          </div>

          <div className="w-full lg:w-3/4 borderimgorange rounded-lg p-5">
            <h1 className="text-2xl sm:text-3xl font-bold">
              The Challenge Ahead
            </h1>

            <p className="text-base sm:text-lg text-justify pt-3">
              Before stepping in, the client faced several major challenges that
              were slowing down their growth. Their existing system was outdated,
              filled with inefficiencies that frustrated users and reduced
              conversions.
            </p>
          </div>

          <div className="w-full lg:w-3/4 borderimgorange rounded-lg p-5">
            <h1 className="text-2xl sm:text-3xl font-bold">
              My Game Plan (The Solution)
            </h1>

            <p className="text-base sm:text-lg text-justify pt-3">
              To turn the situation around, a complete strategy was developed to
              rebuild the project from the ground up with clarity, precision,
              and creativity.
              <br /><br />

              <b>Tech Stack Used:</b> React, Node.js, MongoDB, Express,
              Stripe API, TailwindCSS.
              <br /><br />

              <b>Workflow:</b>
              <br />
              Discovery & Planning – Deep analysis of client goals.
              <br />
              Design Blueprint – Wireframes and user-centered layouts.
              <br />
              Development – Secure and optimized system.
              <br />
              Testing & QA – Rigorous testing to eliminate errors.
              <br />
              Deployment – Final launch and documentation.
            </p>
          </div>

          <div className="w-full lg:w-3/4 borderimgorange rounded-lg p-5">
            <h1 className="text-2xl sm:text-3xl font-bold">
              The Transformation
            </h1>

            <p className="text-base sm:text-lg text-justify pt-3">
              The transformation delivered improved performance, stronger
              reliability, and a far more engaging user journey. Page load
              times decreased dramatically and conversions increased.
            </p>
          </div>

          <div className="w-full lg:w-3/4 borderimgorange rounded-lg p-5">
            <h1 className="text-2xl sm:text-3xl font-bold">
              Why This Workflow Works
            </h1>

            <p className="text-base sm:text-lg text-justify pt-3">
              This structure tells a compelling story — from problem to solution
              to success — using an emotional yet professional tone that builds
              trust with clients.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
