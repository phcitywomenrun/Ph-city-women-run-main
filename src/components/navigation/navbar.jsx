import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import logo1 from "./logos/TRADEMARKED PH CITY WOMEN PNG 1 3.png";
import logo2 from "./logos/156a5363dc0856d3728fb5e10c7538f4.png";
import { Link } from "react-router-dom";
import "@fontsource/geist-sans";
import ButtoncountDown from "./countdown/countprop";

const Navbar = () => {
  const { pathname } = useLocation();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(pathname);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isHomePage = pathname === "/";
  const isTheRunPage = pathname === "/about";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
      setIsScrollingUp(window.scrollY <= lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    // Update active link on pathname change
    setActiveLink(pathname);
  }, [pathname]);

  const openMenu = () => setToggle(true);
  const closeMenu = () => setToggle(false);

  return (
    <nav className="fixed top-0 z-[999] flex flex-col justify-center items-center  w-full  overflow-hidden ">
      <div className="bg-[#311338] flex justify-center items-center sm:h-[54px] w-full">
        <div className="relative flex justify-center items-center w-full max-w-[1580px] px-[15px] py-[16px] at500:px-[40px] md:px-[72px] mx-auto">
          <div className="relative w-full flex flex-col sm:flex-row justify-between items-start sm:space-x-4">
            <ul className="flex flex-col-reverse smipx:flex-row justify-start items-start smipx:space-x-4 mb-2 sm:mb-0">
              <div className="flex justify-start items-start space-x-4">
                <li>
                  <a href="https://www.facebook.com/share/15admwWdT5/">
                    <FaFacebook
                      size={19}
                      className=" text-[#FFFFFF] hover:text-[#ED3237] transition-all duration-300 ease-in-out"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/phcitywomenrun/profilecard/?igsh=MnFkZ3V1a2I0a3Ro">
                    <FaInstagram
                      size={19}
                      className=" text-[#FFFFFF] hover:text-[#ED3237] transition-all duration-300 ease-in-out"
                    />
                  </a>
                </li>
              </div>
              <li>
                <a href="tel:+2349043299793">
                  <span className="text-[#EDF5FD] text-[16px] leading-[24px] font-[126]">
                    + 234-904-329-9793
                  </span>
                </a>
              </li>
            </ul>
            <ul className="flex gap-4 flex-row-reverse sm:flex-row justify-start items-start ">
              <li>
                <a href="mailto:phcitywomenrun@gmail.com">
                  <span className="text-[#EDF5FD] text-[16px] leading-[24px] font-[126]">
                    phcitywomenrun@gmail.com
                  </span>
                </a>
              </li>
              <li className="flex flex-col smipx:flex-row justify-start items-start smipx:space-x-4">
                <div>
                  <a href="https://www.tiktok.com/@ph.city.women.run?_t=8qrotYxit9h&_r=1">
                    <FaTiktok
                      size={19}
                      className=" text-[#FFFFFF] hover:text-[#ED3237] transition-all duration-300 ease-in-out"
                    />
                  </a>
                </div>
                <div>
                  <a href="https://x.com/phcitywomenrun?t=Ot9NLKru8NzQ6IT4v8raVA&s=08">
                    <FaXTwitter
                      size={19}
                      className=" text-[#FFFFFF] hover:text-[#ED3237] transition-all duration-300 ease-in-out"
                    />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`flex justify-center items-center sm:h-[102px] w-full  
        ${
          isHomePage || isTheRunPage
            ? scrolled
              ? "bg-white"
              : "bg-navColor"
            : "bg-[#FFFFFF]"
        } 
      `}
      >
        <div className="static flex justify-center items-center w-full max-w-[1580px] px-[15px] py-[16px] at500:px-[40px] md:px-[72px] mx-auto">
          <div className="relative w-full flex md:flex-row justify-between items-center">
            <div className="flex items-start">
              <Link to="/">
                <img
                  src={
                    isHomePage || isTheRunPage
                      ? scrolled
                        ? logo2
                        : logo1
                      : logo2
                  }
                  alt="logo"
                  className="h-auto z-[999] w-[100.2px] pr-2 border-r-[3px] border-r-[#E2E2E24A] object-contain"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden silver:flex justify-center items-center space-x-4">
              <Link className="" to="/" onClick={() => setActiveLink("/")}>
                <li
                  onClick={closeMenu}
                  className="py-[10px] px-[10px] capitalize w-full"
                >
                  <p
                    className={` leading-[21.6px] text-[16px]  ${
                      activeLink === "/" ? "!font-[800]" : ""
                    } ${
                      isHomePage || isTheRunPage
                        ? scrolled
                          ? "text-[#111E2F]"
                          : "text-[#FFFFFF]"
                        : "text-[#111E2F]"
                    }`}
                  >
                    home
                  </p>
                </li>
              </Link>
              <Link
                className=""
                to="/about"
                onClick={() => setActiveLink("/about")}
              >
                <li
                  onClick={closeMenu}
                  className="py-[10px] px-[10px] capitalize w-full"
                >
                  <p
                    className={` leading-[21.6px] text-[16px]  ${
                      activeLink === "/about" ? "!font-[800]" : ""
                    } ${
                      isHomePage || isTheRunPage
                        ? scrolled
                          ? "text-[#111E2F]"
                          : "text-[#FFFFFF]"
                        : "text-[#111E2F]"
                    }`}
                  >
                    the run
                  </p>
                </li>
              </Link>
              <Link className="" to="/conference">
                <li
                  onClick={() => setActiveLink("conference")}
                  className="py-[10px] px-[10px] capitalize w-full"
                >
                  <p
                    className={` leading-[21.6px] text-[16px]  ${
                      activeLink === "/conference" ? "!font-[800]" : ""
                    } ${
                      isHomePage || isTheRunPage
                        ? scrolled
                          ? "text-[#111E2F]"
                          : "text-[#FFFFFF]"
                        : "text-[#111E2F]"
                    }`}
                  >
                    Conference
                  </p>
                </li>
              </Link>
              <Link
                className=""
                to="/news"
                onClick={() => setActiveLink("news")}
              >
                <li
                  onClick={closeMenu}
                  className="py-[10px] px-[10px] capitalize w-full"
                >
                  <p
                    className={` leading-[21.6px] text-[16px]  ${
                      activeLink === "/news" ? "!font-[800]" : ""
                    } ${
                      isHomePage || isTheRunPage
                        ? scrolled
                          ? "text-[#111E2F]"
                          : "text-[#FFFFFF]"
                        : "text-[#111E2F]"
                    }`}
                  >
                    News
                  </p>
                </li>
              </Link>
              <Link
                className=""
                to="/post-Events"
                onClick={() => setActiveLink("post-Events")}
              >
                <li
                  onClick={closeMenu}
                  className="py-[10px] px-[10px] capitalize w-full"
                >
                  <p
                    className={` leading-[21.6px] text-[16px]  ${
                      activeLink === "/post-Events" ? "!font-[800]" : ""
                    } ${
                      isHomePage || isTheRunPage
                        ? scrolled
                          ? "text-[#111E2F]"
                          : "text-[#FFFFFF]"
                        : "text-[#111E2F]"
                    }`}
                  >
                    Post Event
                  </p>
                </li>
              </Link>
              <Link
                className=""
                to="/volunteer"
                onClick={() => setActiveLink("volunteer")}
              >
                <li
                  onClick={closeMenu}
                  className="py-[10px] px-[10px] capitalize w-full"
                >
                  <p
                    className={` leading-[21.6px] text-[16px]  ${
                      activeLink === "/volunteer" ? "!font-[800]" : ""
                    } ${
                      isHomePage || isTheRunPage
                        ? scrolled
                          ? "text-[#111E2F]"
                          : "text-[#FFFFFF]"
                        : "text-[#111E2F]"
                    }`}
                  >
                    Volunteer
                  </p>
                </li>
              </Link>

              <li className="text-left py-[10px] w-[159px] pl-[18px]">
                <ButtoncountDown
                  size="medium"
                  className={`flex justify-start border-[1px] font-Galano border-solid capitalize ${
                    isHomePage || isTheRunPage
                      ? scrolled
                        ? "bg-[#8D12AB] text-[#FFFFFF]"
                        : "bg-white text-[#320101]"
                      : "bg-[#8D12AB] text-[#FFFFFF]"
                  }`}
                  buttonText="Register"
                />
              </li>
            </ul>

            {/* Mobile Menu Toggle */}
            <div className="flex gap-[10px] justify-center items-center silver:hidden cursor-pointer z-[99]">
              <HiMenuAlt3
                onClick={openMenu}
                size={30}
                className={`${
                  isHomePage || isTheRunPage
                    ? scrolled
                      ? "text-[#8D12AB]"
                      : "text-white"
                    : "text-[#8D12AB]"
                }  `}
              />
            </div>

            {/* Mobile Menu */}
            {toggle && (
              <div
                className={`mobile-menu  silver:hidden fixed top-0 left-0 flex flex-col items-start justify-start h-screen bg-[#000000dc]  text-white  w-full  transition-transform transform ${
                  toggle ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <div className="flex gap-10 flex-col justify-center items-start w-full h-screen bg-black max-w-[300px] ">
                  <div className="flex justify-between items-end w-full  px-[20px]">
                    <Link to="/">
                      <img
                        src={logo1}
                        alt="logo"
                        className="h-auto z-[999] w-[100.2px] pr-2 border-r-[3px] border-r-[#E2E2E24A] object-contain"
                      />
                    </Link>
                    <AiOutlineClose
                      onClick={closeMenu}
                      size={20}
                      className="text-white cursor-pointer"
                    />
                  </div>
                  <ul className="flex gap-2 flex-col items-start justify-center text-lg w-full pl-[20px]">
                    <li className="w-full">
                      <Link
                        className="!flex !w-full"
                        to="/"
                        onClick={() => setActiveLink("/")}
                      >
                        <div
                          onClick={closeMenu}
                          className={`flex justify-start items-start w-full py-[8px]  border-soild 
                          ${
                            activeLink === "/"
                              ? " border-r-[4px] border-solid border-r-[#8D12AB]"
                              : ""
                          }`}
                        >
                          <span
                            className={`capitalize text-gray-500
                          ${
                            activeLink === "/"
                              ? "!font-bold !text-[#FFFFFF]  "
                              : ""
                          }`}
                          >
                            home
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li className="w-full">
                      <Link
                        className="!flex !w-full"
                        to="/about"
                        onClick={() => setActiveLink("about")}
                      >
                        <div
                          onClick={closeMenu}
                          className={`flex justify-start items-start w-full py-[8px]  
                          ${
                            activeLink === "/about"
                              ? " border-r-[4px] border-solid border-r-[#8D12AB]"
                              : ""
                          }`}
                        >
                          <span
                            className={`capitalize text-gray-500
                          ${
                            activeLink === "/about"
                              ? "!font-bold !text-[#FFFFFF]  "
                              : ""
                          }`}
                          >
                            the run
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li className="w-full">
                      <Link
                        className="!flex !w-full"
                        to="/Conference"
                        onClick={() => setActiveLink("Conference")}
                      >
                        <div
                          onClick={closeMenu}
                          className={`flex justify-start items-start w-full py-[8px] "
                          ${
                            activeLink === "/Conference"
                              ? "border-r-[4px] border-solid border-r-[#8D12AB]"
                              : ""
                          }`}
                        >
                          <span
                            className={`capitalize text-gray-500
                          ${
                            activeLink === "/Conference"
                              ? "!font-bold !text-[#FFFFFF]  "
                              : ""
                          }`}
                          >
                            Conference
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li className="w-full">
                      <Link
                        className="!flex !w-full"
                        to="/news"
                        onClick={() => setActiveLink("/news")}
                      >
                        <div
                          onClick={closeMenu}
                          className={`flex justify-start items-start w-full py-[8px]  
                          ${
                            activeLink === "/news"
                              ? "border-r-[4px] border-solid border-r-[#8D12AB]"
                              : ""
                          }`}
                        >
                          <span
                            className={`capitalize text-gray-500
                          ${
                            activeLink === "/news"
                              ? "!font-bold !text-[#FFFFFF]  "
                              : ""
                          }`}
                          >
                            news
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li className="w-full">
                      <Link
                        className="!flex !w-full"
                        to="/post-Events"
                        onClick={() => setActiveLink("post-Events")}
                      >
                        <div
                          onClick={closeMenu}
                          className={`flex justify-start items-start w-full py-[8px] 
                          ${
                            activeLink === "/post-Events"
                              ? " border-r-[4px] border-solid border-r-[#8D12AB]"
                              : ""
                          }`}
                        >
                          <span
                            className={`capitalize text-gray-500
                          ${
                            activeLink === "/post-Events"
                              ? "!font-bold !text-[#FFFFFF]  "
                              : ""
                          }`}
                          >
                            post Events
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li className="w-full">
                      <Link
                        className="!flex !w-full"
                        to="/volunteer"
                        onClick={() => setActiveLink("volunteer")}
                      >
                        <div
                          onClick={closeMenu}
                          className={`flex justify-start items-start w-full py-[8px] border-soild
                          ${
                            activeLink === "/volunteer"
                              ? " border-r-[4px] border-solid border-r-[#8D12AB]"
                              : ""
                          }`}
                        >
                          <span
                            className={`capitalize text-gray-500
                          ${
                            activeLink === "/volunteer"
                              ? "!font-bold !text-[#FFFFFF]  "
                              : ""
                          }`}
                          >
                            volunteer
                          </span>
                        </div>
                      </Link>
                    </li>

                    <li className="text-left w-full">
                      <div className="flex justify-start w-full pr-[20px] ">
                        <ButtoncountDown
                          size="medium"
                          className="mt-8 bg-[#8D12AB] text-[#FFFFFF] capitalize"
                          buttonText="Register"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
