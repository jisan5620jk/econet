import { Link } from "react-router-dom";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import serviceDetailsIcon from "/images/sidebar-icon.png";
import serviceDetailsIcon2 from "/images/sidebar-icon2.png";
import serviceDetailsThumb from "/images/blog-thumb.png";
import projectDetialsBoxImg from "/images/classic-project-img.png";
import projectDetialsBoxImg2 from "/images/classic-project-img3.png";
import {
  FaArrowRight,
  FaArrowRightLong,
  FaRegFolderOpen,
} from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { IoMdCall, IoMdCheckmark } from "react-icons/io";
import { FaPhoneVolume, FaRegEnvelope } from "react-icons/fa";
import { GiEcology } from "react-icons/gi";
import BoxReveal from "../../../Shared/BoxAnim/BoxReveal";
import ImageReveal from "../../../Shared/ImageReveal/ImageReveal";
import TextReveal from "../../../Shared/TextAnim/TextReveal";

const ServiceDetails = () => {
  BoxReveal();
  ImageReveal();
  TextReveal();
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Tree Plantation"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Serivces"}
        breadCrumbIcon2={<FaArrowRightLong />}
        breadCrumbContent={"Tree Plantation"}
      />
      <section className="py-16 md:py-20 lg:py-[120px] bg-white">
        <div className="Container">
          <div className="grid grid-cols-3 gap-[70px] lg:gap-10 xl:gap-[70px]">
            <div className="col-span-3 lg:col-span-2">
              <img
                src={serviceDetailsThumb}
                draggable="false"
                className="w-full rounded-[20px]"
              />
              <h2 className="fade-up font-Outfit font-semibold text-2xl sm:text-4xl text-HeadingColor-0 mt-8">
                Tree Plantation Services
              </h2>
              <p className="fade-up font-NotoSans text-TextColor-0 mt-6">
                Alternative innovation to ethical network environmental
                whiteboard pursue compelling results premier methods
                empowerment. Dramatically architect go forward opportunities
                before user-centric partner Credibly implement exceptional
              </p>
              <p className="fade-up font-NotoSans text-TextColor-0 mt-7 mb-11">
                Continually fashion orthogonal leadership skills whereas
                wireless metrics. Uniquely syndicate exceptio opportunities with
                interdependent users. Globally enhance fully tested
                meta-services rather than pan solutions. Proactively integrate
                client-integrate go forward architectures and turnkey
                meta-services. Interactively harness integrated ROI whereas
                frictionless products.
              </p>
              <div className="box-row grid grid-cols-1 sm:grid-cols-2 gap-7">
                <div className="box flex flex-col md:flex-row lg:flex-col xl:flex-row gap-5 bg-BodyBg-0 rounded-md px-6 py-7">
                  <div className="w-[72px] h-[72px] rounded-full bg-white flex justify-center items-center">
                    <img src={serviceDetailsIcon} draggable="false" />
                  </div>
                  <div className="flex-1">
                    <h6 className="font-Outfit font-medium text-[22px] text-HeadingColor-0">
                      Proper Recycling
                    </h6>
                    <p className="font-NotoSans text-TextColor-0 mt-3">
                      Ethical network environmental architect credibly implement
                    </p>
                  </div>
                </div>
                <div className="box flex flex-col md:flex-row lg:flex-col xl:flex-row gap-5 bg-BodyBg-0 rounded-md px-6 py-7">
                  <div className="w-[72px] h-[72px] rounded-full bg-white flex justify-center items-center">
                    <img src={serviceDetailsIcon2} draggable="false" />
                  </div>
                  <div className="flex-1">
                    <h6 className="font-Outfit font-medium text-[22px] text-HeadingColor-0">
                      Make Green
                    </h6>
                    <p className="font-NotoSans text-TextColor-0 mt-3">
                      Ethical network environmental architect credibly implement
                    </p>
                  </div>
                </div>
              </div>
              <div className="fade-up bg-PrimaryColor-0 px-4 sm:px-[42px] rounded-md py-3 sm:py-7 flex flex-col sm:flex-row sm:items-center gap-5 mt-[62px]">
                <div className="pr-5 sm:border-r-2 border-white/20 text-white">
                  <GiEcology size={50} />
                </div>
                <div className="flex-1">
                  <p className="font-Outfit italic text-lg sm:text-[22px] leading-7 text-white">
                    Competently architect intermandated deliverables client
                    <br className="hidden 2xl:block" />
                    niches continually underwhelm
                  </p>
                </div>
              </div>
              <h2 className="fade-up font-Outfit font-medium text-2xl sm:text-3xl text-HeadingColor-0 mt-[54px]">
                What the Benifits?
              </h2>
              <p className="fade-up font-NotoSans text-TextColor-0 mt-6">
                Alternative innovation to ethical network environmental
                whiteboard pursue compelling results for premier methods
                empowerment. Dramatically architect go forward opportunities
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-9">
                <div className="text-center group">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={projectDetialsBoxImg}
                      draggable="false"
                      className="w-full transition-all duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="fade-up bg-white shadow-cases rounded-lg inline-block pt-7 pl-4 sm:pl-8 lg:pl-4 xl:pl-8 pb-7 w-[calc(100%-30px)] sm:w-[calc(100%-60px)] lg:w-[calc(100%-30px)] xl:w-[calc(100%-60px)] -mt-8 relative z-10">
                    <h4 className="font-Outfit text-HeadingColor-0 font-semibold text-[22px] lg:text-xl xl:text-[22px] text-left mb-3">
                      Green Environment
                    </h4>
                    <ul>
                      <li className="flex items-center gap-2 text-TextColor-0 text-left font-NotoSans mb-2 lg:text-sm xl:text-base">
                        <IoMdCheckmark className="text-PrimaryColor-0 text-xl" />
                        New Modern Equipments
                      </li>
                      <li className="flex items-center gap-2 text-TextColor-0 text-left font-NotoSans lg:text-sm xl:text-base">
                        <IoMdCheckmark className="text-PrimaryColor-0 text-xl" />
                        Expert’s Volunteers
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={projectDetialsBoxImg2}
                      draggable="false"
                      className="w-full transition-all duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="fade-up bg-white shadow-cases rounded-lg inline-block pt-7 pl-4 sm:pl-8 lg:pl-4 xl:pl-8 pb-7 w-[calc(100%-30px)] sm:w-[calc(100%-60px)] lg:w-[calc(100%-30px)] xl:w-[calc(100%-60px)] -mt-8 relative z-10">
                    <h4 className="font-Outfit text-HeadingColor-0 font-semibold text-[22px] lg:text-xl xl:text-[22px] text-left mb-3">
                      Renewable Energy
                    </h4>
                    <ul>
                      <li className="flex items-center gap-2 text-TextColor-0 text-left font-NotoSans mb-2 lg:text-sm xl:text-base">
                        <IoMdCheckmark className="text-PrimaryColor-0 text-xl" />
                        New Modern Equipments
                      </li>
                      <li className="flex items-center gap-2 text-TextColor-0 text-left font-NotoSans lg:text-sm xl:text-base">
                        <IoMdCheckmark className="text-PrimaryColor-0 text-xl" />
                        Expert’s Volunteers
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3 lg:col-span-1">
              <div className="bg-BodyBg-0 rounded-[20px] px-4 sm:px-8 lg:px-6 xl:px-8 pt-7 pb-4 mb-7">
                <h4 className="fade-up font-Outfit font-medium text-2xl text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0">
                  Categories
                </h4>
                <ul className="mt-8 box-row">
                  <li className="box">
                    <Link to={"/service_details"}>
                      <button className="w-full font-Outfit text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded-xl bg-white mb-3 overflow-hidden z-10 relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-10 before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                          Ocean Cleaning
                        </span>
                        <FaArrowRightLong className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                      </button>
                    </Link>
                  </li>
                  <li className="box">
                    <Link to={"/service_details2"}>
                      <button className="w-full font-Outfit text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded-xl bg-white mb-3 overflow-hidden z-10 relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-10 before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                          Dust Recycling
                        </span>
                        <FaArrowRightLong className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                      </button>
                    </Link>
                  </li>
                  <li className="box">
                    <Link to={"/service_details3"}>
                      <button className="w-full font-Outfit text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded-xl bg-white mb-3 overflow-hidden z-10 relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-10 before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                          Plant Seedlings
                        </span>
                        <FaArrowRightLong className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                      </button>
                    </Link>
                  </li>
                  <li className="box">
                    <Link to={"/service_details4"}>
                      <button className="w-full font-Outfit text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded-xl bg-white mb-3 overflow-hidden z-10 relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-10 before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                          Renewable Energy
                        </span>
                        <FaArrowRightLong className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                      </button>
                    </Link>
                  </li>
                  <li className="box">
                    <Link to={"/service_details5"}>
                      <button className="w-full font-Outfit text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded-xl bg-white mb-3 overflow-hidden z-10 relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-10 before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                          Environmental
                        </span>
                        <FaArrowRightLong className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                      </button>
                    </Link>
                  </li>
                  <li className="box">
                    <Link to={"/service_details6"}>
                      <button className="w-full font-Outfit text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded-xl bg-white mb-3 overflow-hidden z-10 relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-10 before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                          Forest Cleaning
                        </span>
                        <FaArrowRightLong className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bg-BodyBg-0 rounded-[20px] px-4 sm:px-8 lg:px-6 xl:px-8 pt-7 pb-4 mb-7">
                <h4 className="fade-up font-Outfit font-medium text-2xl text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0">
                  Downloads
                </h4>
                <ul className="mt-8">
                  <li className="fade-up">
                    <Link to={"/"}>
                      <button className="w-full font-Outfit bg-SecondaryColor-0 text-left text-white transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded-lg bg-HoverColor-0 mb-3 overflow-hidden z-10 relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-10 before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <BsFileEarmarkPdf
                            size={"20"}
                            className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white"
                          />
                          Service Report
                        </span>
                        <HiDownload size={"24"} className="text-white" />
                      </button>
                    </Link>
                  </li>
                  <li className="fade-up">
                    <Link to={"/"}>
                      <button className="w-full font-Outfit bg-SecondaryColor-0 text-left text-white transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded-lg bg-HoverColor-0 mb-3 overflow-hidden z-10 relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-10 before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <BsFileEarmarkPdf
                            size={"20"}
                            className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white"
                          />
                          Service List
                        </span>
                        <HiDownload size={"24"} className="text-white" />
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="fade-up rounded-[20px] px-9 relative z-10 overflow-hidden bg-[url('/images/classic-project-img2.png')] bg-cover bg-no-repeat bg-center py-[50px]">
                <div className="absolute -z-10 top-0 left-0 w-full h-full bg-SecondaryColor-0/40"></div>
                <div className="size-[90px] relative before:absolute before:left-0 before:top-0 before:size-full before:rounded-full before:border-2 before:animate-rotational  before:border-dashed before:border-PrimaryColor-0 flex items-center justify-center">
                  <div className="size-[70px] rounded-full bg-PrimaryColor-0 flex items-center justify-center">
                    <span className="size-7 rounded-full border-2 border-white text-white flex items-center justify-center">
                      <IoMdCall size={18} />
                    </span>
                  </div>
                </div>
                <h6 className="font-Outfit text-lg text-white mt-10 mb-2">
                  Call Us Anytime
                </h6>
                <div className="flex items-center gap-1 mb-3">
                  <div className="text-PrimaryColor-0 -rotate-45">
                    <FaPhoneVolume size={"20"} />
                  </div>
                  <a href="tel:+1234567890" title="+123 (4567) 890">
                    <button className="font-Outfit text-[22px] text-white">
                      +123 (4567) 890
                    </button>
                  </a>
                </div>
                <div className="flex items-center gap-2 mb-8">
                  <div className="text-PrimaryColor-0">
                    <FaRegEnvelope size={"16"} />
                  </div>
                  <a href="mailto:example@gmail.com" title="example@gmail.com">
                    <button className="font-Outfit text-lg text-white">
                      example@gmail.com
                    </button>
                  </a>
                </div>
                <Link to={"/contact"}>
                  <button className="font-Outfit text-white flex gap-2 items-center border border-PrimaryColor-0 bg-PrimaryColor-0 w-full h-[58px] rounded-full overflow-hidden justify-center z-10 relative before:absolute before:top-0 before:right-0 before:-z-10 before:w-0 before:h-full before:bg-SecondaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                    Contact Us
                    <FaArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
