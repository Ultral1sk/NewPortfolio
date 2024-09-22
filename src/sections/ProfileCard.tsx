"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { Card } from "@/src/components/Card";
import { MobileNavigation } from "@/src/components/MobileNavigation";

import "@/src/sections/ProfileCard.scss";

import data from "src/data.json";
import { useWindowWidth } from "@/src/hooks/useWindowWidth";

export const ProfileImage = ({
  images,
  alt,
  width = 550,
  height = 485,
  handleOpenBorder,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasScrolledDown = useRef(false);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = calculateScrollPercentage();

      if (windowWidth <= 1023) {
        if (scrollPercentage > 2 && !hasScrolledDown.current) {
          updateImageAndBorder(3, true);
        } else if (scrollPercentage < 2 && hasScrolledDown.current) {
          updateImageAndBorder(4, false);
        }
      } else {
        if (scrollPercentage > 0 && !hasScrolledDown.current) {
          updateImageAndBorder(1, true);
        } else if (scrollPercentage === 0 && hasScrolledDown.current) {
          updateImageAndBorder(2, false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleOpenBorder]);

  const calculateScrollPercentage = () => {
    const { scrollY, innerHeight } = window;
    const { scrollHeight } = document.documentElement;
    return (scrollY / (scrollHeight - innerHeight)) * 100;
  };

  const updateImageAndBorder = (imageIndex, isBorderOpen) => {
    setCurrentImageIndex(imageIndex);
    handleOpenBorder(isBorderOpen);
    hasScrolledDown.current = isBorderOpen;
  };

  return (
    <Image
      unoptimized
      width={width}
      height={height}
      className="card-profile-image"
      src={images[currentImageIndex]}
      alt={alt}
      style={{ objectFit: "cover" }}
    />
  );
};

const SocialIcon = ({ href, iconSrc, name }) => (
  <a
    className="profile-card-icon-border"
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    <Image
      width={18}
      height={18}
      className="profile-card-icon"
      src={iconSrc}
      alt={name}
    />
  </a>
);

const ContactButton = ({ iconSrc, text }) => (
  <a href="#Contact" className="profile-card-button">
    <Image
      className="profile-card-icon-button"
      width={18}
      height={18}
      src={iconSrc}
      alt={`${text} Icon`}
    />
    {text}
  </a>
);

export const ProfileCard = () => {
  const { icons } = data.profileCardInfo;
  const { jovan, contact } = data.profileCardInfo.general;

  const [openCardBorder, setOpenCardBorder] = useState(false);

  const handleOpenBorder = (shouldOpen: boolean) => {
    setOpenCardBorder(shouldOpen);
  };

  return (
    <div className={openCardBorder ? "open-border" : "profile-card"}>
      <Card
        cardTitle="Jovan"
        subTitle="Software Developer"
        image={
          <ProfileCard.ProfileImage
            images={jovan.images}
            alt={jovan.name}
            handleOpenBorder={handleOpenBorder}
          />
        }
        imageTitle={
          <span>
            jderebanoski@gmail.com <br /> Based in Essen, Germany
          </span>
        }
      >
        <div className="profile-card-content">
          <p>© 2024 Jovan. All Rights Reserved</p>
          <div className="profile-card-icon-controller">
            {icons.map((icon) => (
              <ProfileCard.SocialIcon key={icon.href} {...icon} />
            ))}
          </div>
          <ProfileCard.ContactButton
            iconSrc={contact.iconSrc}
            text="CONTACT ME!"
          />
        </div>
      </Card>
      <nav className="mobile-navigation">
        <MobileNavigation />
      </nav>
      <div className="width"></div>
    </div>
  );
};

ProfileCard.ProfileImage = ProfileImage;
ProfileCard.SocialIcon = SocialIcon;
ProfileCard.ContactButton = ContactButton;
