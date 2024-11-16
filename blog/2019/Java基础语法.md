---
title: Java语法
toc: true
data: 2022-09-12 16:58:03
tags: Java笔记
categories: java
---

*Java语言的基础语法*<!--more-->

## 一、Java如何运行

1、按照格式编写代码为.java文件
	   2、使用javac工具进行解释
	   3、java 主类名 运行

------



## 二、关键字和保留字

**所有的关键字都是小写的**

例如：String就不是关键字 ，它是类名

Java8中一共有50个关键字。

![关键字表](Java基础语法/关键字表.png)

```java
用于定义数据类型的关键字
class	interface	void	int		long	short
double	float	char	enum	boolean		byte
    
用于定义流程控制的关键字
if	else	switch	for	while	do	return	
break	continue	case	default
 
用于定义访问权限修饰符的关键字
private		protected	public
```

```java
用于定义类，函数，变量修饰符的关键字
abstract	final	static	synchronized
用于定义类与类之间关系的关键字
extends		implements
用于定义建立实例及引用实例，判断实例的关键字
new		this	super	instanceof
用于异常处理的关键字
try		catch	finally		throw	throws
用于包的关键字
package		import
```

```java
用于定义数据类型值的字面值，不是关键字
true	false	null
    
保留字：goto	const
```

------

## 三、标识符

通俗的讲：凡是在代码中由程序员自己命名的部分都是标识符，例如：类名、变量名、方法名等。

Java中标识符有命名的规则（5个）：必须遵循，否则可能编译报错，或者运行报错

- Java的标识符只能使用26个英文字母（包括大小写）、数字0-9、下划线_、美元符号。
- 不能直接使用关键字、保留字、特殊值作为Java的标识符
- 数字不能开头
- 标识符中间不能包含空格，有空格就表示两个标识符
- 严格区分大小写（HelloWorld和helloworld是完全不同的两个类）

Java中标识符的命名规范（5个）：建议遵守，不遵守不会报错，但是会被鄙视

- 见名知意，例如：表示年龄值的变量可以使用age
- 类名等：每一个单词的首字母大写，例如：HelloWorld，AtGuiGuDemo，形式：XxxYyyZzz，
- 变量名等：从第二个单词开始首字母大写，例如：age，myAge，形式：xxxYyyZzz
- 常量名等：所有字母都大写，例如：INT_MAX_VALUE，PI，形式：XXX_YYY_ZZZ
- 包名等：所有字母都小写，例如：java.lang包，java,util包，形式：xxx.yyy.zzz

------



## 四、基本数据类型

Java是强类型语言，对数据类型是非常严格的。Java中数据类型分为两大类：

- **基本数据类型**：包括 `整数`、`浮点数`、`字符`、`布尔`。 
- **引用数据类型**：包括`数组`、 `类`、`接口`、`枚举`、`注解`。 

![image-20210628142322228](Java基础语法/image-20210628142322228.png)

整型：
		byte	1字节	-128 ~ 127
		short	2字节
		int	4字节
		long	8字节	+L（可以省略）

浮点型：
		float	4字节	+F（不能省略）
		double	8字节

字符型：
		char	2字节	‘  ’

布尔型：
		boolean	

数据类型提升：
		byte --> short --> int --> long --> float -->double
		char --> int --> long --> float --> double
		**特别的，byte、short、char三者运算  -->  int**

强制类型转换：逆运算（double --> int）
		会损失精度  截断操作

**超过long  用BigIntager**

------

## 五、常量

在程序里面写死的，固定，不变的值。在编译期间值已经是确定的了。

```java
class LiteralValue{
	public static void main(String[] args){
		System.out.println("hello");//字符串常量
		System.out.println(18);//整数常量
		System.out.println('是');//char单字符常量
		System.out.println('A');//char单字符常量
		System.out.println("--------------");
		
		//问题："a" 和 'a'有区别吗？
		//有区别。类型不同。导致底层的存储和计算方式不同。
		System.out.println('a' + 'b');//195，字符编码值求和
		System.out.println("a" + "b");//ab，字符串拼接
		
		System.out.println("--------------");
		System.out.println(18);//int整数常量
		System.out.println(1889624742245L);//long整数常量
		
		System.out.println("--------------");
		System.out.println(18.0);//默认是double类型常量
		System.out.println(18.0F);//明确是float类型常量
		System.out.println(18.0D);//明确是double类型常量
		System.out.println(18.07851155214562221F);//18.078512
		System.out.println(18.07851155214562221D);//18.07851155214562
	}
}
```

