module.exports = {
    extends: [
        './rules/base',
        './rules/vue',
        './rules/import',
        './rules/prettier'
    ].map(require.resolve),
    rules: {
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
