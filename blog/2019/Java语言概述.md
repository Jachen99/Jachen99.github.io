---
title: Java语言概述
toc: true
data: 2022-09-12 10:15:58
tags: Java笔记
categories: java
---

*SE阶段：主要学习路线 1、Java基础编程 2、Java高级编程 3、Java技术拓展*<!--more-->

基础【变量、数据类型、分支结构、循环结构、数组、参数、方法、封装、继承、多态、接口、异常处理】
		高级【枚举、注解、集合、IO、多线程、常用类、反射机制、网络编程、Lambda表达式、Stream API、新特性】
		扩展【数据结构、算法、设计模式、JVM】

## 一、Java基础知识图解

​			   ![a5784d9b7dadf8e05f742d9121a2697](Java语言概述/a5784d9b7dadf8e05f742d9121a2697.png)

------



## 二、常用DOS命令

```
dir：列出当前目录下的文件/文件夹
md：创建目录
rd：删除目录

cd：进入指定目录
cd..：返回上一级目录
cd\：返回根目录
del：删除文件

exit：退出dos命令行
```

------



## 三、Java语言特点

* **面向对象：**Java语言支持封装、继承、多态，面向对象编程，让程序更好达到`高内聚`，`低耦合`的标准。
* **支持分布式：**Java语言支持Internet应用的开发，在基本的Java应用编程接口中有一个网络应用编程接口（java net），它提供了用于网络应用编程的类库，包括URL、URLConnection、Socket、ServerSocket等。Java的RMI（远程方法激活）机制也是开发分布式应用的重要手段。
* **健壮型：**Java的强类型机制、异常处理、垃圾的自动收集等是Java程序健壮性的重要保证。对指针的丢弃是Java的明智选择。
* **安全性高：**Java通常被用在网络环境中，为此，Java提供了一个安全机制以防恶意代码的攻击。如：安全防范机制（类ClassLoader），如分配不同的名字空间以防替代本地的同名类、字节代码检查。
* **跨平台性：**Java程序（后缀为java的文件）在Java平台上被编译为体系结构中立的字节码格式（后缀为class的文件），然后可以在实现这个Java平台的任何系统中运行。

### 跨平台的原理

Java程序先编译为字节码，字节码是运行在JVM（Java Virtual Machine，Java虚拟机）中，JVM负责把字节码解释成对应平台的指令。

不同平台安装不同的JVM即可实现跨平台，实现Java程序”一次编写，处处运行“的效果。

