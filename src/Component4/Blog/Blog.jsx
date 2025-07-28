import BlogCard from "./BlogCard";
import blogImage from "/images/classic-blog-img.png";
import blogImage2 from "/images/classic-blog-img2.png";
import blogImage3 from "/images/classic-blog-img3.png";
import subtitleIcon from "/images/sub-title-icon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const blogPosts = [
  {
    id: 1,
    blogTitle: "Top 5 Eco-Innovations Changing World Right Now",
    blogDate: "03 June, 2025",
    blogImage: blogImage,
    blogUrl: "/blog_details",
    blogPostBy: "Jhon D. Alexon",
  },
  {
    id: 2,
    blogTitle: "10 Simple ways to live a more Eco friendly life",
    blogDate: "04 June, 2025",
    blogImage: blogImage2,
    blogUrl: "/blog_details",
    blogPostBy: "David M. Miller",
  },
  {
    id: 3,
    blogTitle: "Top 10 most popular tips for Recycling dirty",
    blogDate: "05 June, 2025",
    blogImage: blogImage3,
    blogUrl: "/blog_details",
    blogPostBy: "Anjelina Jholi",
  },
];

const Blog = () => {
  const settings = {
    loop: true,
    spaceBetween: 26,
    modules: [Autoplay],
    speed: 2000,
    autoplay: {
      delay: 3000, // Set delay time in milliseconds
      disableOnInteraction: false, // Keep autoplay on user interaction
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <div className="relative z-10 -mt-5">
      <section className="bg-BodyBgDark-0 py-16 md:py-20 lg:py-[120px] overflow-hidden">
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
          <div className="box-row mt-10 md:mt-[60px] 2xl:px-5 3xl:px-0">
            <Swiper {...settings}>
              {blogPosts.map((post) => (
                <SwiperSlide key={post.id} className="box">
                  <BlogCard {...post} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
