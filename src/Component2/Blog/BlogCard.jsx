/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const BlogCard = ({
  blogImage,
  blogTag,
  blogurl,
  blogTitle,
  blogDate,
  blogBtnText,
  blogBtnIcon,
  isMain,
}) => {
  return (
    <div
      className={
        isMain
          ? ""
          : "flex flex-col sm:flex-row sm:items-center gap-8 sm:gap-3 md:gap-8"
      }
    >
      {/* Image */}
      <div
        className={
          isMain
            ? "rounded-2xl overflow-hidden relative"
            : "sm:flex-1 md:flex-none xl:flex-1 2xl:flex-none relative"
        }
      >
        <img
          src={blogImage}
          alt={blogTitle}
          draggable={false}
          className={isMain ? "w-full" : "w-full object-cover rounded-2xl"}
        />
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

      {/* Text Content */}
      <div className={isMain ? "mt-[30px]" : "flex-1"}>
        <div className="flex items-center gap-4">
          <span className="bg-PrimaryColor-0 font-Outfit text-white text-sm px-5 py-1.5 rounded-full">
            {blogTag}
          </span>
          <span className="font-NotoSans text-TextColor2-0">{blogDate}</span>
        </div>
        <div
          className={`border-b border-white border-opacity-10 ${
            isMain ? "pb-7 mb-5" : "pb-5 mb-4"
          }`}
        >
          <Link
            to={blogurl}
            className={`font-Outfit text-white inline-block mt-5 transition-all duration-500 hover:text-PrimaryColor-0 ${
              isMain
                ? "text-xl sm:text-3xl md:text-4xl xl:text-[32px] 2xl:text-4xl font-semibold md:leading-[44px] md:mr-14 lg:mr-0 xl:mr-20"
                : "text-lg sm:text-xl md:text-2xl xl:text-xl 2xl:text-2xl font-medium md:leading-[32px] mr-10 lg:mr-0"
            }`}
          >
            {blogTitle}
          </Link>
        </div>
        <Link
          to={blogurl}
          className="flex items-center font-Outfit gap-2 text-lg text-white font-medium mt-2 transition-all duration-500 hover:gap-3"
        >
          {blogBtnText}
          <span className="">{blogBtnIcon}</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
