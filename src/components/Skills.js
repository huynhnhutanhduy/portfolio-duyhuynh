import React from "react";
import { skills } from "../data/data";

const Skills = () => {
  return (
    <div name="skills" className="w-full md:h-screen bg-[#0a192f] text-gray-300 pt-20 md:pt-0">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">Skills</p>
          <p className="my-8">These are the technologies and tools I've worked</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center mb-8">
          {skills.map((item) => (
            <div
              key={item.id}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            >
              <img src={item.image} alt={`${item.name} icon`} className="w-20 mx-auto" />
              <p className="my-4">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
