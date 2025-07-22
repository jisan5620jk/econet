import featureIcon from "/images/charity-feature-icon.png";
import featureIcon2 from "/images/charity-feature-icon2.png";
import featureIcon3 from "/images/charity-feature-icon3.png";
import FeatureCard from "./FeatureCard";

const featureData = [
  {
    featureIcon: featureIcon,
    featureTitle: "Healthy Foods Suppliers",
    featureUrl: "/feature",
  },
  {
    featureIcon: featureIcon2,
    featureTitle: "Quality Education Initiatives",
    featureUrl: "/feature",
  },
  {
    featureIcon: featureIcon3,
    featureTitle: "Medical Care Assistance",
    featureUrl: "/feature",
  },
];

const Feature = () => {
  return (
    <section className="bg-SecondaryColor-0 py-16 md:py-20 lg:py-[100px] relative z-20 -mt-5">
      <div className="Container pt-5">
        <div className="box-row relative z-10 flex items-center gap-7 flex-wrap">
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
