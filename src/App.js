import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Custom from "./Pages/Custom/Custom";
import { React } from "react";
import ErrorPage from "./Pages/ErrorPage";
import Header from "./components/Header/Header";
import Contact from "./Pages/Contact/Contact";
import Shop from "./Pages/Shop/Shop";
import Checkout from "./Pages/Checkout/Checkout";

import Cart from "./Pages/Cart/Cart";
import useCommerce from "./customHooks/useCommerce";

function App() {
  const {
    addToCartHandler: addToCart,
    removeFromCartHandler: removeFromCart,
    updateCartQntyHandler: updateCartQnty,
  } = useCommerce();

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop addToCart={addToCart} />}></Route>
        <Route path="/custom" element={<Custom />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route
          path="/cart"
          element={
            <Cart
              removeFromCart={removeFromCart}
              updateCartQnty={updateCartQnty}
            />
          }
        ></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

// const dispach = useDispatch();
// const itemId = useSelector((state) => state.commerce.incomingItemId);

// const fetchProducts = async () => {
//   const { data } = await commerce.products.list();
//   dispach(commerceActions.setProducts(data));
// };

// const fetchCategories = async () => {
//   const { data } = await commerce.categories.list();
//   dispach(commerceActions.setCategories(data));
// };

// const fetchCart = async () => {
//   const cart = await commerce.cart.retrieve();
//   dispach(cartActions.updateCart(cart));
// };

// const addToCartHandler = async (id) => {
//   const newCart = await commerce.cart.add(id, 1);
//   dispach(cartActions.updateCart(newCart));
// };

// const removeFromCartHandler = async (id) => {
//   const newCart = await commerce.cart.remove(id);
//   dispach(cartActions.updateCart(newCart));
// };

// useEffect(() => {
//   fetchProducts();
//   fetchCart();
//   fetchCategories();
// }, []);
