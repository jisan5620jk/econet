import VideoCtaImg from "/images/charity-video-img.png";
import FsLightbox from "fslightbox-react";
import { useState } from "react";
import { IoPlaySharp } from "react-icons/io5";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import { GoArrowRight } from "react-icons/go";

const VideoCta = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <section className="relative -mt-[172px] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-BodyBg-0 before:z-10">
      <div className="Container">
        <div className="relative z-30 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-[20px] lg:h-full overflow-hidden relative z-10 before:absolute before:z-10 before:-left-3/4 before:top-0 before:w-1/2 before:h-full before:bg-gradient-to-r before:to-transparent before:via-white before:from-transparent before:-skew-x-[20deg] before:opacity-30 hover:before:animate-shine">
            <img
              src={VideoCtaImg}
              draggable={false}
              alt="VideoCta Background Image"
              className="w-full object-center object-cover lg:h-full xl:h-[inherit]"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <button
                className="size-[64px] bg-white rounded-full text-PrimaryColor-0 text-2xl flex items-center justify-center animate-ripple_white"
                onClick={() => setToggler(!toggler)}
              >
                <IoPlaySharp />
              </button>
            </div>
          </div>
          <div className="bg-[url(/images/charity-cta-bg.png)] bg-cover bg-no-repeat bg-center rounded-[20px] overflow-hidden px-5 sm:px-11 lg:px-6 2xl:px-[52px] pt-6 sm:pt-[50px] lg:pt-5 2xl:pt-[62px] pb-7 sm:pb-[49px] lg:pb-5 xl:pb-6 2xl:pb-[49px] relative z-10">
            <h6 className="font-Outfit text-lg text-PrimaryColor-0 font-medium mb-2 inline-block uppercase">
              Donate Love
            </h6>
            <h3 className="font-Outfit text-xl sm:text-[38px] sm:leading-[46px] font-medium text-white transition-all duration-500 mb-12">
              Give Now – Every
              <br />
              Dollar Counts For
              <br />
              Organization
            </h3>

            <PrimaryButton as="link" href="/about" className="!bg-white/10 !px-9 !py-3 backdrop-filter backdrop-blur-sm border border-white/20 hover:border-SecondaryColor-0">
              Donate Now <GoArrowRight size={22} />
            </PrimaryButton>
          </div>
        </div>
      </div>

      <FsLightbox
        toggler={toggler}
        sources={["https://youtu.be/LlCwHnp3kL4?si=SD5vSCPhr4vc_U5t"]}
      />
    </section>
  );
};

export default VideoCta;
