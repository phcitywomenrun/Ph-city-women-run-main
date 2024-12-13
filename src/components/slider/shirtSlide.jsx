import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";
import LoadBlurHashImage from "../lazy/loadBlurHash";
import Button from "../contents/Button";
import Loading from "../contents/APIs/loading";
import "swiper/css";
import "./swiper/shirt.css";
import "./swiper/pagination.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ShirtSlider = () => {
  const [shopData, setShopData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [shopLimit, setShopLimit] = useState(4); // Set initial limit to 4 items

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `
    query MyQuery {
      shops {
        id
        price
        slug
        title
        discountTextBackground {
          hex
        }
        subtitle
        productName
        productImage {
          url
        }
        formerPrice
        discount
        buttonText
      }
    }
  `;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(hygraphEndpoint, { query });
        setShopData(response.data.data.shops);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loading />;
  if (error) return <p>Error fetching data</p>;
  return (
    <section className="flex flex-col justify-center items-center relative w-full">
      <div className="blog-container w-full flex flex-col justify-center items-center">
        <GoChevronLeft className="swiper-button-prev-shirt !hidden at500:!flex at500:left-[-46px] w-[20px]" />

        <GoChevronRight className="swiper-button-next-shirt !hidden at500:!flex  at500:right-[-46px] w-[20px]" />

        <Swiper
          className="relative flex flex-col justify-center items-center sm:!py-[30px] w-full !max-w-[600px]"
          style={{ width: "100%" }}
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={10}
          slidesPerView={2}
          breakpoints={{
            0: { slidesPerView: 1 },
            700: { slidesPerView: 2 },
            950: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          navigation={{
            nextEl: ".swiper-button-next-shirt",
            prevEl: ".swiper-button-prev-shirt",
          }}
        >
          {shopData.slice(0, shopLimit).map((shop) => (
            <SwiperSlide key={shop.id} className="z-[4]">
              <div
                data-aos="flip-left"
                className="flex  bg-white gap-[15px] flex-col justify-center items-center w-full overflow-hidden"
              >
                <div className="relative py-[20px] flex justify-center items-center">
                  {shop.productImage && (
                    <LoadBlurHashImage
                      src={shop.productImage.url}
                      blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash if available
                      alt={shop.productName}
                      className="w-full h-auto max-h-[216.88px] object-cover mb-3"
                    />
                  )}
                </div>

                <div className="flex gap-[10px] flex-col justify-center items-start pb-[16px] px-[24px]">
                  <ul className="flex justify-center items-center space-x-1">
                    <li>
                      <span className="font-semibold text-[#262D33] leading-[36px] text-[24px]">
                        {shop.price}
                      </span>
                    </li>
                    <li>
                      <p className="text-[16px] line-through text-[#8C8C8C] leading-[24px]">
                        {shop.formerPrice}
                      </p>
                    </li>
                    <li>
                      <span
                        // style={{
                        //   backgroundColor: shop.discountTextBackground.hex,
                        // }}
                        className=" font-semibold text-[10px] text-[#FFFFFF] leading-[15px] p-1 rounded-[2px]"
                      >
                        {shop.discount}
                      </span>
                    </li>
                  </ul>
                  <span className="font-bold text-[15px] text-[#262D33] leading-[22.5px]">
                    {shop.title}
                  </span>

                  <Link
                    className="block w-full h-full"
                    to={`/shop/${shop.slug}`}
                  >
                    <Button size="play" className="  !bg-[#262D33] ">
                      <span className="z-20">{shop.buttonText}</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ShirtSlider;
