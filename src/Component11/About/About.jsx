import subtitleIcon from "/images/sub-title-icon.png";
import aboutThumb from "/images/charity-about-img.png";
import shape from "/images/charity-about-shape.png";
import shape2 from "/images/charity-about-shape2.png";
import shape3 from "/images/charity-about-shape3.png";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import { GoArrowRight } from "react-icons/go";
import aboutArrow from "/images/charity-about-arrow.png";
import aboutDot from "/images/charity-about-dot.png";
import OnScrollCounter from "../../Shared/Counter/OnScrollCounter";

const itemData = [
  {
    icon: "/images/charity-about-icon.png",
    title: "Donation Management",
    description:
      "We leverage real environmental data tailor projects that maximize ecology benefit in your region",
  },
  {
    icon: "/images/charity-about-icon2.png",
    title: "Volunteer Driven Support",
    description:
      "We leverage real environmental data tailor projects that maximize ecology benefit in your region",
  },
];

const About = () => {
  return (
    <div className="relative z-10 overflow-hidden">
      <section className="bg-white py-16 md:py-20 lg:py-[120px] relative z-10 rounded-[20px] overflow-hidden">
        <div className="Container pb-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 2xl:gap-6 items-center pt-6 pb-2.5">
            <div className="relative 2xl:-ml-[60px]">
              <img src={aboutThumb} draggable={false} alt="About Image" />
              <div className="absolute bottom-14 md:bottom-20 lg:bottom-4 2xl:bottom-20 left-0 md:left-8 lg:left-0 2xl:left-8 hidden sm:block">
                <div className="relative text-center">
                  <div className="font-semibold text-[74px] leading-10 text-PrimaryColor-0">
                    <OnScrollCounter start={0} end={30} duration={1000} />
                  </div>
                  <h6 className="font-Outfit text-HeadingColor-0 font-medium text-lg text-center uppercase pt-1">
                    Years of
                    <br />
                    Experience
                  </h6>
                  <div className="absolute -top-8 -left-[64px] hidden md:block lg:hidden 2xl:block">
                    <img
                      src={aboutArrow}
                      alt="About Arrow"
                      className="animate-swing"
                      style={{ animationDuration: "2s" }}
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-2 right-32 hidden md:block lg:hidden 3xl:block">
                <img
                  src={aboutDot}
                  alt="About Dot"
                  className="animate-dance"
                  style={{ animationDuration: "6s" }}
                />
              </div>
            </div>
            <div>
              <h5 className="zoom-in font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
                <img src={subtitleIcon} alt="Icon" draggable={false} /> About Us
              </h5>
              <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[42px] md:text-[44px] md:leading-[52px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-HeadingColor-0 mt-3.5">
                Creating a Brighter Future
                <br />
                Help the Humanity
              </h1>
              <div className="box-row mt-1">
                {itemData.map((item, index) => (
                  <div
                    key={index}
                    className={`box group flex flex-wrap xl:flex-nowrap items-center justify-between gap-5 py-9 lg:py-3 xl:py-9 border-SecondaryColor-0 border-opacity-10 ${
                      index !== 0 ? "border-t" : ""
                    }`}
                  >
                    <div className="flex items-center gap-7 xl:gap-4 2xl:gap-7">
                      {/* Icon */}
                      <div className="size-[74px] rounded-full flex items-center justify-center shrink-0 bg-PrimaryColor-0 relative z-10 overflow-hidden before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor2-0 before:rotate-180 before:transition-all before:duration-500 before:scale-0 before:-z-10 group-hover:before:scale-100 group-hover:before:rotate-0">
                        <img
                          src={item.icon}
                          alt="Why Choose about Icon"
                          draggable={false}
                          className="group-hover:animate-wobble_vertical"
                        />
                      </div>

                      {/* Title */}
                      <h3 className="font-Outfit text-xl sm:text-2xl md:text-[22px] xl:text-xl 2xl:text-2xl font-medium text-HeadingColor-0 md:w-[170px]">
                        {item.title}
                      </h3>
                    </div>

                    {/* Descrition */}
                    <p className="font-NotoSans text-TextColor-0 max-w-[312px] xl:max-w-[280px] 2xl:max-w-[312px] w-full 2xl:ml-10">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="fade-up mt-2 md:mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-7">
                <PrimaryButton as="link" href="/about">
                  More About Us <GoArrowRight size={22} />
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
            </div>
          </div>
        </div>
        <div className="absolute -top-[6%] left-0 z-10 hidden 3xl:block">
          <img
            src={shape}
            draggable={false}
            alt="Shape"
            className="animate-wiggle"
          />
        </div>
        <div className="absolute top-36 right-32 z-10 hidden 3xl:block">
          <img
            src={shape2}
            draggable={false}
            alt="Shape"
            className="animate-dance2"
            style={{ animationDuration: "5s" }}
          />
        </div>
        <div className="absolute -bottom-8 right-12 z-10 hidden 3xl:block">
          <img
            src={shape3}
            draggable={false}
            alt="Shape"
            className="animate-wiggle"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </section>
    </div>
  );
};

export default About;
