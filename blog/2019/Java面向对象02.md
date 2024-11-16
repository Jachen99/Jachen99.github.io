---
title: Java面向对象02
toc: true
data: 2022-09-28 20:54:25
tags: Java笔记
categories: java
---

*接着上一篇Java面向对象01，继续探究多态、抽象类、接口等重要概念*<!--more-->

## 十一、多态

本意为多种形态

### 1、前提条件

- 必须有继承
- 必须有虚方法的重写

重载是多态吗  ------->  重载是静态多态。

### 2、多态的表现

编译时类型与运行时类型不一致

编译时类型：编译器识别的类型，编译器在编译过程中以编译时类型对 对象的使用形式进行格式和语法检查；

运行时类型：对象真实的类型，即new对象时的类型，实际完成的功能得由对象的运行时类型决定

编译时类型和运行时类型

```java
Pet pet1=new Dog();//Pet就是编译时类型，Dog就是运行时类型
```

如何查看运行时类型

```java
public void test01(Pet pet){//Pet pet=new Dog();
    //如何查看运行时类型(后期反射会学习)
    Class<? extends Pet> aClass = pet.getClass();
    System.out.println("aClass = " + aClass);
}
```

### 3、多态的好处

实现方法的动态绑定

有继承

有重写

```java
public static void main1(String[] args) {
    Car car1=new Audi();

    Car car2=new Bmw();

    new Test().test02(car2);
}

public void test02(Car car){
    car.run();
}
```

### 4、多态的应用

没有多态

```java
public class Person {
    private String name;
    private Audi audi;
    //get/set
}
```

```java
public static void main(String[] args) {
    Person person=new Person();
    person.setName("李易峰");
    person.setAudi(new Audi());
    //人要开车
    person.getAudi().run();
}
```

提出的问题

如果设计的是一人只允许有一辆车

如果遇到换车的问题该如何通过多态解决

```java
public class Person {
    private String name;
    //一人只允许有一辆车(车的类型不要写死，使用多态解决这个问题)
    private Car car;

    //set/get方法
}
```

```java
public static void main(String[] args) {
        Person person=new Person();
        person.setName("李易峰");
//        person.setCar(new Audi());//换车自由
        person.setCar(new Bmw());

        person.getCar().run();
    }
```

如果设计的是一人允许有多辆车

如果遇到换车和新增车该如何通过多态解决

```java
public class Person {
    private String name;
    //一人只允许有一辆车(车的类型不要写死，使用多态解决这个问题)
    private Car[] car=new Car[10];
    private int num;//计数

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Car[] getCar() {
        return car;
    }

    public void addCar(Car car){
        this.car[num++]=car;
        //只能添加十辆车
        //if(num==9){
            //对数组扩容(后期学一个集合)
        //}
    }

    //后期也支持换车、删除车(对数组的操作)
}
```

```java
public static void main(String[] args) {
    Person person=new Person();
    person.setName("李易峰");
    person.addCar(new Audi());
    person.addCar(new Audi());
    person.addCar(new Bmw());
    person.addCar(new Bmw());

    Car[] car = person.getCar();
    //拿到已拥有的车，开车出门
    for (Car car1 : car) {
        if(car1!=null){
            car1.run();
        }
    }

}
```

### 5、多态的弊端

无法使用子类独有的内容

子类有父类没有

父类

```java
public class Car {
    public void run(){
        System.out.println("汽车在跑");
    }
}
```

子类

```java
public class Audi extends Car {
    @Override
    public void run() {
        System.out.println("交给夸戳，只管踩油门");
    }
	//子类独有内容
    public void open(){
        System.out.println("打开奥迪的车门");
    }
}
```

测试类

```java
public static void main(String[] args) {
    //编译看编译类型(左边)，运行看运行类型(右边)
    Car car=new Audi();
    car.run();//调用run方法不报红，是因为Car类中有run方法，运行的时候，实际运行的是Audi的run方法
    System.out.println(car.getClass());
    car.open();//调用open方法报红，是因为Car类中没有open方法

}
```

### 6、向上转型和向下转型

多态的表现就是因为向上转型

Animal animal=new Dog()

取消多态性就是向下转型

类似于强转

double d=10D ;

int i=(int)d;

```java
//多态的弊端
public static void main(String[] args) {
    //编译看编译类型(左边)，运行看运行类型(右边)
    Car car=new Bmw();
    car.run();//调用run方法不报红，是因为Car类中有run方法，运行的时候，实际运行的是Audi的run方法
    System.out.println(car.getClass());

    //使用不了子类独有内容
    //car.open();//调用open方法报红，是因为Car类中没有open方法

    //如果就想用子类独有内容(向下转型)
    Audi audi=(Audi) car;//有风险，要求car的运行时类型必须是Audi,才可以成功
    audi.open();
}
```

### 7、类型的判断

判断一个对象是否是该类型的对象

```java
public static void main(String[] args) {
    //编译看编译类型(左边)，运行看运行类型(右边)
    Car car=new Audi();

    //如果就想用子类独有内容(向下转型)
    //向下转型之前做一个判断(car的运行时类型是否是Audi)
    	//语法： 对象名 instanceof 类型
    System.out.println(car instanceof Audi);
    if(car instanceof Audi){
        Audi audi=(Audi) car;//有风险，要求car的运行时类型必须是Audi,才可以成功
        audi.open();
    }
}
```

### 8、成员变量是不具备多态性

成员变量寻找的原理就是就近原则

父类

```java
public class Father {
    int a=1;

    public void eat(){
        System.out.println("吃饭");
    }
}
```

子类

```java
public class Son extends Father {
    int a=2;

    @Override
    public void eat() {
        System.out.println("吃满汉全席");
    }

}
```

测试类

```java
public static void main(String[] args) {
    Father father=new Son();
    father.eat();//子类重写后的方法
    System.out.println(father.a);//父类的a的值(子类的成员变量a不会对父类的a做覆盖操作)
}
```

### 9、虚方法

在Java中虚方法是指在编译阶段和类加载阶段都不能确定方法的调用入口地址，在运行阶段才能确定的方法，即可能被重写的方法。

当我们通过“对象.方法”的形式调用一个虚方法时，要如何确定它具体执行哪个方法呢？

==注意：super.方法 和 对象.非虚方法（静态方法，final修饰的方法等），不使用以下规则。==

（1）编译时静态分派：先看这个对象xx的编译时类型，在这个对象的编译时类型中找到能匹配的方法

```
匹配的原则：看实参的编译时类型与方法形参的类型的匹配程度
A：找最匹配    实参的编译时类型 = 方法形参的类型
B：找兼容      实参的编译时类型 < 方法形参的类型
```

（2）运行时动态绑定：再看这个对象xx的运行时类型，如果这个对象xx的运行时类重写了刚刚找到的那个匹配的方法，那么执行重写的，否则仍然执行刚才编译时类型中的那个匹配的方法

```java
class MyClass{
	public void method(Father f) {
		System.out.println("father");
	}
	public void method(Son s) {
		System.out.println("son");
	}
}
class MySub extends MyClass{
	public void method(Father d) {
		System.out.println("sub--father");
	}
    public void method(Daughter d) {
		System.out.println("daughter");
	}
}
class Father{
	
}
class Son extends Father{
	
}
class Daughter extends Father{
	
}
```

```java
public class TestVirtualMethod {
    public static void main(String[] args) {
        Father f = new Father();
        Son s = new Son();
        Daughter d = new Daughter();
        
        MyClass my = new MySub();
        my.method(f);//sub--father
            /*
            (1)静态分派：看my的编译时类型MyClass，在MyClass中找最匹配的
                匹配的原则：看实参的编译时类型与方法形参的类型的匹配程度
                 A：找最匹配    实参的编译时类型 = 方法形参的类型
                 B：找兼容      实参的编译时类型 < 方法形参的类型
                 实参f的编译时类型是Father，形参(Father f) 、(Son s)
                 最匹配的是public void method(Father f)
            （2）动态绑定：看my的运行时类型MySub，看在MySub中是否有对    public void method(Father f)进行重写
                发现有重写，如果有重写，就执行重写的
                    public void method(Father d) {
                        System.out.println("sub--");
                    }
             */
        my.method(s);//son
            /*
            (1)静态分派：看my的编译时类型MyClass，在MyClass中找最匹配的
                匹配的原则：看实参的编译时类型与方法形参的类型的匹配程度
                 A：找最匹配    实参的编译时类型 = 方法形参的类型
                 B：找兼容      实参的编译时类型 < 方法形参的类型
                 实参s的编译时类型是Son，形参(Father f) 、(Son s)
                 最匹配的是public void method(Son s)
            （2）动态绑定：看my的运行时类型MySub，看在MySub中是否有对 public void method(Son s)进行重写
                发现没有重写，如果没有重写，就执行刚刚父类中找到的方法
             */
        my.method(d);//sub--father
             /*
            (1)静态分派：看my的编译时类型MyClass，在MyClass中找最匹配的
                匹配的原则：看实参的编译时类型与方法形参的类型的匹配程度
                 A：找最匹配    实参的编译时类型 = 方法形参的类型
                 B：找兼容      实参的编译时类型 < 方法形参的类型
                 实参d的编译时类型是Daughter，形参(Father f) 、(Son s)
                 最匹配的是public void method(Father f)
            （2）动态绑定：看my的运行时类型MySub，看在MySub中是否有对 public void method(Father f)进行重写
                发现有重写，如果有重写，就执行重写的
                    public void method(Father d) {
                        System.out.println("sub--");
                    }
             */
    }
}
```

思考：

- 要是把my的类型声明为MySub类型会怎么样
- 要是把s和d的类型声明为Father类型会怎么样？

------



## 十二、实例初始化

### 1、构造器

#### 1.1、构造器的作用

new对象，并在new对象的时候为实例变量赋值。

#### 1.2、构造器的语法格式

```java
【修饰符】 class 类名{
    【修饰符】 构造器名(){
    	// 实例初始化代码
    }
    【修饰符】 构造器名(参数列表){
        // 实例初始化代码
    }
    //可用修饰符：private protacted 缺省 public
}
```

**总结：**

1. 构造器名**必须与它所在的类名相同**。
2. 它没有返回值，所以不需要返回值类型，甚至不需要void
3. 如果不提供构造器，系统会给出无参数构造器，并且该构造器的修饰符默认与类的修饰符相同
4. 如果提供了构造器，系统将不再提供无参数构造器，除非你自己定义。
5. 构造器是可以重载的，既可以定义参数，也可以不定义参数。
6. 构造器的修饰符**只能是权限修饰符**，不能被其他任何修饰

