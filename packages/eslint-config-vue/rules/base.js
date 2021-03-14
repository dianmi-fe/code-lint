module.exports = {
    extends: ['airbnb-base'],
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        es6: true,
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

        'no-continue': 'warn',
        'no-param-reassign': 'warn',
        'no-underscore-dangle': 'warn',

        'no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
                allowTernary: true,
                allowTaggedTemplates: true,
                enforceForJSX: true
            }
        ]
    }
}
