import React from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";
import LatestNews from "../contents/sections/getNews";
import EventNav from "../navigation/eventsNav";
import Post from "../contents/sections/newsSections/post";

function News() {


  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar />
        <EventNav />
        {/* <Partnership /> */}
        <div className="pt-[190px]">
          <Post />
        </div>
        <LatestNews />
        <Footer />
      </div>
    </>
  );
}

export default News;
