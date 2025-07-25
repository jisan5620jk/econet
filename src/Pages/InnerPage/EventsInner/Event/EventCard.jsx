/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import OnScrollCounter from "../../../../Shared/Counter/OnScrollCounter";

const EventCard = ({
  eventDate,
  eventMonth,
  eventYear,
  eventTitle,
  eventPlaceIcon,
  eventPlace,
  eventTime,
  eventTimeIcon,
  eventThumb,
  eventUrl,
  eventBtnText,
  eventBtnIcon,
  bgColor,
  textColor,
  hoverText,
  iconColor,
  btnColor,
}) => {
  return (
    <div
      className={`group ${bgColor} grid grid-cols-12 items-center gap-7 lg:gap-0 px-5 lg:px-0 py-5 md:py-8 rounded-[20px] relative before:absolute before:left-[19%] before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-[100px]  lg:before:bg-SecondaryColor-0before:bg-opacity-10 after:absolute after:left-[57%] after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-[100px]  lg:after:bg-SecondaryColor-0after:bg-opacity-10`}
    >
      <div className="col-span-12 sm:col-span-5 lg:col-span-2 flex items-center lg:justify-end gap-5 lg:gap-2 xl:gap-5">
        <div
          className={`${textColor} font-Outfit font-semibold text-[80px] leading-[80px] lg:text-[50px] lg:leading-[50px] xl:text-[80px] xl:leading-[80px]`}
        >
          <OnScrollCounter start={0} end={eventDate} duration={1000} />
        </div>
        <div>
          <h6 className="font-Outfit text-HeadingColor-0 font-medium uppercase">
            {eventMonth}
          </h6>
          <h6 className="font-Outfit text-HeadingColor-0 font-medium">
            {eventYear}
          </h6>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-7 lg:col-span-4 pr-10 sm:pr-0 lg:pl-10 2xl:pl-20">
        <Link
          to={eventUrl}
          className={`${hoverText} transition-all duration-500 font-Outfit font-semibold text-xl leading-7 sm:text-2xl md:text-[32px] md:leading-[42px] lg:text-2xl lg:leading-[34px] xl:text-[28px] xl:leading-[38px] 2xl:text-[30px] 2xl:leading-[40px] text-HeadingColor-0 mt-2 mb-4`}
        >
          {eventTitle}
        </Link>
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 2xl:col-span-4 flex flex-col lg:justify-center lg:mx-auto">
        <div className="flex items-center gap-2">
          <div className={`${iconColor}`}>{eventPlaceIcon}</div>
          <p className="font-NotoSans text-TextColor-0 text-[15px]">
            {eventPlace}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className={`${iconColor}`}>{eventTimeIcon}</div>
          <p className="font-NotoSans text-TextColor-0 text-[15px]">
            {eventTime}
          </p>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 2xl:col-span-2 lg:ml-auto lg:mr-5">
        <Link to={eventUrl}>
          <button
            className={`${btnColor} font-Outfit inline-flex items-center gap-2 uppercase text-sm justify-between px-5 sm:px-7 py-2 sm:py-3 border overflow-hidden rounded-full transition-all duration-500 relative z-10 before:absolute before:right-0 before:top-0 before:w-0 before:h-full before:transition-all before:duration-500 before:-z-10 group-hover:before:w-full group-hover:before:left-0 group-hover:text-white`}
          >
            {eventBtnText}
            <span className="text-xl">{eventBtnIcon}</span>
          </button>
        </Link>
      </div>
      <div className="absolute z-10 top-24 left-[56%] lg:left-[52%] xl:left-[56%] opacity-0 transition-all duration-500 lg:group-hover:opacity-100 group-hover:-top-4">
        <img
          src={eventThumb}
          draggable={false}
          alt="Event Image"
          className="rounded-[20px] rotate-12 lg:w-10/12 2xl:w-[inherit]"
        />
      </div>
    </div>
  );
};

export default EventCard;
