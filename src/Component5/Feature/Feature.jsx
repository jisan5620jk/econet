import featureImg from "/images/feature-img.png";
import featureImg2 from "/images/feature-img2.png";
import featureImg3 from "/images/feature-img3.png";
import featureIcon from "/images/feature-icon.png";
import featureIcon2 from "/images/feature-icon2.png";
import featureIcon3 from "/images/feature-icon3.png";
import FeatureCard from "./FeatureCard";
import subtitleIcon from "/images/sub-title-icon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import FeatureNavigation from "./FeatureNavigation";
import { useRef } from "react";

const featureData = [
  {
    featureImg: featureImg,
    featureIcon: featureIcon,
    featureTitle: "Suntainable energy Environment",
    featureUrl: "/feature",
  },
  {
    featureImg: featureImg2,
    featureIcon: featureIcon2,
    featureTitle: "Environment Waste Recycling",
    featureUrl: "/feature",
  },
  {
    featureImg: featureImg3,
    featureIcon: featureIcon3,
    featureTitle: "Dirty Recycling and Tree Plantation",
    featureUrl: "/feature",
  },
  {
    featureImg: featureImg3,
    featureIcon: featureIcon3,
    featureTitle: "Dirty Recycling and Tree Plantation",
    featureUrl: "/feature",
  },
];

const Feature = () => {
  const swiperRef = useRef(null);

  const settings = {
    loop: true,
    spaceBetween: 26,
    modules: [Autoplay],
    speed: 2000,
    autoplay: {
      delay: 3000, // Set delay time in milliseconds
      disableOnInteraction: false, // Keep autoplay on user interaction
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <section className="bg-SecondaryColor-0 pt-16 md:pt-20 lg:pt-[120px] pb-28 md:pb-48 lg:pb-[170px] -mt-5">
      <div className="Container">
        <div className="flex items-center flex-wrap gap-2 md:gap-20 pt-5">
          <div>
            <h5 className="zoom-in font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
              <img src={subtitleIcon} alt="Icon" draggable={false} /> Features
            </h5>
            <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[42px] md:text-[44px] md:leading-[52px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-white mt-3.5">
              Reliable Solar Installation
              <br />
              Innovation Experience
            </h1>
          </div>
          <p className="fade-up font-NotoSans text-TextColor2-0 max-w-[395px] w-full pt-4">
            Econet is a environmental organizations maintaince dedicated to
            protecting planet through sustainable community empowerment
            moderator
          </p>
        </div>
        <div className="box-row relative z-10 pt-[140px] md:pt-[58px]">
          <Swiper
            {...settings}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {featureData.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className="box">
                  <FeatureCard {...feature} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <FeatureNavigation swiperRef={swiperRef} />
        </div>
      </div>
    </section>
  );
};

export default Feature;
