import React from 'react'
import Button from '../Button'
import Image from '../Image'

const HomeSection = () => {
  return (
    <>
      <div className="h-auto sm:w-full lg:w-full relative border overflow-hidden pt-16 pb-16">
      <div className="bg-yellow-400 rounded-full w-[500px] h-[500px] absolute -top-96 -left-96 lg:-top-80 lg:-left-64 -z-10"></div>
      <div className="bg-blue-900  w-full h-[300px] absolute top-3/4 -z-10 lg:top-0 lg:h-[100%] lg:w-5/12 lg:right-0"></div>
      <div className="bg-[#F99D77] rounded-full w-[500px] h-[500px] absolute  -bottom-80 -right-72 lg:top-3/4 lg:bottom-0 lg:-right-52 -z-10"></div>
        <div className="max-w-[1209px] mx-auto px-[16px] grid sm:grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="w-auto flex flex-col lg:flex-col justify-around ">
            <div className="flex flex-col justify-items-center lg:flex-col z">
              <div className="flex flex-col text-center lg:text-left">
                <h1 className="text-3xl lg:text-5xl leading-[1.3em] text-[#064ea4] font-bold mb-5">
                  Grow your skills,define your future
                </h1>
                <p className="leading-6 text-[#62778f] mb-10">
                  Presenting Academy, the tech school of the future. We teach
                  you the right skills to be prepared for tomorrow.
                </p>
              </div>
              <div className="flex flex-col lg:flex-row gap-6 ">
                <Button
                  buttonText="EXPLORE COURSES"
                  buttonClass="bg-[#064ea4] font-bold text-white px-10 py-3 lg:px-12 lg:py-5"
                />
                <Button
                  buttonText="LEARN MORE"
                  buttonClass="bg-[#e7eaee] font-bold px-10 py-3 lg:px-12 lg:py-5"
                />
              </div>
            </div>
          </div>
          <div className="w-auto">
            <Image
              imgClass={"rounded-[40px] lg:h-[680px]"}
              src="https://res.cloudinary.com/hemang/image/upload/f_auto/v1658225856/homeimage_rovcid.webp"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeSection
