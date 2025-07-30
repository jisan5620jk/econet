import { Link } from "react-router-dom";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import itemthumb from "/images/classic-blog-img.png";
import itemthumb2 from "/images/classic-blog-img2.png";
import itemthumb3 from "/images/classic-blog-img3.png";
import { IoSearch } from "react-icons/io5";
import {
  FaAngleRight,
  FaArrowRightLong,
  FaRegFolderOpen,
} from "react-icons/fa6";
import BlogCard from "./BlogCard";
import blogImage from "/images/classic-blog-img.png";
import blogImage2 from "/images/classic-blog-img2.png";
import blogImage3 from "/images/classic-blog-img3.png";
import blogImage4 from "/images/charity-classic-blog-img.png";
import blogImage5 from "/images/charity-classic-blog-img2.png";
import blogImage6 from "/images/charity-classic-blog-img3.png";
import BoxReveal from "../../../Shared/BoxAnim/BoxReveal";
import ImageReveal from "../../../Shared/ImageReveal/ImageReveal";
import TextReveal from "../../../Shared/TextAnim/TextReveal";

const blogPosts = [
  {
    blogTitle: "Top 5 Eco-Innovations Changing World Right Now",
    blogDate: "03 June, 2025",
    blogImage: blogImage,
    blogUrl: "/blog_details",
    blogPostBy: "Jhon D. Alexon",
  },
  {
    blogTitle: "10 Simple ways to live a more Eco friendly life",
    blogDate: "04 June, 2025",
    blogImage: blogImage2,
    blogUrl: "/blog_details",
    blogPostBy: "David M. Miller",
  },
  {
    blogTitle: "Top 10 most popular tips for Recycling dirty",
    blogDate: "05 June, 2025",
    blogImage: blogImage3,
    blogUrl: "/blog_details",
    blogPostBy: "Anjelina Jholi",
  },
  {
    blogTitle: "Top 5 Eco-Innovations Changing World Right Now",
    blogDate: "03 June, 2025",
    blogImage: blogImage4,
    blogUrl: "/blog_details",
    blogPostBy: "Jhon D. Alexon",
  },
  {
    blogTitle: "10 Simple ways to live a more Eco friendly life",
    blogDate: "04 June, 2025",
    blogImage: blogImage5,
    blogUrl: "/blog_details",
    blogPostBy: "David M. Miller",
  },
  {
    blogTitle: "Top 10 most popular tips for Recycling dirty",
    blogDate: "05 June, 2025",
    blogImage: blogImage6,
    blogUrl: "/blog_details",
    blogPostBy: "Anjelina Jholi",
  },
];

