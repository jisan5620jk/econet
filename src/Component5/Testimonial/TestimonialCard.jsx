/* eslint-disable react/prop-types */
import { FaCircle } from "react-icons/fa";

const TestimonialCard = ({
  testiImg,
  testiSubTitle,
  testiTitle,
  testiRatingIcon,
  testiName,
  testiProfile,
  testiDesignation,
  testiDesc,
  isActive,
}) => {
  return (
    <div className="flex items-end justify-between flex-col lg:flex-row gap-7 pb-24 lg:pb-0">
      <div>
        <img
          src={testiImg}
          draggable={false}
          alt="Testimonial Image"
          className={`transition-all duration-500 ${
            isActive
              ? "translate-y-0 opacity-100 delay-[500ms]"
              : "translate-y-[100px] opacity-0"
          }`}
        />
      </div>
      <div className="group relative max-w-[670px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[670px] w-full transition-all duration-500 pb-1">
        <div className="bg-PrimaryColor-0 bg-opacity-[.07] px-4 sm:px-9 lg:px-4 xl:px-9 2xl:px-10 pt-4 sm:pt-10 lg:pt-4 xl:pt-12 pb-5 sm:pb-10 lg:pb-5 xl:pb-11 rounded-2xl">
          <h5
            className={`font-NotoSans bg-white bg-opacity-30 pl-4 pr-5 py-2 transition-all duration-500 rounded-r-full border border-PrimaryColor-0 border-opacity-20 text-HeadingColor-0 text-sm font-medium inline-flex items-center gap-2 uppercase ${
              isActive
                ? "translate-y-0 opacity-100 delay-[200ms]"
                : "translate-y-[100px] opacity-0"
            }`}
          >
            <span className="text-PrimaryColor-0">
              <FaCircle size={10} />
            </span>
            {testiSubTitle}
          </h5>

          <h5
            className={`font-Outfit text-[22px] sm:text-2xl 2xl:text-2xl 3xl:text-[28px] text-HeadingColor-0 font-semibold transition-all duration-500 mb-2 mt-6 ${
              isActive
                ? "translate-y-0 opacity-100 delay-[400ms]"
                : "translate-y-[100px] opacity-0"
            }`}
          >
            {testiTitle}
          </h5>

          <ul
            className={`flex items-center gap-1 mt-9 mb-6 transition-all duration-500 ${
              isActive
                ? "translate-y-0 opacity-100 delay-[600ms]"
                : "translate-y-[100px] opacity-0"
            }`}
          >
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <li key={i} className="text-PrimaryColor-0 text-[22px]">
                  {testiRatingIcon}
                </li>
              ))}
          </ul>

          <p
            className={`font-NotoSans text-TextColor2-0 leading-8 sm:text-[17px] transition-all duration-500 ${
              isActive
                ? "translate-y-0 opacity-100 delay-[800ms]"
                : "translate-y-[100px] opacity-0"
            }`}
          >
            {testiDesc}
          </p>
        </div>

        <div
          className={`flex items-center justify-between pt-[30px] transition-all duration-500 ${
            isActive
              ? "translate-y-0 opacity-100 delay-[1000ms]"
              : "translate-y-[100px] opacity-0"
          }`}
        >
          <div className="flex items-center gap-2 sm:gap-6">
            <div>
              <img src={testiProfile} draggable={false} alt="User Image" />
            </div>
            <div>
              <h5 className="font-Outfit font-semibold text-HeadingColor-0 text-[22px] sm:text-2xl">
                {testiName}
              </h5>
              <p className="font-NotoSans text-TextColor2-0 flex items-center gap-3 mt-1">
                <span className="text-PrimaryColor-0">
                  <FaCircle size={8} />
                </span>
                {testiDesignation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