#### 1.3、同一个类中构造器的相互调用

- this()：调用本类的无参构造
- this(实参列表)：调用本类的有参构造
- this()和this(实参列表)只能出现在构造器首行
- 不能出现递归调用

#### 1.4、如果有继承，构造器如何调用？

```java
class A{
	A(int a){
		System.out.println("A类有参构造器");
	}
}
class B extends A{
	B(){
		System.out.println("B类无参构造器");
	}
}
class Test05{
    public static void main(String[] args){
        B b = new B();
        //A类显示声明一个有参构造，没有写无参构造，那么A类就没有无参构造了
		//B类显示声明一个无参构造，        
		//B类的无参构造没有写super(...)，表示默认调用A类的无参构造
        //编译报错，因为A类没有无参构造
    }
}
```

```java
class A{
	A(int a){
		System.out.println("A类有参构造器");
	}
}
class B extends A{
	B(){
		super();
		System.out.println("B类无参构造器");
	}
}
class Test06{
    public static void main(String[] args){
        B b = new B();
        //A类显示声明一个有参构造，没有写无参构造，那么A类就没有无参构造了
		//B类显示声明一个无参构造，        
		//B类的无参构造明确写super()，表示调用A类的无参构造
        //编译报错，因为A类没有无参构造
    }
}
```

```java
class A{
	A(int a){
		System.out.println("A类有参构造器");
	}
}
class B extends A{
	B(int a){
		super(a);
		System.out.println("B类有参构造器");
	}
}
class Test07{
    public static void main(String[] args){
        B b = new B(10);
        //A类显示声明一个有参构造，没有写无参构造，那么A类就没有无参构造了
		//B类显示声明一个有参构造，        
		//B类的有参构造明确写super(a)，表示调用A类的有参构造
        //会打印“A类有参构造器"和"B类有参构造器"
    }
}
```

```java
class A{
    A(){
        System.out.println("A类无参构造器");
    }
	A(int a){
		System.out.println("A类有参构造器");
	}
}
class B extends A{
    B(){
        super();//可以省略，调用父类的无参构造
        System.out.println("B类无参构造器");
    }
	B(int a){
		super(a);//调用父类有参构造
		System.out.println("B类有参构造器");
	}
}
class Test8{
    public static void main(String[] args){
        B b1 = new B();
        B b2 = new B(10);
    }
}
/*A类无参构造器
B类无参构造器
A类有参构造器
B类有参构造器*/
```

**总结：**

- **子类继承父类时，不会继承父类的构造器。**只能通过super()或super(实参列表)的方式调用父类的构造器。
- super();：子类构造器中一定会调用父类的构造器，默认调用父类的无参构造，super();可以省略。
- super(实参列表);：不管父类是否有有参构造，如果子类要调用父类的有参构造，则必须使用super(实参列表);的语句。
- super()和super(实参列表)都只能出现在子类构造器的首行

#### 1.5、IDEA查看构造器和方法形参列表快捷键：Ctrl+P

![image-20220930094419820](Java面向对象02/image-20220930094419820.png)

#### 1.6、标准JavaBean

`JavaBean` 是 Java语言编写类的一种标准规范。符合`JavaBean` 的类，要求：

（1）类必须是具体的和公共的，

（2）并且具有无参数的构造方法，

（3）成员变量私有化，并提供用来操作成员变量的`set` 和`get` 方法。

（4）重写toString方法

```java
public class ClassName{
  //成员变量
    
  //构造方法
  	//无参构造方法【必须】
  	//有参构造方法【建议】
  	
  //getXxx()
  //setXxx()
  //其他成员方法
}
```

 编写符合`JavaBean` 规范的类，以学生类为例，标准代码如下：

```java
public class Student {
	// 成员变量
	private String name;
	private int age;

	// 构造方法
	public Student() {
	}

	public Student(String name, int age) {
		this.name = name;
		this.age = age;
	}

	// get/set成员方法
	public void setName(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public int getAge() {
		return age;
	}
    
    //其他成员方法列表
    public String toString(){
        return "姓名：" + name + "，年龄：" + age;
    }
}
```

测试类，代码如下：

```java
public class TestStudent {
	public static void main(String[] args) {
		// 无参构造使用
		Student s = new Student();
		s.setName("柳岩");
		s.setAge(18);
		System.out.println(s.getName() + "---" + s.getAge());
         System.out.println(s);

		// 带参构造使用
		Student s2 = new Student("赵丽颖", 18);
		System.out.println(s2.getName() + "---" + s2.getAge());
         System.out.println(s2);
	}
}
```

### 2、非静态代码块

#### 2.1、非静态代码块的作用

和构造器一样，也是用于实例变量的初始化等操作。

#### 2.2、非静态代码块的意义

如果多个重载的构造器有公共代码，并且这些代码都是先于构造器其他代码执行的，那么可以将这部分代码抽取到非静态代码块中，**减少冗余代码**。

#### 2.3、非静态代码块的执行特点

所有非静态代码块中代码都是**在new对象时自动执行，并且一定是先于构造器的代码执行。**

#### 2.4、非静态代码块的语法格式

```java
【修饰符】 class 类{
    {
        非静态代码块
    }
    【修饰符】 构造器名(){
    	// 实例初始化代码
    }
    【修饰符】 构造器名(参数列表){
        // 实例初始化代码
    }
}
```

#### 2.5、非静态代码块的应用

案例：

（1）声明User类，

- 包含属性：username（String类型），password（String类型），registrationTime（long类型），私有化

- 包含get/set方法，其中registrationTime没有set方法

- 包含无参构造，
  - 输出“新用户注册”，
  - registrationTime赋值为当前系统时间，
  - username就默认为当前系统时间值，
  - password默认为“123456”

- 包含有参构造(String username, String password)，
  - 输出“新用户注册”，
  - registrationTime赋值为当前系统时间，
  - username和password由参数赋值

- 包含public String toString()方法，返回：“用户名：xx，密码：xx，注册时间：xx”

（2）编写测试类，测试类main方法的代码如下：

```java
    public static void main(String[] args) {
        User u1 = new User();
        System.out.println(u1);

        User u2 = new User("chai","8888");
        System.out.println(u2);
    }
```

如果不用非静态代码块，User类是这样的：

```java
public class User {
    private String username;
    private String password;
    private long registrationTime;

    public User() {
        System.out.println("新用户注册");
        registrationTime = System.currentTimeMillis();
        username = registrationTime+"";
        password = "123456";
    }

    public User(String username,String password) {
        System.out.println("新用户注册");
        registrationTime = System.currentTimeMillis();
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public long getRegistrationTime() {
        return registrationTime;
    }
     @Override
    public String toString(){
        return "用户名：" + username + "，密码：" + password + "，注册时间：" + registrationTime;
    }
}
```

如果提取构造器公共代码到非静态代码块，User类是这样的：

```java
public class User {
    private String username;
    private String password;
    private long registrationTime;

    //非静态代码块实现
    {
        System.out.println("新用户注册");
        registrationTime = System.currentTimeMillis();
    }

    public User() {
        username = registrationTime+"";
        password = "123456";
    }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public long getRegistrationTime() {
        return registrationTime;
    }
    @Override
    public String toString(){
        return "用户名：" + username + "，密码：" + password + "，注册时间：" + registrationTime;
    }
}
```

### 3、实例初始化过程(get/set之前)

#### 3.1、实例初始化的目的

实例初始化的过程就是 在new对象的过程中 为实例变量赋有效初始值 的过程。

#### 3.2、实例化相关代码

在 new对象的过程中 给 实例变量赋初始值 可以通过以下3个部分的代码完成：

```tex
实例变量直接初始化 < 非静态代码块 < 构造器
```

#### 3.3、演示实例初始化执行过程

```java
//执行顺序 ： 实例变量直接初始化 < 非静态代码块 < 构造器
public class Demo1 {
    private int a = 1;
    {
        System.out.println("非静态代码块开始：a = " + a);
        a = (int)(Math.random()*11 + 10);
        System.out.println("非静态代码块结束：a = " + a);
    }
    public Demo1(int a) {
        System.out.println("构造器开始：a = " + this.a);
        this.a = a;
        System.out.println("构造器结束：a = " + this.a);
    }
    public static void main(String[] args) {
        Demo1 demo1 = new Demo1(3);
        /*
            非静态代码块开始：a = 1
            非静态代码块结束：a = 16
            构造器开始：a = 16
            构造器结束：a = 3
         */
    }
}

//补充：
//      产生一个[10,20]范围的随机数
//      Math.random()：[0,1)的小数
//      Math.random()*11：[0,11)的小数
//      Math.random()*11+10：[10,21)的小数
//      (int)(Math.random()*11 + 10)：[10,21)的整数，[10,20]
```

```java
public class Demo2 {
    {
        // Java规定，在声明之前使用成员变量，需要加this.
        System.out.println("非静态代码块开始：a = " + this.a);
        a = (int)(Math.random()*11 + 10);
        System.out.println("非静态代码块结束：a = " + this.a);
    }
    //声明语句可以在代码块、构造器、方法体的外面
    //private int a;
    //赋值语句必须在代码块，构造器里面，或方法里面，不独立存在。
    //a = 1;
    private int a = 1;//本质上是两件事，一个声明，一个赋值
    public Demo2(int a) {
        System.out.println("构造器开始：a = " + this.a);
        this.a = a;
        System.out.println("构造器结束：a = " + this.a);
    }
    public static void main(String[] args) {
        Demo2 demo2 = new Demo2(3);
        /*
            非静态代码块开始：a = 0
            非静态代码块结束：a = 11
            构造器开始：a = 1
            构造器结束：a = 3
         */
    }
}
```

#### 3.4、实例初始化方法

实际上我们编写的代码在编译时，会自动处理代码，整理出一个或多个的<init>(...)实例初始化方法。一个类有几个实例初始化方法，由这个类就有几个构造器决定。

实例初始化方法的方法体，由4部分构成：

（1）super()或super(实参列表) 

- 这里选择哪个，看原来构造器首行是super()还是super(实参列表) 
- *如果原来构造器首行是this()或this(实参列表)，那么就取对应构造器首行的super()或super(实参列表)* 
- 如果原来构造器首行既没写this()或this(实参列表)，也没写super()或super(实参列表) ，默认就是super()

（2）非静态实例变量的显示赋值语句
       （3）非静态代码块
       （4）对应构造器中剩下的的代码

