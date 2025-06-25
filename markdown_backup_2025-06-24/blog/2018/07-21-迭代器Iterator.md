---
<!-- truncate -->
<!-- truncate -->
<!-- truncate -->
slug: product-iterator
title: 迭代器Iterator
authors: [jiguanchen]
---

*迭代器是一种设计模式，在链式结构中经常使用。本篇主要介绍什么是Iterator？Iterator的主要方法及其注意事项？*<!--more-->

#### 什么是迭代器？

terator是java中的一个接口，核心作用就是用来遍历容器的元素，当容器实现了Iterator接口后，可以通过调用Iterator()方法获取⼀个 Iterator对象。

**为什么调用容器里面的Iterator方法？**
因为容器的实现有多种，不同的容器遍历规则不⼀样，比如ArrayList/LinkedList/
HashSet/TreeSet等，所以设计了Iterator接口，让容器本身去实现这个接⼝，实现里面的方法，从而让开发人员不用关系容器的遍历机制，直接使用对应的方法即可

**三个核⼼方法**
boolean hashNext()：用于判断iterator内是否有下个元素，如果有则返回true，没有则false
Obejct next()：返回iterator的下一个元素，同时指针也会向后移动1位
void remove()：删除指针的上⼀个元素（容易出问题，删除元素不建议使用容器器自己的方法）

**迭代器的集合遍历**

```java
public static void testSet(){
        Set<String> set = new HashSet<>();
        set.add("jack");
        set.add("tom");
        set.add("marry");
        set.add("tony");
        set.add("jack");
        Iterator<String> iterator =  set.iterator();
        while (iterator.hasNext()){
            String str = iterator.next();
            System.out.println(str);
        }
    }
    public static void testList(){
        List<String> list = new ArrayList<>();
        list.add("jack");
        list.add("tom");
        list.add("mary");
        list.add("tim");
        list.add("tony");
        list.add("eric");
        list.add("jack");
        Iterator<String> iterator =  list.iterator();
        while (iterator.hasNext()){
            String str = iterator.next();
            System.out.println(str);
        }
    }
```

​		**void remove()强调：**
​		1、删除指针的上⼀个元素	
​		2、只有当next执⾏行行完后，才能调⽤用remove函数
​		3、如要删除第⼀个元素，不能直接调⽤用 remove(),要先next⼀下()否则调⽤用remove方法是会抛出异常的

**迭代器遍历元素时不能通过Collection接口中的remove⽅法删除元素，只能⽤用Iterator的remove方法删除元素; 原因 某个线程在 Collection 上进行迭代时，不允许另一个线程修改该 Collection**

```java
public static void testList(){
        List<String> list = new ArrayList<>();
        list.add("jack");
        list.add("tom");
        list.add("mary");
        list.add("tim");
        list.add("tony");
        list.add("eric");
        list.add("jack");
        Iterator<String> iterator =  list.iterator();
        while (iterator.hasNext()){
            String str = iterator.next();
            if("jack".equals(str)){
                list.remove(str);//ConcurrentModificationException并发修改异常
            }
            System.out.println(str);
        }
    }
```

**迭代出的对象是引用的拷贝，如果修改迭代中的元素，那么就是修改容器对象的本身**

**和for循环对⽐**：

- for循环适合顺序访问，或者通过下标进⾏访问的
- 迭代器适合链式结构
- 最终看使⽤场景，性能会有轻微差别，但是可以忽略
