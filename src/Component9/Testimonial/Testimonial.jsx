import subtitleIcon from "/images/sub-title-icon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
import TestimonialCard from "./TestimonialCard";
import testiImg from "/images/testi2-img.png";
import testiImg2 from "/images/testi2-img2.png";
import testiImg3 from "/images/testi2-img3.png";
import { Autoplay } from "swiper/modules";
import shape from "/images/charity-testi-shape.png";
import shape2 from "/images/charity-testi-shape2.png";

const testiData = [
  {
    image: testiImg2,
    name: "Anjelina Watson",
    role: "UI Designer",
    company: "Dream IT",
    rating: 5.0,
    review:
      "Econet is a environmental organization maintaince dedicated to protecting planet through...",
  },
  {
    image: testiImg,
    name: "John D. Alex",
    role: "UI Designer",
    company: "Dream IT",
    rating: 5.0,
    review:
      "Econet is a environmental organization maintaince dedicated to protecting planet through...",
  },
  {
    image: testiImg3,
    name: "Jakulin Farna",
    role: "UI Designer",
    company: "Dream IT",
    rating: 5.0,
    review:
      "Econet is a environmental organization maintaince dedicated to protecting planet through...",
  },
  {
    image: testiImg3,
    name: "Jakulin Farna",
    role: "UI Designer",
    company: "Dream IT",
    rating: 5.0,
    review:
      "Econet is a environmental organization maintaince dedicated to protecting planet through...",
  },
];

const Testimonial = () => {
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
        slidesPerView: 2.5,
      },
      1400: {
        slidesPerView: 2.9,
      },
    },
  };
  return (
    <section className="bg-[url(/images/charity-testi-bg.png)] bg-cover bg-no-repeat bg-center relative z-30 pt-20 md:pt-24 lg:pt-[160px] pb-36 md:pb-52 lg:pb-[310px] -mt-5">
      <div className="Container">
        <div className="text-center">
          <h5 className="zoom-in font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center justify-center gap-2 border border-PrimaryColor-0 rounded-full">
            <img src={subtitleIcon} alt="Icon" draggable={false} /> Testimonial
          </h5>
          <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[42px] md:text-[44px] md:leading-[52px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-white mt-3.5">
            Real Clients Testimonial About
            <br />
            Econet Services
          </h1>
        </div>
      </div>
      <div className="relative z-10 pt-9 md:pt-[58px]">
        <div className="box-row relative z-10 ml-2 lg:ml-8 3xl:ml-[292px]">
          <Swiper
            {...settings}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {testiData.map((service, index) => {
              return (
                <SwiperSlide key={index} className="box">
                  <TestimonialCard {...service} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="absolute -z-10 top-[20%] left-[19%] hidden 3xl:block">
        <img
          src={shape}
          alt="Image Shape"
          draggable={false}
          className="animate-dance2"
          style={{ animationDuration: "4.5s" }}
        />
      </div>
      <div className="absolute -z-10 top-[15%] right-[20%] hidden 3xl:block">
        <img
          src={shape2}
          alt="Image Shape"
          draggable={false}
          className="animate-swing"
          style={{ animationDuration: "3.5s" }}
        />
      </div>
    </section>
  );
};

export default Testimonial;
