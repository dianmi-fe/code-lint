module.exports = {
    extends: ['prettier'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error'

        // https://github.com/prettier/eslint-config-prettier#arrow-body-style-and-prefer-arrow-callback
        // 'arrow-body-style': 'off',
        // 'prefer-arrow-callback': 'off',
    }
}
