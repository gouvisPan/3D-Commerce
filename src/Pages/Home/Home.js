import ProductList from "./Products/ProductList";
import SideMenu from './SideMenu'


const Home = (props) => {

  return <div className="page-container">
    <SideMenu/>
    <ProductList products={props.products}/>
  </div>;
};

export default Home;
