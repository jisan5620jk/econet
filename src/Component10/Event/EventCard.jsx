/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import OnScrollCounter from "../../Shared/Counter/OnScrollCounter";

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
}) => {
  return (
    <div className="group">
      <div className="bg-BodyBgDark-0 grid grid-cols-12 items-center gap-7 lg:gap-0 px-5 lg:px-0 py-5 md:py-8 rounded-[20px] relative z-10 before:absolute before:left-[19%] before:top-1/2 before:-translate-y-1/2 before:w-[1px] lg:before:h-[100px] before:bg-white/10 before:transition-all before:duration-500 group-hover:before:bg-white/10 after:absolute after:left-[57%] after:top-1/2 after:-translate-y-1/2 after:w-[1px] lg:after:h-[100px] after:bg-white/10 after:transition-all after:duration-500 group-hover:after:bg-white/10 overflow-hidden">
        {/* Date */}
        <div className="col-span-12 sm:col-span-5 lg:col-span-2 flex items-center lg:justify-end gap-5 lg:gap-2 xl:gap-5">
          <div className="text-PrimaryColor-0 font-Outfit font-semibold text-[80px] leading-[80px] lg:text-[50px] lg:leading-[50px] xl:text-[80px] xl:leading-[80px] transition-all duration-500 group-hover:text-PrimaryColor2-0">
            <OnScrollCounter start={0} end={eventDate} duration={1000} />
          </div>
          <div>
            <h6 className="font-Outfit text-white font-medium uppercase transition-all duration-500 group-hover:text-TextColor2-0">
              {eventMonth}
            </h6>
            <h6 className="font-Outfit text-white font-medium transition-all duration-500 group-hover:text-TextColor2-0">
              {eventYear}
            </h6>
          </div>
        </div>

        {/* Title */}
        <div className="col-span-12 sm:col-span-7 lg:col-span-4 pr-10 sm:pr-0 lg:pl-10 2xl:pl-20">
          <Link
            to={eventUrl}
            className="transition-all duration-500 font-Outfit text-xl leading-7 sm:text-2xl md:text-[32px] md:leading-[42px] lg:text-[24px] lg:leading-[34px] xl:text-[28px] xl:leading-[38px] 2xl:text-[30px] 2xl:leading-[40px] text-white mt-2 mb-4 group-hover:text-white"
          >
            {eventTitle}
          </Link>
        </div>

        {/* Place and Time */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 2xl:col-span-4 flex flex-col lg:justify-center lg:mx-auto">
          <div className="flex items-center gap-2">
            <div className="text-PrimaryColor-0">{eventPlaceIcon}</div>
            <p className="font-OpenSans text-TextColor2-0 text-[15px]">
              {eventPlace}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-PrimaryColor-0">{eventTimeIcon}</div>
            <p className="font-OpenSans text-TextColor2-0 text-[15px]">
              {eventTime}
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 2xl:col-span-2 lg:ml-auto lg:mr-5">
          <Link to={eventUrl}>
            <button className="text-white font-Outfit inline-flex items-center gap-2 uppercase text-sm justify-between px-5 sm:px-7 py-2 sm:py-3 border border-white/10 overflow-hidden rounded-full transition-all duration-500 relative z-10 before:absolute before:right-0 before:top-0 before:w-0 before:h-full before:transition-all before:duration-500 before:bg-PrimaryColor2-0 before:-z-10 group-hover:before:w-full group-hover:before:left-0 group-hover:text-white">
              {eventBtnText}
              <span className="text-xl">{eventBtnIcon}</span>
            </button>
          </Link>
        </div>
      </div>
      {/* Hover Image */}
      <div className="absolute z-20 top-24 left-[56%] lg:left-[52%] xl:left-[56%] opacity-0 transition-all duration-500 invisible lg:group-hover:visible lg:group-hover:opacity-100 group-hover:-top-4">
        <img
          src={eventThumb}
          draggable={false}
          alt="Event Image"
          className="lg:w-10/12 2xl:w-[inherit]"
        />
      </div>
    </div>
  );
};

export default EventCard;
