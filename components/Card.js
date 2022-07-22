import React from "react";
import cn from "classnames";
import Button from "./Button";
import Image from "./Image";

const Card = ({
  svg,
  svg2,
  children,
  className,
  labelClassName,
  cardTextClasses,
  cardText,
  imgClass,
  ...props
}) => {
  return (
    <div
      className={cn(
        "w-auto h-3/3 shadow-lg rounded-2xl  hover:-translate-y-4 duration-300 relative",
        {
          [className]: !!className,
        }
      )}
    >
      <div className="">
        <Image imgClass={imgClass} src={svg} />
      </div>
      <div>
        <div className="px-5 py-10">
          <h1
            className={cn("font-bold text-2xl text-[#064ea4] mb-3", {
              [labelClassName]: !!labelClassName,
            })}
          >
            {props.label}
          </h1>
          <div
            className={cn("text-xl  text-[#62778f]", {
              [cardTextClasses]: !!cardTextClasses,
            })}
          >
            {cardText}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
