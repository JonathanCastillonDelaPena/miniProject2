import React from "react";
import { Route, Routes } from "react-router-dom";

import NotFoundWarningPage from "../clientSide/pages/NotFoundWarningPage";

// Client Side
import HomePage from "../clientSide/pages/HomePage";
import ShopPage from "../clientSide/pages/ShopPage";
import ContactUsPage from "../clientSide/pages/ContactUsPage";

// Admin Side
import AdminLoginPage from "../adminSide/pages/AdminLoginPage";
import AdminDashboardPage from "../adminSide/pages/AdminDashboardPage";
import CustomerInfo from "../adminSide/pages/CustomerInfoPage";
import ShopCart from "../clientSide/components/shop/ShopCart";
import ProfilePage from "../adminSide/pages/ProfilePage";
import OrdersPage from "../adminSide/pages/OrdersPage";

const RoutesController = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="*" element={<NotFoundWarningPage />} />

      {/* Client Side Routes */}
      <Route path="/home" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/shop/cart" element={<ShopCart />} />
      <Route path="/contact" element={<ContactUsPage />} />

      {/* Admin Side Routes */}
      <Route path="/admin" element={<AdminLoginPage />} />
      <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
      <Route path="/admin/dashboard/order" element={<OrdersPage />} />
      <Route path="/admin/dashboard/profile" element={<ProfilePage />} />
      <Route path="/admin/dashboard/customer" element={<CustomerInfo />} />

      {/* Testing Route */}
      <Route path="/view" element={<ShopCart />} />
    </Routes>
  );
};

export default RoutesController;
