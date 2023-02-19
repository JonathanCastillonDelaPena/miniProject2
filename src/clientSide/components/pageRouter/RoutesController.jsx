import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundWarningPage from "../../pages/NotFoundWarningPage";
import HomePage from "../../pages/HomePage";
import ShopPage from "../../pages/ShopPage";
import ContactUsPage from "../../pages/ContactUsPage";
import Dashboard from "../../../adminSide/components/Dashboard";
import CustomerInfo from "../../../adminSide/components/CustomerInfo";

const RoutesController = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="*" element={<NotFoundWarningPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/contact" element={<ContactUsPage />} />

      {/* Temporary Linking to the Admin Side */}
      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/customer" element={<CustomerInfo />} />
    </Routes>
  );
};

export default RoutesController;
