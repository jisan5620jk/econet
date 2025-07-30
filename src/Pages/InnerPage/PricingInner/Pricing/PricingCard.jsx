/* eslint-disable react/prop-types */
import OnScrollCounter from "../../../../Shared/Counter/OnScrollCounter";
import PrimaryButton from "../../../../Shared/PrimaryButton/PrimaryButton";
import { GoArrowRight } from "react-icons/go";

const PricingCard = ({
  currency,
  price,
  pricingDateLine,
  pricingDesc,
  pricingTitle,
  pricingIcon,
  pricingContent1,
  pricingContent2,
  pricingContent3,
  pricingContent4,
  pricingUrl,
  pricingBtn,
  pricingShape1,
  pricingShape2,
}) => {
  return (
    <div className="group bg-BodyBg-0 rounded-[20px] relative z-10 overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:opacity-0 before:bg-SecondaryColor-0 before:rounded-xl before:-z-10 before:transition-all before:duration-500 hover:before:h-full hover:before:opacity-100 hover:before:top-0">
      <div className="absolute top-10 right-6 sm:right-10 animate-pulse -z-10 lg:hidden xl:block">
        <img src={pricingShape1} draggable="false" />
      </div>
      <div className="absolute bottom-10 right-2 animate-wiggle -z-10 lg:hidden xl:block">
        <img src={pricingShape2} draggable="false" />
      </div>
      <h4 className="font-Outfit font-medium text-lg text-PrimaryColor-0 pl-6 sm:pl-8 pr-6 sm:pr-10 py-2 bg-BodyBg-0 rounded-r-full inline-block transition-all duration-500 mt-10">
        {pricingTitle}
      </h4>
      <div className="font-Outfit flex items-baseline gap-3 px-6 sm:px-[30px] mt-6 pb-4">
        <div className="flex items-center gap-1">
          <h6 className="font-Outfit font-bold text-[50px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white">
            {currency}
          </h6>
          <div className="font-semibold text-[50px] leading-7 text-HeadingColor-0 transition-all duration-500 group-hover:text-white">
            <OnScrollCounter start={0} end={price} duration={1000} />
          </div>
        </div>
        <p className="text-TextColor-0 font-Outfit transition-all duration-500 group-hover:text-TextColor2-0">
          {pricingDateLine}
        </p>
      </div>
      <p className="font-Outfit text-TextColor-0 px-6 sm:px-[30px] transition-all duration-500 group-hover:text-TextColor2-0">
        {pricingDesc}
      </p>
      <ul>
        <li className="flex gap-2 items-center font-Outfit text-TextColor-0 transition-all duration-500 group-hover:text-white px-6 sm:px-[30px] mb-3 mt-9">
          <div className="text-[10px] text-PrimaryColor-0">{pricingIcon}</div>
          {pricingContent1}
        </li>
        <li className="flex gap-2 items-center font-Outfit text-TextColor-0 transition-all duration-500 group-hover:text-white px-6 sm:px-[30px] mb-3">
          <div className="text-[10px] text-PrimaryColor-0">{pricingIcon}</div>
          {pricingContent2}
        </li>
        <li className="flex gap-2 items-center font-Outfit text-TextColor-0 transition-all duration-500 group-hover:text-white px-6 sm:px-[30px] mb-3">
          <div className="text-[10px] text-PrimaryColor-0">{pricingIcon}</div>
          {pricingContent3}
        </li>
        <li className="flex gap-2 items-center font-Outfit text-TextColor-0 transition-all duration-500 group-hover:text-white px-6 sm:px-[30px] mb-1">
          <div className="text-[10px] text-PrimaryColor-0">{pricingIcon}</div>
          {pricingContent4}
        </li>
      </ul>
      <div className="pt-9 pb-10 flex justify-center">
        <PrimaryButton
          as="link"
          href={pricingUrl}
          className="!py-3 border border-PrimaryColor-0"
        >
          {pricingBtn} <GoArrowRight size={22} />
        </PrimaryButton>
      </div>
    </div>
  );
};

export default PricingCard;
