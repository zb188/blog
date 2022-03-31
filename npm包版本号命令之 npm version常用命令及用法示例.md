## npm version 平时不常用的命令,一般是在开发npm包的时候使用。

### 初始化一个npm包
1.创建文件夹 npm-test-module
2.cd npm-test-module
3. npm init -y 在工程目录下生成package.json如下：

```json
{
  "name": "npm-test-module",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### npm version 概览
npm version --help  
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]  
(run in package dir)  
'npm -v' or 'npm --version' to print npm version (6.4.1)  
'npm view <pkg> version' to view a package's published version  
'npm ls' to inspect current package/dependency versions  

### npm version获取当前的详细版本信息。

### npm version 常用命令
- prerelease  
npm version prerelease  
package.json 中的版本号1.0.0变为 1.0.1-0  
再次执行 npm version prerelease  
package.json 中的版本号1.0.1-0变为 1.0.1-1  
5,6操作说明 当执行npm version prerelease时，如果没有预发布号，则增加minor，同时prerelease 设为0；  
如果有prerelease， 则prerelease 增加1。  

- prepatch  
npm version prepatch   
package.json 中的版本号1.0.1-1变为 1.0.2-0  
prepatch - 直接升级小号，增加预发布号为0。  

- preminor  
npm version preminor  
package.json 中的版本号1.0.2-0变为 1.1.0-0  
preminor - 直接升级中号，小号置为0，增加预发布号为0。  

- npm version premajor  
package.json 中的版本号1.1.0-0变为 2.0.0-0  
premajor - 直接升级大号，中号、小号置为0，增加预发布号为0。  

- patch: 主要目的升级patch  
npm version patch  
package.json 中的版本号2.0.0-0变为 2.0.0;  
再次执行npm version patch  
package.json 中的版本号2.0.0变为 2.0.1;
10,11 操作说明，patch：如果有prerelease ，则去掉prerelease ，其他保持不变；
如果没有prerelease ，则升级minor.

- minor： 主要目的升级minor
npm version minor
package.json 中的版本号2.0.1变为 2.1.0;
如果没有prerelease，直接升级minor， 同时patch设置为0；

npm version premajor 2.1.0–> 3.0.0-0;
npm version minor 3.0.0-0–> 3.0.0;
npm version prepatch 3.0.0–>3.0.1-0;
npm version minor 3.0.1-0–>3.1.0;
如果有prerelease， 首先需要去掉prerelease；如果patch为0，则不升级minor：如14；
如果patch不为0， 则升级minor，同时patch设为0，如16。

- major ：主要目的升级major  
npm version major : 3.1.0 -->4.0.0
如果没有prelease，则直接升级major，其他位都置为0；

- npm version premajor: 4.0.0 --> 5.0.0-0;  
如果有预发布号： minor和patch都为0，则不升级major，只将prerelease 去掉。

- npm version preminor : 5.0.0-0–> 5.1.0-0  
npm version major : 5.1.0-0 -->6.0.0
如果有预发布号：且minor和patch有任意一个不是0，则升级一位major，其他位都置为0，并去掉prerelease。
