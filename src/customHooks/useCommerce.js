import React from "react";
import { useDispatch } from "react-redux";
import { commerce } from "../lib/Commerce";
import { cartActions } from "../store/cart-slice";
import { commerceActions } from "../store/commerce-slice";
import { useEffect } from "react";

const useCommerce = () => {
  const dispach = useDispatch();

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    dispach(commerceActions.setProducts(data));
  };

  const fetchCategories = async () => {
    const { data } = await commerce.categories.list();
    dispach(commerceActions.setCategories(data));
  };

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    dispach(cartActions.updateCart(cart));
  };

  const addToCartHandler = async (id) => {
    const newCart = await commerce.cart.add(id, 1);
    dispach(cartActions.updateCart(newCart));
  };

  const removeFromCartHandler = async (id) => {
    const newCart = await commerce.cart.remove(id);
    dispach(cartActions.updateCart(newCart));
  };

  const updateCartQntyHandler = async (id, quantity) => {
    const response = await commerce.cart.update(id, { quantity });
    dispach(cartActions.updateCart(response));
  };

  const emptyCartHandler = async () => {
    const response = await commerce.cart.empty();
    dispach(cartActions.updateCart(response));
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
    fetchCategories();
  }, []);

  return {
    addToCartHandler,
    removeFromCartHandler,
    updateCartQntyHandler,
  };
};

export default useCommerce;
