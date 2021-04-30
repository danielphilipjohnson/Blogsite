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

import showcase from "../images/showcase.jpg";

import profileImg from "../images/profile.png";

function Banner() {
  const styleObj = {
    backgroundColor: "rgba(48,49,70,.64)",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${showcase})`,
    backgroundOrigin: "padding-box",
    backgroundClip: "border-box",
    backgroundBlendMode: "multiply",
  };
  return (
    <header className="w-full py-20 mb-4" style={styleObj}>
      <div className="container">
        <div
          className="w-full flex flex-col md:flex-row 
          items-center justify-items-center text-white"
        >
          <figure className=" rounded-full  bg-gradient-to-r dark:bg-gradient-to-l from-blue-700 to-purple-800  p-2 mb-4 md:mr-7 ">
            <StaticImage
              className="w-36 md:w-56 lg:w-64 object-contain rounded-full"
              src="../images/profile.png"
              alt="profile of daniel philip johnson"
              placeholder="blurred"
              layout="fixed"
              width={200}
              height={200}
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
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li className="mr-4">
                  <a
                    href="https://twitter.com/danielp_johnson"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li className="mr-4">
                  <a
                    href="https://www.instagram.com/danielphilipjohnson/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li className="mr-4">
                  <a
                    href="https://www.youtube.com/c/DanielPhilipJohnson/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
                <li className="mr-4">
                  <a
                    href="https://github.com/danielphilipjohnson"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faCode} />
                  </a>
                </li>
              </ul>

              <div className="">
                <p className="md:text-xl mb-4">
                  Former &lt;Front End Engineer /&gt; at CodeCareer.io who
                  specialied with{" "}
                  <span className="font-bold" style={{ color: "#94c85a" }}>
                    #React{" "}
                  </span>
                  <span className="font-bold" style={{ color: "#94c85a" }}>
                    #Next.js{" "}
                  </span>
                  <span className="font-bold" style={{ color: "#94c85a" }}>
                    #Gatsby{" "}
                  </span>
                  <span className="font-bold" style={{ color: "#94c85a" }}>
                    #Javascript{" "}
                  </span>
                  <span className="font-bold" style={{ color: "#94c85a" }}>
                    #Tailwind{" "}
                  </span>
                  <span className="font-bold" style={{ color: "#94c85a" }}>
                    #Bootstrap4{" "}
                  </span>
                  <span className="font-bold" style={{ color: "#94c85a" }}>
                    #SASS{" "}
                  </span>
                </p>

                {/* <p>📍 Cornwall</p>
              <p>🏴󠁧󠁢󠁥󠁮󠁧󠁿 👨‍⚕️ Psychologist turned FrontEndEnginer</p> */}
                {/* <p> 💻 👨‍🎓 BSc | University of Plymouth 🏫 💼 </p>
                <p>Lang | 🇬🇧 🇪🇸</p> */}
                {/* <a href="https://www.danielphilipjohnson.com/">
                https://www.danielphilipjohnson.com/
              </a> */}
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
                <Link to="about" className="border border-white-800 px-3 py-2">
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
