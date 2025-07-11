---
slug: database-redis-persistence-rdb-aof
title: RDB和AOF持久化小结
authors: [jiguanchen]
tags: [zhongjianjian,redis]
---

**背景**：简单总结了一些Redis的两种持久化方式 RDB和AOF<!--more-->

## Redis RDB持久化流程

RDB其实就是把数据以快照的形式保存在磁盘上，也是默认的持久化方式。这种方式是将内存中的数据以快照的方式写入到二进制文件中，默认文件名dump.rdb

##### RDB 的触发条件有手动触发和自动触发两种：

**手动触发：**
Save命令：
会同步阻塞redis服务器进程 直到rdb文件创建完毕为止 在服务器阻塞期间不能处理命令请求（基本已经弃用了）
Bgsave命令：
会在主线程fork一个子进程 由子进程去创建一份rdb文件 临时存储数据 父进程继续执行其他指令。

**自动触发：**
1、Save m n：
在配置文件中设置 save m n 指定当m秒内发生n次变化时 会发生bgsave。
2、其他自动触发机制
在主从复制场景下 从节点执行全量操作 则主节点会执行bgsave
执行shutdown命令 会自动执行rdb持久化。

**优势：**

-   RDB文件紧凑 全量备份 非常时候适合用于备份和灾难恢复

-   生产RDB文件的时候 redis主进程会fork()一个子进程处理所有工作，主进程不需要进行任何磁盘IO操作

-   RDB在恢复大数据集时的速度比ADF的恢复速度快很多

**劣势：**

-   当进行快照持久化时，会开启一个子进程专门负责快照持久化 子进程会拥有父进程的内存数据 父进程修改内存 子进程无影响 所以在快照持久化期间修改的数据不会被保存 可能丢失数据。

------

## Redis AOF持久化流程

AOF的工作机制很简单，redis会将每个收到的写的命令通过write函数追加到文件中 也就是我们所说的日志记录

##### 持久化原理：

每当有一个写命令过来 就直接保存在我们的AOF文件中
文件重写原理：
AOF持久化的文件会越来越大 ，为了压缩AOF文件的持久化文件。Redis提供了bgrewriteaof命令 将内存中的数据以命令的方式保存在临时文件中，同时会frok出一条新进程来将文件重写。重写AOF文件的操作，并没有读取旧的AOF文件，而是将整个内存的数据库内容用命令的方式重写了个新的AOF文件，于快照类似。

##### 三种触发机制：

每修改同步always：同步持久化 每次发生数据变更会被立即记录到磁盘  性能较差 但数据完整性比较好。
每秒同步everysec：异步操作 每秒记录 如果一秒内宕dang机，有数据丢失。
no：操作系统控制的写回 性能好 宕机时丢失数据较多 

**优势：**

-   AOF可以更好的保护数据不丢失 一般会每隔1秒 通过一个后台线程执行一次fsync操作 最多丢失1秒数据

-   AOF日志文件即使过大的时候 出现后台重写操作 也不会影响客户端的读写

-   三种写回策略体现了一个重要的原则 trade-off 取舍 ，指在性能和可靠性保证之间做出取舍 即用空间换时间 体现出了redis的高性能。

**劣势：**

-   对于同一份数据来说 AOF日志文件通常比RDB数据快照文件更大

-   AOF开启后 支持QPS会比EDB支持的写QPS低 因为AOF一般会配置fsync一次日志文件 每秒一次fsync 性能也很高

-   以前AOF发生过bug 就是AOF记录的日志 进行数据恢复的时候 没有恢复一模一样的数据处理。

------

## 总结

1.	Redis 默认开启RDB持久化方式，在指定的时间间隔内，执行指定次数的写操作，则将内存中的数据写入到磁盘中。
2.	RDB 持久化适合大规模的数据恢复但它的数据一致性和完整性较差。
3.	Redis 需要手动开启AOF持久化方式，默认是每秒将写操作日志追加到AOF文件中。
4.	AOF 的数据完整性比RDB高，但记录内容多了，会影响数据恢复的效率。
5.	Redis 针对 AOF文件大的问题，提供重写的瘦身机制。
6.	若只打算用Redis 做缓存，可以关闭持久化。
7.	若打算使用Redis 的持久化。建议RDB和AOF都开启。其实RDB更适合做数据的备份，留一后手。AOF出问题了，还有RDB。
