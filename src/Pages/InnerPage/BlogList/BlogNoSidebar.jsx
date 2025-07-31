import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import { FaAngleRight, FaArrowRightLong } from "react-icons/fa6";
import BlogCard from "./BlogCard";
import blogImage from "/images/classic-blog-img.png";
import blogImage2 from "/images/classic-blog-img2.png";
import blogImage3 from "/images/classic-blog-img3.png";
import blogImage4 from "/images/charity-classic-blog-img.png";
import blogImage5 from "/images/charity-classic-blog-img2.png";
import blogImage6 from "/images/charity-classic-blog-img3.png";
import subtitleIcon from "/images/sub-title-icon.png";
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

const BlogNoSidebar = () => {
  BoxReveal();
  ImageReveal();
  TextReveal();
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Blog No Sidebar"}
        url={"/blog"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbIcon2={<FaArrowRightLong />}
        breadCrumbLink={"Blog"}
        breadCrumbContent={"Blog No Sidebar"}
      />
      <section className="pt-[120px]">
        <div className="Container">
          <div className="text-center">
            <h5 className="zoom-in font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
              <img src={subtitleIcon} alt="Icon" draggable={false} /> Latest
              Blogs
            </h5>
            <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[42px] md:text-[44px] md:leading-[52px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-HeadingColor-0 mt-3.5">
              Read our latest insights from
              <br />
              Update blog posts
            </h1>
          </div>
          <div className="box-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {blogPosts.map((post, index) => {
              return (
                <div key={index} className="box">
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
      </section>
    </>
  );
};

export default BlogNoSidebar;
