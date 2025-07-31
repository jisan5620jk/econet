import serviceImg from "/images/classic-service-img.png";
import serviceImg2 from "/images/classic-service-img2.png";
import serviceImg3 from "/images/classic-service-img3.png";
import serviceImg4 from "/images/classic-service-img4.png";
import serviceImg5 from "/images/classic-service-img5.png";
import serviceImg6 from "/images/classic-service-img6.png";
import serviceIcon from "/images/classic-service-icon.png";
import serviceIcon2 from "/images/classic-service-icon2.png";
import serviceIcon3 from "/images/classic-service-icon3.png";
import serviceIcon4 from "/images/service2-icon1.png";
import serviceIcon5 from "/images/service2-icon2.png";
import serviceIcon6 from "/images/service2-icon3.png";
import { FaArrowRightLong } from "react-icons/fa6";
import ServiceCard from "./ServiceCard";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import subtitleIcon from "/images/sub-title-icon.png";
import BoxReveal from "../../../Shared/BoxAnim/BoxReveal";
import ImageReveal from "../../../Shared/ImageReveal/ImageReveal";
import TextReveal from "../../../Shared/TextAnim/TextReveal";

const serviceData = [
  {
    serviceImg: serviceImg,
    serviceIcon: serviceIcon,
    serviceTitle: "Suntainable energy Environment",
    serviceUrl: "/service",
  },
  {
    serviceImg: serviceImg2,
    serviceIcon: serviceIcon2,
    serviceTitle: "Environment Waste Recycling",
    serviceUrl: "/service",
  },
  {
    serviceImg: serviceImg3,
    serviceIcon: serviceIcon3,
    serviceTitle: "Dirty Recycling and Tree Plantation",
    serviceUrl: "/service",
  },
  {
    serviceImg: serviceImg4,
    serviceIcon: serviceIcon4,
    serviceTitle: "Windmill Turbine Installation",
    serviceUrl: "/service",
  },
  {
    serviceImg: serviceImg5,
    serviceIcon: serviceIcon5,
    serviceTitle: "Solar Panel Installation Safty Guide",
    serviceUrl: "/service",
  },
  {
    serviceImg: serviceImg6,
    serviceIcon: serviceIcon6,
    serviceTitle: "Solar Panel Cleaning Services",
    serviceUrl: "/service",
  },
];

const ServiceInner = () => {
  BoxReveal();
  ImageReveal();
  TextReveal();
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Our Services"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Our Services"}
      />
      <section className="py-16 md:py-20 lg:py-[120px] relative z-10 bg-white">
        <div className="Container">
          <div className="text-center">
            <h5 className="zoom-in font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
              <img src={subtitleIcon} alt="Icon" draggable={false} /> Our
              Services
            </h5>
            <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[42px] md:text-[44px] md:leading-[52px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-HeadingColor-0 mt-3.5">
              Leading the Transition to
              <br />
              Renewable Energy
            </h1>
          </div>
          <div className="mt-[60px]">
            <div className="box-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {serviceData.map((service, index) => (
                <div key={index} className="box">
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceInner;
