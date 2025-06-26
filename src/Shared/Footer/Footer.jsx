import { Link } from "react-router-dom";
import footerLogo from "/images/footer-logo.png";
import icon from "/images/cta-icon.png";
import subtitleIcon from "/images/sub-title-icon.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
import ctaShape from "/images/leaf.png";
import shape from "/images/footer-shape.png";
import shape2 from "/images/footer-shape2.png";

const Footer = () => {
  return (
    <div className="bg-[url('/images/footer-bg.png')] bg-cover bg-center bg-no-repeat px-2 sm:px-4 lg:px-8 pb-2 sm:pb-4 lg:pb-8 -mt-12">
      <section className="py-16 md:py-20 lg:py-[120px] relative">
        <div className="absolute right-[32%] top-24 hidden lg:block">
          <img
            src={ctaShape}
            alt="CTA Shape"
            draggable={false}
            className="w-10/12 animate-swing"
            style={{ animationDuration: "3.5s" }}
          />
        </div>
        <div className="Container">
          <div className="flex items-center justify-between flex-wrap gap-8 mt-12">
            <div className="relative">
              <h5 className="font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
                <img src={subtitleIcon} alt="Icon" draggable={false} /> Get In
                Touch
              </h5>
              <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[42px] md:text-[44px] md:leading-[52px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-white mt-3.5">
                Building A greener future
                <br />
                And Innovative ecology
                <br />
                Get in touch anytime
              </h1>
            </div>
            <div className="flex items-end justify-end relative">
              <div className="size-[200px] bg-PrimaryColor-0 rounded-full flex items-center justify-center">
                <div className="size-[130px] animate-rotational">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 250.5 250.5"
                    className="overflow-visible"
                  >
                    <path
                      d="M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125"
                      id="e-path-35ee1b2"
                      className="fill-transparent"
                    ></path>
                    <text className="font-Outfit text-[35px] uppercase">
                      <textPath
                        id="e-text-path-35ee1b2"
                        href="#e-path-35ee1b2"
                        startOffset="0%"
                        className="fill-white"
                      >
                        • Natural • Renewable • Recycle • Echology
                      </textPath>
                    </text>
                  </svg>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <img src={icon} draggable="false" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-BodyBgDark-0 pt-16 md:pt-20 lg:pt-[100px] rounded-xl sm:rounded-2xl md:rounded-[50px] border-t-[3px] sm:border-t-4 md:border-t-[10px] border-PrimaryColor-0 relative overflow-hidden">
        <div className="Container">
          <div className="grid gap-y-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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
                  &copy; Econet {new Date().getFullYear()}. All Rights Reserved
                  By
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
        <div className="absolute top-5 right-0 hidden 2xl:block">
          <img
            src={shape}
            alt="Shape"
            draggable={false}
            className="animate-wiggle"
            style={{ animationDuration: "5s" }}
          />
        </div>
        <div className="absolute bottom-[5%] left-[2%] hidden 2xl:block">
          <img
            src={shape2}
            alt="Shape"
            draggable={false}
            className="animate-dance2"
            style={{ animationDuration: "5s" }}
          />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
