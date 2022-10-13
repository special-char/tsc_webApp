import React from "react";
import cn from "classnames";

const TextArea = ({
  field,
  form: { touched, errors },
  id,
  label,
  ...props
}) => {
  return (
    <div className="last:col-span-2">
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        cols="30"
        rows="5"
        className="bg-neutral-200 w-full rounded-lg focus:outline-neutral-500 py-4 px-7"
        {...field}
        {...props}
      ></textarea>
      {touched[field.name] && errors[field.name] && (
        <span className="text-error">{errors[field.name]}</span>
      )}
    </div>
  );
};

export default TextArea;
