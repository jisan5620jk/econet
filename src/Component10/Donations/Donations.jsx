import DonationCard from "./DonationCard";
import subtitleIcon from "/images/sub-title-icon.png";
import shape from "/images/charity-donation-shape.png";
import shape2 from "/images/charity-donation-shape2.png";

const cardData = [
  {
    image: "/images/charity-donation-img.png",
    category: "EDUCATION",
    title: "Fund Raising for Kids Education - 2025",
    raised: 1260,
    goal: 1600,
    color: "bg-PrimaryColor-0",
    URL: "/",
  },
  {
    image: "/images/charity-donation-img2.png",
    category: "FOODS",
    title: "Donation Campaign for Healthy Meals",
    raised: 1080,
    goal: 1400,
    color: "bg-PrimaryColor-0",
    URL: "/",
  },
  {
    image: "/images/charity-donation-img3.png",
    category: "MEDICAL",
    title: "Medical Fund Raising for Orphan People",
    raised: 1890,
    goal: 2100,
    color: "bg-PrimaryColor-0",
    URL: "/",
  },
];

const Donations = () => {
  return (
    <section className="bg-transparent relative z-30 pt-28 md:pt-32 lg:pt-[130px] before:absolute before:top-0 before:left-0 before:w-full before:h-[92%] before:bg-[url(/images/charity-donation-dark-bg.png)] before:bg-cover before:bg-no-repeat before:bg-center before:-z-10 -mt-5 -mb-16 md:-mb-20 lg:-mb-[130px]">
      <div className="Container">
        <div className="text-center">
          <h5 className="zoom-in font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
            <img src={subtitleIcon} alt="Icon" draggable={false} /> Donations
          </h5>
          <h1 className="font-Outfit font-semibold text-lg leading-6 sm:text-[32px] sm:leading-[40px] md:text-[42px] md:leading-[50px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-white mt-3.5">
            Donate Now and Help Us Continue
            <br />
            Our Life Changing Work
          </h1>
        </div>
        <div className="box-row grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-[58px]">
          {cardData.map((card, i) => (
            <div key={i} className="box">
              <DonationCard {...card} />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -z-10 top-[14%] left-[19%] hidden 3xl:block">
        <img
          src={shape}
          alt="Image Shape"
          draggable={false}
          className="animate-rotateX"
          style={{ animationDuration: "6s" }}
        />
      </div>
      <div className="absolute -z-10 top-[15%] right-[20%] hidden 3xl:block">
        <img
          src={shape2}
          alt="Image Shape"
          draggable={false}
          className="animate-swing"
          style={{ animationDuration: "3.5s" }}
        />
      </div>
    </section>
  );
};

export default Donations;
