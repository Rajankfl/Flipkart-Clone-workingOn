import React, { useEffect, useState } from "react";
import LG1 from "./images/lgmoni3.jpeg";
import ProductsApi from "./ProductsApi";
import Product from "./Product";
export default function Products(props) {
  const [apiData, setApiData] = useState(ProductsApi);
  const [filtrations, setFiltrations] = useState({ brand: [], offer: [], availability: [], discount: [], rating: [] });
  /*useEffect(() => {
    console.log("iam from Products filtrations object data " + filtrations);
    setFiltrations(props.filterToApply);
  }, [props]);
  //setFiltrations(props.filterToApply);
  */
  useEffect(() => {
    console.log("i am also working changed useEffect products " + filtrations);
    setFiltrations(props.filterToApply);
  }, [filtrations]);

  if (props.filterToApply !== null && props.filterToApply.brand) {
    console.log("from products " + props.filterToApply.brand);
  }
  else {
    console.log(props.filterToApply);
  }

  return (
    <div className="products" key="1">
      <div className="items" style={{ display: "flex", alignItems: "center" }}>
        <h2>Monitors</h2>
        <span style={{ fontSize: "12px", marginLeft: "15px" }}>
          (Showing 1 – 12 products of 12 products)
        </span>
      </div>
      <div className="searchedProducts">
        {apiData.map((val, id) => {
          if (filtrations !== null && filtrations.offer.length) {
            return (filtrations.offer.length !== 0 ? filtrations.offer.map((filterOffer) => {
              console.log("i am filterOffer " + filterOffer);
              return filterOffer === val.Offer &&
                val.Availability === "in-stock" ? (
                <Product
                  ProductImage={val.ProductImage}
                  ProductHeadName={val.ProductHeadName}
                  ProductInfo={val.ProductInfo}
                  ProductRating={val.ProductRating}
                  ProductRatingAmount={val.ProductRatingAmount}
                  ProductCP={"₹" + val.ProductCP}
                  ProductMRP={"₹" + val.ProductMRP}
                  key={id}
                />
              ) : null;
            }) : null);
          }

          if (filtrations !== null && filtrations.brand.length !== 0) {
            return (
              filtrations.brand.length !== 0 ? filtrations.brand.map((filterBrand) => {
                console.log("i am filterBrand " + filterBrand);
                return filterBrand === val.Brand &&
                  val.Availability === "in-stock" ? (
                  <Product
                    ProductImage={val.ProductImage}
                    ProductHeadName={val.ProductHeadName}
                    ProductInfo={val.ProductInfo}
                    ProductRating={val.ProductRating}
                    ProductRatingAmount={val.ProductRatingAmount}
                    ProductCP={"₹" + val.ProductCP}
                    ProductMRP={"₹" + val.ProductMRP}
                    key={id}
                  />
                ) : console.log('ERRor Occured');
              }) : null
            );
          }
          if (filtrations !== null && filtrations.availability.length) {
            return (filtrations.availability.length !== 0 ? filtrations.availability.map((filterAvailability) => {
              console.log("i am filterAvailability " + filterAvailability);
              return (
                <Product
                  ProductImage={val.ProductImage}
                  ProductHeadName={val.ProductHeadName}
                  ProductInfo={val.ProductInfo}
                  ProductRating={val.ProductRating}
                  ProductRatingAmount={val.ProductRatingAmount}
                  ProductCP={"₹" + val.ProductCP}
                  ProductMRP={"₹" + val.ProductMRP}
                  key={id}
                />
              )
            }) : null)
          }
          else {
            return (
              val.Availability === "in-stock" ? (
                <Product
                  ProductImage={val.ProductImage}
                  ProductHeadName={val.ProductHeadName}
                  ProductInfo={val.ProductInfo}
                  ProductRating={val.ProductRating}
                  ProductRatingAmount={val.ProductRatingAmount}
                  ProductCP={"₹" + val.ProductCP}
                  ProductMRP={"₹" + val.ProductMRP}
                  key={id}
                />
              ) : null)
          }
        })}
      </div>
    </div>
  );
}
