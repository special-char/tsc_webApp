import React from "react";
import cn from "classnames";

const Button = ({
  buttonText,
  buttonClass,
  buttonIcon,
  ...props
}) => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-full text-sm font-medium cursor-pointer",
        { [buttonClass]: !!buttonClass },

      )}
      {...props}
    >
      {buttonText} {buttonIcon}
    </button>
  );
};

export default Button;
