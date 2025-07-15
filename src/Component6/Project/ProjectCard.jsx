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
    <div className="group relative pb-3">
      <div className="rounded-[20px] relative z-10 bg-BodyBgDark-0 p-3 sm:p-[18px] before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:bg-BodyBgDark2-0 before:rounded-[20px] before:-z-10 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full">
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

          <div className="absolute z-10 -bottom-1 right-0 rotate-90">
            <div className="size-[72px] rounded-bl-2xl bg-BodyBgDark-0 transition-all duration-500 group-hover:bg-BodyBgDark2-0 inline-block relative">
              <span className="absolute -left-[20px] top-0 rotate-180 size-[20px] inline-block bg-BodyBgDark-0 transition-all duration-500 group-hover:bg-BodyBgDark2-0 [clip-path:path('M0_0_Q0,20_20,20_L_0_20_Z')]"></span>
              <span className="absolute -bottom-[20px] right-0 rotate-180 size-[20px] inline-block bg-BodyBgDark-0 transition-all duration-500 group-hover:bg-BodyBgDark2-0 [clip-path:path('M0_0_Q0,20_20,20_L_0_20_Z')]"></span>
            </div>
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
            <h6 className="inline-block px-6 py-1.5 bg-white bg-opacity-[7%] rounded-full font-Outfit text-PrimaryColor-0 uppercase mb-5">
              {projectSubTitle}
            </h6>
            <Link
              to={projectUrl}
              className="w-full font-Outfit font-medium block text-[22px] sm:text-2xl lg:text-[22px] 2xl:text-[32px] 2xl:leading-[40px] text-white"
            >
              {projectTitle}
            </Link>
          </div>
          <div className="size-10 sm:size-[58px] bg-white bg-opacity-[7%] text-[22px] text-PrimaryColor-0 group-hover:text-white flex justify-center items-center rounded-full transition-all duration-500 relative z-20 overflow-hidden before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 before:rotate-180 before:scale-0 group-hover:before:scale-100 group-hover:before:rotate-0">
            <Link to={projectUrl}>{projectIcon}</Link>
          </div>
        </div>
      </div>
      <div className="w-[calc(100%-30px)] mx-auto absolute bottom-3 right-0 left-0 -z-20 transition-all duration-500 group-hover:bottom-0">
        <svg
          width="100%"
          height="34"
          viewBox="0 0 608 34"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-PrimaryColor2-0"
        >
          <rect y="0.00341797" width="608" height="24" rx="12" fill="#FF853F" />
          <circle cx="24" cy="23.0034" r="10" />
          <circle cx="41" cy="24.0034" r="10" />
          <circle cx="58" cy="24.0034" r="10" />
          <circle cx="75" cy="24.0034" r="10" />
          <circle cx="92" cy="24.0034" r="10" />
          <circle cx="109" cy="24.0034" r="10" />
          <circle cx="126" cy="24.0034" r="10" />
          <circle cx="143" cy="24.0034" r="10" />
          <circle cx="160" cy="24.0034" r="10" />
          <circle cx="177" cy="24.0034" r="10" />
          <circle cx="194" cy="24.0034" r="10" />
          <circle cx="211" cy="24.0034" r="10" />
          <circle cx="228" cy="24.0034" r="10" />
          <circle cx="245" cy="24.0034" r="10" />
          <circle cx="262" cy="24.0034" r="10" />
          <circle cx="279" cy="24.0034" r="10" />
          <circle cx="296" cy="24.0034" r="10" />
          <circle cx="313" cy="24.0034" r="10" />
          <circle cx="330" cy="24.0034" r="10" />
          <circle cx="347" cy="24.0034" r="10" />
          <circle cx="364" cy="24.0034" r="10" />
          <circle cx="381" cy="24.0034" r="10" />
          <circle cx="398" cy="24.0034" r="10" />
          <circle cx="415" cy="24.0034" r="10" />
          <circle cx="432" cy="24.0034" r="10" />
          <circle cx="449" cy="24.0034" r="10" />
          <circle cx="466" cy="24.0034" r="10" />
          <circle cx="483" cy="24.0034" r="10" />
          <circle cx="500" cy="24.0034" r="10" />
          <circle cx="517" cy="24.0034" r="10" />
          <circle cx="534" cy="24.0034" r="10" />
          <circle cx="551" cy="24.0034" r="10" />
          <circle cx="568" cy="24.0034" r="10" />
          <circle cx="585" cy="22.0034" r="10" />
        </svg>
      </div>
    </div>
  );
};

export default ProjectCard;
