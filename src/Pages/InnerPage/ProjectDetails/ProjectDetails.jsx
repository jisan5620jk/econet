import { Link } from "react-router-dom";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import projectDetailsThumb from "/images/project-details-thumb.jpg";
import projectDetailsListThumb from "/images/classic-service-img2.png";
import { FaArrowRight, FaArrowRightLong, FaCircleCheck } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { FaPhoneVolume, FaRegEnvelope } from "react-icons/fa";
import BoxReveal from "../../../Shared/BoxAnim/BoxReveal";
import ImageReveal from "../../../Shared/ImageReveal/ImageReveal";
import TextReveal from "../../../Shared/TextAnim/TextReveal";

const ProjectDetails = () => {
  BoxReveal();
  ImageReveal();
  TextReveal();
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Project Details"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Project"}
        breadCrumbIcon2={<FaArrowRightLong />}
        breadCrumbContent={"Echology Energy"}
      />
      <section className="py-16 md:py-20 lg:py-[120px]">
        <div className="Container">
          <img
            src={projectDetailsThumb}
            draggable="false"
            className="w-full rounded-[20px]"
          />
          <div className="grid grid-cols-3 gap-[70px] mt-12">
            <div className="col-span-3 lg:col-span-2">
              <h2 className="font-Outfit font-semibold text-3xl sm:text-4xl text-HeadingColor-0">
                Rapidiously Formulate efficient
              </h2>
              <p className="font-NotoSans text-TextColor-0 mt-6">
                Alternative innovation to ethical network environmental
                whiteboard pursue compelling results premier methods
                empowerment. Dramatically architect go forward opportunities
                before user-centric partner Credibly implement exceptional
              </p>
              <p className="font-NotoSans text-TextColor-0 mt-7 mb-9">
                Continually fashion orthogonal leadership skills whereas
                wireless metrics. Uniquely syndicate exceptio opportunities with
                interdependent users. Globally enhance fully tested
                meta-services rather than pan solutions. Proactively integrate
                client-integrate go forward architectures and turnkey
                meta-services. Interactively harness integrated ROI whereas
                frictionless products.
              </p>
              <h2 className="font-Outfit font-medium text-[28px] text-HeadingColor-0 mt-[52px]">
                Quickly Parallel Task
              </h2>
              <p className="font-NotoSans text-TextColor-0 mt-6">
                Methods empowerment. Dramatically architect go forward
                opportunities credibly revolutionize front-end initiatives for
                interoperable outsourcing. Conveniently repurpose market-driven
                deliverables without holistic potentialitiess distinctively
                integrate
              </p>
              <div className="grid gap-7 grid-cols-1 lg:grid-cols-1 md:grid-cols-2 items-center xl:grid-cols-2 mt-12">
                <div>
                  <img
                    src={projectDetailsListThumb}
                    draggable="false"
                    className="rounded-2xl"
                  />
                </div>
                <div>
                  <h2 className="font-Outfit font-semibold text-[28px] text-HeadingColor-0">
                    Project Benifits
                  </h2>
                  <ul className="flex flex-col gap-[14px] mt-7">
                    <li className="flex gap-3 items-center font-NotoSans text-TextColor-0">
                      <FaCircleCheck
                        size={"20"}
                        className="text-PrimaryColor-0"
                      />
                      Innovate wireless market
                    </li>
                    <li className="flex gap-3 items-center font-NotoSans text-TextColor-0">
                      <FaCircleCheck
                        size={"20"}
                        className="text-PrimaryColor-0"
                      />
                      Productivate resource sucking
                    </li>
                    <li className="flex gap-3 items-center font-NotoSans text-TextColor-0">
                      <FaCircleCheck
                        size={"20"}
                        className="text-PrimaryColor-0"
                      />
                      Proactively unleash oriented communities
                    </li>
                    <li className="flex gap-3 items-center font-NotoSans text-TextColor-0">
                      <FaCircleCheck
                        size={"20"}
                        className="text-PrimaryColor-0"
                      />
                      Credibly develop progressive archi
                    </li>
                    <li className="flex gap-3 items-center font-NotoSans text-TextColor-0">
                      <FaCircleCheck
                        size={"20"}
                        className="text-PrimaryColor-0"
                      />
                      Phosfluorescently to customer
                    </li>
                  </ul>
                </div>
              </div>
              <h2 className="font-Outfit font-medium text-3xl text-PrimaryColor-0 mt-[44px]">
                Competently architect intermandated deliverables client niches
                continually underwhelm
              </h2>
              <p className="font-NotoSans text-TextColor-0 mt-5">
                Appropriately communicate economically sound e-commerce after
                enterprise services. Dramatically target cross-media solutions
                and error-free platforms. Monotonectally pontificate 24/365
                human capital and dynamic potentialities compellingly pursue
              </p>
            </div>
            <div className="col-span-3 lg:col-span-1">
              <div className="rounded-[20px] overflow-hidden bg-BodyBg-0 mb-7">
                <div className="mx-9 pt-9 border-b border-dashed border-[#D9DDEC] pb-4">
                  <p className="font-Outfit text-TextColor-0">Clients :</p>
                  <h5 className="font-Outfit font-medium text-HeadingColor-0 pt-1">
                    Holquim Group & Company
                  </h5>
                </div>
                <div className="mx-9 pt-3 border-b border-dashed border-[#D9DDEC] pb-4">
                  <p className="font-Outfit text-TextColor-0">Category :</p>
                  <h5 className="font-Outfit font-medium text-HeadingColor-0 pt-1">
                    Dust Recycling
                  </h5>
                </div>
                <div className="mx-9 pt-3 border-b border-dashed border-[#D9DDEC] pb-4">
                  <p className="font-Outfit text-TextColor-0">
                    Starting Date :
                  </p>
                  <h5 className="font-Outfit font-medium text-HeadingColor-0 pt-1">
                    02 January, 2025
                  </h5>
                </div>
                <div className="mx-9 pt-3 border-b border-dashed border-[#D9DDEC] pb-4">
                  <p className="font-Outfit text-TextColor-0">Ending Date :</p>
                  <h5 className="font-Outfit font-medium text-HeadingColor-0 pt-1">
                    05 June, 2025
                  </h5>
                </div>
                <div className="mx-9 pt-3">
                  <p className="font-Outfit text-TextColor-0">
                    Project Value :
                  </p>
                  <h5 className="font-Outfit font-medium text-HeadingColor-0 pt-1 pb-8">
                    $5,000
                  </h5>
                </div>
              </div>
              <div className="rounded-[20px] px-9 relative z-10 overflow-hidden bg-[url('/images/classic-project-img2.png')] bg-cover bg-no-repeat bg-center py-[50px]">
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

export default ProjectDetails;
