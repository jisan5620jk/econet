import teamThumb from "/images/team-thumb.png";
import teamThumb2 from "/images/team-thumb2.png";
import teamThumb3 from "/images/team-thumb3.png";
import teamThumb4 from "/images/team-thumb4.png";
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
import { FiArrowRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const teamsData = [
  {
    teamThumb: teamThumb,
    teamUrl: "/team_details",
    teamTitle: "Jone D. Alexon",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "Env. Analyst",
    teamBtnIcon: <FiArrowRight />,
  },
  {
    teamThumb: teamThumb2,
    teamUrl: "/team_details",
    teamTitle: "Anjelina M. Jholi",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "EHS Officer",
    teamBtnIcon: <FiArrowRight />,
  },
  {
    teamThumb: teamThumb3,
    teamUrl: "/team_details",
    teamTitle: "Alaina Melvis",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "Env. Analyst",
    teamBtnIcon: <FiArrowRight />,
  },
  {
    teamThumb: teamThumb4,
    teamUrl: "/team_details",
    teamTitle: "David Jhonson",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "Waste Coord.",
    teamBtnIcon: <FiArrowRight />,
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
      1400: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <section className="bg-white px-2 2xl:px-[120px] py-16 md:py-20 lg:py-[120px] relative z-10 rounded-xl sm:rounded-2xl md:rounded-b-[50px] overflow-hidden">
      <div className="text-center">
        <h5 className="zoom-in font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
          <img src={subtitleIcon} alt="Icon" draggable={false} /> Our Teams
        </h5>
        <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[42px] md:text-[44px] md:leading-[52px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-HeadingColor-0 mt-3.5">
          Meet Expert Team Members
        </h1>
        <p className="fade-up font-NotoSans text-TextColor-0 max-w-[500px] w-full mx-auto mt-5 mb-8">
          Econet is a nonprofit environmental organizations maintaince and
          dedicated to protecting planet through sustainable
        </p>
        <PrimaryButton as="link" href="/team" className="zoom-in">
          All Members <GoArrowRight size={22} />
        </PrimaryButton>
      </div>
      <div className="box-row mt-8 lg:-mt-[42px]">
        <Swiper {...settings}>
          {teamsData.map((teams, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className={`box ${
                    index !== 0 && index !== teamsData.length - 1
                      ? "pt-[90px]"
                      : ""
                  }`}
                >
                  <TeamCard {...teams} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default TeamMember;
