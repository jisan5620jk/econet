import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { GoArrowRight } from "react-icons/go";
import "swiper/css";
import "swiper/css/effect-fade";

import bannerStar from "/images/charity-banner-star.png";
import bannerShape from "/images/classic-leaf.png";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import BannerNavigation from "./BannerNavigation";

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      image: "/images/classic-banner-bg.jpg",
      subtitle: "Help The Humanity",
      titleLines: ["Building evergreen", "Natural humanity", "Innovate earth"],
    },
    {
      image: "/images/classic-banner-bg2.jpg",
      subtitle: "Help The Humanity",
      titleLines: ["Building evergreen", "Natural humanity", "Innovate earth"],
    },
  ];

  const swiperSettings = {
    loop: true,
    speed: 2000,
    modules: [Autoplay, EffectFade],
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: false,
    },
    onSlideChange: (swiper) => setActiveIndex(swiper.realIndex),
    onSwiper: (swiper) => setActiveIndex(swiper.realIndex),
  };

  return (
    <section className="relative z-30 overflow-hidden">
      <Swiper {...swiperSettings}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-cover bg-no-repeat bg-left xl:bg-center relative z-10 overflow-hidden pt-[100px]"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="relative overflow-hidden 2xl:px-5 3xl:px-0 pt-24 sm:pt-20 md:pt-40 2xl:pt-[120px] pb-[140px]">
                <div className="Container">
                  <div className="grid grid-cols-1 xl:grid-cols-2">
                    <div>
                      {/* Animated Title */}
                      <h2 className="relative z-10 font-Outfit font-semibold text-white text-[26px] leading-[32px] sm:text-[36px] sm:leading-[42px] md:text-[56px] md:leading-[62px] lg:text-[64px] lg:leading-[68px] xl:text-[48px] xl:leading-[48px] 2xl:text-[64px] 2xl:leading-[68px] 3xl:text-[74px] 3xl:leading-[78px]">
                        {slide.titleLines.map((line, i) => (
                          <div
                            key={i}
                            className={`transition-all duration-500 ${
                              activeIndex === index
                                ? `translate-y-0 opacity-100 delay-[${
                                    300 + i * 150
                                  }ms]`
                                : "translate-y-[100px] opacity-0"
                            }`}
                          >
                            {i === slide.titleLines.length - 1 ? (
                              // highlight first word of last line
                              <>
                                <span className="text-PrimaryColor-0">
                                  {line.split(" ")[0]}
                                </span>{" "}
                                {line.split(" ").slice(1).join(" ")}
                              </>
                            ) : (
                              line
                            )}
                          </div>
                        ))}
                      </h2>
                      {/* CTA with animation */}
                      <div
                        className={`mt-6 md:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-7 transition-all duration-700 ${
                          activeIndex === index
                            ? "translate-y-0 opacity-100 delay-[550ms]"
                            : "translate-y-[100px] opacity-0"
                        }`}
                      >
                        <PrimaryButton as="link" href="/service">
                          Explore Services <GoArrowRight size={22} />
                        </PrimaryButton>
                        <div>
                          <h6 className="font-NotoSans text-[15px] text-TextColor2-0 mb-1">
                            Call Us (Toll Free)
                          </h6>
                          <a
                            href="calto:+1456678032"
                            title="+1 (456) 678 032"
                            className="font-Outfit text-[22px] font-medium text-white"
                          >
                            +1 (456) 678 032
                          </a>
                        </div>
                      </div>
                      {/* Bottom Info with animation */}
                      <div
                        className={`flex flex-wrap xl:flex-nowrap gap-5 justify-between mt-20 md:mt-[136px] xl:mt-24 2xl:mt-[156px] pt-5 border-t border-white/15 transition-all duration-700 ${
                          activeIndex === index
                            ? "translate-y-0 opacity-100 delay-[700ms]"
                            : "translate-y-[100px] opacity-0"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div>
                            <img
                              src={bannerStar}
                              alt="Banner Star"
                              draggable={false}
                            />
                          </div>
                          <h6 className="flex-1 font-Outfit text-lg text-white">
                            We’re Since{" "}
                            <span className="text-PrimaryColor-0">1998</span>
                            <br />
                            Based in USA
                          </h6>
                        </div>
                        <div>
                          <p className="font-NotoSans font-light text-white w-full max-w-[390px] xl:max-w-[300px] 2xl:max-w-[390px]">
                            Econet is a nonprofit environmental organizations
                            dedicated to protecting planet through sustainable
                            community empowerment.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div className="absolute top-5 left-0">
                  <img
                    src={bannerShape}
                    draggable={false}
                    className="animate-wiggle hidden 3xl:block"
                    style={{ animationDelay: "0.5s" }}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <BannerNavigation />
      </Swiper>
    </section>
  );
};

export default Banner;
