/* eslint-disable react/prop-types */

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const DonationCard = ({ image, category, title, raised, goal, color, URL }) => {
  const percent = Math.round((raised / goal) * 100);
  const progressRef = useRef(null);
  const isInView = useInView(progressRef, { once: true, amount: 0.5 });

  return (
    <div className="group bg-white rounded-xl sm:rounded-[30px] overflow-hidden w-full">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute bottom-7 left-7">
          <span className="inline-flex justify-between items-center bg-white/15 backdrop-filter backdrop-blur-md font-Outfit uppercase px-5 py-1 rounded-full text-white border border-white/30 transition-all duration-500 relative z-10 overflow-hidden group-hover:text-white group-hover:border-PrimaryColor-0 before:absolute before:right-0 before:top-0 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 group-hover:before:w-full group-hover:before:left-0">
            {category}
          </span>
        </div>
        <div>
          {[
            { initial: "left-[12.5%]", hover: "group-hover:left-0" },
            { initial: "left-[37.5%]", hover: "group-hover:left-[25%]" },
            { initial: "left-[62.5%]", hover: "group-hover:left-1/2" },
            { initial: "left-[87.5%]", hover: "group-hover:left-[75%]" },
          ].map((pos, i) => (
            <span
              key={i}
              className={`absolute top-0 h-full w-0 transition-all duration-500 bg-PrimaryColor-0 group-hover:w-[25%] group-hover:opacity-0 ${pos.initial} ${pos.hover}`}
            ></span>
          ))}
        </div>
      </div>
      <div className="px-6 sm:px-9 md:px-[42px] pt-7 sm:pt-9 pb-8 sm:pb-11">
        <Link
          to={URL}
          className="font-Outfit font-medium text-[22px] sm:text-2xl lg:text-[22px] 2xl:text-[28px] 2xl:leading-[36px] text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0"
        >
          {title}
        </Link>

        <div className="flex justify-between items-center font-Outfit font-medium text-TextColor-0 text-lg mb-2.5 mt-[22px]">
          <span className="text-HeadingColor-0">Donations</span>
          <span className="text-PrimaryColor-0">{percent}%</span>
        </div>

        <div
          ref={progressRef}
          className="w-full h-[5px] bg-PrimaryColor-0/30 rounded-full overflow-hidden mb-2.5"
        >
          <div
            className={`h-full rounded-full transition-all duration-[1800ms] ease-in-out ${color}`}
            style={{
              width: isInView ? `${percent}%` : "0%",
            }}
          ></div>
        </div>

        <div className="flex justify-between font-Outfit text-TextColor-0 font-medium mb-8">
          <span>Raised: ${raised}</span>
          <span>Goal: ${goal}</span>
        </div>

        <Link
          to={URL}
          className="w-full flex justify-between items-center font-Outfit font-medium px-8 py-3 rounded-full text-HeadingColor-0 border border-SecondaryColor-0 border-opacity-15 transition-all duration-500 relative z-10 overflow-hidden group-hover:text-white group-hover:border-PrimaryColor-0 before:absolute before:right-0 before:top-0 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 group-hover:before:w-full group-hover:before:left-0"
        >
          Donate Now <GoArrowRight className="ml-2 text-[22px]" />
        </Link>
      </div>
    </div>
  );
};

export default DonationCard;
