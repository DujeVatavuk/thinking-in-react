import React from "react";
import Product from "../models/Product.ts";
import ProductCategoryRow from "./ProductCategoryRow.tsx";
import ProductRow from "./ProductRow.tsx";

export default function ProductTable({ products }: { products: Product[] }) {
  const rows: JSX.Element[] = [];
  let lastCategory: string | null = null;

  products.forEach((product) => { 
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow 
          category={product.category} 
          key={product.category}
        />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name}
      />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}