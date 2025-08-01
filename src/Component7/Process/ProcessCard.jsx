/* eslint-disable react/prop-types */

const ProcessCard = ({
  processBorder,
  borderPosition,
  processIcon,
  processLeaf,
  leafPosition,
  processTilte,
  processDesc,
}) => {
  return (
    <div className="group text-center relative z-10">
      {processBorder && (
        <div className={`absolute ${borderPosition} hidden xl:block`}>
          <img src={processBorder} draggable={false} alt="Border" className="xl:w-3/4 2xl:w-[inherit]" />
        </div>
      )}
      <div className="relative z-10 text-center inline-block">
        <div className="size-[130px] mx-auto rounded-full flex items-center justify-center border-2 border-PrimaryColor-0 shrink-0 bg-white relative z-10 overflow-hidden before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor-0 before:rotate-180 before:transition-all before:duration-500 before:scale-0 before:-z-10 group-hover:before:scale-100 group-hover:before:rotate-0">
          <img
            src={processIcon}
            alt="Process Icon"
            draggable={false}
            className="transition-all duration-500 group-hover:brightness-0 group-hover:invert group-hover:animate-wobble_vertical"
          />
        </div>
        <img
          src={processLeaf}
          alt="Process Leaf"
          draggable={false}
          className={`absolute -top-[18px] ${leafPosition}`}
        />
      </div>
      <h4 className="font-Outfit font-medium text-2xl sm:text-[28px] md:text-[32px] text-HeadingColor-0 mt-5 mb-2.5">
        {processTilte}
      </h4>
      <p className="font-NotoSans text-TextColor-0 max-w-[325px] w-full mx-auto">
        {processDesc}
      </p>
    </div>
  );
};

export default ProcessCard;
