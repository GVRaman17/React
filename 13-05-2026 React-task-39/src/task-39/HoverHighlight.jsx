import React, { useState } from "react";
import "./styles.css";

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Keyboard" },
];

function HoverHighlight() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <ul>
      {products.map((product) => (
        <li
          key={product.id}
          className={hoveredId === product.id ? "highlight" : ""}
          onMouseEnter={() => setHoveredId(product.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          {product.name}
        </li>
      ))}
    </ul>
  );
}
export default HoverHighlight;