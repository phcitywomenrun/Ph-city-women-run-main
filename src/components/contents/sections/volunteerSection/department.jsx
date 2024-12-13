import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoChevronRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "../../link";
import LoadBlurHashImage from "../../../lazy/loadBlurHash";

function Department() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postLimit, setPostLimit] = useState();

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
    volunteerDepartments {
    id
    slug
    title
    subtext
    date1
    date2
   
    coverImage {
      url
    }
    content
  }
}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(hygraphEndpoint, { query });
        setData(response.data.data.volunteerDepartments);
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
      <p className="h-[20vh] flex justify-center items-center leading-tight text-[20px] text-white"></p>
    );
  if (error)
    return (
      <p className="h-[30vh] flex justify-center items-center leading-tight text-[20px] text-white">
        Let's get you back online
      </p>
    );

  return (
    <>
      <section className=" relative flex flex-col justify-center items-start  h-auto w-full ">
        <div className="static auto-container flex flex-col justify-center items-center w-full py-[70px] px-[15px] at500:px-[72px] my-0 mx-auto">
          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-[28px] gap-x-[16px] w-full">
            {data.slice(0, postLimit).map((department) => (
              <div
                key={department.id}
                className="relative bg-[#5C176F] flex gap-10 flex-col justify-start items-start px-[20px] sm:px-[20px] py-[20px] min-h-[295px] w-full rounded-[24px] overflow-hidden"
              >
                <div className=" absolute flex justify-start items-start bottom-[-4px]  w-full auto-container ">
                  <span className=" w-[200px] h-[367px] relative top-[-61px] left-[44px]  flex shape15 "></span>
                </div>
                <div className="relative py-[20px] flex justify-center items-center max-w-[120px] max-h-[120px]">
                  <LoadBlurHashImage
                    src={department.coverImage.url}
                    blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash if available
                    alt="icon"
                    className="w-full h-auto  object-cover mb-3"
                  />
                </div>
                <div className="relative flex gap-[20px]  justify-between items-end w-full  h-auto ">
                  <h4 className="text-white !font-[146] leading-[24px] sm:leading-[32px] sm:text-[22px] ">
                    {department.title}
                  </h4>

                  <Link to={`/departments/${department.slug}`}>
                    <div className="flex h-auto  justify-center items-center  ">
                      <GoChevronRight className="flex rounded-[100px] h-[40px] bg-white justify-center items-center w-[40px]  text-[#1F2126]  " />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Department;
