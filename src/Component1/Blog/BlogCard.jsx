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
    <div className={isMain ? "" : "flex flex-col sm:flex-row sm:items-center gap-8"}>
      {/* Image */}
      <div className={isMain ? "rounded-2xl overflow-hidden" : ""}>
        <img
          src={blogImage}
          alt={blogTitle}
          draggable={false}
          className={isMain ? "w-full" : "w-full object-cover rounded-2xl"}
        />
      </div>

      {/* Text Content */}
      <div className={isMain ? "mt-[30px]" : "flex-1"}>
        <div className="flex items-center gap-4">
          <span className="bg-PrimaryColor-0 font-Outfit text-white text-sm px-5 py-1.5 rounded-full">
            {blogTag}
          </span>
          <span className="font-NotoSans text-TextColor-0">{blogDate}</span>
        </div>
        <div
          className={`border-b border-SecondaryColor-0 border-opacity-10 ${
            isMain ? "pb-7 mb-5" : "pb-5 mb-4"
          }`}
        >
          <Link
            to={blogurl}
            className={`font-Outfit text-HeadingColor-0 inline-block mt-5 ${
              isMain
                ? "text-4xl font-semibold leading-[44px] xl:mr-20"
                : "text-2xl font-medium leading-[32px]"
            }`}
          >
            {blogTitle}
          </Link>
        </div>
        <Link
          to={blogurl}
          className="flex items-center font-Outfit gap-2 text-lg text-HeadingColor-0 font-medium mt-2 transition-all duration-500 hover:gap-3"
        >
          {blogBtnText}
          <span className="">{blogBtnIcon}</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
