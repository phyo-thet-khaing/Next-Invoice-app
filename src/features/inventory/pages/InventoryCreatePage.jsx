import BreadCrumb from "@/components/BreadCrumb";
import DashboardLayout from "@/features/dashboard/components/DashboardLayout";
import React from "react";
import InventoryCreateSection from "../components/InventoryCreateSection";

const InventoryCreatePage = () => {
  return (
    <DashboardLayout>
      <BreadCrumb
        links={[{ title: "Inventory Module", path: "/dashboard/inventory" }]}
        currentPageName="Create Product"
      />
      <InventoryCreateSection />
    </DashboardLayout>
  );
};

export default InventoryCreatePage;
