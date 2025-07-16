import { HiMiniArrowUpRight } from "react-icons/hi2";


const CallDoAction = () => {
  return (
    <div className="relative z-20">
      <section className="bg-[url(/images/cta-bg.png)] bg-no-repeat bg-center bg-cover py-6 md:py-[64px] overflow-hidden">
        <div className="Container">
          <div className="flex flex-wrap justify-between items-center 2xl:px-5 3xl:px-0">
            <div className="flex relative">
              <div>
                <h1 className="font-Outfit font-semibold text-xl sm:text-[34px] md:text-[38px] lg:text-[30px] xl:text-[50px] xl:leading-[60px] text-white mt-[14px] mb-4">
                  Sign Up for-Update
                </h1>
              </div>
            </div>
            <div className="fade-up flex flex-wrap xl:flex-nowrap 2xl:flex-wrap items-center gap-7 md:gap-0 justify-between relative">
              <form action="#" method="post" className="flex flex-wrap items-center gap-4">
                <input type="email" name="email" id="email" placeholder="Enter Your E-Mail*" required className="w-full sm:w-[424px] h-[60px] px-7 py-2 bg-transparent border-2 border-white border-opacity-20 rounded-full text-white" />
                <button type="submit" className="px-[50px] py-[17px] rounded-full bg-PrimaryColor-0 text-white font-Outfit text-[17px] flex items-center gap-1">Signup Now <HiMiniArrowUpRight size={20} /></button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallDoAction;
