import { React, useState } from "react";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import "./Checkout.css";
import {
  Stepper,
  Step,
  StepLabel,
  CircularProgress,
  Divider,
} from "@material-ui/core";

const steps = ["Shipping adress details", "Payment details"];
const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);

  const Confirmation = () => <div>Confirmation</div>;

  const Form = () => (activeStep === 0 ? <AddressForm /> : <PaymentForm />);

  return (
    <div>
      <div className="checkout-card ">
        <h3>Checkout</h3>
        <Stepper activeStep={activeStep} className="stepper">
          {steps.map((step) => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? <Confirmation /> : <Form />}
      </div>
    </div>
  );
};

export default Checkout;
