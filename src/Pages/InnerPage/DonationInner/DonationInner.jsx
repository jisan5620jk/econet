import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import { FaArrowRightLong } from "react-icons/fa6";

import subtitleIcon from "/images/sub-title-icon.png";
import DonationCard from "./DonationCard";

const cardData = [
  {
    image: "/images/classic-donation-img.png",
    category: "Discover",
    title: "Fund Raising for Tree Plantation - 2025",
    raised: 1260,
    goal: 1700,
    color: "bg-PrimaryColor-0",
    URL: "/",
  },
  {
    image: "/images/classic-donation-img2.png",
    category: "Ecology",
    title: "Cleaning Environment Campaign - 2025",
    raised: 1080,
    goal: 1500,
    color: "bg-PrimaryColor-0",
    URL: "/",
  },
  {
    image: "/images/classic-donation-img3.png",
    category: "Plantation",
    title: "Save the Soil Movement Donate Here",
    raised: 1790,
    goal: 1900,
    color: "bg-PrimaryColor-0",
    URL: "/",
  },
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

const DonationInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Donations"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Donations"}
      />
      <section className="service relative pt-28 pb-[120px] bg-white z-10">
        <div className="Container">
          <div className="text-center">
            <h5 className="zoom-in font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
              <img src={subtitleIcon} alt="Icon" draggable={false} /> Donations
            </h5>
            <h1 className="font-Outfit font-semibold text-lg leading-6 sm:text-[32px] sm:leading-[40px] md:text-[42px] md:leading-[50px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-HeadingColor-0 mt-3.5">
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
      </section>
    </>
  );
};

export default DonationInner;
