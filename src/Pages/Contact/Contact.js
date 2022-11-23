import React from "react";
import "./Contact.css";
import { RiWhatsappFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import FormInput from "../Checkout/FormInput";
import MailForm from "./MailForm";

import { useForm, FormProvider } from "react-hook-form";

const Contact = () => {
  const methods = useForm();

  return (
    <section className="contact-container">
      <MailForm />
      <div className="get-in-touch-container">
        <h3>Get in touch.</h3>
        <div className="contact-grid">
          <span>Make a direct call.</span>
          <a href="tel:5554280940">
            <BsFillTelephoneFill className="contact-icon" />
          </a>
          <span>Leave us a message.</span>
          <a target="blank" href="https://api.whatsapp.com/send?phone=23100000">
            <RiWhatsappFill className="contact-icon" />
          </a>
          <span>Complete the email form.</span>
          <a>
            <MdEmail className="contact-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
