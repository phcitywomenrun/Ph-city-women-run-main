import React from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";

import BackNav from "../navigation/backNav";
import PurchaseShirt from "../contents/APIs/purchaseShirts";

function ShopItems() {


  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar />
        <BackNav />
        <PurchaseShirt />
        <Footer />
      </div>
    </>
  );
}

export default ShopItems;
