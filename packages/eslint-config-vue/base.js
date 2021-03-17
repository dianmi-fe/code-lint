module.exports = {
    extends: [
        '@dianmi-fe/eslint-config/base',
        'plugin:vue/recommended',
        'plugin:vue/strongly-recommended',
        'plugin:vue/essential'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@babel/eslint-parser',
        // https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser#additional-parser-configuration
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            globalReturn: false,
            impliedStrict: true,
            jsx: true
        },
        requireConfigFile: false,
        allowImportExportEverywhere: false
    },
    rules: {
        'vue/no-reserved-keys': 'warn',
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'any'
                }
            }
        ]
    }
}
