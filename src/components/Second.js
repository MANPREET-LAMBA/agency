import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Second() {
  gsap.registerPlugin(ScrollTrigger);

  const box1 = useRef();
  const box2 = useRef();

  useEffect(() => {
    gsap.to(box1.current, {
      x: -500,
      duration: 2,
      scrollTrigger: {
        trigger: box1.current,
        start: "top 80%",
        scrub: true,
        
      },
    });

    gsap.to(box2.current, {
      x: 500,
      duration: 2,
      scrollTrigger: {
        trigger: box2.current,
        start: "top 80%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="relative pt-20  sm:pt-28 lg:pt-36 text-white ">

      {/* Top Row */}
      <div className="flex absolute w-[200%] lg:w-160p z-30 -left-10 sm:-left-20 lg:-left-36 font-serif 
      bottom-2 text-lg sm:text-lg lg:text-3xl font-semibold 
      py-2 h-12 sm:h-14 lg:h-16 items-center text-white bg-orange-500 rotate-12
      lg:rotate-6 gap-6 sm:gap-10 lg:gap-16 shadow-2xl shadow-black/75">

        <div ref={box1} className="flex items-center gap-6 sm:gap-10 lg:gap-16">
          <div>Figma</div>
          <div>Capcut</div>
          <div>React</div>
          <div>Node</div>
          <div>Javascript</div>
          <div>Tailwind</div>
          <div>HTML</div>
          <div>CSS</div>
          <div>Mongoose</div>
          
          <div>Figma</div>
          <div>Capcut</div>
          <div>React</div>
          <div>Node</div>
          <div>E-commerce</div>
          <div>React</div>
          <div>Node</div>
          <div>Javascript</div>
          <div>Tailwind</div>
          <div>HTML</div>
          <div>CSS</div>
          <div>Mongoose</div>
          
          <div>Figma</div>
          <div>Capcut</div>
          <div>React</div>
          <div>Node</div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex absolute w-[400%] lg:w-160p font-serif top-2 lg:top-0
      text-lg sm:text-2xl lg:text-3xl bottom-10 sm:bottom-12 
      -left-[200%] sm:-left-[205%] lg:-left-[30%] font-semibold 
      py-2 h-12 sm:h-14 lg:h-16 items-center text-white 
      bg-orange-500 -rotate-6 lg:-rotate-3 gap-6 sm:gap-10 lg:gap-16 shadow-2xl shadow-black">

        <div ref={box2} className="flex items-center gap-6 sm:gap-10 lg:gap-16">
          <div>Figma</div>
          <div>Capcut</div>
          <div>React</div>
          <div>Node</div>
          <div>Javascript</div>
          <div>Tailwind</div>
          <div>HTML</div>
          <div>CSS</div>
          <div>Mongoose</div>
          <div>Ecommerce</div>
          <div>Node</div>
          <div>Javascript</div>
          <div>Tailwind</div>
          <div>HTML</div>
          <div>React</div>
          <div>Node</div>
          <div>Javascript</div>
          <div>Tailwind</div>
          <div>HTML</div>
          <div>CSS</div>
          <div>Mongoose</div>
          
          <div>Figma</div>
          <div>Capcut</div>
          <div>React</div>
          <div>Node</div>
        </div>

      </div>
    </div>
  );
}

export default Second;
