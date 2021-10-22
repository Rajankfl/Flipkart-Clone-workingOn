import React from "react";
export default function Filter() {
  return (
    <div className="filters">
      <section className="filtersApplied">
        <div className="head">
          <span style={{ fontSize: "18px" }}>Filters</span>
          <p
            style={{
              color: "#2874f0",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "12px"
            }}
          >
            CLEAR ALL
          </p>
        </div>
        <div className="filtersAction">
          <div className="FilterAction">
            <div className="cross">✕</div>
            <div className="filterName">50% or above</div>
          </div>
          <div className="FilterAction">
            <div className="cross">✕</div>
            <div className="filterName">Gaming</div>
          </div>
          <div className="FilterAction">
            <div className="cross">✕</div>
            <div className="filterName">Samsung</div>
          </div>
        </div>
      </section>
      <section className="filterBrand">
        <div className="brandHead">
          <div>BRAND</div>
          <span className="material-icons">expand_more</span>
        </div>
        <div className="Brands">
          <div className="brand">
            <input type="checkbox" value="samsung" />
            <div className="BrandName">SAMSUNG</div>
          </div>
          <div className="brand">
            <input type="checkbox" value="dell" />
            <div className="BrandName">DELL</div>
          </div>
          <div className="brand">
            <input type="checkbox" value="acer" />
            <div className="BrandName">ACER</div>
          </div>
          <div className="brand">
            <input type="checkbox" value="hp" />
            <div className="BrandName">HP</div>
          </div>
          <div className="brand">
            <input type="checkbox" value="lenevo" />
            <div className="BrandName">LENEVO</div>
          </div>
        </div>
      </section>
      <section className="filterRatings">
        <div className="ratingHead">
          <div>CUSTOMER RATINGS</div>
          <span className="material-icons">expand_more</span>
        </div>
        <div className="Ratings">
          <div className="Rating">
            <input type="checkbox" value="4-above" />
            <div className="RatingName">4★ & above</div>
          </div>
          <div className="Rating">
            <input type="checkbox" value="3-above" />
            <div className="RatingName">3★ & above</div>
          </div>
          <div className="Rating">
            <input type="checkbox" value="2-above" />
            <div className="RatingName">2★ & above</div>
          </div>
          <div className="Rating">
            <input type="checkbox" value="1-above" />
            <div className="RatingName">1★ & above</div>
          </div>
        </div>
      </section>

      <section className="filterDiscounts">
        <div className="discountHead">
          <div>DISCOUNT</div>
          <span className="material-icons">expand_more</span>
        </div>

        <div className="Discounts">
          <div className="Discount">
            <input type="checkbox" value="50-above" />
            <div className="DiscountName">50% or above</div>
          </div>
          <div className="Discount">
            <input type="checkbox" value="40-above" />
            <div className="DiscountName">40% or above</div>
          </div>
          <div className="Discount">
            <input type="checkbox" value="30-above" />
            <div className="DiscountName">30% or above</div>
          </div>
          <div className="Discount">
            <input type="checkbox" value="20-above" />
            <div className="DiscountName">20% or above</div>
          </div>
          <div className="Discount">
            <input type="checkbox" value="10-above" />
            <div className="DiscountName">10% or above</div>
          </div>
          <div className="Discount">
            <input type="checkbox" value="10-below" />
            <div className="DiscountName">10% & below</div>
          </div>
        </div>
      </section>
    </div>
  );
}
