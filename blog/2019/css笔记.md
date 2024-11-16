---
title: css笔记
toc: true
data: 2022-08-02 20:40:55
tags: css
---

*CSS入门之基本规则*<!--more-->

#### 第1集 从基本规则开始学习CSS

**简介：讲解css使用**

- 选择器
  - 告诉浏览器要设置样式的html元素
- 声明块
  - ⽤于设置样式
- 层叠样式表
- Viewport
  - 将网页的视口设置为完美视口，开发移动端页面时一定要加上





#### 第2集 CSS的⼏种写法及推荐写法

**简介：讲解⼏种CSS的写法及推荐写法**

- 写法
  - 内部样式表
    - 写在元素的style标签⾥⾯的
  - 内联样式表
    - 写在styles属性⾥⾯的
  - 外部样式表
    - link标签将css资源引⼊
- 为什么选择外部样式表
  - 解决⻚⾯当中样式重复的问题
  - 代码分离，利于代码维护和阅读
  - 浏览器会缓存起来，提⾼⻚⾯响应速度变快了







#### 第3集 CSS核⼼之常⻅的选择器及使⽤场景

**简介：从实际的开发场景介绍使⽤哪个选择器**

- 元素（标签）选择器

  ```scss
  组合选择器: h1,p{color:red}
  ```

- 类选择器

  - 结合标签选择器

    ```scss
    h1.xiaodi {color:red;}
    ```

  - 多类选择器

    ```scss
    class="xiaodi background"
    ```

  - 链接多个类选择器

    ```scss
    .xiaodi.background{color:red; background-color:black}
    ```

- id选择器

  ```scss
  声明：#important{} 
  属性：id="important
  
  注意：一个id选择器的属性值在html文档中只能出现一次，避免写js获取id时出现混淆
  ```

- 通配符选择器*

- 派⽣选择器

  - 后代选择器

    ```scss
    h1 p{color:red;}
    ```

  - ⼦元素选择器

    ```scss
    div>span{font-size:900}
    ```

  - 相邻选择器（兄弟）

    ```scss
    h1+p{background-color:pink;}
    ```

    



#### 第4集 CSS核⼼之特殊的选择器及使⽤场景

**简介：CSS中特殊的选择器—伪类选择器的使⽤**

- 特殊的选择器

  - 伪类选择器
    - 不改变任何DOM内容。只是插入了一些修饰类的元素

  ```scss
  :first-child {}   	//第一项
  :last-child {}			//最后一项
  :nth-child(n) {}  	//第n项 
  :nth-child(2n+1){}  //奇数项
  :nth-child(2n) {} 	//偶数项
  :not()							//否定伪类 除了第n项
  
  a:link {color:#FF0000;} 		/*未访问的链接*/
  a:visited {color:#00FF00;}  /*已访问的链接*/
  a:hover {color:#FF00FF;}	  /*⿏标悬浮后的链接*/
  a:active {color:#0000FF;}   /*已选中的链接*/
  ```

  - 伪元素选择器

  ```scss
  ::first-letter  //第一个
  ::first-line		//第一行 只能用于块级元素
  ::selection     //选中
  ::before        //在开始位置
  ::after					//在结束位置
  ```



#### 第5集 CSS基本概念之盒⼦模型

**简介：详解CSS中的盒⼦模型**

