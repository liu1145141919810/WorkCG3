# 计算机图形学课程小作业(详细介绍查看每个分项目下的README文件）

## 一，项目概述

本项目是计算机图形学课程的实践小作业，旨在通过编程实现 [核心功能，例如：基础图形渲染 / 几何变换 / 光照效果模拟 / 3D 模型加载与显示等]，深入理解计算机图形学的核心原理与实现方法。项目基于 [开发语言，如 C++/Python/JavaScript 等] + [图形库 / 框架，如 OpenGL/DirectX/Pygame/Three.js 等] 开发，完成了 [具体目标，如：从 0 实现简单光栅化渲染器、实现三维模型的旋转平移缩放、模拟 Phong 光照模型等]，覆盖了图形学中 [关键知识点，如：坐标变换、光栅化、光照计算、纹理映射、几何图元生成等] 核心内容。

## 二，功能特性

### 核心功能

### 交互方式

### 技术栈

## 三，项目结构

## 项目目录结构
```plaintext
├── Work1/                     # 谢尔宾斯基地毯绘制模块
│   ├── HW1-web2.0-blank/
│   │   ├── Common/            # 公共工具库（核心依赖）
│   │   │   ├── MV.js          # 矩阵向量数学运算库
│   │   │   ├── MVnew.js       # 矩阵向量库备用版本
│   │   │   ├── flatten.js     # 数据扁平化处理工具
│   │   │   ├── initShaders.js # Shader初始化核心工具
│   │   │   ├── initShaders2.js # Shader初始化工具（版本2）
│   │   │   ├── initShaders3.js # Shader初始化工具（版本3）
│   │   │   ├── utility.js     # 通用辅助工具函数
│   │   │   └── webgl-utils.js # WebGL基础工具库
│   │   ├── Gasket/            # 谢尔宾斯基地毯核心逻辑
│   │   ├── customize.html     # 自定义参数配置页面
│   │   ├── customize.js       # 自定义参数交互逻辑
│   │   ├── gasket2D.html      # 2D地毯绘制主页面
│   │   ├── gasket2D.js        # 2D地毯绘制核心逻辑
│   │   ├── graphics/          # 演示用图片/素材资源
│   │   └── shaders/           # 2D绘制着色器程序
│   │       ├── gasket2D.vert  # 顶点着色器（2D地毯）
│   │       └── gasket2D.frag  # 片段着色器（2D地毯）
│
├── Work2/                     # 3D场景漫游模块
│   ├── HW2-TODO/
│   │   ├── Common/            # 公共工具库（复用Work1）
│   │   ├── 3d-wandering.html  # 3D场景漫游主页面
│   │   ├── 3d-wandering.js    # 3D场景交互核心逻辑
│   │   ├── models-data.js     # 3D模型数据定义/加载
│   │   ├── Pokemon/           # 宝可梦3D模型资源文件
│   │   └── shaders/           # 3D场景着色器程序
│   │       ├── 3d-wandering.vert # 顶点着色器（3D漫游）
│   │       └── 3d-wandering.frag # 片段着色器（3D漫游）
│
├── Work3/                     # 冯氏着色(Phong)实现模块
│   ├── phongshading-todo/
│   │   ├── Common/            # 公共工具库（复用Work1）
│   │   │   └── webgl-utils.js # WebGL基础工具库
│   │   ├── index.html         # 项目入口页面
│   │   ├── Phongshading.html  # 冯氏着色主展示页面
│   │   ├── Phongshading.js    # 冯氏着色核心交互逻辑
│   │   ├── Models.js          # 着色演示模型数据
│   │   ├── configMaterialParameters.js # 材质参数配置工具
│   │   ├── configTexture.js   # 纹理加载/配置工具
│   │   ├── shaders/           # 冯氏着色器程序
│   │   └── skybox/            # 天空盒资源（纹理/着色器）

### 坐标变换：

将模型空间顶点经模型矩阵→视图矩阵→投影矩阵→视口变换，最终映射到屏幕空间；

### 光栅化： 

对三角形图元进行扫描线填充，通过重心坐标插值计算像素颜色 / 深度；

### 光照计算：

基于 Phong 模型，对每个像素计算三部分光照之和：

- 环境光：Ia * Ka
- 漫反射：Id * Kd * (N · L)
- 镜面反射：Is * Ks * (V · R)^n

最终颜色为：

$$
I = I_a K_a + I_d K_d (N \cdot L) + I_s K_s (V \cdot R)^n
$$
