/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const FeatureCard = ({ featureTitle, featureImg, featureIcon, featureUrl }) => {
  return (
    <div className="group rounded-[20px] relative z-10 overflow-hidden">
      <div className="relative rounded-[20px] overflow-hidden">
        <div>
          {[
            { initial: "left-[12.5%]", hover: "group-hover:left-0" },
            { initial: "left-[37.5%]", hover: "group-hover:left-[25%]" },
            { initial: "left-[62.5%]", hover: "group-hover:left-1/2" },
            { initial: "left-[87.5%]", hover: "group-hover:left-[75%]" },
          ].map((pos, i) => (
            <span
              key={i}
              className={`absolute top-0 h-full w-0 transition-all duration-500 z-10 bg-PrimaryColor-0 group-hover:w-[25%] group-hover:opacity-0 ${pos.initial} ${pos.hover}`}
            ></span>
          ))}
        </div>
        <img src={featureImg} draggable={false} alt="Feature Image" className="w-full" />
      </div>
      <div className=" -mt-[94px]">
        <div className="-mt-[35px] -mb-[35px] size-[70px] ml-auto bg-PrimaryColor-0 flex justify-center items-center rounded-l-[10px] transition-all duration-500 relative z-20 overflow-hidden before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor2-0 before:transition-all before:duration-500 before:-z-10 before:rotate-180 before:scale-0 group-hover:before:scale-100 group-hover:before:rotate-0">
          <img
            src={featureIcon}
            alt="Feature Icon"
            draggable={false}
            className="w-inherit transition-all duration-500 group-hover:brightness-0 group-hover:invert group-hover:animate-wobble_vertical"
          />
        </div>
        <div className="ml-auto w-[calc(100%-20px)] sm:w-[calc(100%-40px)] bg-SecondaryColor-0 relative z-10 rounded-[20px] pl-[34px] pt-9 pb-8 overflow-hidden before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:bg-BodyBgDark2-0 before:-z-10 before:transition-all before:duration-500 group-hover:before:left-0 group-hover:before:w-full">
          <Link
            to={featureUrl}
            className="w-full font-Outfit font-medium text-[22px] sm:text-2xl lg:text-[22px] 2xl:text-[28px] 2xl:leading-[36px] text-white"
          >
            {featureTitle}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
