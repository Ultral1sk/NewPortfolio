import React from "react";
import Image from "next/image";

import { Chip } from "@/src/components/Chip";
import { Card } from "@/src/components/Card";

import projectsIcon from "@/public/assets/icons/projects.png";

import gamesShopSrc from "@/public/assets/global/games-shop.png";

import "@/src/sections/Projects.scss";

export const Projects = () => {
  return (
    <div className="projects">
      <Chip
        title="Projects"
        icon={<Image src={projectsIcon} alt="Projects" />}
      />
      <h2 className="projects-info-title">Projects</h2>
      <section className="project-cards">
        <Card
          cardTitle={""}
          imageTitle={"Games Shop Project 1"}
          subTitle={""}
          imageSrc={gamesShopSrc}
        >
          <button>github</button>
          <button>open</button>
        </Card>
        <Card
          cardTitle={""}
          imageTitle={"Games Shop Project 2"}
          subTitle={""}
          imageSrc={gamesShopSrc}
        >
          <button>github</button>
          <button>open</button>
        </Card>
        <Card
          cardTitle={""}
          imageTitle={"Games Shop Project 3"}
          subTitle={""}
          imageSrc={gamesShopSrc}
        >
          <button>github</button>
          <button>open</button>
        </Card>

        <Card
          cardTitle={""}
          imageTitle={"Games Shop Project 4"}
          subTitle={""}
          imageSrc={gamesShopSrc}
        >
          <button>github</button>
          <button>open</button>
        </Card>
      </section>
    </div>
  );
};
