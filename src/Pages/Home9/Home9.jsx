import About from "../../Component9/About/About";
import Appointment from "../../Component9/Appointment/Appointment";
import Banner from "../../Component9/Banner/Banner";
import Blog from "../../Component9/Blog/Blog";
import CallDoAction from "../../Component9/CallDoAction/CallDoAction";
import ProgressSection from "../../Component9/Check/Progress";
import Donations from "../../Component9/Donations/Donations";
import Feature from "../../Component9/Feature/Feature";
import MissionVision from "../../Component9/MissionVision/MissionVision";
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
      <Donations />
      <MissionVision />
      <Service />
      <ProgressSection />
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
