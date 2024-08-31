import React from "react";

import { OtherNavigation } from "./OtherNavigation";
import { MobileNavigation } from "./MobileNavigation";

import "@/src/components/Navigation.scss";

export const Navigation = () => {
  return (
    <>
      <nav className="desktop-navigation">
        <OtherNavigation />
      </nav>
      <nav className="mobile-navigation">
        <MobileNavigation />
      </nav>
    </>
  );
};
