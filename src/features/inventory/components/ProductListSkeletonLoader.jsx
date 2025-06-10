import React from "react";

const ProductListSkeletonLoader = () => {
  // You can control the number of rows with this variable
  const skeletonRows = Array.from({ length: 6 });

  return (
    <table className="w-full mb-3 text-left rtl:text-right divide-y divide-gray-200 bg-white text-sm animate-pulse">
      <thead className="bg-gray-50 text-gray-700 uppercase text-xs font-semibold tracking-wider border-b border-gray-200">
        <tr>
          <th className="px-6 py-4 text-left text-gray-600">ID</th>
          <th className="px-4 py-4 text-left text-gray-600">Product Name</th>
          <th className="px-6 py-4 text-left text-gray-600">Price (MMK)</th>
          <th className="px-6 py-4 text-left text-gray-600">Action</th>
        </tr>
      </thead>
      <tbody>
        {skeletonRows.map((_, index) => (
          <tr key={index}>
            <td className="px-6 py-4">
              <div className="h-4 bg-gray-200 rounded w-10" />
            </td>
            <td className="px-6 py-4">
              <div className="h-4 bg-gray-200 rounded w-40" />
            </td>
            <td className="px-6 py-4">
              <div className="h-4 bg-gray-200 rounded w-20" />
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="h-7 w-7 bg-gray-200 rounded border" />
                <div className="h-7 w-7 bg-gray-200 rounded border" />
                <div className="h-7 w-7 bg-gray-200 rounded border" />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductListSkeletonLoader;
