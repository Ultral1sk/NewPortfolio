import React from "react";
import Image from "next/image";

import { Chip } from "@/src/components/Chip";
import { Timeline } from "@/src/components/Timeline";

import resumeIcon from "@/public/assets/icons/resume.png";
import "@/src/sections/Resume.scss";

import data from "src/data.json";

export const Resume = () => {
  return (
    <div className="resume-info">
      <Chip title="Resume" icon={<Image src={resumeIcon} alt="Resume" />} />
      <h2 className="resume-info-title">
        Education & <strong>Experience</strong>
      </h2>

      <div className="resume-info-timelines">
        {data.timeline.map(({ year, position, company, type }) => (
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
