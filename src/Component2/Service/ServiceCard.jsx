/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ServiceCard = ({
  boxBg,
  boxBg2,
  serviceTitle,
  titlePb,
  serviceImg,
  iconTop,
  serviceUrl,
  serviceBtnIcon,
}) => {
  return (
    <div className="group rounded-[20px] inline-block 2xl:block relative z-10 overflow-hidden">
      {boxBg && (
        <div className="absolute -z-10 top-0 right-0 inset-0">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 402 425"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-BodyBgDark-0 transition-all duration-500 group-hover:fill-PrimaryColor-0"
          >
            <path d="M0 20.227C0 8.71359 9.69642 -0.422315 21.1894 0.262405L312.144 17.5966C321.428 18.1498 329.106 25.0308 330.67 34.1999L335.733 63.8969C337.103 71.9335 343.214 78.3341 351.179 80.0745L386.27 87.7423C395.453 89.7491 402 97.8808 402 107.281V405C402 416.046 393.046 425 382 425H20C8.9543 425 0 416.046 0 405V20.227Z" />
          </svg>
        </div>
      )}
      {boxBg2 && (
        <div className="absolute -z-10 top-0 right-0 inset-0">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 402 425"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-BodyBgDark-0 transition-all duration-500 group-hover:fill-PrimaryColor-0"
          >
            <path d="M0 47.2288C0 36.8996 7.86575 28.2695 18.1507 27.3145L309.549 0.254611C319.959 -0.712061 329.357 6.50172 331.114 16.8076L335.733 43.8969C337.103 51.9335 343.214 58.3341 351.179 60.0745L386.27 67.7423C395.453 69.749 402 77.8807 402 87.2812V405C402 416.046 393.046 425 382 425H20C8.9543 425 0 416.046 0 405V47.2288Z" />
          </svg>
        </div>
      )}
      <h5
        className={`font-Outfit font-medium text-xl sm:text-2xl xl:text-[22px] 3xl:text-[28px] 3xl:leading-[36px] ml-4 sm:ml-10 xl:ml-5 3xl:ml-10 pt-[52px] xl:pt-[72px] 3xl:pt-[52px] ${titlePb} text-white transition-all duration-500 group-hover:text-white max-w-[190px] sm:max-w-[220px] lg:max-w-[220px] 2xl:max-w-[230px] 3xl:max-w-[260px] w-full`}
      >
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
      <div className={`absolute ${iconTop} right-0 sm:right-1 md:right-0 3xl:right-1`}>
        <Link
          to={serviceUrl}
          className="size-11 sm:size-[54px] xl:size-10 3xl:size-[54px] bg-BodyBgDark-0 flex justify-center items-center font-Outfit text-white text-[28px] rounded-full transition-all duration-500 relative z-10 overflow-hidden -rotate-45 before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 before:rotate-180 before:scale-0 group-hover:before:scale-100 group-hover:before:rotate-0 group-hover:text-white"
        >
          {serviceBtnIcon}
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
