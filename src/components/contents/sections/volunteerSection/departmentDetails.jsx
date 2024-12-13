import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaPaw } from "react-icons/fa";

import BackNav from "../../../navigation/backNav";

const DepartmentDetails = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `
    query GetvolunteerDepartmentBySlug($slug: String!) {
  volunteerDepartment(where: { slug: $slug }) {
    id
    title
    subtext
    date1
    date2
   
    coverImage {
      url
    }
    content
  }
}

  `;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.post(hygraphEndpoint, {
          query,
          variables: { slug },
        });
        setPost(response.data.data.volunteerDepartment);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching post:", err.response?.data || err);
        setError(err);
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching post</p>;

  const handleCopyLink = () => {
    const link = window.location.href;
    navigator.clipboard.writeText(link).then(() => {
      setCopyMessage("Link copied");
      setTimeout(() => setCopyMessage(""), 2000);
    });
  };

  // Format date function
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    // Determine the correct suffix for the day
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



  return (
    <section className="relative pt-[120px] flex flex-col justify-center items-center w-full h-auto overflow-hidden">
      <div
        className="relative flex flex-col justify-center items-center bg-cover  h-auto w-full py-[100px] md:px-[200px]"
        style={{
          backgroundImage: `url(${post?.coverImage.url})`,
          backgroundColor: "#00000099",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative flex gap-[20px]  justify-start items-center w-full  h-auto sm:h-[320px] ">
          <h4 className="text-white !font-[176] leading-[24px] sm:leading-[52px] sm:text-[40px] ">
            {post?.title}
          </h4>
        </div>
      </div>
      <div className="static auto-container flex flex-col justify-center items-center w-full py-[70px]  at500:px-[72px] my-0 mx-auto">
        <div className="flex gap-10 flex-col justify-start items-start w-[80%]">
          <span className="flex group gap-2 justify-center items-center cursor-pointer">
            <FaPaw
              size={40}
              className="text-[#353F50] group-hover:text-[#8D12AB]"
            />
            <span className=" flex flex-col gap-1">
              <p className="text-[#484848] group-hover:text-[#8D12AB] !font-[146] text-[24px] leading-[28px]">
                {post?.subtext}
              </p>
              <p className="text-[#7E8EA2] group-hover:text-[#8D12AB] text-[20px] leading-[28px]">
                {post?.date1} - {post?.date2}
              </p>
            </span>
          </span>
          <div
            className="flex w-full max-w-[851px]"
          >
            <p className="text-[#484848] group-hover:text-[#8D12AB] !font-[146] text-[20px] leading-[28px]">
              {post?.content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentDetails;
