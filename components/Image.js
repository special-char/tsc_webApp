import React from "react";
import cn from "classnames";

const Image = ({ imgClass, src }) => {
  return (
    <div>
      <img
        className={cn("", {
          [imgClass]: !!imgClass,
        })}
        src={src}
        alt="image"
      />
    </div>
  );
};

export default Image;
