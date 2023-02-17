import React from "react";
import BestProducts from "../components/BestProducts";
import Carousel from "../components/Carousel";
import FeaturedSection from "../components/FeaturedSection";
import OfferSection from "../components/OfferSection";
import ProductCards from "../components/ProductCards";
import Subscribe from "../components/Subscribe";
import Top from "../components/Top"
import VendorCarousel from "../components/VendorCarousel";

function HomePage() {
  return (
    <div>
      <Top/>
      <Carousel />
      <FeaturedSection />
      <ProductCards/>
      <OfferSection/>
      <BestProducts/>
      <Subscribe/>
      <VendorCarousel/>
   
    </div>
  );
}

export default HomePage;
