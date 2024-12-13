// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ErrorPage from "../errorMessage/errorPage";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, A11y } from "swiper/modules";
// import { GoChevronLeft, GoChevronRight } from "react-icons/go";
// import image from "../contents/image/homeImg/8febc29051bcfc8a9896ced270874b6c.jfif";
// import Button from "../contents/Button";
// import "swiper/css";
// // import "./swiper/lastest.css";
// import "./swiper/pagination.css";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const LastSlide = () => {
//   useEffect(() => {
//     AOS.init({ duration: 3000, once: true });
//   }, []);

//   return (
//     <div className="blog-container w-full flex flex-col items-start overflow-hidden xl:overflow-visible 2xl:overflow-hidden">
//       <div className="relative flex !items-end !justify-end w-full gap-2 pt-[30px] ">
//         <div className="next p-2">
//           <GoChevronLeft className="swiper-button-prev-blog relative top-0 text-[#05284C] hover:text-[#05284C] w-[20px]" />
//         </div>
//         <div className="prev p-2">
//           <GoChevronRight className="swiper-button-next-blog relative text-[#05284C] top-0 hover:text-[#05284C] w-[20px]" />
//         </div>
//       </div>

//       <Swiper
//         className="relative flex flex-col sm:!py-[30px] !overflow-visible xl:!w-[1401px]"
//         style={{ width: "100%" }}
//         modules={[Navigation, Pagination, A11y]}
//         spaceBetween={25}
//         slidesPerView={3}
//         breakpoints={{
//           0: { slidesPerView: 1 },
//           700: { slidesPerView: 1 },
//           950: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         navigation={{
//           nextEl: ".swiper-button-next-blog",
//           prevEl: ".swiper-button-prev-blog",
//         }}
//       >
//         <SwiperSlide className=" z-[4]">
//           <div
//             data-aos="zoom-in"
//             className=" relative flex flex-col justify-center items-center bg-cover bg-blend-multiply bg-[#00000066] h-[231px] rounded-[12px] overflow-hidden"
//             style={{
//               backgroundImage: `url(${image})`,

//               backgroundPosition: "0 -108px",
//             }}
//           >
//             <div className=" flex flex-col justify-between h-auto sm:h-[231px] px-[20px] pb-[25px] pt-[20px]">
//               <div className="flex flex-col gap-[2px]">
//                 <h6 className="text-white">PH City Run Partners with Adidas</h6>
//                 <span className="text-white text-[14px] leading-[20px] font-medium">
//                   Enhance your runs with great playlists
//                 </span>
//               </div>
//               <div className="flex justify-center w-[140px]">
//                 <Button size="small" className="">
//                   Learn More
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className=" z-[4]">
//           <div
//             data-aos="zoom-in"
//             className=" relative flex flex-col justify-center items-center bg-cover bg-blend-multiply bg-[#00000066] h-[231px] rounded-[12px] overflow-hidden"
//             style={{
//               backgroundImage: `url(${image})`,

//               backgroundPosition: "0 -108px",
//             }}
//           >
//             <div className=" flex flex-col justify-between h-auto sm:h-[231px] px-[20px] pb-[25px] pt-[20px]">
//               <div className="flex flex-col gap-[2px]">
//                 <h6 className="text-white">PH City Run Partners with Adidas</h6>
//                 <span className="text-white text-[14px] leading-[20px] font-medium">
//                   Enhance your runs with great playlists
//                 </span>
//               </div>
//               <div className="flex justify-center w-[140px]">
//                 <Button size="small" className="">
//                   Learn More
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className=" z-[4]">
//           <div
//             data-aos="zoom-in"
//             className=" relative flex flex-col justify-center items-center bg-cover bg-blend-multiply bg-[#00000066] h-[231px] rounded-[12px] overflow-hidden"
//             style={{
//               backgroundImage: `url(${image})`,

//               backgroundPosition: "0 -108px",
//             }}
//           >
//             <div className=" flex flex-col justify-between h-auto sm:h-[231px] px-[20px] pb-[25px] pt-[20px]">
//               <div className="flex flex-col gap-[2px]">
//                 <h6 className="text-white">PH City Run Partners with Adidas</h6>
//                 <span className="text-white text-[14px] leading-[20px] font-medium">
//                   Enhance your runs with great playlists
//                 </span>
//               </div>
//               <div className="flex justify-center w-[140px]">
//                 <Button size="small" className="">
//                   Learn More
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className=" z-[4]">
//           <div
//             data-aos="zoom-in"
//             className=" relative flex flex-col justify-center items-center bg-cover bg-blend-multiply bg-[#00000066] h-[231px] rounded-[12px] overflow-hidden"
//             style={{
//               backgroundImage: `url(${image})`,

//               backgroundPosition: "0 -108px",
//             }}
//           >
//             <div className=" flex flex-col justify-between h-auto sm:h-[231px] px-[20px] pb-[25px] pt-[20px]">
//               <div className="flex flex-col gap-[2px]">
//                 <h6 className="text-white">PH City Run Partners with Adidas</h6>
//                 <span className="text-white text-[14px] leading-[20px] font-medium">
//                   Enhance your runs with great playlists
//                 </span>
//               </div>
//               <div className="flex justify-center w-[140px]">
//                 <Button size="small" className="">
//                   Learn More
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className=" z-[4]">
//           <div
//             data-aos="zoom-in"
//             className=" relative flex flex-col justify-center items-center bg-cover bg-blend-multiply bg-[#00000066] h-[231px] rounded-[12px] overflow-hidden"
//             style={{
//               backgroundImage: `url(${image})`,

//               backgroundPosition: "0 -108px",
//             }}
//           >
//             <div className=" flex flex-col justify-between h-auto sm:h-[231px] px-[20px] pb-[25px] pt-[20px]">
//               <div className="flex flex-col gap-[2px]">
//                 <h6 className="text-white">PH City Run Partners with Adidas</h6>
//                 <span className="text-white text-[14px] leading-[20px] font-medium">
//                   Enhance your runs with great playlists
//                 </span>
//               </div>
//               <div className="flex justify-center w-[140px]">
//                 <Button size="small" className="">
//                   Learn More
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default LastSlide;
