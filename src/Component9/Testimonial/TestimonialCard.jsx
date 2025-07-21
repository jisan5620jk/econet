/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ image, name, role, company, rating, review }) => {
  return (
    <div className="rounded-[20px] p-5 sm:p-10 transition-all duration-500 relative overflow-hidden z-10 before:absolute before:top-0 before:right-0 before:w-full before:h-full before:bg-[url(/images/charity-testi-box-bg.png)] before:bg-cover before:bg-right-top before:bg-no-repeat before:-z-10 before:transition-all before:duration-500 hover:before:opacity-0 after:absolute after:top-0 after:right-0 after:w-full after:h-full after:bg-[url(/images/charity-testi-box-hover-bg.png)] after:bg-cover after:bg-right-top after:bg-no-repeat after:-z-10 after:opacity-0 after:transition-all after:duration-500 hover:after:opacity-100 border-b border-white/10 hover:border-PrimaryColor-0">
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
      <div className="flex justify-between items-center bg-white bg-opacity-10 px-8 py-4 rounded-2xl mt-7 mb-7">
        <span className="font-Outfit text-PrimaryColor-0 font-medium text-[32px]">
          {rating.toFixed(2)}
        </span>
        <div className="flex gap-1 text-ReviewText-0">
          {Array.from({ length: 5 }).map((_, idx) => (
            <FaStar key={idx} />
          ))}
        </div>
      </div>

      {/* Review Text */}
      <p className="font-NotoSans text-lg text-TextColor2-0 pb-2">
        “ {review} ”
      </p>
    </div>
  );
};

export default TestimonialCard;
