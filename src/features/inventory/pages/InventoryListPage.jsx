import BreadCrumb from "@/components/BreadCrumb";
import React from "react";
import InventoryList from "../components/InventoryListSection";
import DashboardLayout from "@/features/dashboard/components/DashboardLayout";
import InventoryListSection from "../components/InventoryListSection";

const InventoryListPage = () => {
  return (
    <DashboardLayout>
      <BreadCrumb currentPageName="Inventory Module" />
      <InventoryListSection />
    </DashboardLayout>
  );
};

export default InventoryListPage;
