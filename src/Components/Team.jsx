import React from "react";
import team01 from "../assets/teams/team-1.png";
import team02 from "../assets/teams/team-2.png";
import team03 from "../assets/teams/team-3.png";
import team04 from "../assets/teams/team-4.png";
import team05 from "../assets/teams/team-5.png";
import team06 from "../assets/teams/team-6.png";
import linkedIn from "../assets/socials/Social icon.png";
function Team() {
  return (
    <div className="pt-10 max-w-[1320px] mx-auto">
      <div className="flex flex-col md:flex-row items-center p-10 md:p-5 lg:mb-10 lg:p-0">
        <h4 className="text-[40px] font-semibold px-1 bg-[#B9FF66] mr-8 mb-5 md:mb-0">
          Team
        </h4>
        <p className="max-w-[580px] text-lg">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 p-5 lg:p-0 gap-8">
        <div className="p-5 rounded-4xl shadow-[0px_5px_0px_0px_rgba(0,0,0,1)] border-1 border-black relative text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center">
            <img src={team01} className="mr-0 md:mr-3 lg:mr-10" alt="" />
            <div className="mt-10 mb-5 md:mb-0">
              <h4 className="text-xl font-bold">John Smith</h4>
              <p className="text-lg">CEO and Founder</p>
            </div>
            <div className="absolute top-5 right-5">
              <img src={linkedIn} alt="" />
            </div>
          </div>
          <hr className="my-5" />
          <p className="text-lg">
            10+ years of experience in digital marketing. Expertise in SEO, PPC,
            and content strategy
          </p>
        </div>
        <div className="p-5 rounded-4xl shadow-[0px_5px_0px_0px_rgba(0,0,0,1)] border-1 border-black relative text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center">
            <img src={team02} className="mr-0 md:mr-3 lg:mr-10" alt="" />
            <div className="mt-10 mb-5 md:mb-0">
              <h4 className="text-xl font-bold">Jane Doe</h4>
              <p className="text-lg">Director of Operations</p>
            </div>
            <div className="absolute top-5 right-5">
              <img src={linkedIn} alt="" />
            </div>
          </div>
          <hr className="my-5" />
          <p className="text-lg">
            7+ years of experience in project management and team leadership.
            Strong organizational and communication skills
          </p>
        </div>
        <div className="p-5 rounded-4xl shadow-[0px_5px_0px_0px_rgba(0,0,0,1)] border-1 border-black relative text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center">
            <img src={team03} className="mr-0 md:mr-3 lg:mr-10" alt="" />
            <div className="mt-10 mb-5 md:mb-0">
              <h4 className="text-xl font-bold">Michael Brown</h4>
              <p className="text-lg">Senior SEO Specialist</p>
            </div>
            <div className="absolute top-5 right-5">
              <img src={linkedIn} alt="" />
            </div>
          </div>
          <hr className="my-5" />
          <p className="text-lg">
            5+ years of experience in SEO and content creation. Proficient in
            keyword research and on-page optimization
          </p>
        </div>
        <div className="p-5 rounded-4xl shadow-[0px_5px_0px_0px_rgba(0,0,0,1)] border-1 border-black relative text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center">
            <img src={team04} className="mr-0 md:mr-3 lg:mr-10" alt="" />
            <div className="mt-10 mb-5 md:mb-0">
              <h4 className="text-xl font-bold">Emily Johnson</h4>
              <p className="text-lg">PPC Manager</p>
            </div>
            <div className="absolute top-5 right-5">
              <img src={linkedIn} alt="" />
            </div>
          </div>
          <hr className="my-5" />
          <p className="text-lg">
            3+ years of experience in paid search advertising. Skilled in
            campaign management and performance analysis
          </p>
        </div>
        <div className="p-5 rounded-4xl shadow-[0px_5px_0px_0px_rgba(0,0,0,1)] border-1 border-black relative text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center">
            <img src={team05} className="mr-0 md:mr-3 lg:mr-10" alt="" />
            <div className="mt-10 mb-5 md:mb-0">
              <h4 className="text-xl font-bold">Brian Williams</h4>
              <p className="text-lg">Social Media Specialist</p>
            </div>
            <div className="absolute top-5 right-5">
              <img src={linkedIn} alt="" />
            </div>
          </div>
          <hr className="my-5" />
          <p className="text-lg">
            4+ years of experience in social media marketing. Proficient in
            creating and scheduling content, analyzing metrics, and building
            engagement
          </p>
        </div>
        <div className="p-5 rounded-4xl shadow-[0px_5px_0px_0px_rgba(0,0,0,1)] border-1 border-black relative text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center">
            <img src={team06} className="mr-0 md:mr-3 lg:mr-10" alt="" />
            <div className="mt-10 mb-5 md:mb-0">
              <h4 className="text-xl font-bold">Sarah Kim</h4>
              <p className="text-lg">Content Creator</p>
            </div>
            <div className="absolute top-5 right-5">
              <img src={linkedIn} alt="" />
            </div>
          </div>
          <hr className="my-5" />
          <p className="text-lg">
            2+ years of experience in writing and editing Skilled in creating
            compelling, SEO-optimized content for various industries
          </p>
        </div>
      </div>
      <div className="flex justify-end p-5 lg:p-0">
        <a
          href="#"
          className="inline-flex text-xl px-5 py-3 bg-black rounded-xl text-white my-10 "
        >
          See all team
        </a>
      </div>
    </div>
  );
}

export default Team;
