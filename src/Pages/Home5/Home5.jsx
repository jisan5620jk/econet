import About from "../../Component5/About/About";
import Appointment from "../../Component5/Appointment/Appointment";
import Banner from "../../Component5/Banner/Banner";
import Blog from "../../Component5/Blog/Blog";
import CallDoAction from "../../Component5/CallDoAction/CallDoAction";
import Feature from "../../Component5/Feature/Feature";
import Process from "../../Component5/Process/Process";
import Project from "../../Component5/Project/Project";
import Service from "../../Component5/Service/Service";
import Testimonial from "../../Component5/Testimonial/Testimonial";
import WhyChoose from "../../Component5/Whychoose/WhyChoose";
import BoxReveal from "../../Shared/BoxAnim/BoxReveal";
import ImageReveal from "../../Shared/ImageReveal/ImageReveal";
import TextReveal from "../../Shared/TextAnim/TextReveal";

const Home5 = () => {
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

export default Home5;
