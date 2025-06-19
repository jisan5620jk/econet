/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const FeatureCard = ({
  boxBg,
  featureTitle,
  featureIcon,
  featureUrl,
  featureBtnIcon,
}) => {
  return (
    <div
      className={`group rounded-[20px] px-11 pt-[52px] relative z-10 ${boxBg} before:absolute before:top-0 before:left-0 before:size-full before:bg-no-repeat before:bg-cover before:bg-top before:transition-all before:duration-500 before:ease-linear before:-z-10 hover:before:[filter:brightness(0)_saturate(100%)_invert(61%)_sepia(71%)_saturate(394%)_hue-rotate(91deg)_brightness(94%)_contrast(84%)] overflow-hidden`}
    >
      <div>
        <img
          src={featureIcon}
          alt="Feature Icon"
          draggable={false}
          className="w-inherit transition-all duration-500 group-hover:brightness-0 group-hover:invert group-hover:animate-wobble_vertical"
        />
      </div>
      <h5 className="font-Outfit font-medium text-xl sm:text-2xl xl:text-[22px] 2xl:text-[28px] leading-[36px] pt-[24px] pb-[46px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white max-w-[260px] w-full">
        {featureTitle}
      </h5>
      <div className="absolute top-0 right-0">
        <Link
          to={featureUrl}
          className="size-[50px] flex justify-center items-center font-Outfit text-HeadingColor-0 text-[28px] bg-gradient-to-tl from-BodyBg-0 from-30% via-BoxBg3-0 to-BoxBg3-0 rounded-full transition-all duration-500 relative z-10 overflow-hidden -rotate-45 before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 before:rotate-180 before:scale-0 group-hover:before:scale-100 group-hover:before:rotate-0 group-hover:text-white"
        >
          {featureBtnIcon}
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
