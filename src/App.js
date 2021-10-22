import "./styles.css";
import Product from "./Product";
import Filter from "./Filter";
export default function App() {
  return (
    <div className="all">
      <div className="contents">
        <div className="left">
          <Filter />
        </div>
        <div className="right">
          <Product />
        </div>
      </div>
    </div>
  );
}
