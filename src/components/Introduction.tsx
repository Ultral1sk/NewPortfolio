import React from "react";
import Image from "next/image";

import { IntroductionInfo } from "@/src/components/IntroductionInfo";
import { ProfileCard } from "@/src/components/ProfileCard";

import "@/src/components/Introduction.scss";

export const Introduction = () => {
  return (
    <div className="introduction">
      <ProfileCard />
      <IntroductionInfo />
    </div>
  );
};
