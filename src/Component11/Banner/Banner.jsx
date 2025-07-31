import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { GoArrowRight } from "react-icons/go";
import "swiper/css";
import "swiper/css/effect-fade";

import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import aboutTeamImg from "/images/about-team-img.png";
import aboutTeamImg2 from "/images/about-team-img2.png";
import bannerStar from "/images/charity-banner-star.png";
import BannerNavigation from "./BannerNavigation";

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      image: "/images/charity-classic-banner-bg.png",
      subtitle: "Help The Humanity",
      titleLines: ["Join the Movement", "Change the — World", "Donate Love"],
    },
    {
      image: "/images/charity-classic-banner-bg2.png",
      subtitle: "Help The Humanity",
      titleLines: ["Empower the People", "Shape the Future", "Give Hope"],
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
    <section className="bg-SecondaryColor-0 px-2 sm:px-4 2xl:px-8 relative z-30 overflow-hidden">
      <Swiper {...swiperSettings}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-cover bg-no-repeat bg-left xl:bg-center 2xl:px-5 3xl:px-0 pt-24 sm:pt-20 md:pt-40 2xl:pt-[120px] rounded-xl sm:rounded-2xl md:rounded-[30px] relative z-10 overflow-hidden"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="Container">
                <div className="pb-36 xl:pb-[124px]">
                  {/* Subtitle */}
                  <h6
                    className={`relative z-10 inline-block font-Outfit text-lg text-white py-1.5 pl-[26px] pr-[62px] bg-[url(/images/charity-banner-subtitle-bg.png)] bg-cover bg-center bg-no-repeat transition-all duration-700 ${
                      activeIndex === index
                        ? "translate-y-0 opacity-100 delay-[150ms]"
                        : "translate-y-[100px] opacity-0"
                    }`}
                  >
                    {slide.subtitle}
                  </h6>

                  {/* Title */}
                  <h2 className="relative z-10 font-Outfit font-semibold text-white text-2xl leading-[32px] sm:text-[44px] sm:leading-[48px] md:text-[56px] md:leading-[62px] lg:text-[64px] lg:leading-[68px] xl:text-[56px] xl:leading-[64px] 2xl:text-[64px] 2xl:leading-[68px] 3xl:text-[74px] 3xl:leading-[80px] mt-6">
                    {slide.titleLines.map((line, i) => (
                      <div
                        key={i}
                        className={`transition-all duration-700 ${
                          activeIndex === index
                            ? `translate-y-0 opacity-100 delay-[${
                                300 + i * 150
                              }ms]`
                            : "translate-y-[100px] opacity-0"
                        }`}
                      >
                        {line}
                      </div>
                    ))}
                  </h2>

                  {/* Button + Volunteers */}
                  <div
                    className={`flex flex-wrap xl:flex-nowrap gap-5 sm:gap-10 items-center mt-7 md:mt-[48px] transition-all duration-700 ${
                      activeIndex === index
                        ? "translate-y-0 opacity-100 delay-[750ms]"
                        : "translate-y-[100px] opacity-0"
                    }`}
                  >
                    <PrimaryButton as="link" href="/about">
                      Donate Now <GoArrowRight size={22} />
                    </PrimaryButton>

                    <div className="flex items-center gap-5">
                      <ul className="flex items-center -space-x-4">
                        <li>
                          <img
                            src={aboutTeamImg}
                            alt="About Team Image"
                            draggable={false}
                          />
                        </li>
                        <li>
                          <img
                            src={aboutTeamImg2}
                            alt="About Team Image"
                            draggable={false}
                          />
                        </li>
                        <li className="size-14 flex items-center justify-center bg-PrimaryColor2-0 rounded-full font-Outfit text-white text-lg">
                          +25
                        </li>
                      </ul>
                      <h6 className="font-Outfit text-white text-sm sm:text-lg">
                        OUR DEDICATED
                        <br />
                        VOLUNTEERS
                      </h6>
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div
                    className={`mt-16 md:mt-[120px] pt-6 flex items-center gap-4 max-w-[646px] w-full border-t border-white border-opacity-20 transition-all duration-700 ${
                      activeIndex === index
                        ? "translate-y-0 opacity-100 delay-[900ms]"
                        : "translate-y-[100px] opacity-0"
                    }`}
                  >
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
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Slider Navigation */}
        <BannerNavigation />
      </Swiper>
    </section>
  );
};

export default Banner;
