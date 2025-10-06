# TC KOB - 多人在线贪吃蛇游戏

> tc_kob of tc_family

一个基于Vue3 + Spring Boot的在线多人贪吃蛇对战游戏平台，支持人机对战、人人对战，以及自定义AI机器人。

## 🎮 项目简介

TC KOB是一个完整的在线游戏平台，玩家可以：
- 与其他玩家进行实时对战
- 与AI机器人对战
- 编写自己的AI策略
- 查看游戏排行榜
- 回放历史对局

## 🏗️ 项目架构

```
tc_kob/
├── acapp/                 # Vue3前端应用（移动端优化）
├── web/                   # Vue3前端应用（桌面端）
└── backendcloud/          # Spring Boot后端微服务
    ├── backend/           # 主后端服务
    ├── matchingsystem/    # 匹配系统服务
    └── botrunningsystem/  # AI机器人运行系统
```

## 🚀 技术栈

### 前端技术
- **Vue 3** - 渐进式JavaScript框架
- **Vue Router 4** - 路由管理
- **Vuex 4** - 状态管理
- **Bootstrap 5** - UI组件库
- **Canvas API** - 游戏渲染
- **WebSocket** - 实时通信

### 后端技术
- **Spring Boot 2.3.7** - 微服务框架
- **Spring Cloud** - 分布式系统解决方案
- **MyBatis Plus** - ORM框架
- **MySQL** - 数据库
- **WebSocket** - 实时通信
- **Maven** - 项目管理

## 🎯 核心功能

### 游戏功能
- **实时对战** - 支持多人同时在线对战
- **AI对战** - 内置智能AI对手
- **自定义AI** - 支持玩家编写AI策略
- **游戏回放** - 完整对局记录和回放
- **排行榜** - 实时排名系统

### 系统功能
- **用户系统** - 注册、登录、个人信息管理
- **匹配系统** - 智能匹配算法
- **机器人系统** - AI代码执行环境
- **对战记录** - 完整的游戏历史记录

## 🛠️ 快速开始

### 环境要求
- Node.js 16+
- Java 8+
- MySQL 8.0+
- Maven 3.6+

### 安装步骤

1. **克隆项目**
```bash
git clone <repository-url>
cd tc_kob
```

2. **启动后端服务**
```bash
cd backendcloud
mvn clean install
# 启动各个微服务
java -jar backend/target/backend-0.0.1-SNAPSHOT.jar
java -jar matchingsystem/target/matchingsystem-0.0.1-SNAPSHOT.jar
java -jar botrunningsystem/target/botrunningsystem-0.0.1-SNAPSHOT.jar
```

3. **启动前端应用**
```bash
# 启动桌面端
cd web
npm install
npm run serve

# 启动移动端
cd ../acapp
npm install
npm run serve
```

4. **访问应用**
- 桌面端：http://localhost:8080
- 移动端：http://localhost:8081

## 🎮 游戏玩法

### 基本操作
- **W** - 向上移动
- **A** - 向左移动
- **S** - 向下移动
- **D** - 向右移动

### 游戏规则
- 控制贪吃蛇在地图中移动
- 避免撞到墙壁、对手和自己
- 蛇身会随着时间增长
- 存活时间更长的玩家获胜

## 🤖 AI开发

玩家可以编写自己的AI策略来参与对战：

1. 在用户界面中创建新的机器人
2. 编写JavaScript代码实现AI逻辑
3. 使用提供的API获取游戏状态
4. 返回移动方向指令

### AI API示例
```javascript
// 获取游戏地图信息
const gameMap = getGameMap();
// 获取自己的蛇信息
const mySnake = getMySnake();
// 获取对手信息
const opponent = getOpponent();

// 返回移动方向：0-上，1-右，2-下，3-左
return direction;
```

## 📁 项目结构

### 前端结构
```
src/
├── assets/scripts/     # 游戏核心逻辑
│   ├── AcGameObject.js # 游戏对象基类
│   ├── GameMap.js      # 游戏地图
│   ├── Snake.js        # 贪吃蛇逻辑
│   └── Wall.js         # 墙壁对象
├── components/         # Vue组件
├── views/             # 页面视图
├── store/             # Vuex状态管理
└── router/            # 路由配置
```

### 后端结构
```
src/main/java/com/tc_kob/
├── backend/           # 主服务
│   ├── controller/    # 控制器层
│   ├── service/       # 业务逻辑层
│   ├── consumer/      # WebSocket处理
│   └── pojo/         # 实体类
├── matchingsystem/    # 匹配系统
└── botrunningsystem/  # 机器人系统
```

## 🔧 配置说明

### 数据库配置
在 `application.properties` 中配置数据库连接：
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/kob?useUnicode=true&characterEncoding=utf-8
spring.datasource.username=your_username
spring.datasource.password=your_password
```

### WebSocket配置
游戏使用WebSocket实现实时通信，端口配置：
- 后端主服务：8080
- 匹配系统：3000
- 机器人系统：3002

## 📝 开发指南

### 添加新功能
1. 在前端 `src/views/` 添加新页面
2. 在 `src/router/` 配置路由
3. 在后端 `controller/` 添加API接口
4. 在 `service/` 实现业务逻辑

### 代码规范
- 前端使用ESLint进行代码检查
- 后端遵循Spring Boot最佳实践
- 使用统一的命名规范和注释风格

## 🐛 问题反馈

如果遇到问题或有建议，请：
1. 检查控制台错误信息
2. 确认所有服务都已启动
3. 验证数据库连接配置
4. 提交Issue描述问题详情

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 👥 贡献

欢迎提交Pull Request和Issue来帮助改进项目！

---

**TC Family** - 打造最好的在线游戏平台
