import serviceImg from "/images/classic-service-img.png";
import serviceImg2 from "/images/classic-service-img2.png";
import serviceImg3 from "/images/classic-service-img3.png";
import serviceIcon from "/images/classic-service-icon.png";
import serviceIcon2 from "/images/classic-service-icon2.png";
import serviceIcon3 from "/images/classic-service-icon3.png";
import subtitleIcon from "/images/sub-title-icon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import ServiceNavigation from "./ServiceNavigation";
import { useRef } from "react";
import ServiceCard from "./ServiceCard";

const serviceData = [
  {
    serviceImg: serviceImg,
    serviceIcon: serviceIcon,
    serviceTitle: "Suntainable energy Environment",
    serviceUrl: "/service_details",
  },
  {
    serviceImg: serviceImg2,
    serviceIcon: serviceIcon2,
    serviceTitle: "Environment Waste Recycling",
    serviceUrl: "/service_details",
  },
  {
    serviceImg: serviceImg3,
    serviceIcon: serviceIcon3,
    serviceTitle: "Dirty Recycling and Tree Plantation",
    serviceUrl: "/service_details",
  },
  {
    serviceImg: serviceImg3,
    serviceIcon: serviceIcon3,
    serviceTitle: "Dirty Recycling and Tree Plantation",
    serviceUrl: "/service_details",
  },
];

const Service = () => {
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
    <section className="bg-[url(/images/classic-service-bg.png)] bg-cover bg-no-repeat bg-center pt-16 md:pt-20 lg:pt-[120px] pb-20 md:pb-28 lg:pb-[140px] -mt-5">
      <div className="Container pt-5">
        <div className="flex items-center flex-wrap gap-2 md:gap-10 xl:gap-20">
          <div>
            <h5 className="zoom-in font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
              <img src={subtitleIcon} alt="Icon" draggable={false} /> services
            </h5>
            <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[42px] md:text-[44px] md:leading-[52px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-HeadingColor-0 mt-3.5">
              Reliable Solar Installation
              <br />
              Innovation Experience
            </h1>
          </div>
          <p className="fade-up font-NotoSans text-TextColor-0 max-w-[395px] w-full pt-4">
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
            {serviceData.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="box">
                  <ServiceCard {...service} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <ServiceNavigation swiperRef={swiperRef} />
        </div>
      </div>
    </section>
  );
};

export default Service;
