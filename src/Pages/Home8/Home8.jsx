import About from "../../Component8/About/About";
import Appointment from "../../Component8/Appointment/Appointment";
import Banner from "../../Component8/Banner/Banner";
import Blog from "../../Component8/Blog/Blog";
import CallDoAction from "../../Component8/CallDoAction/CallDoAction";
import Process from "../../Component8/Process/Process";
import Project from "../../Component8/Project/Project";
import Service from "../../Component8/Service/Service";
import Testimonial from "../../Component8/Testimonial/Testimonial";
import WhyChoose from "../../Component8/Whychoose/WhyChoose";
import BoxReveal from "../../Shared/BoxAnim/BoxReveal";

const Home8 = () => {
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

export default Home8;
