import aboutThumb from "/images/about-thumb.png";
import aboutTeamImg from "/images/about-team-img.png";
import aboutTeamImg2 from "/images/about-team-img2.png";
import subtitleIcon from "/images/sub-title-icon.png";
import aboutArrow from "/images/about-arrow-icon.png";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import { GoArrowRight } from "react-icons/go";
import OnScrollCounter from "../../Shared/Counter/OnScrollCounter";
import Feature from "../Feature/Feature";
import shape from "/images/leaf.png";

const About = () => {
  return (
    <div className="relative z-10 -mt-5">
      <section className="bg-SecondaryColor-0 pt-16 md:pt-20 lg:pt-[120px] relative">
        <div className="Container pt-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-10 items-start">
            <div className="relative z-10">
              <img src={aboutThumb} draggable="false" className="w-full" />
              <div className="fade-up bg-BodyBgDark2-0 rounded-lg sm:rounded-2xl md:rounded-[20px] pl-5 sm:pl-10 pt-[34px] pr-6 sm:pr-14 pb-10 flex items-center justify-between gap-5 flex-wrap mt-4">
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
                <div className="relative">
                  <div className="font-semibold text-[50px] leading-7 text-PrimaryColor-0 flex gap-1 items-start">
                    <OnScrollCounter start={0} end={30} duration={1000} />
                    <span className="text-4xl leading-7">+</span>
                  </div>
                  <h6 className="font-Outfit text-white text-lg">
                    Years Experience
                  </h6>
                  <div className="absolute -top-3 -left-[70px] hidden md:block">
                    <img
                      src={aboutArrow}
                      alt="About Arrow"
                      className="animate-swing"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative lg:ml-auto 2xl:mr-16">
              <h5 className="zoom-in font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
                <img src={subtitleIcon} alt="Icon" draggable={false} /> About Us
              </h5>
              <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[42px] md:text-[44px] md:leading-[52px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-white mt-3.5">
                Innovative eco system
                <br />
                For save human life and
                <br />
                Animal protection
              </h1>
              <p className="fade-up font-NotoSans text-TextColor2-0 max-w-[510px] w-full mt-6 mb-9">
                Econet is a nonprofit environmental organizations maintaince and
                dedicated to protecting planet through sustainable and renewable
                community empowerment moderator
              </p>
              <PrimaryButton as="link" href="/about" className="zoom-in">
                More About Us <GoArrowRight size={22} />
              </PrimaryButton>
            </div>
          </div>
        </div>

        <div className="absolute right-[4%] top-20">
          <img
            src={shape}
            draggable={false}
            alt="Shape"
            className="animate-swing hidden 3xl:block w-56"
            style={{ animationDuration: "4s" }}
          />
        </div>
      </section>
      <Feature />
    </div>
  );
};

export default About;
