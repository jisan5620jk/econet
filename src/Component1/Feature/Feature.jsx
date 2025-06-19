import featureIcon from "/images/feature-box-icon.png";
import featureIcon2 from "/images/feature-box-icon2.png";
import featureIcon3 from "/images/feature-box-icon3.png";
import FeatureCard from "./FeatureCard";
import { IoMdLogIn } from "react-icons/io";

const featureData = [
  {
    featureIcon: featureIcon,
    featureTitle: "Suntainable energy Environment",
    featureUrl: "/feature",
    featureBtnIcon: <IoMdLogIn />,
    boxBg: "before:bg-[url('/images/feature-box-bg.png')]",
  },
  {
    featureIcon: featureIcon2,
    featureTitle: "Environment Waste Recycling",
    featureUrl: "/feature",
    featureBtnIcon: <IoMdLogIn />,
    boxBg: "before:bg-[url('/images/feature-box-bg.png')]",
  },
  {
    featureIcon: featureIcon3,
    featureTitle: "Dirty Recycling and Tree Plantation",
    featureUrl: "/feature",
    featureBtnIcon: <IoMdLogIn />,
    boxBg: "before:bg-[url('/images/feature-box-bg.png')]",
  },
];

const Feature = () => {
  return (
    <section className="bg-white pt-[64px] pb-16 md:pb-20 lg:pb-[120px] rounded-b-[50px]">
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-7 relative z-10">
          {featureData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
