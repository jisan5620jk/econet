import About from "../../Component5/About/About";
import Banner from "../../Component5/Banner/Banner";
import Feature from "../../Component5/Feature/Feature";
import BoxReveal from "../../Shared/BoxAnim/BoxReveal";

const Home5 = () => {
  BoxReveal();
  return (
    <>
      <Banner />
      <Feature />
      <About />
    </>
  );
};

export default Home5;
