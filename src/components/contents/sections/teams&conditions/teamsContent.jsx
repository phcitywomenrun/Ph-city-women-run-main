import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPaw } from "react-icons/fa";
import shape1 from "../../image/shapes/Frame 1686560676.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./team.css"

import Button from "../../Button";

function LegalTeamsContent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
    termsAndCondition(where: {id: "cm3irug9h020607o7btmxlvg6"}) {
      nameOfPage
      subtext1
      subtext2
      subtext3
      subtext4
      subtext5
      table
      title1
      title2
      title3
      title4
      title5
      listOfText1
      listOfText2
      listOfText3
      listOfText4
      listOfText5
    }
  }`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(hygraphEndpoint, { query });
        setData(response.data.data.termsAndCondition);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  

  if (loading)
    return (
      <p className="h-[20vh] w-full bg-slate-500 flex justify-center items-center leading-tight text-[20px] text-white">
        Loading...
      </p>
    );
  if (error)
    return (
      <p className="h-[30vh] flex justify-center items-center leading-tight text-[20px] text-white">
        Let's get you back online
      </p>
        );
    
    const scrollToSection = (id) => {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        const firstTitle = targetElement.querySelector("p"); // Assuming the title is an <h2> tag
        if (firstTitle) {
          const offsetTop = firstTitle.offsetTop;
          window.scrollTo({
            top: offsetTop - -20, // Adjust the offset as needed (e.g., for fixed headers)
            behavior: "smooth",
          });
        }
      }
    };


  return (
    <>
      <section className="bg-white sidebar-container flex flex-col justify-center items-center w-full overflow-hidden">
        <div className="static z-30 auto-container flex flex-col justify-center items-center w-full px-[15px] py-[70px] at500:px-[70px] my-0 mx-auto">
          <div className="relative flex flex-col-reverse gap-[50px] silver:flex-row justify-between items-start w-full h-auto">
            <div className="sidebar  relative flex justify-center items-center w-full ">
              <div className="flex gap-4 flex-col justify-center items-start">
                <h2 className="text-[#484848] sm:text-[24px] sm:leading-[32.4px]">
                  {data.table}
                </h2>

                <ul className="flex gap-2 flex-col justify-center items-start">
                  <li onClick={() => scrollToSection("general-Terms")}>
                    <span className="flex group gap-2 justify-center items-center cursor-pointer">
                      <FaPaw className="text-[#484848] group-hover:text-[#8D12AB]" />
                      <p className="text-[#484848] group-hover:text-[#8D12AB] text-[16px] leading-[28px]">
                        {data.listOfText1}
                      </p>
                    </span>
                  </li>
                  <li onClick={() => scrollToSection("cookies")}>
                    <span className="flex group gap-2 justify-center items-center cursor-pointer">
                      <FaPaw className="text-[#484848] group-hover:text-[#8D12AB]" />
                      <p className="text-[#484848] group-hover:text-[#8D12AB] text-[16px] leading-[28px]">
                        {data.listOfText2}
                      </p>
                    </span>
                  </li>
                  <li onClick={() => scrollToSection("license")}>
                    <span className="flex group gap-2 justify-center items-center cursor-pointer">
                      <FaPaw className="text-[#484848] group-hover:text-[#8D12AB]" />
                      <p className="text-[#484848] group-hover:text-[#8D12AB] text-[16px] leading-[28px]">
                        {data.listOfText3}
                      </p>
                    </span>
                  </li>
                  <li onClick={() => scrollToSection("liabilities")}>
                    <span className="flex group gap-2 justify-center items-center cursor-pointer">
                      <FaPaw className="text-[#484848] group-hover:text-[#8D12AB]" />
                      <p className="text-[#484848] group-hover:text-[#8D12AB] text-[16px] leading-[28px]">
                        {data.listOfText4}
                      </p>
                    </span>
                  </li>
                  <li onClick={() => scrollToSection("copyrights")}>
                    <span className="flex group gap-2 justify-center items-center cursor-pointer">
                      <FaPaw className="text-[#484848] group-hover:text-[#8D12AB]" />
                      <p className="text-[#484848] group-hover:text-[#8D12AB] text-[16px] leading-[28px]">
                        {data.listOfText5}
                      </p>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative  flex flex-col gap-10 justify-center items-center w-full max-w-[765px] ">
              <div
                id="general-Terms"
                className="flex flex-col gap-[16px] justify-center items-start"
              >
                <h2 className="text-[#353F50] !font-bold sm:text-[32px] sm:leading-[32px]">
                  {data.title1}
                </h2>
                <p className="text-[#353F50] sm:text-[16px] sm:leading-[28px]">
                  {data.subtext1}
                </p>
              </div>
              <div
                id="cookies"
                className="flex flex-col gap-[16px] justify-center items-start"
              >
                <h2 className="text-[#353F50] !font-bold sm:text-[32px] sm:leading-[32px]">
                  {data.title2}
                </h2>
                <p className="text-[#353F50] sm:text-[16px] sm:leading-[28px]">
                  {data.subtext2}
                </p>
              </div>
              <div
                id="license"
                className="flex flex-col gap-[16px] justify-center items-start"
              >
                <h2 className="text-[#353F50] !font-bold sm:text-[32px] sm:leading-[32px]">
                  {data.title3}
                </h2>
                <p className="text-[#353F50] sm:text-[16px] sm:leading-[28px]">
                  {data.subtext3}
                </p>
              </div>
              <div
                id="liabilities"
                className="flex flex-col gap-[16px] justify-center items-start"
              >
                <h2 className="text-[#353F50] !font-bold sm:text-[32px] sm:leading-[32px]">
                  {data.title4}
                </h2>
                <p className="text-[#353F50] sm:text-[16px] sm:leading-[28px]">
                  {data.subtext4}
                </p>
              </div>
              <div
                id="copyrights"
                className="flex flex-col gap-[16px] justify-center items-start"
              >
                <h2 className="text-[#353F50] !font-bold sm:text-[32px] sm:leading-[32px]">
                  {data.title5}
                </h2>
                <p className="text-[#353F50] sm:text-[16px] sm:leading-[28px]">
                  {data.subtext5}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LegalTeamsContent;

