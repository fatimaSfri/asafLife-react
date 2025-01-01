import "./Logo.css"
import React from "react";

const logos = [
  "./img/logo/razi.webp",
  "./img/logo/saman.webp",
  "./img/logo/sina.webp",
  "./img/logo/tavon.webp",
  "./img/logo/razi.webp",
  "./img/logo/saman.webp",
  "./img/logo/sina.webp",
  "./img/logo/tavon.webp",
 
];

const Logo = () => {
  return (
    <div className="overflow-hidden bg-[rgb(237,237,237)] flex items-center justify-center  h-[200px] ">
      <div className="flex w-max animate-marquee space-x-32 px-14 bg-white h-4/6 items-center justify-center shadow-[5px 4px 12px rgba(0, 0, 0, 0.9)]">
        {logos.concat(logos, logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            className="h-5/6 w-auto "
          />
        ))}
      </div>
    </div>
  );
};

export default Logo;
