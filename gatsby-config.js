/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `3_portfolio_v2`,
    description: 'TO WRITE',
    siteDefaultLang: 'fr',
    author: '@Gsquare',
    linkedInUsername: 'Gabriel G.',
    githubUsername: 'CookedIdeas',
    image: './src/assets/android-chrome-192x192.png',
    siteUrl: `https://www.gabrielgourcerol.com`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    'gatsby-plugin-svgr',
    `gatsby-plugin-sass`,
    `gatsby-plugin-recaptcha`,
    'gatsby-plugin-htaccess',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/1_assets/images`,
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/1_assets/images/icon.svg',
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Raleway',
              variants: ['300', '400', '700'],
            },
            {
              family: 'Source Code Pro',
              variants: ['400', '700'],
            },
          ],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -70,
      },
    },
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        RewriteBase: '/custom/',
        https: true,
        www: false,
        SymLinksIfOwnerMatch: true,
        host: 'gabrielgourcerol.com', // if 'www' is set to 'false', be sure to also remove it here!
      },
    },
  ],

  flags: {
    DEV_SSR: true,
  },
};
