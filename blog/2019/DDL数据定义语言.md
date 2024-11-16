---
title: DDL数据定义语言
toc: true
data: 2022-08-06 15:22:13
tags: mysql
categories: [数据库,mysql]
---

*主要介绍了对库、表的基本操作和mysql基本数据类型*<!--more-->

###### 1、mysql库的创建、查看以及使用/切换

- **创建数据库**space1

  ```mysql
  create database space1;
  ```

- 查看当前在哪个数据库

  ```mysql
  select database;
  ```

- **进入数据库**

  ```mysql
  use 库名;
  ```

- 判断是否存在，如果不存在则创建数据库space2

  ```mysql
  create database if not exists space2;
  ```

- 创建数据库并指定字符集为GBK

  ```mysql
  create database space3 default character set gbk; 
  ```

- 查看某个库是什么字符集

  ```mysql
  show create database space1; 
  ```

- 查看当前mysql使用的字符集

  ```mysql
  show variables like 'character%';
  ```

###### 2、mysql表的数据类型

```mysql
<1>整数型
 类型     大小    范围（有符号）     范围（无符号unsigned）    用途
TINYINT  1字节   (-128，127)       (0，255)            小整数值
SMALLINT 2字节   (-32768，32767)   (0，65535)          大整数值
MEDIUMINT 3字节  (-8388608，8388607)  (0，16777215)    大整数值
INT   4字节  (-2147483648，2147483647) (0，4294967295) 大整数值
BIGINT    8字节    （）             (0，2的64次方减1)   极大整数值

<2>浮点型
 FLOAT(m,d）  4字节   单精度浮点型  备注：m代表总个数，d代表小数位个数
 DOUBLE(m,d） 8 字节  双精度浮点型  备注：m代表总个数，d代表小数位个数
 
 <3>定点型
 DECIMAL(m,d）   依赖于M和D的值    备注：m代表总个数，d代表小数位个数
 
 <4>字符串类型 
 类型          大小              用途
 CHAR          0-255字节         定长字符串
 VARCHAR       0-65535字节       变长字符串
 TINYTEXT      0-255字节         短文本字符串
 TEXT          0-65535字节       长文本数据
 MEDIUMTEXT    0-16777215字节    中等长度文本数据
 LONGTEXT      0-4294967295字节  极大文本数据
 
char的优缺点：存取速度比varchar更快，但是比varchar更占用空间
varchar的优缺点：比char省空间。但是存取速度没有char快
 
 <5>时间型
 数据类型    字节数     格式                  备注
 date        3     yyyy-MM-dd            存储日期值
 time        3      HH:mm:ss             存储时分秒
 year        1       yyyy                存储年
 datetime    8    yyyy-MM-dd HH:mm:ss    存储日期+时间
 timestamp   4  yyyy-MM-dd HH:mm:ss     存储日期+时间，可作时间戳
         
 create table test_time (
 date_value date,
 time_value time,
 year_value year,
 datetime_value datetime,
 timestamp_value timestamp
 ) engine=innodb charset=utf8;
 
insert into test_time values(now(),now(),now(),now(),now());
```

###### 3、mysql表的创建

- 语法：（**注意空格位**）

  ```mysql
  CREATE TABLE 表名 (    
  字段名1 字段类型1 约束条件1 说明1,   
  字段名2 字段类型2 约束条件2 说明2,
  字段名3 字段类型3 约束条件3 说明3
  );
                  
  create table 新表名 as select * from 旧表名 where 1=2;(注意：建议这种创建表的方式用于日常测试，因为可能索引什么的会复制不过来)
  
  create table 新表名 like 旧表名;
  ```
  
- **约束条件**：

  ```mysql
  comment         ----说明解释
  not null        ----不为空
  default         ----默认值
  unsigned        ----无符号（即正数）
  auto_increment  ----自增
  zerofill        ----自动填充
  unique key      ----唯一值
  ```

- 创建sql：

  ```mysql
  CREATE TABLE student (
  
  id tinyint(5) zerofill auto_increment not null comment '学生学号',
  
  name varchar(20) default null comment '学生姓名',
  
  age  tinyint  default null comment '学生年龄',
  
  class varchar(20) default null comment '学生班级',
  
  sex char(5) not null comment '学生性别',
  
  unique key (id)
  
  )engine=innodb charset=utf8;;
                      
  
  
  CREATE TABLE student (
  
  id tinyint(5)  auto_increment default null comment '学生学号',
  
  name varchar(20) default null comment '学生姓名',
  
  age  tinyint  default null comment '学生年龄',
  
  class varchar(20) default null comment '学生班级',
  
  sex char(5) not null comment '学生性别',
  
  unique key (id)
                      
  )engine=innodb charset=utf8;;
  ```

###### 4、mysql表的查看

- **查看数据库中的所有表**：show tables；
- **查看表结构**：desc 表名;
- **查看创建表的sql语句**：show create table 表名;
- \G :有结束sql语句的作用，还有把显示的数据纵向旋转90度
- \g :有结束sql语句的作用
- **复制A表结构创建e表：** create table e as select *from A;或者写成create table e like A;（不包含表数据）

###### 5、mysql表的维护和删除

- 修改表名

  ```mysql
   rename table 旧表名 to 新表名;
   
   rename table student to user;
  ```

- 添加列

  ```mysql
  给表添加一列：alter table 表名 add 列名 类型;
  
  alter table user add addr varchar(50);
  
  alter table add 列名 类型 comment '说明';
  
  alter table user add famliy varchar(50) comment '学生父母';
  
  给表最前面添加一列：alter table 表名 add 列名 类型 first;
  
  alter table user add job varchar(10) first;
  
  给表某个字段后添加一列：alter table 表名 add 列名 类型 after 字段名;
  
  alter table user add servnumber int(11)  after id;
  
  注意：没有给表某个字段前添加一列的说法。
  ```

- 修改列类型

  ```mysql
  alter table 表名 modify 列名 新类型;
  
  alter table user modify servnumber varchar(20);
  ```

- 修改列名

  ```mysql
  alter table 表名 change 旧列名 新列名 类型;
  
  alter table user change servnumber telephone varchar(20);
  ```

- 删除列

  ```mysql
  alter table 表名 drop 列名;
  
  alter table user drop famliy;
  ```

- 修改字符集

  ```mysql
  alter table 表名 character set 字符集;
  
  alter table user character  set GBK;
  ```

- **表的删除**

  ```mysql
  drop table 表名；
  drop table user;
  
  看表是否存在，若存在则删除表：drop table if exists 表名;
  drop table  if exists teacher;
  ```

