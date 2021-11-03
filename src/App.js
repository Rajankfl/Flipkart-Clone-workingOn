import "./styles.css";
import Products from "./Products";
import Filter from "./Filter";
import { useEffect, useState } from "react";
export default function App() {
  const [filtersApplied, setFiltersApplied] = useState(null);
  useEffect(() => {
    if (filtersApplied !== null) {
      console.log("working");
    }
    filtersApplied !== null
      ? console.log("done " + filtersApplied.brand)
      : console.log("done" + filtersApplied);
  }, [filtersApplied]);

  function sendfiltrations(filters) {
    console.log("got app " + filters);
    setFiltersApplied(filters);
    if (filtersApplied !== null) {
      console.log("from App brands " + filtersApplied.brand);
    }
  }
  return (
    <div className="all">
      <div className="contents">
        <div className="left">
          <Filter provideFiltrations={sendfiltrations} />
        </div>
        <div className="right">
          <Products filterToApply={filtersApplied} />
          {filtersApplied !== null
            ? console.log("i am going to filtered " + filtersApplied.brand)
            : null}
        </div>
      </div>
    </div>
  );
}
