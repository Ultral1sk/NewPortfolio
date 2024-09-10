import React from "react";

import { Chip } from "@/src/components/Chip";

import skillsIcon from "@/public/assets/icons/skills.png";
import Image from "next/image";
import { Card } from "../components/Card";

import htmlIcon from "@/public/assets/skills/html.png";
import cssIcon from "@/public/assets/skills/css.png";
import javaScriptIcon from "@/public/assets/skills/javascript.png";
import pythonIcon from "@/public/assets/skills/python.png";
import typeScriptIcon from "@/public/assets/skills/typescript.png";
import reactIcon from "@/public/assets/skills/react.png";
import materialUIIcon from "@/public/assets/skills/materialui.png";
import djangoIcon from "@/public/assets/skills/django.png";
import webpackIcon from "@/public/assets/skills/webpack.png";
import dockerIcon from "@/public/assets/skills/docker.png";
import jiraIcon from "@/public/assets/skills/jira.png";
import gitIcon from "@/public/assets/skills/gitlab.png";
import scssIcon from "@/public/assets/skills/scss.png";
import figmaIcon from "@/public/assets/skills/figma.png";

import "@/src/sections/Skills.scss";

const languages = [
  { name: "HTML", iconSrc: htmlIcon },
  { name: "CSS", iconSrc: cssIcon },
  { name: "JavaScript", iconSrc: javaScriptIcon },
  { name: "TypeScript", iconSrc: typeScriptIcon },
  { name: "Python", iconSrc: pythonIcon },
];

const frameworks = [
  { name: "React", iconSrc: reactIcon },
  { name: "Django", iconSrc: djangoIcon },
  { name: "Material UI", iconSrc: materialUIIcon },
  // { name: "Cypress", iconSrc: cypressIcon },
];

const tools = [
  { name: "Webpack", iconSrc: webpackIcon },
  { name: "Docker", iconSrc: dockerIcon },
  { name: "Jira", iconSrc: jiraIcon },
  { name: "Git", iconSrc: gitIcon },
  { name: "Scss", iconSrc: scssIcon },
  { name: "Figma", iconSrc: figmaIcon },
];

export const Skills = () => {
  return (
    <div>
      <Chip title="Skills" icon={<Image src={skillsIcon} alt="Skills" />} />
      <h2 className="skills-info-title">
        Languages, <span>Frameworks</span> & Tools
      </h2>
      <section className="programming-languages">
        {languages.map((language) => {
          return (
            <div className="skills-card">
              <Card
                cardTitle={""}
                imageTitle={language.name}
                imageSrc={language.iconSrc}
                subTitle={""}
              >
                <></>
              </Card>
            </div>
          );
        })}
      </section>
      <section className="frameworks">
        {frameworks.map((framework) => {
          return (
            <div className="skills-card">
              <Card
                cardTitle={""}
                imageTitle={framework.name}
                imageSrc={framework.iconSrc}
                subTitle={""}
              >
                <></>
              </Card>
            </div>
          );
        })}
      </section>
      <section className="tools">
        {tools.map((tool) => {
          return (
            <div className="skills-card">
              <Card
                cardTitle={""}
                imageTitle={tool.name}
                imageSrc={tool.iconSrc}
                subTitle={""}
              >
                <></>
              </Card>
            </div>
          );
        })}
      </section>
    </div>
  );
};
