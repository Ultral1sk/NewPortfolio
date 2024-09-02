import React from "react";
import Image from "next/image";
import Link from "next/link";

import "@/src/components/OtherNavigation.scss";

import homeIcon from "@/public/assets/icons/home.png";
import aboutIcon from "@/public/assets/icons/about.png";
import resumeIcon from "@/public/assets/icons/resume.png";
import servicesIcon from "@/public/assets/icons/service.png";
import projectsIcon from "@/public/assets/icons/projects.png";
import contactIcon from "@/public/assets/icons/contact.png";
import skills from "@/public/assets/icons/skills.png";

const navigationLinks = [
  { name: "Home", link: "1", iconSrc: homeIcon },
  { name: "About", link: "2", iconSrc: aboutIcon },
  { name: "Resume", link: "3", iconSrc: resumeIcon },
  { name: "Skills", link: "", iconSrc: skills },
  { name: "Services", link: "4", iconSrc: servicesIcon },
  { name: "Projects", link: "5", iconSrc: projectsIcon },
  { name: "Contact", link: "6", iconSrc: contactIcon },
];

export const OtherNavigation = () => {
  return (
    <nav className="other-navigation">
      {navigationLinks.map((item) => {
        return (
          <Link key={item.link} href={item.link} className="navigation-icon">
            <Image width={18} src={item.iconSrc} alt={item.name} />
            <span className="navigation-icon-name">{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};
