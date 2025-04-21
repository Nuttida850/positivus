import React from "react";
import testimonials from '../assets/images/Testimonials block.png'

function Testimonials() {
  return (
    <div className="max-w-[1320px] mx-auto">
      <div className="flex flex-col md:flex-row items-center p-10 md:p-5 lg:mb-10 lg:p-0">
        <h4 className="text-[40px] font-semibold px-1 bg-[#B9FF66] mr-8 mb-5 md:mb-0">
        Testimonials
        </h4>
        <p className="max-w-[580px] text-lg">
        Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
        </p>
      </div>
      <div>
        <img src={testimonials} className="p-5 my-10 lg:p-0" alt="" />
      </div>
    </div>
  );
}

export default Testimonials;
