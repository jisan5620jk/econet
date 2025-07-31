import { FaPhone, FaRegEnvelopeOpen } from "react-icons/fa6";
import appointmentTHumb from "/images/application-thumb.png";
import subtitleIcon from "/images/sub-title-icon.png";
import { GoArrowRight } from "react-icons/go";
import { PiUserCircleFill } from "react-icons/pi";
import aboutTeamImg from "/images/about-team-img.png";
import aboutTeamImg2 from "/images/about-team-img2.png";
import PrimaryButton from "../../../Shared/PrimaryButton/PrimaryButton";
import BoxReveal from "../../../Shared/BoxAnim/BoxReveal";
import ImageReveal from "../../../Shared/ImageReveal/ImageReveal";
import TextReveal from "../../../Shared/TextAnim/TextReveal";

const Appointment = () => {
  BoxReveal();
  ImageReveal();
  TextReveal();
  return (
    <div className="px-2 sm:px-4 2xl:px-8 py-6 relative z-10 bg-SecondaryColor-0 -mt-7">
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 pt-7">
        <div className="relative rounded-[30px] overflow-hidden">
          <img
            src={appointmentTHumb}
            alt="Appointment Image"
            draggable={false}
            className="xl:h-full 2xl:[inherit]"
          />
          <div className="absolute z-10 -bottom-2 right-0 rotate-90 hidden sm:block">
            <div className="size-[245px] rounded-bl-[30px] bg-SecondaryColor-0 inline-block relative">
              <span className="absolute -left-[30px] top-0 rotate-180 size-[30px] inline-block bg-SecondaryColor-0 [clip-path:path('M0_0_Q0,30_30,30_L_0_30_Z')]"></span>
              <span className="absolute -bottom-[30px] right-0 rotate-180 size-[30px] inline-block bg-SecondaryColor-0 [clip-path:path('M0_0_Q0,30_30,30_L_0_30_Z')]"></span>
            </div>
          </div>
          <div className="size-[220px] bg-BodyBgDark-0 rounded-[30px] absolute z-20 bottom-0 right-0 hidden sm:flex items-center flex-col justify-center">
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
        <div className="bg-[url(/images/application-bg.png)] bg-no-repeat bg-center bg-cover rounded-[30px] p-4 md:p-20 xl:p-10 2xl:p-20 overflow-hidden">
          <h5 className="zoom-in font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
            <img src={subtitleIcon} alt="Icon" draggable={false} /> Appointment
          </h5>
          <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[42px] md:text-[44px] md:leading-[52px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-HeadingColor-0 mt-3.5">
            {`Need Help? We're Here`}
          </h1>
          <form
            action="https://formspree.io/f/xayrekgy"
            method="post"
            className="box-row space-y-5 mt-9"
          >
            <div className="box grid grid-cols-1 sm:grid-cols-2 gap-7">
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
            <div className="box grid grid-cols-1 sm:grid-cols-2 gap-7">
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
            <div className="box relative">
              <textarea
                name="message"
                id="message"
                placeholder="Write Message..."
                className="min-h-[150px] w-full rounded-[30px] px-7 py-3 resize-none text-PrimaryColor-0 font-Rajdhani text-lg bg-transparent outline-none border border-SecondaryColor-0 border-opacity-15 transition-all duration-500 ease-linear placeholder:text-HeadingColor-0 hover:border-PrimaryColor-0 focus:border-PrimaryColor-0"
              ></textarea>
            </div>
            <div className="box">
              <PrimaryButton type="submit">
                Send Message <GoArrowRight size={22} />
              </PrimaryButton>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
