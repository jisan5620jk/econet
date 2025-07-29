import subtitleIcon from "/images/sub-title-icon.png";
import aboutThumb from "/images/about2-thumb.png";
import shape from "/images/about2-shape.gif";
import { GoArrowRight } from "react-icons/go";
import OnScrollCounter from "../../../../Shared/Counter/OnScrollCounter";
import PrimaryButton from "../../../../Shared/PrimaryButton/PrimaryButton";

const cardData = [
  {
    Bg: "/images/about2-card.png",
    counter: 10,
    counterSuffix: "K+",
    description: "Our Total Completed Solar Projects",
  },
  {
    Bg: "/images/about2-card2.png",
    counter: 98,
    counterSuffix: "%",
    description: "Customer Satisfaction Rates",
  },
];

const itemData = [
  {
    icon: "/images/about2-icon.png",
    title: "Expert Installation Team",
    description:
      "We leverage real environmental data tailor projects that maximize ecology benefit in your region",
  },
  {
    icon: "/images/about2-icon2.png",
    title: "24 Hours Clients Supports",
    description:
      "We leverage real environmental data tailor projects that maximize ecology benefit in your region",
  },
];

const About = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-[120px] relative z-10 overflow-hidden">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-8 xl:gap-12 2xl:gap-20">
          <div>
            <h5 className="zoom-in font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
              <img src={subtitleIcon} alt="Icon" draggable={false} /> About Us
            </h5>
            <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[42px] md:text-[44px] md:leading-[52px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-HeadingColor-0 mt-3.5">
              Leading the Transition to
              <br />
              Renewable Energy
            </h1>
            <div className="mt-10 md:mt-5">
              <img src={aboutThumb} draggable={false} alt="About Image" />
            </div>
          </div>
          <div>
            <div className="box-row grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className={`box group px-10 sm:px-4 md:px-10 lg:px-4 xl:px-10 pt-8 pb-[34px] relative z-10`}
                >
                  {/* Card BG */}
                  <div className="absolute -z-10 top-0 right-0 w-full h-full">
                    <img
                      src={card.Bg}
                      alt="Card Background"
                      draggable={false}
                      className="w-full h-full"
                    />
                  </div>

                  {/* Card Counter */}
                  <div className="!font-Outfit font-semibold text-[50px] leading-7 text-white flex gap-1 justify-start items-center">
                    <OnScrollCounter
                      start={0}
                      end={card.counter}
                      duration={1000}
                    />
                    <span className="-mt-2">{card.counterSuffix}</span>
                  </div>

                  {/* Descrition */}
                  <h5 className="font-NotoSans text-white text-lg w-full max-w-[180px] mt-4">
                    {card.description}
                  </h5>
                </div>
              ))}
            </div>
            <div className="box-row mt-6">
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
                    <h3 className="font-Outfit text-xl sm:text-2xl md:text-[22px] xl:text-xl 2xl:text-2xl font-medium text-HeadingColor-0 md:w-[170px] lg:w-[inherit]">
                      {item.title}
                    </h3>
                  </div>

                  {/* Descrition */}
                  <p className="font-NotoSans text-TextColor-0 max-w-[312px] xl:max-w-[280px] 2xl:max-w-[312px] w-full">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-2 md:mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-7">
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
          </div>
        </div>
      </div>
      <div className="absolute -bottom-3 right-8 z-10 hidden 3xl:block">
        <img
          src={shape}
          draggable={false}
          alt="Shape"
          className="w-full max-w-[356px]"
        />
      </div>
    </section>
  );
};

export default About;
