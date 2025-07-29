import pricingShape1 from "/images/pricing-shape-1.png";
import pricingShape2 from "/images/pricing-shape-2.png";
import { FaCircle } from "react-icons/fa6";
import PricingCard from "./PricingCard";
import subtitleIcon from "/images/sub-title-icon.png";

const pricingData = [
  {
    currency: "$",
    price: 39,
    pricingDateLine: "/Month",
    pricingDesc:
      "Fast project turnaround time, substantial cost savings & quality standards.",
    pricingTitle: "Starter Plans",
    pricingIcon: <FaCircle />,
    pricingContent1: "Repair & Replacement",
    pricingContent2: "Reliability And Performance",
    pricingContent3: "Real Solar PV Systems",
    pricingContent4: "Just-In-Time Manufacturing",
    pricingUrl: "/pricing_inner",
    pricingBtn: "Choose Plan",
    pricingShape1: pricingShape1,
    pricingShape2: pricingShape2,
  },
  {
    currency: "$",
    price: 59,
    pricingDateLine: "/Month",
    pricingDesc:
      "Fast project turnaround time, substantial cost savings & quality standards.",
    pricingTitle: "Standard Plans",
    pricingIcon: <FaCircle />,
    pricingContent1: "Repair & Replacement",
    pricingContent2: "Reliability And Performance",
    pricingContent3: "Real Solar PV Systems",
    pricingContent4: "Just-In-Time Manufacturing",
    pricingUrl: "/pricing_inner",
    pricingBtn: "Choose Plan",
    pricingShape1: pricingShape1,
    pricingShape2: pricingShape2,
  },
  {
    currency: "$",
    price: 89,
    pricingDateLine: "/Month",
    pricingDesc:
      "Fast project turnaround time, substantial cost savings & quality standards.",
    pricingTitle: "Premium Plans",
    pricingIcon: <FaCircle />,
    pricingContent1: "Repair & Replacement",
    pricingContent2: "Reliability And Performance",
    pricingContent3: "Real Solar PV Systems",
    pricingContent4: "Just-In-Time Manufacturing",
    pricingUrl: "/pricing_inner",
    pricingBtn: "Choose Plan",
    pricingShape1: pricingShape1,
    pricingShape2: pricingShape2,
  },
];

const Pricing = () => {
  return (
    <section className="py-16 md:py-20 lg:py-[120px] bg-BodyBg-0">
      <div className="Container">
        <div className="text-center">
          <h5 className="zoom-in font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center justify-center gap-2 border border-PrimaryColor-0 rounded-full">
            <img src={subtitleIcon} alt="Icon" draggable={false} /> Pricing Plan
          </h5>
          <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[42px] md:text-[44px] md:leading-[52px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-HeadingColor-0 mt-3.5">
            A Customizable Approach
            <br />
            for Your Business
          </h1>
        </div>
        <div className="box-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-12">
          {pricingData.map((cards, index) => (
            <div key={index} className="box">
              <PricingCard {...cards} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
