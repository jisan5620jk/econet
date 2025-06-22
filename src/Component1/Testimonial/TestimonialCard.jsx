/* eslint-disable react/prop-types */

import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ rating = 5, quote, name, role, avatar, isActive }) => {
  return (
    <div
      className={`p-6 rounded-xl ${
        isActive ? "bg-[#123223]" : "bg-[#123223]/80"
      } text-white transition-all duration-300`}
    >
      {/* Stars */}
      <div className="flex space-x-1 text-[#f97316] mb-4">
        {Array.from({ length: rating }, (_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      {/* Quote */}
      <p className={`text-lg font-medium ${!isActive && "text-white/50"}`}>
        “{quote}”
      </p>

      {/* User */}
      <div className="flex items-center gap-4 mt-6">
        <img
          src={avatar}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h4 className={`font-semibold ${!isActive && "text-white/60"}`}>
            {name}
          </h4>
          <p className={`text-sm ${!isActive && "text-white/40"}`}>{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
