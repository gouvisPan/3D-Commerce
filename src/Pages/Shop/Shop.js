import ProductList from "./Products/ProductList";
import SideMenu from "./SideMenu";
import "./Shop.css";

const Shop = (props) => {
  return (
    <section className="page-container">
      <SideMenu models={props.models}/>
      <ProductList products={props.products} addToCart={props.addToCart} />
    </section>
  );
};

export default Shop;
