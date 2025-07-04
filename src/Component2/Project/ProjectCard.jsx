/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ProjectCard = ({
  projectBg,
  boxPosition,
  boxCheckIcon,
  boxSubTitle,
  boxTitle,
  boxDesc,
  boxUrl,
  boxBtnText,
  boxBtnIcon,
}) => {
  return (
    <div
      className={`${projectBg} bg-cover bg-no-repeat bg-bottom px-2 sm:px-5 py-6 md:px-0 md:py-[90px] w-full rounded-[20px]`}
    >
      <div
        className={`bg-cover bg-no-repeat bg-bottom flex items-start flex-col ${boxPosition} max-w-[456px] w-full px-4 md:px-[54px] py-5 md:py-[60px] rounded-[20px] relative z-10 overflow-hidden`}
      >
        {/* Box BG SVG */}
        <div className="absolute bottom-0 left-0 -z-10">
          <svg
            width="456"
            height="442"
            viewBox="0 0 456 442"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-SecondaryColor-0"
          >
            <path
              d="M0 20C0 8.9543 8.95431 0 20 0H436C447.046 0 456 8.9543 456 20V365.171C456 376.217 447.046 385.171 436 385.171H408C396.954 385.171 388 394.126 388 405.171V422C388 433.046 379.046 442 368 442H20C8.95431 442 0 433.046 0 422V20Z"
            />
            <defs>
            </defs>
          </svg>
        </div>
        <span className="absolute top-4 md:top-8 right-8 size-10 rounded-full text-xl text-white bg-PrimaryColor-0 flex items-center justify-center">
          {boxCheckIcon}
        </span>
        <h5 className="font-Outfit font-medium text-white border border-white border-opacity-15 rounded-full px-[30px] py-1.5 inline-block">
          {boxSubTitle}
        </h5>
        <h2 className="font-Outfit font-semibold text-white text-[22px] sm:text-2xl md:text-[32px] md:leading-[40px] mt-4 mb-4">
          {boxTitle}
        </h2>
        <p className="font-NotoSans text-TextColor2-0 text-[15px] sm:text-base mb-10">
          {boxDesc}
        </p>
        <Link
          to={boxUrl}
          className="inline-flex items-center gap-2 px-5 sm:px-7 md:px-10 py-1.5 sm:py-2 md:py-3 font-Outfit text-lg text-white bg-white bg-opacity-10 rounded-full relative z-10 overflow-hidden before:absolute before:right-0 before:top-0 before:w-0 before:h-full before:opacity-0 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 hover:before:left-0 hover:before:w-full hover:before:opacity-100"
        >
          {boxBtnText}
          <span className="text-[22px]">{boxBtnIcon}</span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
