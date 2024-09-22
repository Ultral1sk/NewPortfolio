"use client";
import React from "react";

import { Navigation } from "@/src/components/Navigation";
import { Introduction } from "@/src/sections/Introduction";
import { About } from "@/src/sections/About";
import { ProfileCard } from "@/src/sections/ProfileCard";
import { Resume } from "@/src/sections/Resume";

import { Skills } from "@/src/sections/Skills";
import { Projects } from "@/src/sections/Projects";
import { Contact } from "@/src/sections/Contact";

import { useSectionsVisibility } from "@/src/hooks/useSectionsVisibility";
import { useIntersectionObserver } from "@/src/hooks/useIntersectionObserver";

import "@/app/page.scss";

const sectionIds = [
  "Introduction",
  "About",
  "Resume",
  "Skills",
  "Projects",
  "Contact",
];

const AnimatedElement = ({ children }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? 0 : "50px"})`,
        transition: "opacity 0.5s, transform 0.5s",
      }}
    >
      {children}
    </div>
  );
};

export default function Page() {
  const [visibleSection, setRefs] = useSectionsVisibility(sectionIds);

  return (
    <div className="page">
      <div key="navigation-section" className="navigation-section">
        <Navigation visibleSection={visibleSection} />
      </div>
      <div key="profile-card-section" className="profile-card-section">
        <ProfileCard />
      </div>
      <div
        key="instruction-section"
        id="Introduction"
        className="introduction-section"
        ref={setRefs}
      >
        <Introduction />
      </div>
      <div
        key="about-section"
        id="About"
        className="about-section slide-in"
        ref={setRefs}
      >
        <AnimatedElement>
          <About />
        </AnimatedElement>
      </div>
      <div
        key="resume-section"
        id="Resume"
        className="resume-section slide-in"
        ref={setRefs}
      >
        <AnimatedElement>
          <Resume />
        </AnimatedElement>
      </div>
      <div
        key="skills-section"
        id="Skills"
        className="skills-section slide-in"
        ref={setRefs}
      >
        <AnimatedElement>
          <Skills />
        </AnimatedElement>
      </div>
      <div
        key="projects-section"
        id="Projects"
        className="projects-section slide-in"
        ref={setRefs}
      >
        <Projects />
      </div>

      <div
        key="contact-section"
        id="Contact"
        className="contact-section slide-in"
        ref={setRefs}
      >
        <AnimatedElement>
          <Contact />
        </AnimatedElement>
      </div>
    </div>
  );
}
