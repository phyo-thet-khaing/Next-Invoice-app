import React from "react";
import ProductCreateForm from "./ProductCreateForm";

const InventoryCreateSection = () => {
  return (
    <section>
      <h3 className="text-xl font-bold mb-5">Create New Product</h3>
      <ProductCreateForm />
    </section>
  );
};

export default InventoryCreateSection;
