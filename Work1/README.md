
# 编程作业1，介绍

## 基本任务

### 打开方式

- 地址：homework//HW1-web2.0-blank//Gasket//gasket2D.html
- 打开方式：右键=>open with live server

### 目录结构

- 底层库：homework//HW1-web2.0-blank//Common
- 渲染器： homework//HW1-web2.0-blank//Gasket//shaders//gasket2D.frag 和 homwwork//HW1-web2.0-blank//Gasket//shaders//gasket2D.vert 片元渲染器和点渲染器
- 网页文件：homework//HW1-web2.0-blank//Gasket//gasket2D.html
- 操作执行代码：homework//HW1-web2.0-blank//Gasket//gasket2D.js

### 简介

打开文件后有如下器件，点击后分贝有各自的效果

- recursive steps:控制递归迭代次数
- Start/Stop Rotation:开始/停止旋转（绕（0，0）坐标）
- speadUP: 旋转加速
- speadDOWN:旋转减速
- mouse click on blue block:以点击点为中心重新画图

可以实现三角形的分形,三角形按照红蓝绿三色渲染

### 展示

![图一](graphics\p2.png)
![图二](graphics\p4.png)

## 额外任务

### 目标

将gasket换成如下分形图：将线段旋转到到（1，0）方向，进行一个类似于图二的操作，得到递归后的结构，然后转回

![图三](graphics\p1.png)

如下是递归5次所得到的图形

![图二](graphics\p3.png)

### 位置

- 底层库：与上面相同
- 网页文件：homework//HW1-web2.0-blank//Gasket//customize.html
- 操作执行代码：homework//HW1-web2.0-blank//Gasket//customize.js

### 补充

本代码处理分形递归方法以外其余操作均与gasket项目相同，也具有旋转，分形控制条，渲染中心改变等功能

## 其他

报告存放在地址：//homework//报告.docx