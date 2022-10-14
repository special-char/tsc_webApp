import React from "react";
import cn from "classnames";

const Input = ({ field, form: { touched, errors }, id, label, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        className={cn(
          "bg-neutral-200 w-full focus:outline-neutral-500 rounded-full  py-2 px-4 md:px-8",
          {
            "border-2 border-error focus:outline-error":
              !!touched[field.name] && !!errors[field.name],
          }
        )}
        {...field}
        {...props}
      />
      {touched[field.name] && errors[field.name] && (
        <span className="text-error">{errors[field.name]}</span>
      )}
    </div>
  );
};

export default Input;
