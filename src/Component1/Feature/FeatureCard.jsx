/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const FeatureCard = ({
  featureTitle,
  featureIcon,
  featureUrl,
  featureBtnIcon,
}) => {
  return (
    <div className="group rounded-[20px] px-6 sm:px-11 pt-6 sm:pt-[52px] pb-6 sm:pb-[46px] relative z-10 overflow-hidden bg-gradient-to-tl to-BoxBg2-0 from-BodyBg-0 from-30% via-BoxBg3-0">
      <div>
        {[
          { initial: "left-[12.5%]", hover: "group-hover:left-0" },
          { initial: "left-[37.5%]", hover: "group-hover:left-[25%]" },
          { initial: "left-[62.5%]", hover: "group-hover:left-1/2" },
          { initial: "left-[87.5%]", hover: "group-hover:left-[75%]" },
        ].map((pos, i) => (
          <span
            key={i}
            className={`absolute top-0 h-full w-0 transition-all duration-500 -z-10 bg-PrimaryColor-0 group-hover:w-[25%] ${pos.initial} ${pos.hover}`}
          ></span>
        ))}
      </div>
      <div className="absolute z-10 top-0 right-0">
        <div className="size-[60px] rounded-bl-[20px] bg-white inline-block relative">
          <span className="absolute -left-[30px] top-0 rotate-180 size-[30px] inline-block bg-white [clip-path:path('M0_0_Q0,30_30,30_L_0_30_Z')]"></span>
          <span className="absolute -bottom-[30px] right-0 rotate-180 size-[30px] inline-block bg-white [clip-path:path('M0_0_Q0,30_30,30_L_0_30_Z')]"></span>
        </div>
      </div>
      <div>
        <img
          src={featureIcon}
          alt="Feature Icon"
          draggable={false}
          className="w-inherit transition-all duration-500 group-hover:brightness-0 group-hover:invert group-hover:animate-wobble_vertical"
        />
      </div>
      <h5 className="font-Outfit font-medium text-[22px] sm:text-2xl lg:text-[22px] 2xl:text-[28px] 2xl:leading-[36px] pt-[24px] pr-10 sm:pr-0 text-HeadingColor-0 transition-all duration-500 group-hover:text-white max-w-[260px] w-full">
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
