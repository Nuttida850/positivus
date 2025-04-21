import React from "react";
import logo from "../assets/logos/logo-white.png";
import linkedIn from "../assets/socials/linkedIn.png";
import fb from "../assets/socials/fb.png";
import twitter from "../assets/socials/twitter.png";

function Footer() {
  return (
    <footer className="pt-10 px-5 lg:px-0 max-w-[1320px] mx-auto ">
      <div className="bg-black p-10 rounded-tr-4xl rounded-tl-4xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-5">
          <div>
            <img src={logo} alt="" />
          </div>
          <ul className="text-white text-lg space-y-3 md:space-y-0 lg:space-y-0 my-5 flex space-x-5 flex-col md:flex-row">
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
          </ul>
          <ul className="flex space-x-5">
            <li>
              <a href="#">
                <img src={linkedIn} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={fb} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twitter} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between items-center ">
          <div>
            <span className="px-2 py-1 bg-[#B9FF66] rounded-lg text-xl font-medium">
              Contact us:
            </span>
            <p className="text-white my-5 text-lg">Email: info@positivus.com</p>
            <p className="text-white my-5 text-lg">Phone: 555-567-8901</p>
            <p className="text-white my-5 text-lg max-w-[330px]">
              Address: 1234 Main St Moonstone City, Stardust State 12345
            </p>
          </div>
          <div className="p-10 rounded-xl bg-[#292A32] flex">
            <input
              type="text"
              className="border-1 border-white rounded-lg placeholder-white px-10 py-5 mr-5 text-white"
              placeholder="Email"
            />
            <a
              href="#"
              className="inline-flex text-xl px-5 py-3 bg-[#B9FF66] rounded-xl items-center"
            >
              Subscribe to news
            </a>
          </div>
        </div>
        <hr className="my-10 text-white" />
        <div className="flex flex-col md:flex-row items-center">
            <p className="text-white mr-5 text-lg">© 2023 Positivus. All Rights Reserved.</p>
            <a href="#" className="text-white text-lg">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
