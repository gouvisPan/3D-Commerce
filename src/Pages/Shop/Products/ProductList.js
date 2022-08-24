import React from "react";
import Product from "./Product";
import "./Products.css";
import { useSelector } from "react-redux";

// const isInCategories = (categories, active) => {
//   const flag = false;

//   for (let i = 0; i < categories.length; i++) {
//     if (categories[i].id === active.id) {
//       flag = true;
//     }
//   }
//   return flag;
// };

// const filteredArray = (arrayOfElements) =>
//   arrayOfElements
//     .filter((element) =>
//       element.subElements.some((subElement) => subElement.surname === 1)
//     )
//     .map((element) => {
//       let newElt = Object.assign({}, element); // copies element
//       return newElt.subElements.filter(
//         (subElement) => subElement.surname === "1"
//       );
//     });

const ProductList = ({ addToCart }) => {
  const commerce = useSelector((state) => state.commerce);
  console.log(commerce);

  const displayedProducts = commerce.products.filter((product) => {
    return product.categories.some(
      (category) => category.id === commerce.activeCategory.id
    );
  });
  console.log(displayedProducts);

  // commerce.products.map((product) => {
  //   product.categories.map((category) => {
  //     console.log(category.id === commerce.activeCategory.id);
  //   });
  // });

  return (
    <div className="productList-container">
      {displayedProducts.map((product) => (
        <Product product={product} addToCart={addToCart} key={product.id} />

        // {displayedProducts.map((product) => (
        //   <Product product={product} addToCart={addToCart} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
