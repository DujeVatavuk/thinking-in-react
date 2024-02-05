import React from "react";

export default function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockChange }: { filterText: string, inStockOnly: boolean, onFilterTextChange: (text: string) => void, onInStockChange: (inStock: boolean) => void}) { 
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockChange(e.target.checked)}
        />
        {" "}
        Only show products in stock
      </p>
    </form>
  );
}