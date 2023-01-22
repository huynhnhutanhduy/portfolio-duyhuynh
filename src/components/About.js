import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300 pt-20 sm:pt-0">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
        </div>
        <div className="w-full flex flex-col gap-8 my-8">
          <div className="text-4xl font-bold">
            <p>Hi, I'm Duy. Nice to meet you.</p>
          </div>
          <div>
            <p className="text-justify leading-loose">
              I am passionate about acquiring more and more knowledge and developing myself
              with the desire to put the skills I already know into practice so that I can find
              ways to effectively optimize the user interface. I would like to work in a young
              and dynamic environment so that I can develop my skills in solving problems,
              finding ways to optimize user efficiency as well as contributing to the company's
              benefit. My goal is to become a professional Frontend Developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
