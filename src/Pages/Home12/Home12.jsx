import About from "../../Component12/About/About";
import Banner from "../../Component12/Banner/Banner";
import Blog from "../../Component12/Blog/Blog";
import CallDoAction from "../../Component12/CallDoAction/CallDoAction";
import DonationForm from "../../Component12/DonationForm/DonationForm";
import Donations from "../../Component12/Donations/Donations";
import Feature from "../../Component12/Feature/Feature";
import Marquee from "../../Component12/Marquee/Marquee";
import MissionVision from "../../Component12/MissionVision/MissionVision";
import Project from "../../Component12/Project/Project";
import Subscribe from "../../Component12/Subscribe/Subscribe";
import TeamMember from "../../Component12/TeamMember/TeamMember";
import Testimonial from "../../Component12/Testimonial/Testimonial";
import VideoCta from "../../Component12/VideoCta/VideoCta";
import BoxReveal from "../../Shared/BoxAnim/BoxReveal";
import ImageReveal from "../../Shared/ImageReveal/ImageReveal";
import TextReveal from "../../Shared/TextAnim/TextReveal";

const Home12 = () => {
  BoxReveal();
  ImageReveal();
  TextReveal();
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
      <TeamMember />
      <Testimonial />
      <CallDoAction />
      <Blog />
      <Subscribe />
    </>
  );
};

export default Home12;
