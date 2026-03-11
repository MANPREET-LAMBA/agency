import { useState, useRef } from "react";
import gsap from "gsap";
import "../index.css";

export default function Ourservices() {
  const [activeIndex, setActiveIndex] = useState(null);
  const boxesRef = useRef([]);

  const mouseHandler = (e, index) => {
    setActiveIndex(index);

    const rect = e.currentTarget.getBoundingClientRect();
    const xPos = e.clientX - rect.left;
    const box = boxesRef.current[index];

    gsap.to(box, {
      x: xPos + 20,
      duration: 0.6,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const leaveHandler = () => setActiveIndex(null);

  const titles = [
    {
      title: "WEBSITE",
      image: "website.jpg",
      type: "image",
    },
    {
      title: "VIDEO EDITING",
      src: "harry1.mp4",
      type: "video",
    },
    {
      title: "AI AGENTS",
      image: "ai.png",
      type: "image",
    },
    {
      title: "E-COMMERCE STORE",
      image: "e_commerce.jpeg",
      type: "image",
    },
  ];

  return (
    <div id="services" className="h-auto mb-14">

      {/* Heading */}
      <div className="flex justify-center pt-10 pb-7 relative text-center px-4">
        <h1 className="textimg2 absolute text-4xl sm:text-6xl lg:text-8xl font-sans font-extrabold text-black">
          Our Services
        </h1>

        <h1 className="text-orange-600 text-4xl sm:text-6xl lg:text-8xl font-sans font-extrabold">
          Our Services
        </h1>
      </div>

      {/* Services */}
      <div className="text-black h-fit borderimgtop border-t-2 pt-2">

        {titles.map((e, i) => (
          <div
            key={i}
            onMouseLeave={leaveHandler}
            className="relative flex flex-col"
          >

            {/* Service Row */}
            <div
              onMouseMove={(event) => mouseHandler(event, i)}
              className="w-full h-20 sm:h-24 lg:h-32 flex items-center font-Merriweather borderimgbottom text-2xl sm:text-4xl lg:text-6xl px-6 sm:px-10 lg:px-14"
            >
              <h1>{e.title}</h1>
            </div>

            {/* Hover Preview */}
            <div
              ref={(el) => (boxesRef.current[i] = el)}
              className={`absolute left-10 sm:left-20 lg:left-40 -top-32 sm:-top-40 lg:-top-1/2 w-36 sm:w-44 lg:w-56 z-20 transition-opacity duration-500 ${
                activeIndex === i
                  ? "opacity-90"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              {e.type === "video" ? (
                <video
                  src={e.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="rounded-lg w-full h-full object-cover shadow-2xl"
                />
              ) : (
                <img
                  src={e.image}
                  alt={e.title}
                  className="rounded-lg w-full h-full object-cover shadow-2xl"
                />
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
