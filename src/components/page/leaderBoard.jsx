import React from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";
import BackNav from "../navigation/backNav";
import LeaderDetails from "../contents/sections/postEvent/leaderDetails";

function LeaderBoard() {
  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar />
        <BackNav />
        <LeaderDetails />
        <Footer />
      </div>
    </>
  );
}

export default LeaderBoard;
