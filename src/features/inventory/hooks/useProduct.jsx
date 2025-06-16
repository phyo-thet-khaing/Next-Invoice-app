"use client";

import { useEffect, useRef, useMemo, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useSWR from "swr";
import { debounce } from "lodash";
import { fetchProduct, productApiUrl } from "@/services/product";

const useProduct = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const searchRef = useRef(null);
  const limitRef = useRef(null);

  // ✅ Helper to update query parameters
  const updateParams = (updates = {}) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === undefined || value === "") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    return params.toString();
  };

  // ✅ Derived fetch URL from current search params
  const queryString = useMemo(() => searchParams.toString(), [searchParams]);
  const fetchUrl = useMemo(
    () => `${productApiUrl}?${queryString}`,
    [queryString]
  );

  // ✅ Fetch products using SWR
  const {
    data: products,
    isLoading: productLoading,
    error: productError,
  } = useSWR(fetchUrl, fetchProduct);

  // ✅ Sync input field with query param
  useEffect(() => {
    const q = searchParams.get("q");
    if (q && searchRef.current) {
      searchRef.current.value = q;
    }
  }, [searchParams]);

  // ✅ Debounced search handler
  const handleSearch = useCallback(
    debounce((e) => {
      const value = e.target.value;
      const newQuery = updateParams({ q: value, page: 1 }); // Reset page on new search
      router.push(`?${newQuery}`);
    }, 500),
    [searchParams, router]
  );

  // ✅ Clear search
  const handleClearSearch = () => {
    if (searchRef.current) searchRef.current.value = "";
    const newQuery = updateParams({ q: null });
    router.push(`?${newQuery}`);
  };

  // ✅ Pagination
  const handlePaginate = (link) => {
    const url = new URL(link);
    router.push(`${url.search}`);
  };

  // ✅ Limit change
  const handleLimit = () => {
    const newLimit = limitRef.current?.value || "10";
    const newQuery = updateParams({ limit: newLimit, page: 1 });
    router.push(`?${newQuery}`);
  };

  return {
    fetchUrl,
    products,
    productLoading,
    productError,
    searchParams,
    router,
    searchRef,
    limitRef,
    handleSearch,
    handleClearSearch,
    handlePaginate,
    handleLimit,
  };
};

export default useProduct;
