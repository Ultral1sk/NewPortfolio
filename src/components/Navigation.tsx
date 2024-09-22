import React from "react";

import { OtherNavigation } from "./OtherNavigation";

import "@/src/components/Navigation.scss";

export const Navigation = ({ visibleSection }: { visibleSection: string }) => {
  return (
    <nav className="desktop-navigation">
      <OtherNavigation visibleSection={visibleSection} />
    </nav>
  );
};
