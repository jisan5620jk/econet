import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import Pricing from "./Pricing/Pricing";
import BoxReveal from "../../../Shared/BoxAnim/BoxReveal";
import ImageReveal from "../../../Shared/ImageReveal/ImageReveal";
import TextReveal from "../../../Shared/TextAnim/TextReveal";

const PricingInner = () => {
  BoxReveal();
  ImageReveal();
  TextReveal();
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Affordable Price"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Pricing"}
      />
      <Pricing />
    </>
  );
};

export default PricingInner;
