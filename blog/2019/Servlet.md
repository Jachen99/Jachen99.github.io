---
title: Servlet
toc: true
data: 2022-08-11 22:47:29
tags: [JavaWeb,面试题]
categories: 服务器
---

*介绍了什么是Servlet、Servlet常用方法、生命周期等*<!--more-->

这是一个JavaWeb Servlet文档:https://tomcat.apache.org/tomcat-9.0-doc/servletapi/index.html

### 		1、什么是Servlet

**简介：**是JavaServlet的简称，用Java编写的运行在Web服务器或应用服务器上的程序,具有独立于平台和协议的特性, 主要功能在于交互式地浏览和生成动态Web内容
		**作用：**接收用户通过浏览器传来的表单数据，或者读取数据库信息返回给浏览器查看，创建动态网页
		**接口路径：**package javax.servlet
					有两个常见的⼦子类：HttpServlet、GenericServlet

### 2、重写doGet和doPost方法

**doGet方法**
		**doPost方法**

### 3、讲解Servlet的生命周期（面试）

```java
实例化->使用构造方法创建对象

初始化->执行init方法：Servlet 的生命期中，仅执行一次 init() 方法，它是在服务器装⼊Servlet 时执行的,即第一次访问这个Servlet才执行

服务->执行service方法，service()方法是 Servlet的核心。每当一个客户请求一个HttpServlet 对象，该对象的service()方法就要被调用

销毁-> 执行destroy方法,destroy() 方法仅执行一次，即在服务器停止且卸装 Servlet 时执行该方法

public interface Servlet {
   void init(ServletConfig var1) throws ServletException;
   ServletConfig getServletConfig();
   void service(ServletRequest var1, ServletResponse var2) throws 
ServletException, IOException;
   String getServletInfo();
    void destroy();
}

HttpServlet里面实现了service方法，里面会根据不同的http method调用不同的方法，所以我们自定义servlet只要重写对应的doXXX方法即可
```

**查看继承和实现关系 XXXServlet->HttpServlet->GenericServlet->implements Servle**

### 4、新版Servlet3.0~5.0和旧版配置

**旧版Servlet，在xml里面配置类目和路径，比较不方便**

```java
//XML配置
<servlet>
        <servlet-name>userServlet</servlet-name>
        <servlet-class>net.xdclass.web.UserServlet</servlet-class>
    </servlet>
    
    <servlet-mapping>
        <servlet-name>userServlet</servlet-name>
        <url-pattern>/userServlet</url-pattern>
    </servlet-mapping>
```

**新版Servelt，也就是3.0之后，支持注解的方式**

```java
@WebServlet(name = "userServlet",urlPatterns = {"/user1","/user2","/test"})
public class UserServlet extends HttpServlet {
     @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) 
throws ServletException, IOException {
        System.out.println("doGet");
        //实战响应内容
        resp.setContentType("text/html;charset=utf-8");
        PrintWriter printWriter = resp.getWriter();
        printWriter.write("<div> doGet jiguanchen.space 你好！ 
</div>");
    }
}
       
                          
//配置项
//servlet名称，若不指定，则为Servlet的完整类名
  String name() default "";
//路径映射,配置多个，需要/开头
  String[] value() default {};
//路径映射,⽀持配置多个，需要/开头
  String[] urlPatterns() default {};
 //标记容器是否在启动应用时就加载Servlet，默认或数值为负数时表示第一次请求Servlet时再加载；0或正数表示启动应用就加载
  int loadOnStartup() default -1;
 //配置初始参数
  WebInitParam[] initParams() default {};
  //是否支持异步操作模式
  boolean asyncSupported() default false;
```

