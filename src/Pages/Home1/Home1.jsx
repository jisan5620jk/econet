import About from "../../Component1/About/About";
import Banner from "../../Component1/Banner/Banner";
import Blog from "../../Component1/Blog/Blog";
import Brand from "../../Component1/Brand/Brand";
import Process from "../../Component1/Process/Process";
import Project from "../../Component1/Project/Project";
import Service from "../../Component1/Service/Service";
import TeamMember from "../../Component1/TeamMember/TeamMember";
import Testimonials from "../../Component1/Testimonial/Testimonial";
import WhyChoose from "../../Component1/Whychoose/WhyChoose";

const Home1 = () => {
  return (
    <>
      <Banner />
      <Service />
      <About />
      <WhyChoose />
      <Project />
      <Process />
      <TeamMember />
      <Testimonials />
      <Blog />
      <Brand />
    </>
  );
};

export default Home1;
