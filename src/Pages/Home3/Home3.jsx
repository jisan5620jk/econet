import About from "../../Component3/About/About";
import Banner from "../../Component3/Banner/Banner";
import Blog from "../../Component3/Blog/Blog";
import Brand from "../../Component3/Brand/Brand";
import Donations from "../../Component3/Donations/Donations";
import Marquee from "../../Component3/Marquee/Marquee";
import Process from "../../Component3/Process/Process";
import Project from "../../Component3/Project/Project";
import Service from "../../Component3/Service/Service";
import Testimonial from "../../Component3/Testimonial/Testimonial";
import WhyChoose from "../../Component3/Whychoose/WhyChoose";
import BoxReveal from "../../Shared/BoxAnim/BoxReveal";

const Home3 = () => {
  BoxReveal();
  return (
    <>
      <Banner />
      <Marquee />
      <About />
      <Service />
      <WhyChoose />
      <Process />
      <Project />
      <Donations />
      <Testimonial />
      <Blog />
      <Brand />
    </>
  );
};

export default Home3;
