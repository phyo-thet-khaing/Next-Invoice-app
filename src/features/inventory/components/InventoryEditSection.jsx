"use client";
import React from "react";
import ProductEditForm from "./ProductEditForm";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { fetchProduct, productApiUrl } from "@/services/product";

const InventoryEditSection = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useSWR(
    `${productApiUrl}/${id}`,
    fetchProduct
  );

  if (isLoading) {
    return (
      <section>
        <h3 className="text-xl font-bold mb-5">Edit Product</h3>
        <form>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 animate-pulse">
            {/* Product Name */}
            <div className="col-span-1">
              <div className="mb-2 h-6 w-3/4 bg-slate-300 rounded"></div>
              <div className="h-10 bg-slate-200 rounded-md w-full"></div>
            </div>

            <div className="col-span-1"></div>

            {/* Price */}
            <div className="col-span-1">
              <div className="mb-2 h-6 w-2/3 bg-slate-300 rounded"></div>
              <div className="h-10 bg-slate-200 rounded-md w-full"></div>
            </div>

            <div className="col-span-1"></div>
          </div>

          <div className="col-span-full mt-6 animate-pulse">
            {/* Confirm Checkbox */}
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 bg-slate-300 rounded mr-3"></div>
              <div className="h-4 w-1/3 bg-slate-300 rounded"></div>
            </div>

            {/* Back to list checkbox */}
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 bg-slate-300 rounded mr-3"></div>
              <div className="h-4 w-1/2 bg-slate-300 rounded"></div>
            </div>

            {/* Submit Button */}
            <div className="mt-4 h-10 w-40 bg-slate-300 rounded-lg"></div>
          </div>
        </form>
      </section>
    );
  }
  console.log(data);
  return (
    <section>
      <h3 className="text-xl font-bold mb-5">Create New Product</h3>
      <ProductEditForm  product={data?.data}/>
    </section>
  );
};

export default InventoryEditSection;
