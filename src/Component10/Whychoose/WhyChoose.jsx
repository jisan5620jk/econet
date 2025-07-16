import shape from "/images/why-choose2-shape.png";
import shape2 from "/images/why-choose2-shape2.png";
import shape3 from "/images/why-choose2-shape3.png";
import shape4 from "/images/why-choose2-shape4.png";
import subtitleIcon from "/images/sub-title-icon.png";
import icon from "/images/why-choose2-icon1.png";
import icon2 from "/images/why-choose2-icon2.png";
import icon3 from "/images/why-choose2-icon3.png";
import icon4 from "/images/why-choose2-icon4.png";
import icon5 from "/images/why-choose2-icon5.png";
import icon6 from "/images/why-choose2-icon6.png";
import whyChooseThumb from "/images/why-choose2-thumb.png";

const featuresLeft = [
  {
    label: "Monitoring System",
    icon: icon,
    bgColor: "bg-PrimaryColor-0",
    textColor: "bg-PrimaryColor-0",
  },
  {
    label: "Expert Engineer",
    icon: icon2,
    bgColor: "bg-PrimaryColor2-0",
    textColor: "text-PrimaryColor2-0",
  },
  {
    label: "Long Term Warranty",
    icon: icon3,
    bgColor: "bg-SecondaryColor-0",
    textColor: "text-SecondaryColor-0",
  },
];

const featuresRight = [
  {
    label: "Save Electricity Bill",
    icon: icon4,
    bgColor: "bg-PrimaryColor-0",
    textColor: "bg-PrimaryColor-0",
  },
  {
    label: "High Quality Panels",
    icon: icon5,
    bgColor: "bg-PrimaryColor2-0",
    textColor: "text-PrimaryColor2-0",
  },
  {
    label: "24 Hours Supports",
    icon: icon6,
    bgColor: "bg-SecondaryColor-0",
    textColor: "text-SecondaryColor-0",
  },
];

const WhyChoose = () => {
  return (
    <div className="px-2 md:px-4 3xl:px-8 bg-SecondaryColor-0 relative z-10 -mt-5">
      <section className="bg-[url(/images/about2-bg.png)] bg-no-repeat bg-cover bg-center py-16 md:py-20 lg:pb-0 lg:pt-[120px] relative z-10 rounded-[20px]">
        <div className="fade-left absolute left-[22%] top-52">
          <img
            src={shape}
            draggable={false}
            alt="Shape"
            className="animate-wiggle hidden 3xl:block"
            style={{ animationDuration: "4s" }}
          />
        </div>
        <div className="zoom-in absolute right-[22%] top-48">
          <img
            src={shape2}
            draggable={false}
            alt="Shape"
            className="animate-rotational hidden 3xl:block"
            style={{ animationDuration: "9s" }}
          />
        </div>
        <div className="fade-left absolute left-8 bottom-0">
          <img
            src={shape3}
            draggable={false}
            alt="Shape"
            className="animate-wiggle hidden 3xl:block"
            style={{ animationDuration: "6s" }}
          />
        </div>
        <div className="zoom-in absolute right-8 bottom-8 hidden 3xl:block">
          <img src={shape4} draggable={false} alt="Shape" />
        </div>
        <div className="Container pt-5">
          <div className="text-center">
            <h5 className="zoom-in font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
              <img src={subtitleIcon} alt="Icon" draggable={false} /> Why Choose
              Us
            </h5>
            <h1 className="font-Outfit font-semibold text-lg leading-7 sm:text-[32px] sm:leading-[40px] md:text-[44px] md:leading-[52px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-HeadingColor-0 mt-3.5">
              Don’t Just Install Solar—We Build
              <br />
              Energy Partnerships
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between mt-10 md:mt-[58px]">
            {/* Left features */}
            <div className="box-row flex-1 flex flex-col space-y-4 md:mr-9 xl:mt-[38px] lg:pb-8 xl:pb-0">
              {featuresLeft.map((item, index) => (
                <div
                  key={index}
                  className="box group flex gap-4 items-center justify-start bg-white p-5 rounded-full transition shadow-shade max-w-[395px] w-full relative z-10 overflow-hidden"
                >
                  <div
                    className={`size-[60px] flex items-center justify-center rounded-full ${item.bgColor} ${item.textColor} relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:scale-0 before:rounded-full before:transition-all before:duration-500 group-hover:before:scale-100`}
                  >
                    <img
                      src={item.icon}
                      draggable={false}
                      alt="Icon"
                      className="transition-all duration-500 group-hover:brightness-0 group-hover:invert-1 group-hover:animate-wobble_vertical"
                    />
                  </div>
                  <h4 className="flex-1 font-Outfit text-HeadingColor-0 text-[22px] sm:text-2xl font-medium transition-all duration-500 group-hover:text-white">
                    {item.label}
                  </h4>
                  <div>
                    {[
                      { initial: "left-[12.5%]", hover: "group-hover:left-0" },
                      {
                        initial: "left-[37.5%]",
                        hover: "group-hover:left-[25%]",
                      },
                      {
                        initial: "left-[62.5%]",
                        hover: "group-hover:left-1/2",
                      },
                      {
                        initial: "left-[87.5%]",
                        hover: "group-hover:left-[75%]",
                      },
                    ].map((pos, i) => (
                      <span
                        key={i}
                        className={`absolute -z-10 top-0 h-full w-0 transition-all duration-500 ${item.bgColor} group-hover:w-[25%] ${pos.initial} ${pos.hover}`}
                      ></span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Center Image */}
            <div className="flex-1 flex justify-center lg:-mb-[98px] relative z-10 md:hidden lg:flex">
              <div className="overflow-hidden flex items-center justify-center">
                <img src={whyChooseThumb} alt="House" draggable={false} />
              </div>
            </div>

            {/* Right features */}
            <div className="box-row flex-1 flex flex-col space-y-4 lg:ml-[54px] xl:mt-[38px] lg:pb-8 xl:pb-0">
              {featuresRight.map((item, index) => (
                <div
                  key={index}
                  className="box group flex gap-4 items-center justify-start bg-white p-5 rounded-full transition shadow-shade max-w-[395px] w-full relative z-10 overflow-hidden"
                >
                  <div
                    className={`size-[60px] flex items-center justify-center rounded-full ${item.bgColor} ${item.textColor} relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:scale-0 before:rounded-full before:transition-all before:duration-500 group-hover:before:scale-100`}
                  >
                    <img
                      src={item.icon}
                      draggable={false}
                      alt="Icon"
                      className="transition-all duration-500 group-hover:brightness-0 group-hover:invert-1 group-hover:animate-wobble_vertical"
                    />
                  </div>
                  <h4 className="flex-1 font-Outfit text-HeadingColor-0 text-[22px] sm:text-2xl font-medium transition-all duration-500 group-hover:text-white">
                     {item.label}
                  </h4>
                  <div>
                    {[
                      { initial: "left-[12.5%]", hover: "group-hover:left-0" },
                      {
                        initial: "left-[37.5%]",
                        hover: "group-hover:left-[25%]",
                      },
                      {
                        initial: "left-[62.5%]",
                        hover: "group-hover:left-1/2",
                      },
                      {
                        initial: "left-[87.5%]",
                        hover: "group-hover:left-[75%]",
                      },
                    ].map((pos, i) => (
                      <span
                        key={i}
                        className={`absolute -z-10 top-0 h-full w-0 transition-all duration-500 ${item.bgColor} group-hover:w-[25%] ${pos.initial} ${pos.hover}`}
                      ></span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChoose;
