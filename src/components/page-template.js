import React from "react";

import GenericCards from "../components/generic-cards";
import HeroBanner from "../components/hero/genericHero";

function Series({ location, name, Hero, articles }) {
  
  return (
    <>
        <HeroBanner location={location} Hero={Hero} />
        <GenericCards name={name} articles={articles} />
    </>
  );
}

export default Series;
