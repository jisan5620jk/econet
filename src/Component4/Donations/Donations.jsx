import DonationCard from "./DonationCard";
import subtitleIcon from "/images/sub-title-icon.png";
import shape from "/images/charity-donation-shape.png";
import shape2 from "/images/charity-donation-shape2.png";

const cardData = [
  {
    image: "/images/classic-donation-img.png",
    category: "Discover",
    title: "Fund Raising for Tree Plantation - 2025",
    raised: 1260,
    goal: 1600,
    color: "bg-PrimaryColor-0",
    URL: "/donation",
  },
  {
    image: "/images/classic-donation-img2.png",
    category: "Ecology",
    title: "Cleaning Environment Campaign - 2025",
    raised: 1080,
    goal: 1400,
    color: "bg-PrimaryColor-0",
    URL: "/donation",
  },
  {
    image: "/images/classic-donation-img3.png",
    category: "Plantation",
    title: "Save the Soil Movement Donate Here",
    raised: 1890,
    goal: 2100,
    color: "bg-PrimaryColor-0",
    URL: "/donation",
  },
];

const Donations = () => {
  return (
    <div className="-mt-5 relative z-30">
      <section className="bg-BodyBgDark-0 bg-cover bg-no-repeat bg-center py-16 md:py-20 lg:py-[120px]">
        <div className="Container">
          <div className="text-center">
            <h5 className="zoom-in font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
              <img src={subtitleIcon} alt="Icon" draggable={false} /> Donations
            </h5>
            <h1 className="font-Outfit font-semibold text-lg leading-6 sm:text-[32px] sm:leading-[40px] md:text-[42px] md:leading-[50px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-white mt-3.5">
              Join Green Movement – Your
              <br />
              Donation Future Planet’s
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

        <div className="absolute z-10 top-[10%] left-[19%] hidden 3xl:block">
          <img
            src={shape}
            alt="Image Shape"
            draggable={false}
            className="animate-rotateX"
            style={{ animationDuration: "6s" }}
          />
        </div>
        <div className="absolute z-10 top-[14%] right-[20%] hidden 3xl:block">
          <img
            src={shape2}
            alt="Image Shape"
            draggable={false}
            className="animate-swing"
            style={{ animationDuration: "3.5s" }}
          />
        </div>
      </section>
    </div>
  );
};

export default Donations;
