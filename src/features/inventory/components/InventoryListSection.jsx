"use client";
import React from "react";
import InventoryTableRow from "./InventoryTableRow";
import InventoryTable from "./InventoryTable";
import InventoryActionBar from "./InventoryActionBar";

import useSWR from "swr";
import { fetchProduct, productApiUrl } from "@/services/product";

const InventoryListSection = () => {
  const { data, isLoading, error } = useSWR(productApiUrl, fetchProduct);

  if (isLoading) {
    return <p>loading...</p>;
  }
  console.log(data);

  return (
    <section className="p-5 mt-2">
      <h3 className="text-xl font-bold mb-5">ProductList</h3>
      <InventoryActionBar />
      <InventoryTable products={data?.data} />
    </section>
  );
};

export default InventoryListSection;
