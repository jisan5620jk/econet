import projectImg from "/images/project_details2-img.png";
import projectImg2 from "/images/project_details2-img2.png";
import projectImg3 from "/images/project_details2-img3.png";
import projectImg4 from "/images/project_details2-img4.png";
import shape from "/images/dot.png";
import shape2 from "/images/arrow.png";
import ProjectCard from "./project_detailsCard";
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
    projectUrl: "/project_details",
  },
  {
    projectImg: projectImg2,
    projectIcon: <HiMiniArrowUpRight />,
    projectSubTitle: "Installation",
    projectTitle: "Turbine Installations",
    projectUrl: "/project_details",
  },
  {
    projectImg: projectImg3,
    projectIcon: <HiMiniArrowUpRight />,
    projectSubTitle: "Planet",
    projectTitle: "Industrial Power Planet",
    projectUrl: "/project_details",
  },
  {
    projectImg: projectImg4,
    projectIcon: <HiMiniArrowUpRight />,
    projectSubTitle: "Pannels",
    projectTitle: "Solar Panel Cleaning",
    projectUrl: "/project_details",
  },
  {
    projectImg: projectImg2,
    projectIcon: <HiMiniArrowUpRight />,
    projectSubTitle: "Installation",
    projectTitle: "Turbine Installations",
    projectUrl: "/project_details",
  },
  {
    projectImg: projectImg3,
    projectIcon: <HiMiniArrowUpRight />,
    projectSubTitle: "Planet",
    projectTitle: "Industrial Power Planet",
    projectUrl: "/project_details",
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
    <section className="bg-white pt-16 md:pt-20 lg:pt-[120px] pb-11 md:py-16 lg:py-[100px] -mt-5 relative">
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
            <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[42px] md:text-[44px] md:leading-[52px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-HeadingColor-0 mt-3.5">
              Browse Latest Solar
              <br />
              Renewable Energy Works
            </h1>
          </div>
          <div className="fade-right">
            <PrimaryButton as="link" href="/project">
              More Projects <GoArrowRight size={22} />
            </PrimaryButton>
          </div>
        </div>
        <div className="box-row relative z-10 pt-[58px]">
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
