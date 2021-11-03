import React, { useState, useEffect } from "react";
export default function Filter(props) {
  const [expandStatus, setExpandStatus] = useState(false);
  const [filtrations, setFiltrations] = useState({ brand: [], offer: [], availability: [], discount: [], rating: [] });

  function expand(which) {
    if (expandStatus) {
      if (which === "brand") {
        document.getElementById("brand").style.display = "block";
        //setExpandStatus(false);
      } else if (which === "rating") {
        document.getElementById("rating").style.display = "block";
      } else if (which === "discount") {
        document.getElementById("discount").style.display = "block";
      } else if (which === "offer") {
        document.getElementById("offer").style.display = "block";
      } else {
        document.getElementById("availability").style.display = "block";
      }
    } else {
      if (which === "brand") {
        document.getElementById("brand").style.display = "none";
        //setExpandStatus(true);
      } else if (which === "rating") {
        document.getElementById("rating").style.display = "none";
      } else if (which === "discount") {
        document.getElementById("discount").style.display = "none";
      } else if (which === "offer") {
        document.getElementById("offer").style.display = "none";
      } else {
        document.getElementById("availability").style.display = "none";
      }
    }
  }

  function FilterBrand(e) {
    console.log(e.target.checked);
    console.log(e.target.attributes.value.value);
    let CheckStatus = e.target.checked;
    let filterMe = e.target.attributes.value.value;
    let filtersApplied = Object.create(filtrations);
    if (CheckStatus) {
      if (filtersApplied.brand) {
        filtersApplied.brand.push(filterMe);
        setFiltrations(filtersApplied);
        console.log(filtersApplied);
        console.log("i am changed" + filtrations.brand);
        //props.provideFiltrations(filtrations);
      } else {
        filtersApplied.brand = [filterMe];
        setFiltrations(filtersApplied);
        console.log(filtersApplied);
        //props.provideFiltrations(filtrations);
      }
    } else {
      let indexNum = filtersApplied.brand.indexOf(filterMe);
      filtersApplied.brand.splice(indexNum, 1);
      console.log(filtersApplied);
      setFiltrations(filtersApplied);
      //props.provideFiltrations(filtrations);
    }
  }
  function FilterRating(e) {
    console.log(e.target.checked);
    console.log(e.target.attributes.value.value);
    let CheckStatus = e.target.checked;
    let filterMe = e.target.attributes.value.value;
    let filtersApplied = Object.create(filtrations);
    if (CheckStatus) {
      if (filtersApplied.rating) {
        filtersApplied.rating.push(filterMe);
        setFiltrations(filtersApplied);
        console.log(filtersApplied);
        //props.provideFiltrations(filtrations);
      } else {
        filtersApplied.rating = [filterMe];
        setFiltrations(filtersApplied);
        console.log(filtersApplied);
        //props.provideFiltrations(filtrations);
      }
    } else {
      let indexNum = filtersApplied.rating.indexOf(filterMe);
      filtersApplied.rating.splice(indexNum, 1);
      console.log(filtersApplied);
      setFiltrations(filtersApplied);
      //props.provideFiltrations(filtrations);
    }
  }
  function FilterDiscount(e) {
    console.log(e.target.checked);
    console.log(e.target.attributes.value.value);
    let CheckStatus = e.target.checked;
    let filterMe = e.target.attributes.value.value;
    let filtersApplied = Object.create(filtrations);
    if (CheckStatus) {
      if (filtersApplied.discount) {
        filtersApplied.discount.push(filterMe);
        setFiltrations(filtersApplied);
        console.log(filtersApplied);
        props.provideFiltrations(filtrations);
      } else {
        filtersApplied.discount = [filterMe];
        setFiltrations(filtersApplied);
        console.log(filtersApplied);
        //props.provideFiltrations(filtrations);
      }
    } else {
      let indexNum = filtersApplied.discount.indexOf(filterMe);
      filtersApplied.discount.splice(indexNum, 1);
      console.log(filtersApplied);
      setFiltrations(filtersApplied);
      //props.provideFiltrations(filtrations);
    }
  }
  function FilterAvailability(e) {
    console.log(e.target.checked);
    console.log(e.target.attributes.value.value);
    let CheckStatus = e.target.checked;
    let filterMe = e.target.attributes.value.value;
    let filtersApplied = Object.create(filtrations);
    if (CheckStatus) {
      if (filtersApplied.availability) {
        filtersApplied.availability.push(filterMe);
        setFiltrations(filtersApplied);
        console.log(filtersApplied);
        //props.provideFiltrations(filtrations);
      } else {
        filtersApplied.availability = [filterMe];
        setFiltrations(filtersApplied);
        console.log(filtersApplied);
        //props.provideFiltrations(filtrations);
      }
    } else {
      let indexNum = filtersApplied.availability.indexOf(filterMe);
      filtersApplied.availability.splice(indexNum, 1);
      console.log(filtersApplied);
      setFiltrations(filtersApplied);
      props.provideFiltrations(filtrations);
    }
  }
  function FilterOffer(e) {
    console.log(e.target.checked);
    console.log(e.target.attributes.value.value);
    let CheckStatus = e.target.checked;
    let filterMe = e.target.attributes.value.value;
    let filtersApplied = Object.create(filtrations);
    if (CheckStatus) {
      if (filtersApplied.offer) {
        filtersApplied.offer.push(filterMe);
        setFiltrations(filtersApplied);
        console.log(filtersApplied);
        //props.provideFiltrations(filtrations);
      } else {
        filtersApplied.offer = [filterMe];
        setFiltrations(filtersApplied);
        console.log(filtersApplied);
        //props.provideFiltrations(filtrations);
      }
    } else {
      let indexNum = filtersApplied.offer.indexOf(filterMe);
      filtersApplied.offer.splice(indexNum, 1);
      console.log(filtersApplied);
      setFiltrations(filtersApplied);
      //props.provideFiltrations(filtrations);
    }
  }
  useEffect(() => {
    props.provideFiltrations(filtrations);
  }, [filtrations])
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
      <section className="filterCategories">
        <div className="fake">
          <div
            className="CategoryHead"
            onClick={() => {
              expandStatus ? setExpandStatus(false) : setExpandStatus(true);
              expand("brand");
            }}
          >
            <div>BRAND</div>
            <span className="material-icons">expand_more</span>
          </div>
          <div className="Categories" id="brand">
            <div className="Category">
              <input
                type="checkbox"
                value="samsung"
                onClick={(e) => {
                  FilterBrand(e);
                }}
              />
              <div className="CategoryName">SAMSUNG</div>
            </div>
            <div className="Category">
              <input
                type="checkbox"
                value="dell"
                onClick={(e) => {
                  FilterBrand(e);
                }}
              />
              <div className="CategoryName">DELL</div>
            </div>
            <div className="Category">
              <input
                type="checkbox"
                value="apple"
                onClick={(e) => {
                  FilterBrand(e);
                }}
              />
              <div className="CategoryName">APPLE</div>
            </div>
            <div className="Category">
              <input
                type="checkbox"
                value="boat"
                onClick={(e) => {
                  FilterBrand(e);
                }}
              />
              <div className="CategoryName">BOAT</div>
            </div>
            <div className="Category">
              <input
                type="checkbox"
                value="canon"
                onClick={(e) => {
                  FilterBrand(e);
                }}
              />
              <div className="CategoryName">CANON CAM</div>
            </div>
          </div>
        </div>
      </section>
      <section className="filterCategories">
        <div
          className="CategoryHead"
          onClick={() => {
            expandStatus ? setExpandStatus(false) : setExpandStatus(true);
            expand("rating");
          }}
        >
          <div>CUSTOMER RATINGS</div>
          <span className="material-icons">expand_more</span>
        </div>
        <div className="Categories" id="rating">
          <div className="Category">
            <input
              type="checkbox"
              value="4"
              onClick={(e) => {
                FilterRating(e);
              }}
            />
            <div className="CategoryName">4★ & above</div>
          </div>
          <div className="Category">
            <input
              type="checkbox"
              value="3"
              onClick={(e) => {
                FilterRating(e);
              }}
            />
            <div className="CategoryName">3★ & above</div>
          </div>
          <div className="Category">
            <input
              type="checkbox"
              value="2"
              onClick={(e) => {
                FilterRating(e);
              }}
            />
            <div className="CategoryName">2★ & above</div>
          </div>
          <div className="Category">
            <input
              type="checkbox"
              value="1"
              onClick={(e) => {
                FilterRating(e);
              }}
            />
            <div className="CategoryName">1★ & above</div>
          </div>
        </div>
      </section>

      <section className="filterCategories">
        <div
          className="CategoryHead"
          onClick={() => {
            expandStatus ? setExpandStatus(false) : setExpandStatus(true);
            expand("discount");
          }}
        >
          <div>DISCOUNT</div>
          <span className="material-icons">expand_more</span>
        </div>

        <div className="Categories" id="discount">
          <div className="Category">
            <input
              type="checkbox"
              value="50"
              onClick={(e) => {
                FilterDiscount(e);
              }}
            />
            <div className="CategoryName">50% or above</div>
          </div>
          <div className="Category">
            <input
              type="checkbox"
              value="40"
              onClick={(e) => {
                FilterDiscount(e);
              }}
            />
            <div className="CategoryName">40% or above</div>
          </div>
          <div className="Category">
            <input
              type="checkbox"
              value="30"
              onClick={(e) => {
                FilterDiscount(e);
              }}
            />
            <div className="CategoryName">30% or above</div>
          </div>
          <div className="Category">
            <input
              type="checkbox"
              value="20"
              onClick={(e) => {
                FilterDiscount(e);
              }}
            />
            <div className="CategoryName">20% or above</div>
          </div>
          <div className="Category">
            <input
              type="checkbox"
              value="10"
              onClick={(e) => {
                FilterDiscount(e);
              }}
            />
            <div className="CategoryName">10% or above</div>
          </div>
          <div className="Category">
            <input
              type="checkbox"
              value="5"
              onClick={(e) => {
                FilterDiscount(e);
              }}
            />
            <div className="CategoryName">10% & below</div>
          </div>
        </div>
      </section>
      <section className="filterCategories">
        <div
          className="CategoryHead"
          onClick={() => {
            expandStatus ? setExpandStatus(false) : setExpandStatus(true);
            expand("offer");
          }}
        >
          <div>OFFERS</div>
          <span className="material-icons">expand_more</span>
        </div>
        <div className="Categories" id="offer">
          <div className="Category">
            <input
              type="checkbox"
              value="special-price"
              onClick={(e) => {
                FilterOffer(e);
              }}
            />
            <div className="CategoryName">Special Price</div>
          </div>
          <div className="Category">
            <input
              type="checkbox"
              value="no-cost-emi"
              onClick={(e) => {
                FilterOffer(e);
              }}
            />
            <div className="CategoryName">No Cost EMI</div>
          </div>
        </div>
      </section>
      <section className="filterCategories">
        <div
          className="CategoryHead"
          onClick={() => {
            expandStatus ? setExpandStatus(false) : setExpandStatus(true);
            expand("availability");
          }}
        >
          <div>AVAILABILITY</div>
          <span className="material-icons">expand_more</span>
        </div>
        <div className="Categories" id="availability">
          <div className="Category">
            <input
              type="checkbox"
              value="out-of-stock"
              onClick={(e) => {
                FilterAvailability(e);
              }}
            />
            <div className="CategoryName">Include Out Of Stock</div>
          </div>
        </div>
      </section>
    </div>
  );
}
