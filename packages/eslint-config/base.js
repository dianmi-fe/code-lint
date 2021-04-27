module.exports = {
    extends: ['airbnb-base'],
    parser: 'babel-eslint',
    parserOptions: {
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
    env: {
        es6: true,
        commonjs: true,
        browser: true,
        node: true
    },
    rules: {
        camelcase: 'off',
        'class-methods-use-this': 'off',
        'consistent-return': 'off',
        'func-names': 'off',
        'global-require': 'off',
        'guard-for-in': 'off', // 与 no-restricted-syntax 重复
        'no-console': 'off',
        'no-plusplus': 'off',
        /**
         * 禁止变量名与上层作用域内的已定义的变量名重复
         */
        'no-shadow': 'off',

        'no-continue': 'warn',
        'no-param-reassign': 'warn',
        'no-underscore-dangle': 'warn',

        'no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
                allowTernary: true,
                allowTaggedTemplates: true
            }
        ],
        'prefer-destructuring': ['error', { object: true, array: false }],

        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off'
    }
}
