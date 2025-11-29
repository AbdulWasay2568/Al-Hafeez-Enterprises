import React from "react";
import useScrollToTop from "../useScrollToTop.jsx";
import ServiceHero from "../components/Services/ServiceHero.jsx";
import ServiceCards from "../components/Services/ServiceCards.jsx";
import ServiceProcess from "../components/Services/ServiceProcess.jsx";
import ServiceCTA from "../components/Services/ServiceCTA.jsx";

function Services() {
  useScrollToTop();
  
  return (
    <div className="font-inter">
      <ServiceHero />
      <ServiceCards />
      <ServiceProcess />
      <ServiceCTA />
    </div>
  );
}

export default Services;
