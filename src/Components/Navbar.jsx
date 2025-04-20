import React, { useState } from "react";
import Logo from "../assets/logos/logo-black.png";
import { IoMdMenu } from "react-icons/io";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const updateToggle = () => {
    setToggle(!toggle);
  };
  return (
    <nav className="p-10 max-w-[1320px] mx-auto h-auto  flex flex-col md:flex-row md:justify-between md:items-center md:h-[80px] relative ">
      <div>
        <img className="mb-5" src={Logo} alt="" />
      </div>
      <ul
        className={`${
          !toggle ? "hidden" : "flex"
        } space-x-8 space-y-4 flex-col md:flex md:items-center md:flex-row md:space-y-0`}
      >
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Use Cases</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a
            href="#"
            className="px-6 py-3 border-1 border-black rounded-lg inline-flex"
          >
            Request a quote
          </a>
        </li>
      </ul>
      <IoMdMenu
        onClick={updateToggle}
        className="absolute right-7 text-3xl cursor-pointer md:hidden"
      />
    </nav>
  );
}

export default Navbar;
