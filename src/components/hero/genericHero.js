import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Markdown from "react-markdown";


import { StaticImage } from "gatsby-plugin-image";
import BreadCrumb from "../breadcrumb";

import "./banner.css";

function HeroBanner({ location, Hero }) {
  const { Banner, Heading, description } = Hero;
  return (
    <>
      <div className="w-full pt-5 md:py-20 md:mb-4 bg-black relative">
        <BreadCrumb location={location} />
        <Img
          className="section-heading w-full absolute object-cover inset-0 flex flex-col items-start"
          fluid={Banner.localFile.childImageSharp.fluid}
          formats={["auto", "avif", "webp", "png"]}
          height={690}
          alt="A corgi smiling happily"
        />

        <div className="container py-8">
          <div
            className="w-full flex flex-col md:flex-row 
          items-center md:items-start justify-items-center text-white group relative"
          >
            <div className="md:w-2/3">
              <div className="md:mb-4 text-center md:text-left">
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
      </div>
    </>
  );
}

export default HeroBanner;
