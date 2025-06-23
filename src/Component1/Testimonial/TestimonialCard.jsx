/* eslint-disable react/prop-types */
const TestimonialCard = ({
  testiRatingIcon,
  testiName,
  testiProfile,
  testiDesignation,
  testiDesc,
  workPlace,
}) => {
  return (
    <div className="relative group px-4 sm:px-9 lg:px-4 xl:px-9 2xl:px-10 pt-4 sm:pt-8 lg:pt-4 xl:pt-12 pb-5 sm:pb-12 lg:pb-5 xl:pb-12 bg-BodyBgDark-0 rounded-[20px] ease-linear transition-all duration-500">
      <ul className="flex items-center mb-5 gap-0.5">
        {[...Array(5)].map((_, i) => (
          <li key={i} className="text-ReviewText-0 text-2xl">
            {testiRatingIcon}
          </li>
        ))}
      </ul>
      <p className="font-Outfit sm:text-lg lg:text-2xl xl:text-[28px] xl:leading-[40px] max-w-[530px] text-white font-light mb-9">
        {testiDesc}
      </p>

      <div className="flex items-center gap-5">
        <div>
          <img src={testiProfile} draggable={false} alt="User Image" />
        </div>
        <div>
          <h5 className="font-Outlet inline-block text-white text-xl sm:text-2xl lg:text-xl xl:text-2xl relative">
            {testiName}
          </h5>
          <p className="font-NotoSans text-TextColor2-0 font-light flex items-center mt-2">
            {testiDesignation}{" "}
            <span className="relative pl-7 text-white before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1.5 before:w-4 before:h-[1px] before:bg-TextColor2-0">
              {workPlace}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
