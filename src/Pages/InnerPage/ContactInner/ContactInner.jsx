import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import Contact from "./Contact";
import Map from "./Map";
import BoxReveal from "../../../Shared/BoxAnim/BoxReveal";
import ImageReveal from "../../../Shared/ImageReveal/ImageReveal";
import TextReveal from "../../../Shared/TextAnim/TextReveal";

const ContactInner = () => {
  BoxReveal();
  ImageReveal();
  TextReveal();
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Contact Us"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Contact Us"}
      />
      <Contact />
      <Map />
    </>
  );
};

export default ContactInner;
