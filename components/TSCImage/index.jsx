import Image from "next/image";
import React from "react";

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const myLoader = ({ src, width, quality, maxWidth }) => {
  // console.log("src", src);
  // console.log("width", width);
  // console.log("quality", quality);
  const imgWidth = maxWidth || width;

  return `${src}?w=${imgWidth}&q=${quality || 75}`;
};

const TSCImage = ({ maxWidth, src, ...props }) => {
  return (
    <Image
      src={src || require("@public/images/noImage.png")}
      loader={(props) => myLoader({ ...props, maxWidth })}
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${toBase64(
        shimmer(props?.height || "100%", props?.width || "100%")
      )}`}
      {...props}
      objectFit={src ? "cover" : "contain"}
    />
  );
};

export default TSCImage;
