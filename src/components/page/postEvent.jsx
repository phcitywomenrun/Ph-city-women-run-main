import React, { useState } from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";
import SaveUrPotForm from "../form/saveUrPot";
import Leader from "../contents/sections/postEvent/leader";
import LeaderNav from "../navigation/leadNav";

function PostEvent() {
  const [isOpen, setIsOpen] = useState(false);
  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar openOverlay={openOverlay} />
        <SaveUrPotForm isOpen={isOpen} closeOverlay={closeOverlay} />
        <LeaderNav/>
        <Leader />
        <Footer />
      </div>
    </>
  );
}

export default PostEvent;
