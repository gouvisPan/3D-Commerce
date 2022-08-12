import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Custom from "./Pages/Custom/Custom";
import {React,useState,useEffect} from "react";
import ErrorPage from "./Pages/ErrorPage";
import Nav from "./components/Nav";
import Contact from "./Pages/Contact/Contact";
import Shop from "./Pages/Shop/Shop";
import Commerce from "@chec/commerce.js";
import { commerce } from "./lib/Commerce";


function App() {
  const [products,setProducts] = useState([]);

  const fetchProducts = async() => {
      const {data} = await commerce.products.list();

      setProducts(data);
  }

  useEffect(() => {
    fetchProducts()
  },[])


  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop products={products}/>}></Route>
        <Route path="/custom" element={<Custom />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
