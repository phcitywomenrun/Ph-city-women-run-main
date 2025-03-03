import React, { useState } from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";
import BlogPostDetails from "../contents/APIs/blogPostDEtails";

function News() {


  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar />
        <BlogPostDetails />
        <Footer />
      </div>
    </>
  );
}

export default News;
