module.exports = {
    siteMetadata: {
        title: 'gvillaume.github.io',
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-plugin-prettier-eslint',
            // this is the default configuration, override only what you need
            options: {
                cwd: process.cwd(), // path to a directory that should be considered as the current working directory
                watch: true, // format/lint on save
                initialScan: true, // if true, will format/lint the whole project on Gatsby startup
                onChangeFullScanLint: false, // if true, on file save always perform full scan lint
                onChangeFullScanFormat: false, // if true, on file save always perform full scan format
                prettierLast: false, // if true, will run Prettier after ESLint
                ignorePatterns: [
                    '**/node_modules/**/*',
                    '**/.git/**/*',
                    '**/dist/**/*',
                    '.cache/**/*',
                    'public/**/*',
                ], // string or array of paths/files/globs to ignore
                prettier: {
                    patterns: [], // string or array of paths/files/globs to include related only to Prettier
                    ignorePatterns: [], // string or array of paths/files/globs to exclude related only to Prettier
                    customOptions: {
                        arrowParens: 'avoid',
                        endOfLine: 'auto',
                        semi: false,
                        singleQuote: true,
                        tabWidth: 4,
                    }, // see: https://prettier.io/docs/en/options.html
                },
                eslint: {
                    patterns: [], // string or array of paths/files/globs to include related only to ESLint
                    ignorePatterns: [], // string or array of paths/files/globs to exclude related only to ESLint
                    formatter: 'stylish', // set custom or third party formatter
                    maxWarnings: undefined, // number of max warnings allowed, when exceed it will fail Gatsby build
                    emitWarning: true, // if true, will emit lint warnings
                    failOnError: false, // if true, any lint error will fail the build, you may set true only in your prod config
                    failOnWarning: false, // same as failOnError but for warnings
                    plugins: [], // an array of plugins to load for ESLint
                    customOptions: {}, // see: https://eslint.org/docs/developer-guide/nodejs-api#cliengine
                },
            },
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                // Available options and their defaults:
                base64Width: 20,
                forceBase64Format: `png`, // valid formats: png,jpg,webp
                useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
                stripMetadata: true,
                defaultQuality: 50,
                failOnError: true,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `George Villaume Digital Resume`,
                short_name: `George Villaume`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#4aa7cf`,
                display: `standalone`,
                icon: `src/images/icon.png`,
            },
        },
    ],
}