特别说明：其中（2）和（3）是按编写顺序合并的，（2）和（3）被插入到构造器中，把（1）和（4）分开了。（1）一定在首行（4）一定在最后面。

#### 3.5、演示父子类实例初始化执行过程

```java
public class Father {
    private int a = 1;
    {
        System.out.println("父类的非静态代码块a = " + a);
    }
    public Father() {
        System.out.println("父类的无参构造");
    }
    public Father(int a) {
        this.a = a;
        System.out.println("父类的有参构造a = " + this.a);
    }
}
```

```java
public class Son extends Father {
    private int b = 2;
    {
        System.out.println("子类的非静态代码块b = " + b);
    }
    public Son() {
        super();//不要忘了它的存在，它对应的是父类Father的无参实例初始化过程
        System.out.println("子类的无参构造");
    }
    public Son(int a, int b) {
        super(a);//它对应的是父类Father的有参实例初始化过程
        this.b = b;
        System.out.println("子类的有参构造");
    }
}
```

```java
public class TestSon {
    public static void main(String[] args) {
        Son s1 = new Son();
        System.out.println("------------");
        Son s2 = new Son(3,3);
    }
}
/*
父类的非静态代码块a = 1
父类的无参构造
子类的非静态代码块b = 2
子类的无参构造
------------
父类的非静态代码块a = 1
父类的有参构造a = 3
子类的非静态代码块b = 2
子类的有参构造
 */
```

![image-20220707180731690](Java面向对象02/image-20220707180731690.png)

#### 3.6、实例初始化执行特点

* 创建对象时，才会执行
* **每new一个对象，都会执行该对象的实例初始化代码**
* 调用一个构造器，就是执行它对应的<init>实例初始化代码
* 一定是先父后子，即先完成 从父类继承的实例变量的赋值 操作，再完成 子类声明的实例变量的赋值 操作。即super()或super(实参列表)一定在实例初始化方法的**首行**。
* 子类super()还是super(实参列表)实例初始化方法中的super()或super(实参列表) 不仅仅代表父类的构造器代码，而是**代表父类构造器对应的实例初始化方法**。

------



## 十三、关键字

### 1、this

**含义**：当前对象
	   在构造器或静态代码块内，this正在初始化的对象

**特性** ：可以省略

![image-20220930113303792](Java面向对象02/image-20220930113303792.png)

### 2、super

**含义**：super是调用父类的成员

![image-20220930113935829](Java面向对象02/image-20220930113935829.png)

### 3、native（了解）

#### 3.1.native的意义

native：本地的，原生的

#### 3.2.native的语法

native只能修饰方法，表示这个方法的方法体代码不是用Java语言实现的，而是由C/C++语言编写的。但是对于Java程序员来说，可以当做Java的方法一样去正常调用它，或者子类重写它。

JVM内存的管理：

![](Java面向对象02/1561465258546.png)

| 区域名称   | 作用                                                         |
| ---------- | ------------------------------------------------------------ |
| 程序计数器 | 程序计数器是CPU中的寄存器，它包含每一个线程下一条要执行的指令的地址 |
| 本地方法栈 | 当程序中调用了native的本地方法时，本地方法执行期间的内存区域 |
| 方法区     | 存储已被虚拟机加载的类信息、常量、静态变量、即时编译器编译后的代码等数据。 |
| 堆内存     | 存储对象（包括数组对象），new来创建的，都存储在堆内存。      |
| 虚拟机栈   | 用于存储正在执行的每个Java方法的局部变量表等。局部变量表存放了编译期可知长度的各种基本数据类型、对象引用，方法执行完，自动释放。 |

### 4、final

#### 4.1.final的意义

final：最终的，不可更改的

#### 4.2.final修饰类

表示这个类不能被继承，没有子类

```java
final class Eunuch{//太监类
	
}
class Son extends Eunuch{//错误
	
}
```

#### 4.3.final修饰方法

表示这个方法不能被子类重写

```java
class Father{
	public final void method(){
		System.out.println("father");
	}
}
class Son extends Father{
	public void method(){//错误
		System.out.println("son");
	}
}
```

#### 4.4.final修饰变量

final修饰某个变量（成员变量或局部变量），表示它的值就不能被修改，即常量，常量名建议使用大写字母。

> 如果某个成员变量用final修饰后，没有set方法，并且必须初始化（可以显式赋值、或在初始化块赋值、实例变量还可以在构造器中赋值）

```java
public class TestFinal {
    public static void main(String[] args){
        final int MIN_SCORE = 0;
        final int MAX_SCORE = 100;

        MyDate m1 = new MyDate();
        System.out.println(m1.getInfo());

        MyDate m2 = new MyDate(2022,2,14);
        System.out.println(m2.getInfo());
    }
}
class MyDate{
    //没有set方法,必须有显示赋值的代码
    private final int year;
    private final int month;
    private final int day;
    public MyDate(){
        year = 1970;
        month = 1;
        day = 1;
    }
    public MyDate(int year, int month, int day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
    public int getYear() {
        return year;
    }
    public int getMonth() {
        return month;
    }
    public int getDay() {
        return day;
    }
    public String getInfo(){
        return year + "年" + month + "月" + day + "日";
    }
}
```

------



## 十四、静态

### 1、静态关键字

在类中声明的实例变量，其值是每一个对象独立的。但是有些成员变量的值*不需要或不能每一个对象单独存储一份*，即有些成员变量和当前类的对象无关。
	   在类中声明的**实例方法，在类的外面必须要先创建对象，才能调用**。但是有些方法的调用和当前类的对象无关，那么创建对象就有点麻烦了。
	   此时，就需要将和当前类的对象无关的成员变量、成员方法声明为静态的（static）。

### 2、静态变量

#### 2.1、语法格式

有static修饰的成员变量就是静态变量。

```java
【修饰符】 class 类{
	【其他修饰符】 static 数据类型  静态变量名;
}
```

#### 2.2、静态变量的特点

- 静态变量的默认值规则和实例变量一样。
- **静态变量值是所有对象共享**。

- 静态变量的值存储在**方法区**。
- 静态变量在本类中，可以在任意方法、代码块、构造器中直接使用。
- 如果权限修饰符允许，在其他类中可以通过“类名.静态变量”直接访问，也可以通过“对象.静态变量”的方式访问。
- **静态变量的get/set方法也静态的**，当局部变量与静态变量重名时，使用“类名.静态变量”进行区分。

| 分类     | 数据类型                       | 默认值   |
| -------- | ------------------------------ | -------- |
| 基本类型 | 整数（byte，short，int，long） | 0        |
|          | 浮点数（float，double）        | 0.0      |
|          | 字符（char）                   | '\u0000' |
|          | 布尔（boolean）                | false    |
|          | 数据类型                       | 默认值   |
| 引用类型 | 数组，类，接口                 | null     |

演示：

```java
public class Employee {
    private static int total;//这里私有化，在类的外面必须使用get/set方法的方式来访问静态变量
    static String company; //这里缺省权限修饰符，是为了演示在类外面演示“类名.静态变量”的方式访问
    private int id;
    private String name;

    {
        //两个构造器的公共代码可以提前到非静态代码块
        total++; 
        //这里使用total静态变量的值为id属性赋值
        id = total; 
    }

    public Employee() {
    }
    public Employee(String name) {
        this.name = name;
    }
    public void setId(int id) {
        this.id = id;
    }
    public int getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public static int getTotal() {
        return total;
    }
    public static void setTotal(int total) {
        Employee.total = total;
    }
    @Override
    public String toString() {
        return "Employee{company = " + company + ",id = " + id + " ,name=" + name +"}";
    }
}
```

```java
public class TestStaticVariable {
    public static void main(String[] args) {
        //静态变量total的默认值是0
        System.out.println("Employee.total = " + Employee.getTotal());

        Employee c1 = new Employee("小明");
        Employee c2 = new Employee();
        System.out.println(c1);//静态变量company的默认值是null
        System.out.println(c2);//静态变量company的默认值是null
        System.out.println("Employee.total = " + Employee.getTotal());//静态变量total值是2

        Employee.company = "新东方";
        System.out.println(c1);//静态变量company的值是新东方
        System.out.println(c2);//静态变量company的值是新东方

        //只要权限修饰符允许,虽然不推荐，但是也可以通过“对象.静态变量”的形式来访问
        c1.company = "新北方";

        System.out.println(c1);//静态变量company的值是新北方
        System.out.println(c2);//静态变量company的值是新北方
    }
}
```

#### 2.3、静态变量内存分析

![image-20220104100145059](Java面向对象02/image-20220104100145059.png)

### 3、静态方法

#### 3.1、语法格式

有static修饰的成员方法就是静态方法。

```java
【修饰符】 class 类{
	【其他修饰符】 static 返回值类型 方法名(形参列表){
        方法体
    }
}
```

#### 3.2、静态方法的特点

- 静态方法在本类的任意方法、代码块、构造器中都可以直接被调用。
- 只要权限修饰符允许，静态方法在其他类中可以通过“类名.静态方法“的方式调用。也可以通过”对象.静态方法“的方式调用。
- **静态方法可以被子类继承，但不能被子类重写**。
- 静态方法的调用都**只看编译时类型**。

```java
public class Father {
    public static void method(){
        System.out.println("Father.method");
    }
    public static void fun(){
        System.out.println("Father.fun");
    }
}
```

```java
public class Son extends Father{
    //@Override //尝试重写静态方法，加上@Override编译报错，去掉Override不报错，但是也不是重写
    public static void fun(){
        System.out.println("Son.fun");
    }
}
```

```java
public class TestStaticMethod {
    public static void main(String[] args) {
        Father.method();
        Son.method();//继承静态方法

        Father f = new Son();
        f.method();//执行Father类中的method
    }
}
```

### 4、静态代码块

如果想要为静态变量初始化，可以直接在静态变量的声明后面直接赋值，也可以使用静态代码块。

#### 4.1、语法格式

在代码块的前面加static，就是静态代码块。

```java
【修饰符】 class 类{
	static{
        静态代码块
    }
}
```

#### 4.2、静态代码块的特点

**每一个类的静态代码块只会执行一次。**

静态代码块的执行**优先**于非静态代码块和构造器。

```java
public class Chinese {
//    private static String country = "中国";
    private static String country;
    private String name;
    {
        System.out.println("非静态代码块，country = " + country);
    }
    static {
        country = "中国";
        System.out.println("静态代码块");
    }
    public Chinese(String name) {
        this.name = name;
    }
}
```

