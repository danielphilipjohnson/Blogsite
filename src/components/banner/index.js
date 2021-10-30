import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Markdown from "react-markdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { StaticImage } from "gatsby-plugin-image";

import "./banner.css";

export const query = graphql`
  {
    allStrapiHomepage {
      nodes {
        Tags {
          tag
        }
        Banner {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        hero {
          profile
        }
      }
    }
  }
`;

function Banner() {
  const data = useStaticQuery(query);
  const nodes = data.allStrapiHomepage.nodes;


  return (
    <div
      className="w-full pt-5 md:py-20 md:mb-4 bg-black"
      style={{
        height: "600px",
      }}
    >
      <StaticImage
        className="banner w-full absolute object-cover inset-0 flex flex-col items-start"
        src="../../images/showcase.jpg"
        alt="showcase"
        placeholder="none"
        layout="fixed"
        height={690}
        formats={["auto", "avif", "webp", "png"]}
      />
      {nodes.map((item, i) => {
        return (
          <div className="px-8">
            <div
              className="w-full flex flex-col md:flex-row 
          items-center md:items-start justify-items-center text-white group relative"
            >
              <figure className="rounded-full bg-gradient-to-r dark:bg-gradient-to-l from-blue-700 to-purple-800  p-2 mb-4 md:mr-7 ">
                <StaticImage
                  className="profile-img w-36 md:w-56 lg:w-64 object-contain rounded-full relative z-10"
                  src="../../images/profile.png"
                  alt="profile of daniel philip johnson"
                  placeholder="blurred"
                  layout="fixed"
                  width={165}
                  height={165}
                  formats={["AUTO", "PNG", "WEBP", "AVIF"]}
                />
              </figure>

              <div className="md:w-2/3">
                <div className="md:mb-4 text-center md:text-left">
                  <header>
                    <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold mb-2 md:mb-6 font-wotfard">
                      Daniel <span style={{ color: "#94c85a" }}>Philip</span>{" "}
                      Johnson
                    </h1>
                  </header>

                  <ul className="flex justify-center md:justify-start text-2xl md:text-3xl lg:text-5xl mb-2 md:mb-6">
                    <li className="mr-4">
                      <a
                        href="https://www.linkedin.com/in/daniel-philip-johnson/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="linkedin"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </li>
                    <li className="mr-4">
                      <a
                        href="https://twitter.com/danielp_johnson"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="twitter"
                      >
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li className="mr-4">
                      <a
                        href="https://www.instagram.com/danielphilipjohnson/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="instagram"
                      >
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </li>
                    <li className="mr-4">
                      <a
                        href="https://www.youtube.com/c/DanielPhilipJohnson/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="youtube"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </li>
                    <li className="mr-4">
                      <a
                        href="https://github.com/danielphilipjohnson"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="github"
                      >
                        <FontAwesomeIcon icon={faCode} />
                      </a>
                    </li>
                  </ul>

                  <div className="mb-8">
                    <p className="md:text-xl mb-4">
                      <Markdown
                        children={item.hero.profile}
                        escapeHtml={false}
                      />
                    </p>
                    <p className="md:text-xl mb-4">
                      {item.Tags.map((tag) => {
                        return (
                          <span
                            className="font-bold"
                            key={tag.tag}
                            style={{ color: "#94c85a" }}
                          >
                            {tag.tag}{" "}
                          </span>
                        );
                      })}
                    </p>
                  </div>
                </div>
                <div className="mb-2 md:flex flex-col text-center md:text-left">
                  <div className="mb-2">
                    <a
                      href="https://www.danielphilipjohnson.com/contact/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-white-800 px-3 py-2 mr-2"
                    >
                      Get in Touch
                    </a>
                    <Link
                      to="/about/"
                      className="border border-white-800 px-3 py-2"
                    >
                      About Me
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Banner;
