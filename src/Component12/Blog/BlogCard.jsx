/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const BlogCard = ({ blogImage, blogUrl, blogTitle, blogDate, blogPostBy }) => {
  return (
    <div className="group">
      {/* Image */}
      <div className="overflow-hidden rounded-[10px] relative">
        <img
          src={blogImage}
          alt={blogTitle}
          draggable={false}
          className="w-full rounded-[10px] transition-all duration-500 group-hover:scale-110"
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
      <div className="pr-10 lg:pr-[74px] pt-8">
        <div className="inline-block bg-PrimaryColor-0 font-Outfit text-white text-sm px-5 py-1.5 rounded-full mb-3.5">
          {blogDate}
        </div>
        <Link
          to={blogUrl}
          className="font-Outfit text-white inline-block text-lg sm:text-xl md:text-2xl xl:text-xl 2xl:text-2xl font-medium md:leading-[32px] transition-all duration-500 hover:text-PrimaryColor-0"
        >
          {blogTitle}
        </Link>
        <h6 className="font-Outfit text-white mt-4">
          By - <span className="text-PrimaryColor-0">{blogPostBy}</span>
        </h6>
      </div>
    </div>
  );
};

export default BlogCard;
