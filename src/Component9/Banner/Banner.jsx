import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import { GoArrowRight } from "react-icons/go";
import aboutTeamImg from "/images/about-team-img.png";
import aboutTeamImg2 from "/images/about-team-img2.png";
import bannerImg from "/images/charity-banner-img.png";
import bannerCircle from "/images/charity-banner-img-circle.png";
import bannerStar from "/images/charity-banner-star.png";
import bannerShape from "/images/charity-banner-hand.png";
import bannerShape2 from "/images/charity-banner-heart.png";

const Banner = () => {
  return (
    <section className="bg-SecondaryColor-0 px-2 sm:px-4 2xl:px-8 relative z-30 overflow-hidden">
      <div className="bg-[url(/images/charity-banner-bg.png)] bg-cover bg-no-repeat bg-left xl:bg-center 2xl:px-5 3xl:px-0 pt-44 sm:pt-20 rounded-xl sm:rounded-2xl md:rounded-[30px] relative z-10 overflow-hidden">
        <div className="Container">
          <div className="grid grid-cols-12 items-start">
            <div className="lg:col-span-7 pt-10">
              <h6 className="relative z-10 inline-block font-Outfit text-lg text-white py-1.5 pl-[26px] pr-[62px] bg-[url(/images/charity-banner-subtitle-bg.png)] bg-cover bg-center bg-no-repeat">
                Help The Humanity
              </h6>
              <h2 className="relative z-10 font-Outfit font-semibold text-white text-2xl leading-[32px] sm:text-[44px] sm:leading-[48px] md:text-[56px] md:leading-[62px] lg:text-[64px] lg:leading-[68px] xl:text-[48px] xl:leading-[48px] 2xl:text-[64px] 2xl:leading-[68px] 3xl:text-[74px] 3xl:leading-[80px] mt-6">
                Join the Movement
                <br />
                Change the — World
                <br />
                Donate Love
              </h2>
              <div className="flex flex-wrap xl:flex-nowrap gap-5 sm:gap-10 items-center md:mt-[48px]">
                <PrimaryButton as="link" href="/about">
                  Donate Now <GoArrowRight size={22} />
                </PrimaryButton>
                <div className="flex items-center gap-5">
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
                    <li className="size-14 flex items-center justify-center bg-PrimaryColor2-0 rounded-full font-Outfit text-white text-lg">
                      +25
                    </li>
                  </ul>
                  <h6 className="font-Outfit text-white text-lg">
                    OUR DEDICATED
                    <br />
                    VOLUNTEERS
                  </h6>
                </div>
              </div>
              <div className="mt-[120px] pt-6 flex items-center gap-4 max-w-[646px] w-full border-t border-white border-opacity-20">
                <div>
                  <img src={bannerStar} alt="Banner Star" draggable={false} />
                </div>
                <h6 className="flex-1 font-Outfit text-lg text-white">
                  We’re Since <span className="text-PrimaryColor-0">1998</span>
                  <br />
                  Based in USA
                </h6>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative z-10 pt-[92px]">
                <div className="relative z-10 mx-auto">
                  <img
                    src={bannerImg}
                    alt="Banner Image"
                    draggable={false}
                    className="w-full 3xl:w-[inherit] 3xl:max-w-[inherit]"
                  />
                </div>
                <div className="absolute -z-10 top-0 left-0 right-0 text-center">
                  <img
                    src={bannerCircle}
                    alt="Banner Circle"
                    draggable={false}
                    className="animate-rotational"
                    style={{ animationDuration: "22s" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-2 -left-0 rotate-12">
          <img
            src={bannerShape}
            alt="Banner Shape"
            draggable={false}
            className="animate-swing"
            style={{ animationDuration: "3s" }}
          />
        </div>
        <div className="absolute top-32 right-44 rotate-12">
          <img
            src={bannerShape2}
            alt="Banner Shape"
            draggable={false}
            className="animate-swing"
            style={{ animationDuration: "3s" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
