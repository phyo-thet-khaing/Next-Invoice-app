"use client";
import React from "react";
import InventoryEditSection from "../components/InventoryEditSection";
import DashboardLayout from "@/features/dashboard/components/DashboardLayout";
import BreadCrumb from "@/components/BreadCrumb";
import { useParams } from "next/navigation";

const InventoryEditPage = () => {
  const { id } = useParams();
  return (
    <DashboardLayout>
      <BreadCrumb
        links={[
          { title: "Inventory Module", path: "/dashboard/inventory" },
          { title: "Product Detail", path: `/dashboard/inventory/${id}` },
        ]}
        currentPageName="Edit Product"
      />
      <InventoryEditSection />
    </DashboardLayout>
  );
};

export default InventoryEditPage;
