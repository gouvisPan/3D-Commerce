import ProductList from "./Products/ProductList";
import SideMenu from "./SideMenu";
import "./Shop.css";
import { useDispatch } from "react-redux";

const Shop = (props) => {
  const dispatch = useDispatch();

  return (
    <section className="page-container">
      <SideMenu />
      <ProductList addToCart={props.addToCart} />
    </section>
  );
};

export default Shop;
