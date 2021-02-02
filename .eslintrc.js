module.exports = {
    extends: [
        'airbnb-base',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['prettier', 'json', 'no-loops', 'filenames', 'react-hooks'],
    parserOptions: {
        ecmaVersion: 10,
        sourceType: 'module',
    },
    rules: {
        'no-use-before-define': ['error', { functions: false }],
        'no-unused-vars': 'warn',
        'no-loops/no-loops': 'error',
        'promise/always-return': 'error',
        'promise/no-return-wrap': 'error',
        'promise/param-names': 'error',
        'promise/catch-or-return': 'error',
        'promise/no-native': 'error',
        'promise/no-nesting': 'error',
        'promise/no-promise-in-callback': 'error',
        'promise/no-callback-in-promise': 'error',
        'promise/avoid-new': 'error',
        'promise/no-new-statics': 'error',
        'promise/no-return-in-finally': 'error',
        'promise/valid-params': 'error',
        'no-secrets/no-secrets': 'error',
        'filenames/match-regex': ['error', '^[a-zA-Z1-9-.]+$'],
        'filenames/match-exported': [
            'error',
            [null, 'snake', 'kebab', 'camel', 'pascal'],
            '\\.test$',
        ],
        'filenames/no-index': 'off',
        'import/no-commonjs': 'error',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off', // To make it easier using modules like module-alias
        'no-param-reassign': ['error', { props: false }],
        'lodash/prefer-lodash-method': 'off',
        'security/detect-object-injection': 'off',
        'class-methods-use-this': 'off',
        '@revved/immutable/no-let': 'error',
        '@revved/immutable/no-this': 'error',
        '@revved/immutable/no-mutation': [
            'error',
            {
                exceptions: [
                    {
                        object: 'module',
                        property: 'exports',
                    },
                    {
                        property: 'defaultProps',
                    },
                    {
                        property: 'propTypes',
                    },
                ],
            },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'baseui/deprecated-theme-api': 'warn',
        'baseui/deprecated-component-api': 'warn',
        'baseui/no-deep-imports': 'warn',
    },
    overrides: [
        {
            files: ['src/pages/*'],
            rules: {
                'filenames/match-regex': 'off',
                'filenames/match-exported': 'off',
            },
        },
    ],
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx'],
            },
        },
    },
}
