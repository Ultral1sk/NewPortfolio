"use client";
import React, { useState } from "react";
import "./MobileNavigation.scss";

import data from "src/data.json";

const NavigationLink = ({ link, name, onClick }) => (
  <a href={link} onClick={onClick}>
    {name}
  </a>
);

const NavigationButton = ({ isOpen, onClick }) => (
  <button
    onClick={onClick}
    className={`navigation-button navigation-menu-toggle ${isOpen ? "active" : ""}`}
  >
    <div className="navigation-menu-bar-controller">
      <div className="navigation-menu-bar" data-position="top" />
      <div className="navigation-menu-bar" data-position="bottom" />
    </div>
  </button>
);

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => setIsOpen((prev) => !prev);

  return (
    <nav>
      <div
        className="navigation-overlay"
        style={{ height: isOpen ? "100vh" : "0" }}
      >
        <div className="navigation-overlay-content">
          {data.navigationLinks.map(({ link, name }) => (
            <NavigationLink
              key={link}
              link={link}
              name={name}
              onClick={toggleNavigation}
            />
          ))}
        </div>
      </div>
      <div className="navigation-button-controller">
        <NavigationButton isOpen={isOpen} onClick={toggleNavigation} />
      </div>
    </nav>
  );
};
