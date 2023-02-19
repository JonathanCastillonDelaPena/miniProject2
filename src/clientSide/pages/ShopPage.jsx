import React from "react";
import NavBar from "../components/common/NavBar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import Shop from "../components/Shop";
import Top from "../components/Top";

const ShopPage = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Top />
        <PageHeader />
        <Shop />
        <Footer />
      </div>
    </div>
  );
};

export default ShopPage;
