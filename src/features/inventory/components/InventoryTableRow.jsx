"use client";
import { destoryProduct } from "@/services/product";
import { ArrowRight, Pencil, PencilIcon, Trash2 } from "lucide-react";
import Link from "next/link";

import React from "react";
import { toast } from "sonner";
import Swal from "sweetalert2";

const InventoryTableRow = ({ product }) => {
  const handleDelete = async () => {
    const confirmed = await Swal.fire({
      title: "Confirm Deletion",
      text: "Do you really want to delete this product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#e3342f",
      cancelButtonColor: "#6c757d",
    });

    if (!confirmed.isConfirmed) return;

    try {
      const res = await destoryProduct(product.id); // Axios response
      // const data = res.data; // optional if you want to access server message

      Swal.fire("Deleted!", "The product has been deleted.", "success");
      toast.success("Product deleted successfully.");
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <tr>
      <td className=" px-6 py-4 text-sm text-slate-600 font-medium">
        {product.id}
      </td>
      <td className=" px-6 py-4 text-sm text-slate-900 font-medium">
        {product.product_name}
      </td>
      <td className=" px-6 py-4 text-sm text-slate-600 font-medium text-left">
        {product.price}
      </td>
      <td className=" px-6 py-4 text-sm">
        <div className="flex justify-start items-center gap-3">
          <button
            onClick={handleDelete}
            className=" hover:bg-blue-100 cursor-pointer  active:scale-95 duration-200 flex justify-center items-center size-7 border rounded   "
          >
            <Trash2 className="size-4" />
          </button>
          <Link
            href={`/dashboard/inventory/${product.id}/edit`}
            className=" hover:bg-blue-100  active:scale-95 duration-200  flex justify-center items-center size-7 border rounded  "
          >
            <Pencil className="size-3" />
          </Link>
          <Link
            href={`/dashboard/inventory/${product.id}`}
            className=" hover:bg-blue-100  active:scale-95 duration-200 flex justify-center items-center size-7 border rounded   "
          >
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default InventoryTableRow;
