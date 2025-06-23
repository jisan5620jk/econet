import { GoArrowRight } from "react-icons/go";
import BlogCard from "./BlogCard";
import blogImage from "/images/blog-thumb.png";
import blogImage2 from "/images/blog-thumb2.png";
import blogImage3 from "/images/blog-thumb3.png";
import blogImage4 from "/images/blog-thumb4.png";
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
    <div className="px-8 relative z-10 bg-BodyBg-0 -mt-5">
      <div className="absolute top-0 left-0 w-full h-[246px] inline-block bg-SecondaryColor-0 -z-10"></div>
      <section className="bg-[url('/images/project-bg.png')] bg-top bg-cover bg-no-repeat py-16 md:py-20 lg:py-[120px] rounded-b-[20px] overflow-hidden">
        <div className="Container">
          <div className="text-center">
            <h5 className="font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
              <img src={subtitleIcon} alt="Icon" draggable={false} /> Latest
              Blogs
            </h5>
            <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[50px] 2xl:leading-[58px] text-HeadingColor-0 mt-3.5">
              Read our latest insights from
              <br />
              Update blog posts
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-[60px]">
            <div>
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
            <div className="flex flex-col gap-6">
              {blogPosts.slice(1).map((post) => (
                <BlogCard
                  key={post.id}
                  blogImage={post.blogImage}
                  blogTag={post.blogTag}
                  blogTitle={post.blogTitle}
                  blogDate={post.blogDate}
                  blogUrl={post.blogUrl}
                  blogBtnText={post.blogBtnText}
                  blogBtnIcon={post.blogBtnIcon}
                  isMain={false}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
