import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import TeamMember from "../../../Component1/TeamMember/TeamMember";
import Testimonial from "../../../Component8/Testimonial/Testimonial";
import About from "./About/About";
import Brand from "../../../Component1/Brand/Brand";
import Process from "../../../Component1/Process/Process";
import BoxReveal from "../../../Shared/BoxAnim/BoxReveal";
import ImageReveal from "../../../Shared/ImageReveal/ImageReveal";
import TextReveal from "../../../Shared/TextAnim/TextReveal";

const AboutInner = () => {
  BoxReveal();
  ImageReveal();
  TextReveal();
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"About Us"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"About Us"}
      />
      <About />
      <Process />
      <TeamMember />
      <Testimonial />
      <Brand />
    </>
  );
};

export default AboutInner;
