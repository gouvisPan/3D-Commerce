import React from "react";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CartReview from "./CartReview";
import "./PaymentForm.css";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({
  token,
  backStep,
  shippingData,
  handleCheckout,
  nextStep,
}) => {
  const handleSubmit = async (e, elements, stripe) => {
    e.preventDefault();

    // if (!stripe || !elements) return;

    // const cardElement = elements.getElement(CardElement);

    // const [error, paymentMethod] = await stripe.createPaymentMethod({
    //   type: "card",
    //   card: cardElement,
    // });

    // if (error) {
    //   console.log("[error]", error);
    // } else {
    //   const orderData = {
    //     line_items: token.live.line_items,
    //     customer: {
    //       firstname: shippingData.firstName,
    //       lastname: shippingData.lastName,
    //       email: shippingData.email,
    //     },
    //     shipping: {
    //       name: "International",
    //       street: shippingData.address1,
    //       town_city: shippingData.city,
    //       county_state: shippingData.shippingSubdivision,
    //       postal_zip_code: shippingData.zip,
    //       country: shippingData.shippingCountry,
    //     },
    //     fulfillment: { shipping_method: shippingData.shippingOption },
    //     payment: {
    //       gateway: "stripe",
    //       stripe: {
    //         payment_method_id: paymentMethod.id,
    //       },
    //     },
    //   };
    //   handleCheckout(token.id, orderData);

    nextStep(1);
    //  }
  };

  return (
    <div className="payment-form">
      <CartReview token={token} />
      <h5>Payment method</h5>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement className="payment-stripe-comp" />
              <div className="pay-section">
                <button className="abort-payment-btn" onClick={backStep}>
                  Back
                </button>
                <button
                  className="complete-payment-btn"
                  disabled={!stripe}
                  type="submit"
                >
                  PAY {token.total.formatted_with_symbol}
                </button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </div>
  );
};

export default PaymentForm;
