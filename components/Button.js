import React from "react";
import cn from "classnames";

const Button = ({
  buttonText,
  buttonClass,
  onClick,
  type,
  disabled,
  buttonIcon,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cn(
        "px-4 py-2 rounded-full text-sm font-medium cursor-pointer",
        [buttonClass],
        !!buttonClass
      )}
    >
      {buttonText} {buttonIcon}
    </button>
  );
};

export default Button;
