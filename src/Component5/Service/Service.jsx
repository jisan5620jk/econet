import serviceImg from "/images/service2-img.png";
import serviceImg2 from "/images/service2-img2.png";
import serviceImg3 from "/images/service2-img3.png";
import serviceImg4 from "/images/service2-img4.png";
import serviceIcon from "/images/service2-icon1.png";
import serviceIcon2 from "/images/service2-icon2.png";
import serviceIcon3 from "/images/service2-icon3.png";
import serviceIcon4 from "/images/service2-icon4.png";
import subtitleIcon from "/images/sub-title-icon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ServiceNavigation from "./ServiceNavigation";
import { useRef } from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const serviceData = [
  {
    serviceImg: serviceImg,
    serviceTitle: "Turbine Installation",
    serviceDesc:
      "Environmental organizations maintainance dedicated to protecting",
    serviceIcon: serviceIcon,
    serviceUrl: "/services/turbine-installation",
    serviceBtnText: "Explore More",
    serviceBtnIcon: <GoArrowRight />,
  },
  {
    serviceImg: serviceImg2,
    serviceTitle: "Panel Installations",
    serviceDesc:
      "Environmental organizations maintainance dedicated to protecting",
    serviceIcon: serviceIcon2,
    serviceUrl: "/services/panel-installations",
    serviceBtnText: "Explore More",
    serviceBtnIcon: <GoArrowRight />,
  },
  {
    serviceImg: serviceImg3,
    serviceTitle: "Solar Panel Cleaning",
    serviceDesc:
      "Environmental organizations maintainance dedicated to protecting",
    serviceIcon: serviceIcon3,
    serviceUrl: "/services/solar-cleaning",
    serviceBtnText: "Explore More",
    serviceBtnIcon: <GoArrowRight />,
  },
  {
    serviceImg: serviceImg4,
    serviceTitle: "Wind Financing Plans",
    serviceDesc:
      "Environmental organizations maintainance dedicated to protecting",
    serviceIcon: serviceIcon4,
    serviceUrl: "/services/wind-financing",
    serviceBtnText: "Explore More",
    serviceBtnIcon: <GoArrowRight />,
  },
  {
    serviceImg: serviceImg2,
    serviceTitle: "Panel Installations",
    serviceDesc:
      "Environmental organizations maintainance dedicated to protecting",
    serviceIcon: serviceIcon2,
    serviceUrl: "/services/panel-installations",
    serviceBtnText: "Explore More",
    serviceBtnIcon: <GoArrowRight />,
  },
  {
    serviceImg: serviceImg3,
    serviceTitle: "Solar Panel Cleaning",
    serviceDesc:
      "Environmental organizations maintainance dedicated to protecting",
    serviceIcon: serviceIcon3,
    serviceUrl: "/services/solar-cleaning",
    serviceBtnText: "Explore More",
    serviceBtnIcon: <GoArrowRight />,
  },
];

const Service = () => {
  const swiperRef = useRef(null);

  const settings = {
    loop: true,
    spaceBetween: 26,
    speed: 2000,
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
      1500: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <section className="bg-SecondaryColor-0 py-16 md:py-20 lg:py-[120px] -mt-5">
      <div className="Container">
        <div className="flex items-center flex-wrap gap-4 md:gap-10 xl:gap-20 pt-5 relative z-10">
          <div>
            <h5 className="zoom-in font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
              <img src={subtitleIcon} alt="Icon" draggable={false} /> services
            </h5>
            <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[42px] md:text-[44px] md:leading-[52px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-white mt-3.5">
              Smart, Sustainable, and
              <br />
              Seamless Solar Services
            </h1>
          </div>
          <p className="fade-up font-NotoSans text-TextColor2-0 max-w-[395px] w-full pt-4">
            Econet is a environmental organizations maintaince dedicated to
            protecting planet through sustainable community empowerment
            moderator
          </p>
        </div>
      </div>
      <div className="box-row px-2 2xl:px-[120px] relative z-10 pt-[140px] md:pt-[58px]">
        <Swiper
          {...settings}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {serviceData.map((service, index) => {
            const isEven = index % 2 === 0;
            const mainColor = isEven
              ? "bg-PrimaryColor2-0"
              : "bg-PrimaryColor-0";
            const beforeColor = isEven
              ? "before:bg-PrimaryColor2-0"
              : "before:bg-PrimaryColor-0";
            const svgColor = isEven
              ? "fill-PrimaryColor2-0"
              : "fill-PrimaryColor-0";

            return (
              <SwiperSlide key={index}>
                <div className="box group p-5 bg-BodyBgDark-0 rounded-[20px] relative z-10 overflow-hidden">
                  <div className="relative z-10 rounded-[20px] overflow-hidden pb-5">
                    <div>
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 362 255"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`absolute -z-10 -top-5 right-0 transition-all duration-500 group-hover:top-1 group-hover:-right- ${svgColor}`}
                      >
                        <path d="M0 20C0 8.95431 8.9543 0 20 0H342C353.046 0 362 8.9543 362 20V234.607C362 246.544 351.611 255.823 339.749 254.48L17.7492 218.01C7.63905 216.865 0 208.312 0 198.137V20Z" />
                      </svg>
                    </div>
                    <img
                      src={service.serviceImg}
                      draggable={false}
                      alt="service Image"
                      className="w-full"
                    />
                  </div>

                  {/* Content  */}
                  <div className="pb-2 sm:pb-5 px-2 sm:px-5">
                    <div
                      className={`-mt-[74px] size-[70px] ${mainColor} flex justify-center items-center rounded-[10px] transition-all duration-500 group-hover:border-PrimaryColor-0 relative z-20 overflow-hidden before:absolute before:left-0 before:top-0 before:size-full ${beforeColor} before:transition-all before:duration-500 before:-z-10 before:rotate-180 before:scale-0 group-hover:before:scale-100 group-hover:before:rotate-6`}
                    >
                      <img
                        src={service.serviceIcon}
                        alt="service Icon"
                        draggable={false}
                        className="group-hover:animate-wobble_vertical"
                      />
                    </div>

                    <Link
                      to={service.serviceUrl}
                      className="w-full inline-block font-Outfit text-[22px] sm:text-2xl lg:text-[22px] 2xl:text-[28px] 2xl:leading-[36px] text-white mt-7"
                    >
                      {service.serviceTitle}
                    </Link>

                    <p className="font-NotoSans text-TextColor2-0 mt-3.5 mb-9">
                      {service.serviceDesc}
                    </p>

                    <Link
                      to={service.serviceUrl}
                      className={`w-full flex justify-between items-center font-Outfit px-8 py-3 rounded-full text-white border border-white border-opacity-15 transition-all duration-500 relative z-10 overflow-hidden before:absolute before:right-0 before:top-0 before:w-0 before:h-full ${beforeColor} before:transition-all before:duration-500 before:-z-10 group-hover:before:w-full group-hover:before:left-0`}
                    >
                      {service.serviceBtnText}
                      {service.serviceBtnIcon}
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <ServiceNavigation swiperRef={swiperRef} />
      </div>
    </section>
  );
};

export default Service;
