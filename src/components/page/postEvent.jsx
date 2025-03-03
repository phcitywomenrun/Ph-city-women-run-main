import React from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";

import Leader from "../contents/sections/postEvent/leader";
import LeaderNav from "../navigation/leadNav";

function PostEvent() {


  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar />
        <LeaderNav />
        <Leader />
        <Footer />
      </div>
    </>
  );
}

export default PostEvent;
