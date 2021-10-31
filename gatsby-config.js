const config = require("./config/website");

module.exports = {
  siteMetadata: {
    siteUrl: `http://danielphilipjohnson.blog/`,
    title: config.siteTitle,
    twitterHandle: config.twitterHandle,
    description: config.siteDescription,
    keywords: config.keywords,
    canonicalUrl: config.siteUrl,
    image: config.siteLogo,
    author: {
      name: config.author,
      minibio: config.minibio,
    },
    organization: {
      name: config.organization,
      url: config.siteUrl,
      logo: config.siteLogo,
    },
    social: {
      twitterHandle: config.twitterHandle,
      twitter: config.twitter,
      fbAppID: "",
      github: config.github,
      linkedin: config.linkedin,
      youtube: config.youtube,
    },
    image: config.image,
  },
  plugins: [
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        collectionTypes: [
          "article",
          "category",
          "series",
          "tutorial",
          "writer",
        ],
        singleTypes: [
          `homepage`,
          `seriespage`,
          `global`,
          `aboutpage`,
          `archivepage`,
          `catergoriespage`,
          `latest-page`,
          `tutorial-page`,
        ],
        queryLimit: 1000,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blogs Daniel Philip Johnson`,
        short_name: `Daniel Philip Johnson`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#1A011E`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.

        display: `standalone`,
        icons: [
          {
            src: `/favicons/apple-icon-57x57.png`,
            sizes: `57x57`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-icon-60x60.png`,
            sizes: `60x60`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-icon-76x76.png`,
            sizes: `76x76`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-icon-114x114.png`,
            sizes: `114x114`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-icon-120x120.png`,
            sizes: `120x120`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-icon-152x152.png`,
            sizes: `152x152`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-icon-180x180.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: "/images/icon.png",
            type: "image/png",
            sizes: "512x512",
          },
          {
            src: `/favicmapons/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about/`, `/`],
      },
    },
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    "gatsby-plugin-robots-txt",
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             title
    //             description
    //             siteUrl
    //             site_url: siteUrl
    //           }
    //         }
    //       }
    //     `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allStrapiArticle } }) => {
    //           return allStrapiArticle.nodes.map((article) => {
    //             return Object.assign({}, article.description, {
    //               description: article.excerpt,
    //               date: article.published_at,
    //               url: site.siteMetadata.siteUrl + article.slug,
    //               guid: site.siteMetadata.siteUrl + article.slug,
    //               // custom_elements: [{ "content:encoded": edge.node.html }],
    //             });
    //           });
    //         },
    //         query: `
    //           {
    //              allStrapiArticle( sort: { order: DESC}) {
    //                 nodes {
    //                   author {
    //                     name
    //                   }
    //                   title
    //                   slug
    //                   published_at
    //                   category {
    //                     name
    //                   }
    //                   description
    //                   excerpt
    //                 }
    //               }
    //           }
    //         `,
    //         output: "/rss.xml",
    //         title: "Blogs Daniel Philip Johnson",
    //         // optional configuration to insert feed reference in pages:
    //         // if `string` is used, it will be used to create RegExp and then test if pathname of
    //         // current page satisfied this regular expression;
    //         // if not provided or `undefined`, all pages will have feed reference inserted
    //         match: "^/blogs/",
    //       },
    //     ],
    //   },
    // },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-fontawesome-css`,
  ],
};
