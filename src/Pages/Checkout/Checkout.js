import { React, useState, useEffect } from "react";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import "./Checkout.css";
import { commerce } from "../../lib/Commerce";
import {
  Stepper,
  Step,
  StepLabel,
  CircularProgress,
  Divider,
} from "@material-ui/core";
import { useSelector } from "react-redux";

const steps = ["Shipping adress details", "Payment details"];
const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});

  const cartId = useSelector((state) => state.cart.id);

  const stepChange = (change) =>
    setActiveStep((prevActiveStep) => prevActiveStep + change);

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cartId, {
          type: "cart",
        });

        setCheckoutToken(token);
      } catch (error) {}
    };

    generateToken();
  }, [cartId]);

  const handleNextClicked = (data) => {
    setShippingData(data);
    stepChange(1);
  };

  const Confirmation = () => <div>Confirmation</div>;

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={handleNextClicked} />
    ) : (
      <PaymentForm  shippingData={shippingData} token={checkoutToken}/>
    );

  return (
    <div className="checkout-page-container">
      <div className="checkout-card ">
        <h3>Checkout</h3>
        <Stepper activeStep={activeStep} className="stepper">
          {steps.map((step) => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <Confirmation />
        ) : (
          checkoutToken && <Form />
        )}
      </div>
    </div>
  );
};

export default Checkout;
