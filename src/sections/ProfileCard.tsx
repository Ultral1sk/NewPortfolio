"use client"; // Add this directive to make the component a client component
import React from "react";
import Image from "next/image";

import { Card } from "@/src/components/Card";
import { MobileNavigation } from "@/src/components/MobileNavigation";

import jovan from "@/public/Jovan.jpeg";
import linkedin from "@/public/assets/navigation/linkedin.png";
import xing from "@/public/assets/navigation/xing.png";
import github from "@/public/assets/navigation/github.png";
import contactIcon from "@/public/assets/icons/contact.png";

import "@/src/sections/ProfileCard.scss";

const portfolioCardIcons = [
  {
    name: "LinkedIn",
    iconSrc: linkedin,
    href: "https://www.linkedin.com/in/jovan-derebanoski-7a053b153/",
  },
  {
    name: "Xing",
    iconSrc: xing,
    href: "https://www.xing.com/profile/Jovan_Derebanoski/web_profiles?expandNeffi=true",
  },
  { name: "Github", iconSrc: github, href: "https://github.com/Ultral1sk" },
];

export const ProfileCard = () => {
  return (
    <div className="profile-card">
      <Card
        cardTitle="Jovan"
        subTitle="Software Developer"
        imageSrc={jovan}
        imageTitle={
          <span>
            jderebanoski@gmail.com <br /> Based in Essen, Germany
          </span>
        }
      >
        <p>© 2024 Jovan. All Rights Reserved</p>
        <div className="profile-card-icon-controller">
          {portfolioCardIcons.map((info) => {
            return (
              <a
                key={info.href}
                className="profile-card-icon-border"
                href={info.href}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="profile-card-icon"
                  src={info.iconSrc}
                  alt={info.name}
                />
              </a>
            );
          })}
        </div>
        <button className="profile-card-button">
          <span>
            <Image width={18} src={contactIcon} alt="Hire me Icon" />
          </span>
          <span>CONTACT ME!</span>
        </button>
      </Card>
      <nav className="mobile-navigation">
        <MobileNavigation />
      </nav>
    </div>
  );
};
