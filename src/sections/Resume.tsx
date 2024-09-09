import React from "react";
import Image from "next/image";

import { Chip } from "@/src/components/Chip";
import { Timeline } from "@/src/components/Timeline";

import resumeIcon from "@/public/assets/icons/resume.png";
import "@/src/sections/Resume.scss";

const timeline = [
  {
    year: "2020 - Present",
    position: "Full-Stack Developer",
    company: "AAP-NDT ( Advanced Automation Protocol In NDT )",
    type: "Work",
  },
  {
    year: "2019 - 2020",
    position: "Full-Stack Developer",
    company: "DCI ( Digital Career Institute )",
    type: "Education",
  },
  {
    year: "2012 - 2016",
    position: "Bachelor's Degree In Education",
    company: "University 'St. Kliment Ohridski' Macedonia / Bitola",
    type: "Education",
  },
];

export const Resume = () => {
  return (
    <div className="resume-info">
      <Chip title="Resume" icon={<Image src={resumeIcon} alt="Resume" />} />
      <h2 className="resume-info-title">
        Education & <strong>Experience</strong>
      </h2>

      <div className="resume-info-timelines">
        {timeline.map(({ year, position, company, type }) => (
          <Timeline
            key={`${year}-${company}`}
            year={year}
            position={position}
            company={company}
            type={type}
          />
        ))}
      </div>
    </div>
  );
};
