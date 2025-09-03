import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { portofolioItems } from "../lib/portofolioItems";

const PortofolioPage = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  /**
   * ================================
   * Spring Animations
   * ================================
   */

  // Animasi geser kontainer gambar secara vertical
  const springStyle = useSpring({
    transform: `translateY(-${carouselIndex * 40}%)`,
    config: { tension: 250, friction: 25, duration: 1000 },
  });

  // Animasi teks banner (judul & deskripsi)
  const [bannerTextAnimation, api] = useSpring(() => ({
    from: { transform: "translateY(50px)", opacity: 0 },
    to: { transform: "translateY(0px)", opacity: 1 },
    config: { duration: 1000 },
    delay: 3500,
  }));

  // Animasi tombol link (Visit Website)
  const [bannerLinkButtonAnimation, buttonLinkApi] = useSpring(() => ({
    from: { width: "0px", opacity: 0 },
    to: { width: "145px", opacity: 1 },
    config: { duration: 1000 },
  }));

  // Animasi tombol navigasi (up/down)
  const bannerButtonAnimation = useSpring({
    from: { transform: "translateY(50px)", opacity: 0 },
    to: { transform: "translateY(0px)", opacity: 1 },
    config: { duration: 1000 },
    delay: 3500,
  });

  // Animasi gambar
  const bannerImageAnimation = useSpring({
    from: { width: "0px" },
    to: { width: "200px" },
    config: { duration: 1000 },
    delay: 3500,
  });

  /**
   * ================================
   * Handlers
   * ================================
   */

  // Handle animasi teks saat slide berubah
  const handleBannerTextAnimation = (direction) => {
    api.start({
      from: {
        transform: `translateY(${direction === "up" ? "-70px" : "70px"})`,
        opacity: 0,
      },
      to: { transform: "translateY(0px)", opacity: 1 },
      config: { duration: 1000 },
    });
  };

  // Handler tombol prev
  const handlePrev = (params) => {
    setCarouselIndex((prev) =>
      prev === 0 ? portofolioItems.length - 1 : prev - 1
    );
    handleBannerTextAnimation(params.direction);
    buttonLinkApi.start({
      from: { width: "0px", opacity: 0 },
      to: { width: "145px", opacity: 1 },
      config: { duration: 1000 },
    });
  };

  // Handler tombol next
  const handleNext = (params) => {
    setCarouselIndex((prev) =>
      prev === portofolioItems.length - 1 ? 0 : prev + 1
    );
    handleBannerTextAnimation(params.direction);
    buttonLinkApi.start({
      from: { width: "0px", opacity: 0 },
      to: { width: "145px", opacity: 1 },
      config: { duration: 1000 },
    });
  };

  /**
   * ================================
   * Render
   * ================================
   */

  return (
    <section className="min-h-screen container px-2 mx-auto flex flex-col justify-center relative" id="home">
      <div className="grid grid-cols-1 md:grid-cols-2 h-[calc(100vh)] gap-4 items-center">
        {/* Banner Text */}
        <animated.div
          style={bannerTextAnimation}
          className="hidden md:block text-justify space-y-4"
        >
          <h1 className="text-4xl font-semibold text-slate-700">
            {portofolioItems[carouselIndex].title}
          </h1>
          <p className="text-slate-500 font-light">
            {portofolioItems[carouselIndex].deskripsi}
          </p>

          {/* Tombol link jika ada */}
          {portofolioItems[carouselIndex].link && (
            <animated.a
              style={bannerLinkButtonAnimation}
              href={portofolioItems[carouselIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline border-none shadow-sm flex gap-2 items-center justify-center truncate hover:bg-slate-50 hover:scale-105 duration-500"
            >
              <p>Visit Website</p>
              <BiLinkExternal size={18} />
            </animated.a>
          )}
        </animated.div>

        {/* Banner Image Carousel */}
        <div className="relative h-[100vh] overflow-hidden">
          <animated.div
            className="flex flex-col h-full items-center"
            style={springStyle}
          >
            {portofolioItems.map((item, i) => {
              const isActive = i === carouselIndex;
              return (
                <div key={i}>
                  {/* Spacer awal */}
                  {i === 0 && (
                    <div className="flex-shrink-0 h-[30vh] w-screen"></div>
                  )}

                  {/* Gambar */}
                  <div className="flex-shrink-0 w-full flex h-[40vh] items-center justify-center">
                    <animated.img
                      style={bannerImageAnimation}
                      src={item.src}
                      alt={item.id}
                      className={`object-cover w-50 transition-transform duration-1200 rounded-4xl grayscale-100 ${
                        isActive
                          ? "scale-120"
                          : `scale-40 opacity-25 translate-x-70 ${
                              i > carouselIndex
                                ? "-translate-y-20"
                                : "translate-y-20"
                            }`
                      }`}
                    />
                  </div>

                  {/* Spacer akhir */}
                  {i === portofolioItems.length - 1 && (
                    <div className="flex-shrink-0 h-[30vh] w-screen"></div>
                  )}
                </div>
              );
            })}
          </animated.div>

          {/* Navigasi tombol atas-bawah */}
          <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-center gap-2 items-center">
            <animated.button
              style={bannerButtonAnimation}
              onClick={() => handleNext({ direction: "down" })}
              className="btn btn-circle border-none shadow-sm hover:bg-slate-50 hover:scale-105 duration-500"
              disabled={carouselIndex === portofolioItems.length - 1}
            >
              <BsArrowUp size={18} />
            </animated.button>
            <animated.button
              style={bannerButtonAnimation}
              onClick={() => handlePrev({ direction: "up" })}
              className="btn btn-circle border-none shadow-sm hover:bg-slate-50 hover:scale-105 duration-500"
              disabled={carouselIndex === 0}
            >
              <BsArrowDown size={18} />
            </animated.button>
          </div>
        </div>
      </div>

      <div className="absolute grid grid-cols-1 w-full h-screen top-0 left-0 place-items-center pointer-events-none select-none">
        <div className="flex flex-col text-xl font-bold transform -rotate-90 -translate-x-160 -translate-y-25">
          <animated.hr style={bannerImageAnimation} className="w-[150px] text-slate-950"/>
        </div>
        <div className="flex flex-col text-xl font-bold transform -rotate-90 -translate-x-160 translate-y-25">
          <animated.hr style={bannerImageAnimation} className="w-[200px] text-slate-950"/>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 text-slate-300 select-none">
        <h1>Portofolio Project | SannCode</h1>
      </div>
    </section>
  );
};

export default PortofolioPage;
