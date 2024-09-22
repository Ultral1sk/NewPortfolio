import React from "react";

import { Chip } from "@/src/components/Chip";
import { Card } from "@/src/components/Card";

import Image from "next/image";

import skillsIcon from "@/public/assets/icons/skills.png";

import "@/src/sections/Skills.scss";

import data from "src/data.json";

export const Skills = () => {
  return (
    <div className="skills">
      <Chip title="Skills" icon={<Image src={skillsIcon} alt="Skills" />} />
      <h2 className="skills-info-title">
        Languages, <span>Frameworks</span> & Tools
      </h2>
      <section className="programming-languages">
        <Skills.ProgrammingLanguages />
      </section>
      <section className="frameworks">
        <Skills.Frameworks />
      </section>
      <section className="tools">
        <Skills.Tools />
      </section>
    </div>
  );
};

const ProgrammingLanguages = () => {
  return (
    <>
      {data.skills.languages.map((language) => {
        return (
          <div className="skills-card" key={language.name}>
            <Card
              cardTitle={""}
              subTitle={""}
              imageTitle={language.name}
              image={
                <Image
                  width={200}
                  className="card-profile-image"
                  height={250}
                  src={language.iconSrc}
                  alt={language.name}
                />
              }
            >
              <></>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export const Frameworks = () => {
  return (
    <>
      {data.skills.frameworks.map((framework) => {
        return (
          <div className="skills-card" key={framework.name}>
            <Card
              cardTitle={""}
              subTitle={""}
              imageTitle={framework.name}
              image={
                <Image
                  width={200}
                  className="card-profile-image"
                  height={250}
                  src={framework.iconSrc}
                  alt={framework.name}
                />
              }
            >
              <></>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export const Tools = () => {
  return (
    <>
      {data.skills.tools.map((tool) => {
        return (
          <div className="skills-card" key={tool.name}>
            <Card
              cardTitle={""}
              subTitle={""}
              imageTitle={tool.name}
              image={
                <Image
                  width={200}
                  className="card-profile-image"
                  height={250}
                  src={tool.iconSrc}
                  alt={tool.name}
                />
              }
            >
              <></>
            </Card>
          </div>
        );
      })}
    </>
  );
};

Skills.ProgrammingLanguages = ProgrammingLanguages;
Skills.Frameworks = Frameworks;
Skills.Tools = Tools;
