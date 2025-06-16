"use client";
import React, { useEffect, useState } from "react";

import InventoryTable from "./InventoryTable";
import InventoryActionBar from "./InventoryActionBar";
import ProductListSkeletonLoader from "./ProductListSkeletonLoader";

import InventoryPagination from "./InventoryPagination";
import useProduct from "../hooks/useProduct";

const InventoryListSection = () => {
  const {
    productLoading,
    products,

    searchParams,
    limitRef,
    handleLimit,
    handlePaginate,
    searchRef,
    handleClearSearch,
    handleSearch,
  } = useProduct();

  return (
    <section className="p-5 mt-2">
      <h3 className="text-xl font-bold mb-5">Inventory List</h3>
      <InventoryActionBar
        handleClearSearch={handleClearSearch}
        handleSearch={handleSearch}
        searchRef={searchRef}
        searchParams={searchParams}
      />

      {productLoading ? (
        <ProductListSkeletonLoader />
      ) : (
        <InventoryTable products={products?.data} />
      )}
      <InventoryPagination
        data={products}
        limitRef={limitRef}
        handleLimit={handleLimit}
        handlePaginate={handlePaginate}
        searchParams={searchParams}
      />
    </section>
  );
};

export default InventoryListSection;
