import React from "react";
import "./Contact.css";
import { RiWhatsappFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import FormInput from "../Checkout/FormInput";
import MailForm from './MailForm'

import { useForm, FormProvider } from "react-hook-form";

const Contact = () => {
  const methods = useForm();

  return (
    <section className="contact-container">
      <div className="get-in-touch-container">
        <h1>Don't hesitate to get in touch.</h1>
        <div className="contact-grid">
          <BsFillTelephoneFill className="contact-icon" />
          <span>Make a direct call.</span>
          <RiWhatsappFill className="contact-icon" />
          <span>Leave us a message.</span>
          <MdEmail className="contact-icon" />
          <span>Complete the email form.</span>
        </div>
      </div>
      <div className="mail-form-container">
        <h3>Direct Mail</h3>
          <MailForm/>
      </div>
    </section>
  );
};

export default Contact;
