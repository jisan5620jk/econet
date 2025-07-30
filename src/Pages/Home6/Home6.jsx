import About from "../../Component6/About/About";
import Appointment from "../../Component6/Appointment/Appointment";
import Banner from "../../Component6/Banner/Banner";
import Blog from "../../Component6/Blog/Blog";
import CallDoAction from "../../Component6/CallDoAction/CallDoAction";
import Feature from "../../Component6/Feature/Feature";
import Process from "../../Component6/Process/Process";
import Project from "../../Component6/Project/Project";
import Service from "../../Component6/Service/Service";
import Testimonial from "../../Component6/Testimonial/Testimonial";
import WhyChoose from "../../Component6/Whychoose/WhyChoose";
import BoxReveal from "../../Shared/BoxAnim/BoxReveal";
import ImageReveal from "../../Shared/ImageReveal/ImageReveal";
import TextReveal from "../../Shared/TextAnim/TextReveal";

const Home6 = () => {
  BoxReveal();
  ImageReveal();
  TextReveal();
  return (
    <>
      <Banner />
      <Feature />
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

export default Home6;
