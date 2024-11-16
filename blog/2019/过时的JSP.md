---
title: 过时的JSP
toc: true
data: 2022-08-11 22:25:56
tags: JavaWeb
categories: 服务器
---

*介绍了JSP与Servlet的关系、内置对象、基本语法、现状等*<!--more-->

### JSP和Servlet的关系

什么是JSP: 全称Java Server Pages，是⼀种动态⽹页开发技术
		1、使用JSP标签在HTML⽹页中插入Java相关代码，标签通常以<%开头 以%>结束
		2、JSP本身就是一种Servlet, JSP在第一次被访问的时候被编译为HttpJspPage类,是HttpServlet的⼀个子类
		3、为什么用这个：和原生Servle 相比JSP可以很方便的编写HTML网页而不⽤去大量的用println语句输出html代码
		**通俗来说：jsp就是在html里面写java代码，servlet就是在java里面写html代码**

### JSP内置了9个对象可以直接⽤：

out、session、response、request、config、page、application、pageContext、exception

```jsp
request  HttpServletRequest类的实例

response HttpServletResponse类的实例

out PrintWriter类的实例，用于把结果输出至网页上

session HttpSession类的实例

application ServletContext类的实例，与应用上下文有关

config  ServletConfig类的实例

pageContext PageContext类的实例，提供对JSP页面所有对象以及命名空间的访问
page    Java类中的this关键字

Exception   Exception类的对象，代表发生错误的JSP页面中对应的异常对象
```

### JSP脚本程序

<% 代码片段 %>

```jsp
<%
out.println("IP address is " + request.getRemoteAddr());
%>
```

### JSP表达式的语法格式：（不能⽤分号结束）

<%= 表达式 %>

```jsp
<%=request.getRequestURL()%>
```

### JSP的现状

2015年之前很公司使用，过后互联网发展很块，各类分布式技术架构，前端框架、后端框架大量出现，性能和便利性比JSP强很多，所以基本很少企业使用JSP了