import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import brandThumb from "/images/classic-brand-logo.png";
import brandThumb2 from "/images/classic-brand-logo2.png";
import brandThumb3 from "/images/classic-brand-logo3.png";
import brandThumb4 from "/images/classic-brand-logo4.png";
import brandThumb5 from "/images/classic-brand-logo5.png";

const Brand = () => {
  const brandLogos = [
    brandThumb,
    brandThumb2,
    brandThumb3,
    brandThumb4,
    brandThumb5,
    brandThumb3,
  ];

  const settings = {
    modules: [Autoplay],
    loop: true,
    spaceBetween: 26,
    speed: 10000,
    grabCursor: true,
    autoplay: {
      delay: 100,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: { slidesPerView: 1 },
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 4 },
      1200: { slidesPerView: 5 },
    },
  };

  return (
    <section className="bg-SecondaryColor-0 relative z-10 py-10 md:py-20 overflow-hidden">
      <div className="Container">
        <div className="box-row relative z-10">
          <Swiper {...settings}>
            {brandLogos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="box bg-BodyBgDark-0 h-[120px] w-full rounded-2xl flex items-center justify-center">
                  <img
                    src={logo}
                    alt={`Brand ${index + 1}`}
                    draggable="false"
                    className="m-auto"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Brand;
