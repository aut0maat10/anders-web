const languages = require('./src/data/languages');

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    languages
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        // fonts: [`Hammersmith One`, `sans-serif`],
        // fonts: [`Cousine`, `monospace`],
        // fonts: [`Rock Salt`, `cursive`],
        fonts: [`Timmana`, `Rubik\:300,400,700`, `Roboto\:300,400,700`],
        // fonts: [`Rubik`, `sans serif`],
        // fonts: [`Roboto`, `sans serif`],
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
    ],
}
