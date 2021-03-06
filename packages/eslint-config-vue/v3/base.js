module.exports = {
    extends: [
        '@dianmi-fe/eslint-config/base',
        'plugin:vue/vue3-recommended',
        'plugin:vue/vue3-strongly-recommended',
        'plugin:vue/vue3-essential'
    ],
    plugins: ['vue'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint',
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
        'vue/no-mutating-props': 'warn',
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
