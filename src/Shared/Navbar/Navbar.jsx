import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import logo from "/images/header-logo.png";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { GoArrowRight } from "react-icons/go";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
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
          to: "/",
          label: "Main Demo",
          children: [
            { to: "/home-dark", label: "Dark Version" },
            { to: "/home-light", label: "Light Version" },
            { to: "/home-classic", label: "Classic Version" },
          ],
        },
        { to: "/home2", label: "University Demo" },
        { to: "/home3", label: "Kindergarten Demo" },
        { to: "/home4", label: "Islamic Education" },
        { to: "/home5", label: "Modern Online Learning" },
        { to: "/home6", label: "Training Center" },
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
        { to: "/events", label: "All Events" },
        { to: "/event_details", label: "Event Details" },
        { to: "/instructor", label: "Our Instructors" },
        { to: "/instructor_details", label: "Instructor Profile" },
        { to: "/shop", label: "Shop" },
        { to: "/shop_details", label: "Product Details" },
      ],
    },
    {
      label: "Services",
      links: [
        { to: "/course", label: "All Courses" },
        { to: "/course_details", label: "Course Details" },
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

  return (
    <div>
      <div className="flex justify-center mt-16 w-full">
        <header
          className={`absolute z-50 inline-block w-full max-w-[1720px] transition-all duration-500 bg-white rounded-[20px] ${
            isSticky
              ? "!fixed top-0 shadow-shades !w-[calc(100%-60px)] max-w-full rounded-t-none bg-SecondaryColor-0 lg:bg-white animate-headerSlideDown border-transparent"
              : ""
          }`}
        >
          <div className="px-2 sm:px-3 md:px-5 lg:px-2 xl:px-5 2xl:px-8 3xl:px-[50px] py-4 lg:py-0">
            <div className="flex items-center justify-between gap-5">
              <div className="">
                <Link to="/" title="Econet">
                  <img
                    src={logo}
                    draggable="false"
                    className="brightness-0 invert-[1] lg:brightness-100 lg:invert-0"
                  />
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:block 2xl:ml-24">
                <nav>
                  <ul className="flex gap-8 text-sm font-medium">
                    {menuItems.map((item, idx) => (
                      <li key={idx} className="relative z-10 group">
                        {item.links.length > 1 ? (
                          <>
                            <Link
                              to="#"
                              data-text={item.label}
                              className={`clip-hover inline-flex items-center gap-1.5 mx-1 my-[31px] font-Outfit font-medium capitalize text-lg transition-all duration-500 hover:text-PrimaryColor-0 relative z-10 overflow-hidden
                                ${
                                  isParentActive(item.links)
                                    ? "text-PrimaryColor-0"
                                    : "text-HeadingColor-0"
                                }`}
                            >
                              {item.label}
                              <FaChevronDown size={12} className="mt-[2px]" />
                            </Link>

                            <ul className="absolute z-50 -left-1 top-full origin-top w-64 bg-white text-HeadingColor-0 rounded-md border-t-[3px] border-PrimaryColor-0 shadow-cases scale-y-0 transition-all duration-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:scale-y-100">
                              {item.links.map((link, i) => (
                                <li
                                  key={i}
                                  className="relative z-10 group/submenu"
                                >
                                  <Link
                                    to={link.to}
                                    className={`block px-7 py-3 border-b border-SecondaryColor-0 border-opacity-10 font-Outfit font-medium transition-all duration-500 relative z-10 before:absolute before:left-0 before:top-auto before:bottom-0 before:w-full before:h-0 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 hover:before:h-full hover:bottom-auto hover:before:top-0 hover:text-white
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
                                    <ul className="absolute top-full left-full w-64 bg-white text-HeadingColor-0 rounded-md border-t-[3px] border-PrimaryColor-0 shadow-cases scale-y-0 opacity-0 invisible origin-top-left transition-all duration-500 group-hover/submenu:opacity-100 group-hover/submenu:visible group-hover/submenu:scale-y-100">
                                      {link.children.map((child, j) => (
                                        <li key={j}>
                                          <Link
                                            to={child.to}
                                            className={`block px-7 py-3 border-b border-SecondaryColor-0 border-opacity-10 font-Outfit font-medium transition-all duration-500 relative z-10 before:absolute before:left-0 before:top-auto before:bottom-0 before:w-full before:h-0 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 hover:before:h-full hover:bottom-auto hover:before:top-0 hover:text-white
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
                            className={`inline-flex items-center gap-1.5 mx-1 my-[31px] font-Outfit font-medium text-lg capitalize transition-all duration-500 hover:text-PrimaryColor-0 relative z-10 overflow-hidden ${
                              currentPath === item.links[0].to
                                ? "text-PrimaryColor-0"
                                : "text-HeadingColor-0"
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

              {/* Button + Hamburger */}
              <div>
                <div className="flex items-center gap-2 sm:gap-7 lg:gap-5 xl:gap-[34px]">
                  <div className="flex items-center gap-4">
                    <PrimaryButton
                      as="link"
                      href="/about"
                      className="!py-2.5 !px-7 bg-SecondaryColor-0"
                    >
                      Get a Quote <GoArrowRight size={22} />
                    </PrimaryButton>
                  </div>
                  <div
                    className="lg:hidden group size-8 md:size-[46px] bg-transparent border border-white border-opacity-10 rounded-full flex items-center justify-center cursor-pointer"
                    onClick={() => setMobileOpen(true)}
                  >
                    <button className="space-y-1 md:space-y-[5px] flex flex-col items-end text-right">
                      <span className="bg-SecondaryColor-0 w-4 md:w-[18px] h-0.5 rounded-xl block transition-all duration-500 group-hover:w-4 md:group-hover:w-6"></span>
                      <span className="bg-SecondaryColor-0 w-6 md:w-6 h-0.5 rounded-xl block"></span>
                      <span className="bg-SecondaryColor-0 w-4 md:w-[18px] h-0.5 rounded-xl block transition-all duration-500 group-hover:w-4 md:group-hover:w-6"></span>
                    </button>
                  </div>
                  <div
                    className="lg:hidden group size-8 md:size-[46px] bg-transparent border border-white border-opacity-10 rounded-full flex items-center justify-center cursor-pointer"
                    onClick={() => setMobileOpen(true)}
                  >
                    <button className="space-y-1 md:space-y-[5px] flex flex-col items-end text-right">
                      <span className="bg-SecondaryColor-0 w-4 md:w-[18px] h-0.5 rounded-xl block transition-all duration-500 group-hover:w-4 md:group-hover:w-6"></span>
                      <span className="bg-SecondaryColor-0 w-6 md:w-6 h-0.5 rounded-xl block"></span>
                      <span className="bg-SecondaryColor-0 w-4 md:w-[18px] h-0.5 rounded-xl block transition-all duration-500 group-hover:w-4 md:group-hover:w-6"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 right-0 h-full w-full sm:w-[350px] md:w-[380px] overflow-y-auto bg-SecondaryColor-0 shadow-lg transform transition-transform duration-300 z-50 ${
              mobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
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
                                      className={`w-full text-left block px-5 py-3 border-b border-white border-opacity-15" font-Outfit text-lg text-white transition-all duration-500 relative z-10 before:absolute before:left-0 before:top-auto before:bottom-0 before:w-full before:h-0 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 hover:before:h-full hover:bottom-auto hover:before:top-0 hover:text-white ${
                                        currentPath === link.to
                                          ? "before:h-full text-white border-none"
                                          : ""
                                      }`}
                                    >
                                      {link.label}
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
                                              className={`block py-2 pl-2 text-base text-white hover:text-PrimaryColor-0 transition-all duration-500 hover:pl-4 border-b border-white border-opacity-15`}
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
                                    className={`block px-5 py-2 border-b border-white border-opacity-15 font-Outfit text-lg text-white transition-all duration-500 relative z-10 before:absolute before:left-0 before:top-auto before:bottom-0 before:w-full before:h-0 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 hover:before:h-full hover:bottom-auto hover:before:top-0 hover:text-white ${
                                      currentPath === link.to
                                        ? "before:h-full text-white"
                                        : ""
                                    }`}
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
      </div>
    </div>
  );
};

export default Navbar;
