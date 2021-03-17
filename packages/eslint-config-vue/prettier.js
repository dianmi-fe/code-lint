module.exports = {
    extends: ['@dianmi-fe/eslint-config/prettier'],
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
