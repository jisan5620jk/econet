/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ProjectCard = ({
  projectSubTitle,
  projectTitle,
  projectImg,
  projectIcon,
  projectUrl,
}) => {
  return (
    <div className="group relative pb-5">
      <div className="rounded-[20px] relative z-10 bg-BodyBg-0 p-3 sm:p-[18px] before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:bg-white before:rounded-[20px] before:-z-10 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full transition-all duration-500 hover:shadow-shade">
        <div className="relative rounded-2xl overflow-hidden">
          <div>
            {[
              { initial: "left-[12.5%]", hover: "group-hover:left-0" },
              { initial: "left-[37.5%]", hover: "group-hover:left-[25%]" },
              { initial: "left-[62.5%]", hover: "group-hover:left-1/2" },
              { initial: "left-[87.5%]", hover: "group-hover:left-[75%]" },
            ].map((pos, i) => (
              <span
                key={i}
                className={`absolute top-0 h-full w-0 transition-all duration-500 z-10 bg-PrimaryColor-0 group-hover:w-[25%] group-hover:opacity-0 ${pos.initial} ${pos.hover}`}
              ></span>
            ))}
          </div>

          <img
            src={projectImg}
            draggable={false}
            alt="project Image"
            className="w-full"
          />
        </div>
        <div className="pt-8 pb-4 px-2 sm:px-7 flex items-center justify-between">
          <div>
            <h6 className="inline-block px-6 py-1.5 border border-SecondaryColor-0 border-opacity-10 rounded-full font-Outfit text-PrimaryColor-0 uppercase mb-5">
              {projectSubTitle}
            </h6>
            <Link
              to={projectUrl}
              className="w-full font-Outfit font-medium block text-[22px] sm:text-2xl lg:text-[22px] 2xl:text-2xl 3xl:text-[32px] 2xl:leading-[40px] text-HeadingColor-0"
            >
              {projectTitle}
            </Link>
          </div>
          <div className="size-10 sm:size-[58px] bg-white bg-opacity-[7%] text-[22px] text-PrimaryColor-0 group-hover:text-white border border-SecondaryColor-0 border-opacity-10 flex justify-center items-center rounded-full transition-all duration-500 relative z-20 overflow-hidden before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 before:rotate-180 before:scale-0 group-hover:before:scale-100 group-hover:before:rotate-0">
            <Link to={projectUrl}>{projectIcon}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
