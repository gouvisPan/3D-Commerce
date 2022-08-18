import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Custom from "./Pages/Custom/Custom";
import { React, useState, useEffect } from "react";
import ErrorPage from "./Pages/ErrorPage";
import Header from "./components/Header";
import Contact from "./Pages/Contact/Contact";
import Shop from "./Pages/Shop/Shop";
import { commerce } from "./lib/Commerce";
import Cart from "./Pages/Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "./store/cart-slice";

function App() {
  const dispatch = useDispatch();
  const myCart = useSelector((state) => state.cart);

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCategories = async () => {
    const { data } = await commerce.categories.list();
    setCategories(data);
  };

  const fetchCart = async () => {
    const newCart =await commerce.cart.retrieve()
    setCart(newCart);

    dispatch(cartActions.replaceCart(
      newCart.id,
      newCart.line_items,
      newCart.subtotal_raw,
      newCart.subtotal_formated,
      newCart.total_items,
      newCart.total_unique_items                 
      ))
  };

  const addToCartHandler = async (id) => {
    const newCart = await commerce.cart.add(id, 1);
    setCart(newCart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchCart();    
  }, []);

  console.log(categories);
  return (
    <Router>
      <Header cartCount={cart.total_items} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/shop"
          element={<Shop products={products} addToCart={addToCartHandler} models={categories} />}
        ></Route>
        <Route path="/custom" element={<Custom />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cart" element={<Cart cart={cart} />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
