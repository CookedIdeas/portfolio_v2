/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Gabriel G. - Développeur web Full stack pour Saas et autres projets web`,
    description:
      'Voici mon site personnel de développeur web full stack ! Je suis spécialisé dans le développement de solutions Saas avec React.js et Gatsby.js pour le front-end et Node.js et Strapi pour le backend.',
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
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '2',
        matomoUrl: 'https://stats.imaxdev.fr/',
        siteUrl: 'https://gabrielgourcerol.com/',
        disableCookies: true,
      },
    },
  ],

  flags: {
    DEV_SSR: true,
  },
};
