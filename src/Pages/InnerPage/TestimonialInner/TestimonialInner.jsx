import testiImg from "/images/testi2-img.png";
import testiImg2 from "/images/testi2-img2.png";
import testiImg3 from "/images/testi2-img3.png";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import { FaArrowRightLong } from "react-icons/fa6";
import TestimonialCard from "./TestimonialCard";
import subtitleIcon from "/images/sub-title-icon.png";
import BoxReveal from "../../../Shared/BoxAnim/BoxReveal";
import ImageReveal from "../../../Shared/ImageReveal/ImageReveal";
import TextReveal from "../../../Shared/TextAnim/TextReveal";

const testiData = [
  {
    image: testiImg2,
    name: "Anjelina Watson",
    role: "UI Designer",
    company: "Dream IT",
    rating: 5.0,
    review:
      "Econet is a environmental organization maintaince monetize worldwide outside the box thinking for end-to-end outsourcing. Conceptualize networks parallel",
  },
  {
    image: testiImg,
    name: "John D. Alex",
    role: "UI Designer",
    company: "Dream IT",
    rating: 5.0,
    review:
      "Econet is a environmental organization maintaince monetize worldwide outside the box thinking for end-to-end outsourcing. Conceptualize networks parallel",
  },
  {
    image: testiImg3,
    name: "Jakulin Farna",
    role: "UI Designer",
    company: "Dream IT",
    rating: 5.0,
    review:
      "Econet is a environmental organization maintaince monetize worldwide outside the box thinking for end-to-end outsourcing. Conceptualize networks parallel",
  },
  {
    image: testiImg2,
    name: "Anjelina Watson",
    role: "UI Designer",
    company: "Dream IT",
    rating: 5.0,
    review:
      "Econet is a environmental organization maintaince monetize worldwide outside the box thinking for end-to-end outsourcing. Conceptualize networks parallel",
  },
  {
    image: testiImg,
    name: "John D. Alex",
    role: "UI Designer",
    company: "Dream IT",
    rating: 5.0,
    review:
      "Econet is a environmental organization maintaince monetize worldwide outside the box thinking for end-to-end outsourcing. Conceptualize networks parallel",
  },
  {
    image: testiImg3,
    name: "Jakulin Farna",
    role: "UI Designer",
    company: "Dream IT",
    rating: 5.0,
    review:
      "Econet is a environmental organization maintaince monetize worldwide outside the box thinking for end-to-end outsourcing. Conceptualize networks parallel",
  },
];

const TestimonialInner = () => {
  BoxReveal();
  ImageReveal();
  TextReveal();
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Testimonial"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Testimonial"}
      />
      <section className="py-16 md:py-20 lg:py-28 bg-white relative z-10">
        <div className="Container">
          <div className="text-center">
            <h5 className="zoom-in font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
              <img src={subtitleIcon} alt="Icon" draggable={false} /> Projects
            </h5>
            <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[42px] md:text-[44px] md:leading-[52px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-HeadingColor-0 mt-3.5">
              Clients Best Feedback About
              <br />
              Econet Provission
            </h1>
          </div>
          <div className="box-row grid grid-cols-1 lg:grid-cols-2 gap-6 mt-[56px]">
            {testiData.map((service, index) => {
              return (
                <div key={index} className="box">
                  <TestimonialCard {...service} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialInner;
