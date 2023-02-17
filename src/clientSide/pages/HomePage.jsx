import React from "react";
import NavBar from "../components/common/NavBar";
import BestProducts from "../components/BestProducts";
import Carousel from "../components/Carousel";
import FeaturedSection from "../components/FeaturedSection";
import OfferSection from "../components/OfferSection";
import ProductCards from "../components/ProductCards";
import Subscribe from "../components/Subscribe";
import Top from "../components/Top";
import VendorCarousel from "../components/VendorCarousel";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Top />
        <Carousel />
        <FeaturedSection />
        <ProductCards />
        <OfferSection />
        <BestProducts />
        <Subscribe />
        <VendorCarousel />
      </div>
    </div>
  );
};

export default HomePage;
