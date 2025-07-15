import { Outlet, useLocation } from "react-router-dom";
import Navbar7 from "../Shared/Navbar/Navbar7";
import BackToTop from "../Shared/BackToTop/BackToTop";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import HelmetChanger from "../Shared/Helmet/Helmet";
import ImageReveal from "../Shared/ImageReveal/ImageReveal";
import TextReveal from "../Shared/TextAnim/TextReveal";
import Footer5 from "../Shared/Footer/Footer5";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

const Main7 = () => {
  const location = useLocation();

  useEffect(() => {
    if (smootherRef.current) {
      smootherRef.current.scrollTo(0, true); // Scroll to top with animation
    }
  }, [location]);

  //image Reveal

  ImageReveal();

  //image Reveal

  TextReveal();

  //Scroll Smoother

  const smootherRef = useRef(null);

  useEffect(() => {
    smootherRef.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
      normalizeScroll: true,
      smoothTouch: 0.1,
    });

    return () => {
      if (smootherRef.current) smootherRef.current.kill();
    };
  }, []);

  useEffect(() => {
    // Attach click handler to all anchor links with href starting with #
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href");
        const targetEl = document.querySelector(targetId);

        if (targetEl) {
          e.preventDefault();

          gsap.to(window, {
            duration: 1.2,
            scrollTo: { y: targetEl, offsetY: 0 },
            ease: "power2.inOut",
          });
        }
      });
    });

    // Cleanup
    return () => {
      links.forEach((link) => link.removeEventListener("click", () => {}));
    };
  }, []);

  return (
    <>
      <HelmetChanger title={"Environment Main Demo"} />
      <BackToTop />
      <Navbar7 />
      <div id="smooth-wrapper" className="h-full">
        <div id="smooth-content" className="min-h-screen will-change-transform">
          <Outlet />
          <Footer5 />
        </div>
      </div>
    </>
  );
};

export default Main7;
