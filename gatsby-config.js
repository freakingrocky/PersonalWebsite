require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE
const path = require(`path`)

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // Of course you can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
    siteTitle: `Rocky`,
    siteTitleAlt: `Rakshan Sharma`,
    siteHeadline: `Rocky Portfolio`,
    siteUrl: `https://freakingrocky.github.io`,
    siteDescription: `Rocky (Rakshan Sharma) Profile- Musician, Aspiring AI Engineer | Amateur Web Developer`,
    siteLanguage: `en`,
    siteImage: `./static/android-chrome-512x512.png`,
    author: `Rakshan Sharma`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocky Portfolio`,
        short_name: `Rocky`,
        description: `Rocky (Rakshan Sharma) Profile- Musician, Aspiring AI Engineer | Amateur Web Developer`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