- 什么是盒⼦模型

  - 在CSS⾥⾯，所有的HTML元素你都可以看成是⼀个盒⼦

    <img src="css笔记/image-20211105144514672.png" alt="image-20211105144514672"  /><img src="css笔记/9abd8fcbfcfb5140515828d3464962e2.png" alt="9abd8fcbfcfb5140515828d3464962e2"  />  

  - 盒⼦的内容(content)

    - 元素的大小

  - 盒⼦的内边距(padding)

    ```scss
    padding-left:10px  	//左边距10px
    padding-top:10px		//上边距10px
    padding-right:10px	//右边距10px
    padding-bottom:10px	//下边距10%，相对于父级元素的width
    
    padding:10px 10px 10px 10% //等同于上面四行 百分比是对应父标签的大小
    padding:5px 10px 		//上下边距5px、左右边距10px
    padding:5px 10px 20px  //上边距 左右边距 下边距
    padding:10px				//上下左右边距10px
    ```

  - 盒⼦的边框(border)

    ```scss
    border-left:3px solid #000  //左边距10px dotted dashed
    border-top:3px solid #000	//上边距10px
    border-right:3px solid #000	//右边距10px
    border-bottom:3px solid #000	//下边距10%，相对于父级元素的width
    
    border:3px solid #000 //等同于上面四行
    ```

  - 盒⼦的外边距(margin)

    ```scss
    margin-left:10px  //左边距10px
    margin-top:10px		//上边距10px
    margin-right:10px	//右边距10px
    margin-bottom:10%	//下边距10%，相对于父级元素的width
    
    margin:10px 10px 10px 10% //等同于上面四行
    margin:5px 10px 	//上下边距5px、左右边距10px
    margin:10px				//上下左右边距10px
    ```

- 盒子怪异模型

  - W3C标准的盒子模型（标准盒模型 )

    ```scss
    boxWidth=contentWidth
    ```

  - IE标准的盒子模型（怪异盒模型）

    ```scss
    box-sizing:border-box //声明
    boxWidth=contentWidth+border+padding
    ```

- 外边距折叠

  - 上下两个兄弟盒子的margin都为正取大，都为负取小，一正一负相加

  - 父子元素盒子的margin（假设没有内边距或边框把外边距分隔开），也会合并；

    只有普通文档流中块框的垂直外边距才会发生外边距合并。行内框、浮动框或绝对定位之间的外边距不会合并

    ```scss
    解决父子边距合并：
    父元素{
    	overflow:auto;
    }
    
    父元素::before{
      display: table;
      content: "";
    }
    ```

    



#### 第6集 CSS中的常⽤属性

**简介：讲解CSS的常⽤属性的作⽤**

- 常⽤属性

  - 盒⼦的位置和⼤⼩

    - 尺寸

      ```scss
      宽度 width: ⻓度|百分⽐|auto
      ⾼度 height
      边界 margin padding 上右下左|上下左右
      ```

    - 布局

      ```
      浮动：float
      定位：position
      弹性布局：flex
      盒⼦内容超出部分：overflow：hidden | scroll | auto
      ```

  - 外观，⻛格

    ```scss
    background-image
    background-repeat
    background-size
    background-position
    background-color
    ```

    - ⽂字属性

      ```scss
      字体⼤⼩ font-size
      是否加粗 font-weight
      是不是斜体 font-style
      字体是什么 font-family
      ```





#### 第7集 CSS的层叠与选择器优先级

**简介：介绍CSS中的层叠特性和选择器优先级**

- CSS全称：层叠样式表(Cascading Style Sheets)

- 层叠是⼀个基本特征

  - ⼀个css属性被多次声明的时候，会根据优先级或者声明顺序来计算采⽤哪个样式

- 优先级是怎么计算

  - 通配符选择器 1： *

  - 标签选择器 2：div/span/p/li
  - 类选择器 3：class
  - id选择器 6：id
  - 行内样式 5
  - !important 6（尽量不要在公⽤代码⾥使⽤）





#### 第8集 CSS中常⻅的可继承的属性

**简介：介绍CSS中什么是继承及常⻅的可继承的属性**

- 什么是继承
  - 继承了⽗元素的某些属性
  - 优点：继承可以简化代码，便于维护
- 默认设置继承的属性
  - ⽂字属性，文本缩进、对齐、行高



#### 第9集 本章课程作业练习题布置

**简介：本章课程作业练习题布置**

作业要求：

- 第一题

  - 判断下图中的"小滴课堂 "颜色

  <img src="css笔记/image-20211110113904600.png" alt="image-20211110113904600" style="zoom:67%;" />

- 第二题

  - 一个div标签有四个子元素标签div，子元素的内容分别为“苹果”、“橘子”、“橙子”、“香蕉”，子元素的宽高为100px，边框为2px，实线，红色

  - 每个子元素的上下间距为50px，子元素的实际宽高为设置的宽高
  - 第二个子元素鼠标悬浮时，字体为红色，背景颜色为绿色，即使子元素个数发生变化都满足



