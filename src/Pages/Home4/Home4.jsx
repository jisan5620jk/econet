import About from "../../Component4/About/About";
import Banner from "../../Component4/Banner/Banner";
import Blog from "../../Component4/Blog/Blog";
import Brand from "../../Component4/Brand/Brand";
import Donations from "../../Component4/Donations/Donations";
import Marquee from "../../Component4/Marquee/Marquee";
import Process from "../../Component4/Process/Process";
import Project from "../../Component4/Project/Project";
import Service from "../../Component4/Service/Service";
import Testimonial from "../../Component4/Testimonial/Testimonial";
import WhyChoose from "../../Component4/Whychoose/WhyChoose";
import BoxReveal from "../../Shared/BoxAnim/BoxReveal";
import ImageReveal from "../../Shared/ImageReveal/ImageReveal";
import TextReveal from "../../Shared/TextAnim/TextReveal";

const Home4 = () => {
  BoxReveal();
  ImageReveal();
  TextReveal();
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

export default Home4;
