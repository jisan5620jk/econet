import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoArrowRight } from "react-icons/go";
import { FaCheck } from "react-icons/fa6";
import ProjectCard from "./ProjectCard";
import subtitleIcon from "/images/sub-title-icon.png";
import shape from "/images/project-shape.png";
import shape2 from "/images/project-shape2.png";

gsap.registerPlugin(ScrollTrigger);

const projectData = [
  {
    projectBg: "bg-[url('/images/project-item-bg.png')]",
    boxPosition: "justify-end mr-20 ml-auto",
    boxCheckIcon: <FaCheck />,
    boxSubTitle: "ECOLOGY",
    boxTitle: "Eco - Innovative Climate solution",
    boxDesc:
      "Econet is a nonprofit environmental main dedicated to protecting planet the through community empowerment",
    boxUrl: "/projects/climate-solutions",
    boxBtnText: "Explore More",
    boxBtnIcon: <GoArrowRight />,
  },
  {
    projectBg: "bg-[url('/images/project-item-bg2.png')]",
    boxPosition: "justify-start md:ml-20",
    boxCheckIcon: <FaCheck />,
    boxSubTitle: "RENEWABLE",
    boxTitle: "Sustainable energy Environment",
    boxDesc:
      "Econet is a nonprofit environmental main dedicated to protecting planet the through community empowerment",
    boxUrl: "/projects/renewable-energy",
    boxBtnText: "Explore More",
    boxBtnIcon: <GoArrowRight />,
  },
  {
    projectBg: "bg-[url('/images/project-item-bg3.png')]",
    boxPosition: "justify-end mr-20 ml-auto",
    boxCheckIcon: <FaCheck />,
    boxSubTitle: "SEEDLING",
    boxTitle: "Tree plantations and Green movement",
    boxDesc:
      "Econet is a nonprofit environmental main dedicated to protecting planet the through community empowerment",
    boxUrl: "/projects/green-movement",
    boxBtnText: "Explore More",
    boxBtnIcon: <GoArrowRight />,
  },
];

const Project = () => {
  useEffect(() => {
    const width = window.innerWidth;

    if (width >= 1200) {
      const ctx = gsap.context(() => {
        const items = gsap.utils.toArray(".project-panel-pin");

        items.forEach((item, index) => {
          gsap.set(item, { zIndex: 10 + index });

          ScrollTrigger.create({
            trigger: item,
            start: "top 10%",
            end:
              width >= 1600
                ? "bottom 90%"
                : width >= 1400
                ? "bottom 145%"
                : "bottom 150%",
            endTrigger: ".project-pin-wrapper",
            pin: true,
            pinSpacing: false,
            scrub: 1,
            markers: false,
          });
        });
      });

      return () => ctx.revert();
    }
  }, []);

  return (
    <div className="relative z-10 -mt-5 overflow-hidden">
      <section className="project-pin-wrapper bg-white lg:bg-[url('/images/project-bg.png')] bg-top bg-cover bg-no-repeat py-16 md:py-20 lg:py-[120px] relative overflow-hidden">
        <div className="fade-left absolute left-[18%] top-24">
          <img
            src={shape}
            draggable={false}
            alt="Shape"
            className="animate-swing hidden 3xl:block"
            style={{ animationDuration: "2.5s" }}
          />
        </div>
        <div className="zoom-in absolute -right-5 top-[86px]">
          <img
            src={shape2}
            draggable={false}
            alt="Shape"
            className="animate-dance hidden 3xl:block"
            style={{ animationDuration: "5.5s" }}
          />
        </div>
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
        <div className="Container">
          <div className="relative space-y-[30px] mt-9 sm:mt-12 md:mt-[60px] lg:px-2.5 xl:px-0 fade-up">
            {projectData.map((item, i) => (
              <div key={i} className="project-panel-pin">
                <ProjectCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
