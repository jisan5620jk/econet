import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import testiThumb from "/images/testi-thumb.png";
import testiProfile from "/images/testi-img.png";
import testiProfile3 from "/images/testi-img.png";
import testiProfile4 from "/images/testi-img.png";
import { MdOutlineStarPurple500 } from "react-icons/md";
import subtitleIcon from "/images/sub-title-icon.png";
import shape from "/images/why-choose-shape.png";
import shape2 from "/images/leaf.png";
import aboutTeamImg from "/images/about-team-img.png";
import aboutTeamImg2 from "/images/about-team-img2.png";
import TestimonialCard from "./TestimonialCard";

const testiData = [
  {
    workPlace: "Great 3d Modal",
    testiDesc:
      '"Partnering with this team helped us make our business more sustainable without into compromising ecological”',
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiProfile: testiProfile4,
    testiName: "Jhon D. Alexon",
    testiDesignation: "Web Developer",
  },
  {
    workPlace: "Awesome Design",
    testiDesc:
      '"Partnering with this team helped us make our business more sustainable without into compromising ecological”',
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiProfile: testiProfile3,
    testiName: "Michel Jiyang",
    testiDesignation: "Web Developer",
  },
  {
    workPlace: "Great Supports",
    testiDesc:
      '"Partnering with this team helped us make our business more sustainable without into compromising ecological”',
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiProfile: testiProfile,
    testiName: "Anjelina Jholi",
    testiDesignation: "Web Developer",
  },
  {
    workPlace: "Smart Development",
    testiDesc:
      '"Partnering with this team helped us make our business more sustainable without into compromising ecological”',
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiProfile: testiProfile3,
    testiName: "Mariya Watson",
    testiDesignation: "Web Developer",
  },
];

gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  const containerRef = useRef(null);
  const stickyBoxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const boxes = gsap.utils.toArray(".content-box");

      // Sticky right box
      if (window.innerWidth >= 1199) {
        ScrollTrigger.create({
          trigger: stickyBoxRef.current,
          start: "top 9%",
          endTrigger: containerRef.current,
          end: () => `bottom 103.2%`,
          pin: true,
          pinSpacing: false,
          scrub: true,
        });
      }

      // Activate boxes
      boxes.forEach((box, i) => {
        ScrollTrigger.create({
          trigger: box,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () => {
            for (let j = 0; j <= i; j++) {
              boxes[j].classList.add("before:opacity-0");
              boxes[j].classList.remove("before:opacity-90");
            }
          },
          onLeaveBack: () => {
            for (let j = i; j < boxes.length; j++) {
              boxes[j].classList.remove("before:opacity-0");
              boxes[j].classList.add("before:opacity-90");
            }
          },
        });
      });

      // Make sure all boxes are active when you reach bottom of scroll
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "bottom bottom",
        onEnter: () => {
          boxes.forEach((box) => {
            box.classList.add("before:opacity-0");
            box.classList.remove("before:opacity-90");
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="bg-SecondaryColor-0 py-16 md:py-20 lg:py-[120px] -mt-[52px] relative overflow-hidden"
      ref={containerRef}
    >
      <div className="fade-left absolute left-0 top-5">
        <img
          src={shape}
          draggable={false}
          alt="Shape"
          className="animate-wiggle hidden lg:block"
          style={{ animationDuration: "5s" }}
        />
      </div>
      <div className="zoom-in absolute right-[6%] top-28">
        <img
          src={shape2}
          draggable={false}
          alt="Shape"
          className="animate-swing hidden lg:block"
          style={{ animationDuration: "4s" }}
        />
      </div>
      <div className="Container">
        <div className="text-center pt-[52px]">
          <h5 className="zoom-in font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
            <img src={subtitleIcon} alt="Icon" draggable={false} /> Testimonials
          </h5>
          <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[42px] md:text-[44px] md:leading-[52px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-white mt-3.5">
            Real Clients Testimonial About
            <br />
            Econet Services
          </h1>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-[58px] mb-5">
          {/* Left Column */}
          <div className="space-y-6 fade-up">
            {testiData.map((item, index) => (
              <div
                key={index}
                className="content-box relative before:absolute before:z-10 before:left-0 before:bottom-0 before:bg-gradient-to-b before:to-SecondaryColor-0 before:via-SecondaryColor-0/90 before:from-BodyBgDark-0/50 before:w-full before:h-full before:transition-all before:ease-linear before:duration-500"
              >
                <TestimonialCard {...item} />
              </div>
            ))}
          </div>

          {/* Right Column - Sticky Box */}
          <div className="relative">
            <div ref={stickyBoxRef} className="">
              <div>
                <div className="relative inline-block">
                  <div className="absolute z-10 top-0 right-0">
                    <div className="w-[85px] h-[70px] rounded-bl-[20px] bg-SecondaryColor-0 inline-block relative">
                      <span className="absolute -left-[30px] top-0 rotate-180 size-[30px] inline-block bg-SecondaryColor-0 [clip-path:path('M0_0_Q0,30_30,30_L_0_30_Z')]"></span>
                      <span className="absolute -bottom-[30px] right-0 rotate-180 size-[30px] inline-block bg-SecondaryColor-0 [clip-path:path('M0_0_Q0,30_30,30_L_0_30_Z')]"></span>
                    </div>
                  </div>
                  <img
                    src={testiThumb}
                    alt="Testimonial Image"
                    draggable={false}
                  />
                  <div className="fade-up absolute bottom-0 left-0 flex flex-col items-center justify-center text-center w-[180px] md:w-[220px] h-[180px] md:h-[230px] rounded-[20px] bg-PrimaryColor-0">
                    <ul className="flex items-center -space-x-4">
                      <li>
                        <img
                          src={aboutTeamImg}
                          alt="About Team Image"
                          draggable={false}
                        />
                      </li>
                      <li>
                        <img
                          src={aboutTeamImg2}
                          alt="About Team Image"
                          draggable={false}
                        />
                      </li>
                      <li className="relative z-10 size-14 flex items-center justify-center bg-PrimaryColor-0 border-[2.5px] border-white rounded-full font-Outfit text-white text-lg">
                        5K+
                      </li>
                    </ul>
                    <h6 className="font-Outfit text-white text-2xl leading-8 mt-7">
                      Trusted Happy
                      <br /> Customer
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
