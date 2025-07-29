import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import subtitleIcon from "/images/sub-title-icon.png";
import projectImg from "/images/classic-project-img.png";
import projectImg2 from "/images/classic-project-img2.png";
import projectImg3 from "/images/classic-project-img3.png";
import projectImg4 from "/images/classic-project-img4.png";
import projectImg5 from "/images/classic-project-img5.png";
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
];

const ProjectInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Our Projects"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Projects"}
      />
      <section className="px-2 2xl:px-[120px] py-16 md:py-20 lg:py-[120px] bg-white">
        <div className="Container">
          <div className="text-center">
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

        <div className="box-row grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 relative z-10 pt-[58px]">
          {projectData.map((project, index) => (
            <div key={index} className="box">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectInner;