常量值的表示要注意什么？

- 字符串常量要用双引号""表示
- 单字符类型(char)常量要用单引号''表示
- 整数类型，如果整数值比较大，那么需要加L，用long类型表示
- 小数类型，如果要表示float类型，需要加F或f，如果要表示double类型，小数后面可以不加字母，或者加D或d

------



## 六、String类型变量

1、属于引用数据类型（类、接口、数组）
	   2、声明变量用双引号 “ ”
	   3、可以和8种数据类型变量做**连接**运算

**a = 97	A = 65**

### 变量的使用要注意

1、必须先声明后使用，否则会报找不到符号的错误

2、在用变量计算之前，或者输出变量的值之前，变量必须先赋值

3、变量可以反复赋值，但是不能重复声明

4、变量有作用域，看它属于哪个结构的{}，超出{}变量就失效了

5、给变量赋的值的类型必须<=变量的类型

```java
最终常量，有final修饰的变量。
看格式像变量，但是它的值在程序运行期间是不能修改的，所以本质上它是常量。
```



------

## 七、运算符

### 1、算术运算符

| 运算符 |         运算         |    范例     |   结果   |
| :----: | :------------------: | :---------: | :------: |
|   +    |          加          |     1+1     |    2     |
|   -    |          减          |     2-1     |    1     |
|   *    |          乘          |     2*2     |    4     |
|   /    |          除          |     5/2     |    2     |
|   %    |     取模（取余）     |     5/3     |    2     |
|  a++   | 自增后：先取值后运算 |  a=1;b=++a  | a=2;b=2  |
|  ++a   | 自增前：先运算后取值 |  a=1;b=a++  | a=2;b=1  |
|  a--   | 自减后：先取值后运算 |  a=1;b=--a  | a=0;b=0  |
|  --a   | 自减前：先运算后取值 |  a=1;b=a--  | a=0;b=1  |
| **+**  |      字符串连接      | "Ja"+"chen" | "Jachen" |

### 2、赋值运算符

=	+=	-=	*=	/=	%=

### 3、比较运算符（关系运算符）

|   运算符   |        运算        |            范例            | 结构  |
| :--------: | :----------------: | :------------------------: | :---: |
|     ==     |        相等        |            1==2            | false |
|     !=     |       不等于       |            1!=2            | true  |
|     <      |        小于        |            1<2             | true  |
|     >      |        大于        |            1>2             | false |
|     <=     |      小于等于      |            1<=2            | true  |
|     >=     |      大于等于      |            1>=2            | false |
| instanceof | 检查是否是类的对象 | "Jachen" instanceof String | true  |

### 4、逻辑运算符

&	逻辑与			|	逻辑或			!	逻辑非

&&	短路与			||短路或			^	逻辑异或(相同0  不同1)

|   a   |   b   | a&b(执行一半) | a&&b(全部执行) | a\|b  | a\|\|b |  !a   |  a^b  |
| :---: | :---: | :-----------: | :------------: | :---: | :----: | :---: | :---: |
| true  | true  |     true      |      true      | true  |  true  | false | false |
| true  | false |     false     |     false      | true  |  true  | false | true  |
| false | true  |     false     |     false      | true  |  true  | true  | true  |
| false | false |     false     |     false      | false | false  | true  | false |

### 5、位运算符

| 运算符 |    运算    |                       范例                       |
| :----: | :--------: | :----------------------------------------------: |
|   <<   |    左移    | 3<<2 = 12 --> 3 * 2 * 2 = 12            2的n次方 |
|   >>   |    右移    |               3>>1 = 1 --> 3/2 = 1               |
|  >>>   | 无符号右移 |              3>>>1 = 1 --> 3/2 = 1               |
|   &    |   与运算   |                     6&3 = 2                      |
|   \|   |   或运算   |                     6\|3 = 7                     |
|   ^    |  异或运算  |                     6^3 = 5                      |
|   ~    |  取反运算  |                     ~6 = -7                      |

### 6、三元运算符

(条件表达式)?表达式1:表达式2;

## 八、优先级

![image-20220919102348700](Java基础语法/image-20220919102348700.png)

------



## 附：流程控制

顺序结构：代码从上到下顺序执行

分支结构：if	else	、	swicth	case

循环结构：for	、	while	、do	while

------

