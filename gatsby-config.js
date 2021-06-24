module.exports = {
    siteMetadata: {
        title: 'gvillaume.github.io',
        siteUrl: 'https://gvillaume.github.io/',
    },
    plugins: [
        '@chakra-ui/gatsby-plugin',
        {
            resolve: 'gatsby-source-contentful',
            options: {
                accessToken: 'c8zR_3QjaioqJ3AhPD04bkvsUBwksHZvjpSMsU9HSP4',
                spaceId: 'cqiijl66plgj',
            },
        },
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'G-9MVVX55KEZ',
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },
        'gatsby-plugin-mdx',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
    ],
}
