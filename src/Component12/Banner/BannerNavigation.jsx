import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useSwiper } from "swiper/react";

const BannerNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className="w-full flex justify-center absolute z-10 px-10 top-[84%] md:top-[88%] lg:top-[67%] xl:top-[69.5%] 2xl:top-[64%] 3xl:top-1/2 lg:-translate-y-1/2">
      <div className="flex justify-between items-center gap-3 w-full">
        <button
          className="size-11 sm:size-12 md:size-[60px] rounded-full overflow-hidden relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-[6px] text-white flex items-center text-2xl hover:text-white hover:border-PrimaryColor-0 hover:border-opacity-100 justify-center transition-all duration-500 z-10 after:absolute after:top-0 after:left-0 after:bg-PrimaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 after:rotate-0 hover:after:rotate-180 hover:after:scale-100"
          onClick={() => swiper.slideNext()}
        >
          <GoArrowLeft />
        </button>
        <button
          className="size-11 sm:size-12 md:size-[60px] rounded-full overflow-hidden relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-[6px] text-white flex items-center text-2xl hover:text-white hover:border-PrimaryColor-0 hover:border-opacity-100 justify-center transition-all duration-500 z-10 after:absolute after:top-0 after:left-0 after:bg-PrimaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 after:rotate-0 hover:after:rotate-180 hover:after:scale-100"
          onClick={() => swiper.slidePrev()}
        >
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BannerNavigation;