#### 第10集 本章课程作业常见问题和答案解析

**简介：本章课程作业问题和答案解析**

答案解析：

- 第一题
  - 考察选择器优先级的知识点

- 第二题
  - 考察盒子模型
  - 怪异盒子模型的实现
  - 伪类选择器



### 第五章 CSS进阶之布局定位

#### 第1集 CSS中布局前置知识

**简介：讲解CSS中布局前置知识**

- 正常元素怎么布局
  - 默认，⼀个块级元素的内容宽度就是其⽗元素的100%，他的⾼度和其内容⾼度⼀致
  - ⾏内元素它的宽度和⾼度都是根据内容决定的(⽆法设置⾏内元素的宽⾼)
    - 可设置display属性，定义元素的类型(css3定义布局)
- 元素之间⼜是如何相互影响的呢
  - 正常的⽂档布局流
    - 每个块级元素会在上个元素下⾯另起⼀⾏
    - ⾏内元素不会另起⼀⾏



#### 第2集 CSS中必须掌握的float布局

**简介：讲解CSS中float布局**

- float布局

  - 使用

    ```scss
    float: none;  //默认值，元素不浮动
    float: left;	//元素像左浮动
    float: right; //元素像右浮动
    ```

  - 特点

    - 浮动元素会脱离文档流，不再占据文档流空间
    - 浮动元素彼此之间是从左往右排列，宽度超过一行自动换行
    - 在浮动元素前面元素不浮动时，浮动元素无法上移
    - 块级元素和行内元素浮动之后都变成行内块级元素
    - 浮动元素不会盖住文字，可以设置文字环绕效果

  - 清除浮动

    ```scss
    clear:both;
    content:'';
    display:block;
    ```

    


#### 第3集 CSS中必须掌握的flex布局

**简介：讲解CSS中flex布局**

- flex布局（弹性布局） CSS3知识点

  - 父元素容器的属性

    <img src="css笔记/image-20211107210931945.png" alt="image-20211107210931945" style="zoom:67%;" />

    ```scss
    /* 设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。*/
    display: flex;
    
    /* 决定主轴的方向（即项目的排列方向）*/
    flex-direction: row | row-reverse | column | column-reverse;
    
    /* 是否换行 */
    flex-wrap: nowrap | wrap | wrap-reverse; 
    
    /* 定义水平方向对齐方式 */
    justify-content: flex-start | flex-end | center | space-between | space-around;
    
    /* 定义垂直方向对齐方式 */
    align-items: flex-start | flex-end | center | baseline | stretch;
    
    /* 定义多个轴线（多行/多列）对齐方式 */
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
    ```

  - 子元素容器的属性

    ```scss
    /* 定义子元素的排列顺序，默认为0 */
    order: -10 | -1 | 0 | 1 | 10;
    
    /* 定义子元素的放大比例，默认为0 */
    flex-grow: 0 | 1 | 2 | 3;
    
    /* 定义子元素的缩小比例，默认为1 */
    flex-shrink: 0 | 1;
    
    /* 定义了在分配多余空间之前，项目占据的主轴空间 */
    flex-basis: <length> | auto;
    
    /* flex-grow, flex-shrink 和 flex-basis的简写 */
    flex: 0 1 auto;
    ```

  - 兼容性

    - 浏览器ie9及以上

- 选择float布局 or flex布局？

  - 推荐是使用flex布局
    - flex布局易用，布局全面
    - float的创建初衷只是为了达到文字环绕的效果，另外需要清除浮动
    - 现在几乎所有公司的产品使用场景都在浏览器ie9以上







#### 第4集 CSS中必须掌握的position定位

**简介：讲解CSS中定位相关的知识点**

- 也是为布局引⼊的属性

- position常⽤的⼏个值

  ```scss
  position: static	 (静态定位)		父元素
  position: relative (相对绝对)   父元素
  position: absolute (绝对定位)
  
  position: fixed 	 (固定定位)   父元素
  position: sticky 	 (粘性定位)		父元素
  
  
  ```

