module.exports = {
  siteMetadata: {
    title: "neok's blog",
    description: "Software Engineer neok's dev blog.",
    keywords:
      'neok, neokkk, 자바스크립트, 타입스크립트, 프론트엔드, 개발 블로그, 알고리즘, JavaScript, TypeScript, Vue, React, Node.js, devlog, algorithm',
    url: 'https://neok.netlify.app',
    siteUrl: 'https://neok.netlify.app',
    image: '/images/rec1.png',
    rights: '©2021 neok All rights reserved.',
    twitterUsername: '',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/pages/post`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-ZYNEXYZ2BD',
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-KWLRDP9',
        routeChangeEventName: 'gatsby-route-change',
      },
    },
    {
      resolve: 'gatsby-omni-font-loader',
      options: {
        enableListener: true,
        preconnect: ['https://fonts.googleapis.com'],
        web: [
          {
            name: 'Monserrat',
            file: 'https://fonts.googleapis.com/css?family=Montserrat:800&display=swap',
          },
          {
            name: 'Source Code Pro',
            file: 'https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap',
          },
          {
            name: 'Spoqa Han Sans',
            file: '//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl: siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.nodes.map((node) =>
                Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ 'content:encoded': node.html }],
                })
              ),
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    fields { slug }
                    fileAbsolutePath
                    frontmatter {
                      date
                      tags
                      title
                    }
                    html
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Neokkk's RSS Feed",
            match: '^/blog/',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/sitemap.xml',
        excludes: ['/category/*', '/path/to/page'],
        query: `
          {
            allSitePage {
              nodes {
                path
              }
            }

            site {
              siteMetadata {
                siteUrl
              }
            }  
        }`,
        serialize: ({ path }) => ({
          url: path,
        }),
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {},
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