```java
public class TestStaticBlock {
    public static void main(String[] args) {
        Chinese c1 = new Chinese("张三");
        Chinese c2 = new Chinese("李四");
    }
}
```

#### 4.3、静态代码块和非静态代码块

静态代码块在类初始化时执行，只执行一次
   	非静态代码块在实例初始化时执行，每次new对象都会执行

### 5、类初始化

（1）类的初始化就是为静态变量初始化。实际上，类初始化的过程时在调用一个<clinit>()方法，而这个方法是编译器自动生成的。编译器会将如下两部分的**所有**代码，**按顺序**合并到类初始化<clinit>()方法体中。

- 静态类成员变量的显式赋值语句

- 静态代码块中的语句


（2）每个类初始化只会进行一次，如果子类初始化时，发现父类没有初始化，那么会先初始化父类。

（3）**类的初始化一定优先于实例初始化**。

- 类初始化代码只执行一次
- 父类优先于子类初始化
- 类初始化优先于实例初始化

### 6、静态导入

如果大量使用另一个类的静态成员，可以使用静态导入，简化代码。

```java
import static 包.类名.静态成员名;
import static 包.类名.*;
```

### 7、静态与非静态的区别

#### 7.1、本类中的访问限制区别

静态的类变量和静态的方法可以在**本类的任意方法、代码块、构造器**中直接访问。

非静态的实例变量和非静态的方法**只能**在本类的非静态的方法、非静态代码块、构造器中直接访问。

即：

- 静态直接访问静态，可以
- 非静态直接访问非静态，可以
- 非静态直接访问静态，可以
- **<font color='red'>静态直接访问非静态，不可以</font>**

#### 7.2、在其他类的访问方式区别

静态的类变量和静态的方法可以通过“类名.”的方式直接访问；也可以通过“对象."的方式访问。

非静态的实例变量和非静态的方法**只能**通过“对象."方式访问。

#### 7.3、this和super的使用

静态的方法和静态的代码块中，**不允许**出现this和super关键字，如果有重名问题，使用“类名.”进行区别。

非静态的方法和非静态的代码块中，可以使用this和super关键字。

#### 7.4、静态类变量和非静态实例变量、局部变量

总结：

- 静态类变量（简称静态变量）：存储在方法区，有默认值，所有对象共享，生命周期和类相同，还可以有权限修饰符、final等其他修饰符
- 非静态实例变量（简称实例变量）：存储在堆中，有默认值，每一个对象独立，生命周期每一个对象也独立，还可以有权限修饰符、final等其他修饰符
- 局部变量：存储在栈中，没有默认值，每一次方法调用都是独立的，有作用域，只能有final修饰，没有其他修饰符

------



## 十五、抽象类

### 1、什么是抽象？

抽象：即不具体、或无法具体

![image-20220928212645646](Java面向对象02/image-20220928212645646.png)

### 2、抽象类的用法

* **抽象方法**：被abstract修饰没有方法体的方法。
* **抽象类**：被abstract修饰的类。

```java
//抽象类的语法格式：
【权限修饰符】 abstract class 类名{   
}
【权限修饰符】 abstract class 类名 extends 父类{
    
}
//抽象方法的语法格式：
【其他修饰符】 abstract 返回值类型 方法名(【形参列表】);
```

如果一个`class`定义了方法，但没有具体执行代码，这个方法就是抽象方法，抽象方法用`abstract`修饰。因为无法执行抽象方法，因此这个类也必须申明为抽象类（abstract class）。

使用`abstract`修饰的类就是抽象类。我们无法实例化一个抽象类，即**抽象方法没有方法体**：

```java
abstract class Person {
    public abstract void run();
}

Person p = new Person(); // 编译错误
```

无法实例化的抽象类有什么用？

因为抽象类本身被设计成只能用于被继承，因此，抽象类可以强迫子类实现其定义的抽象方法，否则编译会报错。因此，抽象方法实际上相当于定义了“规范”。

例如：

```java
public abstract class Animal {
    public abstract void eat()；
}
```

```java
public class Cat extends Animal {
    public void run (){
      	System.out.println("小猫吃鱼和猫粮")； 	 
    }
}
```

```java
public class CatTest {
 	 public static void main(String[] args) {
        // 创建子类对象
        Cat c = new Cat(); 
       
        // 调用eat方法
        c.eat();
  	}
}
```

此时的方法重写，是子类对父类抽象方法的完成实现，我们将这种方法重写的操作，也叫做**实现方法**。

### 3、注意事项

关于抽象类的使用，以下为语法上要注意的细节，虽然条目较多，但若理解了抽象的本质，无需死记硬背。

1. 抽象类**不能创建对象**，如果创建，编译无法通过而报错。只能创建其非抽象子类的对象。

   > 理解：假设创建了抽象类的对象，调用抽象的方法，而抽象方法没有具体的方法体，没有意义。

2. 抽象类中，也有构造方法，是供子类创建对象时，初始化父类成员变量使用的。

   > 理解：子类的构造方法中，有默认的super()或手动的super(实参列表)，需要访问父类构造方法。

3. 抽象类中，不一定包含抽象方法，但是有抽象方法的类必定是抽象类。

   > 理解：未包含抽象方法的抽象类，目的就是不想让调用者创建该类对象，通常用于某些特殊的类结构设计。

4. 抽象类的子类，必须重写抽象父类中**所有的**抽象方法，否则，编译无法通过而报错。除非该子类也是抽象类。 

   > 理解：假设不重写所有抽象方法，则类中可能包含抽象方法。那么创建对象后，调用抽象的方法，没有意义。

### 4、修饰符一起使用的问题

|           | 外部类 | 成员变量 | 代码块 | 构造器 | 方法 | 局部变量 | 内部类 |
| --------- | ------ | -------- | ------ | ------ | ---- | -------- | ------ |
| public    | √      | √        | ×      | √      | √    | ×        | √      |
| protected | ×      | √        | ×      | √      | √    | ×        | √      |
| 缺省      | √      | √        | ×      | √      | √    | ×        | √      |
| private   | ×      | √        | ×      | √      | √    | ×        | √      |
| static    | ×      | √        | √      | ×      | √    | ×        | √      |
| final     | √      | √        | ×      | ×      | √    | √        | √      |
| abstract  | √      | ×        | ×      | ×      | √    | ×        | √      |
| native    | ×      | ×        | ×      | ×      | √    | ×        | ×      |

不能和abstract一起使用的修饰符？

（1）abstract和**final**不能一起修饰**方法和类**
   	（2）abstract和**static**不能一起修饰**方法**
	   （3）abstract和**native**不能一起修饰**方法**
   	（4）abstract和**private**不能一起修饰**方法**

static和final一起使用：

（1）修饰方法：可以，因为都不能被重写
	   （2）修饰成员变量：可以，表示静态常量
	   （3）修饰局部变量：不可以，static不能修饰局部变量

```tex
static ,public是用来声明全局变量或是被其他对象引用的变量。
String name;              //成员变量，实例变量
static String name="小明";//静态变量，类变量
区别：
1.生命周期不同
成员变量随着对象的创建而存在，随着对象的回收而销毁。
静态变量在类加载的时候创建，随着类的消失而消失。
2.调用方式不同
成员变量只能被对象调用。
静态变量能被对象调用，也能被类名调用。
3.别名不一样
成员变量叫实例变量。
静态变量叫类变量。
4.数据存储不一样
成员变量储存在堆内存的对象中，也叫对象的特有数据。
静态变量储存在方法区的静态区，所有也叫对象的共享数据。
```

（4）修饰代码块：不可以，final不能修改代码块

```tex
final变量如果是静态的，要么定义时初始化，要么在静态代码块中初始化。
final变量如果不是静态的，要么定义时初始化，要么在非静态代码块中初始化。
```

（5）修饰内部类：可以一起修饰成员内部类，不能一起修饰局部内部类

```tex
广泛意义上的内部类一般来说包括这四种：成员内部类、局部内部类、匿名内部类和静态内部类。
成员内部类是最普通的内部类，它的定义为位于另一个类的内部
局部内部类是定义在一个方法或者一个作用域里面的类，它和成员内部类的区别在于局部内部类的访问仅限于方法内或者该作用域内。
注意，局部内部类就像是方法里面的一个局部变量一样，是不能有public、protected、private以及static修饰符的。
```

------



## 十六、接口

### 1、为什么使用接口

多态的使用前提必须是“继承”。而类继承有如下问题：

（1）类继承有单继承限制
   	（2）类继承表示的是事物之间is-a的关系，但是is-a的关系要求太严格了。

为了解决这两个问题，引入了接口，接口支持：

（1）多实现
	   （2）用实现类和接口的has-a关系代替is-a关系

```tex
Bird is a Animal.  鸟是一种动物。
Plane is not a Animal.  飞机不是一种动物。
Plane is a Vehicle.	  飞机是一种交通工具。
Bird has a fly();		鸟具有飞的能力。或 鸟会飞。
Plane has a fly();		飞机具有飞的功能。或飞机会飞。
is-a解决的是：是不是的问题
has-a解决的是：能不能、会不会、可不可以的问题
```

### 2、定义和使用格式

接口的定义，它与定义类方式相似，但是使用 `interface` 关键字。它也会被编译成.class文件，但一定要明确它并不是类，而是另外一种引用数据类型。

> 引用数据类型：数组，类，枚举，接口，注解。

#### 2.1、接口的声明格式

```java
【修饰符】 interface 接口名{
    //接口的成员列表：
    // 公共的静态常量
    // 公共的抽象方法
    // 公共的默认方法（JDK1.8以上）
    // 公共的静态方法（JDK1.8以上）
    // 私有方法（JDK1.9以上）
}
```

#### 2.2、接口的成员说明

接口定义的是多个类共同的公共行为规范，这些行为规范是与外部交流的通道，这就意味着接口里通常是定义一组公共方法。

在JDK8之前，接口中只允许出现：

（1）公共的静态的常量：其中public static final可以省略

（2）公共的抽象的方法：其中public abstract可以省略

> 理解：接口是从多个相似类中抽象出来的规范，不需要提供具体实现

在JDK1.8时，接口中允许声明默认方法和静态方法：

（3）公共的默认的方法：其中public 可以省略，建议保留，但是default不能省略

（4）公共的静态的方法：其中public 可以省略，建议保留，但是static不能省略

在JDK1.9时，接口又增加了：

（5）私有方法：其中private不可以省略

（6）除此之外，接口中不能有其他成员，没有构造器，没有初始化块，因为接口中没有成员变量需要动态初始化。

#### 2.3、示例代码