const BlogLeftSidebar = () => {
  BoxReveal();
  ImageReveal();
  TextReveal();
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Blog Left Sidebar"}
        url={"/blog"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbIcon2={<FaArrowRightLong />}
        breadCrumbLink={"Blog"}
        breadCrumbContent={"Blog Left Sidebar"}
      />
      <section className="pt-[120px]">
        <div className="Container">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-12">
            <div className="col-span-2 lg:col-span-1">
              <div className="relative inline-block w-full mb-7 p-4 sm:p-8 lg:p-6 xl:p-8 rounded-[20px] bg-BodyBg-0">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search here..."
                  required
                  className="w-full h-[56px] p-6 rounded-2xl font-Outfit"
                />
                <button
                  type="submit"
                  className=" text-xl text-white rounded-r-2xl h-[56px] w-[56px] bg-PrimaryColor-0 transition-all duration-500 flex items-center justify-center hover:hue-rotate-[360deg] absolute right-7 top-1/2 -translate-y-1/2"
                >
                  <IoSearch />
                </button>
              </div>
              <div className="bg-BodyBg-0 rounded-[20px] px-4 sm:px-8 lg:px-6 xl:px-8 pt-7 pb-4 mb-7">
                <h4 className="font-Outfit font-medium text-2xl text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0">
                  Categories
                </h4>
                <ul className="mt-8">
                  <li>
                    <Link to={"/service_details"}>
                      <button className="w-full font-Outfit text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded-xl bg-white mb-3 overflow-hidden z-10 relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-10 before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                          Ocean Cleaning
                        </span>
                        <FaArrowRightLong className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details2"}>
                      <button className="w-full font-Outfit text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded-xl bg-white mb-3 overflow-hidden z-10 relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-10 before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                          Dust Recycling
                        </span>
                        <FaArrowRightLong className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details3"}>
                      <button className="w-full font-Outfit text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded-xl bg-white mb-3 overflow-hidden z-10 relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-10 before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                          Plant Seedlings
                        </span>
                        <FaArrowRightLong className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details4"}>
                      <button className="w-full font-Outfit text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded-xl bg-white mb-3 overflow-hidden z-10 relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-10 before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                          Renewable Energy
                        </span>
                        <FaArrowRightLong className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details5"}>
                      <button className="w-full font-Outfit text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded-xl bg-white mb-3 overflow-hidden z-10 relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-10 before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                          Environmental
                        </span>
                        <FaArrowRightLong className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details6"}>
                      <button className="w-full font-Outfit text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded-xl bg-white mb-3 overflow-hidden z-10 relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-10 before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                          Forest Cleaning
                        </span>
                        <FaArrowRightLong className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="px-4 sm:px-8 lg:px-6 xl:px-8 bg-BodyBg-0 rounded-[20px] pt-7 pb-4 mb-7">
                <h4 className="font-Outfit font-medium text-2xl text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0">
                  Popular Post
                </h4>
                <Link to={"/blog-details"}>
                  <button className="group flex gap-4 mb-6">
                    <div className="size-20">
                      <img
                        draggable="false"
                        src={itemthumb}
                        className="w-full h-full rounded-md"
                      />
                    </div>
                    <div className="flex-1 text-left">
                      <h6 className="font-Outfit font-medium text-lg lg:text-base 2xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0">
                        Dramatically Architect new model before...
                      </h6>
                      <p className="font-NotoSans text-PrimaryColor-0 text-sm mt-1">
                        01 Jan, 2025
                      </p>
                    </div>
                  </button>
                </Link>
                <Link to={"/blog_details"}>
                  <button className="group flex gap-4 my-6">
                    <div className="size-20">
                      <img
                        draggable="false"
                        src={itemthumb2}
                        className="w-full h-full rounded-md"
                      />
                    </div>
                    <div className="flex-1 text-left">
                      <h6 className="font-Outfit font-medium text-lg lg:text-base 2xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0">
                        Progressively Syndicate Vista Seamless...
                      </h6>
                      <p className="font-NotoSans text-PrimaryColor-0 text-sm mt-1">
                        16 Jan, 2025
                      </p>
                    </div>
                  </button>
                </Link>
                <Link to={"/blog_details"}>
                  <button className="group flex gap-4 my-6">
                    <div className="size-20">
                      <img
                        draggable="false"
                        src={itemthumb3}
                        className="w-full h-full rounded-md"
                      />
                    </div>
                    <div className="flex-1 text-left">
                      <h6 className="font-Outfit font-medium text-lg lg:text-base 2xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0">
                        Completely Leverage Existing Customer...
                      </h6>
                      <p className="font-NotoSans text-PrimaryColor-0 text-sm mt-1">
                        27 Jan, 2025
                      </p>
                    </div>
                  </button>
                </Link>
              </div>
              <div className="bg-BodyBg-0 rounded-[20px] px-4 sm:px-8 lg:px-6 xl:px-8 pt-7 pb-10 mb-7">
                <h4 className="font-Outfit font-medium text-2xl text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0">
                  Tags
                </h4>
                <ul className="inline-block">
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded-lg flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Outfit relative z-10 before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 hover:before:scale-100 hover:text-white">
                        Environment
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded-lg flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Outfit relative z-10 before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 hover:before:scale-100 hover:text-white">
                        Echology
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded-lg flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Outfit relative z-10 before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 hover:before:scale-100 hover:text-white">
                        Seedlings
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded-lg flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Outfit relative z-10 before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 hover:before:scale-100 hover:text-white">
                        Tree Plantation
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded-lg flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Outfit relative z-10 before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 hover:before:scale-100 hover:text-white">
                        Recycling
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded-lg flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Outfit relative z-10 before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 hover:before:scale-100 hover:text-white">
                        Cleaning
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {blogPosts.map((post, index) => {
                  return (
                    <div key={index}>
                      <BlogCard {...post} />
                    </div>
                  );
                })}
              </div>
              <ul className="flex items-center gap-2 justify-center pb-16 md:pb-20 lg:pb-[120px] pt-10 md:pt-12 lg:pt-20">
                <li>
                  <button className="h-[50px] w-[50px] font-Outfit rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center transition-all duration-500 text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-100">
                    01
                  </button>
                </li>
                <li>
                  <button className="h-[50px] w-[50px] font-Outfit rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                    02
                  </button>
                </li>
                <li>
                  <button className="h-[50px] w-[50px] font-Outfit rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                    03
                  </button>
                </li>
                <li>
                  <button className="h-[50px] w-[50px] font-Outfit rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                    <FaAngleRight />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogLeftSidebar;
