"use client";
import React from "react";
import ProductDetailSection from "../components/ProductDetailSection";
import DashboardLayout from "@/features/dashboard/components/DashboardLayout";
import BreadCrumb from "@/components/BreadCrumb";

const InventoryShowPage = () => {
  return (
    <DashboardLayout>
      <BreadCrumb
        links={[{ title: "Inventory Module", path: "/dashboard/inventory" }]}
        currentPageName="Product Details"
      />
      <ProductDetailSection />
    </DashboardLayout>
  );
};

export default InventoryShowPage;