```java
public interface Flyable {
    long MAX_SPEED = 299792458;//光速：299792458米/秒, 省略public static final
    
    void fly();//省略public abstract
    
    static void start(){//省略public
        System.out.println("start");
    }
    default void end(){//省略public
        System.out.println("end");
    }
    
    private void show(){
        System.out.println("cool!");
    }
}
```

### 3、接口的使用

#### 3.1、使用接口的静态成员

接口不能直接创建对象，但是可以**通过接口名直接调用接口的静态方法和静态常量**。

```java
public class TestFlyable {
    public static void main(String[] args) {
        System.out.println(Flyable.MAX_SPEED);//调用接口的静态常量
        Flyable.start();//调用接口的静态方法
    }
}
```

#### 3.2、类实现接口

接口**不能创建对象**，但是可以被类实现（`implements` ，类似于被继承）。

类与接口的关系为实现关系，即**类实现接口**，该类可以称为接口的实现类，也可以称为接口的子类。实现的动作类似继承，格式相仿，只是关键字不同，实现使用 ` implements`关键字。

```java
【修饰符】 class 实现类  implements 接口{
	// 重写接口中抽象方法【必须】，当然如果实现类是抽象类，那么可以不重写
  	// 重写接口中默认方法【可选】
}

【修饰符】 class 实现类 extends 父类 implements 接口{
    // 重写接口中抽象方法【必须】，当然如果实现类是抽象类，那么可以不重写
  	// 重写接口中默认方法【可选】
}
```

注意：

1. 如果接口的实现类是非抽象类，那么必须重写接口中**所有**抽象方法。

2. 默认方法可以选择保留，也可以重写。

   > 重写时，default单词就不要再写了，它只用于在接口中表示默认方法，*到类中就没有默认方法的概念了*

3. **接口中的静态方法不能被继承也不能被重写**

```java
public class Animal {
    public void eat(){
        System.out.println("吃东西");
    }
}
```

```java
public class Bird extends Animal implements Flyable{
    //重写父接口的抽象方法，【必选】
    @Override
    public void fly() {
        System.out.println("我要飞的更高~~~");
    }
    //重写父接口的默认方法，【可选】
    @Override
    public void end() {
        System.out.println("轻轻落在树枝上~~~");
    }
}
```

#### 3.3、使用接口的非静态方法

* 对于接口的静态方法，直接使用“接口名.”进行调用即可
  * 也只能使用“接口名."进行调用，不能通过实现类的对象进行调用
* 对于接口的抽象方法、默认方法，只能通过实现类对象才可以调用
  * 接口不能直接创建对象，只能创建实现类的对象

```java
public class TestBirdFlyable {
    public static void main(String[] args) {
        Bird bird = new Bird();
        Flyable.start();//调用接口的静态方法，只能通过  接口名.
        //必须依赖于实现类的对象
        bird.fly();//调用接口的抽象方法
        bird.end();//调用接口的默认方法    
        bird.eat();//调用父类继承的方法
    }
}
```

#### 3.4、接口的多实现

而对于接口而言，一个类是可以实现多个接口的，这叫做接口的**多实现**。并且，一个类能继承一个父类，同时实现多个接口。

实现格式：

```java
【修饰符】 class 实现类  implements 接口1，接口2，接口3。。。{
	// 重写接口中所有抽象方法【必须】，当然如果实现类是抽象类，那么可以不重写
  	// 重写接口中默认方法【可选】
}

【修饰符】 class 实现类 extends 父类 implements 接口1，接口2，接口3。。。{
    // 重写接口中所有抽象方法【必须】，当然如果实现类是抽象类，那么可以不重写
  	// 重写接口中默认方法【可选】
}
```

> 接口中，有多个抽象方法时，实现类必须重写所有抽象方法。**如果抽象方法有重名的，只需要重写一次**。

定义多个接口：

```java
public interface Jumpable {
    void jump();
}
```

```java
public interface Runnable {
    void jump();
    void run();
}
```

定义实现类：

```java
public class Bird implements Flyable,Jumpable,Runnable{

    //重写父接口的抽象方法，【必选】
    @Override
    public void fly() {
        System.out.println("我要飞的更高~~~");
    }

    //重写父接口的默认方法，【可选】
    @Override
    public void end() {
        System.out.println("轻轻落在树枝上~~~");
    }

    @Override
    public void jump() {
        System.out.println("我会跳跳~~~");
    }

    @Override
    public void run() {
        System.out.println("我会跑~~");
    }
}
```

测试类

```java
public class TestBird {
    public static void main(String[] args) {
        Bird bird = new Bird();
        bird.fly();//调用Flyable接口的抽象方法
        bird.jump();//调用Jumpable接口的抽象方法
        bird.run();//调用Runnable接口的抽象方法
    }
}
```

#### 3.5、接口的多继承

一个接口能继承另一个或者多个接口，接口的继承也使用 `extends` 关键字，子接口继承父接口的方法。

定义父接口：

```java
public interface A {
    void a();
}
```

```java
public interface B {
    void b();
}
```

定义子接口：

```java
public interface C extends A,B {
    void c();
}
```

定义子接口的实现类：

```java
public class D implements C {
    @Override
    public void c() {
        System.out.println("重写C接口的抽象方法c");
    }

    @Override
    public void a() {
        System.out.println("重写C接口的抽象方法a");
    }

    @Override
    public void b() {
        System.out.println("重写C接口的抽象方法b");
    }
}
```

>所有父接口的抽象方法都有重写。
>
>方法签名相同的抽象方法只需要实现一次。

#### 3.6、接口与实现类对象构成多态引用

实现类实现接口，类似于子类继承父类，因此，接口类型的变量与实现类的对象之间，也可以构成多态引用。通过接口类型的变量调用方法，最终执行的是你new的实现类对象实现的方法体。

接口的不同实现类：

```java
public class Plane implements Flyable{
    @Override
    public void fly() {
        System.out.println("我直入云霄");
    }
}

```

```java
public class Kite implements Flyable {
    @Override
    public void fly() {
        System.out.println("我怎么飞也挣脱不了线");
    }
}

```

测试类

```java
public class TestFlyableImpl {
    public static void main(String[] args) {
        Flyable f1 = new Bird();
        f1.fly();
        
        Flyable f2 = new Plane();
        f2.fly();
        
        Flyable f3 = new Kite();
        f3.fly();
    }
}
```

### 4、接口的特点

- 接口本身不能创建对象，只能创建接口的实现类对象，接口类型的变量可以与实现类对象构成多态引用。
- 声明接口用interface，接口的成员声明有限制：（1）公共的静态常量（2）公共的抽象方法（3）公共的默认方法（4）公共的静态方法（5）私有方法（JDK1.9以上）
- 类可以实现接口，关键字是implements，而且支持多实现。如果实现类不是抽象类，就必须实现接口中所有的抽象方法。如果实现类既要继承父类又要实现父接口，那么继承（extends）在前，实现（implements）在后。
- 接口可以继承接口，关键字是extends，而且支持多继承。
- 接口的默认方法可以选择重写或不重写。如果有冲突问题，另行处理。子类重写父接口的默认方法，要去掉default，子接口重写父接口的默认方法，不要去掉default。
- 接口的静态方法不能被继承，也不能被重写。接口的静态方法只能通过“接口名.静态方法名”进行调用。

### 5、面试题

```tex
1、为什么接口中只能声明公共的静态的常量？

因为接口是标准规范，那么在规范中需要声明一些底线边界值，当实现者在实现这些规范时，不能去随意修改和触碰这些底线，否则就有“危险”。
例如：USB1.0规范中规定最大传输速率是1.5Mbps，最大输出电流是5V/500mA
USB3.0规范中规定最大传输速率是5Gbps(500MB/s)，最大输出电流是5V/900mA
例如：某公司的行为规范中规定员工，早上8:00之前上班，晚上17:30之后下班等等。


2、为什么JDK1.8之后要允许接口定义静态方法和默认方法呢？因为它违反了接口作为一个抽象标准定义的概念。

静态方法：因为之前的标准类库设计中，有很多Collection/Colletions或者Path/Paths这样成对的接口和类，后面的类中都是静态方法，而这些静态方法都是为前面的接口服务的，那么这样设计一对API，不如把静态方法直接定义到接口中使用和维护更方便。
默认方法：（1）我们要在已有的老版接口中提供新方法时，如果添加抽象方法，就会涉及到原来使用这些接口的类就会有问题，那么为了保持与旧版本代码的兼容性，只能允许在接口中定义默认方法实现。比如：Java8中对Collection、List、Comparator等接口提供了丰富的默认方法。（2）当我们接口的某个抽象方法，在很多实现类中的实现代码是一样的，此时将这个抽象方法设计为默认方法更为合适，那么实现类就可以选择重写，也可以选择不重写。


3、为什么JDK1.9要允许接口定义私有方法呢？因为我们说接口是规范，规范时需要公开让大家遵守的

私有方法：因为有了默认方法和静态方法这样具有具体实现的方法，那么就可能出现多个方法由共同的代码可以抽取，而这些共同的代码抽取出来的方法又只希望在接口内部使用，所以就增加了私有方法。
```

### 6、默认方法冲突问题

#### 6.1、亲爹优先原则

当一个类，既继承一个父类，又实现若干个接口时，父类中的成员方法与接口中的抽象方法重名，子类就近选择执行父类的成员方法。代码如下：

定义接口：

```java
public interface Friend {
    default void date(){//约会
        System.out.println("吃喝玩乐");
    }
}
```

定义父类：

```java
public class Father {
    public void date(){//约会
        System.out.println("爸爸约吃饭");
    }
}
```

定义子类：

```java
public class Son extends Father implements Friend {
    @Override
    public void date() {
        //(1)不重写默认保留父类的
        //(2)调用父类被重写的
//        super.date();
        //(3)保留父接口的
//        Friend.super.date();
        //(4)完全重写
        System.out.println("学Java");
    }
}
```

定义测试类：

```java
public class TestSon {
    public static void main(String[] args) {
        Son s = new Son();
        s.date();
    }
}
```

#### 6.2、左右为难

- 当一个类同时实现了多个父接口，而多个父接口中包含方法签名相同的默认方法时，怎么办呢？

无论你多难抉择，最终都是要做出选择的。

声明接口：

```java
public interface BoyFriend {
    default void date(){//约会
        System.out.println("神秘约会");
    }
}
```

选择保留其中一个，通过“接口名.super.方法名"的方法选择保留哪个接口的默认方法。

