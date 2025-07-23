import subtitleIcon from "/images/sub-title-icon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
import TestimonialCard from "./TestimonialCard";
import testiImg from "/images/testi2-img.png";
import testiImg2 from "/images/testi2-img2.png";
import testiImg3 from "/images/testi2-img3.png";
import TestimonialNavigation from "./TestimonialNavigation";
import { Autoplay } from "swiper/modules";
import shape from "/images/why-choose2-shape4.png";

const testiData = [
  {
    image: testiImg2,
    name: "Anjelina Watson",
    role: "UI Designer",
    company: "Dream IT",
    rating: 5.0,
    review:
      "Econet is a environmental organization maintaince monetize worldwide outside the box thinking for end-to-end outsourcing. Conceptualize networks parallel",
  },
  {
    image: testiImg,
    name: "John D. Alex",
    role: "UI Designer",
    company: "Dream IT",
    rating: 5.0,
    review:
      "Econet is a environmental organization maintaince monetize worldwide outside the box thinking for end-to-end outsourcing. Conceptualize networks parallel",
  },
  {
    image: testiImg3,
    name: "Jakulin Farna",
    role: "UI Designer",
    company: "Dream IT",
    rating: 5.0,
    review:
      "Econet is a environmental organization maintaince monetize worldwide outside the box thinking for end-to-end outsourcing. Conceptualize networks parallel",
  },
  {
    image: testiImg3,
    name: "Jakulin Farna",
    role: "UI Designer",
    company: "Dream IT",
    rating: 5.0,
    review:
      "Econet is a environmental organization maintaince monetize worldwide outside the box thinking for end-to-end outsourcing. Conceptualize networks parallel",
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
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 2,
      },
    },
  };
  return (
    <section className="bg-SecondaryColor-0 py-16 md:py-20 lg:py-[120px] relative z-10 -mt-5">
      <div className="Container pt-5">
        <div className="flex flex-wrap items-center gap-4 md:gap-10 lg:gap-20 relative z-10">
          <div>
            <h5 className="zoom-in font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
              <img src={subtitleIcon} alt="Icon" draggable={false} />{" "}
              Testimonial
            </h5>
            <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[42px] md:text-[44px] md:leading-[52px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-white mt-3.5">
              Real Stories from Our
              <br />
              Real Customers
            </h1>
          </div>
          <p className="fade-up font-NotoSans text-TextColor2-0 max-w-[395px] w-full pt-4">
            Econet is a environmental organizations maintaince dedicated to
            protecting planet through sustainable community empowerment
            moderator
          </p>
        </div>
        <div className="relative z-10 pt-[140px] md:pt-[58px] pb-5">
          <div className="box-row relative z-10">
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
          <TestimonialNavigation swiperRef={swiperRef} />
        </div>
      </div>
      <div className="absolute left-14 bottom-10 hidden 3xl:block">
        <img
          src={shape}
          alt="Shape"
          draggable={false}
          className="animate-wiggle"
        />
      </div>
    </section>
  );
};

export default Testimonial;
