"use client";
import React, { useEffect, useState } from "react";
import InventoryTableRow from "./InventoryTableRow";
import InventoryTable from "./InventoryTable";
import InventoryActionBar from "./InventoryActionBar";

import useSWR from "swr";
import { fetchProduct, productApiUrl } from "@/services/product";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProductListSkeletonLoader from "./ProductListSkeletonLoader";
import { useSearchParams } from "next/navigation";
import InventoryPagination from "./InventoryPagination";

const InventoryListSection = () => {
  const searchParams = useSearchParams();
  const [fetchUrl, setFetchUrl] = useState(`${productApiUrl}`);
  const { data, isLoading, error } = useSWR(fetchUrl, fetchProduct);

  useEffect(() => {
    setFetchUrl(`${productApiUrl}?${searchParams.toString()}`);
  }, []);
  // const handleNext = () => {
  //   const currentPage = parseInt(data?.meta?.current_page);
  //   const lastPage = data?.meta?.last_page;
  //   const nextPage = currentPage + 1 < lastPage ? currentPage + 1 : lastPage;

  //   setFetchUrl(`${productApiUrl}?limit=5&page=${nextPage}`);
  // };

  // if (isLoading) {
  //   return <p>loading...</p>;
  // }

  return (
    <section className="p-5 mt-2">
      <h3 className="text-xl font-bold mb-5">Inventory List</h3>
      <InventoryActionBar setFetchUrl={setFetchUrl} />

      {isLoading ? (
        <ProductListSkeletonLoader />
      ) : (
        <InventoryTable products={data?.data} />
      )}
      <InventoryPagination data={data} setFetchUrl={setFetchUrl} />
    </section>
  );
};

export default InventoryListSection;
