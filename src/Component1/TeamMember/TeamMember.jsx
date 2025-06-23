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
  return (
    <section className="bg-white px-[120px] py-16 md:py-20 lg:py-[120px] relative z-10 rounded-b-[50px] overflow-hidden">
      <div className="text-center">
        <h5 className="font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
          <img src={subtitleIcon} alt="Icon" draggable={false} /> Our Teams
        </h5>
        <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[50px] 2xl:leading-[58px] text-HeadingColor-0 mt-3.5">
          Meet Expert Team Members
        </h1>
        <p className="font-NotoSans text-TextColor-0 max-w-[500px] w-full mx-auto mt-5 mb-8">
          Econet is a nonprofit environmental organizations maintaince and
          dedicated to protecting planet through sustainable
        </p>
        <PrimaryButton as="link" href="/team">
          All Members <GoArrowRight size={22} />
        </PrimaryButton>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-[42px]">
        {teamsData.map((teams, index) => {
          return (
            <div
              key={index}
              className={`${
                index !== 0 && index !== teamsData.length - 1
                  ? ""
                  : "-mt-[90px]"
              }`}
            >
              <TeamCard {...teams} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TeamMember;
