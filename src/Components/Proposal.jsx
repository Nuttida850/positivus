import React from "react";
import img from "../assets/images/img-1.png";

function Proposal() {
  return (
    <div className="p-10 md:p-0 max-w-[1320px] mx-auto">
      <div className=" bg-[#F3F3F3] p-10 rounded-4xl flex flex-col md:flex-row md:justify-between relative">
        <div className="ml-5 md:ml-10 text-left">
          <h3 className="text-3xl font-medium">Let’s make things happen</h3>
          <p className="text-lg max-w-[500px] my-10">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <a
            href="#"
            className="inline-flex text-xl px-5 py-3 bg-black rounded-xl text-white"
          >
            Get your free proposal
          </a>
        </div>
        <div>
          <img
            src={img}
            className="hidden md:flex md:absolute md:top-[-2rem] md:right-[-8rem] lg:top-[-2rem] lg:right-0"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}

export default Proposal;
