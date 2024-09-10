import React from "react";
import Image from "next/image";

import "@/src/components/OtherNavigation.scss";

import homeIcon from "@/public/assets/icons/home.png";
import aboutIcon from "@/public/assets/icons/about.png";
import resumeIcon from "@/public/assets/icons/resume.png";
import servicesIcon from "@/public/assets/icons/service.png";
import projectsIcon from "@/public/assets/icons/projects.png";
import contactIcon from "@/public/assets/icons/contact.png";
import skills from "@/public/assets/icons/skills.png";

const navigationLinks = [
  { name: "Introduction", link: "#Introduction", iconSrc: homeIcon },
  { name: "About", link: "#About", iconSrc: aboutIcon },
  { name: "Resume", link: "#Resume", iconSrc: resumeIcon },
  { name: "Skills", link: "#Skills", iconSrc: skills },
  { name: "Services", link: "#Services", iconSrc: servicesIcon },
  { name: "Projects", link: "#Projects", iconSrc: projectsIcon },
  { name: "Contact", link: "#Contact", iconSrc: contactIcon },
];

export const OtherNavigation = () => {
  return (
    <nav className="other-navigation">
      {navigationLinks.map((item) => {
        return (
          <a key={item.link} href={item.link} className="navigation-icon">
            <Image width={18} src={item.iconSrc} alt={item.name} />
            <span className="navigation-icon-name">{item.name}</span>
          </a>
        );
      })}
    </nav>
  );
};
