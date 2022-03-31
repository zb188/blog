## package.json详解

```json
{
    "name": "hello world", // 项目名称
    "version": "0.0.1", // 版本号：大版本.次要版本.小版本
    "author": "张三",
    "description": "第一个node.js程序",
    "keywords":["node.js","javascript"], // 关键词，有助于 npm search 发现
    "repository": { // 存储库，指定代码所在位置（如果git repo在GitHub上，那么该npm docs 命令将能够找到文件位置。）
        "type": "git",
        "url": "https://path/to/url"
    },
    "license":"MIT", // 指定包许可证，详细可见[SPDX许可证ID的完整列表](https://spdx.org/licenses/)
    "engines": {"node": "0.10.x"}, // 指定该模块运行的平台，可以指定 node 版本、npm 版本等
    "bugs":{"url":"http://path/to/bug","email":"bug@example.com"}, // 项目问题跟踪器的URL和应报告问题的电子邮件地址。
    "contributors":[{"name":"李四","email":"lisi@example.com"}],
    "bin": { // 指定内部命令对应的可执行文件的位置，在 scripts 中就可以简写
        "webpack": "./bin/webpack.js"
    },
    "main": "lib/webpack.js", // 指定加载的模块入口文件，require('moduleName')就会加载这个文件。这个字段的默认值是模块根目录下面的index.js。
    "config" : { "port" : "8080" }, // 用于添加命令行的环境变量（用户在运行 scripts 命令时，就默认在脚本文件中添加 process.env.npm_package_config_port，用户可以通过 npm config set foo:port 80 命令更改这个值）
    "scripts": { // 指定运行脚本的 npm 命令行缩写
        "start": "node index.js"
    },
    "peerDependencies": { // 指定项目安装必须一起安装的模块及其版本号，（注意：从 npm 3.0 开始，peerDependencies不会再默认安装）
        "chai": "1.x"
    },
    "dependencies": { // 指定项目运行所依赖的模块
        "express": "latest",
        "mongoose": "~3.8.3",
        "handlebars-runtime": "~1.0.12",
        "express3-handlebars": "~0.5.0",
        "MD5": "~1.2.0"
    },
    "devDependencies": { // 指定项目开发所需要的模块
        "bower": "~1.2.8",
        "grunt": "~0.4.1",
        "grunt-contrib-concat": "~0.3.0",
        "grunt-contrib-jshint": "~0.7.2",
        "grunt-contrib-uglify": "~0.2.7",
        "grunt-contrib-clean": "~0.5.0",
        "browserify": "2.36.1",
        "grunt-browserify": "~1.3.0",
    },
    "browser": { // 指定该模板供浏览器使用的版本
        "tipso": "./node_modules/tipso/src/tipso.js"
    },
    "preferGlobal": true, // 表示当用户不将该模块安装为全局模块时（即不用–global参数），要不要显示警告，表示该模块的本意就是安装为全局模块。
}
```
