import React from "react";
import Product from "../models/Product.ts";
import ProductTable from "./ProductTable.tsx";
import SearchBar from "./SearchBar.tsx";

export default function FilterableProductTable({ products }: { products: Product[] }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}