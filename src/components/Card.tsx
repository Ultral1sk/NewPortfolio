import React from "react";

import "@/src/components/Card.scss";

interface CardProps {
  cardTitle: string;
  imageTitle: React.ReactNode;
  subTitle: string;
  image: React.ReactNode;
  children: React.ReactNode;
}

export const Card = ({
  cardTitle,
  imageTitle,
  subTitle,
  children,
  image,
}: CardProps) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{cardTitle}</h3>
        <h3>{subTitle}</h3>
      </div>

      <div className="card-image">
        {image}
        <div className="card-image-title">{imageTitle}</div>
      </div>
      <div className="card-content">{children}</div>
    </div>
  );
};
