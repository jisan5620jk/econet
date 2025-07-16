import About from "../../Component7/About/About";
import Appointment from "../../Component7/Appointment/Appointment";
import Banner from "../../Component7/Banner/Banner";
import Blog from "../../Component7/Blog/Blog";
import CallDoAction from "../../Component7/CallDoAction/CallDoAction";
import Process from "../../Component7/Process/Process";
import Project from "../../Component7/Project/Project";
import Service from "../../Component7/Service/Service";
import Testimonial from "../../Component7/Testimonial/Testimonial";
import WhyChoose from "../../Component7/Whychoose/WhyChoose";
import BoxReveal from "../../Shared/BoxAnim/BoxReveal";

const Home7 = () => {
  BoxReveal();
  return (
    <>
      <Banner />
      <About />
      <Service />
      <WhyChoose />
      <Project />
      <Process />
      <Appointment />
      <Testimonial />
      <Blog />
      <CallDoAction />
    </>
  );
};

export default Home7;
