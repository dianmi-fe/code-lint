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
        'no-console': 'off'
    }
}
