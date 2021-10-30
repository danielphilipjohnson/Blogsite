import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import GenericCards from "../components/generic-cards";
import HeroBanner from "../components/hero/genericHero";
import BreadCrumb from "../components/breadcrumb";


function Series({ location, name, Hero, articles }) {
  
  return (
    <>
        <HeroBanner location={location} Hero={Hero} />
        <GenericCards name={name} articles={articles} />
    </>
  );
}

export default Series;
