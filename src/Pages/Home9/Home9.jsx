import About from "../../Component9/About/About";
import Banner from "../../Component9/Banner/Banner";
import Blog from "../../Component9/Blog/Blog";
import DonationForm from "../../Component9/DonationForm/DonationForm";
import Donations from "../../Component9/Donations/Donations";
import Feature from "../../Component9/Feature/Feature";
import Marquee from "../../Component9/Marquee/Marquee";
import MissionVision from "../../Component9/MissionVision/MissionVision";
import Project from "../../Component9/Project/Project";
import Subscribe from "../../Component9/Subscribe/Subscribe";
import Testimonial from "../../Component9/Testimonial/Testimonial";
import VideoCta from "../../Component9/VideoCta/VideoCta";
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
      <VideoCta />
      <Project />
      <Marquee />
      <DonationForm />
      <Testimonial />
      <Blog />
      <Subscribe />
    </>
  );
};

export default Home9;
