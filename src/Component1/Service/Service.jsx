import serviceImg from "/images/service-img.png";
import serviceImg2 from "/images/service-img2.png";
import serviceImg3 from "/images/service-img3.png";
import serviceImg4 from "/images/service-img4.png";
import shape from "/images/service-shape.png";
import subtitleIcon from "/images/sub-title-icon.png";
import ServiceCard from "./ServiceCard";
import { IoMdLogIn } from "react-icons/io";

const serviceCard = [
  {
    serviceTitle: "Green Building Solutions",
    serviceImg: serviceImg,
    serviceUrl: "/service_details",
    serviceBtnIcon: <IoMdLogIn />,
    boxBg: true,
    titlePb: "pb-[31px]",
    iconTop: "top-8 sm:top-8 md:top-7 xl:top-5 ",
  },
  {
    serviceTitle: "Echology Climate Solutions",
    serviceImg: serviceImg2,
    serviceUrl: "/service_details",
    serviceBtnIcon: <IoMdLogIn />,
    boxBg: true,
    titlePb: "pb-[31px]",
    iconTop: "top-8 sm:top-8 md:top-7 xl:top-5 ",
  },
  {
    serviceTitle: "Renewable Energy Implement",
    serviceImg: serviceImg3,
    serviceUrl: "/service_details",
    serviceBtnIcon: <IoMdLogIn />,
    boxBg2: true,
    titlePb: "pb-5 sm:pb-[30px]",
    iconTop: "top-4 sm:top-3 xl:top-0",
  },
  {
    serviceTitle: "Forest Management Eco-System",
    serviceImg: serviceImg4,
    serviceUrl: "/service_details",
    serviceBtnIcon: <IoMdLogIn />,
    boxBg2: true,
    titlePb: "pb-5 sm:pb-[30px]",
    iconTop: "top-4 sm:top-3 xl:top-0",
  },
];

const Service = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-[120px] bg-BodyBg-0 overflow-hidden">
      <div className="fade-left absolute left-[15%] top-36">
        <img
          src={shape}
          draggable={false}
          alt="Shape"
          className="animate-dance2 hidden lg:block"
          style={{ animationDuration: "3.5s" }}
        />
      </div>
      <div
        className="fade-right absolute right-[15%] top-36 -rotate-90"
        style={{ animationDelay: "1.5s" }}
      >
        <img
          src={shape}
          draggable={false}
          alt="Shape"
          className="animate-dance2 hidden lg:block"
          style={{ animationDuration: "3.5s" }}
        />
      </div>
      <div className="px-3 2xl:px-[120px]">
        <div className="text-center">
          <h5 className="zoom-in font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
            <img src={subtitleIcon} alt="Icon" draggable={false} /> Services
          </h5>
          <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[42px] md:text-[44px] md:leading-[52px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-HeadingColor-0 mt-3.5">
            We Bring Powerful Solution
            <br />
            Protect Environment
          </h1>
        </div>
        <div className="box-row grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center gap-7 mt-8 md:mt-[52px]">
          {serviceCard.map((service, index) => (
            <div key={index} className="box">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
