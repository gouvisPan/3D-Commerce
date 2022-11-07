import React from "react";
import { ErrorMessage, useField } from "formik";
import "./TextField.css";

const TextField = (props) => {
  const [field, meta] = useField(props);

  return (
    <div className={props.className + "text-field-content"}>
      {props.ismessage ? (
        <textarea
          rows="5"
          cols="120"
          {...field}
          {...props}
          placeholder={props.pholder}
        ></textarea>
      ) : (
        <input {...field} {...props} placeholder={props.pholder} />
      )}
      <ErrorMessage component="div" name={field.name} className="error-m" />
    </div>
  );
};

export default TextField;
