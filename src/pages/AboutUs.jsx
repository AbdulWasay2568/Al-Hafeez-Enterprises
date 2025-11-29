import React from "react";
import AboutHero from "../components/AboutUs/AboutHero.jsx";
import MissionValues from "../components/AboutUs/MissionValues.jsx";
import TeamSection from "../components/AboutUs/TeamSection.jsx";
import CompanyStory from "../components/AboutUs/CompanyStory.jsx";
import Statistics from "../components/AboutUs/Statistics.jsx";
import useScrollToTop from "../useScrollToTop.jsx";

function AboutUs() {
  useScrollToTop();
  return (
    <div className="font-inter">
      <AboutHero />
      <MissionValues />
      <CompanyStory />
      <TeamSection />
      <Statistics />
    </div>
  );
}

export default AboutUs;
