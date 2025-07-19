import CircleProgress from "./CircleProgress";
import subtitleIcon from "/images/sub-title-icon.png";
import { useState } from "react";
import missionVisionImg from "/images/charity-mission-vision-img.png";
import { GiCheckMark } from "react-icons/gi";
import shape from "/images/charity-mission-vision-shape.png";
import shape2 from "/images/charity-mission-vision-shape2.png";
import shape3 from "/images/charity-mission-vision-shape3.png";

const tabs = [
  {
    label: "Our Mission",
    content:
      "Econet is a nonprofit environmental organizations maintaince and make dedicated to protecting planet through sustainable and renewable target community empowerment moderator.",
  },
  {
    label: "Our Vision",
    content:
      "Econet is a nonprofit environmental organizations maintaince and make dedicated to protecting planet through sustainable and renewable target community empowerment moderator.",
  },
  {
    label: "Our History",
    content:
      "Econet is a nonprofit environmental organizations maintaince and make dedicated to protecting planet through sustainable and renewable target community empowerment moderator.",
  },
];

const missionList = [
  {
    listContent: "Helping Rural areas kids and Humans",
  },
  {
    listContent: "Combating Hunger with Nutritious Foods Support",
  },
];

const MissionVision = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="bg-SecondaryColor-0 pt-[242px] pb-16 md:pb-20 lg:ob-[120px] relative z-10">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div>
            <h5 className="zoom-in font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
              <img src={subtitleIcon} alt="Icon" draggable={false} /> Mission &
              Vision
            </h5>
            <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[42px] md:text-[44px] md:leading-[52px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-white mt-3.5">
              Creating Kinder World Our
              <br />
              Mission Shapes Every Life
            </h1>
            <ul className="flex items-center gap-3.5 mt-[38px]">
              {tabs.map((tab, index) => (
                <li
                  key={index}
                  className={`font-Outfit text-lg bg-white/5 border border-white/20 rounded-full px-[30px] py-[7px] text-white overflow-hidden cursor-pointer relative z-10 before:absolute before:top-0 before:right-0 before:h-full before:w-0 before:bg-PrimaryColor-0 before:-z-10 before:transition-all before:duration-500 before:ease-in-out ${
                    activeIndex === index
                      ? "!border-PrimaryColor-0 before:left-0 before:w-full"
                      : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {tab.label}
                </li>
              ))}
            </ul>
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`hidden transition-all duration-500 ease-in-out pt-[30px] ${
                  activeIndex === index ? "!block animate-fadeInUp" : ""
                }`}
              >
                <p className="font-NotoSans text-TextColor2-0 max-w-[555px] w-full">
                  {tab.content}
                </p>
              </div>
            ))}
            <ul className="space-y-3 mt-8">
              {missionList.map((list, index) => (
                <li
                  key={index}
                  className="flex font-Outfit text-lg text-white gap-2"
                >
                  <span
                    className={`size-[22px] rounded-full flex items-center justify-center text-xs 
                        ${
                          index % 2 === 0
                            ? "bg-PrimaryColor-0"
                            : "bg-PrimaryColor2-0"
                        }`}
                  >
                    <GiCheckMark />
                  </span>
                  {list.listContent}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between gap-7 xl:gap-0 pt-10 mt-8 border-t border-white/10">
              <CircleProgress
                percentage={85}
                label="Total Donation Completed"
                color="text-PrimaryColor-0"
              />
              <CircleProgress
                percentage={80}
                label="Our Dedicated Volunteers"
                color="text-PrimaryColor2-0"
              />
            </div>
          </div>
          <div className="relative z-10 flex justify-end -mr-[85px]">
            <img
              src={missionVisionImg}
              alt="Mission & Vision Image"
              draggable={false}
              className="w-full xl:w-[inherit] xl:max-w-[inherit]"
            />
            <div className="absolute -z-10 top-[3%] right-[24%]">
              <img
                src={shape2}
                alt="Image Shape"
                draggable={false}
                className="animate-swing"
                style={{ animationDuration: "3s" }}
              />
            </div>
            <div className="absolute -z-10 bottom-[1%] right-[19%]">
              <img
                src={shape3}
                alt="Image Shape"
                draggable={false}
                className="animate-wiggle"
                style={{ animationDuration: "5s" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -z-10 -top-[16%] left-0">
        <img
          src={shape}
          alt="Image Shape"
          draggable={false}
          className="animate-wiggle"
          style={{ animationDuration: "5.5s" }}
        />
      </div>
    </section>
  );
};

export default MissionVision;
