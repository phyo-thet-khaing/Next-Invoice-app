import React from "react";

const InventoryTableEmptyRow = () => {
  return (
    <tr className="last:table-row hidden">
      <td
        colSpan={5}
        className="p-4 text-sm text-slate-600 font-medium text-center"
      >
        There is not product now
      </td>
    </tr>
  );
};

export default InventoryTableEmptyRow;
