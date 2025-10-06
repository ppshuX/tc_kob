# BACKEND CLOUD - 后端微服务系统

> TC KOB项目的后端微服务架构

基于Spring Boot和Spring Cloud构建的分布式后端系统，提供游戏核心服务、匹配系统和AI机器人运行环境。

## 🏗️ 系统架构

```
backendcloud/
├── backend/           # 主后端服务
├── matchingsystem/    # 匹配系统服务
├── botrunningsystem/  # AI机器人运行系统
└── pom.xml           # Maven父项目配置
```

## 🚀 技术栈

- **Spring Boot 2.3.7** - 微服务框架
- **Spring Cloud** - 分布式系统解决方案
- **MyBatis Plus** - ORM框架
- **MySQL** - 数据库
- **WebSocket** - 实时通信
- **Maven** - 项目管理
- **FastJSON** - JSON处理
- **ReentrantLock** - 并发控制

## 🎯 服务模块

### 1. Backend Service (主服务)
**端口**: 8080

**主要功能**:
- 用户认证和授权
- 游戏逻辑处理
- WebSocket实时通信
- 数据库操作
- API接口提供

**核心组件**:
- `WebSocketServer` - WebSocket服务器
- `Game` - 游戏逻辑核心
- `Player` - 玩家实体
- `Consumer` - 消息消费者

### 2. Matching System (匹配系统)
**端口**: 3000

**主要功能**:
- 玩家匹配算法
- 匹配池管理
- 匹配结果通知

**核心特性**:
- 智能匹配算法
- 实时匹配状态更新
- 匹配超时处理

### 3. Bot Running System (AI系统)
**端口**: 3002

**主要功能**:
- AI代码执行环境
- 沙箱安全隔离
- AI性能监控
- 代码调试支持

**安全特性**:
- 代码执行隔离
- 资源限制控制
- 恶意代码检测

## 🛠️ 快速开始

### 环境要求
- Java 8+
- Maven 3.6+
- MySQL 8.0+

### 数据库配置
```sql
CREATE DATABASE kob CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE kob;

-- 用户表
CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    photo VARCHAR(1000),
    rating INT DEFAULT 1500,
    openid VARCHAR(100),
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 机器人表
CREATE TABLE bot (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    title VARCHAR(100),
    description VARCHAR(300),
    content TEXT,
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

-- 对战记录表
CREATE TABLE record (
    id INT PRIMARY KEY AUTO_INCREMENT,
    a_id INT NOT NULL,
    a_sx INT,
    a_sy INT,
    b_id INT NOT NULL,
    b_sx INT,
    b_sy INT,
    a_steps TEXT,
    b_steps TEXT,
    map TEXT,
    loser VARCHAR(10),
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (a_id) REFERENCES user(id),
    FOREIGN KEY (b_id) REFERENCES user(id)
);
```

### 安装和启动

1. **克隆项目**
```bash
git clone <repository-url>
cd tc_kob/backendcloud
```

2. **配置数据库**
```bash
# 修改各服务的 application.properties
# 配置数据库连接信息
```

3. **编译项目**
```bash
mvn clean install
```

4. **启动服务**
```bash
# 启动主服务
java -jar backend/target/backend-0.0.1-SNAPSHOT.jar

# 启动匹配系统
java -jar matchingsystem/target/matchingsystem-0.0.1-SNAPSHOT.jar

# 启动AI系统
java -jar botrunningsystem/target/botrunningsystem-0.0.1-SNAPSHOT.jar
```

## 📁 项目结构

### Backend Service
```
src/main/java/com/tc_kob/backend/
├── config/            # 配置类
├── consumer/          # WebSocket处理
│   ├── WebSocketServer.java
│   ├── utils/
│   │   ├── Game.java
│   │   └── Player.java
├── controller/        # REST控制器
│   ├── pk/           # 对战相关
│   ├── user/         # 用户相关
│   ├── bot/          # 机器人相关
│   └── record/       # 记录相关
├── service/          # 业务逻辑层
├── mapper/           # MyBatis映射器
├── pojo/             # 实体类
└── utils/            # 工具类
```

### Matching System
```
src/main/java/com/tc_kob/matchingsystem/
├── service/
│   └── MatchingService.java
└── consumer/
    └── MatchingConsumer.java
```

### Bot Running System
```
src/main/java/com/tc_kob/botrunningsystem/
├── service/
│   └── BotRunningService.java
└── consumer/
    └── BotRunningConsumer.java
```

## 🔧 配置说明

### 数据库配置
```properties
# application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/kob?useUnicode=true&characterEncoding=utf-8
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
```

### WebSocket配置
```properties
# 主服务端口
server.port=8080

# 匹配系统端口
server.port=3000

# AI系统端口
server.port=3002
```

### Redis配置（可选）
```properties
spring.redis.host=localhost
spring.redis.port=6379
spring.redis.password=
```

## 🎮 游戏逻辑

### 游戏状态管理
- **游戏初始化** - 创建地图和玩家
- **实时同步** - WebSocket消息传递
- **碰撞检测** - 墙壁和蛇身碰撞
- **胜负判定** - 游戏结束条件

### 并发控制
- **ReentrantLock** - 线程安全操作
- **同步机制** - 防止竞态条件
- **状态管理** - 游戏状态一致性

## 🤖 AI系统

### 代码执行环境
- **JavaScript引擎** - 安全的代码执行
- **沙箱隔离** - 防止恶意代码
- **资源限制** - CPU和内存控制
- **超时处理** - 防止死循环

### AI API接口
```java
// AI代码执行接口
public interface BotRunningService {
    String addBot(Integer userId, String botCode, String input);
}
```

## 📊 性能优化

### 数据库优化
- **连接池配置** - HikariCP连接池
- **查询优化** - 索引和SQL优化
- **缓存策略** - Redis缓存热点数据

### 系统优化
- **异步处理** - 非阻塞IO操作
- **负载均衡** - 多实例部署
- **监控告警** - 系统性能监控

## 🔒 安全措施

### 数据安全
- **SQL注入防护** - 参数化查询
- **XSS防护** - 输入验证和过滤
- **CSRF防护** - Token验证

### AI代码安全
- **沙箱隔离** - 代码执行环境隔离
- **资源限制** - 防止资源耗尽
- **代码审查** - 恶意代码检测

## 🐛 调试指南

### 日志配置
```properties
# 日志级别配置
logging.level.com.tc_kob=DEBUG
logging.level.org.springframework.web=DEBUG
```

### 常见问题
1. **数据库连接失败** - 检查数据库配置和网络
2. **WebSocket连接断开** - 检查网络和防火墙设置
3. **AI代码执行失败** - 检查代码语法和资源限制

## 📈 监控和运维

### 健康检查
- Spring Boot Actuator健康检查端点
- 数据库连接状态监控
- 服务可用性监控

### 日志管理
- 结构化日志输出
- 日志轮转和归档
- 错误日志告警

## 📄 相关文档

- [Spring Boot官方文档](https://spring.io/projects/spring-boot)
- [Spring Cloud官方文档](https://spring.io/projects/spring-cloud)
- [MyBatis Plus文档](https://baomidou.com/)
- [WebSocket协议](https://tools.ietf.org/html/rfc6455)

---

**TC Family** - 可靠的后端服务
