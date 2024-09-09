import React from "react";

import { OtherNavigation } from "./OtherNavigation";

import "@/src/components/Navigation.scss";

export const Navigation = () => {
  return (
    <>
      <nav className="desktop-navigation">
        <OtherNavigation />
      </nav>
    </>
  );
};
