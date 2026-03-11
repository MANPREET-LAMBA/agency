import Card from "./Card";

export default function Project() {

  const data = [
    {
      url: "pinec.png",
      link: "https://bridege-frontend.vercel.app/",
    },
    {
      url: "winner.png",
      link: "https://www.wiinnersgame.com/",
    },
    {
      url: "stockbazar.png",
      link: "https://stockbazar.co.in",
    },
    {
      url: "netflix.png",
      link: "https://cheery-moxie-019f06.netlify.app/",
    },
  ];

  return (
    <div id="project" className=" h-auto w-full flex flex-col lg:flex-row pt-16 lg:pt-24 bg-white">

      {/* Sticky Header */}
      <div className="w-full lg:w-[20%] h-auto lg:h-[90vh] m-4 lg:m-8 my-6 lg:my-11 rounded-xl flex items-center justify-center sticky top-0 lg:top-[5vh] bg-white z-40">

        <div className="relative flex items-center justify-center lg:pb-0 pb-5 z-40">

          

          <h1 className="  text-7xl sm:text-8xl lg:text-[158px] font-Merriweather text-orange-500 font-extrabold lg:-rotate-90 ">
            Projects
          </h1>

        </div>
      </div>

      {/* Projects Cards */}
      <div className="w-full z-20 lg:w-[70%] flex flex-col gap-y-16 sm:gap-y-24 lg:gap-y-36 justify-center items-center px-4 lg:px-10 lg:pb-20 pb-0 bg-white">

        {data.map((e, i) => (
          <Card key={i} url={e.url} linkx={e.link} />
        ))}

      </div>

    </div>
  );
}
