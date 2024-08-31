"use client";
import React, { useState } from "react";

import "./MobileNavigation.scss";

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickNavigation = () => {
    setIsOpen((prevState) => !prevState); // Toggle isOpen state
  };

  return (
    <nav>
      <div
        className="navigation-overlay"
        style={{ height: isOpen ? "100vh" : "0" }}
      >
        <div className="navigation-overlay-content">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="navigation-button-controller">
        <button
          onClick={handleClickNavigation}
          className={
            isOpen
              ? "navigation-button navigation-menu-toggle active "
              : "navigation-button navigation-menu-toggle"
          }
        >
          <div className="navigation-menu-bar-controller">
            <div className="navigation-menu-bar" data-position="top"></div>
            <div className="navigation-menu-bar" data-position="bottom"></div>
          </div>
        </button>
      </div>
    </nav>
  );
};
