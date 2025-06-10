import React from "react";
import InventoryTableRow from "./InventoryTableRow";
import InventoryTableEmptyRow from "./InventoryTableEmptyRow";

const InventoryTable = ({ products }) => {
  return (
    <div className="relative overflow-x-auto rounded-lg border border-gray-200 shadow-sm mb-3">
      <table className="w-full text-left rtl:text-right divide-y divide-gray-200 bg-white text-sm">
        <thead className="bg-gray-50 text-gray-700 uppercase text-xs font-semibold tracking-wider border-b border-gray-200">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              ID
            </th>
            <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Product Name
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Price (MMK)
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <InventoryTableEmptyRow />
          {products?.map((product) => (
            <InventoryTableRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
