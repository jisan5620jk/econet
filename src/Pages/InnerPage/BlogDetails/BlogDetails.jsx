import { Link } from "react-router-dom";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import blog_detailsThumb from "/images/classic-banner-bg.jpg";
import blog_detailsImg from "/images/classic-project-img.png";
import blog_detailsImg2 from "/images/classic-project-img2.png";
import itemthumb from "/images/classic-blog-img.png";
import itemthumb2 from "/images/classic-blog-img2.png";
import itemthumb3 from "/images/classic-blog-img3.png";
import author1 from "/images/testi2-img.png";
import author2 from "/images/testi2-img2.png";
import { IoSearch } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import {
  FaAnglesLeft,
  FaAnglesRight,
  FaArrowRightLong,
  FaCircleCheck,
  FaCommentsDollar,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaRegCalendarCheck,
  FaRegFolderOpen,
  FaXTwitter,
} from "react-icons/fa6";
import { BiSolidQuoteAltRight, BiSolidShare } from "react-icons/bi";
import PrimaryButton from "../../../Shared/PrimaryButton/PrimaryButton";
import { BsFillSendFill } from "react-icons/bs";
import BoxReveal from "../../../Shared/BoxAnim/BoxReveal";
import ImageReveal from "../../../Shared/ImageReveal/ImageReveal";
import TextReveal from "../../../Shared/TextAnim/TextReveal";

