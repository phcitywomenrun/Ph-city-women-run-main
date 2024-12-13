import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import copyLinkImg from "../image/icons/ic_round-insert-link.png";
import shareLink from "../image/icons/Group.png";
import LatestBlogs from "./latestBlog";
import BackNav from "../../navigation/backNav";
import Error from "../../errorMessage/error";
import LatestCommunityEvents from "./latestCommunityEvents";

const BlogPostDetails = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const [data, setData] = useState(null); // Store either post or event data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataType, setDataType] = useState(""); // Track if it's a post or event
  const [copyMessage, setCopyMessage] = useState("");
  const [shareMessage, setShareMessage] = useState("");

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `
    query GetDataBySlug($slug: String!) {
      post(where: { slug: $slug }) {
        id
        title
        date
        excerpt
        content {
          html
        }
        coverImage {
          url
        }
      }
      event(where: { slug: $slug }) {
        id
        title
        date
        excerpt
        content {
          html
        }
        coverImage {
          url
        }
      }
    }
  `;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(hygraphEndpoint, {
          query,
          variables: { slug },
        });

        const { post, event } = response.data.data;

        if (post) {
          setData(post);
          setDataType("post");
        } else if (event) {
          setData(event);
          setDataType("event");
        } else {
          throw new Error("No data found");
        }

        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err.response?.data || err);
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (error) return <Error/>;

  const handleCopyLink = () => {
    const link = window.location.href;
    navigator.clipboard.writeText(link).then(() => {
      setCopyMessage("Link copied");
      setTimeout(() => setCopyMessage(""), 2000);
    });
  };

  const handleShareLink = () => {
    const pageURL = window.location.href;
    const pageTitle = data.title; // Use the data title for sharing

    if (navigator.share) {
      navigator
        .share({
          title: pageTitle,
          url: pageURL,
        })
        .then(() => setShareMessage("Sharing successful"))
        .catch(() => setShareMessage("Failed to share link"));
    } else {
      setShareMessage("Sharing not supported on this device");
    }

    setTimeout(() => setShareMessage(""), 2000);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    const getDaySuffix = (day) => {
      if (day > 3 && day < 21) return "th";
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${day}${getDaySuffix(day)} ${month} ${year}`;
  };

  // useEffect(() => {
  //   AOS.init({ duration: 2000, once: true });
  // }, []);

  return (
    <section className="relative bg-white flex justify-center items-center w-full h-auto overflow-hidden">
      <BackNav />
      <div className="relative flex flex-col justify-center items-center w-full">
        <div className="static flex flex-col justify-center items-center w-full auto-container px-[15px] pt-[250px] pb-[30px] at500:px-[72px] my-0 mx-auto">
          <div className="flex flex-col w-full">
            <div className="flex gap-[16px] flex-col justify-start items-start w-full mb-[30px]">
              <h4 className="text-[#2E2E2E] !font-bold leading-[24px] sm:leading-[52px] sm:text-[40px]">
                {data?.title}
              </h4>
              <span className="text-[#7E8EA2] txt w-[600px]">
                {data.excerpt}
              </span>
            </div>
            <div className="relative flex flex-col justify-center items-center w-full mb-[30px]">
              <div className="flex flex-col gap-[50px] ipx:flex-row justify-start items-start silver:justify-between w-full">
                <div className="flex flex-col gap-[20px] lg:flex-row justify-start items-start sm:justify-between w-[300px]">
                  <div className="flex flex-col gap-[12px]">
                    <span
                      data-aos="fade-up"
                      className="txt4 leading-[28px] text-[#353F50]"
                    >
                      Published on
                    </span>
                    <span
                      data-aos="fade-up"
                      className="txt4 leading-[28px] text-[#667085]"
                    >
                      {formatDate(data.date)}
                    </span>
                  </div>
                </div>
                <div className="w-full xl:w-[279px] flex flex-col gap-[20px] silver:flex-row ipx:justify-end ipx:items-end">
                  <div
                    data-aos="fade-up"
                    className="flex flex-col gap-[15px] w-[109px] cursor-pointer px-[10px] py-[10px] border-[1px] h-[40px] border-solid border-[#667085] hover:rounded-[2px] rounded-[16px]"
                    onClick={handleShareLink}
                  >
                    <span className="flex justify-center gap-[8px]">
                      <img
                        src={shareLink}
                        className="w-[20px] h-[20px]"
                        alt="share-link"
                      />
                      <span className="text-[#667085] font-medium leading-[20px] text-[14px] transition-all duration-300 ease-in-out">
                        Share
                      </span>
                    </span>
                  </div>

                  <div
                    data-aos="fade-up"
                    className="flex flex-col gap-[15px] w-[129px] cursor-pointer px-[10px] py-[10px] border-[1px] h-[40px] border-solid border-[#667085] hover:rounded-[2px] rounded-[16px]"
                    onClick={handleCopyLink}
                  >
                    <span className="flex justify-center gap-[8px]">
                      <img
                        src={copyLinkImg}
                        className="w-[20px] h-[20px]"
                        alt="copy-link"
                      />
                      <span className="text-[#667085] font-medium leading-[20px] text-[14px] transition-all duration-300 ease-in-out">
                        Copy link
                      </span>
                    </span>
                    <span className="copy-message">{copyMessage}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative flex flex-col justify-center items-center at500:bg-fixed !bg-no-repeat !bg-cover !bg-top !h-[474px] py-[90px] mb-[40px] w-full "
          style={{
            backgroundImage: `url(${data.coverImage.url})`,
          }}
        ></div>
        <div className="static flex flex-col justify-center items-center w-full  auto-container px-[15px] py-[70px] at500:px-[72px] my-0 mx-auto">
          <div
            className="flex flex-col gap-[20px] w-full"
            dangerouslySetInnerHTML={{ __html: data.content.html }}
          />
        </div>
        <div className="relative flex flex-col justify-center items-center w-full">
          <div className="static flex gap-[30px] flex-col justify-center items-center w-full  auto-container px-[15px] py-[70px] at500:px-[72px] my-0 mx-auto">
            <div className="flex flex-col w-full  ">
              <div className="flex sm:justify-end items-end w-full mb-[20px]">
                <ul className="flex gap-4 ">
                  <li>
                    <a href="https://www.tiktok.com/@ph.city.women.run?_t=8qrotYxit9h&_r=1">
                      <FaTiktok
                        size={20}
                        className=" text-[#484848] hover:text-[#5C176F] transition-all duration-300 ease-in-out"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/phcitywomenrun?t=Ot9NLKru8NzQ6IT4v8raVA&s=08">
                      <FaXTwitter
                        size={20}
                        className=" text-[#484848] hover:text-[#5C176F] transition-all duration-300 ease-in-out"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/share/15admwWdT5/">
                      <FaFacebook
                        size={20}
                        className=" text-[#484848] hover:text-[#5C176F] transition-all duration-300 ease-in-out"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://youtube.com/@phcitywomenrun?si=zRET8Il3FEZ8l7XD">
                      <FaYoutube
                        size={20}
                        className=" text-[#484848] hover:text-[#5C176F] transition-all duration-300 ease-in-out"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/phcitywomenrun/profilecard/?igsh=MnFkZ3V1a2I0a3Ro">
                      <FaInstagram
                        size={20}
                        className=" text-[#484848] hover:text-[#5C176F] transition-all duration-300 ease-in-out"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <hr className="h-[1px] w-full bg-[#E1E6ED]" />
            </div>
            {/* Show LatestBlogs only for posts */}
            {dataType === "post" && <LatestBlogs />}
            {dataType === "event" && <LatestCommunityEvents />}
          </div>
        </div>
        ;
      </div>
    </section>
  );
};

export default BlogPostDetails;
