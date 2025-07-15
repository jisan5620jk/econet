import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import { GoArrowRight } from "react-icons/go";
import aboutTeamImg from "/images/about-team-img.png";
import aboutTeamImg2 from "/images/about-team-img2.png";
import icon from "/images/banner2-icon.png";
import circle from "/images/circle.png";
import { useState } from "react";

const Banner = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <section className="bg-SecondaryColor-0 px-2 sm:px-4 2xl:px-8 py-2 sm:py-4 lg:py-8 relative z-30 overflow-hidden">
      <div className="bg-[url(/images/solar-banner.png)] bg-cover bg-no-repeat bg-left xl:bg-center 2xl:px-5 3xl:px-0 pt-44 sm:pt-[234px] pb-36 rounded-xl sm:rounded-2xl md:rounded-[30px]">
        <div className="Container">
          <div className="max-w-[745px]">
            <h2 className="relative z-10 font-Outfit font-semibold text-HeadingColor-0 text-2xl leading-[32px] sm:text-[44px] sm:leading-[48px] md:text-[56px] md:leading-[62px] lg:text-[64px] lg:leading-[68px] xl:text-[48px] xl:leading-[48px] 2xl:text-[64px] 2xl:leading-[68px] 3xl:text-[74px] 3xl:leading-[88px] uppercase">
              <div className="flex items-center">
                Take{" "}
                <div className="px-2 md:px-5">
                  <button
                    onClick={() => setEnabled(!enabled)}
                    className={`w-[50px] md:w-[100px] h-7 md:h-14 flex items-center rounded-full p-1 md:p-2.5 duration-300 border border-PrimaryColor-0 ${
                      enabled
                        ? "bg-white border-green-500"
                        : "bg-white border-green-500"
                    }`}
                  >
                    <div
                      className={`bg-green-500 size-5 md:size-[38px] rounded-full shadow-md transform duration-300 ${
                        enabled
                          ? "translate-x-5 md:translate-x-10"
                          : "translate-x-0"
                      }`}
                    ></div>
                  </button>
                </div>{" "}
                Controled
              </div>
              Solor Renewable
              <div className="flex items-center gap-2 md:gap-5">
                <div className="inline-block w-8 sm:w-9 md:w-[inherit]">
                  <img
                    src={circle}
                    draggable={false}
                    alt="circle"
                    className="animate-rotational"
                  />
                </div>{" "}
                Energy
              </div>
            </h2>
            <div className="mt-9">
              <PrimaryButton as="link" href="/about">
                Explore Services <GoArrowRight size={22} />
              </PrimaryButton>
            </div>
            <div className="flex flex-wrap xl:flex-nowrap gap-5 items-center justify-between mt-20 md:mt-[62px]">
              <div>
                <ul className="flex items-center -space-x-4">
                  <li>
                    <img
                      src={aboutTeamImg}
                      alt="About Team Image"
                      draggable={false}
                    />
                  </li>
                  <li>
                    <img
                      src={aboutTeamImg2}
                      alt="About Team Image"
                      draggable={false}
                    />
                  </li>
                  <li className="size-14 flex items-center justify-center bg-SecondaryColor-0 rounded-full font-Outfit text-white text-lg">
                    +25
                  </li>
                </ul>
                <h6 className="font-Outfit text-HeadingColor-0 font-medium text-lg mt-4">
                  Satisfied Customers
                </h6>
              </div>
              <div className="flex items-center gap-5 pb-1">
                <div>
                  <img src={icon} draggable={false} alt="Icon" />
                </div>
                <p className="font-NotoSans text-HeadingColor-0 w-full max-w-[315px]">
                  Econet is a nonprofit environmental main dedicated to
                  protecting planets through empowerment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
