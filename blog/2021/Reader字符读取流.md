---
title: Reader字符读取流
toc: true
data: 2022-10-21 19:53:07
tags: Java
categories: java
---

**背景**：*Reader用于读取字符流的抽象类。子类必须实现的方法只有 read(char[], int, int) 和  close()。但是，多数子类将重写此处定义的一些方法，以提供更高的效率和/或其他功能。*<!--more-->

## Reader类

![image-20221021195911134](Reader%E5%AD%97%E7%AC%A6%E8%AF%BB%E5%8F%96%E6%B5%81/image-20221021195911134.png)

下面是基于JDK1.6的Reader的方法的相关文档

![image-20221021200351275](Reader%E5%AD%97%E7%AC%A6%E8%AF%BB%E5%8F%96%E6%B5%81/image-20221021200351275.png)

我们常用的Reader的子类为FileReader和 BufferedReader。

## FileReader子类

**FileReader类从InputStreamReader类继承而来**。该类按字符读取流中数据。
构造方法：

| 方法                        | 说明                   |
| --------------------------- | ---------------------- |
| FileReader(File file)       | 传入一个File对象       |
| FileReader(String filePath) | 传入一个文件路径字符串 |

创建FIleReader对象成功后，可以调取下面的方法，

| 方法                                                | 描述                                            |
| --------------------------------------------------- | ----------------------------------------------- |
| **public int read() throws IOException**            | 读取单个字符，返回一个int型变量代表读取到的字符 |
| **public int read(char [] c, int offset, int len)** | 读取字符到c数组，返回读取到字符的个数           |

```java
try {
    // 1. 创建对象
    String path = "D:\\JaChen.txt";
    Reader in = new FileReader(path);
    // 第二种创建方式
    // Reader in = new FileReader(new File(path));
    // 2. 开始读取
    int b = 0;
    while ((b = in.read()) != -1) {
        System.out.println(b);
    }
    // 3. 释放,JDK1.7之后在try中自带in.close(),也省略下面代码
    in.close();
} catch (IOException e) {
    e.printStackTrace();
}
```

## BufferedReader子类

从字符输入流中读取文本，缓冲各个字符，从而实现字符、数组和行的高效读取。 可以指定缓冲区的大小，或者可使用默认的大小。
构造方法：

| 方法                      | 说明                       |
| ------------------------- | -------------------------- |
| BufferedReader(Reader in) | 一般传入一个FileReader对象 |

特有方法

| 返回值 | 方法     | 说明     |
| ------ | -------- | -------- |
| String | readLine | 读取一行 |

```java
FileInputStream fis = new FileInputStream("JaChen.java");
InputStreamReader isr = new InputStreamReader(fis);
BufferedReader br = new BufferedReader(isr);
 
 /*
 * BufferedReader提供了按行读取方法：
 * String readLine()
 * 连续读取若干字符，直到读取到换行符为止
 * 并将换行符之间读取到的字符以一个字符串返回
 * 若返回值为NULL，则表示读取到末尾。
 * 注意：该字符串不包含最后的换行符。
 * 
 */
String line = null;
while((line = br.readLine())!=null){
    System.out.println(line); // 一行一行读
}
br.close();
```

## InputStreamReader类

InputStreamReader 是**字节流通向字符流的桥梁**：它使用指定的 [`charset`](../../java/nio/charset/Charset.html)  **读取字节并将其解码为字符**。它使用的字符集可以由名称指定或显式给定，或者可以接受平台默认的字符集。 

每次调用 InputStreamReader 中的一个 read()  方法都会导致从底层输入流读取一个或多个字节。要启用从字节到字符的有效转换，可以提前从底层流读取更多的字节，使其超过满足当前读取操作所需的字节。 

为了达到最高效率，可要考虑在 BufferedReader 内包装 InputStreamReader。例如： 

```java
 BufferedReader in
   = new BufferedReader(new InputStreamReader(System.in));
```

这个类继承Reader类

```java
public class InputStreamReader extends Reader {}
```

```java
 //构造方法
 public InputStreamReader(InputStream in) {
        super(in);
        try {
            sd = StreamDecoder.forInputStreamReader(in, this, (String)null);
        } catch (UnsupportedEncodingException e) {
           
            throw new Error(e);
        }
    }
//使用指定的字符集名称构造InputStreamReader流：本质是初始化其实例域的一个变量，可以发现字符集是初始化方法的第三个参数
 public InputStreamReader(InputStream in, String charsetName)
        throws UnsupportedEncodingException
    {
        super(in);
        if (charsetName == null)
            throw new NullPointerException("charsetName");
        sd = StreamDecoder.forInputStreamReader(in, this, charsetName);
    }
//sd变量：本质是StreamDecoder类的对象，InputStreamReader的构造方法就是在给此对象做初始化操作
private final StreamDecoder sd;
//InputStreamReaderAPI类的所有API都是利用了sd变量的，因此可以看出InputStreamReader类的方法本质是调用StreamDecoder类方法
 
    /**
     * 获取设置的字符集
     */
    public String getEncoding() {
        return sd.getEncoding();
    }
 
    /**
     * 读取流并返回一个字符，遇到文件末尾返回-1
     */
    public int read() throws IOException {
        return sd.read();
    }
 
    /**
     * 读取字符到字符数组的部分中，遇到文件末尾返回-1
     */
    public int read(char cbuf[], int offset, int length) throws IOException {
        return sd.read(cbuf, offset, length);
    }
 
    /**
     * 检测流是否准备好呗读取
     */
    public boolean ready() throws IOException {
        return sd.ready();
    }
 
    /**
    * 关闭流并释放资源
    */
    public void close() throws IOException {
        sd.close();
    }
```

## InputStreamReader类与FileReader类关系

```tex
  1、FileReader类仅仅是InputStreamReader的简单衍生并未扩展任何功能
  2、FileReader类读取数据实质是InputStreamReader类在读取，而InputStreamReader读取数据实际是StreamDecoder类读取
  3、因此在使用字符输入流的时候实际是StreamDecoder类在发挥作用
```
