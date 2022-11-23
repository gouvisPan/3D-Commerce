import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import * as React from "react";
import { Suspense } from "react";
import ErrorPage from "./Pages/ErrorPage";
import Header from "./components/Header/Header";
import useCommerce from "./customHooks/useCommerce";
import GridLoader from "react-spinners/GridLoader";

const Shop = React.lazy(() => import("./Pages/Shop/Shop"));
const Custom = React.lazy(() => import("./Pages/Custom/Custom"));
const About = React.lazy(() => import("./Pages/About/About"));
const Contact = React.lazy(() => import("./Pages/Contact/Contact"));
const Checkout = React.lazy(() => import("./Pages/Checkout/Checkout"));
const Cart = React.lazy(() => import("./Pages/Cart/Cart"));

function App() {
  const {
    addToCartHandler: addToCart,
    removeFromCartHandler: removeFromCart,
    updateCartQntyHandler: updateCartQnty,
    handleCheckout,
    emptyCartHandler,
  } = useCommerce();

  return (
    <Router>
      <Header />
      <Suspense
        fallback={
          <div className="centered">
            <GridLoader />
          </div>
        }
      >
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
          <Route
            path="/checkout"
            element={<Checkout handleCheckout={handleCheckout} />}
          ></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Suspense>
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
