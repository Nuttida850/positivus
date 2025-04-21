import React from "react";
import img from "../assets/images/img-2.png";
function Contact() {
  return (
    <div className="pt-5 max-w-[1320px] mx-auto">
      <div className="flex flex-col md:flex-row items-center p-10 md:p-5 lg:mb-10 lg:p-0">
        <h4 className="text-[40px] font-semibold px-1 bg-[#B9FF66] mr-8 mb-5 md:mb-0">
          Contact Us
        </h4>
        <p className="max-w-[350px] text-lg">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>
      <div className="p-5 lg:p-0">
        <div className="bg-[#F3F3F3] p-10 rounded-4xl relative">
          <div className="max-w-[500px]">
            <div className="flex space-x-10 mb-10 ">
              <div className="flex items-center">
                <div className="p-1 bg-white border-1 border-black rounded-full mr-3">
                  <div className="p-2 bg-[#B9FF66] rounded-full"></div>
                </div>
                <span className="text-lg">Say Hi</span>
              </div>
              <div className="flex items-center">
                <div className="p-3 bg-white border-1 border-black rounded-full mr-3"></div>
                <span className="text-lg">Get a Quote</span>
              </div>
            </div>
            <form action="">
              <div className="mb-5">
                <h4 className="text-base mb-4">Name</h4>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full h-[60px] bg-white border-1 border-black rounded-2xl pl-5"
                />
              </div>
              <div className="mb-5">
                <h4 className="text-base mb-4">Email*</h4>
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full  h-[60px] bg-white border-1 border-black rounded-2xl pl-5"
                />
              </div>
              <div className="mb-5">
                <h4 className="text-base mb-4">Message*</h4>
                <input
                  type="text"
                  placeholder="Message"
                  className="w-full h-[230px] bg-white border-1 border-black rounded-2xl pl-5"
                />
              </div>
            </form>
            <a
              href="#"
              className="inline-flex text-xl w-full py-3 bg-black rounded-xl text-white my-10 justify-center"
            >
              Send Message
            </a>
          </div>
          <div>
            <img
              src={img}
              className="hidden md:flex absolute top-20 right-[-20.4rem]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
