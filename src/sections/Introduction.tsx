import React from "react";

import "@/src/sections/Introduction.scss";

import Image from "next/image";

import { Chip } from "@/src/components/Chip";

import JovanWithLaptop from "@/public/assets/global/JovanWithLaptop.png";
import Arrow from "@/public/assets/global/down-arrow.png";
import homeIconSrc from "@/public/assets/icons/home.png";

import "@/src/sections/Introduction.scss";

const DetailInfo = ({ title, subtitle, className }) => (
  <section className={className}>
    <h2>{title}</h2>
    <p>{subtitle}</p>
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
    <div className="introduction">
      <Chip
        title="Introduction"
        icon={<Image src={homeIconSrc} alt="Introduction" />}
      />
      <IntroductionInfo.PersonalInfo
        className="introduction-personal-info"
        name="Jovan"
        role="Software Developer"
        description="I Develop and Design beautiful things on the Internet. Simple as that :)."
      />
      <div className="introduction-content">
        <IntroductionInfo.DetailInfo
          className="introduction-detail-info"
          title="4"
          subtitle="Years Of Experience"
        />

        <Image
          className="introduction-image zoom-in-out"
          src={JovanWithLaptop}
          alt="Introduction"
          layout="responsive"
        />

        <IntroductionInfo.DetailInfo
          className="introduction-detail-info"
          title="6"
          subtitle="Projects Completed"
        />
      </div>
    </div>
  );
};

export const Introduction = () => {
  return <IntroductionInfo />;
};

IntroductionInfo.PersonalInfo = PersonalInfo;
IntroductionInfo.DetailInfo = DetailInfo;
