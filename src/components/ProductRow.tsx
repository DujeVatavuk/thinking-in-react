import React from "react";
import Product from "../models/Product";

export default function ProductRow({ product }: { product: Product }) {
  const name = product.stocked
    ? product.name
    : <span style={{ color: "red" }}>
        {product.name}
      </span>;
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}