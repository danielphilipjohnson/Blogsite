module.exports = {
  siteTitle: `Daniel Philip Johnson's Blog`, // Navigation and Site Title
  siteTitleAlt: `The personal blog of Daniel Philip Johnson's`, // Alternative Site title for SEO
  siteTitleShort: "danielpjohnson", // short_name for manifest
  siteUrl: process.env.ROOT_URL || "http://danielphilipjohnson.me", // Domain of your site. No trailing slash!
  lang: "en", // Language Tag on <html> element
  pathPrefix: "/",
  siteLogo: "images/logo.png", // Used for SEO and manifest, path to your image you placed in the 'static' folder
  siteDescription:
    "Growing monthly blogs geared towards developers, guides & tutorials to level up your career. I also document my developer journey from junior to senior",
  minibio: `
    Former Front End Engineer at CodeCareer.io who specialises with React | Javascript | Tailwind | Bootstrap 4 | SASS.
  `,
  author: "Daniel Philip Johnson", // Author for schemaORGJSONLD
  organization: "Daniel Philip Johnson Tech LLC",
  organizationUrl: "danielphilipjohnson.com",
  userTwitter: "@danielp_johnson", // Twitter Username
  ogSiteName: "Daniel Philip Johnson", // Facebook Site Name
  ogLanguage: "en_US",
  image: "images/banner.png",
  keywords:
    "reflection blogs, react blogs, Front-End Engineer, Front-End Engineer, London, web development, reactjs, nodejs, graphql",

  // Manifest and Progress color need to change to mine
  // themeColor: "#4147DC",
  // backgroundColor: "#231C42",

  twitter: "https://twitter.com/danielp_johnson/",
  twitterHandle: "@danielp_johnson",
  github: "https://github.com/danielphilipjohnson/",
  linkedin: "https://www.linkedin.com/in/daniel-philip-johnson/",
  youtube: "https://www.youtube.com/c/DanielPhilipJohnson/",
  fbAppID: "",

  // rss: "",
};
