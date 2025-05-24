import React from "react";
import InventoryTableRow from "./InventoryTableRow";
import InventoryTableEmptyRow from "./InventoryTableEmptyRow";

const InventoryTable = ({ products }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100 whitespace-nowrap">
          <tr>
            <th className="p-4 text-left text-sm font-semibold text-slate-900">
              id
            </th>
            <th className="p-4 text-left text-sm font-semibold text-slate-900">
              Product Name
            </th>
            <th className="p-4 text-left text-sm font-semibold text-slate-900">
              Price
            </th>

            <th className="p-4 text-left text-sm font-semibold text-slate-900">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="whitespace-nowrap divide-y divide-gray-200">
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
