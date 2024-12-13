import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import shape1 from "../image/shapes/Frame-1.png";
import shape2 from "../image/shapes/Frame2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../Button";

function LatestNews() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!email) {
  //     alert("Please enter a valid email.");
  //     return;
  //   }

  //   const hygraphEndpoint =
  //     "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  //   const mutation = `
  //   mutation CreateSubscriber($email: String!) {
  //     createSubscriber(data: { email: $email }) {
  //       id
  //     }
  //     publishSubscriber(where: { email: $email }) {
  //       id
  //     }
  //   }
  // `;

  //   try {
  //     const response = await axios.post(
  //       hygraphEndpoint,
  //       {
  //         query: mutation,
  //         variables: { email },
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3Mjg3MjI5NzEsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NtMjV3eWk5aTA2NDcwN3dlZ2VzeWNleDkvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQtYXAtc291dGgtMS5oeWdyYXBoLmNvbS8iLCJzdWIiOiJmODRiMjA4NC02ZGMwLTRkNjktOTdjMi1jY2EwZmVmZGMxMjYiLCJqdGkiOiJja2E1ajJlb2IwM3RjMDF3aDBkZmQ2N3J5In0.HAdVc0t79bwg3bgWPAFIqqdUYhN7vT1pivQuMff4IQxHWmGVov8wisIBjvPSTBLz0URoalRX_DZPTI1W45J3ZkpB1eHTrRVEzI8YtKQJD2s9BxrfSzKQF8ROsD5Kz0wSl7lBYUJo4X6qQAhci0-atYk4ZyIBYswNa6E-gKg7uV0gepcCCwXFco-ZHVjPCiZy1Lhr9NCl6QeomP_lx9XwJNoev5LAtqDPExJ-E2ZA48X8vtwPnpb2DDUbzb-j45tgq0OSIiEnxlSxgikNOoTNqo3Tvn-6fTji-mxniaAcdB3t3IRYzeyis6F_xk6CLyrkyBTB6h0hbsERoLvhzxy52NLOc46ZXliZrfQc28wxsdTsSAg_Y4zpMnFWSzTMlRJlJIzvd-zvbxfAJlaz9_b0-NRujdYx8t1O4OeKOwShVjktDRgJJWTqu3y3_RGPlHSK6ryHlpd42BDuCeYhmZ2mFOaXCkUwUxEPaj1Ez1xdaPNl2n4F0yCPdx3I8z0MLKjzuASONvtWMAiPkZ8xoxMcIuYnGLXW-U4YaP3RzaVOArhYt6J4WaYytsFGpLjs3IOj7SbBkh4vZLJNV4fJk9Fowae9ZakIh3X3Aw890RId1ZU6L7yiSPwYqRIfJiev-4CMNg6lOsoOQGSGT_7_ktkDOO_ZRlyBI3R8Q8jWnOWolE0`, // Replace with your Hygraph token
  //         },
  //       }
  //     );

  //     if (response.data.errors) {
  //       console.error("GraphQL Errors:", response.data.errors);
  //       alert("Failed to subscribe. Please check your input and try again.");
  //       return;
  //     }

  //     if (response.data?.data?.createSubscriber?.id) {
  //       alert("Thank you for subscribing!");
  //       setEmail(""); // Clear input field
  //     } else {
  //       alert("Failed to subscribe. Please try again later.");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("An error occurred. Please try again.");
  //   }
  // };

  return (
    <section className="relative flex justify-center items-center w-full h-auto">
      <div className="static flex flex-col justify-center items-center w-full max-w-[1280px] px-[15px] py-[70px] at500:px-[72px] my-0 mx-auto">
        <div
          data-aos="zoom-in"
          className="bg-[#7D1517] relative flex justify-center items-center h-[307px] w-full rounded-[16px] overflow-hidden"
        >
          <img className="w-full object-cover h-full" src={shape1} alt="" />
          <img className="w-full object-cover h-full" src={shape2} alt="" />
          <div className="absolute flex gap-[20px] flex-col justify-center items-center w-full px-[15px]">
            <span className="text-[#FFFFFF] text-center !text-[20px] at500:!text-[40px] txt9">
              Subscribe to get the latest information
            </span>
            <p className="font-Galano  text-[20px] at500:text-[28px] text-center text-[#FFFFFF] leading-[24px]">
              about the running event, conference and more
            </p>
            <form
              // onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center at500:flex-row gap-3 w-full"
            >
              <div className="flex w-full sm:w-[327px]">
                <input
                  className="w-full h-[44px] rounded-[6px] border placeholder:italic placeholder:text-slate-400 shadow-sm px-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-start w-full at500:max-w-[142px]">
                <Button size="cdn" type="submit" className="">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestNews;
