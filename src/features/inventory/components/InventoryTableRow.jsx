import React from "react";

const InventoryTableRow = ({ product }) => {
  return (
    <tr>
      <td className="p-4 text-sm text-slate-600 font-medium">{product.id}</td>
      <td className="p-4 text-sm text-slate-900 font-medium">
        {product.product_name}
      </td>
      <td className="p-4 text-sm text-slate-600 font-medium">
        {product.price}
      </td>

      <td className="p-4 text-sm text-slate-600 font-medium">Edit</td>
    </tr>
  );
};

export default InventoryTableRow;