- **JVM**（Java Virtual Machine ）：Java虚拟机，是运行所有Java程序的假想计算机，是Java程序的运行环境之一，也是Java 最具吸引力的特性之一。我们编写的Java代码，都运行在**JVM** 之上。
- **JRE ** (Java Runtime Environment) ：是Java程序的运行时环境，包含`JVM` 和运行时所需要的`核心类库`。
- **JDK**  (Java Development's Kit)：是Java程序开发工具包，包含`JRE` 和开发人员使用的工具。

JDK = JRE + 开发工具

JRE = JVM + 核心类库

<img src="Java语言概述/955083a3f259017dbe7f6e8a3674e81.png" alt="955083a3f259017dbe7f6e8a3674e81" style="zoom:80%;" />

官方图解

<img src="Java语言概述/527b76df01a06df486fb9c027b2de19.png" alt="527b76df01a06df486fb9c027b2de19" style="zoom:80%;" />

**Java区分大小写、windows不区分大小写**

**应用程序 = 算法 + 数据结构**

**安装软件的路径不能包括中文和空格**

------



## 四、配置环境变量

在任何路径下都可以执行Java开发工具

Java开发人员必须安装JDK，才能开发和运行Java程序。

1、下载

如果要自己下载JDK，从Oracle官网下载。找到Java8，找到对应操作系统，找到对应指令集，然后选择JDK安装包下载。

2、安装

安装，例如路径选择是：D:\ProgramFiles\Java\jdk1.8.0_333

3、配置环境变量

如果没有把“D:\ProgramFiles\Java\jdk1.8.0_333\bin”路径值配置到path环境变量中，那么只能在D:\ProgramFiles\Java\jdk1.8.0_333\bin路径下使用Java的开发工具，不能在任意路径下使用Java的开发工具。

方式一：

把D:\ProgramFiles\Java\jdk1.8.0_333\bin添加到path环境变量中。

![image-20220916103153039](Java语言概述/image-20220916103153039.png)

方式二：

新建JAVA_HOME环境变量，目的是为了让其他的软件，例如：Tomcat等软件也可以使用JDK的开发工具、JRE、源码等等。

那么可以把D:\ProgramFiles\Java\jdk1.8.0_333值配置到JAVA_HOME环境变量中。

步骤：

（1）新建JAVA_HOME环境变量，值是D:\ProgramFiles\Java\jdk1.8.0_333

![image-20220916103403600](Java语言概述/image-20220916103403600.png)

（2）可选

在path里面把JDK的bin目录路径，用JAVA_HOME简化。

![image-20220916103559441](Java语言概述/image-20220916103559441.png)

![image-20220916103622858](Java语言概述/image-20220916103622858.png)

------



## 五、输出HelloWorld

### 5.1 Java程序的开发步骤

#### 第一步：编写代码

##### 1、用什么工具编写代码？

（1）文本编辑工具：记事本、notepad++、editplus等

（2）继承开发工具：eclipse、IDEA等

##### 2、代码结构

```java
类{
    方法{
        语句;
    }
}
```

因为Java是面向对象的语言，所以有类的概念，所有代码必须放到类结构中。暂时大家不用管类是什么。

Java是从C语言发展过来的高级语言，代码还必须放到“函数/过程/方法”里面。

##### 3、编写后保存文件类型是什么？

必须保存为xx.java文件，.java是Java程序的源文件后缀名。



#### 第二步：编译

##### 1、用什么工具编译？

JDK自带有一个编译工具：javac.exe



##### 2、如何使用编译工具？

在命令行中，找到源文件的存储路径，然后使用下面的命令：

```java
javac 源文件名.java
```

##### 3、编译结果是什么？

每一个类编译后都会生成一个对应的xx.class文件，这个是字节码文件。



#### 第三步：运行

##### 1、运行工具是什么？

JDK自带有一个运行工具：java.exe



##### 2、如何使用运行工具？

在字节码文件的路径下，使用如下命令：

```java
java 字节码文件名
    或
java 主类名
```

##### 3、什么是主类名？

包含main方法的类名称，就是主类名。

main方法是Java程序的入口，它的写法是固定的：

```java
public static void main(String[] args){
    //....
}
```



### 5.2 HelloWorld程序（***\*\*）

#### 1、代码示例

```java
/*
这是咱们的第一个Java程序，类名是HelloWorld。类名写在class后面，与class用空格分开。
main方法是Java程序的入口，写法是固定的。
public static void main(String[] args){
	
}

System.out.println("hello java");是输出语句，表示在控制台原样输出"hello java"这串字符。
语句以;结尾，表示一个语句结束了。
*/
class HelloWorld{//类
    public static void main(String[] args){//方法
        System.out.println("hello java");//语句
    }
}
```

![image-20220916105657789](Java语言概述/image-20220916105657789.png)

#### 2、编译

##### （1）进入到源文件目录

方式一：

![image-20220916105910006](Java语言概述/image-20220916105910006.png)

![image-20220916105922662](Java语言概述/image-20220916105922662.png)

方式二：

![image-20220916105959926](Java语言概述/image-20220916105959926.png)





##### （2）输入编译命令

```java
javac HelloWorld.java
```

##### （3）查看编译结果

![image-20220916110703780](Java语言概述/image-20220916110703780.png)

#### 3、运行

```java
java HelloWorld
```

![image-20220916111004538](Java语言概述/image-20220916111004538.png)

### 5.3 常见问题（遇到问题会解决）

#### 1、编码问题

![image-20220916110200251](Java语言概述/image-20220916110200251.png)

原因：

cmd的命令行的默认编码（处理中文的编码）是GBK，然而Java代码目前的编码是UTF-8。

![image-20220916110249002](Java语言概述/image-20220916110249002.png)

![image-20220916110326309](Java语言概述/image-20220916110326309.png)

解决：

方式一：转换编码后，重新保存，重新编译

![image-20220916110452234](Java语言概述/image-20220916110452234.png)

方式二：编译时指定源文件的编码

```java
javac -encoding UTF-8 源文件名.java 
```

![image-20220916135956851](Java语言概述/image-20220916135956851.png)

方式三：修改Notepad++软件的默认编码为GBK。注意，这个只对后面新建的文件有效，对之前已经创建的文件无效。

![image-20220916140203523](Java语言概述/image-20220916140203523.png)

![image-20220916140240351](Java语言概述/image-20220916140240351.png)

#### 2、源文件名不规范

![image-20220916113813859](Java语言概述/image-20220916113813859.png)

#### 3、找不到xx.java文件

![image-20220916114025817](Java语言概述/image-20220916114025817.png)

#### 4、notepad++里面打开的命令行找不到javac命令

![image-20220916114333420](Java语言概述/image-20220916114333420.png)

解决办法：先退出notepad++，然后用管理员身份运行notepad++。

![image-20220916114456960](Java语言概述/image-20220916114456960.png)

#### 5、单词写错

正确：class，错误：Class，calss等

正确：String，错误：string，spring等

正确：System，错误：system等

正确：println，错误：prinln等

正确：main，错误：mian等



#### 6、类名和源文件名问题

```java
/*
类名和文件名是否需要一直的问题
（1）区分：
源文件名、类名、字节码文件名

（2）类名和字节码文件名一定是一样的

（3）类名和源文件名可以不一样
例如：类名FileAndClassNameDemo
	  源文件名是 FileAndClassName.java

（4）当类名和源文件名不一样时
编译： javac 源文件名.java
	例如：javac FileAndClassName.java
运行： java 主类名
	例如：java FileAndClassNameDemo

（5）当class前面有public，那么源文件名必须和类名一样，否则编译报错，
例如，现在这个情况， 编译就会报错：
D:\atguigu\javaee\JavaSE20220915\code\day0916_01code>javac FileAndClassName.java
FileAndClassName.java:16: 错误: 类FileAndClassNameDemo是公共的, 应在名为 FileAndClassNameDemo.java 的文件中声明
public class FileAndClassNameDemo{
       ^
1 个错误


建议：无论有没有public，源文件和类名都保持一致。否则，如果要修改某个类，这个类和源文件名不一样，查找这个类在哪个源文件就非常困难，不利于维护。
*/
public class FileAndClassNameDemo{
	public static void main(String[] args){
		System.out.println("hello");
	}
}
```



![image-20220916115848170](Java语言概述/image-20220916115848170.png)

![image-20220916120112171](Java语言概述/image-20220916120112171.png)

![image-20220916120506740](Java语言概述/image-20220916120506740.png)

![image-20220916120657501](Java语言概述/image-20220916120657501.png)

#### 7、修改notepad++默认的开发语言

![image-20220916140514443](Java语言概述/image-20220916140514443.png)

![image-20220916140554975](Java语言概述/image-20220916140554975.png)

![image-20220916140730908](Java语言概述/image-20220916140730908.png)

![image-20220916140819840](Java语言概述/image-20220916140819840.png)

#### 8、标点符号不规范问题

所有代码中的字符、运算符、标点符号等等都应该是英文半角输入，而不能是中文输入，或者全角输入。

![image-20220916141156960](Java语言概述/image-20220916141156960.png)

![image-20220916141258556](Java语言概述/image-20220916141258556.png)

#### 9、代码格式、风格问题

代码的风格也很重要，既能显示专不专业，又能体现代码的逻辑，便于代码的阅读。

推荐的风格有两种：

首要推荐的风格：

```java
class Style{
	public static void main(String[] args){
		System.out.println("代码风格、格式问题");
	}
}
```

- 每遇到一个{，下面的代码，就往右缩进一个Tab键
- {在行尾
- }单独一行，而且同 和它配对的{第一个字母对齐

![image-20220916142307533](Java语言概述/image-20220916142307533.png)

其次推荐的风格（照顾C程序员的习惯）：

```java
class Style
{
	public static void main(String[] args)
	{
		System.out.println("代码风格、格式问题");
	}
}
```

所有的{}都是独立一行，而且配对的{}对齐就可以了。