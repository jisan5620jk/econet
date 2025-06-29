import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import { GoArrowRight } from "react-icons/go";

const Banner = () => {
  return (
    <section className="bg-SecondaryColor-0 px-2 sm:px-4 lg:px-8 py-2 sm:py-4 lg:py-8 rounded-b-xl sm:rounded-b-2xl md:rounded-b-[30px] relative z-30 overflow-hidden">
      <div className="bg-[url(/images/banner2-bg.png)] bg-cover bg-no-repeat bg-center py-36">
        <div className="Container">
          <div className="max-w-[745px]">
            <h1 className="relative z-10 font-Outfit font-semibold text-HeadingColor-0 text-[26px] leading-[32px] sm:text-[36px] sm:leading-[42px] md:text-[56px] md:leading-[62px] lg:text-[60px] lg:leading-[64px] xl:text-[48px] xl:leading-[48px] 2xl:text-[64px] 2xl:leading-[68px] 3xl:text-[74px] 3xl:leading-[78px]">
              Building evergreen
              <br />
              Natural humanity
              <br />
              <span className="text-PrimaryColor-0">Innovate</span> earth
            </h1>
            <div className="mt-6 md:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-7">
              <PrimaryButton as="link" href="/about">
                Explore Services <GoArrowRight size={22} />
              </PrimaryButton>
              <div>
                <h6 className="font-NotoSans text-[15px] text-TextColor-0 mb-1">
                  Call Us (Toll Free)
                </h6>
                <a
                  href="calto:+1456678032"
                  title="+1 (456) 678 032"
                  className="font-Outfit text-[22px] font-medium text-HeadingColor-0"
                >
                  +1 (456) 678 032
                </a>
              </div>
            </div>
            <div className="flex flex-wrap xl:flex-nowrap gap-5 justify-between mt-20 md:mt-[136px] xl:mt-24 2xl:mt-[136px]">
              <div>
                <h5 className="font-Outfit font-medium text-HeadingColor-0 text-lg leading-7">
                  We’re Since <span className="text-PrimaryColor-0">1998</span>
                  <br />
                  Based in USA
                </h5>
              </div>
              <div>
                <p className="font-NotoSans text-TextColor-0 w-full max-w-[390px] xl:max-w-[300px] 2xl:max-w-[390px]">
                  Econet is a nonprofit environmental organizations dedicated to
                  protecting planet through sustainable community empowerment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
