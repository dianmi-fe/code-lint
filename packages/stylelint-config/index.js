module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-rational-order',
        'stylelint-config-prettier'
    ],
    plugins: ['stylelint-prettier', 'stylelint-order', 'stylelint-scss'],
    rules: {
        'prettier/prettier': true,
        'order/order': [
            'custom-properties',
            'dollar-variables',
            'declarations',
            'rules',
            'at-rules'
        ],
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true
    }
}
