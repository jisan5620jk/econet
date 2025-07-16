import { FaPhone, FaRegEnvelopeOpen } from "react-icons/fa6";
import appointmentTHumb from "/images/application-thumb.png";
import subtitleIcon from "/images/sub-title-icon.png";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import { GoArrowRight } from "react-icons/go";
import { PiUserCircleFill } from "react-icons/pi";
import aboutTeamImg from "/images/about-team-img.png";
import aboutTeamImg2 from "/images/about-team-img2.png";

const Appointment = () => {
  return (
    <div className="bg-white -mt-5 relative z-20">
      <section className="grid grid-cols-1 gap-7 xl:gap-0 xl:grid-cols-2 pt-5 pb-16 md:pb-20 lg:pb-28 xl:pb-0">
        <div className="relative overflow-hidden">
          <img
            src={appointmentTHumb}
            alt="Appointment Image"
            draggable={false}
            className="xl:h-full w-full"
          />
          <div className="size-[220px] bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-[30px] absolute z-20 bottom-7 right-7 hidden sm:flex items-center flex-col justify-center">
            <ul className="flex items-center -space-x-4">
              <li>
                <img
                  src={aboutTeamImg}
                  alt="About Team Image"
                  draggable={false}
                />
              </li>
              <li>
                <img
                  src={aboutTeamImg2}
                  alt="About Team Image"
                  draggable={false}
                />
              </li>
              <li className="size-14 flex items-center justify-center bg-PrimaryColor-0 rounded-full font-Outfit text-white text-lg">
                5k+
              </li>
            </ul>
            <h6 className="font-Outfit text-white text-2xl text-center mt-7">
              Trusted Happpy Customer
            </h6>
          </div>
        </div>
        <div className="bg-white pt-4 md:pt-20 xl:py-10 2xl:py-20 3xl:py-24 px-4 md:px-20 xl:px-10 2xl:px-20 3xl:px-[100px] overflow-hidden">
          <h5 className="zoom-in font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
            <img src={subtitleIcon} alt="Icon" draggable={false} />{" "}
            Consultations
          </h5>
          <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[42px] md:text-[44px] md:leading-[52px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-HeadingColor-0 mt-3.5">
            {`Need Help? We're Here`}
          </h1>
          <form
            action="https://formspree.io/f/xayrekgy"
            method="post"
            className="space-y-5 mt-9"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name*"
                  required
                  className="h-[58px] w-full rounded-full pl-8 text-HeadingColor-0 font-NotoSans bg-transparent outline-none border border-SecondaryColor-0 border-opacity-15 transition-all duration-500 ease-linear placeholder:text-HeadingColor-0 hover:border-PrimaryColor-0 focus:border-PrimaryColor-0"
                />
                <span className="absolute top-1/2 -translate-y-1/2 right-7 flex items-center justify-center text-PrimaryColor-0">
                  <PiUserCircleFill size={22} />
                </span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Your Phone No*"
                  required
                  className="h-[58px] w-full rounded-full pl-8 text-HeadingColor-0 font-NotoSans bg-transparent outline-none border border-SecondaryColor-0 border-opacity-15 transition-all duration-500 ease-linear placeholder:text-HeadingColor-0 hover:border-PrimaryColor-0 focus:border-PrimaryColor-0"
                />
                <span className="absolute top-1/2 -translate-y-1/2 right-7 size-5 border border-PrimaryColor-0 rounded-full flex items-center justify-center text-PrimaryColor-0">
                  <FaPhone size={12} />
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name*"
                  required
                  className="h-[58px] w-full rounded-full pl-8 text-HeadingColor-0 font-NotoSans bg-transparent outline-none border border-SecondaryColor-0 border-opacity-15 transition-all duration-500 ease-linear placeholder:text-HeadingColor-0 hover:border-PrimaryColor-0 focus:border-PrimaryColor-0"
                />
                <span className="absolute top-1/2 -translate-y-1/2 right-7 flex items-center justify-center text-PrimaryColor-0">
                  <FaRegEnvelopeOpen />
                </span>
              </div>
              <div className="relative">
                <select
                  className="h-[58px] w-full cursor-pointer rounded-full pl-7 text-HeadingColor-0 font-NotoSans bg-transparent outline-none border border-SecondaryColor-0 border-opacity-15 placeholder:text-HeadingColor-0 transition-all duration-500 ease-linear hover:border-PrimaryColor-0 focus:border-PrimaryColor-0"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Subject
                  </option>
                  <option value="math">Mathematics</option>
                  <option value="science">Science</option>
                  <option value="history">History</option>
                  <option value="literature">Literature</option>
                </select>
              </div>
            </div>
            <div className="relative">
              <textarea
                name="message"
                id="message"
                placeholder="Write Message..."
                className="min-h-[150px] w-full rounded-[30px] px-7 py-3 resize-none text-PrimaryColor-0 font-Rajdhani text-lg bg-transparent outline-none border border-SecondaryColor-0 border-opacity-15 transition-all duration-500 ease-linear placeholder:text-HeadingColor-0 hover:border-PrimaryColor-0 focus:border-PrimaryColor-0"
              ></textarea>
            </div>
            <PrimaryButton type="submit">
              Send Message <GoArrowRight size={22} />
            </PrimaryButton>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
