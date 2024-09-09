import React from "react";

import { Navigation } from "@/src/components/Navigation";
import { Introduction } from "@/src/sections/Introduction";
import { About } from "@/src/sections/About";
import { ProfileCard } from "@/src/sections/ProfileCard";

import "@/app/page.scss";

export default function Page() {
  return (
    <div className="page">
      <div className="navigation-section">
        <Navigation />
      </div>
      <div className="profile-card-section">
        <ProfileCard />
      </div>
      <div className="introduction-section">
        <Introduction />
      </div>
      <div className="about-section">
        <About />
      </div>
    </div>
  );
}
