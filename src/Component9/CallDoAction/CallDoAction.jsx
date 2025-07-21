import { GoArrowRight } from "react-icons/go";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import ctaImage from "/images/charity-cta-image.png";
import subtitleIcon from "/images/sub-title-icon.png";
import { RiPhoneFill } from "react-icons/ri";

const CallDoAction = () => {
  return (
    <div className="bg-BodyBg-0 -mt-[190px]">
      <div className="Container">
        <div className="relative z-30 pl-20 py-[90px] w-full rounded-[30px] overflow-hidden before:absolute before:-z-10 before:top-0 before:left-0 before:w-full before:h-full before:bg-[linear-gradient(295.67deg,_rgba(255,_255,_255,_0)_40.34%,_#ffffff_58.81%)] inline-block">
          <div className="absolute -z-20 top-0 right-0 w-full h-full">
            <img src={ctaImage} alt="image" draggable={false} />
          </div>
          <h5 className="zoom-in font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
            <img src={subtitleIcon} alt="Icon" draggable={false} /> Contact Us
          </h5>
          <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[42px] md:text-[44px] md:leading-[52px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-HeadingColor-0 mt-3.5">
            Support A Brighter Future
            <br />
            Contribute Today
          </h1>
          <p className="font-NotoSans text-TextColor-0 max-w-[500px] w-full mt-[22px]">
            Econet is a nonprofit environmental organizations maintaince and
            dedicated to protecting planet through
          </p>
          <div className="flex flex-wrap items-center gap-5 mt-9">
            <PrimaryButton as="link" href="/about">
              Contact Us Now <GoArrowRight size={22} />
            </PrimaryButton>
            <div className="flex items-center gap-4">
              <div className="size-[56px] flex items-center justify-center text-white bg-PrimaryColor2-0 rounded-full">
                <span className="size-[30px] flex items-center justify-center border border-white  rounded-full">
                  <RiPhoneFill />
                </span>
              </div>
              <div>
                <h6 className="font-NotoSans text-TextColor-0 text-[15px] mb-1">
                  Call Us (Toll Free)
                </h6>
                <a
                  href="tel:1456678 032"
                  title="+1 (456) 678 032"
                  className="font-Outfit text-[22px] text-HeadingColor-0 font-medium"
                >
                  +1 (456) 678 032
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallDoAction;
