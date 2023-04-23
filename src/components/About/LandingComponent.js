//main container for about page
import React from "react";
import { AboutSection } from "./AboutSection";
import { IntroSection } from "./IntroSection";
import { MoodWheel } from "./MoodWheel";

export const LandingComponent = () => {
  return (
    <div className="about-page">
      <IntroSection />
      <MoodWheel />
      <AboutSection />
    </div>
  );
};
