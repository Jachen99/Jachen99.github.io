---
slug: java-collection-utils
title: 集合工具类Collections
authors: [jiguanchen]
---

*介绍了不能被实例化的集合工具类Collections* <!--more-->

1、Collections包含有多种集合操作的静态多态方法，不能把构造函数私有化（即实例化）

```java
public class Collections {
    // Suppresses default constructor, ensuring non-
instantiability.
    private Collections() {
    }
```

2、与Collection的区别
				Collection是接口，提供了对集合对象进行基本操作的通用接⼝方法，List、Set等多种具体的实现类
				Collections是工具类，专门操作Collection接口实现类里面的元素

3、常见方法

```java
排序sort(List list)

//按自然排序升序
List<String> list = new ArrayList<>();
list.add("aaaa");
list.add("zzz");
list.add("gggg"); 
System.out.println(list);
Collections.sort(list);
System.out.println(list);

/*sort(List list, Comparator c) 自定义排序规则，由Comparator控制排序逻辑*/
List<String> list = new ArrayList<>();
list.add("aaaa");
list.add("zzz");
list.add("gggg");
System.out.println(list);
//默认升序
Collections.sort(list, Comparator.naturalOrder());
System.out.println(list);
//降序
Collections.sort(list, Comparator.reverseOrder());
System.out.println(list);

随机排序 shuffle(List list)
    List<String> list = new ArrayList<>();
        list.add("1");
        list.add("2");
        list.add("3");
        list.add("4");
        list.add("5");
        list.add("6");
        list.add("7");
        list.add("8");
        list.add("9");
        list.add("10");
        list.add("J");
        list.add("Q");
        list.add("K");
        System.out.println(list);
        Collections.shuffle(list);
        System.out.println(list);
```

获取最大元素 max(Collection coll) 默认比较，不适合对象比较

```java
//获取最大元素 max(Collection coll, Comparator comparator)
//获取最小元素 min(Collection coll)

public class CollectionsTest {
    public static void main(String[] args) {
        List<Student> list = new ArrayList<>();
        list.add(new Student("jack", 26));
        list.add(new Student("tom", 29));
        list.add(new Student("mary", 32));
        list.add(new Student("tony", 19));
        list.add(new Student("smith", 41));
        System.out.println(list);
        Student maxAgeStudent =  Collections.max(list, new 
Comparator<Student>() {
            @Override
            public int compare(Student o1, Student o2) {
                return o1.getAge() - o2.getAge();
            }
        });
        
         Student mixAgeStudent =  Collections.mix(list, new 
Comparator<Student>()       {
            @Override
            public int compare(Student o1, Student o2) {
                return o1.getAge() - o2.getAge();
            }
        });
       System.out.println(maxAgeStudent.toString());
    }
}
class Student {
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    private int age;
    private String name;
    public void setAge(int age) {
        this.age = age;
    }
    public int getAge() {
        return age;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getName() {
        return name;
    }
    @Override
    public String toString() {
        return "Student{" +
                "age=" + age +
                ", name='" + name + '\'' +
                '}';
    }
}
```

4、创建不可变集合unmodifiablleXXX()

```java
    List<String> list = new ArrayList<>();
        list.add("SpringBoot课程");
        list.add("架构课程");
        list.add("微服务SpringCloud课程"); //设置为只读List集合
        list = Collections.unmodifiableList(list);
        System.out.println(list);
        Set<String> set = new HashSet<>();
        set.add("Mysql教程");
        set.add("Linux服务器器器器教程");
        set.add("Git教程");
        //设置为只读Set集合
        set = Collections.unmodifiableSet(set);
        System.out.println(set);
        Map<String, String> map = new HashMap<>();
        map.put("key1", "课程1");
        map.put("key2", "课程2");
        //设置为只读Map集合
        map = Collections.unmodifiableMap(map);
        System.out.println(map);
```

5、元素排序接口Comparable

```java
//什么是Comparable
public interface Comparable<T> {
    public int compareTo(T o);
}
//是一个接口，定制排序规则
//对它的每个类的对象进行整体排序，里面compareTo方法是实现排序的具体方法
//比如TreeSet、SortedSet、Collections.sort()方法调用进行排序
//String、Integer等类默认实现了这个接口，所以可以排序(看源码)

//详解comparable方法
//⽤于比较次对象和指定对象的顺序，o为要比较的对象
//返回int类型
//大于0, 表示this大于传进来的对象o ,则往后排，即升序
//等于0，表示this等于传进来的对象o
//小于0，表示this小于传进来的对象o

//需求：根据学生的年龄进行排序
public class TestCom {
    public static void main(String [] args) {
        Set<Student> studentSet = new TreeSet<>();
        studentSet.add(new Student("jack",32));
        studentSet.add(new Student("tom",22));
        studentSet.add(new Student("mary",35));
        studentSet.add(new Student("tim",11));
        studentSet.add(new Student("tony",49));
        studentSet.add(new Student("dd",30));
        System.out.println(studentSet);
     }
}
 class Student implements Comparable{
    private int age;
    private String name;
    public void setAge(int age) {
        this.age = age;
    }
    public int getAge() {
        return age;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getName() {
        return name;
    }
    public Student(String name,int age){
        this.name = name;
        this.age = age;
    }
    @Override
    public String toString() {
        return "Student{" +
                "age=" + age +
                ", name='" + name + '\'' +
                '}';
    }
    @Override
    public int compareTo(Object o) {
        if(o instanceof Student){
            Student student = (Student)o;
            return this.age - student.age;
        }
        //返回的数是0代表两个对象相同
        return 0;
    }
}
```

