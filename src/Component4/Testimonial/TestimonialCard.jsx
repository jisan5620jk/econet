/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ image, name, role, company, rating, review }) => {
  return (
    <div className="group bg-BodyBgDark-0 rounded-[20px] p-5 sm:p-10 relative overflow-hidden z-10">
      {/* User Info */}
      <div className="flex flex-wrap items-center gap-6">
        <img src={image} alt={name} className="rounded-full object-cover" />
        <div>
          <h3 className="font-Outfit text-white text-2xl">{name}</h3>
          <p className="font-NotoSans text-TextColor2-0 font-light mt-1.5">
            {role} at — <span className="text-white">{company}</span>
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex justify-between items-center bg-white bg-opacity-5 px-8 py-4 rounded-2xl mt-7 mb-7 relative overflow-hidden z-10 before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:bg-PrimaryColor-0 before:-z-10 before:opacity-0 before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:opacity-100 group-hover:before:left-0">
        <span className="font-Outfit text-PrimaryColor-0 transition-all duration-500 group-hover:text-white font-medium text-[32px]">
          {rating.toFixed(2)}
        </span>
        <div className="flex gap-1 text-ReviewText-0 text-lg transition-all duration-500 group-hover:text-white">
          {Array.from({ length: 5 }).map((_, idx) => (
            <FaStar key={idx} />
          ))}
        </div>
      </div>

      {/* Review Text */}
      <p className="font-NotoSans text-base sm:text-lg text-TextColor2-0">
        “ {review} ”
      </p>
    </div>
  );
};

export default TestimonialCard;
