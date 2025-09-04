import { animated, easings, useSpring } from "@react-spring/web";
import { techstackItems } from "../lib/techstackItems";
import { useEffect, useState } from "react";

const TechStack = () => {
  const [scrollY, setScrollY] = useState(0);
  const [selectedTech, setSelectedTech] = useState(null);

  // =============================
  // INIT SELECTED TECH (default React)
  // =============================
  useEffect(() => {
    setSelectedTech(techstackItems.find((item) => item.id === "react"));
  }, []);

  // =============================
  // SCROLL TRACKER
  // =============================
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // =============================
  // ANIMATION: Tech stack container muncul saat scroll
  // =============================
  const [techStackAnimated, techStackAnimatedApi] = useSpring(() => ({
    from: { opacity: 0, transform: "translateY(100px)" },
  }));

  useEffect(() => {
    if (scrollY > 300) {
      techStackAnimatedApi.start({
        to: { opacity: 1, transform: "translateY(0px)" },
        config: { duration: 1000, easing: easings.easeInOutCubic },
      });
    }
  }, [scrollY, techStackAnimatedApi]);

  // =============================
  // ANIMATION: Banner decorative line
  // =============================
  const bannerImageAnimation = useSpring({
    from: { width: "0px" },
    to: { width: "200px" },
    config: { duration: 1000 },
    delay: 3500,
  });

  // =============================
  // ANIMATION: Selected Tech (Title, Description, Image)
  // =============================
  const [selectedTechAnimated, selectedTechAnimatedApi] = useSpring(() => ({
    from: { opacity: 0, transform: "translateY(100px)" },
    to: { opacity: 1, transform: "translateX(0px) scale(1)" },
    config: { duration: 1000 },
    delay: 500,
  }));

  // Function to trigger animation saat klik tech baru
  const handleSelectedTechAnimation = () => {
    selectedTechAnimatedApi.start({
      from: { opacity: 0, transform: "translateX(100px) scale(0.75)" },
      to: { opacity: 1, transform: "translateX(0px) scale(1)" },
      config: { duration: 1000, easing: easings.easeInOutCubic },
    });
  };

  return (
    <section className="bg-slate-50">
      <section className="container px-2 mx-auto flex items-center lg:justify-center relative h-[calc(100vh-65px)] py-[65px] overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-center gap-4 w-full h-full">
          <div className="h-1/2 flex flex-col lg:flex-row lg:items-center justify-center gap-4 lg:w-1/3">
            <animated.div
              style={techStackAnimated}
              className="flex justify-center items-center lg:hidden h-1/2"
            >
              <animated.img
                style={selectedTechAnimated}
                src={selectedTech?.src || "/react.png"}
                alt={selectedTech?.title || "React"}
                className="w-30 h-30 object-contain m-2"
              />
            </animated.div>
            {/* LEFT: Title & Description */}
            <animated.div
              style={techStackAnimated}
              className="text-center lg:text-start flex flex-col justify-center lg:h-full h-1/2"
            >
              <animated.h1
                style={selectedTechAnimated}
                className="text-4xl font-bold mb-4"
              >
                {selectedTech?.title}
              </animated.h1>
              <animated.p
                style={selectedTechAnimated}
                className="text-slate-600 text-justify font-light "
              >
                {selectedTech?.deskripsi}
              </animated.p>
            </animated.div>
          </div>

          {/* RIGHT: Tech Preview & Grid List */}
          <div className="lg:w-2/3 h-1/2 flex flex-col justify-start items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full w-full">
              {/* Main selected tech image */}
              <animated.div
                style={techStackAnimated}
                className="lg:flex justify-center items-center hidden"
              >
                <animated.img
                  style={selectedTechAnimated}
                  src={selectedTech?.src || "/react.png"}
                  alt={selectedTech?.title || "React"}
                  className="w-50 h-50 object-contain m-2"
                />
              </animated.div>

              {/* Tech list thumbnails */}
              <div className="grid grid-cols-4 gap-4">
                {techstackItems.map((item) => (
                  <animated.div
                    style={techStackAnimated}
                    key={item.id}
                    className="w-full"
                    onClick={() => {
                      handleSelectedTechAnimation();
                      setSelectedTech(item);
                    }}
                  >
                    <div
                      className={`shadow-sm rounded-lg w-full h-full transition-transform duration-500 cursor-pointer flex justify-center items-center
                      ${
                        item.id === selectedTech?.id
                          ? "bg-slate-200 transform -translate-x-20 scale-150 opacity-0 pointer-events-none"
                          : "bg-white hover:scale-110"
                      }`}
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-12 h-12 lg:w-15 lg:h-15 object-contain m-2 inline-block"
                      />
                    </div>
                  </animated.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative animated lines */}

        <div className="flex flex-col text-xl font-bold transform -rotate-90 absolute top-[100px] -left-[100px]">
          <animated.hr style={bannerImageAnimation} className="w-[200px] " />
        </div>
        <div className="flex flex-col text-xl font-bold transform -rotate-90 absolute bottom-[100px] -left-[100px] ">
          <animated.hr style={bannerImageAnimation} className="w-[200px]" />
        </div>

        <div className="absolute bottom-4 left-4 text-slate-300 select-none">
          <h1>Tech Stack | SannCode</h1>
        </div>
      </section>
    </section>
  );
};

export default TechStack;
