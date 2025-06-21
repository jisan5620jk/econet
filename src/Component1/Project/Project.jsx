// components/Project.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoArrowRight } from "react-icons/go";
import { FaCheck } from "react-icons/fa6";
import ProjectCard from "./ProjectCard";
import subtitleIcon from "/images/sub-title-icon.png";
import shape from "/images/project-shape2.png";

gsap.registerPlugin(ScrollTrigger);

const projectData = [
  {
    projectBg: "bg-[url('/images/project-item-bg.png')]",
    boxBg: "bg-[url('/images/project-box-bg.png')]",
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
    boxBg: "bg-[url('/images/project-box-bg.png')]",
    boxPosition: "justify-start ml-20",
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
    boxBg: "bg-[url('/images/project-box-bg.png')]",
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
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".project-panel-pin");

      items.forEach((item, index) => {
        gsap.set(item, { zIndex: 10 + index });

        ScrollTrigger.create({
          trigger: item,
          start: "top top",
          end: "+=100%",
          pin: true,
          pinSpacing: false,
          scrub: true,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="px-8 relative z-10 -mt-5">
      <div className="absolute top-0 left-0 w-full h-[246px] inline-block bg-SecondaryColor-0 -z-10"></div>
      <section className="bg-[url('/images/project-bg.png')] bg-top bg-cover bg-no-repeat py-16 md:py-20 lg:py-[120px] relative overflow-hidden">
        <div className="absolute -right-5 top-[86px]">
          <img
            src={shape}
            draggable={false}
            alt="Shape"
            className="animate-dance hidden lg:block"
            style={{ animationDuration: "5.5s" }}
          />
        </div>
        <div className="text-center">
          <h5 className="font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
            <img src={subtitleIcon} alt="Icon" draggable={false} /> Projects
          </h5>
          <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[50px] 2xl:leading-[58px] text-HeadingColor-0 mt-3.5">
            We Bring Powerful Solution
            <br />
            Protect Environment
          </h1>
        </div>
        <div className="Container">
          <div ref={containerRef} className="relative space-y-[30px] mt-[60px]">
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
