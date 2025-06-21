/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ProjectCard = ({
  projectBg,
  boxBg,
  boxPosition,
  boxCheckIcon,
  boxSubTitle,
  boxTitle,
  boxDesc,
  boxUrl,
  boxBtnText,
  boxBtnIcon,
}) => {
  return (
    <div
      className={`${projectBg} bg-cover bg-no-repeat bg-bottom py-[90px] rounded-[20px]`}
    >
      <div
        className={`${boxBg} bg-cover bg-no-repeat bg-bottom flex flex-col ${boxPosition} max-w-[456px] w-full px-[54px] py-[60px] rounded-[20px]`}
      >
        <span>{boxCheckIcon}</span>
        <h5>{boxSubTitle}</h5>
        <h2>{boxTitle}</h2>
        <p>{boxDesc}</p>
        <Link to={boxUrl}>
          {boxBtnText}
          {boxBtnIcon}
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
