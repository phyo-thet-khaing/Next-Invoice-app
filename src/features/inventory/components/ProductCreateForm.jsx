"use client";

import { fetchProduct, storeProduct } from "@/services/product";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const ProductCreateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const res = await storeProduct({
        product_name: data.product_name,
        price: data.price,
      });
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message);
      }
      toast.success(json.message);

      // //const res = await storeProduct({
      //  
      // });

      // stop after save
      reset();

      //router change
      // router.push("/dashboard/inventory");

      // //route to details
      // router.push(`/dashboard/inventory/${json.data.id}`);

      //back to list
      if (data.back_to_list) {
        router.push("/dashboard/inventory");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Product Name */}
        <div className="col-span-1">
          <label
            htmlFor="product_name"
            className={`mb-2 font-medium text-lg block ${
              errors.product_name ? "text-red-500" : "text-slate-900"
            }`}
          >
            Product Name <span className="text-red-300">*</span>
          </label>
          <input
            id="product_name"
            type="text"
            disabled={isSubmitting}
            placeholder="Eg. Apple"
            {...register("product_name", {
              required: "Product name is required",
            })}
            className={`px-4 py-2.5 text-lg rounded-md bg-white border w-full outline-none transition-all duration-150 disabled:opacity-50 ${
              errors.product_name
                ? "border-red-500 ring-1 ring-red-300"
                : "border-gray-400 outline-blue-500"
            }`}
          />

          {errors.product_name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.product_name.message}
            </p>
          )}
        </div>

        <div className="col-span-1"></div>

        {/* Price */}
        <div className="col-span-1">
          <label
            htmlFor="price"
            className={`mb-2 font-medium text-lg block ${
              errors.price ? "text-red-500" : "text-slate-900"
            }`}
          >
            Price (MMK) <span className="text-red-300">*</span>
          </label>
          <input
            disabled={isSubmitting}
            id="price"
            type="number"
            placeholder="Eg. 500"
            {...register("price", {
              required: "Price is required",
              min: { value: 0, message: "Price must be positive" },
            })}
            className={`px-4 py-2.5 text-lg rounded-md bg-white border w-full outline-none transition-all duration-150 disabled:opacity-50 ${
              errors.price
                ? "border-red-500 ring-1 ring-red-300"
                : "border-gray-400 outline-blue-500"
            }`}
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
          )}
        </div>

        <div className="col-span-1"></div>
      </div>

      {/* Confirmation and Submit */}
      <div className="col-span-full">
        {/* Confirmation checkbox */}
        <div className="flex items-center mb-3 mt-5">
          <input
            required
            id="confirm"
            type="checkbox"
            className="w-4 h-4 mr-3 focus:ring-1 focus:ring-offset-slate-200 focus:ring-offset-4 focus:ring-[#007bff]"
          />
          <label htmlFor="confirm" className="text-black text-sm">
            <p className="text-sm text-black ml-4">I'm sure to save product</p>
          </label>
        </div>

        {/* Back to list checkbox */}
        <div className="flex items-center mb-3 mt-5">
          <input
            id="back_to_list"
            {...register("back_to_list")}
            type="checkbox"
            className="w-4 h-4 mr-3 focus:ring-1 focus:ring-offset-slate-200 focus:ring-offset-4 focus:ring-[#007bff]"
          />
          <label htmlFor="back_to_list" className="text-black text-sm">
            <p className="text-sm text-black ml-4">
              Go back to list after saving
            </p>
          </label>
        </div>

        {/* Submit Button - outside of both flex containers */}
        <button
          disabled={isSubmitting}
          type="submit"
          className="mt-4 px-5 py-2.5 rounded-lg cursor-pointer text-white text-sm tracking-wider font-medium border border-current outline-none bg-blue-700 hover:bg-blue-800 active:bg-blue-700 disabled:opacity-70"
        >
          {isSubmitting ? "loading" : "Save Product"}
        </button>
      </div>
    </form>
  );
};

export default ProductCreateForm;
