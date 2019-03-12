module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `Вомарт. Опалення. Сантехніка. Кодиціонування.`,
    description: `Вомарт - компанія, що займається монтажем, проектування та підтримкою індивідуального опалення, сантехнічних мереж, систем кондиціонування. Встановлюємо газові та твердопаливні котли. Займаємося ремонтом газових та твердопаливних котлів. Продаємо необхідне обладнання.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ff7610`,
        theme_color: `#ff7610`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography.js`,
      },
    },
  ],
}
