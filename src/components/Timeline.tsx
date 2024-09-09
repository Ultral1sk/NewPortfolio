import React from "react";

import "@/src/components/Timeline.scss";

interface TimelineProps {
  year: string;
  position: string;
  company: string;
  type: string;
}

export const Timeline = ({ year, position, company, type }: TimelineProps) => {
  return (
    <div className="timeline-controller">
      <div className="timeline-block">
        <div className="container">
          <div className="marker"></div>
        </div>
        <div className="timeline-content">
          <h5 className="timeline-year">{year}</h5>
          <h2 className="timeline-position">{position}</h2>
          <p className="timeline-company">{company}</p>
          <span className="timeline-type">{type}</span>
        </div>
      </div>
    </div>
  );
};
