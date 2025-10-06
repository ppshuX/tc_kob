# WEB - 桌面端贪吃蛇游戏

> TC KOB项目的桌面端前端应用

基于Vue3开发的桌面端贪吃蛇对战游戏，提供完整的游戏体验和丰富的功能特性。

## 🎮 项目特点

- **桌面端优化** - 专为PC端设计，支持键盘操作
- **完整功能** - 包含所有游戏功能和用户界面
- **Bootstrap UI** - 美观的用户界面设计
- **代码编辑器** - 内置ACE编辑器支持AI代码编写

## 🚀 技术栈

- **Vue 3** - 渐进式JavaScript框架
- **Vue Router 4** - 路由管理
- **Vuex 4** - 状态管理
- **Bootstrap 5** - UI组件库
- **ACE Editor** - 代码编辑器
- **Canvas API** - 游戏渲染
- **WebSocket** - 实时通信

## 🖥️ 桌面端特性

### 键盘操作
- 支持WASD键位控制
- 快捷键支持
- 键盘导航优化

### 完整界面
- 丰富的用户界面
- 多页面导航
- 响应式设计

## 🛠️ 快速开始

### 环境要求
- Node.js 16+
- npm 或 yarn

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run serve
```
访问 http://localhost:8080

### 生产构建
```bash
npm run build
```

### 代码检查
```bash
npm run lint
```

## 📁 项目结构

```
src/
├── assets/
│   ├── images/           # 图片资源
│   └── scripts/          # 游戏核心逻辑
│       ├── AcGameObject.js  # 游戏对象基类
│       ├── GameMap.js       # 游戏地图
│       ├── Snake.js         # 贪吃蛇逻辑
│       └── Wall.js          # 墙壁对象
├── components/           # Vue组件
│   ├── ContentField.vue  # 内容区域
│   ├── GameMap.vue       # 游戏地图组件
│   ├── MatchGround.vue   # 匹配界面
│   ├── NavBar.vue        # 导航栏
│   ├── PlayGround.vue    # 游戏界面
│   └── ResultBoard.vue   # 结果面板
├── router/               # 路由配置
│   └── index.js          # 路由主文件
├── store/                # Vuex状态管理
│   ├── index.js          # 主store
│   ├── pk.js             # 对战状态
│   ├── record.js         # 记录状态
│   └── user.js           # 用户状态
├── views/                # 页面视图
│   ├── error/            # 错误页面
│   ├── pk/               # 对战页面
│   ├── ranklist/         # 排行榜
│   ├── record/           # 记录页面
│   └── user/             # 用户页面
│       ├── account/      # 账户管理
│       └── bot/          # 机器人管理
├── App.vue               # 根组件
└── main.js               # 入口文件
```

## 🎯 核心功能

### 游戏功能
- **实时对战** - 与其他玩家在线对战
- **AI对战** - 与智能AI对战
- **游戏回放** - 查看历史对局
- **排行榜** - 查看玩家排名

### 用户功能
- **用户注册/登录** - 完整的用户系统
- **个人资料** - 用户信息管理
- **机器人管理** - 创建和管理AI机器人
- **对局记录** - 查看详细对局历史

### 开发功能
- **AI代码编辑** - 内置代码编辑器
- **代码调试** - 支持JavaScript调试
- **API文档** - 完整的AI开发API

## 🎮 游戏操作

### 键盘控制
- **W** - 向上移动
- **A** - 向左移动
- **S** - 向下移动
- **D** - 向右移动

### 界面操作
- **鼠标点击** - 导航和操作
- **键盘快捷键** - 快速访问功能
- **拖拽操作** - 支持拖拽功能

## 🤖 AI开发功能

### 代码编辑器
- **语法高亮** - JavaScript语法支持
- **自动补全** - 智能代码补全
- **错误检查** - 实时语法检查
- **代码格式化** - 自动代码格式化

### AI API
```javascript
// 获取游戏状态
const gameMap = getGameMap();      // 获取地图信息
const mySnake = getMySnake();      // 获取自己的蛇
const opponent = getOpponent();    // 获取对手信息

// 返回移动方向
return direction; // 0-上，1-右，2-下，3-左
```

### 调试功能
- **控制台输出** - 支持console.log
- **错误提示** - 详细的错误信息
- **性能监控** - AI执行时间统计

## 🔧 配置说明

### 开发配置
在 `vue.config.js` 中可以配置：
- 开发服务器端口
- 代理设置
- 构建选项
- 代码分割策略

### 环境变量
创建 `.env.local` 文件配置环境变量：
```
VUE_APP_API_BASE_URL=http://localhost:8080
VUE_APP_WS_URL=ws://localhost:8080
VUE_APP_ACE_EDITOR_THEME=monokai
```

### Bootstrap配置
项目使用Bootstrap 5，可以通过以下方式自定义：
- 修改SCSS变量
- 覆盖默认样式
- 添加自定义组件

## 📊 性能优化

### 前端优化
- **代码分割** - 按需加载组件
- **懒加载** - 路由懒加载
- **缓存策略** - 静态资源缓存
- **压缩优化** - 代码和资源压缩

### 游戏优化
- **Canvas优化** - 高效的渲染策略
- **内存管理** - 避免内存泄漏
- **帧率控制** - 稳定的游戏帧率

## 🐛 调试指南

### 开发调试
1. 使用Vue DevTools插件
2. 启用Vue的开发者模式
3. 使用浏览器开发者工具

### 游戏调试
- **Canvas调试** - 检查渲染状态
- **WebSocket调试** - 监控网络通信
- **AI调试** - 查看AI执行日志

### 常见问题
- **游戏卡顿**：检查Canvas渲染频率
- **连接失败**：验证WebSocket配置
- **AI不响应**：检查代码语法错误

## 📄 相关文档

- [Vue 3 官方文档](https://v3.vuejs.org/)
- [Vue Router 4](https://router.vuejs.org/)
- [Vuex 4](https://vuex.vuejs.org/)
- [Bootstrap 5](https://getbootstrap.com/docs/5.0/)
- [ACE Editor](https://ace.c9.io/)
- [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

---

**TC Family** - 桌面端游戏体验
