/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import shape from "/images/classic-leaf.png";
import shape2 from "/images/leaf.png";

const BreadCrumb = ({
  breadCrumbTitle,
  breadCrumbIcon,
  url,
  breadCrumbLink,
  breadCrumbIcon2,
  breadCrumbContent,
}) => {
  return (
    <div className="px-2 md:px-4 xl:px-8 pb-2 md:pb-4 xl:pb-8 bg-BodyBg-0 rounded-b-xl sm:rounded-b-2xl md:rounded-b-3xl lg:rounded-b-[30px]">
      <div className="bg-[url('/images/breadcrumb-bg.png')] bg-no-repeat bg-cover bg-center flex items-center rounded-[20px] text-center pt-[200px] pb-[200px] relative z-10 overflow-hidden">
        <div className="absolute z-10 bg-SecondaryColor-0/30 w-full h-full"></div>
        <div className="Container relative z-20">
          <h1 className="font-Outfit font-semibold text-4xl sm:text-[46px] text-white capitalize">
            {breadCrumbTitle}
          </h1>
          <ul className="flex flex-col md:flex-row gap-2 sm:gap-4 items-center justify-center mt-8 sm:mt-7">
            <div className="flex gap-2 sm:gap-4 items-center justify-center">
              <li>
                <Link to={"/"}>
                  <button className="font-Outfit text-white flex items-center gap-2 transition-all duration-500 hover:text-PrimaryColor-0">
                    <IoHome className="text-PrimaryColor-0" size={20} />
                    Econet
                  </button>
                </Link>
              </li>
              <li>
                <div className="text-white hidden sm:block">
                  {breadCrumbIcon}
                </div>
              </li>
              <li>
                <Link to={url}>
                  <button className="font-Outfit capitalize text-white transition-all duration-500 hover:text-PrimaryColor-0">
                    {breadCrumbLink}
                  </button>
                </Link>
              </li>
            </div>
            <li className="hidden md:block">
              <div className="text-white hidden sm:block">
                {breadCrumbIcon2}
              </div>
            </li>
            <li>
              <button className="font-Outfit capitalize text-white opacity-70">
                {breadCrumbContent}
              </button>
            </li>
          </ul>
        </div>

        <div className="absolute z-20 top-5 right-0 [transform:rotateY(180deg)]">
          <img
            src={shape}
            draggable={false}
            className="animate-wiggle hidden 3xl:block"
            style={{ animationDelay: "0.5s" }}
          />
        </div>
        <div className="absolute z-20 left-[8%] top-20 -rotate-45">
          <img
            src={shape2}
            draggable={false}
            alt="Shape"
            className="animate-swing hidden 3xl:block w-64"
            style={{ animationDuration: "4s" }}
          />
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
