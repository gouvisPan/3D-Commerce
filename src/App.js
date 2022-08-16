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

function App() {
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
    setCart(await commerce.cart.retrieve());
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