- 相关的属性

  ```scss
  z-index //使⽤场景：当定位的盒⼦重叠在⼀起
  ```















#### 第5集 CSS之经典的三栏布局如何实现

**简介：讲解如何实现三栏布局**

- 问题：⾼度固定，左右两侧的盒⼦宽度为200px，中间⾃适应
- 解决
  - float实现
  - position实现
  - flex实现







#### 第6集 CSS之⽔平垂直居中的常用方法

**简介：如何使⽤CSS实现⽔平垂直居中**

- 如何使⽤CSS实现⽔平垂直居中

  - ⾏内块元素

    ```scss
    1. line-height
    	 text-align: center
    2. display: flex;
    	 justify-content: center;
       align-items: center;
    ```

  - 块级元素

    ```scss
    1. position + margin		清楚子元素的宽高
    2. position + transform 不清楚子元素的宽高
    3. flex 		
    4. table-cell           兼容性较差
    ```





#### 第7集 CSS扩展⾼级知识点之BFC

**简介：讲解什么是BFC**

- 定义
  - **块格式化上下⽂**（Block Formatting Context，BFC）是Web⻚⾯的可视化CSS渲染的⼀部分，是块盒⼦的布局过程发⽣的区域，也是浮动元素与其他元素交互的区域。
  - 即：形成了⼀块封闭的区域，能检测到区域内脱离⽂档流的元素
- 特点
  - css中隐含的属性，开启后不会被浮动的元素覆盖
  - BFC元素可以包含浮动元素
  - BFC元素的子元素和父元素外边距不重叠

- 开启（都会有副作用）
  - 设置元素浮动 float：left
  - 设置为行内块元素 display：inline-block
  - overflow：hidden（推荐）

- 作⽤
  - 清除浮动带来的影响
  - 解决边距塌陷问题(外边距折叠（Margin collapsing）也只会发⽣在属于同⼀BFC的块级元素之间)

#### 第8集 本章课程作业练习题布置

**简介：本章课程作业练习题布置**

作业要求：

- 实现小滴课堂的悬浮二维码与联系方式

  ![image-20211110121202542](css笔记/image-20211110121202542.png)







#### 第9集 本章课程作业常见问题和答案解析

**简介：本章课程作业问题和答案解析**

答案解析：

- 考察position: fixed定位

  

  



### 第六章 CSS3常用属性讲解

#### 第1集 CSS3边框

**简介：讲解css3边框**

- 圆角

  ```scss
  border-radius
  ```

- 盒阴影

  ```scss
  box-shadow
  ```

- 边界图片

  ```scss
  border-image
  ```



#### 第2集 CSS3渐变

**简介：讲解CSS3渐变**

- 基本语法

  ```scss
  /* 从上到下（默认情况下）*/
  background-image: linear-gradient(#e66465, #9198e5);
  
  /* 从左到右 */
  background-image: linear-gradient(to right, red , yellow);
  
  /* 对角 */
  background-image: linear-gradient(to bottom right, red, yellow);
  ```

- 使用角度

  ```scss
  /* 从上到下 */
  background-image: linear-gradient(180deg, red, yellow); 
  
  /* 从左到右 */
  background-image: linear-gradient(90deg, red, yellow);
  ```

- 多个颜色

  ```scss
  /* 从上到下 */
  background-image: linear-gradient(red, yellow, green);
  
  /* 从左到右 */
  background-image: linear-gradient(to right, red, orange, yellow);
  ```

- 透明度

  ```scss
  background-image: linear-gradient(rgba(255,0,0,0), rgba(255,0,0,1));
  ```

- 重复

  ```scss
  background-image: repeating-linear-gradient(red, yellow 10%, green 20%);
  ```





#### 第3集 CSS3文本效果

**简介：讲解CSS3文本效果**

- 文本阴影

  ```scss
  text-shadow: 5px 5px 5px #FF0000;
  ```

- 文本溢出

  ```scss
  /* 超过1行省略/裁剪 */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis | clip; 
  
  /* 超过2行省略/裁剪 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  ```

