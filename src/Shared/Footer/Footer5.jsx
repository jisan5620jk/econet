import { Link } from "react-router-dom";
import footerLogo from "/images/footer-logo.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
import shape from "/images/why-choose2-shape4.png";
import shape2 from "/images/footer-shape2.png";

const Footer5 = () => {
  return (
    <footer className="bg-SecondaryColor-0 px-2 sm:px-4 3xl:px-8 pt-16 md:pt-20 lg:pt-[88px] relative z-10">
      <div className="Container">
        <div className="grid gap-y-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-2 xl:gap-0">
          <div className="">
            <div>
              <Link to={"/"} title="Econet">
                <img src={footerLogo} alt="Footer Logo" draggable={false} />
              </Link>
            </div>
            <p className="font-NotoSans text-white font-light mt-8 mb-10 w-full max-w-[285px]">
              Econet maintains a sustainable and eco-friendly environment
              focused on reducing carbon emissions.
            </p>
            <ul className="flex gap-3">
              <li>
                <button className="size-[42px] rounded-full text-sm bg-white bg-opacity-10 flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:rotate-180 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 hover:before:rotate-0">
                  <FaFacebookF />
                </button>
              </li>
              <li>
                <button className="size-[42px] rounded-full text-sm bg-white bg-opacity-10 flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:rotate-180 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 hover:before:rotate-0">
                  <FaXTwitter />
                </button>
              </li>
              <li>
                <button className="size-[42px] rounded-full text-sm bg-white bg-opacity-10 flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:rotate-180 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 hover:before:rotate-0">
                  <FaLinkedinIn />
                </button>
              </li>
              <li>
                <button className="size-[42px] rounded-full text-sm bg-white bg-opacity-10 flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:rotate-180 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 hover:before:rotate-0">
                  <FaPinterestP />
                </button>
              </li>
            </ul>
          </div>
          <div className="w-full max-w-[270px] mt-1.5">
            <h4 className="font-Outfit text-2xl xl:text-[28px] text-white mb-[33px]">
              Online Platform
            </h4>
            <ul>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center justify-between py-3.5 border-b border-white border-opacity-15 w-full font-Outfit text-white transition-all duration-500 hover:text-PrimaryColor-0">
                    Home
                    <BsArrowRight className="text-lg" />
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center justify-between py-3.5 border-b border-white border-opacity-15 w-full font-Outfit text-white transition-all duration-500 hover:text-PrimaryColor-0">
                    About Us
                    <BsArrowRight className="text-lg" />
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center justify-between py-3.5 border-b border-white border-opacity-15 w-full font-Outfit text-white transition-all duration-500 hover:text-PrimaryColor-0">
                    Our Team
                    <BsArrowRight className="text-lg" />
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center justify-between py-3.5 border-b border-white border-opacity-15 w-full font-Outfit text-white transition-all duration-500 hover:text-PrimaryColor-0">
                    Contact Us
                    <BsArrowRight className="text-lg" />
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full max-w-[270px] mt-1.5">
            <h4 className="font-Outfit text-2xl xl:text-[28px] text-white mb-[33px]">
              Useful Links
            </h4>
            <ul>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center justify-between py-3.5 border-b border-white border-opacity-15 w-full font-Outfit text-white transition-all duration-500 hover:text-PrimaryColor-0">
                    Pricing Plans
                    <BsArrowRight className="text-lg" />
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center justify-between py-3.5 border-b border-white border-opacity-15 w-full font-Outfit text-white transition-all duration-500 hover:text-PrimaryColor-0">
                    Our Services
                    <BsArrowRight className="text-lg" />
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center justify-between py-3.5 border-b border-white border-opacity-15 w-full font-Outfit text-white transition-all duration-500 hover:text-PrimaryColor-0">
                    Testimonials
                    <BsArrowRight className="text-lg" />
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center justify-between py-3.5 border-b border-white border-opacity-15 w-full font-Outfit text-white transition-all duration-500 hover:text-PrimaryColor-0">
                    Latest BLogs
                    <BsArrowRight className="text-lg" />
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-1.5">
            <h4 className="font-Outfit text-2xl lg:text-xl xl:text-2xl text-white font-medium mb-[42px]">
              Contact Us
            </h4>
            <div>
              <p className="font-NotoSans text-lg text-TextColor2-0">
                Our Address
              </p>
              <p className="font-NotoSans text-lg text-white font-light mt-2.5">
                130/B alexon market street
                <br /> Sandigo - USA
              </p>
            </div>
            <div className="mt-8">
              <p className="font-NotoSans text-lg text-TextColor2-0 pb-2.5">
                Our Address
              </p>
              <a
                href="mailto:info.econet@gmail.com"
                title="info.econet@gmail.com"
                className="font-NotoSans text-lg text-white font-light"
              >
                info.econet@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 md:mt-[96px]">
        <div className="Container">
          <div className="flex flex-col md:flex-row gap-y-7 md: md:col-span-6 justify-between md:items-center py-10 border-t border-white border-opacity-15">
            <div>
              <p className="font-NotoSans text-white font-light">
                &copy; Econet {new Date().getFullYear()}. All Rights Reserved By
                <Link to={"/"} className="text-PrimaryColor-0">
                  {" "}
                  Dream IT Solution
                </Link>
              </p>
            </div>
            <div>
              <ul className="flex gap-3 sm:gap-5 md:gap-3 lg:gap-12">
                <li>
                  <Link
                    to={"/"}
                    className="font-Outfit text-white transition-all duration-500 hover:text-PrimaryColor-0"
                  >
                    Privacy and Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="font-Outfit text-white transition-all duration-500 hover:text-PrimaryColor-0"
                  >
                    Sitemap
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="font-Outfit text-white transition-all duration-500 hover:text-PrimaryColor-0"
                  >
                    Faqs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-24 right-14 hidden 3xl:block">
        <img
          src={shape}
          alt="Shape"
          draggable={false}
          className="animate-wiggle"
          style={{ animationDuration: "5s" }}
        />
      </div>
      <div className="absolute bottom-[5%] left-[2%] hidden 3xl:block">
        <img
          src={shape2}
          alt="Shape"
          draggable={false}
          className="animate-dance2"
          style={{ animationDuration: "5s" }}
        />
      </div>
    </footer>
  );
};

export default Footer5;
