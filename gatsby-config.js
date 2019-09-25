module.exports = {
  siteMetadata: {
    title: 'neok\'s blog',
    description: 'JavaScript Developer neok\'s dev blog.',
    keywords: '자바스크립트, JavaScript, React, Node.js, devlog, algorithm',
    url: 'http://neok.netlify.com/post',
    image: '/static/images/ball.png',
    rights: '©2019 neok All rights reserved.',
  },  
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdowns`,
        path: `${__dirname}/src/pages/post`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
  ],
}
