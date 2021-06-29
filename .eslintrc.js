module.exports = {
    extends: [
        'airbnb-base',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: [
        'prettier',
        'json',
        'filenames',
        'no-loops',
        'no-secrets',
        'unused-imports',
        'react',
        'react-hooks',
    ],
    parserOptions: {
        ecmaVersion: 10,
        sourceType: 'module',
    },
    rules: {
        'no-use-before-define': ['error', { functions: false }],
        'no-unused-vars': 'warn',
        'no-loops/no-loops': 'error',
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
        'import/no-unresolved': 'error',
        'import/no-deprecated': 'error',
        'import/no-unused-modules': 'error',
        'import/no-unused-vars': 'warn',
        'no-param-reassign': ['error', { props: false }],
        'lodash/prefer-lodash-method': 'off',
        'security/detect-object-injection': 'off',
        'class-methods-use-this': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
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
