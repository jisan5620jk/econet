/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const TeamCard = ({
  teamThumb,
  socialIcon,
  socialIcon2,
  socialIcon3,
  socialIcon4,
  teamTitle,
  teamDesc,
  teamUrl,
  teamBtnIcon,
}) => {
  return (
    <div className="group rounded-[20px] relative z-10 overflow-hidden before:absolute before:left-0 before:bottom-0 before:w-full before:h-1/3 before:bg-gradient-to-b before:to-SecondaryColor-0 before:from-transparent before:z-10 before:transition-all before:duration-500 hover:before:h-1/2">
      <div className="absolute z-10 top-0 right-0">
        <div className="size-[60px] rounded-bl-[20px] bg-white inline-block relative">
          <span className="absolute -left-[30px] top-0 rotate-180 size-[30px] inline-block bg-white [clip-path:path('M0_0_Q0,30_30,30_L_0_30_Z')]"></span>
          <span className="absolute -bottom-[30px] right-0 rotate-180 size-[30px] inline-block bg-white [clip-path:path('M0_0_Q0,30_30,30_L_0_30_Z')]"></span>
        </div>
      </div>
      <img src={teamThumb} alt="Team Image" />

      {/* Info section */}
      <div className="absolute z-20 bottom-10 left-0 right-0 mx-auto rounded-md text-center transition-all duration-500 group-hover:bottom-[92px]">
        <Link
          to={teamUrl}
          className="font-Outfit font-medium text-[32px] text-white block transition-all duration-500"
        >
          {teamTitle}
        </Link>
        <p className="font-Outfit text-white text-sm bg-white bg-opacity-15 backdrop-filter backdrop-blur-sm px-5 py-[5px] rounded-full mt-3 inline-block border border-white border-opacity-30">
          {teamDesc}
        </p>
        {/* Social icons */}
        {[socialIcon, socialIcon2, socialIcon3, socialIcon4].map((icon, i) => (
          <div
            key={i}
            style={{
              left: `${27.5 + i * 12}%`,
              transitionDuration: `${300 + i * 200}ms`,
            }}
            className={`absolute z-20 -bottom-24 opacity-0 transition-all group-hover:-bottom-14 group-hover:opacity-100`}
          >
            <Link to={"/"}>
              <button className="size-[34px] text-sm flex justify-center items-center rounded-full overflow-hidden relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm border border-white border-opacity-30 transition-all duration-500 hover:border-PrimaryColor-0 hover:border-opacity-100 text-white z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:rounded-full before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                {icon}
              </button>
            </Link>
          </div>
        ))}
      </div>
      {/* Team Icon */}

      <div className="absolute top-0 right-0">
        <Link
          to={teamUrl}
          className="size-[50px] flex justify-center items-center font-Outfit text-PrimaryColor-0 text-xl bg-white border border-PrimaryColor-0 rounded-full transition-all duration-500 relative z-10 overflow-hidden -rotate-45 before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 before:rotate-180 before:scale-0 group-hover:before:scale-100 group-hover:before:rotate-0 group-hover:text-white"
        >
          {teamBtnIcon}
        </Link>
      </div>
    </div>
  );
};

export default TeamCard;
