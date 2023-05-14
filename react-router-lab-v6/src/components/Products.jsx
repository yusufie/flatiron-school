import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" }
  ];

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => {
          return (
            <ul key={product.id}>
              <Link to={`${product.id}`}>{product.name}</Link>
            </ul>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
