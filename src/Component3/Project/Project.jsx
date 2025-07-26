import subtitleIcon from "/images/sub-title-icon.png";
import shape from "/images/project-shape.png";
import projectImg from "/images/classic-project-img.png";
import projectImg2 from "/images/classic-project-img2.png";
import projectImg3 from "/images/classic-project-img3.png";
import projectImg4 from "/images/classic-project-img4.png";
import projectImg5 from "/images/classic-project-img5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    projectImg: projectImg,
    projectIcon: <HiMiniArrowUpRight />,
    projectSubTitle: "Pannels",
    projectTitle: "Suntainable Energy",
    projectUrl: "/project",
  },
  {
    projectImg: projectImg2,
    projectIcon: <HiMiniArrowUpRight />,
    projectSubTitle: "Installation",
    projectTitle: "Turbine Installations",
    projectUrl: "/project",
  },
  {
    projectImg: projectImg3,
    projectIcon: <HiMiniArrowUpRight />,
    projectSubTitle: "Planet",
    projectTitle: "Industrial Power Planet",
    projectUrl: "/project",
  },
  {
    projectImg: projectImg4,
    projectIcon: <HiMiniArrowUpRight />,
    projectSubTitle: "Pannels",
    projectTitle: "Solar Panel Cleaning",
    projectUrl: "/project",
  },
  {
    projectImg: projectImg5,
    projectIcon: <HiMiniArrowUpRight />,
    projectSubTitle: "Installation",
    projectTitle: "Turbine Installations",
    projectUrl: "/project",
  },
  {
    projectImg: projectImg2,
    projectIcon: <HiMiniArrowUpRight />,
    projectSubTitle: "Installation",
    projectTitle: "Turbine Installations",
    projectUrl: "/project",
  },
  {
    projectImg: projectImg3,
    projectIcon: <HiMiniArrowUpRight />,
    projectSubTitle: "Planet",
    projectTitle: "Industrial Power Planet",
    projectUrl: "/project",
  },
];

const Project = () => {
  const settings = {
    loop: false,
    spaceBetween: 26,
    modules: [Autoplay],
    centeredSlides: true,
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
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 2,
        centeredSlides: true,
      },
      992: {
        slidesPerView: 2.8,
        centeredSlides: true,
      },
      1400: {
        slidesPerView: 3.6,
      },
      1600: {
        slidesPerView: 3.6,
      },
    },
  };

  return (
    <div className="relative z-10 -mt-5 overflow-hidden">
      <section className="py-16 md:py-20 lg:py-[120px] relative overflow-hidden">
        <div className="fade-left absolute left-[18%] top-24">
          <img
            src={shape}
            draggable={false}
            alt="Shape"
            className="animate-swing hidden 3xl:block"
            style={{ animationDuration: "2.5s" }}
          />
        </div>
        <div className="absolute right-[18%] top-24 rotate-90">
          <img
            src={shape}
            draggable={false}
            alt="Shape"
            className="animate-swing hidden 3xl:block"
            style={{ animationDuration: "2.5s", animationDelay: "1s" }}
          />
        </div>
        <div className="Container">
          <div className="text-center pt-5">
            <h5 className="zoom-in font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
              <img src={subtitleIcon} alt="Icon" draggable={false} /> Projects
            </h5>
            <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[42px] md:text-[44px] md:leading-[52px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-HeadingColor-0 mt-3.5">
              We Bring Powerful Solution
              <br />
              Protect Environment
            </h1>
          </div>
        </div>

        <div className="box-row relative z-10 pt-[58px] pb-5">
          <Swiper {...settings}>
            {projectData.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="box">
                  <ProjectCard {...project} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Project;
