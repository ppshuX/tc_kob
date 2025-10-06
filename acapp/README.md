# ACAPP - 移动端贪吃蛇游戏

> TC KOB项目的移动端前端应用

基于Vue3开发的移动端贪吃蛇对战游戏，专为移动设备优化，提供流畅的触屏游戏体验。

## 🎮 项目特点

- **移动端优化** - 专为手机和平板设备设计
- **触屏操作** - 支持触屏手势控制
- **响应式设计** - 适配不同屏幕尺寸
- **轻量级** - 相比桌面端更加精简

## 🚀 技术栈

- **Vue 3** - 渐进式JavaScript框架
- **Vue Router 4** - 路由管理
- **Vuex 4** - 状态管理
- **Canvas API** - 游戏渲染
- **WebSocket** - 实时通信

## 📱 移动端特性

### 触屏操作
- 支持滑动方向控制
- 触摸反馈优化
- 防误触设计

### 性能优化
- 移动端GPU加速
- 内存使用优化
- 电池续航考虑

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
访问 http://localhost:8081

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
├── store/                # Vuex状态管理
│   ├── index.js          # 主store
│   ├── pk.js             # 对战状态
│   ├── record.js         # 记录状态
│   ├── router.js         # 路由状态
│   └── user.js           # 用户状态
├── views/                # 页面视图
│   ├── error/            # 错误页面
│   ├── pk/               # 对战页面
│   ├── ranklist/         # 排行榜
│   ├── record/           # 记录页面
│   └── user/             # 用户页面
├── App.vue               # 根组件
└── main.js               # 入口文件
```

## 🎯 核心功能

### 游戏功能
- **实时对战** - 与其他玩家在线对战
- **AI对战** - 与智能AI对战
- **游戏回放** - 查看历史对局
- **排行榜** - 查看玩家排名

### 移动端特色
- **触屏控制** - 直观的触屏操作
- **自适应布局** - 适配各种屏幕
- **性能优化** - 流畅的游戏体验

## 🎮 游戏操作

### 移动端控制
- **滑动** - 在屏幕上滑动控制方向
- **点击** - 点击按钮进行操作
- **手势** - 支持多种手势操作

### 游戏规则
- 控制贪吃蛇移动
- 避免撞到障碍物
- 存活时间越长分数越高

## 🔧 配置说明

### 开发配置
在 `vue.config.js` 中可以配置：
- 开发服务器端口
- 代理设置
- 构建选项

### 环境变量
创建 `.env.local` 文件配置环境变量：
```
VUE_APP_API_BASE_URL=http://localhost:8080
VUE_APP_WS_URL=ws://localhost:8080
```

## 📱 移动端适配

### 屏幕适配
- 支持各种分辨率
- 响应式布局设计
- 横竖屏自适应

### 性能优化
- 减少DOM操作
- Canvas渲染优化
- 内存管理优化

## 🐛 调试指南

### 移动端调试
1. 使用Chrome DevTools的设备模拟
2. 连接真实设备进行调试
3. 使用Vue DevTools插件

### 常见问题
- 触屏事件不响应：检查事件绑定
- 布局错乱：检查CSS媒体查询
- 性能问题：检查Canvas渲染频率

## 📄 相关文档

- [Vue 3 官方文档](https://v3.vuejs.org/)
- [Vue Router 4](https://router.vuejs.org/)
- [Vuex 4](https://vuex.vuejs.org/)
- [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

---

**TC Family** - 移动端游戏体验
