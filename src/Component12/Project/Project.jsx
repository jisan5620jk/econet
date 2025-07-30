import projectImg from "/images/charity-project-img.png";
import projectImg2 from "/images/charity-project-img2.png";
import projectImg3 from "/images/charity-project-img3.png";
import projectImg4 from "/images/charity-project-img4.png";
import ProjectCard from "./ProjectCard";
import subtitleIcon from "/images/sub-title-icon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { HiMiniArrowUpRight } from "react-icons/hi2";

const projectData = [
  {
    projectImg: projectImg,
    projectIcon: <HiMiniArrowUpRight />,
    projectSubTitle: "Education",
    projectTitle: "Skill Training Employment",
    projectUrl: "/project",
  },
  {
    projectImg: projectImg2,
    projectIcon: <HiMiniArrowUpRight />,
    projectSubTitle: "Foods",
    projectTitle: "Healthy Food Suppliers",
    projectUrl: "/project",
  },
  {
    projectImg: projectImg3,
    projectIcon: <HiMiniArrowUpRight />,
    projectSubTitle: "Cherity",
    projectTitle: "Safe Shelter Rehabilitation",
    projectUrl: "/project",
  },
  {
    projectImg: projectImg4,
    projectIcon: <HiMiniArrowUpRight />,
    projectSubTitle: "Health",
    projectTitle: "Emergency Aid for Flood",
    projectUrl: "/project",
  },
  {
    projectImg: projectImg2,
    projectIcon: <HiMiniArrowUpRight />,
    projectSubTitle: "Foods",
    projectTitle: "Healthy Food Suppliers",
    projectUrl: "/project",
  },
  {
    projectImg: projectImg3,
    projectIcon: <HiMiniArrowUpRight />,
    projectSubTitle: "Cherity",
    projectTitle: "Safe Shelter Rehabilitation",
    projectUrl: "/project",
  },
];

const project = () => {
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
        slidesPerView: 1.4,
        centeredSlides: true,
      },
      992: {
        slidesPerView: 1.8,
        centeredSlides: true,
      },
      1400: {
        slidesPerView: 2,
      },
      1600: {
        slidesPerView: 2,
      },
    },
  };
  return (
    <section className="bg-SecondaryColor-0 py-16 md:py-20 lg:py-[120px] -mt-5 relative">
      <div className="Container">
        <div className="text-center pt-5">
          <h5 className="zoom-in font-Outfit sm:text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
            <img src={subtitleIcon} alt="Icon" draggable={false} /> Our Works
          </h5>
          <h1 className="font-Outfit font-semibold sm:text-[30px] sm:leading-[38px] md:text-[40px] md:leading-[48px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-white mt-3.5">
            From Vision to Reality — A Showcase
            <br />
            Of the Work {`We've`} Done
          </h1>
        </div>
        <div className="box-row relative z-10 pt-8 md:pt-[58px]">
          <Swiper {...settings} className="!overflow-visible">
            {projectData.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="box">
                  <ProjectCard {...project} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default project;
