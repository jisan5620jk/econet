import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaChevronDown,
  FaArrowUp,
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import logo from "/images/footer-logo.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import { IoIosSearch, IoMdPaperPlane } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
import { IoSearch } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { CgClose } from "react-icons/cg";

const Navbar9 = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = (label) => {
    setActiveMobileMenu((prev) => (prev === label ? null : label));
  };

  const [activeMobileSubMenu, setActiveMobileSubMenu] = useState(null);

  const menuItems = [
    {
      label: "Home",
      links: [
        {
          label: "Environment Demos",
          children: [
            { to: "/", label: "Environment Creative Version" },
            { to: "/home2", label: "Environment Creative Dark Version" },
            { to: "/home3", label: "Environment Classic Version" },
            { to: "/home4", label: "Environment Classic Dark Version" },
          ],
        },
        {
          label: "Solar Demos",
          children: [
            { to: "/home5", label: "Solar Creative Version" },
            { to: "/home6", label: "Solar Creative Dark Version" },
            { to: "/home7", label: "Solar Classic Version" },
            { to: "/home8", label: "Solar Classic Dark Version" },
          ],
        },
        {
          label: "Charity Demos",
          children: [
            { to: "/home9", label: "Charity Creative Version" },
            { to: "/home10", label: "Charity Creative Dark Version" },
            { to: "/home11", label: "Charity Classic Version" },
            { to: "/home12", label: "Charity Classic Dark Version" },
          ],
        },
      ],
    },
    {
      label: "About Us",
      links: [{ to: "/about", label: "Who We Are" }],
    },
    {
      label: "Pages",
      links: [
        { to: "/pricing", label: "Pricing Plans" },
        { to: "/team", label: "Team Member" },
        { to: "/donation", label: "Donation" },
        { to: "/testimonial", label: "Testimonial" },
        { to: "/project", label: "Project" },
        { to: "/project_details", label: "Project Details" },
        { to: "/appointment", label: "Appointment" },
      ],
    },
    {
      label: "Services",
      links: [
        { to: "/service", label: "Services" },
        { to: "/service_details", label: "Services Details" },
      ],
    },
    {
      label: "Blog",
      links: [
        { to: "/blog_left_sidebar", label: "Blog - Left Sidebar" },
        { to: "/blog_right_sidebar", label: "Blog - Right Sidebar" },
        { to: "/blog_no_sidebar", label: "Blog - No Sidebar" },
        { to: "/blog_details", label: "Blog Details" },
      ],
    },
    {
      label: "Contact Us",
      links: [{ to: "/contact", label: "Get in Touch" }],
    },
  ];

  const isParentActive = (links) =>
    links.some(
      (link) =>
        link.to === currentPath ||
        (link.children &&
          link.children.some((child) => child.to === currentPath))
    );

  //Menu Search
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchInputRef = useRef(null);

  const handleMenuSearchClick = () => setIsSearchActive(true);
  const handleCloseSearchClick = () => setIsSearchActive(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      if (searchInputRef.current) {
        searchInputRef.current.value = "";
      }
      setIsSearchActive(false); // close overlay after submission
    }, 2000);
  };

  //Menu Sidebar

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const popups = document.querySelectorAll(".popup-scroll-area");

    if (!popups.length) return;

    const stopScroll = (e) => e.stopPropagation();

    popups.forEach((popup) => {
      popup.addEventListener("wheel", stopScroll, { passive: false });
      popup.addEventListener("touchmove", stopScroll, { passive: false });
    });

    // Pause GSAP ScrollSmoother when popup is open
    if (window.ScrollSmoother?.get()) {
      const smoother = window.ScrollSmoother.get();
      isOpen ? smoother.paused(true) : smoother.paused(false);
    }

    return () => {
      popups.forEach((popup) => {
        popup.removeEventListener("wheel", stopScroll);
        popup.removeEventListener("touchmove", stopScroll);
      });
    };
  }, [isOpen]);

  return (
    <div>
      {/* Header Main */}
      <header
        className={`relative w-full z-50 transition-all duration-300 bg-SecondaryColor-0 ${
          isSticky
            ? "!fixed !top-0 shadow-shade animate-headerSlideDown border-transparent"
            : ""
        }`}
      >
        <div className="px-5 sm:px-8 lg:px-[50px] xl:px-8 2xl:px-[50px] py-4 lg:py-0">
          <div className="flex items-center justify-between gap-5">
            {/* Logo */}
            <div className="">
              <Link to="/" title="EducateX">
                <img src={logo} draggable="false" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block 2xl:ml-24">
              <nav>
                <ul className="flex gap-2 xl:gap-5 2xl:gap-8 text-sm font-medium">
                  {menuItems.map((item, idx) => (
                    <li key={idx} className="relative z-10 group">
                      {item.links.length > 1 ? (
                        <>
                          <Link
                            to="#"
                            data-text={item.label}
                            className={`clip-hover inline-flex items-center gap-1.5 2xl:mx-1 my-[36px] font-Outfit font-medium capitalize text-lg transition-all duration-500 hover:text-PrimaryColor-0 relative z-10 overflow-hidden
                                ${
                                  isParentActive(item.links)
                                    ? "text-PrimaryColor-0"
                                    : "text-white"
                                }`}
                          >
                            {item.label}
                            <FaChevronDown size={12} className="mt-[2px]" />
                          </Link>

                          <ul className="absolute z-50 -left-1 top-full origin-top w-64 bg-SecondaryColor-0 text-white rounded-md border-t-[3px] border-PrimaryColor-0 shadow-cases scale-y-0 transition-all duration-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:scale-y-100">
                            {item.links.map((link, i) => (
                              <li
                                key={i}
                                className="relative z-10 group/submenu"
                              >
                                <Link
                                  to={link.to}
                                  className={`block px-7 py-3 border-b border-white border-opacity-10 font-Outfit font-medium transition-all duration-500 relative z-10 before:absolute before:left-0 before:top-auto before:bottom-0 before:w-full before:h-0 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 hover:before:h-full hover:bottom-auto hover:before:top-0 hover:text-white
                                    ${
                                      currentPath === link.to
                                        ? "before:h-full text-white"
                                        : ""
                                    }`}
                                >
                                  {link.label}
                                </Link>

                                {/* Grandchild submenu */}
                                {link.children && (
                                  <ul className="absolute top-0 left-full w-64 bg-SecondaryColor-0 text-white rounded-md border-t-[3px] border-PrimaryColor-0 shadow-shade scale-y-0 opacity-0 invisible origin-top-left transition-all duration-500 group-hover/submenu:opacity-100 group-hover/submenu:visible group-hover/submenu:scale-y-100">
                                    {link.children.map((child, j) => (
                                      <li key={j}>
                                        <Link
                                          to={child.to}
                                          className={`block px-5 py-3 border-b border-white border-opacity-10 font-Outfit font-medium transition-all duration-500 relative z-10 before:absolute before:left-0 before:top-auto before:bottom-0 before:w-full before:h-0 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 hover:before:h-full hover:bottom-auto hover:before:top-0 hover:text-white
                                            ${
                                              currentPath === child.to
                                                ? "before:h-full text-white"
                                                : ""
                                            }`}
                                        >
                                          {child.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        // Only 1 link, render direct link with no submenu
                        <Link
                          to={item.links[0].to}
                          className={`inline-flex items-center gap-1.5 mx-1 my-[36px] font-Outfit font-medium text-lg capitalize transition-all duration-500 hover:text-PrimaryColor-0 relative z-10 overflow-hidden ${
                            currentPath === item.links[0].to
                              ? "text-PrimaryColor-0"
                              : "text-white"
                          }`}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div>
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-4 lg:gap-2 xl:gap-4 lg:hidden xl:flex">
                  <div
                    className="size-8 md:size-[46px] lg:size-9 xl:size-[46px] bg-transparent rounded-full bg-white bg-opacity-15 overflow-hidden text-white transition-all duration-500 flex items-center justify-center cursor-pointer relative z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:rotate-180 before:scale-0 before:-z-10 hover:before:scale-100 hover:before:rotate-0 hover:text-white hover:border-PrimaryColor-0"
                    onClick={handleMenuSearchClick}
                  >
                    <button className="menu-cart text-lg md:text-[22px] lg:text-lg xl:text-[22px]">
                      <IoIosSearch />
                    </button>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <Link
                    to={"/contact"}
                    className="inline-flex items-center gap-2 text-base uppercase text-white font-medium font-Outfit rounded-full bg-PrimaryColor-0 px-[30px] py-3 transition-all duration-500 relative z-10 overflow-hidden before:absolute before:h-full before:w-0 before:bg-PrimaryColor2-0 before:opacity-50 before:top-0 before:left-auto before:right-0 before:transition-all before:duration-500 before:-z-10 hover:before:left-0 hover:before:opacity-100 hover:before:w-full hover:right-auto"
                  >
                    Get a Quote
                    <HiArrowNarrowRight size={18} />
                  </Link>
                </div>
                <div
                  className="group hidden size-[46px] bg-PrimaryColor2-0 rounded-full 2xl:flex items-center justify-center cursor-pointer"
                  onClick={() => setIsOpen(true)}
                >
                  <button className="space-y-1">
                    <span className="bg-white w-5 h-0.5 rounded-xl block"></span>
                    <span className="bg-white w-5 h-0.5 rounded-xl block"></span>
                    <span className="bg-white w-3 h-0.5 rounded-xl block transition-all duration-500 group-hover:w-5"></span>
                  </button>
                </div>
                {/* Hamburger Icon */}

                <div
                  className="group lg:hidden size-8 md:size-[46px] bg-transparent border border-white border-opacity-10 rounded-full flex items-center justify-center cursor-pointer"
                  onClick={() => setMobileOpen(true)}
                >
                  <button className="space-y-[3px] md:space-y-1">
                    <span className="bg-white w-4 md:w-5 h-0.5 rounded-xl block"></span>
                    <span className="bg-white w-4 md:w-5 h-0.5 rounded-xl block"></span>
                    <span className="bg-white w-2 md:w-3 h-0.5 rounded-xl block transition-all duration-500 group-hover:w-4 md:group-hover:w-5"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`fixed top-0 right-0 h-full w-full sm:w-[350px] md:w-[380px] overflow-y-auto bg-SecondaryColor-0 shadow-lg transform transition-transform duration-300 z-50 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="popup-scroll-area">
            <div className="p-4 flex justify-between items-center border-b border-white border-opacity-15">
              <h2 className="font-Outfit text-2xl font-medium text-white">
                Menu
              </h2>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-2xl text-white transition-all duration-500 hover:rotate-180"
              >
                <CgClose />
              </button>
            </div>

            <ul className="p-4 mt-5">
              {menuItems.map((item, idx) => (
                <li key={idx}>
                  {item.links.length > 1 ? (
                    <>
                      <button
                        onClick={() => toggleMobileMenu(item.label)}
                        className={`w-full text-left inline-flex items-center justify-between py-3 ${
                          idx !== item.links.length - 1
                            ? "border-b border-white border-opacity-15"
                            : ""
                        } font-Outfit text-lg text-white capitalize transition-all duration-500 relative z-10 overflow-hidden group-hover:text-PrimaryColor-0 hover:pl-3`}
                      >
                        {item.label}
                        <FaChevronDown
                          className={`transition-transform duration-500 ${
                            activeMobileMenu === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          activeMobileMenu === item.label
                            ? "max-h-screen"
                            : "max-h-0"
                        }`}
                      >
                        <ul className="pl-3 mt-2 sm:text-2xl">
                          {item.links.map((link, i) => (
                            <li key={i}>
                              <div>
                                {link.children ? (
                                  <>
                                    <button
                                      onClick={() =>
                                        setActiveMobileSubMenu((prev) =>
                                          prev === link.label
                                            ? null
                                            : link.label
                                        )
                                      }
                                      className={`w-full text-left inline-flex items-center justify-between px-5 py-3 border-b border-white border-opacity-15 font-Outfit text-lg text-white transition-all duration-500 relative z-10 before:absolute before:left-0 before:bottom-0 before:w-full before:h-0 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 hover:before:h-full hover:before:top-0 hover:text-white ${
                                        currentPath === link.to
                                          ? "before:h-full text-white border-none"
                                          : ""
                                      }
                                                `}
                                    >
                                      {link.label}
                                      <FaChevronDown
                                        className={`transition-transform duration-500 ${
                                          activeMobileSubMenu === link.label
                                            ? "rotate-180"
                                            : ""
                                        }`}
                                      />
                                    </button>

                                    <div
                                      className={`transition-all duration-500 overflow-hidden ${
                                        activeMobileSubMenu === link.label
                                          ? "max-h-80"
                                          : "max-h-0"
                                      }`}
                                    >
                                      <ul className="ml-4">
                                        {link.children.map((child, j) => (
                                          <li key={j}>
                                            <Link
                                              to={child.to}
                                              onClick={() =>
                                                setMobileOpen(false)
                                              }
                                              className="block py-2 pl-2 text-base text-white hover:text-PrimaryColor-0 transition-all duration-500 hover:pl-4 border-b border-white border-opacity-15"
                                            >
                                              {child.label}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </>
                                ) : (
                                  <Link
                                    to={link.to}
                                    onClick={() => setMobileOpen(false)}
                                    className={`block px-5 py-2 border-b border-white border-opacity-15 font-Outfit text-lg text-white transition-all duration-500 relative z-10 before:absolute before:left-0 before:bottom-0 before:w-full before:h-0 before:transition-all before:duration-500 before:bg-PrimaryColor-0 before:-z-10 hover:before:h-full hover:before:top-0 hover:text-white ${
                                      currentPath === link.to
                                        ? "before:h-full text-white"
                                        : ""
                                    }
                                              `}
                                  >
                                    {link.label}
                                  </Link>
                                )}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    // Single link, no submenu
                    <Link
                      to={item.links[0].to}
                      onClick={() => setMobileOpen(false)}
                      className={`block w-full text-left py-2.5 ${
                        idx !== menuItems.length - 1
                          ? "border-b border-white border-opacity-15"
                          : ""
                      } font-Outfit text-lg text-white capitalize transition-all duration-500 relative z-10 hover:text-PrimaryColor-0 hover:pl-3 ${
                        currentPath === item.links[0].to
                          ? "text-PrimaryColor-0"
                          : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-500 cursor-[url('/images/cross.png'),_pointer] ${
            mobileOpen
              ? "opacity-100 visible left-0"
              : "opacity-0 invisible left-1/2"
          }`}
          onClick={() => setMobileOpen(false)}
        ></div>
      </header>
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-[99] h-screen w-full max-w-[400px] bg-SecondaryColor-0 shadow-[0_20px_50px_0_#04142466] transition-all duration-500 ${
          isOpen
            ? "translate-x-0 opacity-100 visible"
            : "translate-x-full opacity-0 invisible"
        }`}
      >
        <div className="popup-scroll-area relative h-full overflow-y-auto p-9 pr-4">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-7 right-7 h-10 w-10 bg-PrimaryColor-0 text-white flex items-center justify-center rounded-full"
          >
            <CgClose className="text-xl transition-all duration-500 hover:rotate-180" />
          </button>

          <div className="mb-6">
            <Link to="/">
              <img src={logo} alt="Logo" draggable="false" />
            </Link>
          </div>

          <p className="text-TextColor2-0 font-light text-[15px] font-NotoSans mb-5">
            Econet is a nonprofit advancing sustainability through energy,
            ecology, and education—empowering communities since 1998.
          </p>

          <div>
            <h5 className="text-white text-xl font-Outfit mb-5">
              What Services We Provide?
            </h5>
            <ul className="list-disc list-inside text-TextColor2-0 font-NotoSans font-medium space-y-2">
              {[
                "Solar & Wind Power",
                "Tree & Forest Care",
                "Recycling & Cleanups",
                "Eco-Friendly Buildings",
                "Smart Climate Tools",
                "Green Learning",
                "Nature Fix Projects",
                "Water Saving Projects",
                "Clean Air Actions",
                "Green Jobs Training",
              ].map((service, i) => (
                <li key={i}>
                  <Link to="/" className="hover:text-white transition-all">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 mb-12">
            <h5 className="text-white text-xl font-medium font-Outfit mb-6">
              Have Questions? Contact Our Team!
            </h5>
            <ul className="space-y-4 text-white text-sm font-Outfit">
              <li className="flex items-center">
                <MdLocationPin className="text-PrimaryColor-0 text-xl" />
                <h5 className="ml-1">Melbone st, Australia, Ny 12099</h5>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-PrimaryColor-0" />
                <a
                  href="mailto:info.econet@gmail.com"
                  title="info.econet@gmail.com"
                  className="ml-2 hover:text-PrimaryColor-0 transition"
                >
                  info.econet@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-PrimaryColor-0" />
                <a
                  href="tel:+48555223224"
                  title="+48 555 223 224"
                  className="ml-2 hover:text-PrimaryColor-0 transition"
                >
                  +48 555 223 224
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h4 className="text-white text-xl font-normal font-Outfit mb-6">
              Get Update
            </h4>
            <form className="relative">
              <input
                type="email"
                name="email"
                placeholder="Enter E-Mail"
                required
                className="w-full h-[60px] pl-5 pr-[80px] rounded-full bg-transparent border border-white/10 text-white placeholder:text-white/35 outline-none"
              />
              <button
                type="submit"
                className="absolute bottom-0 right-0 h-[60px] w-[60px] rounded-r-full bg-PrimaryColor-0 text-white text-xl flex items-center justify-center overflow-hidden"
              >
                <IoMdPaperPlane />
              </button>
            </form>
          </div>

          <ul className="flex items-center gap-3 mt-6">
            {[FaFacebookF, FaXTwitter, FaPinterestP, FaLinkedinIn].map(
              (Icon, i) => (
                <li key={i}>
                  <Link
                    to="/"
                    className="size-12 rounded-full bg-white bg-opacity-10 flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:rotate-180 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 hover:before:rotate-0"
                  >
                    <Icon />
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-500 cursor-[url("/images/cross.png"),_pointer] ${
          isOpen ? "opacity-100 visible left-0" : "opacity-0 invisible left-1/2"
        }`}
      ></div>
      {/* Search */}
      <div
        className={`fixed top-0 left-0 h-screen w-full z-[99999] backdrop-blur-sm bg-black/20 transition-all duration-[1500ms] ease-[cubic-bezier(0.86,0,0.07,1)] ${
          isSearchActive
            ? "translate-y-0 mt-0"
            : "-translate-y-full -mt-[540px]"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleCloseSearchClick}
          className="absolute top-10 right-10 w-10 h-10 rounded-full border-2 border-red-600 text-red-600 flex items-center justify-center text-[20px]"
        >
          <LiaTimesSolid />
        </button>

        {/* Arrow Button */}
        <button
          onClick={handleCloseSearchClick}
          className={`absolute left-0 right-0 mx-auto rounded-full bg-gradient-to-r from-PrimaryColor-0 to-PrimaryColor3-0 w-[70px] h-[70px] cursor-pointer border-4 border-t-white border-l-PrimaryColor2-0 border-b-white border-r-PrimaryColor2-0 shadow-md flex items-center justify-center transition-all duration-500 ease-in-out ${
            isSearchActive
              ? "visible opacity-100 top-[25%] delay-[1500ms]"
              : "invisible opacity-0 top-[75%] -mt-[200px]"
          }`}
        >
          <FaArrowUp className="text-white text-[30px]" />
        </button>

        {/* Search Form */}
        <form
          onSubmit={handleSubmit}
          className={`absolute max-w-[700px] top-1/2 left-[15px] right-[15px] mx-auto -mt-[35px] bg-transparent transition-all duration-300 ease-in-out ${
            isSearchActive ? "scale-x-100 delay-[1200ms]" : "scale-x-0"
          }`}
        >
          <div className="relative m-0 overflow-hidden rounded-md">
            <input
              type="search"
              name="search-field"
              placeholder="Search Here"
              required
              ref={searchInputRef}
              className="block w-full h-14 md:h-[70px] text-[18px] leading-[50px] px-[30px] py-[10px] text-black bg-white border-2 border-PrimaryColor-0 rounded-md font-Outfit appearance-none transition-all duration-500 ease-in-out focus:outline-none"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-PrimaryColor-0 h-full px-[25px] text-white text-2xl cursor-pointer border-none transition-all duration-500 ease-in-out"
            >
              {isSubmitting ? <span>Loading...</span> : <IoSearch />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Navbar9;
