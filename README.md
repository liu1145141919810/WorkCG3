# 计算机图形学课程小作业(详细介绍查看每个分项目下的README文件）

## 一，项目概述

本项目是计算机图形学课程的实践小作业，旨在通过编程实现 [核心功能，例如：基础图形渲染 / 几何变换 / 光照效果模拟 / 3D 模型加载与显示等]，深入理解计算机图形学的核心原理与实现方法。项目基于 [开发语言，如 C++/Python/JavaScript 等] + [图形库 / 框架，如 OpenGL/DirectX/Pygame/Three.js 等] 开发，完成了 [具体目标，如：从 0 实现简单光栅化渲染器、实现三维模型的旋转平移缩放、模拟 Phong 光照模型等]，覆盖了图形学中 [关键知识点，如：坐标变换、光栅化、光照计算、纹理映射、几何图元生成等] 核心内容。

## 二，功能特性

### 核心功能

### 交互方式

### 技术栈

## 三，项目结构

Work1/ ├── HW1-web2.0-blank/ │ ├── Common/ # 公共库文件 │ │ ├── MV.js # 矩阵向量数学库 │ │ ├── MVnew.js # 矩阵向量库备用版本 │ │ ├── flatten.js # 数据扁平化工具 │ │ ├── initShaders.js # Shader初始化工具 │ │ ├── initShaders2.js # Shader初始化工具2 │ │ ├── initShaders3.js # Shader初始化工具3 │ │ ├── utility.js # 通用工具函数 │ │ └── webgl-utils.js # WebGL工具库 │ │ │ └── Gasket/ # 谢尔宾斯基地毯绘制 │ ├── customize.html # 自定义参数界面 │ ├── customize.js # 自定义参数逻辑 │ ├── gasket2D.html # 2D地毯绘制界面 │ ├── gasket2D.js # 2D地毯绘制逻辑 │ └── shaders/ # 着色器程序 │ ├── gasket2D.vert # 顶点着色器 │ └── gasket2D.frag # 片段着色器 │ └── graphics/ # 演示图像 ├── p1.png # 示例图像1 ├── p2.png # 示例图像2 ├── p3.png # 示例图像3 └── p4.png # 示例图像4

## 四，核心原理

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
