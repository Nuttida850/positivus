import React from "react";
import HeaderImg from "../assets/images/header-img.png";
function Header() {
  return (
    <div className="max-w-[1320px] mx-auto py-10 flex flex-col md:flex-row md:justify-between items-center">
      <div>
        <h1 className="text-6xl font-medium leading-[1.2] max-w-[550px]">Navigating the digital landscape for success</h1>
        <p className="text-xl max-w-[500px] my-10">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <a href="" className="text-xl text-white px-4 py-3 bg-black rounded-xl inline-flex mb-10">Book a consutation</a>
      </div>
      <div>
        <img src={HeaderImg} alt="" />
      </div>
    </div>
  );
}

export default Header;
