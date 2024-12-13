import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa";
import image from "../../image/homeImg/960090c547af153fd56f4347f0a31e30.jpeg";
import shoe from "../../image/homeImg/f9dfffd71ec559f38877514d9e647349.png";
import logo2 from "../../image/logo/TRADEMARKED PH CITY WOMEN PNG 1 3.png";
// import shape1 from "../../image/shapes/Frame 1686560676.png";
import shadowbackground from "../../image/homeImg/PH CITY WOMEN RUN.png";
import LoadBlurHashImage from "../../../lazy/loadBlurHash";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "../../link";
import Gallery from "../../../page/gallery";

function Photos() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postLimit, setPostLimit] = useState(6);

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
    galleries {
    id
    slug
    title
    date
    month
    backgroundText
    coverImage {
      url
    }
    shoe {
      url
    }
    logo {
      url
    }
   
  }
  }`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(hygraphEndpoint, {
          query: query,
        });
        setData(response.data.data.galleries);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>loading</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <>
      <section className="relative pt-[250px] bg-white flex  justify-center items-center w-full h-auto  overflow-hidden">
        {data.slice(0, postLimit).map((gallery) => (
          <div
            key={gallery.id}
            className="relative gradient-border1 flex flex-col justify-center items-center w-full "
          >
            <div className="absolute right-0 opacity-[34%] z-0 text-center text-white text-[200px] leading-[224px] font-[176] w-[2030px]">
              {gallery.backgroundText}
            </div>
            <div className="static  gap-[40px] flex flex-col justify-center items-center w-full  px-[15px] py-[50px] at500:px-[72px] my-0 mx-auto ">
              <div className="  flex flex-col-reverse at500:flex-row justify-center items-center w-full">
                <div className=" relative bottom-[-71px] flex flex-col gap-1  justify-center items-center">
                  <img
                    className="h-auto w-[110.84px]"
                    src={gallery.logo.url}
                    alt=""
                  />
                  <img
                    className="   object-contain h-[159px] w-[314px]"
                    src={gallery.shoe.url}
                    alt=""
                  />
                </div>
                <div className=" flex flex-col justify-center items-start gap-2">
                  <h4 className="font-bold text-white text-[32px] leading-[40px]">
                    {gallery.title}
                  </h4>
                  <span className="text-white"> {gallery.month}</span>
                </div>
                <span className=" relative bottom-9 text-white">
                  {gallery.date}
                </span>
                <div className="flex z-30 overflow-hidden h-[351px]  w-[308px]">
                  <img
                    className="h-[500px] relative top-[-45px]  w-[208px] object-cover"
                    src={gallery.coverImage.url}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end items-end w-full  rounded-tl-[16px]">
              <Link className="flex w-full " to={`/photos/${gallery.slug}`}>
                <div className="relative group flex gap-[10px] capitalize items-center py-[16px] px-[20px] bg-white justify-start w-full at500:w-[201px] rounded-tl-[16px]">
                  <span className=" text-[#121F30] font-semibold text-[14px] leading-[20px]  group-hover:text-[#8D12AB]">
                    View Gallery
                  </span>
                  <FaArrowRight className=" relative top-0 text-[#121F30] group-hover:text-[#8D12AB] w-[20px]" />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Photos;
