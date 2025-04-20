import React from "react";
import logo01 from "../assets/logos/logo-1.png";
import logo02 from "../assets/logos/logo-2.png";
import logo03 from "../assets/logos/logo-3.png";
import logo04 from "../assets/logos/logo-4.png";
import logo05 from "../assets/logos/logo-5.png";
import logo06 from "../assets/logos/logo-6.png";
function Logos() {
  const logos = [logo01, logo02, logo03, logo04, logo05, logo06];
  return (
    <div className="my-10 max-w-[1320px] mx-auto">
      <ul className="flex flex-col md:flex-row md:justify-between items-center space-y-5 md:space-y-0 grayscale">
        {logos.map((logo, index) => (
          <li key={index}>
            <img src={logo} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Logos;
