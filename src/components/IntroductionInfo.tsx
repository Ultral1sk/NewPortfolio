import React from "react";
import Image from "next/image";

import { Chip } from "@/src/components/Chip";

import JovanWithLaptop from "@/public/assets/global/JovanWithLaptop.png";
import Arrow from "@/public/assets/global/down-arrow.png";
import homeIconSrc from "@/public/assets/icons/home.png";

import "@/src/components/IntroductionInfo.scss";

const DetailInfo = ({ title, subtitle, className }) => (
  <section className={className}>
    <h2>{title}</h2>
    <p>{subtitle}</p>
  </section>
);

const ImageInfo = ({ src, alt, title }) => (
  <section className="introduction-image-controller">
    <Image width={220} src={src} alt={alt} />
    <strong className="image-info">{title}</strong>
    <Image className="image-arrow" width={15} src={Arrow} alt="Arrow Icon" />
  </section>
);

const PersonalInfo = ({ name, role, description, className }) => (
  <section className={className}>
    <h1>
      Hi, my name is <strong>{name}</strong>,<br />I am a {role}.
    </h1>
    <p>{description}</p>
  </section>
);

export const IntroductionInfo = () => {
  return (
    <div className="introduction-info">
      <Chip
        title="Introduction"
        icon={<Image src={homeIconSrc} alt="Introduction" />}
      />
      <IntroductionInfo.PersonalInfo
        className="introduction-personal-info"
        name="Jovan"
        role="Full-Stack Developer"
        description="I Develop and Design beautiful things on the Internet. Simple as that :)."
      />
      <div className="introduction-info-content">
        <a href="#" className="introduction-image-info">
          <IntroductionInfo.ImageInfo
            src={JovanWithLaptop}
            alt="Introduction"
            title="Projects"
          />
        </a>
        <div className="introduction-info-content-text">
          <IntroductionInfo.DetailInfo
            className="introduction-detail-info"
            title="3+"
            subtitle="Years Of Experience"
          />
          <IntroductionInfo.DetailInfo
            className="introduction-detail-info"
            title="5"
            subtitle="Projects Completed"
          />
        </div>
      </div>
    </div>
  );
};

IntroductionInfo.PersonalInfo = PersonalInfo;
IntroductionInfo.ImageInfo = ImageInfo;
IntroductionInfo.DetailInfo = DetailInfo;
