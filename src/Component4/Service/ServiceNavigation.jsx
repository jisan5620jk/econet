/* eslint-disable react/prop-types */

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const ServiceNavigation = ({ swiperRef }) => {
  return (
    <div className='flex justify-center items-center md:justify-end md:items-end absolute left-0 md:left-auto right-0 top-10 md:-top-[100px]'>
      <div className='flex justify-end items-center gap-3'>
        <button
          className='size-[56px] rounded-full overflow-hidden relative bg-BodyBg6-0 border border-SecondaryColor-0 border-dashed border-opacity-50 text-HeadingColor-0 flex items-center text-xl hover:border-PrimaryColor-0 justify-center transition-all duration-500 z-10 after:absolute after:top-0 after:left-0 after:bg-PrimaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 after:rotate-0 hover:after:rotate-180 hover:after:scale-100'
          onClick={() => swiperRef.current?.slidePrev()} 
        >
          <BsArrowLeft />
        </button>
        <button
          className='size-[56px] rounded-full overflow-hidden relative bg-BodyBg6-0 border border-SecondaryColor-0 border-dashed border-opacity-50 text-HeadingColor-0 flex items-center text-xl hover:border-PrimaryColor-0 justify-center transition-all duration-500 z-10 after:absolute after:top-0 after:left-0 after:bg-PrimaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 after:rotate-0 hover:after:rotate-180 hover:after:scale-100'
          onClick={() => swiperRef.current?.slideNext()} 
        >
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ServiceNavigation;