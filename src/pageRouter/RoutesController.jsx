import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundWarningPage from "../clientSide/pages/NotFoundWarningPage";
import HomePage from "../clientSide/pages/HomePage";
import ShopPage from "../clientSide/pages/ShopPage";
import ContactUsPage from "../clientSide/pages/ContactUsPage";
import AdminLoginPage from "../adminSide/pages/AdminLoginPage";
import Dashboard from "../adminSide/components/Dashboard";
import CustomerInfo from "../adminSide/components/CustomerInfo";
import TestPage from "../clientSide/pages/TestPage/TestPage";

const RoutesController = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="*" element={<NotFoundWarningPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/contact" element={<ContactUsPage />} />
      {/* Temporary Linking to the Admin Side */}
      <Route path="/admin" element={<AdminLoginPage />} />
      <Route path="/admin/customer" element={<CustomerInfo />} />

      {/* Testing Page */}
      <Route path="/testingPage" element={<TestPage />} />
    </Routes>
  );
};

export default RoutesController;
