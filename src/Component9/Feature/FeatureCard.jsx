/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const FeatureCard = ({ featureTitle, featureIcon, featureUrl }) => {
  return (
    <div className="group flex items-center gap-7 max-w-[420px] w-full pl-[48px] pr-7 pt-14 pb-14 bg-[url(/images/charity-feature-bg.png)] bg-cover bg-center bg-no-repeat relative z-10 overflow-hidden">
      <div className="size-20 bg-PrimaryColor-0 flex justify-center items-center rounded-full transition-all duration-500 relative z-20 overflow-hidden before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor2-0 before:transition-all before:duration-500 before:-z-10 before:rotate-180 before:scale-0 group-hover:before:scale-100 group-hover:before:rotate-0">
        <img
          src={featureIcon}
          alt="Feature Icon"
          draggable={false}
          className="group-hover:animate-wobble_vertical"
        />
      </div>
      <div className="flex-1">
        <Link
          to={featureUrl}
          className="w-full font-Outfit font-medium text-[22px] sm:text-2xl lg:text-[22px] 2xl:text-[28px] 2xl:leading-[36px] text-white transition-all duration-500 hover:text-PrimaryColor-0"
        >
          {featureTitle}
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
