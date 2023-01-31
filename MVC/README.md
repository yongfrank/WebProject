<!--
 * @Author: Frank Chu
 * @Date: 2023-01-09 23:37:58
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-01-09 23:46:05
 * @FilePath: /WebProject/MVC/README.md
 * @Description: 【【前端开发】到底什么是MVC?【面试与基本功】-哔哩哔哩】 https://b23.tv/HaMuC1f
 * 
 * Copyright (c) 2023 by Frank Chu, All Rights Reserved. 
-->
# MVC

1. 设计思想
2. M -> Model 模型层 数据模型 数据库
3. V -> View 视图层 模版引擎 EJS/PUG HTML 字符串
4. C -> Controller 控制器层 给视图层提供数据 调用模型方法 提供数据 API

- 后端的一种设计方式

浏览器 -> baidu.com -> 服务器资源 -> HTML -> 控制器 C -> 调用模型层 M 的方法 -> 获取数据 -> 控制器 -> 模版引擎V

# 前段 MVC

1. M SERVICE 服务层 异步请求数据的层 对数据进行操作层
2. V HTML 字符串 函数返回 HTML 字符串
3. C 给视图提供数据 / 调用 M 层方法对数据进行操作 / 对 DOM 进行操作 Document Object Model，DOM

# 后端实践

1. 路由
2. 列表展示
3. 列表删除
4. 增加手机信息
5. 收集详情页展示
