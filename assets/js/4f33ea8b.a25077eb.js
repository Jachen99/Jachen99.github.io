"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[7547],{880:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var r=t(41852),i=t(74848),a=t(28453);const o={slug:"product-docs-oss-integration",title:"BI\u53ef\u89c6\u5316\u5e73\u53f0\u96c6\u6210OSS",authors:["jiguanchen"],tags:["oss"]},l=void 0,s={authorsImageUrls:[void 0]},c=[{value:"BI\u53ef\u89c6\u5316\u5e73\u53f0\u96c6\u6210OSS",id:"bi\u53ef\u89c6\u5316\u5e73\u53f0\u96c6\u6210oss",level:2},{value:"1. \u6280\u672f\u5b9e\u73b0",id:"1-\u6280\u672f\u5b9e\u73b0",level:3},{value:"2. \u96c6\u6210\u6b65\u9aa4",id:"2-\u96c6\u6210\u6b65\u9aa4",level:3},{value:"2.1 \u914d\u7f6e\u963f\u91cc\u4e91OSS\u53c2\u6570",id:"21-\u914d\u7f6e\u963f\u91cc\u4e91oss\u53c2\u6570",level:4},{value:"\u914d\u7f6e\u793a\u4f8b\uff1a",id:"\u914d\u7f6e\u793a\u4f8b",level:4},{value:"2.2 \u521b\u5efa\u6587\u4ef6\u7ba1\u7406\u670d\u52a1",id:"22-\u521b\u5efa\u6587\u4ef6\u7ba1\u7406\u670d\u52a1",level:4},{value:"\u6838\u5fc3\u4ee3\u7801\uff1a",id:"\u6838\u5fc3\u4ee3\u7801",level:4},{value:"2.3 \u6587\u4ef6\u4e0b\u8f7d\u548c\u6d41\u5904\u7406\u4f18\u5316",id:"23-\u6587\u4ef6\u4e0b\u8f7d\u548c\u6d41\u5904\u7406\u4f18\u5316",level:4},{value:"2.4 \u7ebf\u7a0b\u6c60\u5de5\u5177\u7c7b",id:"24-\u7ebf\u7a0b\u6c60\u5de5\u5177\u7c7b",level:4},{value:"3. \u603b\u7ed3",id:"3-\u603b\u7ed3",level:3}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"bi\u53ef\u89c6\u5316\u5e73\u53f0\u96c6\u6210oss",children:"BI\u53ef\u89c6\u5316\u5e73\u53f0\u96c6\u6210OSS"}),"\n",(0,i.jsxs)(n.p,{children:["\u672c\u6280\u672f\u6587\u6863\u57fa\u4e8e\u5f00\u6e90\u9879\u76ee ",(0,i.jsx)(n.a,{href:"https://github.com/gcpaas/DataRoom",children:"DataRoom"})," \u8fdb\u884c\u4fee\u6539\u548c\u6269\u5c55\u3002\u8be5\u9879\u76ee\u63d0\u4f9b\u4e86\u57fa\u7840\u7684\u6587\u4ef6\u7ba1\u7406\u529f\u80fd\uff0c\u5e76\u96c6\u6210\u4e86\u963f\u91cc\u4e91OSS\uff08\u5bf9\u8c61\u5b58\u50a8\u670d\u52a1\uff09\u3002\u5728\u6b64\u57fa\u7840\u4e0a\uff0c\u6211\u4eec\u4e3a BI \u53ef\u89c6\u5316\u5e73\u53f0\u63d0\u4f9b\u4e86\u6587\u4ef6\u4e0a\u4f20\u3001\u4e0b\u8f7d\u3001\u5220\u9664\u3001\u590d\u5236\u7b49\u64cd\u4f5c\u7684\u5b9e\u73b0\uff0c\u5e76\u8fdb\u884c\u4e86\u76f8\u5173\u7684\u6027\u80fd\u4f18\u5316\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"1-\u6280\u672f\u5b9e\u73b0",children:"1. \u6280\u672f\u5b9e\u73b0"}),"\n",(0,i.jsx)(n.p,{children:"\u672c\u7cfb\u7edf\u901a\u8fc7\u96c6\u6210\u963f\u91cc\u4e91OSS\uff08\u5bf9\u8c61\u5b58\u50a8\u670d\u52a1\uff09\u5b9e\u73b0\u6587\u4ef6\u7684\u4e0a\u4f20\u3001\u4e0b\u8f7d\u3001\u5220\u9664\u3001\u590d\u5236\u7b49\u64cd\u4f5c\u3002\u7cfb\u7edf\u901a\u8fc7\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u76f8\u5173\u53c2\u6570\uff0c\u5b8c\u6210\u4e0eOSS\u7684\u5bf9\u63a5\u3002\u4ee5\u4e0b\u662f\u5b9e\u73b0\u7684\u4e3b\u8981\u529f\u80fd\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u6587\u4ef6\u4e0a\u4f20"}),"\uff1a\u652f\u6301\u6587\u4ef6\u4e0a\u4f20\u81f3\u963f\u91cc\u4e91OSS\uff0c\u6587\u4ef6\u652f\u6301\u81ea\u52a8\u91cd\u547d\u540d\u6216\u4fdd\u7559\u539f\u6587\u4ef6\u540d\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u6587\u4ef6\u4e0b\u8f7d"}),"\uff1a\u652f\u6301\u4e0b\u8f7dOSS\u5b58\u50a8\u7684\u6587\u4ef6\uff0c\u91c7\u7528\u6d41\u5f0f\u5904\u7406\u907f\u514d\u5927\u6587\u4ef6\u5185\u5b58\u6ea2\u51fa\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u6587\u4ef6\u5220\u9664"}),"\uff1a\u652f\u6301\u4eceOSS\u4e2d\u5220\u9664\u6307\u5b9a\u6587\u4ef6\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u6587\u4ef6\u590d\u5236"}),"\uff1a\u652f\u6301\u590d\u5236\u6587\u4ef6\u5230OSS\u4e2d\u6307\u5b9a\u8def\u5f84\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u6587\u4ef6\u6743\u9650\u8bbe\u7f6e"}),"\uff1a\u652f\u6301\u6587\u4ef6\u8bbe\u7f6e\u4e3a\u516c\u5171\u53ef\u8bfb\uff0c\u5e76\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"2-\u96c6\u6210\u6b65\u9aa4",children:"2. \u96c6\u6210\u6b65\u9aa4"}),"\n",(0,i.jsx)(n.h4,{id:"21-\u914d\u7f6e\u963f\u91cc\u4e91oss\u53c2\u6570",children:"2.1 \u914d\u7f6e\u963f\u91cc\u4e91OSS\u53c2\u6570"}),"\n",(0,i.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u786e\u4fdd\u5df2\u5728\u963f\u91cc\u4e91\u63a7\u5236\u53f0\u521b\u5efa\u4e86OSS Bucket\uff0c\u5e76\u83b7\u53d6\u4e86 ",(0,i.jsx)(n.code,{children:"AccessKeyId"})," \u548c ",(0,i.jsx)(n.code,{children:"AccessKeySecret"}),"\u3002\u7136\u540e\uff0c\u5728\u9879\u76ee\u7684 ",(0,i.jsx)(n.code,{children:"application.yml"})," \u6216 ",(0,i.jsx)(n.code,{children:"application.properties"})," \u4e2d\u914d\u7f6eOSS\u76f8\u5173\u53c2\u6570\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u914d\u7f6e\u793a\u4f8b",children:"\u914d\u7f6e\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"gc:\n  starter:\n    file:\n      urlPrefix: https://oss-cn-beijing.aliyuncs.com\n      type: oss\n      oss:\n        endpoint: https://oss-cn-beijing.aliyuncs.com\n        accessKeyId: ***  # \u8bf7\u66ff\u6362\u4e3a\u60a8\u7684\u5b9e\u9645 AccessKeyId\n        accessKeySecret: ***  # \u8bf7\u66ff\u6362\u4e3a\u60a8\u7684\u5b9e\u9645 AccessKeySecret\n        pathPrefix: https://***.oss-cn-beijing.aliyuncs.com\n        bucketName: ***\n        filePathPrefix: ***/bigScreen\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u6ce8\u610f\u4e8b\u9879\uff1a"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pathPrefix"})," \u7531 ",(0,i.jsx)(n.code,{children:"endpoint"})," \u548c ",(0,i.jsx)(n.code,{children:"bucketName"})," \u7ec4\u6210\uff0c\u8fd9\u662fOSS\u9ed8\u8ba4\u7684\u8def\u5f84\u6784\u5efa\u89c4\u5219\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u8bf7\u786e\u4fdd ",(0,i.jsx)(n.code,{children:"accessKeyId"})," \u548c ",(0,i.jsx)(n.code,{children:"accessKeySecret"})," \u4e0d\u66b4\u9732\u5728\u516c\u5171\u4ed3\u5e93\u4e2d\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"22-\u521b\u5efa\u6587\u4ef6\u7ba1\u7406\u670d\u52a1",children:"2.2 \u521b\u5efa\u6587\u4ef6\u7ba1\u7406\u670d\u52a1"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u9879\u76ee\u4e2d\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u7ba1\u7406\u670d\u52a1\uff0c\u8d1f\u8d23\u4e0eOSS\u8fdb\u884c\u4ea4\u4e92\uff0c\u5904\u7406\u6587\u4ef6\u7684\u4e0a\u4f20\u3001\u4e0b\u8f7d\u3001\u5220\u9664\u3001\u590d\u5236\u7b49\u64cd\u4f5c\u3002"}),"\n",(0,i.jsx)(n.h4,{id:"\u6838\u5fc3\u4ee3\u7801",children:"\u6838\u5fc3\u4ee3\u7801\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"package com.gccloud.dataroom.core.module.file.service;\n\nimport com.gccloud.dataroom.core.module.file.entity.DataRoomFileEntity;\nimport org.springframework.web.multipart.MultipartFile;\n\nimport javax.servlet.http.HttpServletRequest;\nimport javax.servlet.http.HttpServletResponse;\nimport java.io.InputStream;\n\n/**\n * \u6587\u4ef6\u7ba1\u7406\u670d\u52a1\u63a5\u53e3\n */\npublic interface IDataRoomOssService {\n\n    /**\n     * \u4e0a\u4f20\u6587\u4ef6\uff0c\u6587\u4ef6\u540d\u91cd\u65b0\u751f\u6210\n     * @param file \u6587\u4ef6\u5bf9\u8c61\n     * @param entity \u6587\u4ef6\u5b9e\u4f53\n     * @param response HTTP\u54cd\u5e94\u5bf9\u8c61\n     * @param request HTTP\u8bf7\u6c42\u5bf9\u8c61\n     * @return \u4e0a\u4f20\u540e\u7684\u6587\u4ef6\u5b9e\u4f53\n     */\n    DataRoomFileEntity upload(MultipartFile file, DataRoomFileEntity entity, HttpServletResponse response, HttpServletRequest request);\n\n    /**\n     * \u4e0a\u4f20\u6587\u4ef6\uff0c\u4fdd\u7559\u539f\u6587\u4ef6\u540d\n     * @param inputStream \u6587\u4ef6\u8f93\u5165\u6d41\n     * @param fileName \u6587\u4ef6\u540d\n     * @param size \u6587\u4ef6\u5927\u5c0f\n     * @param entity \u6587\u4ef6\u5b9e\u4f53\n     * @return \u4e0a\u4f20\u540e\u7684\u6587\u4ef6\u5b9e\u4f53\n     */\n    DataRoomFileEntity upload(InputStream inputStream, String fileName, long size, DataRoomFileEntity entity);\n\n    /**\n     * \u4e0b\u8f7d\u6587\u4ef6\n     * @param fileId \u6587\u4ef6ID\n     * @param response HTTP\u54cd\u5e94\u5bf9\u8c61\n     * @param request HTTP\u8bf7\u6c42\u5bf9\u8c61\n     */\n    void download(String fileId, HttpServletResponse response, HttpServletRequest request);\n\n    /**\n     * \u5220\u9664\u6587\u4ef6\n     * @param fileId \u6587\u4ef6ID\n     */\n    void delete(String fileId);\n\n    /**\n     * \u590d\u5236\u6587\u4ef6\n     * @param sourcePath \u6e90\u8def\u5f84\n     * @param targetPath \u76ee\u6807\u8def\u5f84\n     * @return \u590d\u5236\u540e\u7684\u6587\u4ef6\u8def\u5f84\n     */\n    String copy(String sourcePath, String targetPath);\n\n    /**\n     * \u83b7\u53d6\u6587\u4ef6\u8f93\u5165\u6d41\n     * @param newName \u6587\u4ef6\u540d\n     * @return \u6587\u4ef6\u8f93\u5165\u6d41\n     */\n    InputStream getInputStream(String newName);\n\n    /**\n     * \u68c0\u6d4bURL\u662f\u5426\u53ef\u8bbf\u95ee\n     * @param urlString URL\u5730\u5740\n     * @return true: \u53ef\u8bbf\u95ee\uff0cfalse: \u4e0d\u53ef\u8bbf\u95ee\n     */\n    boolean isUrlAccessible(String urlString);\n\n    /**\n     * \u8bbe\u7f6e\u6587\u4ef6\u4e3a\u516c\u5171\u8bfb\uff0c\u5e76\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\n     * @param objectName \u6587\u4ef6\u540d\n     * @param expireTimeInSeconds \u8fc7\u671f\u65f6\u95f4\uff08\u79d2\uff09\n     * @return \u6587\u4ef6\u7684\u8bbf\u95ee\u5730\u5740\n     */\n    String setOssFilePublicReadWithExpiry(String objectName, int expireTimeInSeconds);\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"23-\u6587\u4ef6\u4e0b\u8f7d\u548c\u6d41\u5904\u7406\u4f18\u5316",children:"2.3 \u6587\u4ef6\u4e0b\u8f7d\u548c\u6d41\u5904\u7406\u4f18\u5316"}),"\n",(0,i.jsx)(n.p,{children:"\u4e3a\u4e86\u907f\u514d\u66b4\u9732OSS\u6587\u4ef6\u7684URL\u5e76\u4f18\u5316\u6027\u80fd\uff0c\u8fd9\u91cc\u5bf9\u6587\u4ef6\u4e0b\u8f7d\u90e8\u5206\u8fdb\u884c\u4e86\u6539\u8fdb\u3002\u901a\u8fc7\u4f7f\u7528\u5e76\u53d1\u6279\u91cf\u4e0b\u8f7d\u6587\u4ef6\uff0c\u51cf\u5c11\u4e0eOSS\u670d\u52a1\u5668\u7684\u8fde\u63a5\u6b21\u6570\u3002\u4e0b\u8f7d\u65f6\uff0c\u6587\u4ef6\u5185\u5bb9\u5c06\u8f6c\u6362\u4e3aBase64\u7f16\u7801\u540e\u8fd4\u56de\u524d\u7aef\uff0c\u524d\u7aef\u53ef\u4ee5\u89e3\u7801\u5e76\u5c55\u793a\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u4f18\u5316\u540e\u7684\u6587\u4ef6\u4e0b\u8f7d\u5b9e\u73b0\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'package com.gccloud.dataroom.core.utils;\n\nimport com.gccloud.dataroom.core.module.file.entity.DataRoomFileEntity;\nimport com.gccloud.dataroom.core.module.file.service.IDataRoomOssService;\nimport com.google.common.collect.Lists;\nimport lombok.extern.slf4j.Slf4j;\nimport org.apache.commons.lang3.StringUtils;\n\nimport java.io.*;\nimport java.net.URL;\nimport java.util.ArrayList;\nimport java.util.List;\nimport java.util.concurrent.*;\n\n/**\n * \u6279\u91cf\u6587\u4ef6\u4e0b\u8f7d\u5668\n */\n@Slf4j\npublic class FileDownloader {\n\n    private static final int THREAD_POOL_SIZE = 10;  // \u8bbe\u7f6e\u7ebf\u7a0b\u6c60\u5927\u5c0f\n\n    /**\n     * \u6279\u91cf\u4e0b\u8f7d\u6587\u4ef6\uff0c\u963b\u585e\u65b9\u5f0f\n     * @param ossFileService OSS\u6587\u4ef6\u670d\u52a1\u5bf9\u8c61\n     * @param fileEntities \u6587\u4ef6\u5b9e\u4f53\u5217\u8868\n     * @return \u5305\u542b\u6587\u4ef6\u5185\u5bb9\u7684\u5b57\u8282\u6570\u7ec4\u5217\u8868\n     */\n    public static List<byte[]> downloadFileInParallel(IDataRoomOssService ossFileService, List<DataRoomFileEntity> fileEntities) {\n        ExecutorService executorService = Executors.newFixedThreadPool(THREAD_POOL_SIZE);\n        List<Future<byte[]>> futures = new ArrayList<>();\n\n        // \u63d0\u4ea4\u4efb\u52a1\u5230\u7ebf\u7a0b\u6c60\n        for (DataRoomFileEntity fileEntity : fileEntities) {\n            futures.add(executorService.submit(() -> downloadFile(ossFileService, fileEntity)));\n        }\n\n        // \u7b49\u5f85\u6240\u6709\u4efb\u52a1\u5b8c\u6210\u5e76\u6536\u96c6\u6587\u4ef6\u5185\u5bb9\n        List<byte[]> fileContents = new ArrayList<>();\n        for (Future<byte[]> future : futures) {\n            try {\n                fileContents.add(future.get());  // \u963b\u585e\uff0c\u7b49\u5f85\u6587\u4ef6\u4e0b\u8f7d\u5b8c\u6210\n            } catch (InterruptedException | ExecutionException e) {\n                log.error("\u4e0b\u8f7d\u6587\u4ef6\u5931\u8d25", e);\n                fileContents.add(new byte[0]);  // \u5982\u679c\u4e0b\u8f7d\u5931\u8d25\uff0c\u8fd4\u56de\u7a7a\u5b57\u8282\u6570\u7ec4\n            }\n        }\n\n        executorService.shutdown();\n        return fileContents;\n    }\n\n    /**\n     * \u4e0b\u8f7d\u5355\u4e2a\u6587\u4ef6\n     * @param ossFileService OSS\u6587\u4ef6\u670d\u52a1\u5bf9\u8c61\n     * @param fileEntity \u6587\u4ef6\u5b9e\u4f53\n     * @return \u6587\u4ef6\u5185\u5bb9\u7684\u5b57\u8282\u6570\u7ec4\n     */\n    public static byte[] downloadFile(IDataRoomOssService ossFileService, DataRoomFileEntity fileEntity) {\n        String fileUrl = fileEntity.getUrl();\n        if (StringUtils.isBlank(fileUrl) || !ossFileService.isUrlAccessible(fileUrl)) {\n            fileUrl = ossFileService.setOssFilePublicReadWithExpiry(fileEntity.getPath(), 3600);\n        }\n\n        try (InputStream inputStream = new URL(fileUrl).openStream();\n             ByteArrayOutputStream outputStream = new ByteArrayOutputStream()) {\n\n            byte[] buffer = new byte[8192];\n            int bytesRead;\n            while ((bytesRead = inputStream.read(buffer)) != -1) {\n                outputStream.write(buffer, 0, bytesRead);\n            }\n\n            return outputStream.toByteArray();\n        } catch (IOException e) {\n            log.error("\u6587\u4ef6\u4e0b\u8f7d\u5931\u8d25: {}", fileUrl, e);\n            return new byte[0];  // \u4e0b\u8f7d\u5931\u8d25\u65f6\u8fd4\u56de\u7a7a\u5b57\u8282\u6570\u7ec4\n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"24-\u7ebf\u7a0b\u6c60\u5de5\u5177\u7c7b",children:"2.4 \u7ebf\u7a0b\u6c60\u5de5\u5177\u7c7b"}),"\n",(0,i.jsx)(n.p,{children:"\u4e3a\u63d0\u9ad8\u7cfb\u7edf\u6027\u80fd\uff0c\u5c24\u5176\u662f\u5728\u5904\u7406\u6587\u4ef6\u4e0a\u4f20\u3001\u4e0b\u8f7d\u3001\u590d\u5236\u7b49\u5927\u91cfIO\u5bc6\u96c6\u578b\u64cd\u4f5c\u65f6\uff0c\u5408\u7406\u5730\u4f7f\u7528\u7ebf\u7a0b\u6c60\u80fd\u591f\u6709\u6548\u51cf\u5c11\u7cfb\u7edf\u7684\u963b\u585e\u65f6\u95f4\u548c\u54cd\u5e94\u65f6\u95f4\u3002\u4ee5\u4e0b\u662f\u7ebf\u7a0b\u6c60\u5de5\u5177\u7c7b\u7684\u5b9e\u73b0\uff0c\u63d0\u4f9b\u4e86\u521b\u5efa\u548c\u7ba1\u7406\u7ebf\u7a0b\u6c60\u7684\u529f\u80fd\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'package com.gccloud.dataroom.core.utils;\n\nimport lombok.extern.slf4j.Slf4j;\nimport org.jetbrains.annotations.NotNull;\n\nimport java.util.concurrent.*;\nimport java.util.concurrent.atomic.AtomicInteger;\n\n/**\n * \u7ebf\u7a0b\u6c60\u5de5\u5177\u7c7b\n */\n@Slf4j\npublic class ThreadPoolUtils {\n\n    // \u8ba1\u7b97\u673a\u6838\u5fc3\u6570\uff0c\u8bbe\u7f6e\u7ebf\u7a0b\u6c60\u7684\u9ed8\u8ba4\u53c2\u6570\n    public static final int POOL_SIZE = Runtime.getRuntime().availableProcessors() + 2;\n    public static final int POOL_SIZE_MAX = (Runtime.getRuntime().availableProcessors() + 2) * 2;\n    private static final int AWAIT_TERMINATION_TIMEOUT = 10;  // \u7b49\u5f85\u7ebf\u7a0b\u6c60\u5173\u95ed\u7684\u6700\u5927\u65f6\u95f4\uff08\u79d2\uff09\n\n    /**\n     * \u83b7\u53d6\u9ed8\u8ba4\u7ebf\u7a0b\u6c60\uff08\u6838\u5fc3\u7ebf\u7a0b\u65708\uff0c\u6700\u5927\u7ebf\u7a0b\u657016\uff09\n     */\n    public static ThreadPoolExecutor getDefaultThreadPoolExecutor() {\n        return createThreadPoolExecutor(8, 16, 1000L, TimeUnit.MILLISECONDS);\n    }\n\n    /**\n     * \u83b7\u53d6\u7ebf\u7a0b\u6c60\u5b9e\u4f8b\uff0c\u5141\u8bb8\u81ea\u5b9a\u4e49\u6838\u5fc3\u7ebf\u7a0b\n\n\u6570\u548c\u6700\u5927\u7ebf\u7a0b\u6570\n     * @param corePoolSize \u6838\u5fc3\u7ebf\u7a0b\u6570\n     * @param maximumPoolSize \u6700\u5927\u7ebf\u7a0b\u6570\n     * @param keepAliveTime \u7ebf\u7a0b\u7a7a\u95f2\u5b58\u6d3b\u65f6\u95f4\n     * @param unit \u65f6\u95f4\u5355\u4f4d\n     * @return ThreadPoolExecutor \u7ebf\u7a0b\u6c60\n     */\n    public static ThreadPoolExecutor createThreadPoolExecutor(\n            int corePoolSize, int maximumPoolSize, long keepAliveTime, TimeUnit unit) {\n\n        ThreadFactory threadFactory = new ThreadFactory() {\n            private final AtomicInteger threadNumber = new AtomicInteger(1);\n            private final String namePrefix = "pool-thread-";\n            private final ThreadGroup group = Thread.currentThread().getThreadGroup();\n\n            @Override\n            public Thread newThread(@NotNull Runnable r) {\n                Thread thread = new Thread(group, r, namePrefix + threadNumber.getAndIncrement(), 0);\n                thread.setDaemon(false);  // \u8bbe\u7f6e\u4e3a\u975e\u5b88\u62a4\u7ebf\u7a0b\n                return thread;\n            }\n        };\n\n        return new ThreadPoolExecutor(corePoolSize, maximumPoolSize, keepAliveTime, unit,\n                new LinkedBlockingQueue<>(), threadFactory, new ThreadPoolExecutor.CallerRunsPolicy());\n    }\n\n    /**\n     * \u521b\u5efa\u81ea\u9002\u5e94\u7ebf\u7a0b\u6c60\uff0c\u6838\u5fc3\u7ebf\u7a0b\u6570 = CPU \u6838\u5fc3\u6570 + 2\uff0c\u6700\u5927\u7ebf\u7a0b\u6570 = \u6838\u5fc3\u7ebf\u7a0b\u6570 * 2\n     */\n    public static ThreadPoolExecutor createFitThreadPoolExecutor() {\n        return createThreadPoolExecutor(POOL_SIZE, POOL_SIZE_MAX, 1000L, TimeUnit.MILLISECONDS);\n    }\n\n    /**\n     * \u521d\u59cb\u5316\u7ebf\u7a0b\u6c60\uff0c\u63d0\u4f9b\u540d\u79f0\u683c\u5f0f\u81ea\u5b9a\u4e49\n     * @param nameFormat \u7ebf\u7a0b\u540d\u79f0\u683c\u5f0f\n     * @return \u7ebf\u7a0b\u6c60\u5b9e\u4f8b\n     */\n    public static ExecutorService initPool(String nameFormat) {\n        ThreadFactory threadFactory = new ThreadFactory() {\n            private final AtomicInteger threadNumber = new AtomicInteger(1);\n            private final String namePrefix = nameFormat;\n\n            @Override\n            public Thread newThread(@NotNull Runnable r) {\n                Thread thread = new Thread(r, namePrefix + threadNumber.getAndIncrement());\n                thread.setDaemon(false);  // \u8bbe\u7f6e\u4e3a\u975e\u5b88\u62a4\u7ebf\u7a0b\n                return thread;\n            }\n        };\n\n        return new ThreadPoolExecutor(POOL_SIZE, POOL_SIZE, 0L, TimeUnit.MILLISECONDS,\n                new LinkedBlockingQueue<>(Integer.MAX_VALUE), threadFactory, new ThreadPoolExecutor.CallerRunsPolicy());\n    }\n\n    /**\n     * \u4f18\u96c5\u5173\u95ed\u7ebf\u7a0b\u6c60\n     * @param pool \u7ebf\u7a0b\u6c60\u5b9e\u4f8b\n     */\n    public static void shutdownPool(ExecutorService pool) {\n        try {\n            pool.shutdown(); // \u542f\u52a8\u5173\u95ed\n            if (!pool.awaitTermination(AWAIT_TERMINATION_TIMEOUT, TimeUnit.SECONDS)) {\n                log.warn("\u7ebf\u7a0b\u6c60\u5173\u95ed\u8d85\u65f6\uff0c\u5f3a\u5236\u5173\u95ed");\n                pool.shutdownNow(); // \u5f3a\u5236\u5173\u95ed\n            }\n            log.info("\u7ebf\u7a0b\u6c60\u6210\u529f\u5173\u95ed");\n        } catch (InterruptedException e) {\n            log.error("\u7ebf\u7a0b\u6c60\u5173\u95ed\u4e2d\u65ad: {}", e.getMessage());\n            pool.shutdownNow(); // \u5982\u679c\u7b49\u5f85\u4e2d\u65ad\u5219\u5f3a\u5236\u5173\u95ed\u7ebf\u7a0b\u6c60\n        }\n    }\n\n    /**\n     * \u83b7\u53d6\u7ebf\u7a0b\u6c60\u7684\u76d1\u63a7\u4fe1\u606f\n     * @param executor \u7ebf\u7a0b\u6c60\u5b9e\u4f8b\n     * @return \u7ebf\u7a0b\u6c60\u7684\u76d1\u63a7\u4fe1\u606f\n     */\n    public static String getThreadPoolStats(ThreadPoolExecutor executor) {\n        StringBuilder stats = new StringBuilder();\n        stats.append("\u7ebf\u7a0b\u6c60\u72b6\u6001\uff1a\\n")\n                .append("\u6838\u5fc3\u7ebf\u7a0b\u6570: ").append(executor.getCorePoolSize()).append("\\n")\n                .append("\u6700\u5927\u7ebf\u7a0b\u6570: ").append(executor.getMaximumPoolSize()).append("\\n")\n                .append("\u6d3b\u8dc3\u7ebf\u7a0b\u6570: ").append(executor.getActiveCount()).append("\\n")\n                .append("\u5f53\u524d\u7ebf\u7a0b\u6570: ").append(executor.getPoolSize()).append("\\n")\n                .append("\u5df2\u5b8c\u6210\u4efb\u52a1\u6570: ").append(executor.getCompletedTaskCount()).append("\\n")\n                .append("\u5f53\u524d\u6392\u961f\u4efb\u52a1\u6570: ").append(executor.getQueue().size()).append("\\n");\n        return stats.toString();\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"3-\u603b\u7ed3",children:"3. \u603b\u7ed3"}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u4e0a\u5185\u5bb9\u6db5\u76d6\u4e86\u5728BI\u5e73\u53f0\u4e2d\u96c6\u6210OSS\u670d\u52a1\u7684\u76f8\u5173\u529f\u80fd\uff0c\u5305\u62ec\u6587\u4ef6\u4e0a\u4f20\u3001\u4e0b\u8f7d\u3001\u5220\u9664\u3001\u590d\u5236\u4ee5\u53ca\u4f7f\u7528\u7ebf\u7a0b\u6c60\u4f18\u5316\u5e76\u53d1\u64cd\u4f5c\u7684\u5b9e\u73b0\u3002\u901a\u8fc7\u5408\u7406\u914d\u7f6e\u7ebf\u7a0b\u6c60\u548cOSS\u53c2\u6570\uff0c\u60a8\u53ef\u4ee5\u6709\u6548\u63d0\u9ad8\u7cfb\u7edf\u7684\u541e\u5410\u91cf\u5e76\u964d\u4f4e\u6587\u4ef6\u64cd\u4f5c\u7684\u5ef6\u8fdf\u3002"})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(96540);const i={},a=r.createContext(i);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:n},e.children)}},41852:e=>{e.exports=JSON.parse('{"permalink":"/blog/product-docs-oss-integration","editUrl":"https://github.com/Jachen99/Jachen99.github.io/tree/V3.0.0/blog/2024/12-04-BI\u53ef\u89c6\u5316\u5e73\u53f0\u96c6\u6210OSS.md","source":"@site/blog/2024/12-04-BI\u53ef\u89c6\u5316\u5e73\u53f0\u96c6\u6210OSS.md","title":"BI\u53ef\u89c6\u5316\u5e73\u53f0\u96c6\u6210OSS","description":"BI\u53ef\u89c6\u5316\u5e73\u53f0\u96c6\u6210OSS","date":"2024-12-04T00:00:00.000Z","tags":[{"inline":true,"label":"oss","permalink":"/blog/tags/oss"}],"readingTime":9.89,"hasTruncateMarker":false,"authors":[{"name":"\u5b63\u51a0\u81e3","title":"\u540e\u7aef\u7814\u53d1\u5de5\u7a0b\u5e08","url":"https://github.com/jachen99","page":{"permalink":"/blog/authors/jiguanchen"},"socials":{"github":"https://github.com/jachen99"},"imageURL":"https://github.com/jachen99.png","key":"jiguanchen"}],"frontMatter":{"slug":"product-docs-oss-integration","title":"BI\u53ef\u89c6\u5316\u5e73\u53f0\u96c6\u6210OSS","authors":["jiguanchen"],"tags":["oss"]},"unlisted":false,"nextItem":{"title":"\u4f7f\u7528Java8\u65b0\u7279\u6027\u6784\u5efa\u6811\u5f62\u7ed3\u6784\uff1a\u7075\u6d3b\u7684\u7236\u5b50\u8282\u70b9\u5173\u7cfb\u5904\u7406","permalink":"/blog/product-tree-structure-construction"}}')}}]);