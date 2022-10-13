import React, { useEffect, useRef } from "react";

const Icon = ({ iconUrl, className }) => {
  const iconRef = useRef();

  useEffect(() => {
    const loadSvg = () => {
      while (iconRef.current.hasChildNodes()) {
        iconRef.current.removeChild(iconRef.current.firstChild);
      }
      iconRef.current.insertAdjacentHTML("beforeend", iconUrl);
    };

    loadSvg();
  }, []);
  return (
    <a
      rel="noreferrer"
      aria-label="button"
      href={iconUrl}
      target="_blank"
      role="button"
      className={className}
      ref={iconRef}
    >
      socialIcons
    </a>
  );
};

export default Icon;
