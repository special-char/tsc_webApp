import React from "react";
import Image from "next/image";

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#E7EAEE" offset="20%" />
      <stop stop-color="#F9FAFB" offset="50%" />
      <stop stop-color="#E7EAEE" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#E7EAEE" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const CustomImage = ({ imageClassName, ...props }) => {
  return (
    <Image
      layout="fixed"
      objectPosition={"center"}
      objectFit={"cover"}
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${toBase64(
        shimmer("100%", "100%")
      )}`}
      className={imageClassName}
      {...props}
    />
  );
};
export default CustomImage;

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

//  constructor this.props.Component

// export default class index extends Component {

// super{props};
// this.

//   render() {
//     return (
//       <div>index</div>
//     )
//   }
// }

// return;
// <div>
//   <h1>mfkn</h1>
//   <button type="button" onClick={this.increment}>
//     +
//   </button>
//   {number}
//   <button type="button" onClick={this.decrement}>
//     -
//   </button>
// </div>;