const BlogDetails = () => {
  BoxReveal();
  ImageReveal();
  TextReveal();
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Blog Details"}
        breadCrumbIcon={<FaArrowRightLong />}
        url={"/blog_grid"}
        breadCrumbLink={"Blog"}
        breadCrumbIcon2={<FaArrowRightLong />}
        breadCrumbContent={"How Every Individual Can..."}
      />
      <section className="py-16 md:py-20 lg:py-[120px]">
        <div className="Container">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-12">
            <div className="col-span-2">
              <div className="border border-BorderColor2-0 rounded-[20px] overflow-hidden">
                <div className="relative">
                  <img
                    draggable="false"
                    src={blog_detailsThumb}
                    className="w-full"
                  />
                  <h6 className="font-Outfit text-white px-5 py-2 rounded-full absolute top-5 left-5 bg-PrimaryColor-0">
                    Environment
                  </h6>
                </div>
                <div className="px-4 sm:px-8">
                  <Link to={"/blog_details"}>
                    <button className="font-Outfit font-semibold text-left text-lg sm:text-2xl 2xl:text-3xl text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 mt-9 mb-6">
                      How Every Individual Can Make a Difference
                    </button>
                  </Link>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-7">
                    <h6 className="flex items-center gap-2 font-Outfit text-HeadingColor-0">
                      <FaUserCircle className="text-4xl text-gray-300" />
                      Jhon Alexon
                    </h6>
                    <h6 className="flex items-center gap-2 font-NotoSans text-TextColor-0 ">
                      <FaRegCalendarCheck className="text-lg text-PrimaryColor-0" />
                      Jan 10, 2025
                    </h6>
                    <h6 className="flex items-center gap-2 font-NotoSans text-TextColor-0 ">
                      <FaCommentsDollar className="text-lg text-PrimaryColor-0" />
                      02 Comments
                    </h6>
                  </div>
                  <p className="font-NotoSans  text-TextColor-0 border-t border-BorderColor1-0 pt-5">
                    Dramatically matrix cross-media vortals wireless
                    deliverables. Phosfluorescently underwhelm market driven
                    e-services and 24/365 infrastructures. Intrinsicly
                    incentivize resource sucking markets without customer
                    directed opportunities . Competently reinvent end-to-end
                    bandwidth vis-a-vis go forward strategic theme areas.
                    Monotonectally enhance reliable
                  </p>
                  <p className="font-NotoSans  text-TextColor-0 mt-5">
                    Enthusiastically productize collaborative interfaces before
                    ethical leadership skills disintermediate global products
                    before real-time portals. Quickly build efficient results
                    rather than
                  </p>
                  <div className="flex flex-col bg-BodyBg-0 sm:flex-row gap-7 px-4 sm:px-11 py-4 sm:py-10 rounded-2xl mt-12">
                    <div className="text-6xl text-PrimaryColor-0">
                      <BiSolidQuoteAltRight />
                    </div>
                    <div className="flex-1">
                      <p className="font-Outfit text-HeadingColor-0 sm:text-lg italic">
                        “Monotonectally impact reliable alignments vis-a-vis
                        corporate architectures ortals through cross functional
                        deliverables. testing procedures”
                      </p>
                      <h6 className="font-Outfit text-HeadingColor-0 pl-16 mt-4 relative before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-14 before:h-[1px] before:bg-PrimaryColor-0">
                        CEO & Founder
                      </h6>
                    </div>
                  </div>
                  <h4 className="font-Outfit font-medium text-left text-lg sm:text-2xl text-HeadingColor-0 mt-14 mb-4">
                    Clean Enviromnent Policy
                  </h4>
                  <p className="font-NotoSans  text-TextColor-0">
                    Dramatically matrix cross-media vortals wireless
                    deliverables. Phosfluorescently underwhelm market driven
                    e-services and 24/365 infrastructures. Intrinsicly
                    incentivize resource.
                  </p>
                  <ul className="flex flex-col gap-[14px] mt-7">
                    <li className="flex gap-3 items-center font-NotoSans  text-TextColor-0">
                      <FaCircleCheck
                        size={"20"}
                        className="text-PrimaryColor-0"
                      />
                      Innovate wireless market
                    </li>
                    <li className="flex gap-3 items-center font-NotoSans  text-TextColor-0">
                      <FaCircleCheck
                        size={"20"}
                        className="text-PrimaryColor-0"
                      />
                      Productivate resource sucking
                    </li>
                    <li className="flex gap-3 items-center font-NotoSans  text-TextColor-0">
                      <FaCircleCheck
                        size={"20"}
                        className="text-PrimaryColor-0"
                      />
                      Proactively unleash oriented communities
                    </li>
                    <li className="flex gap-3 items-center font-NotoSans  text-TextColor-0">
                      <FaCircleCheck
                        size={"20"}
                        className="text-PrimaryColor-0"
                      />
                      Credibly develop progressive archi
                    </li>
                    <li className="flex gap-3 items-center font-NotoSans  text-TextColor-0">
                      <FaCircleCheck
                        size={"20"}
                        className="text-PrimaryColor-0"
                      />
                      Phosfluorescently to customer
                    </li>
                  </ul>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-16">
                    <div className="rounded-2xl overflow-hidden">
                      <img draggable="false" src={blog_detailsImg} />
                    </div>
                    <div className="rounded-2xl overflow-hidden">
                      <img draggable="false" src={blog_detailsImg2} />
                    </div>
                  </div>
                  <h4 className="font-Outfit font-medium text-left text-lg sm:text-2xl text-HeadingColor-0 mt-10 mb-4">
                    Tree Plantation for Human
                  </h4>
                  <p className="font-NotoSans  text-TextColor-0">
                    Dramatically matrix cross-media vortals wireless
                    deliverables. Phosfluorescently underwhelm market driven
                    e-services and 24/365 infrastructures. Intrinsicly
                    incentivize resource.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-5 items-start sm:justify-between border-t border-BorderColor1-0 mt-9 py-5 px-4 sm:px-8">
                  <div>
                    <h6 className="font-Outfit text-lg font-medium">
                      <Link to={"/"}>
                        <button className="font-Outfit font-normal text-sm px-5 py-2 text-HeadingColor-0 rounded bg-BodyBg-0 transition-all duration-500 hover:bg-PrimaryColor-0 hover:text-white mr-2 ml-1">
                          Environmental
                        </button>
                      </Link>
                      <Link to={"/"}>
                        <button className="font-Outfit font-normal text-sm px-5 py-2 text-HeadingColor-0 rounded bg-BodyBg-0 transition-all duration-500 hover:bg-PrimaryColor-0 hover:text-white">
                          Cleaning
                        </button>
                      </Link>
                    </h6>
                  </div>
                  <div>
                    <ul className="flex justify-center items-center gap-2">
                      <li>
                        <Link to={"/"}>
                          <button className="text-white w-9 h-9 rounded-full bg-[#1673ea] flex justify-center items-center">
                            <FaFacebookF size={"13"} />
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <button className="text-white w-9 h-9 rounded-full bg-[#38ceff] flex justify-center items-center">
                            <FaXTwitter size={"13"} />
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <button className="text-white w-9 h-9 rounded-full bg-[#0b4ab1] flex justify-center items-center">
                            <FaLinkedinIn size={"13"} />
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <button className="text-white w-9 h-9 rounded-full bg-[#e92928] flex justify-center items-center">
                            <FaPinterestP size={"13"} />
                          </button>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-[60px]">
                <div className="rounded-[20px] bg-BodyBg-0 pt-8 pb-10 px-4 sm:px-9 lg:px-4 xl:px-9">
                  <button className="font-Outfit font-medium text-lg text-HeadingColor-0 flex items-center gap-2">
                    <FaAnglesLeft size={"14"} />
                    Previous Post
                  </button>
                  <button
                    to={"/"}
                    className="flex gap-5 mt-5"
                  >
                    <div className="size-20">
                      <img
                        draggable="false"
                        src={itemthumb}
                        className="w-full h-full rounded-md"
                      />
                    </div>
                    <div className="flex-1 text-left">
                      <h4 className="font-Outfit font-medium sm:text-lg md:text-base 2xl:text-lg text-HeadingColor-0">
                        Probably Syndicate Vista Seamless...
                      </h4>
                      <p className="font-Outfit text-sm text-SecondaryColor-0 mt-1">
                        01 Jan, 2025
                      </p>
                    </div>
                  </button>
                </div>
                <div className="rounded-[20px] bg-BodyBg-0 pt-8 pb-10 px-4 sm:px-9 lg:px-4 xl:px-9 flex flex-col items-end">
                  <button className="font-Outfit font-medium text-lg text-HeadingColor-0 flex items-center gap-2">
                    Next Post
                    <FaAnglesRight size={"14"} />
                  </button>
                  <button
                    to={"/"}
                    className="flex gap-5 mt-5 text-right"
                  >
                    <div className="flex-1">
                      <h4 className="font-Outfit font-medium sm:text-lg md:text-base 2xl:text-lg text-HeadingColor-0">
                        Forest Cleaning Using Full Safty...
                      </h4>
                      <p className="font-Outfit text-sm text-SecondaryColor-0 mt-1">
                        09 Jan, 2025
                      </p>
                    </div>
                    <div className="size-20">
                      <img
                        draggable="false"
                        src={itemthumb3}
                        className="w-full h-full rounded-md"
                      />
                    </div>
                  </button>
                </div>
              </div>
              <div className="bg-BodyBg-0 px-4 sm:px-[50px] py-14 rounded-[20px] mt-[60px]">
                <h3 className="font-Outfit font-medium text-HeadingColor-0 text-2xl mb-10">
                  Comments (02)
                </h3>
                <div className="flex flex-col sm:flex-row gap-6 border-b border-BorderColor1-0 pb-8">
                  <div>
                    <img draggable="false" src={author1} />
                  </div>
                  <div className="flex-1 relative">
                    <h5 className="font-Outfit font-medium text-HeadingColor-0 text-lg">
                      David Alexon
                    </h5>
                    <p className="font-NotoSans  text-TextColor-0 mt-3">
                      Dramatically reinvent adaptive bandwidth vis reliable
                      infrastructures to the progressively iterate distributed
                      interfaces nice day with our fundraising donation
                    </p>
                    <Link to={"/"}>
                      <button className="text-HeadingColor-0 text-sm rounded-full flex items-center gap-2 font-Outfit absolute top-2 right-0">
                        <BiSolidShare
                          size={"18"}
                          className="text-SecondaryColor-0"
                        />
                        Reply
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 mt-10 md:pl-[90px]">
                  <div>
                    <img draggable="false" src={author2} />
                  </div>
                  <div className="flex-1 relative">
                    <h5 className="font-Outfit font-medium text-HeadingColor-0 text-lg">
                      Anjelina Jholi
                    </h5>
                    <p className="font-NotoSans  text-TextColor-0 mt-3">
                      Dramatically reinvent adaptive bandwidth vis reliable
                      infrastructures to the progressively iterate distributed
                      interfaces nice day with our fundraising donation
                    </p>
                    <Link to={"/"}>
                      <button className="text-HeadingColor-0 text-sm rounded-full flex items-center gap-2 font-Outfit absolute top-2 right-0">
                        <BiSolidShare
                          size={"18"}
                          className="text-SecondaryColor-0"
                        />
                        Reply
                      </button>
                    </Link>
                  </div>
                </div>
                <h3 className="font-Outfit font-medium text-HeadingColor-0 text-xl sm:text-2xl mt-20 mb-10">
                  Post A Comments
                </h3>
                <form action="#" method="post">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-7 mb-5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Your Name*"
                      required
                      className="outline-none rounded-lg font-Outfit placeholder:text-TextColor-0 bg-white w-full px-6 py-2 h-[56px]"
                    />
                    <input
                      type="email"
                      name="email"
                      id="eamil"
                      placeholder="Enter Your E-Mail*"
                      required
                      className="outline-none rounded-lg font-Outfit placeholder:text-TextColor-0 bg-white w-full px-6 py-2 h-[56px]"
                    />
                  </div>
                  <textarea
                    name="comment"
                    id="comment"
                    placeholder="Write A Comment..."
                    required
                    className="outline-none resize-none rounded-lg font-Outfit placeholder:text-TextColor-0 bg-white w-full px-6 py-3 h-[160px]"
                  ></textarea>
                  <label
                    htmlFor="terms"
                    className="flex items-center gap-2 my-7 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      name="terms"
                      id="terms"
                      className="text-SecondaryColor-0"
                    />
                    <p className="font-Outfit text-TextColor-0">
                      I agree with the handling of your data by this data*
                    </p>
                  </label>
                  <PrimaryButton type="submit" className="!py-3 !px-8">
                    Submit Comment
                    <BsFillSendFill />
                  </PrimaryButton>
                </form>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className="relative inline-block w-full mb-7 p-4 sm:p-8 lg:p-6 xl:p-8 rounded-[20px] bg-BodyBg-0">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search here..."
                  required
                  className="w-full h-[56px] p-6 rounded-2xl font-Outfit"
                />
                <button
                  type="submit"
                  className=" text-xl text-white rounded-r-2xl h-[56px] w-[56px] bg-PrimaryColor-0 transition-all duration-500 flex items-center justify-center hover:hue-rotate-[360deg] absolute right-7 top-1/2 -translate-y-1/2"
                >
                  <IoSearch />
                </button>
              </div>
              <div className="bg-BodyBg-0 rounded-[20px] px-4 sm:px-8 lg:px-6 xl:px-8 pt-7 pb-4 mb-7">
                <h4 className="font-Outfit font-medium text-2xl text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0">
                  Categories
                </h4>
                <ul className="mt-8">
                  <li>
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
                  <li>
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
                  <li>
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
                  <li>
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
                  <li>
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
                  <li>
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
              <div className="px-4 sm:px-8 lg:px-6 xl:px-8 bg-BodyBg-0 rounded-[20px] pt-7 pb-4 mb-7">
                <h4 className="font-Outfit font-medium text-2xl text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0">
                  Popular Post
                </h4>
                <Link to={"/blog-details"}>
                  <button className="group flex gap-4 mb-6">
                    <div className="size-20">
                      <img
                        draggable="false"
                        src={itemthumb}
                        className="w-full h-full rounded-md"
                      />
                    </div>
                    <div className="flex-1 text-left">
                      <h6 className="font-Outfit font-medium text-lg lg:text-base 2xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0">
                        Dramatically Architect new model before...
                      </h6>
                      <p className="font-NotoSans text-PrimaryColor-0 text-sm mt-1">
                        01 Jan, 2025
                      </p>
                    </div>
                  </button>
                </Link>
                <Link to={"/blog_details"}>
                  <button className="group flex gap-4 my-6">
                    <div className="size-20">
                      <img
                        draggable="false"
                        src={itemthumb2}
                        className="w-full h-full rounded-md"
                      />
                    </div>
                    <div className="flex-1 text-left">
                      <h6 className="font-Outfit font-medium text-lg lg:text-base 2xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0">
                        Progressively Syndicate Vista Seamless...
                      </h6>
                      <p className="font-NotoSans text-PrimaryColor-0 text-sm mt-1">
                        16 Jan, 2025
                      </p>
                    </div>
                  </button>
                </Link>
                <Link to={"/blog_details"}>
                  <button className="group flex gap-4 my-6">
                    <div className="size-20">
                      <img
                        draggable="false"
                        src={itemthumb3}
                        className="w-full h-full rounded-md"
                      />
                    </div>
                    <div className="flex-1 text-left">
                      <h6 className="font-Outfit font-medium text-lg lg:text-base 2xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0">
                        Completely Leverage Existing Customer...
                      </h6>
                      <p className="font-NotoSans text-PrimaryColor-0 text-sm mt-1">
                        27 Jan, 2025
                      </p>
                    </div>
                  </button>
                </Link>
              </div>
              <div className="bg-BodyBg-0 rounded-[20px] px-4 sm:px-8 lg:px-6 xl:px-8 pt-7 pb-10 mb-7">
                <h4 className="font-Outfit font-medium text-2xl text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0">
                  Tags
                </h4>
                <ul className="inline-block">
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded-lg flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Outfit relative z-10 before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 hover:before:scale-100 hover:text-white">
                        Environment
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded-lg flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Outfit relative z-10 before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 hover:before:scale-100 hover:text-white">
                        Echology
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded-lg flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Outfit relative z-10 before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 hover:before:scale-100 hover:text-white">
                        Seedlings
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded-lg flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Outfit relative z-10 before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 hover:before:scale-100 hover:text-white">
                        Tree Plantation
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded-lg flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Outfit relative z-10 before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 hover:before:scale-100 hover:text-white">
                        Recycling
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded-lg flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Outfit relative z-10 before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 hover:before:scale-100 hover:text-white">
                        Cleaning
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
