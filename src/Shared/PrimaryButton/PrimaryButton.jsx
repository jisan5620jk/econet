/* eslint-disable react/prop-types */

import { useRef } from "react";
import { Link } from "react-router-dom";

const PrimaryButton = ({
  children,
  href,
  type = "button",
  className = "",
  as = "button",
}) => {
  const spanRef = useRef(null);

  const handleMouseEnter = (e) => {
    const span = spanRef.current;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    span.style.left = `${x}px`;
    span.style.top = `${y}px`;
    span.classList.add("scale-100");
  };

  const handleMouseLeave = (e) => {
    const span = spanRef.current;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    span.style.left = `${x}px`;
    span.style.top = `${y}px`;
    span.classList.remove("scale-100");
  };

  const sharedClasses = `relative overflow-hidden inline-flex items-center font-Outfit text-lg leading-7 px-7 md:px-9 py-2.5 md:py-4 text-white bg-PrimaryColor-0 rounded-full transition duration-300 focus:outline-none ${className}`;

  const hoverSpan = (
    <span
      ref={spanRef}
      className="absolute z-0 size-[32rem] bg-SecondaryColor-0 rounded-full -translate-x-1/2 -translate-y-1/2 scale-0 transition-transform duration-500 ease-out pointer-events-none"
    ></span>
  );

  const content = (
    <>
      {hoverSpan}
      <span className="relative z-10 flex items-center gap-4 before:right-7 before:absolute before:top-1/2 before:-translate-y-1/2 before:h-4 before:w-[1px] before:bg-white">
        {children}
      </span>
    </>
  );

  if (as === "link" && href) {
    return (
      <Link
        to={href}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={sharedClasses}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={sharedClasses}
    >
      {content}
    </button>
  );
};

export default PrimaryButton;
