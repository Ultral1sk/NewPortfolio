import React from "react";
import Image from "next/image";

import { Chip } from "@/src/components/Chip";

import userIcon from "@/public/assets/icons/about.png";
import "@/src/sections/About.scss";

export const AboutInfo = () => {
  return (
    <div className="about-info">
      <h2 className="about-info-title">
        Every Great Idea begins With <br /> An Even
        <strong> Better Story</strong>
      </h2>
      <section className="about-info-content">
        Web developer with 4 years of experience, specializing in transforming
        complex solutions into user-friendly interfaces. Known for an eye for
        design and innovative UI concepts. Background in education with a
        Bachelor's degree in English teaching. Combines technical skills with a
        keen sense of user experience to create intuitive and visually appealing
        web applications. Thrives in collaborative environments with
        like-minded, humorous individuals and is passionate about contributing
        to impactful projects.
      </section>
    </div>
  );
};

export const About = () => {
  return (
    <div className="about">
      <About.Chip title="About" icon={<Image src={userIcon} alt="About" />} />
      <About.AboutInfo />
    </div>
  );
};

About.AboutInfo = AboutInfo;
About.Chip = Chip;
