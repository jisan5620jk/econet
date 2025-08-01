import subtitleIcon from "/images/sub-title-icon.png";
import teamThumb from "/images/charity-classic-team-img.png";
import teamThumb2 from "/images/charity-classic-team-img2.png";
import teamThumb3 from "/images/charity-classic-team-img3.png";
import teamThumb4 from "/images/charity-classic-team-img4.png";
import teamThumb5 from "/images/charity-classic-team-img5.png";
import teamThumb6 from "/images/charity-classic-team-img6.png";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import {
  FaArrowRightLong,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import TeamCard from "./TeamCard";
import BoxReveal from "../../../Shared/BoxAnim/BoxReveal";
import ImageReveal from "../../../Shared/ImageReveal/ImageReveal";
import TextReveal from "../../../Shared/TextAnim/TextReveal";

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
  {
    teamThumb: teamThumb4,
    teamUrl: "/team",
    teamTitle: "Maria M. Marie",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "Volanteer",
  },
  {
    teamThumb: teamThumb5,
    teamUrl: "/team",
    teamTitle: "David Miller",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "Volanteer",
  },
  {
    teamThumb: teamThumb6,
    teamUrl: "/team",
    teamTitle: "Natasha Nira",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "Volanteer",
  },
];

const TeamInner = () => {
  BoxReveal();
  ImageReveal();
  TextReveal();
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
