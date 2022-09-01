import React from "react";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStrip } from "@stripe/stripe-js";
import CartReview from "./CartReview";

const PaymentForm = ({ token }) => {
  return (
    <div>
      <CartReview token={token} />
    </div>
  );
};

export default PaymentForm;
