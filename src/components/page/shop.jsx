import React, { useState } from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";
import SaveUrPotForm from "../form/saveUrPot";
import BackNav from "../navigation/backNav";
import PurchaseShirt from "../contents/APIs/purchaseShirts";

function ShopItems() {
  const [isOpen, setIsOpen] = useState(false);
  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar openOverlay={openOverlay} />
        <SaveUrPotForm isOpen={isOpen} closeOverlay={closeOverlay} />
        <BackNav />

        <PurchaseShirt />

        <Footer />
      </div>
    </>
  );
}

export default ShopItems;
