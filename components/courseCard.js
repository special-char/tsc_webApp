import React from 'react'
import cn from "classnames";

import Button from './Button';
import Image from './Image';

const CourseCard = ({
    svg,
    svg2,
    children,
    className,
    labelClassName,
    nameClassName,
    childClassName,
    ...props
  }) => {
  return (
    <>
    <div
        className={cn(
          "w-auto h-3/3 p-3 shadow-lg rounded-2xl  hover:-translate-y-4 duration-300 relative",
          {
            [className]: !!className,
          }
        )}
      >
        <div>
          <Image
            imgClass={'rounded-t-3xl'}
            src={svg}
          />
          <div className="">
            <Button buttonText={'7hr 24min'} buttonClass={'absolute bg-[#e7eaee] px-4 py-3 font-bold top-10 right-10'}/>
            <Button buttonText={'99.00 USD'} buttonClass={'absolute bg-[#064ea4] px-4 py-3 font-bold text-white top-24 right-10'} />
            {/* <a href="http://">
              <p className="absolute top-6 left-96 py-6 px-14 lg:top-5 lg:left-[50%] lg:px-6 lg:py-2   bg-white font-bold  rounded-full">
                7hr 24m
              </p>
            </a>
            <a href="http://">
              <p className="absolute top-28 text-xl left-96 py-6 px-10 lg:top-5 lg:left-[72%] lg:px-4 lg:py-2 bg-blue-600 font-bold text-white  rounded-full">
                99.00 USD
              </p>
            </a> */}
          </div>
        </div>
        <div>
          <div className="p-7">
            <h1
              className={cn("font-bold text-2xl text-[#064ea4] mb-3", {
                [labelClassName]: !!labelClassName,
              })}
            >
              {props.label}
            </h1>
            <p
              className={cn("text-xl  text-[#62778f]", {
                [childClassName]: !!childClassName,
              })}
            >
              {children}
            </p>
            <div className="flex flex-row gap-3 items-center">
              <Image
                imgClass={'w-10 rounded-full'}
                src={svg2}
              />
              <p
                className={cn("font-bold text-xl text-[#064ea4]", {
                  [nameClassName]: !!nameClassName,
                })}
              >
                {props.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseCard