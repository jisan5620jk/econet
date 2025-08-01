import ProcessCard from "./ProcessCard";
import subtitleIcon from "/images/sub-title-icon.png";
import processIcon from "/images/process-icon.png";
import processIcon2 from "/images/process-icon2.png";
import processIcon3 from "/images/process-icon3.png";
import processLeaf from "/images/process-leaf.png";
import processBorder from "/images/process2-border.png";

const processData = [
  {
    processIcon: processIcon,
    processLeaf: processLeaf,
    leafPosition: "-left-[38px]",
    processTilte: "Start Planning",
    processDesc:
      "Econet is a nonprofit environmental main dedicated to protecting planet the through community empowerment",
    processBorder: processBorder,
    borderPosition: "-top-5 -right-[60%]",
  },
  {
    processIcon: processIcon2,
    processLeaf: processLeaf,
    leafPosition: "-left-[38px]",
    processTilte: "Research",
    processDesc:
      "Econet is a nonprofit environmental main dedicated to protecting planet the through community empowerment",
    processBorder: processBorder,
    borderPosition: "-right-[62%] top-12 rotate-[20deg]",
  },
  {
    processIcon: processIcon3,
    processLeaf: processLeaf,
    leafPosition: "-right-[38px] rotate-90",
    processTilte: "Completed",
    processDesc:
      "Econet is a nonprofit environmental main dedicated to protecting planet the through community empowerment",
  },
];

const Process = () => {
  return (
    <div className="-mt-5">
      <section className="bg-BodyBgDark-0 py-16 md:py-20 lg:py-[120px]  relative z-10 overflow-hidden">
        <div className="Container">
          <div className="text-center">
            <h5 className="zoom-in font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
              <img src={subtitleIcon} alt="Icon" draggable={false} /> Working
              Process
            </h5>
            <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[42px] md:text-[44px] md:leading-[52px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-white mt-3.5">
              We following 3 Easy Steps
              <br />
              Finished our Works
            </h1>
          </div>
          <div className="box-row flex items-start justify-around flex-wrap gap-7 mt-9 sm:mt-12 md:mt-[80px]">
            {processData.map((process, index) => (
              <div
                key={index}
                className={`box ${index !== 1 ? "lg:mt-[60px]" : ""}`}
              >
                <ProcessCard {...process} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
