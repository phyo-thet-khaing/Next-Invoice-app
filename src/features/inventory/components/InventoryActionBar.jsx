"use client";
import { productApiUrl } from "@/services/product";
import { debounce, throttle } from "lodash";
import { Plus, Search, X } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import React, { useEffect, useRef } from "react";

const InventoryActionBar = ({ setFetchUrl }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const searchRef = useRef();

  useEffect(() => {
    if (searchParams.get("q")) {
      searchRef.current.value = searchParams.get("q");
    }
  }, []);

  const handleSearch = debounce((event) => {
    const q = event.target.value;
    const params = new URLSearchParams(searchParams.toString());
    params.set("q", event.target.value);
    console.log(params);
    router.push(`?${params}`);
    setFetchUrl(`${productApiUrl}?${params}`);
  }, 500);

  const handleClearSearch = () => {
    searchRef.current.value = "";
    const params = new URLSearchParams(searchParams.toString());
    params.delete("q");
    console.log(params);
    router.push(`?${params}`);
    setFetchUrl(`${productApiUrl}?${params}`);
  };
  return (
    <div className="flex justify-between items-center mb-5">
      <div className="relative w-full max-w-sm">
        <input
          ref={searchRef}
          onChange={handleSearch}
          type="text"
          id="first_name"
          className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-4 pr-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John"
        />
        {searchParams.get("q") ? (
          <X
            onClick={handleClearSearch}
            className="absolute right-3 active:scale-75 duration-150 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 size-4 "
          />
        ) : (
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 size-4 " />
        )}
      </div>

      <div>
        <Link
          href={"/dashboard/inventory/create"}
          className="text-white flex items-center gap-2 border border-b-blue-700 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create Product <Plus className="size-4" />
        </Link>
      </div>
    </div>
  );
};

export default InventoryActionBar;
