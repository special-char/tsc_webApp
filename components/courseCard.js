import React from 'react'
import cn from "classnames";
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
          "w-[570px] h-3/3  m-3 shadow-lg rounded-2xl hover:scale-105 duration-300 relative",
          {
            [className]: !!className,
          }
        )}
      >
        <div>
          <Image
            imgClass={'rounded-t-[50px]'}
            src={svg}
          />
          <div className="">
            <a href="http://">
              <p className="absolute top-6 left-96 py-6 px-14 lg:top-5 lg:left-[50%] lg:px-6 lg:py-2   bg-white font-bold  rounded-full">
                7hr 24m
              </p>
            </a>
            <a href="http://">
              <p className="absolute top-28 text-xl left-96 py-6 px-10 lg:top-5 lg:left-[72%] lg:px-4 lg:py-2 bg-blue-600 font-bold text-white  rounded-full">
                99.00 USD
              </p>
            </a>
          </div>
        </div>
        <div>
          <div className="p-10">
            <h1
              className={cn("font-bold text-2xl text-[#064ea4] mb-3", {
                [labelClassName]: !!labelClassName,
              })}
            >
              {props.label}
            </h1>
            <p
              className={cn("text-xl mb-3 text-[#62778f]", {
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