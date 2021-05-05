import React from "react";
import { Link } from "gatsby";
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

function Banner() {
  return (
    <header className="w-full pt-5 md:py-20 md:mb-4">
      <StaticImage
        className="banner w-full absolute object-cover inset-0 flex flex-col items-start"
        src="../../images/showcase.jpg"
        alt="showcase"
        placeholder="blurred"
        layout="fixed"
        height={590}
      />

      <div className="container">
        <div
          className="w-full flex flex-col md:flex-row 
          items-center justify-items-center text-white group relative"
        >
          <figure className="rounded-full bg-gradient-to-r dark:bg-gradient-to-l from-blue-700 to-purple-800  p-2 mb-4 md:mr-7 ">
            <StaticImage
              className="w-36 md:w-56 lg:w-64 object-contain rounded-full"
              src="../../images/profile.png"
              alt="profile of daniel philip johnson"
              placeholder="blurred"
              layout="fixed"
              width={165}
              height={165}
            />
          </figure>

          <div className="md:w-2/3">
            <div className="md:mb-4 text-center md:text-left">
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold mb-2 md:mb-6">
                Daniel <span style={{ color: "#94c85a" }}>Philip</span> Johnson
              </h1>
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

              <div className="">
                <p className="md:text-xl mb-4">
                  Former &lt;Front End Engineer /&gt; at CodeCareer.io who
                  specialises with{" "}
                  <span className="font-bold" style={{ color: "#94c85a" }}>
                    #React{" "}
                  </span>
                  <span className="font-bold" style={{ color: "#94c85a" }}>
                    #Javascript{" "}
                  </span>
                  <span className="font-bold" style={{ color: "#94c85a" }}>
                    #Tailwind{" "}
                  </span>
                </p>
                <p className="mb-3">
                  I'm documententing my developers journey as a Front-End
                  Engineer in pursuit of becoming a senior.
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
    </header>
  );
}

export default Banner;