```java
public class Girl implements Friend,BoyFriend{

    @Override
    public void date() {
        //(1)保留其中一个父接口的
//        Friend.super.date();
//        BoyFriend.super.date();
        //(2)完全重写
        System.out.println("学Java");
    }

}
```

测试类

```java
public class TestGirl {
    public static void main(String[] args) {
        Girl girl = new Girl();
        girl.date();
    }
}
```

- 当一个子接口同时继承了多个接口，而多个父接口中包含方法签名相同的默认方法时，怎么办呢？

另一个父接口：

```java
public interface Usb2 {
    //静态常量
    long MAX_SPEED = 60*1024*1024;//60MB/s

    //抽象方法
    void in();
    void out();

    //默认方法
    public default void start(){
        System.out.println("开始");
    }
    public default void stop(){
        System.out.println("结束");
    }

    //静态方法
    public static void show(){
        System.out.println("USB 2.0可以高速地进行读写操作");
    }
}
```

子接口：

```java
public interface Usb extends Usb2,Usb3 {
    @Override
    default void start() {
        System.out.println("Usb.start");
    }

    @Override
    default void stop() {
        System.out.println("Usb.stop");
    }
}

```

> 小贴士：
>
> 子接口重写默认方法时，default关键字可以保留。
>
> 子类重写默认方法时，default关键字不可以保留。

### 7、常量冲突问题

- 当子类继承父类又实现父接口，而父类中存在与父接口常量同名的成员变量，并且该成员变量名在子类中仍然可见。
- 当子类同时继承多个父接口，而多个父接口存在相同同名常量。

此时在子类中想要引用父类或父接口的同名的常量或成员变量时，就会有冲突问题。

父类和父接口：

```java
public class SuperClass {
    int x = 1;
}
```

```java
public interface SuperInterface {
    int x = 2;
    int y = 2;
}
```

```java
public interface MotherInterface {
    int x = 3;
}
```

子类：

```java
public class SubClass extends SuperClass implements SuperInterface,MotherInterface {
    public void method(){
//        System.out.println("x = " + x);//模糊不清
        System.out.println("super.x = " + super.x);
        System.out.println("SuperInterface.x = " + SuperInterface.x);
        System.out.println("MotherInterface.x = " + MotherInterface.x);
        System.out.println("y = " + y);//没有重名问题，可以直接访问
    }
}
```

------



## 十七、内部类

### 1、 概述

#### 1.1、什么是内部类？

将一个类A定义在另一个类B里面，里面的那个类A就称为**内部类**，B则称为**外部类**。

#### 1.2、为什么要声明内部类呢？

总的来说，遵循**高内聚低耦合**的面向对象开发总原则。便于代码维护和扩展。

具体来说，当一个事物的内部，还有一个部分需要一个完整的结构进行描述，而这个内部的完整的结构又只为外部事物提供服务，不在其他地方单独使用，那么整个内部的完整结构最好使用内部类。而且**内部类因为在外部类的里面，因此可以直接访问外部类的私有成员**。

#### 1.3、内部类都有哪些形式？

根据内部类声明的位置，我们可以分为：

（1）成员内部类：

* 静态成员内部类
* 非静态成员内部类

（2）局部内部类

* 有名字的局部内部类
* 匿名的内部类

### 2、 成员内部类

如果成员内部类中不使用外部类的非静态成员，那么通常将内部类声明为静态内部类，否则声明为非静态内部类。

语法格式：

```java
【修饰符】 class 外部类{
    【其他修饰符】 【static】 class 内部类{
    }
}
```

#### 2.1、静态内部类

有static修饰的成员内部类叫做静态内部类。它的特点：

* 和其他类一样，它只是定义在外部类中的另一个完整的类结构
  * 可以继承自己的想要继承的父类，实现自己想要实现的父接口们，和外部类的父类和父接口无关
  * 可以在静态内部类中声明属性、方法、构造器等结构，包括静态成员
  * 可以使用abstract修饰，因此它也可以被其他类继承
  * 可以使用final修饰，表示不能被继承
  * 编译后有自己的独立的字节码文件，只不过在内部类名前面冠以外部类名和$符号。
* 和外部类不同的是，它可以允许四种权限修饰符：public，protected，缺省，private
  * 外部类只允许public或缺省的
* **只**可以在静态内部类中使用外部类的**静态成员**
  * 在静态内部类中不能使用外部类的非静态成员哦
  * 如果在内部类中有变量与外部类的静态成员变量同名，可以使用“外部类名."进行区别
* 在外部类的外面不需要通过外部类的对象就可以创建静态内部类的对象（通常应该避免这样使用）

> 其实严格的讲（在James Gosling等人编著的《The Java Language Specification》）静态内部类不是内部类，而是类似于C++的嵌套类的概念，外部类仅仅是静态内部类的一种命名空间的限定名形式而已。所以接口中的内部类通常都不叫内部类，因为接口中的内部成员都是隐式是静态的（即public static)。例如：Map.Entry。

#### 2.2、非静态成员内部类

没有static修饰的成员内部类叫做非静态内部类。非静态内部类的特点：

* 和其他类一样，它只是定义在外部类中的另一个完整的类结构
  * 可以继承自己的想要继承的父类，实现自己想要实现的父接口们，和外部类的父类和父接口无关
  * 可以在非静态内部类中声明属性、方法、构造器等结构，但是**不允许声明静态成员**，但是可以**继承**父类的静态成员，而且**可以声明静态常量**。
  * 可以使用abstract修饰，因此它也可以被其他类继承
  * 可以使用final修饰，表示不能被继承
  * 编译后有自己的独立的字节码文件，只不过在内部类名前面冠以外部类名和$符号。
* 和外部类不同的是，它可以允许四种权限修饰符：public，protected，缺省，private
  * 外部类只允许public或缺省的
* 还可以在非静态内部类中使用外部类的**所有成员**，哪怕是私有的

* 在外部类的静态成员中不可以使用非静态内部类哦
  * 就如同静态方法中不能访问本类的非静态成员变量和非静态方法一样
* 在外部类的外面必须通过外部类的对象才能创建非静态内部类的对象（通常应该避免这样使用）
  * 如果要在外部类的外面使用非静态内部类的对象，通常在外部类中提供一个方法来返回这个非静态内部类的对象比较合适
  * 因此在非静态内部类的方法中有两个this对象，一个是外部类的this对象，一个是内部类的this对象

```java
public class TestMemberInnerClass {
    public static void main(String[] args) {
        Outer.outMethod();
        System.out.println("-----------------------");
        Outer out = new Outer();
        out.outFun();

        System.out.println("####################################");
        Outer.Inner.inMethod();
        System.out.println("------------------------");
        Outer.Inner inner = new Outer.Inner();
        inner.inFun();

        System.out.println("####################################");
        Outer outer = new Outer();
//        Outer.Nei nei = outer.new Nei();
        Outer.Nei nei = out.getNei();
        nei.inFun();
    }
}
class Outer{
    private static String a = "外部类的静态a";
    private static String b  = "外部类的静态b";
    private String c = "外部类对象的非静态c";
    private String d = "外部类对象的非静态d";

    static class Inner{
        private static String a ="静态内部类的静态a";
        private String c = "静态内部类对象的非静态c";
        public static void inMethod(){
            System.out.println("Inner.inMethod");
            System.out.println("Outer.a = " + Outer.a);
            System.out.println("Inner.a = " + a);
            System.out.println("b = " + b);
//            System.out.println("c = " + c);//不能访问外部类和自己的非静态成员
//            System.out.println("d = " + d);//不能访问外部类的非静态成员
        }
        public void inFun(){
            System.out.println("Inner.inFun");
            System.out.println("Outer.a = " + Outer.a);
            System.out.println("Inner.a = " + a);
            System.out.println("b = " + b);
            System.out.println("c = " + c);
//            System.out.println("d = " + d);//不能访问外部类的非静态成员
        }
    }

    class Nei{
        private String a = "非静态内部类对象的非静态a";
        private String c = "非静态内部类对象的非静态c";

        public void inFun(){
            System.out.println("Nei.inFun");
            System.out.println("Outer.a = " + Outer.a);
            System.out.println("a = " + a);
            System.out.println("b = " + b);
            System.out.println("Outer.c = " + Outer.this.c);
            System.out.println("c = " + c);
            System.out.println("d = " + d);
        }
    }

    public static void outMethod(){
        System.out.println("Outer.outMethod");
        System.out.println("a = " + a);
        System.out.println("Inner.a = " + Inner.a);
        System.out.println("b = " + b);
//        System.out.println("c = " + c);
//        System.out.println("d = " + d);
        Inner in = new Inner();
        System.out.println("in.c = " + in.c);
    }

    public void outFun(){
        System.out.println("Outer.outFun");
        System.out.println("a = " + a);
        System.out.println("Inner.a = " + Inner.a);
        System.out.println("b = " + b);
        System.out.println("c = " + c);
        System.out.println("d = " + d);
        Inner in = new Inner();
        System.out.println("in.c = " + in.c);
    }

    public Nei getNei(){
        return new Nei();
    }
}
```

|          |                                      | 静态内部类                                      | 非静态内部类                               |
| -------- | ------------------------------------ | ----------------------------------------------- | ------------------------------------------ |
| 类角色   | 字节码文件                           | 外部类名$内部类名                               | 相同                                       |
|          | 修饰符                               | public，缺省，abstract，final                   | 相同                                       |
|          | 父类或父接口                         | 可以                                            | 相同                                       |
|          | 可以包含的成员                       | 所有成员                                        | ==不允许有静态成员==                       |
| 成员角色 | 修饰符                               | public、protected、缺省、private，final，static | 没有static                                 |
|          | 依赖于外部类                         | 依赖                                            | 相同                                       |
|          | 依赖于外部类的对象                   | 不依赖                                          | ==依赖==                                   |
| 使用     | 在外部类中使用内部类                 | 没有限制                                        | 在外部类的静态方法等中不能使用非静态内部类 |
|          | 在内部类中使用外部类                 | 静态内部类中不能使用外部类的非静态成员          | 没有限制                                   |
|          | 在外部类的外面使用内部类的静态成员   | 外部类名.静态内部类名.静态成员                  | ==**没有**==                               |
|          | 在外部类的外面使用内部类的非静态成员 | 见下面的框1                                     | 见下面的框2                                |
| 重名     |                                      | 外部类名.重名的成员名                           | 外部类名.this.重名的成员                   |

```java
外部类名.静态内部类名 变量 = 外部类名.静态内部类名();
变量.非静态成员();
```

