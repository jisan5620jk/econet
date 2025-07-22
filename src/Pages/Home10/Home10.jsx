import About from "../../Component10/About/About";
import Banner from "../../Component10/Banner/Banner";
import Blog from "../../Component10/Blog/Blog";
import CallDoAction from "../../Component10/CallDoAction/CallDoAction";
import DonationForm from "../../Component10/DonationForm/DonationForm";
import Donations from "../../Component10/Donations/Donations";
import Event from "../../Component10/Event/Event";
import Feature from "../../Component10/Feature/Feature";
import Marquee from "../../Component10/Marquee/Marquee";
import MissionVision from "../../Component10/MissionVision/MissionVision";
import Project from "../../Component10/Project/Project";
import Subscribe from "../../Component10/Subscribe/Subscribe";
import Testimonial from "../../Component10/Testimonial/Testimonial";
import VideoCta from "../../Component10/VideoCta/VideoCta";
import BoxReveal from "../../Shared/BoxAnim/BoxReveal";

const Home10 = () => {
  BoxReveal();
  return (
    <>
      <Banner />
      <Feature />
      <About />
      <Donations />
      <MissionVision />
      <VideoCta />
      <Project />
      <Marquee />
      <DonationForm />
      <Event />
      <Testimonial />
      <CallDoAction />
      <Blog />
      <Subscribe />
    </>
  );
};

export default Home10;
