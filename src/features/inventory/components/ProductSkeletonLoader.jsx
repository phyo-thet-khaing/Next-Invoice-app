import React from "react";

const ProductSkeletonLoader = () => {
  return (
    <div className="animate-pulse space-y-6 p-6 bg-white rounded-xl shadow-md border border-gray-200 max-w-4xl mx-auto">
      {/* Image Placeholder */}
      <div className="w-full h-60 bg-gray-200 rounded-lg" />

      {/* Title Placeholder */}
      <div className="h-6 w-2/3 bg-gray-200 rounded" />

      {/* Price Placeholder */}
      <div className="h-5 w-1/4 bg-gray-200 rounded" />

      {/* Description Lines */}
      <div className="space-y-2">
        <div className="h-4 w-full bg-gray-200 rounded" />
        <div className="h-4 w-11/12 bg-gray-200 rounded" />
        <div className="h-4 w-10/12 bg-gray-200 rounded" />
      </div>

      {/* Button Placeholder */}
      <div className="h-10 w-32 bg-gray-200 rounded-full mt-4" />
    </div>
  );
};

export default ProductSkeletonLoader;
