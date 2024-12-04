## BI可视化平台集成OSS
本技术文档基于开源项目 [DataRoom](https://github.com/gcpaas/DataRoom) 进行修改和扩展。该项目提供了基础的文件管理功能，并集成了阿里云OSS（对象存储服务）。在此基础上，我们为 BI 可视化平台提供了文件上传、下载、删除、复制等操作的实现，并进行了相关的性能优化。
### 1. 技术实现
本系统通过集成阿里云OSS（对象存储服务）实现文件的上传、下载、删除、复制等操作。系统通过在配置文件中配置相关参数，完成与OSS的对接。以下是实现的主要功能：

- **文件上传**：支持文件上传至阿里云OSS，文件支持自动重命名或保留原文件名。
- **文件下载**：支持下载OSS存储的文件，采用流式处理避免大文件内存溢出。
- **文件删除**：支持从OSS中删除指定文件。
- **文件复制**：支持复制文件到OSS中指定路径。
- **文件权限设置**：支持文件设置为公共可读，并设置过期时间。

### 2. 集成步骤

#### 2.1 配置阿里云OSS参数
首先，确保已在阿里云控制台创建了OSS Bucket，并获取了 `AccessKeyId` 和 `AccessKeySecret`。然后，在项目的 `application.yml` 或 `application.properties` 中配置OSS相关参数。

#### 配置示例：
```yaml
gc:
  starter:
    file:
      urlPrefix: https://oss-cn-beijing.aliyuncs.com
      type: oss
      oss:
        endpoint: https://oss-cn-beijing.aliyuncs.com
        accessKeyId: ***  # 请替换为您的实际 AccessKeyId
        accessKeySecret: ***  # 请替换为您的实际 AccessKeySecret
        pathPrefix: https://tsingsoft.oss-cn-beijing.aliyuncs.com
        bucketName: ***
        filePathPrefix: tsingsoft/bigScreen
```

**注意事项：**
- `pathPrefix` 由 `endpoint` 和 `bucketName` 组成，这是OSS默认的路径构建规则。
- 请确保 `accessKeyId` 和 `accessKeySecret` 不暴露在公共仓库中。

#### 2.2 创建文件管理服务
在项目中创建一个文件管理服务，负责与OSS进行交互，处理文件的上传、下载、删除、复制等操作。

#### 核心代码：
```java
package com.gccloud.dataroom.core.module.file.service;

import com.gccloud.dataroom.core.module.file.entity.DataRoomFileEntity;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.InputStream;

/**
 * 文件管理服务接口
 */
public interface IDataRoomOssService {

    /**
     * 上传文件，文件名重新生成
     * @param file 文件对象
     * @param entity 文件实体
     * @param response HTTP响应对象
     * @param request HTTP请求对象
     * @return 上传后的文件实体
     */
    DataRoomFileEntity upload(MultipartFile file, DataRoomFileEntity entity, HttpServletResponse response, HttpServletRequest request);

    /**
     * 上传文件，保留原文件名
     * @param inputStream 文件输入流
     * @param fileName 文件名
     * @param size 文件大小
     * @param entity 文件实体
     * @return 上传后的文件实体
     */
    DataRoomFileEntity upload(InputStream inputStream, String fileName, long size, DataRoomFileEntity entity);

    /**
     * 下载文件
     * @param fileId 文件ID
     * @param response HTTP响应对象
     * @param request HTTP请求对象
     */
    void download(String fileId, HttpServletResponse response, HttpServletRequest request);

    /**
     * 删除文件
     * @param fileId 文件ID
     */
    void delete(String fileId);

    /**
     * 复制文件
     * @param sourcePath 源路径
     * @param targetPath 目标路径
     * @return 复制后的文件路径
     */
    String copy(String sourcePath, String targetPath);

    /**
     * 获取文件输入流
     * @param newName 文件名
     * @return 文件输入流
     */
    InputStream getInputStream(String newName);

    /**
     * 检测URL是否可访问
     * @param urlString URL地址
     * @return true: 可访问，false: 不可访问
     */
    boolean isUrlAccessible(String urlString);

    /**
     * 设置文件为公共读，并设置过期时间
     * @param objectName 文件名
     * @param expireTimeInSeconds 过期时间（秒）
     * @return 文件的访问地址
     */
    String setOssFilePublicReadWithExpiry(String objectName, int expireTimeInSeconds);
}
```

#### 2.3 文件下载和流处理优化
为了避免暴露OSS文件的URL并优化性能，这里对文件下载部分进行了改进。通过使用并发批量下载文件，减少与OSS服务器的连接次数。下载时，文件内容将转换为Base64编码后返回前端，前端可以解码并展示。

以下是优化后的文件下载实现：

```java
package com.gccloud.dataroom.core.utils;

import com.gccloud.dataroom.core.module.file.entity.DataRoomFileEntity;
import com.gccloud.dataroom.core.module.file.service.IDataRoomOssService;
import com.google.common.collect.Lists;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;

import java.io.*;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.*;

/**
 * 批量文件下载器
 */
@Slf4j
public class FileDownloader {

    private static final int THREAD_POOL_SIZE = 10;  // 设置线程池大小

    /**
     * 批量下载文件，阻塞方式
     * @param ossFileService OSS文件服务对象
     * @param fileEntities 文件实体列表
     * @return 包含文件内容的字节数组列表
     */
    public static List<byte[]> downloadFileInParallel(IDataRoomOssService ossFileService, List<DataRoomFileEntity> fileEntities) {
        ExecutorService executorService = Executors.newFixedThreadPool(THREAD_POOL_SIZE);
        List<Future<byte[]>> futures = new ArrayList<>();

        // 提交任务到线程池
        for (DataRoomFileEntity fileEntity : fileEntities) {
            futures.add(executorService.submit(() -> downloadFile(ossFileService, fileEntity)));
        }

        // 等待所有任务完成并收集文件内容
        List<byte[]> fileContents = new ArrayList<>();
        for (Future<byte[]> future : futures) {
            try {
                fileContents.add(future.get());  // 阻塞，等待文件下载完成
            } catch (InterruptedException | ExecutionException e) {
                log.error("下载文件失败", e);
                fileContents.add(new byte[0]);  // 如果下载失败，返回空字节数组
            }
        }

        executorService.shutdown();
        return fileContents;
    }

    /**
     * 下载单个文件
     * @param ossFileService OSS文件服务对象
     * @param fileEntity 文件实体
     * @return 文件内容的字节数组
     */
    public static byte[] downloadFile(IDataRoomOssService ossFileService, DataRoomFileEntity fileEntity) {
        String fileUrl = fileEntity.getUrl();
        if (StringUtils.isBlank(fileUrl) || !ossFileService.isUrlAccessible(fileUrl)) {
            fileUrl = ossFileService.setOssFilePublicReadWithExpiry(fileEntity.getPath(), 3600);
        }

        try (InputStream inputStream = new URL(fileUrl).openStream();
             ByteArrayOutputStream outputStream = new ByteArrayOutputStream()) {

            byte[] buffer = new byte[8192];
            int bytesRead;
            while ((bytesRead = inputStream.read(buffer)) != -1) {
                outputStream.write(buffer, 0, bytesRead);
            }

            return outputStream.toByteArray();
        } catch (IOException e) {
            log.error("文件下载失败: {}", fileUrl, e);
            return new byte[0];  // 下载失败时返回空字节数组
        }
    }
}
```

#### 2.4 线程池工具类
为提高系统性能，尤其是在处理文件上传、下载、复制等大量IO密集型操作时，合理地使用线程池能够有效减少系统的阻塞时间和响应时间。以下是线程池工具类的实现，提供了创建和管理线程池的功能。

```java
package com.gccloud.dataroom.core.utils;

import lombok.extern.slf4j.Slf4j;
import org.jetbrains.annotations.NotNull;

import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * 线程池工具类
 */
@Slf4j
public class ThreadPoolUtils {

    // 计算机核心数，设置线程池的默认参数
    public static final int POOL_SIZE = Runtime.getRuntime().availableProcessors() + 2;
    public static final int POOL_SIZE_MAX = (Runtime.getRuntime().availableProcessors() + 2) * 2;
    private static final int AWAIT_TERMINATION_TIMEOUT = 10;  // 等待线程池关闭的最大时间（秒）

    /**
     * 获取默认线程池（核心线程数8，最大线程数16）
     */
    public static ThreadPoolExecutor getDefaultThreadPoolExecutor() {
        return createThreadPoolExecutor(8, 16, 1000L, TimeUnit.MILLISECONDS);
    }

    /**
     * 获取线程池实例，允许自定义核心线程

数和最大线程数
     * @param corePoolSize 核心线程数
     * @param maximumPoolSize 最大线程数
     * @param keepAliveTime 线程空闲存活时间
     * @param unit 时间单位
     * @return ThreadPoolExecutor 线程池
     */
    public static ThreadPoolExecutor createThreadPoolExecutor(
            int corePoolSize, int maximumPoolSize, long keepAliveTime, TimeUnit unit) {

        ThreadFactory threadFactory = new ThreadFactory() {
            private final AtomicInteger threadNumber = new AtomicInteger(1);
            private final String namePrefix = "pool-thread-";
            private final ThreadGroup group = Thread.currentThread().getThreadGroup();

            @Override
            public Thread newThread(@NotNull Runnable r) {
                Thread thread = new Thread(group, r, namePrefix + threadNumber.getAndIncrement(), 0);
                thread.setDaemon(false);  // 设置为非守护线程
                return thread;
            }
        };

        return new ThreadPoolExecutor(corePoolSize, maximumPoolSize, keepAliveTime, unit,
                new LinkedBlockingQueue<>(), threadFactory, new ThreadPoolExecutor.CallerRunsPolicy());
    }

    /**
     * 创建自适应线程池，核心线程数 = CPU 核心数 + 2，最大线程数 = 核心线程数 * 2
     */
    public static ThreadPoolExecutor createFitThreadPoolExecutor() {
        return createThreadPoolExecutor(POOL_SIZE, POOL_SIZE_MAX, 1000L, TimeUnit.MILLISECONDS);
    }

    /**
     * 初始化线程池，提供名称格式自定义
     * @param nameFormat 线程名称格式
     * @return 线程池实例
     */
    public static ExecutorService initPool(String nameFormat) {
        ThreadFactory threadFactory = new ThreadFactory() {
            private final AtomicInteger threadNumber = new AtomicInteger(1);
            private final String namePrefix = nameFormat;

            @Override
            public Thread newThread(@NotNull Runnable r) {
                Thread thread = new Thread(r, namePrefix + threadNumber.getAndIncrement());
                thread.setDaemon(false);  // 设置为非守护线程
                return thread;
            }
        };

        return new ThreadPoolExecutor(POOL_SIZE, POOL_SIZE, 0L, TimeUnit.MILLISECONDS,
                new LinkedBlockingQueue<>(Integer.MAX_VALUE), threadFactory, new ThreadPoolExecutor.CallerRunsPolicy());
    }

    /**
     * 优雅关闭线程池
     * @param pool 线程池实例
     */
    public static void shutdownPool(ExecutorService pool) {
        try {
            pool.shutdown(); // 启动关闭
            if (!pool.awaitTermination(AWAIT_TERMINATION_TIMEOUT, TimeUnit.SECONDS)) {
                log.warn("线程池关闭超时，强制关闭");
                pool.shutdownNow(); // 强制关闭
            }
            log.info("线程池成功关闭");
        } catch (InterruptedException e) {
            log.error("线程池关闭中断: {}", e.getMessage());
            pool.shutdownNow(); // 如果等待中断则强制关闭线程池
        }
    }

    /**
     * 获取线程池的监控信息
     * @param executor 线程池实例
     * @return 线程池的监控信息
     */
    public static String getThreadPoolStats(ThreadPoolExecutor executor) {
        StringBuilder stats = new StringBuilder();
        stats.append("线程池状态：\n")
                .append("核心线程数: ").append(executor.getCorePoolSize()).append("\n")
                .append("最大线程数: ").append(executor.getMaximumPoolSize()).append("\n")
                .append("活跃线程数: ").append(executor.getActiveCount()).append("\n")
                .append("当前线程数: ").append(executor.getPoolSize()).append("\n")
                .append("已完成任务数: ").append(executor.getCompletedTaskCount()).append("\n")
                .append("当前排队任务数: ").append(executor.getQueue().size()).append("\n");
        return stats.toString();
    }
}
```

### 3. 总结
以上内容涵盖了在BI平台中集成OSS服务的相关功能，包括文件上传、下载、删除、复制以及使用线程池优化并发操作的实现。通过合理配置线程池和OSS参数，您可以有效提高系统的吞吐量并降低文件操作的延迟。