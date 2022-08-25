## git commit 规范

```
<type>(scope): <subject>
例如: feat(投标处理): 静态页面完成
```

1. **type 为必填项，用于指定 commit 的类型。**

    * ☀️upd(XXXX需求)：更新某功能（不是 feat, 不是 fix）
    * ✨feat(XXXX需求)：新功能（feature）
    * 🐞fix(XXXX需求)：修补bug
    * 📃docs(XXXX需求)：仅仅修改文档说明
    * 🌈style(XXXX需求)：格式（不影响代码运行的变动）
    * 🦄refactor(XXXX需求)：重构（即不是新增功能，也不是修改bug的代码变动）
    * 🌻perf(XXXX需求): 更改代码以提高性能
    * ✏️test(XXXX需求)：增加测试
    * 🏝chore(XXXX需求)：构建过程或辅助工具的变动
2. **scope 为非必填项，用于描述改动的范围。**

    * 可以是文件的名称，可包含路径
    * 可以是某个层面的，`view`、`model`
3. **subject 是必填项，这次提交的日志信息，提交日志必须有意义。**

## git issue 规范

> 以下为示例

### 《MBP开发环境搭建手册》3.2  `nrm ls`  命令报错

#### 错误简要描述

执行 `nrm ls `命令报错， 关键`path`变量为空

#### 自我诊断

- [x] 我已查看《MBP开发环境搭建手册》.
- [x] 我已尝试通过 npm 包管理工具下载的最新版本.

#### 环境

- [x] 操作系统: Windows 10 专业版
- [x] IDE : PowerShell / CMD
- [x] nrm版本: 1.2.1
- [x] nodejs版本 : 12.10.1 为信息技术部研发组入职培训课件 中《前端安装环境指引》说明的推荐版本

#### 重现问题的步骤

1. 安装`nodejs`
2. 执行 `npm install –g nrm`
3. 执行 `npm -V` ,当前从nodejs.org 拉取到的最新版本为`1.2.1`
4. 执行 `nrm ls `命令，报错

#### 当前结果

描述信息+截图

#### 预期结果

描述信息+截图

#### 问题溯源

在源代码`nrm\cli.js`中，获取`nrmrc` 配置文件使用并未区分操作系统，Unix系统和win系统的环境变量略有区别

```js
// nrm\cli.js
const NRMRC = path.join(process.env.HOME, '.nrmrc');
//在win32系统下无法找到 process.env.HOME
console.log(process.env.HOME) // undefined
//在win32系统下 HOME 属性，变为了USERPROFILE 属性
console.log(process.env.USERPROFILE) // C:\\Users\\s-wangxin

```

<!-- ![image-20210629091355906](C:\Users\s-wangxin\AppData\Roaming\Typora\typora-user-images\image-20210629091355906.png) -->

#### 解决方案

此bug已向该项目作者提交issue，但此项目已经两年未维护更新，可能需要自己解决。

建议在 《MBP开发环境搭建手册》3.2 节内容中增加以下代码方案。

```js
// const NRMRC = path.join(process.env.HOME, '.nrmrc');
const NRMRC = path.join(process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'], '.nrmrc');
```