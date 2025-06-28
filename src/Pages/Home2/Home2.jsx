import About from "../../Component2/About/About";
import Banner from "../../Component2/Banner/Banner";
import Blog from "../../Component2/Blog/Blog";
import Brand from "../../Component2/Brand/Brand";
import Process from "../../Component2/Process/Process";
import Project from "../../Component2/Project/Project";
import Service from "../../Component2/Service/Service";
import TeamMember from "../../Component2/TeamMember/TeamMember";
import Testimonial from "../../Component2/Testimonial/Testimonial";
import WhyChoose from "../../Component2/Whychoose/WhyChoose";
import BoxReveal from "../../Shared/BoxAnim/BoxReveal";

const Home2 = () => {
  BoxReveal();
  return (
    <>
      <Banner />
      <Service />
      <About />
      <WhyChoose />
      <Project />
      <Process />
      <TeamMember />
      <Testimonial />
      <Blog />
      <Brand />
    </>
  );
};

export default Home2;
