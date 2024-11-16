---
title: 集合Set
toc: true
data: 2022-08-05 02:02:07
tags: [Java,面试题]
categories: java
---

*集合框架之Set及其子类*  <!--more-->

什么是Set数据结构？
		1、Set相对于List是简单的一种集合,具有和 Collection 完全一样的接口，只是实现上不同，**Set不保存重复的元素，存储一组唯一，⽆序的对象**。
		2、Set中的元素是不能重复的, 实现细节可以参考Map，因为这些Set的实现都是对应的Map的一种封装。比如HashSet是对HashMap的封装，TreeSet对TreeMap
		3、Set底层是一个HashMap，由于HashMap的put()方法是一个键值对，当新放⼊HashMap的Entry中key 与集合中原有Entry的key相同（hashCode()返回值相等，通过equals比较也返回true），新添加的Entry的value会将覆盖原来Entry的value，但key不会有任何改变。
		4、允许包含值为null的元素，但最多只能有一个null元素

常⻅的实现类。
		HashSet
		HashSet类按照哈希算法来存取集合中的对象，存取速度比较快
对应的Map是HashMap，是基于Hash的快速元素插入，元素⽆顺序。
		TreeSet
		TreeSet类实现了SortedSet接口，能够对集合中的对象进行排序

```java
//创建对象,HashSet和TreeSet api一样
Set<Integer> set = new HashSet<>();
//往容器里面添加对象
set.add("jack");
//清空元素 
set.clear();
//返回⼤小  
set.size();
//根据对象删除元素
set.remove("jack");
//是否为空
set.isEmpty();
```

两者常见区别
		1、HashSet不能保证元素的排列列顺序，TreeSet是SortedSet接口的唯一实现类，可以确保集合元素处于排序状态
		2、HashSet底层用的是哈希表，TreeSet采用的数据结构是红⿊树（红⿊树是⼀种特定类型的⼆叉树）
		3、HashSet中元素可以是null，但只能有一个，TreeSet不允许放⼊null
		4、一般使⽤用HashSet，如果需要排序的功能时，才使用TreeSet（性能原因）