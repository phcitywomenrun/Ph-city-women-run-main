import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoCallSharp } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import shape1 from "../../image/shapes/Frame 1686560676.png";
import shadowbackground from "../../image/homeImg/b1848d86e95001e46a7bb77f22602c45.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import LoadBlurHashImage from "../../../lazy/loadBlurHash";

import Button from "../../Button";

function ContactInFo() {
  //   const [data, setData] = useState(null);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  //   const hygraphEndpoint =
  //     "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  //   const query = `{
  //      volunteer(where: {id: "cm3f98kkw16b107o61mgn19kg"}) {
  //     title
  //     subtitle
  //     subtext
  //     schedule
  //     slideText
  //     coverImage {
  //       url
  //     }
  //   }
  // }`;

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.post(hygraphEndpoint, { query });
  //         setData(response.data.data.volunteer);
  //         setLoading(false);
  //       } catch (err) {
  //         setError(err);
  //         setLoading(false);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  //   useEffect(() => {
  //     AOS.init({ duration: 2000, once: true });
  //   }, []);

  //   if (loading)
  //     return (
  //       <p className="h-[20vh] flex justify-center items-center leading-tight text-[20px] text-white">
  //         Loading...
  //       </p>
  //     );
  //   if (error)
  //     return (
  //       <p className="h-[30vh] flex justify-center items-center leading-tight text-[20px] text-white">
  //         Let's get you back online
  //       </p>
  //     );

  return (
    <>
      <section className="bg-white  pt-[150px]  relative flex flex-col justify-center items-center  w-full">
        <div className="static z-30 auto-container flex flex-col justify-center items-center w-full px-[15px] py-[70px] at500:px-[202px] my-0 mx-auto">
          <div className="relative flex gap-[20px] flex-col justify-center items-center w-full">
            <div className=" flex flex-col md:flex-row justify-start items-start gap-[10px] sm:gap-[22px] w-full">
              <ul className="flex max-w-[259px] gap-1 pb-[50px] flex-col justify-start items-start w-full border-b-[1px] border-solid border-b-[#353F50]">
                <span className="text-[#1F2126] font-[176] text-[20px] leading-[32px]  z-10">
                  Contact
                </span>
                <span className="text-[#4E5A6C] max-w-[456px] z-10">
                  Write to us
                </span>
                <a href="mailto:phcitywomenrun@gmail.com">
                  <li className="flex gap-2 justify-center items-center">
                    <MdMailOutline className="text-[#353F50]" />
                    <p className="text-[#4E5A6C] text-[14px] leading-[20px]">
                      phcitywomenrun@gmail.com
                    </p>
                  </li>
                </a>
              </ul>
              <ul className="flex max-w-[259px] gap-1 pb-[50px] flex-col justify-start items-start w-full border-b-[1px] border-solid border-b-[#353F50]">
                <span className="text-[#1F2126] font-[176] text-[20px] leading-[32px]  z-10">
                  Office
                </span>
                <span className="text-[#4E5A6C] max-w-[456px] z-10">
                  Visit Us
                </span>
                <li className="flex gap-2 justify-center items-center">
                  <MdMailOutline className="text-[#353F50]" />
                  <p className="text-[#4E5A6C] text-[14px] leading-[20px]">
                    phcitywomenrun@gmail.com
                  </p>
                </li>
              </ul>
            </div>
            <div className=" flex flex-col md:flex-row justify-start items-start gap-[10px] sm:gap-[22px] w-full">
              <ul className="flex max-w-[259px] gap-1 pb-[50px] flex-col justify-start items-start w-full ">
                <span className="text-[#4E5A6C] max-w-[456px] z-10">
                  Call us
                </span>
                <a href="tel: +2349043299793">
                  <li className="flex gap-2 justify-center items-center">
                    <IoCallSharp className="text-[#353F50]" />
                    <p className="text-[#4E5A6C] text-[14px] leading-[20px]">
                      + 234-904-329-9793
                    </p>
                  </li>
                </a>
              </ul>
              <ul className="flex max-w-[259px] gap-1 pb-[50px] flex-col justify-start items-start w-full ">
                <span className="text-[#4E5A6C] max-w-[456px] z-10">
                  Call us
                </span>
                <a href="tel: +2349043299793">
                  <li className="flex gap-2 justify-center items-center">
                    <IoCallSharp className="text-[#353F50]" />
                    <p className="text-[#4E5A6C] text-[14px] leading-[20px]">
                      + 234-904-329-9793
                    </p>
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <div className="h-[320px] absolute bottom-[81px] z-0">
            <img
              className=" w-full object-cover z-0"
              src={shape1}
              alt="background"
            />
          </div>
          <div className="h-[320px] absolute bottom-[-48px] left-[-42px] z-0">
            <img
              className=" w-full object-cover z-0"
              src={shape1}
              alt="background"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactInFo;
