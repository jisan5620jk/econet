import About from "../../Component11/About/About";
import Banner from "../../Component11/Banner/Banner";
import Blog from "../../Component11/Blog/Blog";
import CallDoAction from "../../Component11/CallDoAction/CallDoAction";
import DonationForm from "../../Component11/DonationForm/DonationForm";
import Donations from "../../Component11/Donations/Donations";
import Feature from "../../Component11/Feature/Feature";
import Marquee from "../../Component11/Marquee/Marquee";
import MissionVision from "../../Component11/MissionVision/MissionVision";
import Project from "../../Component11/Project/Project";
import Subscribe from "../../Component11/Subscribe/Subscribe";
import TeamMember from "../../Component11/TeamMember/TeamMember";
import Testimonial from "../../Component11/Testimonial/Testimonial";
import VideoCta from "../../Component11/VideoCta/VideoCta";
import BoxReveal from "../../Shared/BoxAnim/BoxReveal";
import ImageReveal from "../../Shared/ImageReveal/ImageReveal";
import TextReveal from "../../Shared/TextAnim/TextReveal";

const Home11 = () => {
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

export default Home11;
