import bannerImg from "/images/banner-img.png";
import bannerShape from "/images/banner-left-shape.png";
import bannerShape2 from "/images/banner-left-shape2.png";
import bannerShape3 from "/images/banner-left-shape3.png";
import bannerShape4 from "/images/banner-right-shape.png";
import bannerShape5 from "/images/banner-right-shape2.png";
import bannerShape6 from "/images/banner-left-cercle.png";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import { GoArrowRight } from "react-icons/go";

const Banner = () => {
  return (
    <section className="bg-SecondaryColor-0 px-2 sm:px-4 lg:px-8 py-2 sm:py-4 lg:py-8 rounded-b-xl sm:rounded-b-2xl md:rounded-b-[30px] flex items-center relative z-10 overflow-hidden">
      <div className="w-full grid lg:grid-cols-2 items-center gap-8">
        <div className="hidden bg-BodyBgDark-0 lg:flex justify-center px-[100px] pt-14 lg:pt-[118px] pb-12 lg:pb-[120px] rounded-[20px] relative overflow-hidden">
          <div>
            <img
              src={bannerImg}
              draggable="false"
              className="2xl:w-[inherit] relative z-10 lg:pl-9"
            />
          </div>
          <img
            src={bannerShape}
            draggable={false}
            className="absolute top-5 right-0 animate-wiggle hidden md:block lg:hidden xl:block"
            style={{ animationDelay: "0.5s" }}
          />
          <img
            src={bannerShape2}
            draggable={false}
            className="absolute bottom-20 right-10 blur-sm animate-swing hidden md:block lg:hidden 2xl:block"
            style={{ animationDuration: "3s" }}
          />
          <img
            src={bannerShape3}
            draggable={false}
            className="absolute top-64 left-10 animate-dance2 blur-sm hidden md:block lg:hidden 2xl:block"
            style={{ animationDuration: "4s" }}
          />
          <img
            src={bannerShape6}
            draggable={false}
            className="absolute bottom-[60px] animate-rotate hidden md:block lg:hidden 2xl:block"
          />
        </div>
        <div className="bg-gradient-to-tl from-BodyBg-0 from-30% via-BoxBg3-0 to-BoxBg3-0 px-2 sm:px-10 md:px-16 lg:px-20 xl:px-[100px] pt-32 sm:pt-44 md:pt-[222px] pb-6 md:pb-[102px] rounded-md sm:rounded-2xl md:rounded-[20px] relative overflow-hidden">
          <h1 className="relative z-10 font-Outfit font-semibold text-HeadingColor-0 text-[26px] leading-[32px] sm:text-[36px] sm:leading-[42px] md:text-[56px] md:leading-[62px] lg:text-[42px] lg:leading-[48px] xl:text-[48px] xl:leading-[76px] 2xl:text-[74px] 2xl:leading-[78px]">
            Building evergreen
            <br />
            Natural humanity
            <br />
            <span className="text-PrimaryColor-0">Innovate</span> earth
          </h1>
          <div className="mt-6 md:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-7">
            <PrimaryButton as="link" href="/about">
              Explore Services <GoArrowRight size={22} />
            </PrimaryButton>
            <div>
              <h6 className="font-NotoSans text-[15px] text-TextColor-0 mb-1">
                Call Us (Toll Free)
              </h6>
              <a
                href="calto:+1456678032"
                title="+1 (456) 678 032"
                className="font-Outfit text-[22px] font-medium text-HeadingColor-0"
              >
                +1 (456) 678 032
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 justify-between mt-20 md:mt-[136px] pt-5 border-t border-SecondaryColor-0">
            <div>
              <h5 className="font-Outfit font-medium text-HeadingColor-0 text-lg leading-7">
                We’re Since <span className="text-PrimaryColor-0">1998</span>
                <br />
                Based in USA
              </h5>
            </div>
            <div>
              <p className="font-NotoSans text-TextColor-0 max-w-[390px]">
                Econet is a nonprofit environmental organizations dedicated to
                protecting planet through sustainable community empowerment.
              </p>
            </div>
          </div>

          <div className="absolute z-10 top-5 right-0 hidden md:block lg:hidden 2xl:block">
            <img
              src={bannerShape4}
              draggable={false}
              className="animate-wiggle"
            />
          </div>
          <div className="absolute top-5 right-0 hidden md:block lg:hidden 2xl:block">
            <img
              src={bannerShape5}
              draggable={false}
              className="animate-wiggle"
              style={{ animationDelay: "1.5s" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
