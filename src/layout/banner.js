import React from "react";

function Banner() {
  const styleObj = {
    backgroundColor: "rgba(48,49,70,.64)",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${"https://www.danielphilipjohnson.com/static/showcase1-c58cf64918185dd34948a4d0d8860f05.jpg"})`,
    backgroundOrigin: "padding-box",
    backgroundClip: "border-box",
    backgroundBlendMode: "multiply",
  };
  return (
    <header className="w-full py-20 mb-4" style={styleObj}>
      <div className="container">
        <div className="w-full flex flex-col md:flex-row items-center justify-items-center text-white">
          <figure className="md:w-1/3">
            <img
              className="w-36 md:w-64  object-contain rounded-full mb-4 md:mr-7 bg-gradient-to-r dark:bg-gradient-to-l from-blue-700 to-purple-800 p-2"
              src="https://www.danielphilipjohnson.com/static/profile-90ff2d9e23d36ceb0d775bc4d2fb48f5.jpg"
              alt=""
              height="300"
            />
          </figure>

          <div className="md:w-2/3">
            <div className="mb-4">
              <h1 className="text-6xl font-semibold mb-2">
                Daniel <span style={{ color: "#94c85a" }}>Philip</span> Johnson
              </h1>
              {/* 
            <ul className="flex py-2 mb-4">
              <li className="pr-2">
                <img
                  className="h-8"
                  src="https://img.icons8.com/ios/250/ffffff/linkedin.png"
                  alt=""
                />
              </li>
              <li className="pr-2">
                <img
                  className="h-8"
                  src="https://img.icons8.com/ios/250/ffffff/twitter.png"
                  alt=""
                />
              </li>
              <li className="pr-2">
                <img
                  className="h-8"
                  src="https://img.icons8.com/ios/250/ffffff/youtube-play.png"
                  alt=""
                />
              </li>
              <li className="pr-2">
                <img
                  className="h-8"
                  src="https://img.icons8.com/ios/250/ffffff/source-code.png"
                  alt=""
                />
              </li>
            </ul> */}

              <div className="">
                <p className="text-xl mb-4">
                  Former &lt;Front End Engineer /&gt; at CodeCareer.io who
                  specialied with{" "}
                  <span style={{ color: "#94c85a" }}>#React </span>
                  <span style={{ color: "#94c85a" }}>#Next.js </span>
                  <span style={{ color: "#94c85a" }}>#Gatsby </span>
                  <span style={{ color: "#94c85a" }}>#Javascript </span>
                  <span style={{ color: "#94c85a" }}>#Tailwind </span>
                  <span style={{ color: "#94c85a" }}>#Bootstrap4 </span>
                  <span style={{ color: "#94c85a" }}>#SASS </span>
                </p>

                {/* <p>📍 Cornwall</p>
              <p>🏴󠁧󠁢󠁥󠁮󠁧󠁿 👨‍⚕️ Psychologist turned FrontEndEnginer</p> */}
                <p> 💻 👨‍🎓 BSc | University of Plymouth 🏫 💼 </p>
                <p>Lang | 🇬🇧 🇪🇸</p>
                {/* <a href="https://www.danielphilipjohnson.com/">
                https://www.danielphilipjohnson.com/
              </a> */}
              </div>
            </div>
            <div className="mb-2  md:flex flex-col">
              <div className="mb-2">
                <button className="border border-white-800 px-2 py-1 mr-2">
                  Get in Touch
                </button>
                <button className="border border-white-800 px-2 py-1">
                  About Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <h4>{data.blogs.totalCount} Posts</h4> */}
    </header>
  );
}

export default Banner;
