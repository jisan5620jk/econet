import whyChooseThumb from "/images/why-choose-thumb.png";
import shape from "/images/why-choose-shape.png";
import shape2 from "/images/why-choose-shape2.png";
import OnScrollCounter from "../../Shared/Counter/OnScrollCounter";
import { PiSealCheckFill } from "react-icons/pi";
import subtitleIcon from "/images/sub-title-icon.png";

const features = [
  {
    icon: "/images/why-choose-item-icon.png",
    title: "Data-Driven Green Solution",
    description:
      "We leverage real environmental data tailor projects that maximize ecology benefit in your region",
  },
  {
    icon: "/images/why-choose-item-icon2.png",
    title: "Community 1st Approach",
    description:
      "We leverage real environmental data tailor projects that maximize ecology benefit in your region",
  },
  {
    icon: "/images/why-choose-item-icon3.png",
    title: "Innovation Tech Integrations",
    description:
      "We leverage real environmental data tailor projects that maximize ecology benefit in your region",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-SecondaryColor-0 pt-16 md:pt-20 lg:pt-[172px] pb-16 md:pb-20 lg:pb-[120px] relative overflow-hidden -mt-[52px]">
      <div className="absolute left-0 -top-0">
        <img
          src={shape}
          draggable={false}
          alt="Shape"
          className="animate-wiggle hidden lg:block"
          style={{ animationDuration: "5s" }}
        />
      </div>
      <div className="absolute right-[15%] top-36">
        <img
          src={shape2}
          draggable={false}
          alt="Shape"
          className="animate-dance2 hidden lg:block"
          style={{ animationDuration: "4s" }}
        />
      </div>
      <div className="Container">
        <div className="text-center">
          <h5 className="font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
            <img src={subtitleIcon} alt="Icon" draggable={false} /> Why Choose
            Us
          </h5>
          <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[50px] 2xl:leading-[58px] text-white mt-3.5">
            We Bring Powerful Solution
            <br />
            Protect Environment
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-6 2xl:gap-10 mt-[60px]">
          <div className="relative z-10">
            <img
              src={whyChooseThumb}
              draggable="false"
              className="w-full xl:w-[inherit] 2xl:max-w-[inherit]"
            />
            <div className="hidden sm:block absolute bottom-20 -left-[100px] text-center bg-[url('/images/why-choose-info-bg.png')] bg-no-repeat bg-cover bg-top rounded-[20px] px-7 lg:px-5 xl:px-7 pt-10 pb-10 w-full max-w-[240px]">
              <div className="text-[40px] text-white flex items-center justify-center mb-3">
                <PiSealCheckFill />
              </div>
              <div className="!font-Outfit font-semibold text-[70px] leading-7 text-white flex gap-1 justify-center items-center">
                <OnScrollCounter start={0} end={10} duration={1000} />
                <span className="-mt-2">K</span>
              </div>
              <h5 className="font-NotoSans text-white text-lg mt-1">
                Fineshed Works
              </h5>
            </div>
          </div>
          <div className="relative">
            <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[42px] md:text-[36px] md:leading-[44px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] text-white">
              Innovative Technology Integrations Environmental and Ecology
            </h1>
            <div className="mt-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group flex items-center justify-between gap-5 py-10 border-b border-white border-opacity-10 ${
                    index !== 0 ? "" : "border-t"
                  }`}
                >
                  <div className="flex items-center gap-7">
                    {/* Icon */}
                    <div className="size-[74px] rounded-full flex items-center justify-center shrink-0 bg-PrimaryColor-0 relative z-10 overflow-hidden before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor2-0 before:rotate-180 before:transition-all before:duration-500 before:scale-0 before:-z-10 group-hover:before:scale-100 group-hover:before:rotate-0">
                      <img
                        src={feature.icon}
                        alt="Why Choose Feature Icon"
                        draggable={false}
                        className="group-hover:animate-wobble_vertical"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="font-Outfit text-2xl font-medium text-white">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Descrition */}
                  <p className="font-NotoSans text-TextColor2-0 max-w-[312px] w-full">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
