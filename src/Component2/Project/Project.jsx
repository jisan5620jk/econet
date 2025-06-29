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
    <div className="bg-BodyBgDark-0 px-2 md:px-4 3xl:px-8 relative z-10 -mt-5 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[246px] inline-block bg-SecondaryColor-0 -z-10"></div>
      <section className="project-pin-wrapper py-16 md:py-20 lg:py-[120px] rounded-lg sm:rounded-2xl md:rounded-[20px] relative z-10 overflow-hidden">
        <div className="absolute -z-10 top-0 left-0 right-0 text-center">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1860 2395"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-BodyBgDark-0"
          >
            <path d="M0 108H1860V2375C1860 2386.05 1851.05 2395 1840 2395H20C8.95429 2395 0 2386.05 0 2375V108Z" />
            <path d="M317.18 9.74342C320.79 3.70041 327.31 0 334.349 0H1525.42C1532.58 0 1539.2 3.82883 1542.77 10.0386L1581.23 77.0109C1584.8 83.2206 1591.42 87.0495 1598.58 87.0495H1843.52C1852.62 87.0495 1860 94.4257 1860 103.525C1860 112.624 1852.62 120 1843.52 120H16.4535C7.36653 120 0 112.634 0 103.547C0 94.4606 7.36475 87.0946 16.4506 87.0931L259.653 87.0514C266.691 87.0502 273.21 83.3499 276.819 77.308L317.18 9.74342Z" />
          </svg>
        </div>
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
        <div className="text-center">
          <h5 className="zoom-in font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
            <img src={subtitleIcon} alt="Icon" draggable={false} /> Projects
          </h5>
          <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[42px] md:text-[44px] md:leading-[52px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-white mt-3.5">
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
