import React from "react";
import Image from "next/image";

import "@/src/components/OtherNavigation.scss";

import data from "src/data.json";

export const OtherNavigation = ({
  visibleSection,
}: {
  visibleSection: string;
}) => {
  return (
    <nav className="other-navigation">
      {data.navigationLinks.map((item) => {
        console.log(item.name);
        return (
          <a key={item.link} href={item.link} className={"navigation-icon"}>
            <Image
              width={18}
              height={18}
              src={item.iconSrc}
              alt={item.name}
              className={` ${visibleSection === item.name ? "active" : ""}`}
            />
            <span className="navigation-icon-name">{item.name}</span>
          </a>
        );
      })}
    </nav>
  );
};
