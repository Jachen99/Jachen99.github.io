---
slug: http-content-type
title: HTTP的content-type媒体类型
authors: [jiguanchen]
---

*介绍了Http里面的content-type媒体类型* <!--more-->

```http
Content-type: 用来指定不同格式的请求响应信息，俗称MIME媒体类型常见的取值

text/html ：HTML格式 text/plain ：纯文本格式 

text/xml ： XML格式

image/gif ：gif图片格式 image/jpeg ：jpg图片格式 image/png：png图片格式

application/json：JSON数据格式 application/pdf ：pdf格式 
application/octet-stream ：二进制流数据，一般是文件下载

application/x-www-form-urlencoded：form表单默认的提交数据的格式，会编码成key=value格式

multipart/form-data： 表单中需要上传文件的文件格式类型
```

Http知识加深文档：https://developer.mozilla.org/zh-CN/docs/Web/HTTP

