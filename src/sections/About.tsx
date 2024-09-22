import React from "react";
import Image from "next/image";

import { Chip } from "@/src/components/Chip";

import userIcon from "@/public/assets/icons/about.png";
import cvIcon from "@/public/assets/global/cv.png";

import "@/src/sections/About.scss";

export const AboutInfo = () => {
  return (
    <div className="about-info">
      <div className="about-info-title-controller">
        <h2 className="about-info-title">
          At <strong>Glance</strong>
        </h2>
      </div>
      <section className="about-info-content">
        <section className="about-me-life-bits">
          <h3>
            Life
            <strong> Bits</strong>
          </h3>
          <ul>
            <li> Father</li>
            <li> Former Gamer</li>
            <li> Teacher</li>
            <li> Software Developer</li>
          </ul>
        </section>

        <section className="about-me-speaks">
          <h3>Communicates In</h3>
          <ul>
            <li> Macedonian</li>
            <li> English</li>
            <li> German</li>
            <li> Serbian </li>
            <li> Croatian </li>
          </ul>
        </section>
        <br />
        <section className="about-cv">
          <a href="mailto:jderebanoski@gmail.com?subject=Request%20for%20Your%20CV&body=Dear%20Jovan,%0A%0AI%20hope%20this%20email%20finds%20you%20well.%20I%20was%20wondering%20if%20you%20would%20be%20willing%20to%20share%20your%20CV%20with%20me.%0A%0AI%20would%20greatly%20appreciate%20the%20opportunity%20to%20learn%20more%20about%20your%20professional%20background%20and%20experience.%0A%0AThank%20you%20for%20your%20time%20and%20consideration.%0A%0ABest%20regards,%0A[Your%20Name]">
            <Image
              className="wiggle-image"
              width={200}
              src={cvIcon}
              alt="Jovan's CV"
            />
          </a>
        </section>
        <section className="about-me-general">
          <h3>General</h3>
          Specializing in transforming complex solutions into user-friendly
          interfaces. Known for an eye for design and innovative UI concepts.
          Combines technical skills with a keen sense of user experience to
          create intuitive and visually appealing web applications. Thrives in
          collaborative environments with like-minded, humorous individuals and
          is passionate about contributing to impactful projects. Frequently
          visits tech conferences and is always eager to learn something new.
          Stays up-to-date with the latest industry trends and insights. A good
          listener who values understanding others perspectives and ideas.
        </section>
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
