import React from "react";

import { Navigation } from "@/src/components/Navigation";
import { ProfileCard } from "@/src/components/ProfileCard";
import { Introduction } from "@/src/components/Introduction";

import "@/app/page.scss";

export default function Page() {
  return (
    <div className="page">
      <Navigation />
      <Introduction />
    </div>
  );
}
