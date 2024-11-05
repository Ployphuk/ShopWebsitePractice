import React from "react";
import './Products.css';

function ProductCard({ imgsrc, title, detail }) {
  return (
    <div className="productCard">
      <div className="productpicture">
        <img src={imgsrc} alt="Product" className="product-image" />
      </div>
      <div className="productdetail">
        <h3 className="product-title">{title}</h3>
        <p className="product-detail">{detail}</p>
      </div>
    </div>
  );
}

export default ProductCard;