- 文本换行

  - 长文本换行

    ```scss
    word-wrap:break-word;
    ```

  - 单词拆分换行

    ```scss
    word-break: break-all;
    ```



#### 第4集 CSS3网格布局（grid）

**简介：讲解CSS3网格布局**

- 应用场景

  - flex布局、float布局应用于一维布局，网格布局应用于二位布局

    <img src="css笔记/image-20211108152150921.png" alt="image-20211108152150921" style="zoom:67%;" />

- 父元素属性

  ```scss
  /* 使用 */
  display: grid;
  grid-template-columns: 10px 10px 10px;
  grid-template-rows: 10px 10px 10px;
  
  /* 百分比使用 */
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: 33.33% 33.33% 33.33%;
  
  /* repeat()函数简化 */
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: repeat(3, 33.33%);
  ```

  





### 第七章 在线教育首页多功能实战

#### 第1集 真实的项目开发是怎么样的以及页面实战分析

**简介：真实开发的流程和页面分析**

- 真实项目开发流程

  - 需求评审

  - 与UI对接设计图

  - 开发页面

  - 与后端程序员协调接口协议

  - 接入接口数据联调

  - 开发完成，提交测试环境，自测完成然后提测

  - 解决bug

  - 提交预发环境

  - 产品，测试确认，与后端一起提交上正式环境（上线）

- 页面分析

  

#### 第2集 项目初始化和阿里巴巴矢量库的使用

**简介：项目初始化和矢量图的使用**

- 项目初始化

  - 新建文件夹
  - 初始化css样式

- 阿里巴巴矢量库

  - 地址

- https://www.iconfont.cn/

- 流程

  ```
  -	注册
  - 搜索图片
  - 加入购物车
  - 添加进项目、选择symbol格式
  - 生成在线链接
  ```

- 引入第三方icon

  ```html
  // 根文件html引入  注意：xxxxxxxx是自己项目的在线链接
  <script src="http:xxxxxxxx"></script>
  
  // 使用 注意 xxxx是icon的代码
  <svg class="icon" aria-hidden="true">
      <use xlink:href="#xxxx"></use>
  </svg>
  
  ```

    

#### 第3集 小滴课堂首页导航栏开发

**简介：首页导航栏的开发**



![image-20211110103217746](css笔记/image-20211110103217746.png).

#### 第4集 小滴课堂首页轮播图开发

**简介：首页轮播图开发**

![image-20211110103424328](css笔记/image-20211110103424328.png)



#### 第5集 小滴课堂首页课程列表开发上

**简介：首页课程列表开发上**

![image-20211110103518719](css笔记/image-20211110103518719.png)



#### 第6集 小滴课堂首页课程列表开发下

**简介：首页课程列表开发下**

![image-20211110103620700](css笔记/image-20211110103620700.png)



#### 第7集 小滴课堂首页底部开发

**简介：首页底部开发**

![image-20211110103711109](css笔记/image-20211110103711109.png)

#### 第8集 课程总结及项目中遇到的问题和未来学习规划

- 项⽬开发过程 

  - 先分析⼀个布局，分块细⼀点

  - 写对应的注释 

  - 考虑周全⼀点 

- 项⽬遇到的问题 

  - 布局乱了怎么办
    -  检查其他盒⼦的⾼度是否影响了 
  - 换着思路实现问题，⽐如我们的伪类来实现布局 
  - 学会iconfont使⽤ 
  - 未来的规划 
    - html + css(最基本的) 
    - js(跟⽹⻚交互使⽤的)   javascript
      - Vue.js 
      - React.js

  - 项⽬的构建
    -  git(代码管理⼯具) 
    -  webpack(打包⼯具，打包资源代码) 
  - 后端 
    - node.js(多了操作数据库的api) 
  - 学习技巧 
    - 只有当你的实际练习（写代码）⼤⼤于你的理论学习时间， 你才会有进步 
    - 锻炼下⾃⼰独⽴学习能⼒(必须学会看懂编辑器的提示，学会翻译)  
    - 多多看mdn⽂档，博⽂只能参考  











