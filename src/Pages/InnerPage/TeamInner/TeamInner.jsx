import subtitleIcon from "/images/sub-title-icon.png";
import teamThumb from "/images/charity-classic-team-img.png";
import teamThumb2 from "/images/charity-classic-team-img2.png";
import teamThumb3 from "/images/charity-classic-team-img3.png";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import {
  FaArrowRightLong,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import TeamCard from "./TeamCard";

const teamsData = [
  {
    teamThumb: teamThumb,
    teamUrl: "/team_details",
    teamTitle: "Alaina Melvis",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "Volanteer",
  },
  {
    teamThumb: teamThumb3,
    teamUrl: "/team_details",
    teamTitle: "Jone D. Alexon",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "Volanteer",
  },
  {
    teamThumb: teamThumb2,
    teamUrl: "/team_details",
    teamTitle: "Anjelina M. Jholi",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "Volanteer",
  },
  {
    teamThumb: teamThumb,
    teamUrl: "/team_details",
    teamTitle: "Alaina Melvis",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "Volanteer",
  },
  {
    teamThumb: teamThumb3,
    teamUrl: "/team_details",
    teamTitle: "Jone D. Alexon",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "Volanteer",
  },
  {
    teamThumb: teamThumb2,
    teamUrl: "/team_details",
    teamTitle: "Anjelina M. Jholi",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "Volanteer",
  },
];

const TeamInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Team Member"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Team Member"}
      />
      <section className="bg-white py-16 md:py-20 lg:py-[120px] relative">
        <div className="Container">
          <div className="text-center">
            <h5 className="zoom-in font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
              <img src={subtitleIcon} alt="Icon" draggable={false} /> Team
              Members
            </h5>
            <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[42px] md:text-[44px] md:leading-[52px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-HeadingColor-0 mt-3.5">
              Meet Our Honest Dedicated
              <br />
              Volunteers Team
            </h1>
          </div>
          <div className="box-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-12">
            {teamsData.map((teams, index) => {
              return (
                <div key={index} className="box">
                  <TeamCard {...teams} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamInner;
