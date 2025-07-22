import featureIcon from "/images/charity-feature-icon.png";
import featureIcon2 from "/images/charity-feature-icon2.png";
import featureIcon3 from "/images/charity-feature-icon3.png";
import FeatureCard from "./FeatureCard";
import lineShape from "/images/line-shape.png";

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
      <div className="absolute -bottom-2.5 sm:-bottom-5 md:-bottom-6 lg:-bottom-8 2xl:-bottom-11 3xl:-bottom-[58px] left-0 right-0">
        <img src={lineShape} alt="Line Shape" draggable={false} />
      </div>
    </section>
  );
};

export default Feature;
