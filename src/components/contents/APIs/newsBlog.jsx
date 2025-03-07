import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "../link";
import Loading from "./loading";
import Button from "../Button";

const Blogs = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postLimit, setPostLimit] = useState(6);

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
    posts {
      id
      title
      slug
      date
      excerpt
      coverImage {
        url
        fileName
      }
      content {
        html
      }
    }
  }`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(hygraphEndpoint, {
          query: query,
        });
        setData(response.data.data.posts);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

if (loading) return <Loading />;
if (error) return <p>Lets get you back online</p>;

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
    <section className="relative flex justify-center flex-col items-center w-full h-auto overflow-hidden">
      <div className="w-full flex flex-col justify-center items-center overflow-hidden">
        <div className="grid items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-5 w-full sm:pb-[90px]">
          {data.slice(0, postLimit).map((post) => (
            <div
              key={post.id}
              className="flex bg-[#FFFFFF] gap-[16px] flex-col justify-center items-start w-full"
            >
              {post.coverImage && (
                <img
                  className="h-[220px] w-full rounded-[8px] object-cover"
                  src={post.coverImage.url}
                  alt={post.coverImage.fileName}
                />
              )}
              <Link to={`/posts/${post.slug}`}>
                <div className="flex flex-col gap-[8px] silver:w-[357px] px-[10px] pb-[10px]">
                  <h6 className="text-[#353F50]">{post.title}</h6>
                  <span className="text-[#7E8EA2] txt">{post.excerpt}</span>
                  <span className="text-[#7E8EA2] leading-[18.9px] text-[14px]">
                    {formatDate(post.date)}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {/* Load More Button */}
        {postLimit < data.length && (
          <div className="flex justify-start w-full at500:w-[201px]">
            <Button
              onClick={() => {
                const currentScrollY = window.scrollY; // Save the current scroll position
                setPostLimit((prevLimit) => prevLimit + 3);

                // Wait for the next render, then scroll back to the saved position
                setTimeout(() => {
                  window.scrollTo(0, currentScrollY);
                }, 0);
              }}
              size="large"
              className=" !text-[#8C12AB] !rounded-[24px]"
            >
              See more Posts
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
