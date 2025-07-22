/* eslint-disable react/prop-types */

import { useRef } from "react";
import { useInView } from "framer-motion";

const CircleProgress = ({
  percentage = 75,
  size = 70,
  stroke = 7,
  color = "text-green-500",
  label = "Progress",
}) => {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  const circleRef = useRef(null);
  const isInView = useInView(circleRef, { once: true, amount: 0.5 });

  return (
    <div className="flex items-center gap-5 w-full">
      <div className="relative">
        <svg ref={circleRef} width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#243b30" // Tailwind's gray-200
            strokeWidth={stroke}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={isInView ? offset : circumference}
            className={`transition-[stroke-dashoffset] duration-[1600ms] ease-in-out ${color}`}
          />
        </svg>
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl text-white">
          {percentage}%
        </p>
      </div>

      <div className="flex-1">
        <p className="font-Outfit text-[22px] text-white leading-[30px]">
          {label}
        </p>
      </div>
    </div>
  );
};

export default CircleProgress;
