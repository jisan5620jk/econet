import aboutThumb from "/images/about-thumb.png";
import aboutTeamImg from "/images/about-team-img.png";
import aboutTeamImg2 from "/images/about-team-img2.png";
import subtitleIcon from "/images/sub-title-icon.png";
import shape from "/images/about-shape.png";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import { GoArrowRight } from "react-icons/go";
import OnScrollCounter from "../../Shared/Counter/OnScrollCounter";

const About = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-[120px] bg-no-repeat bg-center bg-cover relative">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-10 items-start">
          <div className="relative">
            <h5 className="font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
              <img src={subtitleIcon} alt="Icon" draggable={false} /> Services
            </h5>
            <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[50px] 2xl:leading-[58px] text-HeadingColor-0 mt-3.5">
              Innovative eco system
              <br />
              For save human life and
              <br />
              Animal protection
            </h1>
            <p className="font-NotoSans text-TextColor-0 max-w-[510px] w-full mt-6 mb-9">
              Econet is a nonprofit environmental organizations maintaince and
              dedicated to protecting planet through sustainable and renewable
              community empowerment moderator
            </p>
            <PrimaryButton as="link" href="/about">
              More About Us <GoArrowRight size={22} />
            </PrimaryButton>
            <div className="absolute -bottom-8 right-20">
              <img
                src={shape}
                alt="About Shape"
                draggable={false}
                className="animate-swing"
                style={{ animationDuration: "3.5s" }}
              />
            </div>
          </div>
          <div className="relative z-10">
            <img src={aboutThumb} draggable="false" className="w-full" />
            <div className="bg-SecondaryColor-0 rounded-[20px] pl-10 pt-[34px] pr-14 pb-10 flex items-center justify-between flex-wrap mt-4">
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
                  <li className="size-14 flex items-center justify-center bg-PrimaryColor-0 rounded-full font-Outfit text-white text-lg">
                    +25
                  </li>
                </ul>
                <h6 className="font-Outfit text-white text-lg mt-4">
                  Expert Members
                </h6>
              </div>
              <div>
                <div className="font-semibold text-[50px] leading-7 text-PrimaryColor-0 flex gap-1 items-start">
                  <OnScrollCounter start={0} end={30} duration={1000} />
                  <span className="text-4xl leading-7">+</span>
                </div>
                <h6 className="font-Outfit text-white text-lg">
                  Years Experience
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
