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
    <section className="bg-SecondaryColor-0 px-8 pt-8 flex items-center relative z-10 overflow-hidden">
      <div className="w-full grid lg:grid-cols-2 items-center gap-8">
        <div className="bg-BodyBgDark-0 flex justify-center px-[100px] pb-[120px] pt-20 rounded-[20px] relative overflow-hidden">
          <div>
            <img
              src={bannerImg}
              draggable="false"
              className="2xl:w-[inherit] relative z-10 pl-9"
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
        <div className="bg-gradient-to-tl from-BodyBg-0 via-BoxBg2-0 to-BoxBg3-0 px-[100px] pt-[245px] pb-20 rounded-[20px] relative overflow-hidden">
          <h1 className="font-Outfit font-semibold text-HeadingColor-0 text-[26px] leading-[32px] sm:text-[36px] sm:leading-[42px] md:text-[56px] md:leading-[62px] lg:text-[42px] lg:leading-[48px] xl:text-[48px] xl:leading-[76px] 2xl:text-[74px] 2xl:leading-[78px]">
            Building evergreen
            <br />
            Natural humanity
            <br />
            <span className="text-PrimaryColor-0">Innovate</span> earth
          </h1>
          <div className="mt-8">
            <PrimaryButton as="link" href="/about">
              Explore Services <GoArrowRight size={22} />
            </PrimaryButton>
            <div></div>
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
