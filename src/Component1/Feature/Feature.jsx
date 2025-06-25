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
  },
  {
    featureIcon: featureIcon2,
    featureTitle: "Environment Waste Recycling",
    featureUrl: "/feature",
    featureBtnIcon: <IoMdLogIn />,
  },
  {
    featureIcon: featureIcon3,
    featureTitle: "Dirty Recycling and Tree Plantation",
    featureUrl: "/feature",
    featureBtnIcon: <IoMdLogIn />,
  },
];

const Feature = () => {
  return (
    <section className="bg-white pt-[64px] pb-16 md:pb-20 lg:pb-[120px] rounded-b-[50px]">
      <div className="Container">
        <div className="box-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-7 relative z-10">
          {featureData.map((feature, index) => (
            <div key={index} className="box">
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
