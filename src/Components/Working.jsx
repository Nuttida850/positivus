import React, { useState } from "react";
import { LiaMinusSolid } from "react-icons/lia";
import { BiPlus } from "react-icons/bi";

function Working() {
  return (
    <div className="py-10 max-w-[1320px] mx-auto">
      <div className="flex flex-col md:flex-row items-center p-10 md:p-5 lg:mb-10 lg:p-0 text-center">
        <h4 className="text-[40px] font-semibold px-1 bg-[#B9FF66] mr-8 mb-5 md:mb-0">
          Our Working Process{" "}
        </h4>
        <p className="max-w-[300px] text-lg">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>
      <div className="m-5 md:m-5 lg:m-0">
        <div className="p-10 mb-6 bg-[#B9FF66] rounded-4xl border-1 border-black shadow-[0px_5px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h4 className="text-6xl font-medium mr-4">01</h4>
              <h3 className="text-3xl font-medium">Consultation</h3>
            </div>
            <div>
              <button className="p-2 border-1 rounded-full border-black bg-white cursor-pointer">
                <LiaMinusSolid className="text-xl" />
              </button>
            </div>
          </div>

          <div className="mt-5">
            <hr />
            <p className="mt-5 text-lg">
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </p>
          </div>
        </div>
        <div className="p-10 mb-6 bg-[#F3F3F3] rounded-4xl border-1 border-black shadow-[0px_5px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex justify-between md:justify-between items-center">
            <div className="flex  md:flex-row items-center">
              <h4 className="text-6xl font-medium mr-4">02</h4>
              <h3 className="text-3xl font-medium">
                Research and Strategy Development
              </h3>
            </div>
            <button className="p-2 border-1 rounded-full border-black bg-white cursor-pointer">
              <BiPlus className="text-xl" />
            </button>
          </div>
        </div>
        <div className="p-10 mb-6 bg-[#F3F3F3] rounded-4xl border-1 border-black shadow-[0px_5px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex justify-between md:justify-between items-center">
            <div className="flex md:flex-row items-center">
              <h4 className="text-6xl font-medium mr-4">03</h4>
              <h3 className="text-3xl font-medium">Implementation</h3>
            </div>
            <button className="p-2 border-1 rounded-full border-black bg-white cursor-pointer">
              <BiPlus className="text-xl" />
            </button>
          </div>
        </div>
        <div className="p-10 mb-6 bg-[#F3F3F3] rounded-4xl border-1 border-black shadow-[0px_5px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex justify-between md:justify-between items-center">
            <div className="flex md:flex-row items-center">
              <h4 className="text-6xl font-medium mr-4">04</h4>
              <h3 className="text-3xl font-medium">Monitoring and Optimization</h3>
            </div>
            <button className="p-2 border-1 rounded-full border-black bg-white cursor-pointer">
              <BiPlus className="text-xl" />
            </button>
          </div>
        </div>
        <div className="p-10 mb-6 bg-[#F3F3F3] rounded-4xl border-1 border-black shadow-[0px_5px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex justify-between md:justify-between items-center">
            <div className="flex md:flex-row items-center">
              <h4 className="text-6xl font-medium mr-4">05</h4>
              <h3 className="text-3xl font-medium">Reporting and Communication</h3>
            </div>
            <button className="p-2 border-1 rounded-full border-black bg-white cursor-pointer">
              <BiPlus className="text-xl" />
            </button>
          </div>
        </div>
        <div className="p-10 mb-6 bg-[#F3F3F3] rounded-4xl border-1 border-black shadow-[0px_5px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex justify-between md:justify-between items-center">
            <div className="flex md:flex-row items-center">
              <h4 className="text-6xl font-medium mr-4">06</h4>
              <h3 className="text-3xl font-medium">Reporting and Communication</h3>
            </div>
            <button className="p-2 border-1 rounded-full border-black bg-white cursor-pointer">
              <BiPlus className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Working;
