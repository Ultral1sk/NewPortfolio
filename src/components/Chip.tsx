import React from "react";

import "@/src/components/Chip.scss";

interface ChipProps {
  title: string;
  icon: React.ReactNode;
}

export const Chip = ({ title, icon }: ChipProps) => {
  return (
    <div className="chip-controller" id={title}>
      <div className="chip-content">
        <span className="chip-icon">{icon}</span>
        <span className="chip-text">{title}</span>
      </div>
    </div>
  );
};
