/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ image, name, role, company, rating, review }) => {
  return (
    <div className="bg-BodyBgDark-0 rounded-[20px] p-5 sm:p-10 relative overflow-hidden z-10 before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:bg-[url(/images/testi-hover-bg.png)] before:bg-cover before:bg-center before:bg-no-repeat before:-z-10 before:opacity-0 before:transition-all before:duration-500 hover:before:w-full hover:before:opacity-100 hover:before:left-0">
      <div className="absolute z-10 top-0 -right-[2px]">
        <div className="size-[60px] rounded-bl-[20px] bg-SecondaryColor-0 inline-block relative">
          <span className="absolute -left-[29px] top-0 rotate-180 size-[30px] inline-block bg-SecondaryColor-0 [clip-path:path('M0_0_Q0,30_30,30_L_0_30_Z')]"></span>
          <span className="absolute -bottom-[30px] right-0 rotate-180 size-[30px] inline-block bg-SecondaryColor-0 [clip-path:path('M0_0_Q0,30_30,30_L_0_30_Z')]"></span>
        </div>
      </div>
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
      <p className="font-NotoSans text-base sm:text-lg text-TextColor2-0">
        “ {review} ”
      </p>
    </div>
  );
};

export default TestimonialCard;
