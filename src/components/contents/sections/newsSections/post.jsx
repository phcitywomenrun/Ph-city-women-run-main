import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Blogs from "../../APIs/newsBlog";

// import Link from "./link";

// import Button from "../Button";

function Post() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <>
      <section className="bg-white relative flex justify-center items-center w-full h-auto ">
        <div className="static flex flex-col justify-center items-center w-full max-w-[1280px] px-[15px] pb-[90px] pt-[50px] at500:px-[70px] my-0 mx-auto">
          <div className="flex gap-[40px] flex-col w-full">
            <div className="flex flex-col justify-start w-full">
              <h5 className="text-[#353F50] !font-bold !text-[24px] leading-[]">
                More Posts
              </h5>
              <p className="!font-Galano text-[#7E8EA2] text-[16px] leading-[21.6px]">
                Most popular stories on growth hacks. A must read!
              </p>
            </div>
           
            <Blogs />
          </div>
        </div>
      </section>
    </>
  );
}

export default Post;
