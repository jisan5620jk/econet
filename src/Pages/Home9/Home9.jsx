import About from "../../Component9/About/About";
import Appointment from "../../Component9/Appointment/Appointment";
import Banner from "../../Component9/Banner/Banner";
import Blog from "../../Component9/Blog/Blog";
import CallDoAction from "../../Component9/CallDoAction/CallDoAction";
import Feature from "../../Component9/Feature/Feature";
import Process from "../../Component9/Process/Process";
import Project from "../../Component9/Project/Project";
import Service from "../../Component9/Service/Service";
import Testimonial from "../../Component9/Testimonial/Testimonial";
import WhyChoose from "../../Component9/Whychoose/WhyChoose";
import BoxReveal from "../../Shared/BoxAnim/BoxReveal";

const Home9 = () => {
  BoxReveal();
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

export default Home9;
