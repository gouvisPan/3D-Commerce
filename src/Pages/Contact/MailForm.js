import React from "react";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import "./MailForm.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import * as Yup from "yup";
import Error from "../../helpers/Error";
import Success from "../../helpers/Success";

const MailForm = (props) => {
  const form = useRef();
  const [errorState, setErrorState] = useState(false);
  const [successState, setSuccessState] = useState(false);

  const validate = Yup.object({
    subject: Yup.string()
      .max(45, "Must be up to 45 characters")
      .required("Subject is required"),
    name: Yup.string()
      .max(25, "Must be up to 25 characters")
      .required("Name is required"),
    message: Yup.string()
      .max(400, "Must be up to 400 characters")
      .required("Message is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
  });

  const onSubmit = (resetForm) => {
    setErrorState(false);
    setSuccessState(false);

    emailjs
      .sendForm(
        "service_ostkv35",
        "template_akoud72",
        form.current,
        "qLe__wUmH_mmkvL8K"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Success");
          setSuccessState(true);
          resetForm();
        },
        (error) => {
          console.log(error.text);
          console.log("Error");
          setErrorState(true);
        }
      );
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        subject: "",
        message: "",
      }}
      validationSchema={validate}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        onSubmit(resetForm);
      }}
    >
      {(formik) => (
        <div className="form-container">
          <Form className="form-content" ref={form}>
            <h3>Direct Mail</h3>
            <div className="text-fields">
              <TextField
                label="Name"
                name="name"
                pholder=" Full name"
                type="text"
                className=""
              />
              <TextField
                label="Email"
                name="email"
                type="text"
                pholder=" E-mail"
                className=""
              />
              <TextField
                label="Subject"
                name="subject"
                pholder=" Subject"
                type="text"
                className="t "
              />
              <TextField
                label="Message"
                name="message"
                pholder=" ..."
                type="text"
                ismessage="true"
                className="t "
              />
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </Form>
          {successState && <Success message="E-mail sent!" />}
          {errorState && <Error message="Something went wrong" />}
        </div>
      )}
    </Formik>
  );
};

export default MailForm;
