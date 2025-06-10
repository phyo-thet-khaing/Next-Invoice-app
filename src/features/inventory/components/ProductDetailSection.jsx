"use client";
import { fetchProduct, productApiUrl } from "@/services/product";
import { useParams } from "next/navigation";
import React from "react";
import useSWR from "swr";
import ProductSkeletonLoader from "./ProductSkeletonLoader";
import Link from "next/link";

const ProductDetailSection = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useSWR(
    `${productApiUrl}/${id}`,
    fetchProduct
  );

  if (isLoading) {
    return <ProductSkeletonLoader />;
  }
  console.log(data);

  return (
    <section>
      <h3 className="text-xl font-bold mb-5">Product Details</h3>

      <table className="mb-5 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Product Name
            </th>
            <td className="px-6 py-4">{data?.data?.product_name}</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Price (MMK)
            </th>
            <td className="px-6 py-4">{data?.data?.price}</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Created_at
            </th>
            <td className="px-6 py-4">
              {data?.data?.created_at
                ? new Date(data.data.created_at).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  })
                : ""}
            </td>
          </tr>
        </tbody>
      </table>
      <Link
        href={`/dashboard/inventory/${id}/edit`}
        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Edit Product
      </Link>
    </section>
  );
};

export default ProductDetailSection;
