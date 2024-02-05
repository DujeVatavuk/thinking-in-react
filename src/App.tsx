import React from "react";
import FilterableProductTable from "./components/FilterableProductTable.tsx";
import { PRODUCTS } from "./data/data.ts";

export default function App() { 
  return <FilterableProductTable products={PRODUCTS}/>;
}