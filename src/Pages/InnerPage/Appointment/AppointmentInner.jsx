import { FaArrowRightLong } from "react-icons/fa6";
import Appointment from "./Appointment";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import Process from "../../../Component7/Process/Process";
import BoxReveal from "../../../Shared/BoxAnim/BoxReveal";
import ImageReveal from "../../../Shared/ImageReveal/ImageReveal";
import TextReveal from "../../../Shared/TextAnim/TextReveal";

const AppointmentInner = () => {
  BoxReveal();
  ImageReveal();
  TextReveal();
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Book Appointment"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Book Appointment"}
      />
      <Appointment />
      <Process />
    </>
  );
};

export default AppointmentInner;
