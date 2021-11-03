import React from "react";
import Sam1 from "./images/samsungmoni1.jpeg";
import Sam2 from "./images/samsungmoni2.jpeg";
import Sam3 from "./images/samsungmoni3.jpeg";
export default function Product(props) {
  return (
    <div className="product">
      <div className="productImage">
        <img src={props.ProductImage} alt="LG Monitor" />
      </div>
      <div className="productContent">
        <div className="Head">
          <a href="/" className="HeadName">
            {props.ProductHeadName}
          </a>
        </div>
        <div className="Info">
          <div className="productInfo">{props.ProductInfo}</div>
        </div>
        <div className="Rating">
          <div className="RatingPoint">{props.ProductRating}</div>
          <span className="RatingAmount">{props.ProductRatingAmount}</span>
        </div>
        <div className="Price">
          <span style={{ marginRight: "8px" }}>{props.ProductCP}</span>
          <span style={{ fontSize: "14px", textDecoration: "line-through" }}>
            {props.ProductMRP}
          </span>
        </div>
      </div>
    </div>
  );
}
