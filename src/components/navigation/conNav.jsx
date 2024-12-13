import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Link from "../contents/link";
import "@fontsource/geist-sans";

const ConferenecNav = () => {
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isConferencePage = pathname === "/conference";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);

      if (window.scrollY > lastScrollY) {
        setIsScrollingUp(false); // Scrolling down
      } else {
        setIsScrollingUp(true); // Scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const currentPage = pathname === "/" ? "/" : pathname.substring(1);
    setActiveLink(currentPage);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-[156px] z-[99] bg-[#311338] flex justify-center items-center at500:h-[64px] w-full ${
        isScrollingUp
          ? "translate-y-0 transition-all duration-500 ease-out"
          : "-translate-y-full"
      }`}
    >
      <div className="relative flex justify-center items-center w-full 2xl:w-[1280px] px-[15px] py-[16px] at500:px-[72px] sm:px-[120px] mx-auto">
        <div className="relative w-full flex flex-col at500:flex-row justify-start items-start at500:space-x-4">
          <ul className="flex justify-start items-start space-x-4">
            <Link className="flex w-full" to="/conference">
              <li
                className={`relative flex gap-[10px] capitalize items-center text-[#FFFFFF] py-[10px] 
                `}
              >
                <span
                  className={` ${
                    activeLink === "conference"
                      ? "!font-[600] border-b-[4px] border-b-[#FEEBFD]"
                      : ""
                  }`}
                  onClick={() => setActiveLink("conference")}
                >
                  Conference
                </span>
              </li>
            </Link>
            <Link className="flex w-full" to="/speaker">
              <li
                className={`relative flex gap-[10px] capitalize items-center text-[#FFFFFF] py-[10px]`}
              >
                <span
                  className={` ${
                    activeLink === "speaker"
                      ? "!font-[600] border-b-[4px] border-b-[#FEEBFD]"
                      : ""
                  }`}
                  onClick={() => setActiveLink("speaker")}
                >
                  Speakers
                </span>
              </li>
            </Link>
          </ul>
          <ul className="flex justify-start items-start space-x-4">
            <Link className="flex w-full" to="/schedule">
              <li
                className={`relative flex gap-[10px] capitalize items-center text-[#FFFFFF] py-[10px] `}
              >
                <span
                  className={` ${
                    activeLink === "schedule"
                      ? "!font-[600] border-b-[4px] border-b-[#FEEBFD]"
                      : ""
                  }`}
                  onClick={() => setActiveLink("schedule")}
                >
                  Schedule
                </span>
              </li>
            </Link>
            <Link className="flex w-full" to="/partners">
              <li
                className={`relative flex gap-[10px] capitalize items-center text-[#FFFFFF] py-[10px]`}
               
              >
                <span
                  className={` ${
                    activeLink === "partners"
                      ? "!font-[600] border-b-[4px] border-b-[#FEEBFD]"
                      : ""
                  }`}
                  onClick={() => setActiveLink("partners")}
                >
                  Partners
                </span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ConferenecNav;
