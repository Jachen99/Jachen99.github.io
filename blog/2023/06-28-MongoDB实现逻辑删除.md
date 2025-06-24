---
<!-- truncate -->
<!-- truncate -->
<!-- truncate -->
slug: product-logic-delete
title: MongoDB实现逻辑删除
authors: [jiguanchen]
tags: [shujuku, mongoDB]
---

**背景**：*我们对`MongoDB`采用的逻辑删除的方案，与`MySQL`完全不同。 得益于`MongoDB`擅长储存非结构化数据的优点，即使业务数据结构发生，也不会影响原来的数据，还能保证业务表查询效率。 若`MySQL`采用此方案，则有业务数据库表结构变动导致数据迁移失败的风险，甚至影响正常业务流程。 综合考虑，关系型数据库适合通过“删除标记”实现逻辑删除，非关系型数据库更适合将“已删除”的数据迁移至回收表中。*<!--more-->

举个小demo

## 如果改变表字段：

​		首先导入了 MongoDB 驱动，然后创建了一个 MongoDB 客户端（`MongoClient`），并连接到了本地的 MongoDB 服务器（"mongodb://localhost:27017"）。通过客户端获取了数据库 "test" 中的集合 "collection"。在逻辑删除代码中，首先通过 ObjectId 创建了一个 ObjectId 对象，其值为 "5f36f47a06c5a722497f37b5"。然后，通过调用 `updateOne` 方法对该文档进行了逻辑删除操作，即在该文档中添加/更新了一个 "deleted" 字段，该字段的值为 true。

```xml
<dependency>
    <groupId>org.mongodb</groupId>
    <artifactId>mongodb-driver-sync</artifactId>
    <version>4.0.5</version>
</dependency>
```

```java
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Updates;
import org.bson.Document;
import org.bson.types.ObjectId;

public class MongoDBLogicDeleteExample {
    public static void main(String[] args) {
        // 创建 MongoDB 客户端
        MongoClient mongoClient = MongoClients.create("mongodb://localhost:27017");

        // 获取数据库和集合
        MongoCollection<Document> collection = mongoClient.getDatabase("test").getCollection("collection");

        // 逻辑删除
        ObjectId id = new ObjectId("5f36f47a06c5a722497f37b5");
        collection.updateOne(Filters.eq("_id", id), Updates.set("deleted", true));

        // 关闭 MongoDB 客户端
        mongoClient.close();
    }
}
```

​		然后在查询代码中，通过调用 `find` 方法查询 "deleted" 字段不等于 true 的文档，即查询未被逻辑删除的文档。然后，将查询结果存入 `documents` 集合中。最后，通过循环打印出了查询结果中的每一个文档。最后，关闭了 MongoDB 客户端。

```java
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.model.Filters;
import org.bson.Document;

import java.util.ArrayList;
import java.util.List;

public class MongoDBQueryExample {
    public static void main(String[] args) {
        // 创建 MongoDB 客户端
        MongoClient mongoClient = MongoClients.create("mongodb://localhost:27017");

        // 获取数据库和集合
        MongoCollection<Document> collection = mongoClient.getDatabase("test").getCollection("collection");

        // 查询
        List<Document> documents = new ArrayList<>();
        collection.find(Filters.ne("deleted", true)).into(documents);

        // 打印结果
        for (Document document : documents) {
            System.out.println(document);
        }

        // 关闭 MongoDB 客户端
       

```

## 不改变表字段

如果不想添加字段，可以使用 MongoDB 的另一种实现逻辑删除的方法，即使用软删除。软删除的思想是将文档移动到另一个集合中，而不是真正删除文档。

```java
import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.bson.types.ObjectId;

import java.util.ArrayList;
import java.util.List;

public class LogicalDeletionExample {
    public static void main(String[] args) {
        // 创建 MongoDB 客户端
        MongoClient mongoClient = new MongoClient("mongodb://localhost:27017");

        // 获取数据库
        MongoDatabase database = mongoClient.getDatabase("test");

        // 获取原始集合
        MongoCollection<Document> collection = database.getCollection("collection");

        // 获取新集合
        MongoCollection<Document> deletedCollection = database.getCollection("deleted_collection");

        // 逻辑删除
        ObjectId id = new ObjectId("5f36f47a06c5a722497f37b5");
        Document deletedDocument = collection.find(new Document("_id", id)).first();
        deletedCollection.insertOne(deletedDocument);
        collection.deleteOne(new Document("_id", id));

        // 查询
        List<Document> documents = new ArrayList<>();
        collection.find().into(documents);

        // 打印结果
        for (Document document : documents) {
            System.out.println(document);
        }

        // 关闭客户端
        mongoClient.close();
    }
}

```

以上代码通过将文档移动到新集合中，实现了 MongoDB 的逻辑删除，并且不添加字段。
