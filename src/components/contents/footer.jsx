import React from "react";
import { useEffect } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../navigation/logos/9ab71b9b81bed1d6a8cf79dfc1eb4cce.png";
import Link from "./link";
import AOS from "aos";
import "aos/dist/aos.css";
import "../contents/styles/_footer.css";

const currentYear = new Date().getFullYear();

function footer() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <footer
      id="down"
      className="relative flex flex-col justify-center items-center w-full h-auto !overflow-hidden"
    >
      <section className="bg-[#1F2126] relative flex flex-col justify-center items-center w-full ">
        <div className="static z-30 w-full flex flex-col justify-center items-center max-w-[1180px] py-[50px] px-[15px] at500:px-[64px] my-0 mx-auto ">
          <div className="flex flex-col justify-center items-center w-full ">
            <div className="flex flex-col justify-start items-start  w-full pb-[30px] ">
              <div className="flex flex-col justify-center items-start  w-full  cursor-pointer ">
                <a href="#">
                  <img
                    className="h-[64px] w-[289.98px] object-cover transition-all duration-300 ease-in-out"
                    src={logo}
                  />
                </a>
              </div>
            </div>
            <div className="w-full flex flex-col silver:flex-row gap-[48px] justify-between items-start  mb-[30px]">
              <div className="flex flex-col sm:flex-row items-start justify-between pt-[40px] w-full  gap-[32px]">
                <div className="flex flex-col at500:flex-row justify-end items-end w-full gap-[12px]">
                  <ul className=" flex  justify-start items-start w-full gap-[12px]">
                    <li data-aos="fade-up">
                      <Link to="/about">
                        <span className="font-[106] text-[16px] leading-[19.84px] text-[#FFFFFF] hover:text-[#5C176F]">
                          About
                        </span>
                      </Link>
                    </li>
                    <li data-aos="fade-up">
                      <Link to="/">
                        <span className="font-[106] text-[16px] leading-[19.84px] text-[#FFFFFF] hover:text-[#5C176F]">
                          Support
                        </span>
                      </Link>
                    </li>
                    <li data-aos="fade-up">
                      <Link to="/contact">
                        <span className="font-[106] text-[16px] leading-[19.84px] text-[#FFFFFF] hover:text-[#5C176F]">
                          Contact
                        </span>
                      </Link>
                    </li>
                    <li data-aos="fade-up">
                      <Link to="/">
                        <span className="font-[106] text-[16px] leading-[19.84px] text-[#FFFFFF] hover:text-[#5C176F]">
                          FAQs
                        </span>
                      </Link>
                    </li>
                  </ul>
                  <ul className=" flex  justify-start items-start w-full gap-[12px]">
                    <li data-aos="fade-up">
                      <Link to="/">
                        <span className="font-[106] text-[16px] leading-[19.84px] text-[#FFFFFF] hover:text-[#5C176F]">
                          Privacy Policy
                        </span>
                      </Link>
                    </li>
                    <li data-aos="fade-up">
                      <Link to="/teamsAndCondition">
                        <span className="font-[106] text-[16px] leading-[19.84px] text-[#FFFFFF] hover:text-[#5C176F]">
                          Legal Terms
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="flex sm:justify-end items-end w-full">
                  <ul className="flex gap-4">
                    <li data-aos="fade-up">
                      <a href="https://www.tiktok.com/@ph.city.women.run?_t=8qrotYxit9h&_r=1">
                        <FaTiktok
                          size={20}
                          className=" text-[#FFFFFF] hover:text-[#5C176F] transition-all duration-300 ease-in-out"
                        />
                      </a>
                    </li>
                    <li data-aos="fade-up">
                      <a href="https://x.com/phcitywomenrun?t=Ot9NLKru8NzQ6IT4v8raVA&s=08">
                        <FaXTwitter
                          size={20}
                          className=" text-[#FFFFFF] hover:text-[#5C176F] transition-all duration-300 ease-in-out"
                        />
                      </a>
                    </li>
                    <li data-aos="fade-up">
                      <a href="https://www.facebook.com/share/15admwWdT5/">
                        <FaFacebook
                          size={20}
                          className=" text-[#FFFFFF] hover:text-[#5C176F] transition-all duration-300 ease-in-out"
                        />
                      </a>
                    </li>
                    <li data-aos="fade-up">
                      <a href="https://youtube.com/@phcitywomenrun?si=zRET8Il3FEZ8l7XD">
                        <FaYoutube
                          size={20}
                          className=" text-[#FFFFFF] hover:text-[#5C176F] transition-all duration-300 ease-in-out"
                        />
                      </a>
                    </li>
                    <li data-aos="fade-up">
                      <a href="https://www.instagram.com/phcitywomenrun/profilecard/?igsh=MnFkZ3V1a2I0a3Ro">
                        <FaInstagram
                          size={20}
                          className=" text-[#FFFFFF] hover:text-[#5C176F] transition-all duration-300 ease-in-out"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!--hr line--> */}
            <hr className="h-[2px] w-full bg-[#111E2F]" />
            {/* <!--copyright--> */}
            <ul className="flex flex-col gap-[6px] justify-start items-start w-full h-auto my-[30px] ">
              <li className="flex w-full ">
                <p className="text-[#FFFFFF] leading-[17.36px] text-left text-[14px] !font-[126]">
                  © {currentYear} PH City Women Run. All rights reserved.
                </p>
              </li>
              <li className="flex w-full ">
                <p className="text-[#FFFFFF] leading-[17.36px] text-left text-[14px] !font-[126]">
                  PH City Women Run, the PH City Women Run logo, PHCWR, are
                  trademarks owned by Rapids Sports and Entertainment Limited
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className=" absolute flex justify-end items-end bottom-[-4px] w-full auto-container">
          <span className="flex shape11 relative right-[-17px] top-[158px] w-[200px] h-[367px] object-cover overflow-hidden"></span>
        </div>
        <div className=" absolute flex justify-start items-start bottom-[-4px]  w-full auto-container ">
          <span className=" w-[200px] h-[367px] relative left-[159px]  flex shape13 object-cover  overflow-hidden"></span>
        </div> */}
      </section>
    </footer>
  );
}

export default footer;
