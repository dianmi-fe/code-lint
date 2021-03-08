# @dianmi-fe/stylelint-config &middot; [![GitHub license](https://img.shields.io/npm/l/@dianmi-fe/stylelint-config)](https://github.com/dianmi-fe/scripts/tree/main/packages/stylelint-config/LICENSE) [![npm version](https://img.shields.io/npm/v/@dianmi-fe/stylelint-config)](https://www.npmjs.com/package/@dianmi-fe/stylelint-config)

a stylelint config for dianmi-fe

## 安装

NPM:

```bash
npm install --save-dev stylelint @dianmi-fe/stylelint-config
```

Yarn:

```bash
yarn add --dev stylelint @dianmi-fe/stylelint-config
```

## 使用

创建 `.stylelintrc.js` 文件, 并写入以下内容

```js
module.exports = {
    extends: ['@dianmi-fe/stylelint-config']
}
```

其他方式请查看 [Stylelint 官方文档](https://stylelint.io/user-guide/configure)
