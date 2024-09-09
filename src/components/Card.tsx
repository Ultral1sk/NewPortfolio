import React from "react";
import Image, { StaticImageData } from "next/image";

import "@/src/components/Card.scss";

interface CardProps {
  cardTitle: string;
  imageTitle: React.ReactNode;
  subTitle: string;
  imageSrc: StaticImageData;
  children: React.ReactNode;
}

export const Card = ({
  cardTitle,
  imageTitle,
  subTitle,
  children,
  imageSrc,
}: CardProps) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{cardTitle}</h3>
        <h3>{subTitle}</h3>
      </div>

      <div className="card-image">
        <Image
          className="card-profile-image"
          height={250}
          src={imageSrc}
          alt={cardTitle}
        />
        <div className="card-image-title">{imageTitle}</div>
      </div>
      <div className="card-content">{children}</div>
    </div>
  );
};
