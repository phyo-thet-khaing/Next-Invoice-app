"use client";
import React, { useState } from "react";
import InventoryTableRow from "./InventoryTableRow";
import InventoryTable from "./InventoryTable";
import InventoryActionBar from "./InventoryActionBar";

import useSWR from "swr";
import { fetchProduct, productApiUrl } from "@/services/product";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProductListSkeletonLoader from "./ProductListSkeletonLoader";

const InventoryListSection = () => {
  const [fetchUrl, setFetchUrl] = useState(`${productApiUrl}`);
  const { data, isLoading, error } = useSWR(fetchUrl, fetchProduct);

  // const handleNext = () => {
  //   const currentPage = parseInt(data?.meta?.current_page);
  //   const lastPage = data?.meta?.last_page;
  //   const nextPage = currentPage + 1 < lastPage ? currentPage + 1 : lastPage;

  //   setFetchUrl(`${productApiUrl}?limit=5&page=${nextPage}`);
  // };

  // if (isLoading) {
  //   return <p>loading...</p>;
  // }
  console.log(data);

  return (
    <section className="p-5 mt-2">
      <h3 className="text-xl font-bold mb-5">Inventory List</h3>
      <InventoryActionBar />

      {isLoading ? (
        <ProductListSkeletonLoader />
      ) : (
        <InventoryTable products={data?.data} />
      )}
      <div className="flex justify-end">
        {/* Previous Button */}
        <button
          type="button"
          disabled={!data?.links?.prev}
          onClick={() => setFetchUrl(data?.links?.prev)}
          className=" disabled:opacity-65 disabled:pointer-events-none flex items-center justify-center gap-2 px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <ArrowLeft className="size-4 " />
          Previous
        </button>
        <button
          type="button"
          disabled={!data?.links?.next}
          onClick={() => setFetchUrl(data?.links?.next)}
          className=" disabled:opacity-65 disabled:pointer-events-none flex items-center justify-center gap-2 px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
          <ArrowRight className="size-4" />
        </button>
      </div>
    </section>
  );
};

export default InventoryListSection;
