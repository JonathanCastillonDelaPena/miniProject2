import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundWarningPage from "../../pages/NotFoundWarningPage";
import HomePage from "../../pages/HomePage";
import ShopPage from "../../pages/ShopPage";
import ContactUsPage from "../../pages/ContactUsPage";

const RoutesController = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="*" element={<NotFoundWarningPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/contact" element={<ContactUsPage />} />
    </Routes>
  );
};

export default RoutesController;
