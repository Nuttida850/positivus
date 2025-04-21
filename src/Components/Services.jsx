import React from "react";
import service01 from "../assets/services/service-1.png";
import service02 from "../assets/services/service-2.png";
import service03 from "../assets/services/service-3.png";
import service04 from "../assets/services/service-4.png";
import service05 from "../assets/services/service-5.png";
import service06 from "../assets/services/service-6.png";
import { RiArrowRightUpLine } from "react-icons/ri";

function Services() {
  return (
    <div className="py-20 max-w-[1320px] mx-auto">
      <div className="flex flex-col md:flex-row items-center p-10 md:p-5 lg:mb-10 lg:p-0">
        <h4 className="text-[40px] font-semibold px-1 bg-[#B9FF66] mr-8 mb-5 md:mb-0">
          Services
        </h4>
        <p className="max-w-[580px] text-lg">
          At our digital marketing agency,we offer a range of services to help
          business hrow and succeed online. These services include:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 md:p-5 lg:p-0">
        <div className="p-10 bg-[#F3F3F3] border-1 border-black shadow-[0px_8px_0px_0px_rgba(0,0,0,1)] rounded-4xl ">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div>
              <div className="text-3xl font-medium ">
                <span className="bg-[#B9FF66]  px-2 py-1 rounded-lg">
                  Search engine
                </span>
              </div>
              <div className="text-3xl font-medium mt-2.5">
                <span className="bg-[#B9FF66] px-2 py-1 rounded-lg">
                  optimizatioin
                </span>
              </div>
              <a href="#" className="flex items-center md:mt-20 my-10 md:my-0 text-xl">
                <span class="p-2 bg-black rounded-full mr-3">
                  <RiArrowRightUpLine className="text-2xl text-[#B9FF66]" />
                </span>
                Learn more
              </a>
            </div>
            <div>
              <img src={service01} alt="service01" />
            </div>
          </div>
        </div>
        <div className="p-10 bg-[#B9FF66] border-1 border-black shadow-[0px_8px_0px_0px_rgba(0,0,0,1)] rounded-4xl ">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div>
              <div className="text-3xl font-medium ">
                <span className="bg-white  px-2 py-1 rounded-lg">
                  Pay-per-click
                </span>
              </div>
              <div className="text-3xl font-medium mt-2.5">
                <span className="bg-white px-2 py-1 rounded-lg">
                  advertising
                </span>
              </div>
              <a href="#" className="flex items-center md:mt-20 my-10 md:my-0 text-xl">
                <span class="p-2 bg-black rounded-full mr-3">
                  <RiArrowRightUpLine className="text-2xl text-[#B9FF66]" />
                </span>
                Learn more
              </a>
            </div>
            <div>
              <img src={service02} alt="service02" />
            </div>
          </div>
        </div>
        <div className="p-10 bg-black border-1 border-black shadow-[0px_8px_0px_0px_rgba(0,0,0,1)] rounded-4xl ">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div>
              <div className="text-3xl font-medium text-black">
                <span className="bg-white  px-2 py-1 rounded-lg">
                  Social Media{" "}
                </span>
              </div>
              <div className="text-3xl font-medium mt-2.5 text-black">
                <span className="bg-white px-2 py-1 rounded-lg">Marketing</span>
              </div>
              <a
                href="#"
                className="flex items-center md:mt-20 my-10 md:my-0 text-white text-xl"
              >
                <span class="p-2 bg-white rounded-full mr-3">
                  <RiArrowRightUpLine className="text-2xl text-black" />
                </span>
                Learn more
              </a>
            </div>
            <div>
              <img src={service03} alt="service03" />
            </div>
          </div>
        </div>
        <div className="p-10 bg-[#F3F3F3] border-1 border-black shadow-[0px_8px_0px_0px_rgba(0,0,0,1)] rounded-4xl ">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div>
              <div className="text-3xl font-medium ">
                <span className="bg-[#B9FF66]  px-2 py-1 rounded-lg">
                Email                </span>
              </div>
              <div className="text-3xl font-medium mt-2.5">
                <span className="bg-[#B9FF66] px-2 py-1 rounded-lg">
                Marketing
                </span>
              </div>
              <a href="#" className="flex items-center md:mt-20 my-10 md:my-0 text-xl">
                <span class="p-2 bg-black rounded-full mr-3">
                  <RiArrowRightUpLine className="text-2xl text-[#B9FF66]" />
                </span>
                Learn more
              </a>
            </div>
            <div>
              <img src={service04} alt="service04" />
            </div>
          </div>
        </div>
        <div className="p-10 bg-[#B9FF66] border-1 border-black shadow-[0px_8px_0px_0px_rgba(0,0,0,1)] rounded-4xl ">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div>
              <div className="text-3xl font-medium ">
                <span className="bg-white  px-2 py-1 rounded-lg">
                Content                </span>
              </div>
              <div className="text-3xl font-medium mt-2.5">
                <span className="bg-white px-2 py-1 rounded-lg">
                Creation
                </span>
              </div>
              <a href="#" className="flex items-center md:mt-20 my-10 md:my-0 text-xl">
                <span class="p-2 bg-black rounded-full mr-3">
                  <RiArrowRightUpLine className="text-2xl text-[#B9FF66]" />
                </span>
                Learn more
              </a>
            </div>
            <div>
              <img src={service05} alt="service05" />
            </div>
          </div>
        </div>
        <div className="p-10 bg-black border-1 border-black shadow-[0px_8px_0px_0px_rgba(0,0,0,1)] rounded-4xl ">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div>
              <div className="text-3xl font-medium text-black">
                <span className="bg-[#B9FF66]  px-2 py-1 rounded-lg">
                Analytics and                 </span>
              </div>
              <div className="text-3xl font-medium mt-2.5 text-black">
                <span className="bg-[#B9FF66] px-2 py-1 rounded-lg">Tracking</span>
              </div>
              <a
                href="#"
                className="flex items-center md:mt-20 my-10 md:my-0 text-white text-xl"
              >
                <span class="p-2 bg-white rounded-full mr-3">
                  <RiArrowRightUpLine className="text-2xl text-black" />
                </span>
                Learn more
              </a>
            </div>
            <div>
              <img src={service06} alt="service06" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
