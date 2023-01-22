import React, { useContext } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUserGraduate, FaBirthdayCake, FaUniversity } from "react-icons/fa";
import { Portfolio } from "../App";

const Experience = () => {
  const { nav } = useContext(Portfolio);

  return (
    <div
      name="experience"
      className="w-full md:h-screen bg-[#0a192f] text-gray-300 pt-20 lg:pt-40"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">Experience</p>
        </div>
        <div className={!nav ? "mt-10" : "hidden"}>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#6b7280", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #6b7280" }}
              date="Sep 2019 - Present"
              iconStyle={{ background: "#6b7280", color: "#fff" }}
              icon={<FaUniversity />}
            >
              <h3 className="vertical-timeline-element-title font-bold">University</h3>
              <h4 className="vertical-timeline-element-subtitle">
                University of Information Technology - VNUHCM
              </h4>
              <p className="italic">Major: E-commerce</p>
              <p className="italic">GPA: 8.0/10.0</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#6b7280", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #6b7280" }}
              date="Sep 2016 - Jun 2019"
              iconStyle={{ background: "#6b7280", color: "#fff" }}
              icon={<FaUserGraduate />}
            >
              <h3 className="vertical-timeline-element-title font-bold">High School</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Nguyen Binh Khiem High School for the Gifted, Vinh Long, Vietnam
              </h4>
              <p className="italic">Graduated</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#6b7280", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #6b7280" }}
              date="2001 - Present"
              iconStyle={{ background: "#6b7280", color: "#fff" }}
              icon={<FaBirthdayCake />}
            >
              <h3 className="vertical-timeline-element-title font-bold">Birthday</h3>
              <p>March 6th 2001</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Experience;
