## npm 模块本地开发调试之最优方案npm link
在我们平时写项目中，当我们需要新开发或修改的 npm 模块时，如何在本地项目中调试呢？

本地项目路径：G:\npm\project

开发的模块路径：G:\npm\model

### 方法一：

在cmd命令窗口cd切换到project项目中 node_modules

这时候在你的项目中就可以导入该模块使用了

这种复制方式调试是有点麻烦的

### 方法二：

npm link 方法

如果你开发的npm模块和项目在同一个目录下，直接执行下面命令

如果不在同一个目录下，先去到模块目录，把他执行 npm link到全局

再切换到项目目录下

执行： npm link model

这时候在你项目的node_modules里就会出现model的快捷方式

这时候你修改了model原文件里内容时，你在项目里调试时也会跟着变

这样是不是很方便，一劳永逸，当你测试完所有功能就可以放心发布了
### 方法三：
绝对路径引用方式
"dependencies": {
    "durable-functions": "file:../azure-functions-durable-js",
}
### 方法四：
在项目中 直接install 模块所在的路径
npm install ../some-local-package
