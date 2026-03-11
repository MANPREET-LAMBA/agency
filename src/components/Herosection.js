
import "../index.css";

function Herosection() {
  return (
    <div className="w-full relative h-[90vh]   overflow-hidden">
      {/* Text */}
      <div className="h-full  w-full absolute  text-black font-extrabold z-30 flex justify-center items-center px-4">
        <h1
          className="w-full sm:w-5/6 lg:w-3/4
        text-3xl sm:text-5xl lg:text-7xl 
        font-Merriweather text-center leading-8   "
        >
          Your Vision, <br className="block sm:hidden" />
          <span className="text-orange-500 rounded-lg px-4 bg-black/50 ">
            
            Our Execution -
          </span>
          Websites, Apps, And Ads Made Simple
        </h1>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <img
          src="earth.png"
          alt="Earth"
          className="opacity-95 w-[650px] sm:w-[350px] md:w-[450px] lg:w-[550px] xl:w-[850px] h-auto"
        />
      </div>
    </div>
  );
}

export default Herosection;
