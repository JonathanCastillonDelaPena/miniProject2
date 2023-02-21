import React from "react";
import { Route, Routes } from "react-router-dom";

import NotFoundWarningPage from "../clientSide/pages/NotFoundWarningPage";
import TestPage from "../clientSide/pages/TestPage/TestPage";

// Client Side
import HomePage from "../clientSide/pages/HomePage";
import ShopPage from "../clientSide/pages/ShopPage";
import ContactUsPage from "../clientSide/pages/ContactUsPage";

// Admin Side
import AdminLoginPage from "../adminSide/pages/AdminLoginPage";
import Dashboard from "../adminSide/components/Dashboard";
import CustomerInfo from "../adminSide/components/CustomerInfo";
import Orders from "../adminSide/pages/OrdersPage";

const RoutesController = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="*" element={<NotFoundWarningPage />} />

      {/* Client Side Routes */}
      <Route path="/home" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/contact" element={<ContactUsPage />} />

      {/* Admin Side Routes */}
      <Route path="/admin" element={<AdminLoginPage />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/dashboard/customer" element={<CustomerInfo />} />

      {/* Testing Page */}
      <Route path="/testingPage" element={<TestPage />} />
      <Route path="/view" element={<Orders />} />
    </Routes>
  );
};

export default RoutesController;
