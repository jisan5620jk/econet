/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ServiceCard = ({
  boxBg,
  serviceTitle,titlePb,
  serviceImg,
  iconTop,
  serviceUrl,
  serviceBtnIcon,
}) => {
  return (
    <div
      className={`group rounded-[20px] relative z-10 ${boxBg} before:absolute before:top-0 before:left-0 before:size-full before:bg-no-repeat before:bg-cover before:bg-top before:transition-all before:duration-500 before:ease-linear before:-z-10 hover:before:[filter:brightness(0)_saturate(100%)_invert(61%)_sepia(71%)_saturate(394%)_hue-rotate(91deg)_brightness(94%)_contrast(84%)] overflow-hidden`}
    >
      <h5 className={`font-Outfit font-medium text-xl sm:text-2xl xl:text-[22px] 2xl:text-[28px] leading-[36px] ml-10 pt-[52px] ${titlePb} mb-1 text-HeadingColor-0 transition-all duration-500 group-hover:text-white max-w-[260px] w-full`}>
        {serviceTitle}
      </h5>
      <div>
        <img
          src={serviceImg}
          alt="Service Image"
          draggable={false}
          className="w-inherit"
        />
      </div>
      <div className={`absolute ${iconTop} right-1`}>
        <Link
          to={serviceUrl}
          className="size-[54px] flex justify-center items-center font-Outfit text-HeadingColor-0 text-[28px] bg-white rounded-full transition-all duration-500 relative z-10 overflow-hidden -rotate-45 before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 before:rotate-180 before:scale-0 group-hover:before:scale-100 group-hover:before:rotate-0 group-hover:text-white"
        >
          {serviceBtnIcon}
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
