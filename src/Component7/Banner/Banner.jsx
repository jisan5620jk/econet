import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { GoArrowRight } from "react-icons/go";
import "swiper/css";
import "swiper/css/effect-fade";
import BannerNavigation from "./BannerNavigation";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import circle from "/images/circle.png";
import aboutTeamImg from "/images/about-team-img.png";
import aboutTeamImg2 from "/images/about-team-img2.png";

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      BgImage: "/images/solar-banner-classic-bg.png",
      image: "/images/solar-banner-classic-img.png",
    },
    {
      BgImage: "/images/solar-banner-classic-bg.png",
      image: "/images/solar-banner-classic-img.png",
    },
  ];

  const settings = {
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
    <div className="relative z-10">
      <Swiper {...settings}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <section
              className="bg-cover bg-left lg:bg-center bg-no-repeat 2xl:px-5 3xl:px-0 pt-[50px] relative z-10"
              style={{ backgroundImage: `url(${slide.BgImage})` }}
            >
              <div className="Container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* === Left Content === */}
                  <div className="lg:col-span-7 2xl:pt-10">
                    {/* Title Block with Animation */}
                    <h2 className="relative z-10 font-Outfit font-semibold text-white text-2xl leading-[32px] sm:text-[44px] sm:leading-[48px] md:text-[56px] md:leading-[62px] lg:text-[64px] lg:leading-[68px] xl:text-[48px] xl:leading-[48px] 2xl:text-[64px] 2xl:leading-[68px] 3xl:text-[74px] 3xl:leading-[88px] uppercase">
                      <div
                        className={`flex items-center gap-2 md:gap-5 transition-all duration-700 ${
                          activeIndex === index
                            ? "translate-y-0 opacity-100 delay-[150ms]"
                            : "translate-y-[100px] opacity-0"
                        }`}
                      >
                        Take{" "}
                        <img
                          src="/images/solar-banner-classic-title-img.png"
                          alt="Title Image"
                          draggable={false}
                          className="rounded-full"
                        />{" "}
                        Controls
                      </div>
                      <div
                        className={`transition-all duration-700 ${
                          activeIndex === index
                            ? "translate-y-0 opacity-100 delay-[300ms]"
                            : "translate-y-[100px] opacity-0"
                        }`}
                      >
                        Solor Renewable
                      </div>
                      <div
                        className={`flex items-center gap-2 md:gap-5transition-all duration-500 ${
                          activeIndex === index
                            ? "translate-y-0 opacity-100 delay-[450ms]"
                            : "translate-y-[100px] opacity-0"
                        }`}
                      >
                        <div className="inline-block w-8 sm:w-9 md:w-[inherit]">
                          <img
                            src={circle}
                            draggable={false}
                            alt="circle"
                            className="animate-rotational"
                          />
                        </div>{" "}
                        Energy
                      </div>
                    </h2>

                    {/* Button with Animation */}
                    <div
                      className={`mt-9 transition-all duration-700 ${
                        activeIndex === index
                          ? "translate-y-0 opacity-100 delay-[600ms]"
                          : "translate-y-[100px] opacity-0"
                      }`}
                    >
                      <PrimaryButton as="link" href="/about">
                        Explore Services <GoArrowRight size={22} />
                      </PrimaryButton>
                    </div>

                    {/* Customer/Team Section with Animation */}
                    <div
                      className={`mt-24 md:mt-[112px] transition-all duration-700 ${
                        activeIndex === index
                          ? "translate-y-0 opacity-100 delay-[750ms]"
                          : "translate-y-[100px] opacity-0"
                      }`}
                    >
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
                      <h6 className="font-Outfit text-white font-light text-lg mt-4">
                        Satisfied Customers
                      </h6>
                    </div>
                  </div>

                  {/* === Right Image === */}
                  <div
                    className={`lg:col-span-5 mx-auto text-center transition-all duration-1000 ${
                      activeIndex === index
                        ? "translate-x-0 scale-100 opacity-100 delay-[300ms]"
                        : "translate-x-[150px] scale-75 opacity-0"
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt="Slide Visual"
                      className="w-full 2xl:w-[inherit] 2xl:max-w-[inherit]"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
        <BannerNavigation />
      </Swiper>
    </div>
  );
};

export default Banner;
