import projectImg from "/images/project2-img.png";
import projectImg2 from "/images/project2-img2.png";
import projectImg3 from "/images/project2-img3.png";
import projectImg4 from "/images/project2-img4.png";
import shape from "/images/dot.png";
import shape2 from "/images/arrow.png";
import ProjectCard from "./ProjectCard";
import subtitleIcon from "/images/sub-title-icon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import { GoArrowRight } from "react-icons/go";

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

const project = () => {
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
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3.6,
      },
    },
  };
  return (
    <section className="bg-SecondaryColor-0 py-16 md:py-20 lg:py-[120px] -mt-5 relative">
      <div className="absolute top-[19%] right-[30%] hidden lg:block">
        <img
          src={shape}
          alt="Shape"
          draggable={false}
          className="animate-dance"
        />
      </div>
      <div className="absolute top-[10%] right-[27%] hidden lg:block">
        <img
          src={shape2}
          alt="Shape"
          draggable={false}
          className="animate-swing"
        />
      </div>
      <div className="Container">
        <div className="flex flex-wrap items-center gap-7 justify-between pt-6">
          <div>
            <h5 className="zoom-in font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
              <img src={subtitleIcon} alt="Icon" draggable={false} /> Projects
            </h5>
            <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[42px] md:text-[44px] md:leading-[52px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-white mt-3.5">
              Browse Latest Solar
              <br />Renewable Energy Works
            </h1>
          </div>
          <div>
            <PrimaryButton as="link" href="/about">
              More Projects <GoArrowRight size={22} />
            </PrimaryButton>
          </div>
        </div>
      </div>
      <div className="box-row relative z-10 pt-[58px]">
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
  );
};

export default project;
