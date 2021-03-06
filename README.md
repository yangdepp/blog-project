## 博客项目

## 博客项目前端

## 1.项目架构文档

### 技术栈：

1. react 前端框架
2. redux 状态管理
3. react-router-dom 前端路由
4. axios 前端 ajax 请求库
5. http-proxy-middleware 跨越代理
6. history 路由跳转
7. antd (react UI 框架)
8. moment 日期格式处理库
9. node-sass 前端样式处理

### 整体项目架构
1. create-react-app 脚手架生成项目目录主体架子


# 博客项目后端

## 1.表结构字段

### Users 用户表

| 序号 | 字段名称 | 字段类型 | 大小 | 允许为空 |    字段说明     |
| :--: | :------: | :------: | :--: | :------: | :-------------: |
|  1   |   \_id   |  String  |  20  | 自增编号 | 自动生成唯一 id |
|  2   |   sid    |  String  |  10  |    否    |      学号       |
|  3   | password |  String  |  20  |    否    |      密码       |
|  4   | fullName |  String  |  5   |    否    |      姓名       |
|  5   | nickName |  String  |  10  |    否    |      昵称       |

### Type 新闻类型表

| 序号 | 字段名称 | 字段类型 | 大小 | 允许为空 |    字段说明     |
| :--: | :------: | :------: | :--: | :------: | :-------------: |
|  1   |   \_id   |  String  |  20  | 自增编号 | 自动生成唯一 id |
|  2   |   name   |  String  |  10  |    否    |  新闻类型名称   |

### News 新闻表

| 序号 | 字段名称 | 字段类型 | 大小 | 允许为空 |    字段说明     |
| :--: | :------: | :------: | :--: | :------: | :-------------: |
|  1   |   \_id   |  String  |  20  | 自增编号 | 自动生成唯一 id |
|  2   |  title   |  String  |  10  |    否    |    新闻标题     |
|  3   | content  |  String  | 1000 |    否    |    新闻内容     |
|  4   |  origin  |  String  |  10  |    否    |    新闻标题     |
|  5   |  author  |  String  |  10  |    否    |    新闻作者     |
|  5   |  image   |  String  |  30  |    是    |    新闻图片     |
|  5   | newsType |  String  |  10  |    否    |    新闻类型     |

### Topics 论坛帖子表

| 序号 | 字段名称 | 字段类型 | 大小 | 允许为空 |    字段说明     |
| :--: | :------: | :------: | :--: | :------: | :-------------: |
|  1   |   \_id   |  String  |  20  | 自增编号 | 自动生成唯一 id |
|  2   |  title   |  String  |  10  |    否    |    帖子标题     |
|  3   | content  |  String  | 1000 |    否    |    帖子内容     |
|  4   |  poster  |  String  |  20  |    否    |     发帖人      |

### Comment 论坛帖子评论表

| 序号 |   字段名称    | 字段类型 | 大小 | 允许为空 |     字段说明      |
| :--: | :-----------: | :------: | :--: | :------: | :---------------: |
|  1   |     \_id      |  String  |  20  | 自增编号 |  自动生成唯一 id  |
|  2   |    topicId    |  String  |  20  |    否    |   评论的帖子 id   |
|  3   |  commentator  |  String  |  20  |    否    |      评论人       |
|  4   |    content    |  String  | 1000 |    否    |     评论内容      |
|  3   |    replyTo    |  String  |  20  |    是    |  回复的评论人 id  |
|  4   | rootCommentId |  String  |  20  |    是    | 一级评论的评论 id |

## 2.项目架构文档

### 技术栈：

1. nodejs
2. koa2 框架
3. mongoDB 数据库
4. Mongoose（ORM 框架）
5. koa-jwt 登录验证
6. koa-router 路由



admin
admin0001
