import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import BackToTop from "../Shared/BackToTop/BackToTop";
import Footer from "../Shared/Footer/Footer";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import HelmetChanger from "../Shared/Helmet/Helmet";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

const Main = () => {
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

  const { pathname } = useLocation();

  useEffect(() => {
    const smoother = ScrollSmoother.get();

    if (smoother) {
      smoother.scrollTo(0, true); // smooth scroll to top
    } else {
      window.scrollTo(0, 0); // fallback
    }
  }, [pathname]);

  return (
    <>
      <HelmetChanger title={"Environment Main Demo"} />
      <BackToTop />
      <Navbar />
      <div id="smooth-wrapper" className="h-full">
        <div id="smooth-content" className="min-h-screen will-change-transform">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Main;
