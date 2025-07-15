import { GoArrowRight } from "react-icons/go";
import BlogCard from "./BlogCard";
import blogImage from "/images/blog2-thumb.png";
import blogImage2 from "/images/blog2-thumb2.png";
import blogImage3 from "/images/blog2-thumb3.png";
import blogImage4 from "/images/blog2-thumb4.png";
import subtitleIcon from "/images/sub-title-icon.png";

const blogPosts = [
  {
    id: 1,
    blogTitle: "Top 5 Eco-Innovations Changing World Right Now",
    blogDate: "03 June, 2025",
    blogImage: blogImage,
    blogTag: "ECOLOGY",
    isMain: true,
    blogUrl: "/blog_details",
    blogBtnText: "Read More",
    blogBtnIcon: <GoArrowRight />,
  },
  {
    id: 2,
    blogTitle: "10 Simple ways to live a more Eco friendly life",
    blogDate: "04 June, 2025",
    blogImage: blogImage2,
    blogTag: "LIFESTYLE",
    blogUrl: "/blog_details",
    blogBtnText: "Read More",
    blogBtnIcon: <GoArrowRight />,
  },
  {
    id: 3,
    blogTitle: "Top 10 most popular tips for Recycling dirty",
    blogDate: "05 June, 2025",
    blogImage: blogImage3,
    blogTag: "RECYCLING",
    blogUrl: "/blog_details",
    blogBtnText: "Read More",
    blogBtnIcon: <GoArrowRight />,
  },
  {
    id: 4,
    blogTitle: "How to Install Econet apps on Android and ISO?",
    blogDate: "06 June, 2025",
    blogImage: blogImage4,
    blogTag: "TECHNOLOGY",
    blogUrl: "/blog_details",
    blogBtnText: "Read More",
    blogBtnIcon: <GoArrowRight />,
  },
];
const Blog = () => {
  return (
    <div className="px-2 sm:px-4 2xl:px-8 relative z-10 bg-SecondaryColor-0 -mt-5">
      <section className="bg-BodyBgDark-0 py-16 md:py-20 lg:py-[120px] rounded-md sm:rounded-xl md:rounded-[30px] overflow-hidden">
        <div className="Container">
          <div className="text-center">
            <h5 className="zoom-in font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
              <img src={subtitleIcon} alt="Icon" draggable={false} /> Latest
              Blogs
            </h5>
            <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[42px] md:text-[44px] md:leading-[52px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-white mt-3.5">
              Read our latest insights from
              <br />
              Update blog posts
            </h1>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-4 2xl:gap-8 mt-10 md:mt-[60px] 2xl:px-5 3xl:px-0">
            <div className="fade-left">
              {/* Main blog */}
              <BlogCard
                blogImage={blogPosts[0].blogImage}
                blogTag={blogPosts[0].blogTag}
                blogTitle={blogPosts[0].blogTitle}
                blogDate={blogPosts[0].blogDate}
                blogUrl={blogPosts[0].blogUrl}
                blogBtnText={blogPosts[0].blogBtnText}
                blogBtnIcon={blogPosts[0].blogBtnIcon}
                isMain={true}
              />
            </div>

            {/* Side blogs */}
            <div className="box-row flex flex-col gap-6">
              {blogPosts.slice(1).map((post) => (
                <div key={post.id} className="box">
                  <BlogCard
                    blogImage={post.blogImage}
                    blogTag={post.blogTag}
                    blogTitle={post.blogTitle}
                    blogDate={post.blogDate}
                    blogUrl={post.blogUrl}
                    blogBtnText={post.blogBtnText}
                    blogBtnIcon={post.blogBtnIcon}
                    isMain={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
