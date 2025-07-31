import teamThumb from "/images/charity-classic-team-img.png";
import teamThumb2 from "/images/charity-classic-team-img2.png";
import teamThumb3 from "/images/charity-classic-team-img3.png";
import TeamCard from "./TeamCard";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import subtitleIcon from "/images/sub-title-icon.png";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import { GoArrowRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import shape from "/images/charity-event-shape.png";
import shape2 from "/images/charity-donation-shape2.png";

const teamsData = [
  {
    teamThumb: teamThumb,
    teamUrl: "/team",
    teamTitle: "Alaina Melvis",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "Volanteer",
  },
  {
    teamThumb: teamThumb3,
    teamUrl: "/team",
    teamTitle: "Jone D. Alexon",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "Volanteer",
  },
  {
    teamThumb: teamThumb2,
    teamUrl: "/team",
    teamTitle: "Anjelina M. Jholi",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "Volanteer",
  },
];

const TeamMember = () => {
  const settings = {
    loop: true,
    spaceBetween: 26,
    modules: [Autoplay],
    speed: 2000,
    autoplay: {
      delay: 3000, // Set delay time in milliseconds
      disableOnInteraction: false, // Keep autoplay on user interaction
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <section className="bg-white py-16 md:py-20 lg:py-[120px] relative z-10 rounded-xl sm:rounded-2xl md:rounded-b-[50px] overflow-hidden">
      <div className="Container pb-5">
        <div className="flex flex-wrap items-center justify-between gap-7">
          <div>
            <h5 className="zoom-in font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
              <img src={subtitleIcon} alt="Icon" draggable={false} /> Events
            </h5>
            <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[42px] md:text-[44px] md:leading-[52px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-HeadingColor-0 mt-3.5">
              Meet Our Honest Dedicated
              <br />
              Volunteers Team
            </h1>
          </div>
          <div className="fade-right">
            <PrimaryButton as="link" href="/about">
              Meet Our Team <GoArrowRight size={22} />
            </PrimaryButton>
          </div>
        </div>
        <div className="box-row mt-[58px]">
          <Swiper {...settings}>
            {teamsData.map((teams, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="box">
                    <TeamCard {...teams} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="absolute -z-10 bottom-0 left-0 hidden 3xl:block">
        <img
          src={shape}
          alt="Image Shape"
          draggable={false}
          className="animate-wiggle"
          style={{ animationDuration: "5s" }}
        />
      </div>
      <div className="absolute -z-10 top-[15%] right-[37%] hidden 3xl:block">
        <img
          src={shape2}
          alt="Image Shape"
          draggable={false}
          className="animate-swing"
          style={{ animationDuration: "3.5s" }}
        />
      </div>
    </section>
  );
};

export default TeamMember;
