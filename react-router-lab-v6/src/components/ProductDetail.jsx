import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  let { productId } = useParams();
  console.log(productId);
  let navigate = useNavigate();

  const handleSave = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Product Details - {productId} </h1>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ProductDetail;
