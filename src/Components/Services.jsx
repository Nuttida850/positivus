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
      <div className="flex flex-col md:flex-row">
        <h4 className="text-3xl font-semibold py-1 px-1 bg-green-400 mr-4">
          Services
        </h4>
        <p className="max-w-[500px]">
          At our digital marketing agency,we offer a range of services to help
          business hrow and succeed online. These services include:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-10 border-1 border-black shadow-xl rounded-4xl flex flex-col md:flex-row md:justify-between">
          <div>
            <h4>Search engine optimizatioin</h4>
            <a href="#" className="flex items-center mt-20">
              <span class="p-2 bg-black rounded-full mr-3">
                <RiArrowRightUpLine className="text-2xl text-green-400" />
              </span>
              Change Color
            </a>
          </div>
          <div>
            <img src={service01} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
