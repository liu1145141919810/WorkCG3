# 编程作业1，介绍

## 基本任务

### 打开方式

- 地址：homework//HW2-TODO//3d-wandering.html
- 打开方：右键=>open with live server

### 目录结构

- 底层库：homework//HW2-TODO//Common
- 渲染器： homework//HW2-TODO//shaders//3d-wandering.frag 和 homework//HW2-TODO//shaders//3d-wandering.vert 片元渲染器和点渲染器
- 网页文件：homework\HW2-TODO\3d-wandering.html
- 操作执行代码：homework\HW2-TODO\3d-wandering.js
- obj源文件： homework\HW2-TODO\Pokemon

### 简介

打开之后会渲染对应的3D模型，各个案件分别有如下的效果

- Z/C实现物体的整体缩放
- 键盘WASD控制相机绕坐标轴X和坐标轴Y旋转
- 键盘P正投影和透视投影切换
- M/N调整视角大小
- 空格重置
- B/V 开启/关闭深度缓存消隐

基础任务中分别有立方体，球体，墨西哥帽三个物体

### 展示

![图1][HW2-TODO/graphics/p1.png]
![图2][HW2-TODO/graphics/p2.png]
![图3][HW2-TODO/graphics/p3.png]

## 额外任务

从网上将obj下载存在本地，颜色没有使用贴图而是做了简单的光影显示判断，得到的效果如下

![图x1](HW2-TODO\graphics\pokemon.png)

## 其他

具体实现原理查看报告，存放在地址：//homework//报告.docx

[hw2-todo/graphics/p1.png]: HW2-TODO/graphics/p1.png
[hw2-todo/graphics/p2.png]: HW2-TODO/graphics/p2.png
[hw2-todo/graphics/p3.png]: HW2-TODO/graphics/p3.png