```java
外部类名 变量1 = new 外部类();
外部类名.非静态内部类名 变量 = 变量1.new 非静态内部类名();
变量.非静态成员();
```

### 3、 局部内部类

#### 3.1、局部内部类

语法格式：

```java
【修饰符】 class 外部类{
    【修饰符】 返回值类型  方法名(【形参列表】){
            【final/abstract】 class 内部类{
    	}
    }    
}
```

局部内部类的特点：

* 和外部类一样，它只是定义在外部类的某个方法中的另一个完整的类结构
  * 可以继承自己的想要继承的父类，实现自己想要实现的父接口们，和外部类的父类和父接口无关
  * 可以在局部内部类中声明属性、方法、构造器等结构，**但不包括静态成员，除非是从父类继承的或静态常量**
  * 可以使用abstract修饰，因此它也可以被同一个方法的在它后面的其他内部类继承
  * 可以使用final修饰，表示不能被继承
  * 编译后有自己的独立的字节码文件，只不过在内部类名前面冠以外部类名、$符号、编号。
    * 这里有编号是因为同一个外部类中，不同的方法中存在相同名称的局部内部类
* 和成员内部类不同的是，它前面不能有权限修饰符等
* 局部内部类如同局部变量一样，有作用域
* 局部内部类中是否能访问外部类的非静态的成员，取决于所在的方法
* 局部内部类中还可以使用所在方法的局部常量，即用final声明的局部变量
  * JDK1.8之后，如果某个局部变量在局部内部类中被使用了，自动加final
  * 为什么在局部内部类中使用外部类方法的局部变量要加final呢？考虑生命周期问题。

示例代码：

```java
public class TestLocalInner {
    public static void main(String[] args) {
        Runner runner = Outer.getRunner();
        runner.run();

        System.out.println("-------------------");
        Outer.outMethod();

        System.out.println("-------------------");
        Outer out = new Outer();
        out.outTest();
    }
}
class Outer{
    private static String a = "外部类的静态变量a";
    private String b = "外部类对象的非静态变量b";

    public static void outMethod(){
        System.out.println("Outer.outMethod");
        final String c = "局部变量c";
        class Inner{
            public void inMethod(){
                System.out.println("Inner.inMethod");
                System.out.println("out.a = " + a);
//				System.out.println("out.b = " + b);//错误的，因为outMethod是静态的
                System.out.println("out.local.c = " + c);
            }
        }

        Inner in = new Inner();
        in.inMethod();
    }

    public void outTest(){
        class Inner{
            public void inMethod(){
                System.out.println("out.a = " + a);
                System.out.println("out.b = " + b);//可以，因为outTest是非静态的
            }
        }

        Inner in = new Inner();
        in.inMethod();
    }

    public static Runner getRunner(){
        class LocalRunner implements Runner{
            @Override
            public void run() {
                System.out.println("LocalRunner.run");
            }
        }
        return new LocalRunner();
    }
}
interface Runner{
    void run();
}
```

#### 3.2、匿名内部类

当我们在开发过程中，需要用到一个抽象类的子类的对象或一个接口的实现类的对象，而且只创建一个对象，而且逻辑代码也不复杂。那么我们原先怎么做的呢？

（1）编写类，继承这个父类或实现这个接口

（2）重写父类或父接口的方法

（3）创建这个子类或实现类的对象

这里，因为考虑到这个子类或实现类是一次性的，那么我们“费尽心机”的给它取名字，就显得多余。那么我们完全可以使用匿名内部类的方式来实现，避免给类命名的问题。

```java
new 父类(【实参列表】){
    重写方法...
}
//()中是否需要【实参列表】，看你想要让这个匿名内部类调用父类的哪个构造器，如果调用父类的无参构造，那么()中就不用写参数，如果调用父类的有参构造，那么()中需要传入实参
```

```java
new 父接口(){
    重写方法...
}
//()中没有参数，因为此时匿名内部类的父类是Object类，它只有一个无参构造
```

> 匿名内部类是没有名字的类，因此在声明类的同时就创建好了唯一的对象。

注意：

匿名内部类是一种特殊的局部内部类，只不过没有名称而已。所有局部内部类的限制都适用于匿名内部类。例如：

* 在匿名内部类中是否可以使用外部类的非静态成员变量，看所在方法是否静态
* 在匿名内部类中如果需要访问当前方法的局部变量，该局部变量需要加final

思考：这个对象能做什么呢？

（1）使用匿名内部类的对象直接调用方法

```java
interface A{
	void a();
}
public class Test{
    public static void main(String[] args){
    	new A(){
			@Override
			public void a() {
				System.out.println("aaaa");
			}
    	}.a();
    }
}
```

（2）通过父类或父接口的变量多态引用匿名内部类的对象

```java
interface A{
	void a();
}
public class Test{
    public static void main(String[] args){
    	A obj = new A(){
			@Override
			public void a() {
				System.out.println("aaaa");
			}
    	};
    	obj.a();
    }
}
```

（3）匿名内部类的对象作为实参

```java
interface A{
	void method();
}
public class Test{
    public static void test(A a){
    	a.method();
    }
    
    public static void main(String[] args){
    	test(new A(){

			@Override
			public void method() {
				System.out.println("aaaa");
			}
    	});
    }   
}
```

------



## 十八、枚举

### 1、概述

一种特殊的类型：某些类型的对象是有限固定的几个，
即我们需要提取枚举，列举，罗列出它的所有对象。

```tex
* 星期：Monday(星期一)......Sunday(星期天)
* 性别：Man(男)、Woman(女)
* 月份：January(1月)......December(12月)
* 季节：Spring(春节)......Winter(冬天)
* 支付方式：Cash（现金）、WeChatPay（微信）、Alipay(支付宝)、BankCard(银行卡)、CreditCard(信用卡)
* 员工工作状态：Busy（忙）、Free（闲）、Vocation（休假）
* 订单状态：Nonpayment（未付款）、Paid（已付款）、Fulfilled（已配货）、Delivered（已发货）、Checked（已确认收货）、Return（退货）、Exchange（换货）、Cancel（取消）
```

枚举类型本质上也是一种类，只不过是这个类的对象是固定的几个，而不能随意让用户创建。

在JDK1.5之前，需要程序员自己通过特殊的方式来定义枚举类型。

在JDK1.5之后，Java支持enum关键字来快速的定义枚举类型。

### 2、 JDK1.5之前

在JDK1.5之前如何声明枚举类呢？

* 构造器加private私有化
* 本类内部创建一组常量对象，并添加public static修饰符，对外暴露这些常量对象

示例代码：

```java
public class Season{
	public static final Season SPRING = new Season();
	public static final Season SUMMER = new Season();
	public static final Season AUTUMN = new Season();
	public static final Season WINTER = new Season();
	
	private Season(){
		
	}
	
	public String toString(){
		if(this == SPRING){
			return "春";
		}else if(this == SUMMER){
			return "夏";
		}else if(this == AUTUMN){
			return "秋";
		}else{
			return "冬";
		}
	}
}
```

```java
public class TestSeason {
	public static void main(String[] args) {
		Season spring = Season.SPRING;
		System.out.println(spring);
	}
}
```

### 3、 JDK1.5之后

#### 3.1、enum关键字声明枚举

```java
【修饰符】 enum 枚举类名{
    常量对象列表
}

【修饰符】 enum 枚举类名{
    常量对象列表;
    
    其他成员列表;
}
```

示例代码：

```java
package com.atguigu.enumeration;

public enum Week {
    MONDAY,TUESDAY,WEDNESDAY,THURSDAY,FRIDAY,SATURDAY,SUNDAY
}
```

```java
public class TestEnum {
	public static void main(String[] args) {
		Season spring = Season.SPRING;
		System.out.println(spring);
	}
}
```

#### 3.2、枚举类的要求和特点

枚举类的要求和特点：

* 枚举类的常量对象列表必须在枚举类的**首行**，因为是常量，所以建议**大写**。
* 如果常量对象列表后面没有其他代码，那么“；”可以省略，否则不可以省略“；”。
* 编译器给枚举类默认提供的是private的无参构造，如果枚举类需要的是无参构造，就不需要声明，写常量对象列表时也不用加参数，
* 如果枚举类需要的是有参构造，需要手动定义，有参构造的private可以省略，调用有参构造的方法就是在常量对象名后面加(实参列表)就可以。
* 枚举类**默认继承的是java.lang.Enum类**，因此不能再继承其他的类型。
* JDK1.5之后switch，提供支持枚举类型，case后面可以写枚举常量名。
* 枚举类型如有其它属性，建议（**不是必须**）这些属性也声明为final的，因为常量对象在逻辑意义上应该不可变。
* to String 已经自动生成过了

#### 3.3、枚举类型常用方法

```java
1.String toString(): 默认返回的是常量名（对象名），可以继续手动重写该方法！
2.String name():返回的是常量名（对象名）
3.int ordinal():返回常量的次序号，默认从0开始
4.枚举类型[] values():返回该枚举类的所有的常量对象，返回类型是当前枚举的数组类型，是一个静态方法
5.枚举类型 valueOf(String name)：根据枚举常量对象名称获取枚举对象
    
    
package com.atguigu.enumeration;

import java.util.Scanner;

public class TestEnumMethod {
    public static void main(String[] args) {
        Week[] values = Week.values();
        for (int i = 0; i < values.length; i++) {
            System.out.println((values[i].ordinal()+1) + "->" + values[i].name());
        }
        System.out.println("------------------------");

        Scanner input = new Scanner(System.in);
        System.out.print("请输入星期值：");
        int weekValue = input.nextInt();
        Week week = values[weekValue-1];
        System.out.println(week);

        System.out.print("请输入星期名：");
        String weekName = input.next();
        week = Week.valueOf(weekName);
        System.out.println(week);

        input.close();
    }
}
```

------



## 十九、包装类

### 1、 包装类

Java提供了两个类型系统，基本类型与引用类型，使用基本类型在于效率，然而当要使用只针对对象设计的API或新特性（例如泛型），那么基本数据类型的数据就需要用包装类来包装。

| 序号 | 基本数据类型 | 包装类（java.lang包） |
| ---- | ------------ | --------------------- |
| 1    | byte         | Byte                  |
| 2    | short        | Short                 |
| 3    | int          | **Integer**           |
| 4    | long         | Long                  |
| 5    | float        | Float                 |
| 6    | double       | Double                |
| 7    | char         | **Character**         |
| 8    | boolean      | Boolean               |
| 9    | void         | Void                  |

### 2、  装箱与拆箱

 装箱：把基本数据类型转为包装类对象。

