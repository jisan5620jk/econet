/* eslint-disable react/prop-types */

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const FeatureNavigation = ({ swiperRef }) => {
  return (
    <div className='flex justify-end items-end absolute -top-[100px] right-0'>
      <div className='flex justify-end items-center gap-3'>
        <button
          className='size-[56px] rounded-full overflow-hidden relative bg-BodyBg6-0 border border-white border-dashed border-opacity-50 text-white flex items-center text-xl hover:border-PrimaryColor-0 justify-center transition-all duration-500 z-10 after:absolute after:top-0 after:left-0 after:bg-PrimaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 after:rotate-0 hover:after:rotate-180 hover:after:scale-100'
          onClick={() => swiperRef.current?.slidePrev()} 
        >
          <BsArrowLeft />
        </button>
        <button
          className='size-[56px] rounded-full overflow-hidden relative bg-BodyBg6-0 border border-white border-dashed border-opacity-50 text-white flex items-center text-xl hover:border-PrimaryColor-0 justify-center transition-all duration-500 z-10 after:absolute after:top-0 after:left-0 after:bg-PrimaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 after:rotate-0 hover:after:rotate-180 hover:after:scale-100'
          onClick={() => swiperRef.current?.slideNext()} 
        >
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default FeatureNavigation;