import React from "react";
import Img from "gatsby-image";

import BreadCrumb from "../breadcrumb";

import "./banner.css";

function HeroBanner({ location, Hero }) {
  const { Banner, Heading, description } = Hero;
  return (
   
      <div className="w-full px-8 lg:px-32 xl:px-48 py-16 md:py-32 md:mb-4 bg-black relative">
        <BreadCrumb location={location} />
        <Img
          className="section-heading w-full absolute object-cover inset-0 flex flex-col items-start"
          fluid={Banner.localFile.childImageSharp.fluid}
          formats={["auto", "avif", "webp", "png"]}
          height={690}
          alt={Heading}
        />

        <div className="py-8">
          <div className="w-full text-white group relative">
            <div className="md:mb-4">
              <header>
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold mb-2 md:mb-6 font-wotfard">
                  {Heading}
                </h1>
              </header>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
 
  );
}

export default HeroBanner;
