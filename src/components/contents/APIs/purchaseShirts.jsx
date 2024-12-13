import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadBlurHashImage from "../../lazy/loadBlurHash"; // Ensure this is correct
import "../../slider/swiper/pagination.css";
import "./postBlog.css";
import "swiper/css";
import { GoTag } from "react-icons/go";
import Link from "../link";
import Button from "../Button";

const PurchaseShirt = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1); // State for quantity
  const [selectedSize, setSelectedSize] = useState(""); // State for selected size

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `
    query GetShopBySlug($slug: String!) {
      shop(where: { slug: $slug }) {
        id
        price
        title
        subtitle
        productName
        productImage {
          url
        }
          discountTextBackground2 {
          hex
        }
        formerPrice
        discount
        buttonText
        availableSizes
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
        setPost(response.data.data.shop);
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
  if (error) return <p className="text-black">Error fetching post</p>;

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0) setQuantity(value);
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

 

  return (
    <section className="relative pt-[100px] flex flex-col items-center w-full h-auto overflow-hidden">
      <div className="static z-30 auto-container flex flex-col justify-center items-start w-full pt-[150px] pb-[50px] px-[20px] at500:px-[72px] my-0 mx-auto">
        <div className=" flex flex-col silver:flex-row gap-[20px] sm:gap-[30px] justify-center items-center w-full">
          {/* Product Image */}
          <div className="relative py-[20px] flex justify-center items-center silver:w-[518px]">
            {post?.productImage && (
              <LoadBlurHashImage
                src={post?.productImage.url}
                blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash if available
                alt={post.productName}
                className="w-full h-auto sm:h-[621px] object-cover mb-3"
              />
            )}
          </div>
          {/* Product Details */}
          <div className="flex gap-[20px] flex-col justify-start items-start pb-[16px] silver:px-[24px] w-full silver:w-[403px]">
            <ul className="flex flex-col justify-start items-start space-x-1 w-full">
              <li className="flex justify-start items-start gap-4">
                <span className="font-semibold text-[#262D33] leading-[36px] text-[24px]">
                  10KM run Shirts
                </span>
                <p className=" text-[#262D33] leading-[21px] text-[10px] ipx:text-[14px]">
                  18 left in stock
                </p>
              </li>
              <li className="flex gap-1 justify-center items-center">
                <span className="font-semibold text-[#262D33] leading-[36px] text-[24px]">
                  {post.price}
                </span>
                <div className=" flex gap-1 justify-center items-center">
                  <p className="text-[16px] line-through text-[#E50000] leading-[24px]">
                    {post.formerPrice}
                  </p>
                  <span
                    // style={{
                    //   color: post.discountTextBackground2.hex
                    // }}
                    className="font-semibold text-[10px] text-white leading-[15px] "
                  >
                    ( {post.discount} )
                  </span>
                </div>
              </li>

              <li className="flex flex-col gap-[31px] w-full">
                {/* Size Selector */}

                <div className="flex flex-col mt-4 w-full">
                  <label className="text-[12px] leading-[16px] font-semibold text-[#353F50] mb-2">
                    Select Size
                  </label>
                  <select
                    value={selectedSize}
                    onChange={handleSizeChange}
                    className="text-[16px] leading-[24px] text-[#848F9F] border bg-[#F3F5F6] rounded-md h-[48px] p-2 w-full"
                  >
                    <option className="" value="" disabled>
                      Select Size
                    </option>
                    {post?.availableSizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Quantity Selector */}
                <div className="flex flex-col  w-full">
                  <label className="text-[12px] leading-[16px] font-semibold text-[#353F50] mb-2">
                    Quantity
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Quantity"
                    // value={quantity}
                    min={1}
                    onChange={handleQuantityChange}
                    className="border bg-[#F3F5F6] placeholder:text-[16px] placeholder:text-[#848F9F] rounded-md h-[48px] p-2 w-full"
                  />
                </div>
              </li>
            </ul>
            <span className="font-bold text-[15px] text-[#262D33] leading-[22.5px]">
              {post.title}
            </span>

            <Button size="play" className="">
              <span className="z-20">Purchase</span>
            </Button>
            <div className="flex gap-4 flex-col justify-start items-start mt-4">
              <span className="text-[#000000] text-[20px] leading-[24px]">
                Pick Up Information
              </span>
              <div className="flex justify-start items-start gap-2 w-full">
                <GoTag  className="text-[#4B4B4B] text-[30px]" />
                <span className=" text-[#4B4B4B] text-[14px] leading-[24px]">
                  You will be updated with information for pick-up of running
                  shirts via email and/or our social media channels
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseShirt;
