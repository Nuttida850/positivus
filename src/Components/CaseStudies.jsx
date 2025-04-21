import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

function CaseStudies() {
  return (
    <div className="py-20 max-w-[1320px] mx-auto">
      <div className="flex flex-col md:flex-row items-center p-10 md:p-5 lg:mb-10 lg:p-0">
        <h4 className="text-[40px] font-semibold px-1 bg-[#B9FF66] mr-8 mb-5 md:mb-0">
          Case Studies
        </h4>
        <p className="max-w-[580px] text-lg">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <div className="m-10 md:m-5 lg:m-0 p-10 bg-black rounded-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="border-r-1 border-r-white p-10">
            <p className="text-white text-lg mb-4">
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <a href="#" className="text-[#B9FF66] text-xl flex">
              Learn more
              <FiArrowUpRight className="ml-2 mt-1" />
            </a>
          </div>
          <div className="border-r-1 border-r-white p-10">
            <p className="text-white text-lg mb-4">
              For a B2B software company, we developed an SEO strategy that
              resulted in a first page ranking for key keywords and a 200%
              increase in organic traffic.
            </p>
            <a href="#" className="text-[#B9FF66] text-xl flex">
              Learn more
              <FiArrowUpRight className="ml-2 mt-1" />
            </a>
          </div>
          <div className="p-10">
            <p className="text-white text-lg mb-4">
              For a national retail chain, we created a social media marketing
              campaign that increased followers by 25% and generated a 20%
              increase in online sales.
            </p>
            <a href="#" className="text-[#B9FF66] text-xl flex">
              Learn more
              <FiArrowUpRight className="ml-2 mt-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;
