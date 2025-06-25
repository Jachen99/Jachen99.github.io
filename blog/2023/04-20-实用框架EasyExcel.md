---
slug: product-easyexcel
title: 实用框架EasyExcel
authors: [jiguanchen]
tags: [EasyExcel]
---

**背景**：*EasyExcel是一个基于Java的简单、省内存的读写Excel的开源项目。在尽可能节约内存的情况下支持读写百M的Excel。它有许许多多的应用场景 例如 数据导入：减轻录入工作量 ；数据导出：统计信息归档 ； 数据传输：异构系统之间数据传输等等*<!--more-->

## 1、EasyExcel介绍

- Java领域解析、生成Excel比较有名的框架有Apache poi、jxl等。但他们都存在一个严重的问题就是非常的耗内存。如果你的系统并发量不大的话可能还行，但是一旦并发上来后一定会OOM或者JVM频繁的full gc。
- EasyExcel是阿里巴巴开源的一个excel处理框架，**以使用简单、节省内存著称**。EasyExcel能大大减少占用内存的主要原因是在解析Excel时没有将文件数据一次性全部加载到内存中，而是从磁盘上一行行读取数据，逐个解析。
- EasyExcel采用一行一行的解析模式，并将一行的解析结果以观察者的模式通知处理（AnalysisEventListener）

文档地址：https://easyexcel.opensource.alibaba.com

github地址：https://github.com/alibaba/easyexcel



## 2、EasyExcel写操作

### 2.1、创建项目

**pom中引入xml相关依赖**

```xml
<dependencies>
    <dependency>
        <groupId>com.alibaba</groupId>
        <artifactId>easyexcel</artifactId>
    </dependency>
</dependencies>
```

当引入该依赖之后，会发现在项目的依赖文件中同时多出了poi的类库。也就是说，EasyExcel是基于poi来进行实现的，间接地引入了如下依赖：

```xml
<dependency>
     <groupId>org.apache.poi</groupId>
     <artifactId>poi</artifactId>
</dependency>
<dependency>
     <groupId>org.apache.poi</groupId>
     <artifactId>poi-ooxml</artifactId>
</dependency>
```



### 2.2、创建实体类 

**设置表头和添加的数据字段**

```java
@Data
public class Stu {
    //设置表头名称
    @ExcelProperty("学生编号")
    private int sno;
    
    //设置表头名称
    @ExcelProperty("学生姓名")
    private String sname;
}
```

-   @ExcelProperty：用于设置Excel表头，其中index用户表头的编号，从0开始；value为表头对应的内容。
-   @DateTimeFormat：用于日期的格式化

完成上述功能准备工作之后，我们就可以来生成一个Excel了。

### 2.3 、实现写操作

**（1）创建方法循环设置要添加到Excel的数据**

```java
//循环设置要添加的数据，最终封装到list集合中
private static List<Stu> data() {
    List<Stu> list = new ArrayList<Stu>();
    for (int i = 0; i < 10; i++) {
        Stu data = new Stu();
        data.setSno(i);
        data.setSname("张三"+i);
        list.add(data);
    }
    return list;
}
```

**（2）实现最终的添加操作**

```java
public static void main(String[] args) throws Exception {
    String fileName = "E:\\11.xlsx";
    // 这里 需要指定写用哪个class去写，然后写到第一个sheet，名字为模板 然后文件流会自动关闭
    // 如果这里想使用03 则 传入excelType参数即可
    EasyExcel.write(fileName, Stu.class).sheet("写入方法一").doWrite(data());
}
```

那么我们如何解析Excel呢？接着看....

## 3、EasyExcel读操作

### 3.1、创建实体类

```java
@Data
public class Stu {
    
    //设置表头名称
    //设置列对应的属性
    @ExcelProperty(value = "学生编号",index = 0)
    private int sno;
    
    //设置表头名称
    //设置列对应的属性
    @ExcelProperty(value = "学生姓名",index = 1)
    private String sname;
}
```

首先创建一个监听器ExcelListener，集成EasyExcel提供AnalysisEventListener类：

### 3.2、创建读取操作监听器

```java
public class ExcelListener extends AnalysisEventListener<Stu> {
    //创建list集合封装最终的数据
    List<Stu> list = new ArrayList<Stu>();
    //一行一行去读取excle内容
    @Override
    public void invoke(Stu user, AnalysisContext analysisContext) {
        System.out.println("***"+user);
        list.add(user);
    }
    //读取excel表头信息
    @Override
    public void invokeHeadMap(Map<Integer, String> headMap, AnalysisContext context) {
        System.out.println("表头信息："+headMap);
    }
    //读取完成后执行
    @Override
    public void doAfterAllAnalysed(AnalysisContext analysisContext) {
        System.out.println("list = " + list);
    }
}
```

在该监听器中，通过重写AnalysisEventListener的方法来获得解析的数据、表头信息，以及解析完毕之后执行的操作信息。

同样写Excel一样，通过EasyExcel类的静态方法来执行读操作：

### 3.3、调用方法实现读取 

```java
public static void main(String[] args) throws Exception {
    String fileName = "E:\\11.xlsx";
    // 这里 需要指定调用哪个class去读，然后读取第一个sheet 文件流会自动关闭
    EasyExcel.read(fileName, Stu.class, new ExcelListener()).sheet().doRead();
}
```

上面提到的@DateTimeFormat注解可转换日期格式，还有其他类似功能的注解和自定义转换器。
