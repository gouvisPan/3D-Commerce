import ProductList from "./Products/ProductList";
import SideMenu from "./SideMenu";
import "./Shop.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { uiActions } from "../../store/ui-slice";

const Shop = (props) => {
  const dispatch = useDispatch();

  return (
    <section className="page-container">
      <SideMenu models={props.models} />
      <ProductList
        products={props.products}
        addToCart={props.addToCart}
        models={props.models}
      />
    </section>
  );
};

export default Shop;
