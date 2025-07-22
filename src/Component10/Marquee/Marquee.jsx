import star from "/images/marquee-icon.png";

const Marquee = () => {
  const marqueeItems = [
    "DONATION LOVE",
    "SAFE AND SHELTER",
    "NUTRITIOUS FOODS",
    "MEDICAL AND HEALTH",
  ];

  const doubledItems = marqueeItems.concat(marqueeItems);

  return (
    <div className="zoom-in w-full overflow-hidden whitespace-nowrap bg-PrimaryColor-0 pt-10 pb-16 -mt-5 relative">
      {[1, 2].map((row) => (
        <div
          key={`row-${row}`}
          className="inline-flex will-change-transform animate-marquee"
          style={{ animationDuration: "55s" }}
        >
          {doubledItems.map((text, index) => (
            <div key={`${row}-${index}`} className="flex items-center">
              <span className="inline-block text-2xl md:text-[36px] text-white uppercase font-Outfit md:font-medium mx-5 md:mx-10">
                {text}
              </span>
              <span className="inline-block w-5 md:w-10 pt-1 md:pt-0">
                <img
                  src={star}
                  draggable={false}
                  alt="Star"
                  className="w-full animate-rotational"
                />
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Marquee;
