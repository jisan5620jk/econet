/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ProjectCard = ({
  projectSubTitle,
  projectTitle,
  projectImg,
  projectUrl,
}) => {
  return (
    <div className="group rounded-[20px] relative z-10 overflow-hidden before:absolute before:left-0 before:bottom-0 before:w-full before:h-0 before:bg-gradient-to-b before:to-SecondaryColor-0 before:from-transparent before:z-10 before:transition-all before:duration-500 3xl:hover:before:h-1/2">
      <div className="relative rounded-2xl overflow-hidden">
        <img
          src={projectImg}
          draggable={false}
          alt="project Image"
          className="w-full"
        />
      </div>
      <div className="absolute z-20 left-0 right-0 -bottom-20 opacity-0 transition-all duration-500 group-hover:bottom-10 group-hover:opacity-100 mx-auto bg-white/20 rounded-2xl backdrop-filter backdrop-blur-lg w-[calc(100%-80px)] max-w-full inline-block px-2 sm:px-[30px] pt-9 pb-7">
        <h6 className="inline-block px-6 py-1.5 bg-PrimaryColor-0 rounded-full font-Outfit text-white uppercase mb-5">
          {projectSubTitle}
        </h6>
        <Link
          to={projectUrl}
          className="w-full font-Outfit font-medium block text-[22px] sm:text-2xl lg:text-[22px] 2xl:text-2xl 3xl:text-[32px] 2xl:leading-[40px] text-white"
        >
          {projectTitle}
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
