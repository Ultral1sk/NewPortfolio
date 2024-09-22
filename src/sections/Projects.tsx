import React from "react";
import Image from "next/image";

import { Chip } from "@/src/components/Chip";
import { Card } from "@/src/components/Card";

import projectsIcon from "@/public/assets/icons/projects.png";

import "@/src/sections/Projects.scss";

import data from "src/data.json";

export const Projects = () => {
  return (
    <div className="projects">
      <Chip
        title="Projects"
        icon={<Image src={projectsIcon} alt="Projects" />}
      />
      <h2 className="projects-info-title">
        My
        <strong> Work</strong>
      </h2>
      <section className="project-cards">
        {data.projects.map((project) => {
          return (
            <Card
              key={project.name}
              imageTitle={project.name}
              cardTitle={""}
              subTitle={""}
              image={
                <></>
                // <Image
                //   width={300}
                //   height={200}
                //   src={project.iconSrc}
                //   alt={project.name}
                // />
              }
            >
              <h5>{project.publish}</h5>
              {/* <button>github</button> */}
              {/* <button>open</button> */}
            </Card>
          );
        })}
      </section>
    </div>
  );
};
