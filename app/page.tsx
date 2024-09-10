import React from "react";

import { Navigation } from "@/src/components/Navigation";
import { Introduction } from "@/src/sections/Introduction";
import { About } from "@/src/sections/About";
import { ProfileCard } from "@/src/sections/ProfileCard";
import { Resume } from "@/src/sections/Resume";

import { Skills } from "@/src/sections/Skills";
import { Projects } from "@/src/sections/Projects";

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
      <div className="resume-section">
        <Resume />
      </div>
      <div className="skills-section">
        <Skills />
      </div>
      <div className="projects-section">
        <Projects />
      </div>
    </div>
  );
}
