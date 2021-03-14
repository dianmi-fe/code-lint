## 配置 vscode 快速格式化代码

### 必不可少的 vscode 插件

> 点击图标进入插件详情页

<p>
    <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode">
        <img src="https://esbenp.gallerycdn.vsassets.io/extensions/esbenp/prettier-vscode/5.9.2/1613061160143/Microsoft.VisualStudio.Services.Icons.Default" alt="prettier" width="128">
    <a>
    <a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint">
        <img src="https://dbaeumer.gallerycdn.vsassets.io/extensions/dbaeumer/vscode-eslint/2.1.14/1607941542177/Microsoft.VisualStudio.Services.Icons.Default" alt="elsint" width="128">
    <a>
    <a href="https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint">
        <img src="https://stylelint.gallerycdn.vsassets.io/extensions/stylelint/vscode-stylelint/0.86.0/1612657921309/Microsoft.VisualStudio.Services.Icons.Default" alt="stylelint" width="128">
    <a>
    <a href="https://marketplace.visualstudio.com/items?itemName=ryuta46.multi-command">
        <img src="https://vsassetscdn.azure.cn/v/M182_20210218.1/_content/Header/default_icon_128.png" alt="multi-command" width="128">
    <a>
</p>

### 必不可少的 vscode 配置

##### 1. 项目根目录创建 .vscode/settings.json, 粘贴以下 json

```json
{
    "files.eol": "\n",
    "editor.tabSize": 4,
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
        // "source.fixAll": true
        // or(或者)
        // "source.fixAll.eslint": true,
        // "source.fixAll.stylelint": true
    }
}
```

##### 2. 根据下面的视频打开文件位置, 粘贴以下 json

```json
[
    {
        "key": "ctrl+f",
        "command": "extension.multiCommand.execute",
        "args": {
            "sequence": ["eslint.executeAutofix", "stylelint.executeAutofix"]
        }
    }
]
```

<img src="https://user-images.githubusercontent.com/37133629/111067559-d9c49c80-84ff-11eb-88c3-68755fd3c98f.gif">
