# @dianmi-fe/eslint-config-vue &middot; [![GitHub license](https://img.shields.io/npm/l/@dianmi-fe/eslint-config-vue)](https://github.com/dianmi-fe/scripts/tree/main/packages/eslint-config-vue/LICENSE) [![npm version](https://img.shields.io/npm/v/@dianmi-fe/eslint-config-vue)](https://www.npmjs.com/package/@dianmi-fe/eslint-config-vue)

a eslint config vue for dianmi-fe

## 安装

NPM:

```bash
npm install --save-dev eslint @dianmi-fe/eslint-config-vue
```

Yarn:

```bash
yarn add --dev eslint @dianmi-fe/eslint-config-vue
```

## 使用

创建 `.eslintrc.js` 文件, 并写入以下内容

###### for Vue.js 2.x

```js
module.exports = {
    extends: ['@dianmi-fe/eslint-config-vue']
}
```

###### for Vue.js 3.x

```js
module.exports = {
    extends: ['@dianmi-fe/eslint-config-vue/v3']
}
```

其他方式请查看 [Eslint 官方文档](https://eslint.org/docs/user-guide/configuring/configuration-files)

## 其他

[配置 vscode 快速格式化代码](https://github.com/dianmi-fe/scripts/blob/main/docs/%E9%85%8D%E7%BD%AEvscode%E5%BF%AB%E9%80%9F%E6%A0%BC%E5%BC%8F%E5%8C%96%E4%BB%A3%E7%A0%81.md)