> 转为包装类的对象，是为了使用专门为对象设计的API和特性

拆箱：把包装类对象拆为基本数据类型。

> 转为基本数据类型，一般是因为需要运算，Java中的大多数运算符是为基本数据类型设计的。比较、算术等

基本数值---->包装对象

```java
Integer obj1 = new Integer(4);//使用构造函数函数
Integer obj2 = Integer.valueOf(4);//使用包装类中的valueOf方法
```

包装对象---->基本数值

```java
Integer obj = new Integer(4);
int num1 = obj.intValue();
```

JDK1.5之后，可以自动装箱与拆箱。

> 注意：只能与自己对应的类型之间才能实现自动装箱与拆箱。

```java
Integer i = 4;//自动装箱。相当于Integer i = Integer.valueOf(4);
i = i + 5;//等号右边：将i对象转成基本数值(自动拆箱) i.intValue() + 5;
//加法运算完成后，再次装箱，把基本数值转成对象。
```

```java
Integer i = 1;
Double d = 1;//错误的，1是int类型
```



### 3、 包装类的一些API

#### 3.1、基本数据类型和字符串之间的转换

（1）把基本数据类型转为字符串

```java
int a = 10;
//String str = a;//错误的
//方式一：
String str = a + "";
//方式二：
String str = String.valueOf(a);
```

（2）把字符串转为基本数据类型

String转换成对应的基本类型 ，除了Character类之外，其他所有包装类都具有parseXxx静态方法可以将字符串参数转换为对应的基本类型，例如：

* `public static int parseInt(String s)`：将字符串参数转换为对应的int基本类型。
* `public static long parseLong(String s)`：将字符串参数转换为对应的long基本类型。
* `public static double parseDouble(String s)`：将字符串参数转换为对应的double基本类型。

或把字符串转为包装类，然后可以自动拆箱为基本数据类型

* ```public static Integer valueOf(String s)```：将字符串参数转换为对应的Integer包装类，然后可以自动拆箱为int基本类型
* ```public static Long valueOf(String s)```：将字符串参数转换为对应的Long包装类，然后可以自动拆箱为long基本类型
* ```public static Double valueOf(String s)```：将字符串参数转换为对应的Double包装类，然后可以自动拆箱为double基本类型

注意:如果字符串参数的内容无法正确转换为对应的基本类型，则会抛出`java.lang.NumberFormatException`异常。

```java
int a = Integer.parseInt("整数的字符串");
double d = Double.parseDouble("小数的字符串");
boolean b = Boolean.parseBoolean("true或false");

int a = Integer.valueOf("整数的字符串");
double d = Double.valueOf("小数的字符串");
boolean b = Boolean.valueOf("true或false");
```

#### 3.2、数据类型的最大最小值

```java
Integer.MAX_VALUE和Integer.MIN_VALUE
Long.MAX_VALUE和Long.MIN_VALUE
Double.MAX_VALUE和Double.MIN_VALUE
```

#### 3.3、字符转大小写

```java
Character.toUpperCase('x');
Character.toLowerCase('X');
```

### 4、包装类对象的特点

#### 4.1、包装类对象不可变

```java
public class TestExam {
	public static void main(String[] args) {
		int i = 1;
		Integer j = new Integer(2);
		Circle c = new Circle();
		change(i,j,c);
		System.out.println("i = " + i);//1
		System.out.println("j = " + j);//2
		System.out.println("c.radius = " + c.radius);//10.0
	}
	
	/*
	 * 方法的参数传递机制：
	 * （1）基本数据类型：形参的修改完全不影响实参
	 * （2）引用数据类型：通过形参修改对象的属性值，会影响实参的属性值
	 * 这类Integer等包装类对象是“不可变”对象，即一旦修改，就是新对象，和实参就无关了
	 */
	public static void change(int a ,Integer b,Circle c ){
		a += 10;
//		b += 10;//等价于  b = Integer.valueOf(b+10);//指向另一个Integer对象
		c.radius += 10;
		/*c = new Circle();
		c.radius+=10;*/
	}
}
class Circle{
	double radius;
}
```

#### 4.2、包装类缓存对象

| 包装类    | 缓存对象    |
| --------- | ----------- |
| Byte      | -128~127    |
| Short     | -128~127    |
| Integer   | -128~127    |
| Long      | -128~127    |
| Float     | 没有        |
| Double    | 没有        |
| Character | 0~127       |
| Boolean   | true和false |

```java
Integer a = 1;
Integer b = 1;
System.out.println(a == b);//true

Integer i = 128;
Integer j = 128;
System.out.println(i == j);//false

Integer m = new Integer(1);//新new的在堆中
Integer n = 1;//这个用的是缓冲的常量对象，在方法区
System.out.println(m == n);//false

Integer x = new Integer(1);//新new的在堆中
Integer y = new Integer(1);//另一个新new的在堆中
System.out.println(x == y);//false
```

```java
Double d1 = 1.0;
Double d2 = 1.0;
System.out.println(d1==d2);//false 比较地址，没有缓存对象，每一个都是新new的
```

#### 4.3、包装类对象计算问题

- 两个包装类对象之间进行“==”和“!=''运算，比较的是对象的地址值，要求两个包装类对象必须是同一种类型。
- 两个包装类对象之间进行其他运算（>，<，+，-等等），先自动拆箱为基本数据类型之后再运算，不要求两个包装类对象是同一种类型（Boolean不参与）。
- 包装类对象和基本数据类型的混合运算都是自动拆箱为基本数据类型之后再运算。

```java
Integer i = 1;
Integer j = 1;
System.out.println(i==j);//true 比较地址值，缓存对象
```

```java
Integer i = 128;
Integer j = 128;
System.out.println(i==j);//false 比较地址值
```

```java
Integer i = 1000;
double j = 1000;
System.out.println(i==j);//true  会先将i自动拆箱为int，然后根据基本数据类型“自动类型转换”规则，转为double比较
```

```java
Integer i = 1000;
int j = 1000;
System.out.println(i==j);//true 会自动拆箱，按照基本数据类型进行比较
```

```java
Integer i = 1;
Double d = 1.0
System.out.println(i==d);//编译报错
```

```java
Integer i = 2;
Double d = 1.0
System.out.println(i>d);//true，自动拆箱后比较
```



### 5、 equals方法

#### 5.1、==和equals比较

```java
Integer i = new Integer(1);
Integer j = new Integer(1);
System.out.println(i==j); //false 比较地址值

如果想要比较两个Integer的值是相等怎么办呢？
```

java.lang.Object类中有一个方法：指示其他某个对象是否与此对象“相等”。 

```java
public boolean equals(Object obj) {
     return (this == obj);
}
```

Object 类的 equals 方法实现对象上差别可能性最大的相等关系；即，对于任何非空引用值 x 和 y，当且仅当 x 和 y 引用同一个对象时，此方法才返回 true（x == y 具有值 true）。 

Java的很多类都选择重写equals方法，例如，java.lang.Integer也重写了equals方法：

```java
    public boolean equals(Object obj) {
        if (obj instanceof Integer) {
            return value == ((Integer)obj).intValue();
        }
        return false;
    }
```

```java
	public static void main(String[] args) {
        Integer i1 = 1;
        Integer i2 = 1;
        System.out.println(i1 == i2);//true，比较地址值，使用缓存对象

        Integer i3 = 130;
        Integer i4 = 130;
        System.out.println(i3 == i4);//false，比较地址值，超过缓存对象范围

        Integer i5 = new Integer(1);
        Integer i6 = new Integer(1);
        System.out.println(i5 == i6);//false，比较地址值，不使用缓存对象，因为新new

        //那能不能比较数据值呢？
        System.out.println(i1.equals(i2));//true 比较值
        System.out.println(i3.equals(i4));//true 比较值
        System.out.println(i5.equals(i6));//true 比较值
        System.out.println(i1.equals(i6));//true 比较值
        System.out.println(i3.equals(i6));//false  比较值
	}
```

结论：在实际开发中引用数据类型的两个对象比较是否“相等”，请调用对象的equals方法。

#### 5.2、重写equals方法

子类重写equals方法时，要遵循如下规则：

- 自反性：对于任何非空引用值 x，x.equals(x) 都应返回 true。 
- 对称性：对于任何非空引用值 x 和 y，当且仅当 y.equals(x) 返回 true 时，x.equals(y) 才应返回 true。 
- 传递性：对于任何非空引用值 x、y 和 z，如果 x.equals(y) 返回 true，并且 y.equals(z) 返回 true，那么 x.equals(z) 应返回 true。 
- 一致性：对于任何非空引用值 x 和 y，多次调用 x.equals(y) 始终返回 true 或始终返回 false，前提是对象上 equals 比较中所用的信息没有被修改。 
- 对于任何非空引用值 x，x.equals(null) 都应返回 false。 

注意：当此方法被重写时，通常有必要重写 hashCode 方法，以维护 hashCode 方法的常规协定，该协定声明相等对象必须具有相等的哈希码。（关于hashCode方法的应用在集合章节再讲）

在IDEA中重写equals方法和hashCode方法，使用快捷键Alt + Insert。

```java
import java.util.Objects;

public class Employee {
    private String name;
    private Integer age;
    private Double salary;
    private Long bonus;

    public Employee(String name, Integer age, Double salary, Long bonus) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.bonus = bonus;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Employee employee = (Employee) o;
        return Objects.equals(name, employee.name) &&
                Objects.equals(age, employee.age) &&
                Objects.equals(salary, employee.salary) &&
                Objects.equals(bonus, employee.bonus);
    }


    //下面的这个方法先不看
    @Override
    public int hashCode() {
        return Objects.hash(name, age, salary, bonus);
    }

    @Override
    public String toString() {
        return "Employee{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", salary=" + salary +
                ", bonus=" + bonus +
                '}';
    }
}

```

```java
import org.junit.Test;

public class TestEquals {
    @Test
    public void test(){
        Employee employee1 = new Employee("张三",23,15000.0,10000L);
        Employee employee2 = new Employee("张三",23,15000d,10000L);

        System.out.println(employee1 == employee2);//false  比较地址值
        System.out.println(employee1.equals(employee2));//如果Employee没有重写equals方法，那么等价于==
    }
}

```

![day0711_重写equals方法（1）](Java面向对象02/day0711_重写equals方法（1）.png)

![day0711_重写equals方法（2）](Java面向对象02/day0711_重写equals方法（2）.png)



## IDEA快捷键

![image-20220930153905469](Java面向对象02/image-20220930153905469.png)