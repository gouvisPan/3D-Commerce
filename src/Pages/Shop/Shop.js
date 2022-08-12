import ProductList from "./Products/ProductList";
import SideMenu from './SideMenu'
import './Shop.css'


const Shop = (props) => {

  return <div className="page-container">
    <SideMenu/>
    <ProductList products={props.products}/>
  </div>;
};

export default Shop;
