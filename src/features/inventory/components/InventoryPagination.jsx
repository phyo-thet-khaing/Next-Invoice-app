"use client";
import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useProduct from "../hooks/useProduct";

const InventoryPagination = ({
  data,
  searchParams,
  limitRef,
  handleLimit,
  handlePaginate,
}) => {
  

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3 text-sm">
        <p>Total {data?.meta?.total ?? 0}</p>
        <p>
          Page {data?.meta?.current_page ?? 0} / {data?.meta?.last_page ?? 0}
        </p>
        <div>
          <select
            ref={limitRef}
            defaultValue={searchParams.get("limit") || "5"} // use limit no change
            onChange={handleLimit}
            className="flex items-center justify-center gap-2 px-1 h-8 w-16 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>

      {/* Previous Button */}
      <div className="flex gap-1">
        <button
          type="button"
          disabled={!data?.links?.prev}
          //   onClick={() => setFetchUrl(data?.links?.prev)}
          onClick={() => handlePaginate(data?.links?.prev)} // careful
          className=" disabled:opacity-65 disabled:pointer-events-none flex items-center justify-center gap-2 px-3 h-8  text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <ArrowLeft className="size-3 " />
        </button>
        <button
          type="button"
          disabled={!data?.links?.next}
          onClick={() => handlePaginate(data?.links?.next)}
          className=" disabled:opacity-65 disabled:pointer-events-none flex items-center justify-center gap-2 px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <ArrowRight className="size-3" />
        </button>
      </div>
    </div>
  );
};

export default InventoryPagination;
