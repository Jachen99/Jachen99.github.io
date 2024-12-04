"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[5373],{21428:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>o});var s=r(26665),i=r(74848),t=r(28453);const d={slug:"product-design-and-optimization",title:"Redis\u6d88\u606f\u961f\u5217\u6d88\u8d39\u8005\u7aef\u65ad\u8fde\u91cd\u8bd5\u673a\u5236\u5b9e\u73b0",authors:["jiguanchen"],tags:["redis"]},c=void 0,l={authorsImageUrls:[void 0]},o=[{value:"Redis\u6d88\u606f\u961f\u5217\u6d88\u8d39\u8005\u7aef\u65ad\u8fde\u91cd\u8bd5\u673a\u5236\u5b9e\u73b0",id:"redis\u6d88\u606f\u961f\u5217\u6d88\u8d39\u8005\u7aef\u65ad\u8fde\u91cd\u8bd5\u673a\u5236\u5b9e\u73b0",level:3},{value:"1. \u95ee\u9898\u63cf\u8ff0",id:"1-\u95ee\u9898\u63cf\u8ff0",level:2},{value:"2. \u89e3\u51b3\u65b9\u6848",id:"2-\u89e3\u51b3\u65b9\u6848",level:2},{value:"2.1 \u6d88\u8d39\u8005\u7c7b\u7684\u91cd\u8bd5\u673a\u5236\u8bbe\u8ba1",id:"21-\u6d88\u8d39\u8005\u7c7b\u7684\u91cd\u8bd5\u673a\u5236\u8bbe\u8ba1",level:3},{value:"\u5173\u952e\u4ee3\u7801\u5b9e\u73b0\uff1a",id:"\u5173\u952e\u4ee3\u7801\u5b9e\u73b0",level:4},{value:"2.2 \u6d88\u8d39\u8005\u7c7b\u7684\u91cd\u8fde\u65b9\u6cd5",id:"22-\u6d88\u8d39\u8005\u7c7b\u7684\u91cd\u8fde\u65b9\u6cd5",level:3},{value:"\u5173\u952e\u4ee3\u7801\u5b9e\u73b0\uff1a",id:"\u5173\u952e\u4ee3\u7801\u5b9e\u73b0-1",level:4},{value:"2.3 \u7ebf\u7a0b\u6c60\u548c\u91cd\u8bd5\u673a\u5236\u7684\u542f\u52a8",id:"23-\u7ebf\u7a0b\u6c60\u548c\u91cd\u8bd5\u673a\u5236\u7684\u542f\u52a8",level:3},{value:"2.4 \u91cd\u8bd5\u673a\u5236\u7684\u68c0\u67e5\u548c\u5ef6\u8fdf",id:"24-\u91cd\u8bd5\u673a\u5236\u7684\u68c0\u67e5\u548c\u5ef6\u8fdf",level:3},{value:"3. \u6280\u672f\u65b9\u6848\u5bf9\u6bd4\uff1a<code>static AtomicBoolean</code>\u4e0e\u66ff\u4ee3\u65b9\u6848",id:"3-\u6280\u672f\u65b9\u6848\u5bf9\u6bd4static-atomicboolean\u4e0e\u66ff\u4ee3\u65b9\u6848",level:2},{value:"\u6280\u672f\u5bf9\u6bd4\u65b9\u6848",id:"\u6280\u672f\u5bf9\u6bd4\u65b9\u6848",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"redis\u6d88\u606f\u961f\u5217\u6d88\u8d39\u8005\u7aef\u65ad\u8fde\u91cd\u8bd5\u673a\u5236\u5b9e\u73b0",children:"Redis\u6d88\u606f\u961f\u5217\u6d88\u8d39\u8005\u7aef\u65ad\u8fde\u91cd\u8bd5\u673a\u5236\u5b9e\u73b0"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\uff0cRedis\u4f5c\u4e3a\u6d88\u606f\u961f\u5217\u4f7f\u7528\u65f6\uff0c\u7ecf\u5e38\u4f1a\u9762\u4e34\u8fde\u63a5\u4e2d\u65ad\u7684\u98ce\u9669\uff0c\u8fd9\u53ef\u80fd\u7531\u4e8e\u7f51\u7edc\u6ce2\u52a8\u3001Redis\u670d\u52a1\u5d29\u6e83\u6216\u5176\u4ed6\u5916\u90e8\u56e0\u7d20\u5bfc\u81f4\u3002\u4e3a\u4e86\u4fdd\u8bc1\u7cfb\u7edf\u7684\u9ad8\u53ef\u7528\u6027\u548c\u6d88\u606f\u7684\u53ef\u9760\u6027\uff0c\u6211\u4eec\u9700\u8981\u5b9e\u73b0\u4e00\u4e2a\u81ea\u52a8\u91cd\u8bd5\u673a\u5236\uff0c\u5728Redis\u8fde\u63a5\u65ad\u5f00\u65f6\u80fd\u591f\u81ea\u52a8\u91cd\u8fde\uff0c\u5e76\u4fdd\u8bc1\u6d88\u606f\u7684\u6d88\u8d39\u4e0d\u4e2d\u65ad\u6216\u4e22\u5931\u3002\u672c\u6587\u5c06\u91cd\u70b9\u4ecb\u7ecd\u5982\u4f55\u5728Redis\u961f\u5217\u7684\u6d88\u8d39\u8005\u7aef\u5b9e\u73b0\u8fde\u63a5\u65ad\u5f00\u540e\u7684\u91cd\u8fde\u673a\u5236\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"1-\u95ee\u9898\u63cf\u8ff0",children:"1. \u95ee\u9898\u63cf\u8ff0"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u6211\u4eec\u7684\u67b6\u6784\u4e2d\uff0c\u6d88\u8d39\u8005\u4eceRedis\u961f\u5217\u4e2d\u62c9\u53d6\u5e76\u5904\u7406\u6d88\u606f\uff0c\u901a\u5e38\u4f7f\u7528",(0,i.jsx)(n.code,{children:"Jedis"}),"\u4f5c\u4e3a\u5ba2\u6237\u7aef\u4e0eRedis\u4ea4\u4e92\u3002\u7136\u800c\uff0c\u5728\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u7531\u4e8e\u7f51\u7edc\u5ef6\u8fdf\u3001Redis\u670d\u52a1\u91cd\u542f\u6216Redis\u8fde\u63a5\u6c60\u88ab\u8017\u5c3d\u7b49\u539f\u56e0\uff0cRedis\u8fde\u63a5\u53ef\u80fd\u4f1a\u51fa\u73b0\u65ad\u5f00\u3002\u5f53\u8fde\u63a5\u65ad\u5f00\u65f6\uff0c\u6d88\u8d39\u8005\u65e0\u6cd5\u7ee7\u7eed\u62c9\u53d6\u6d88\u606f\uff0c\u5bfc\u81f4\u6d88\u606f\u5904\u7406\u4e2d\u65ad\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u9700\u8981\u8bbe\u8ba1\u4e00\u4e2a\u91cd\u8fde\u673a\u5236\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u81ea\u52a8\u68c0\u6d4b\u8fde\u63a5\u72b6\u6001"}),"\uff1a\u5f53\u6d88\u8d39\u8005\u68c0\u6d4b\u5230\u8fde\u63a5\u65ad\u5f00\u65f6\uff0c\u80fd\u591f\u81ea\u52a8\u91cd\u8bd5\u5e76\u6062\u590d\u8fde\u63a5\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u4fdd\u8bc1\u6d88\u606f\u4e0d\u4e22\u5931"}),"\uff1a\u5728\u91cd\u8fde\u671f\u95f4\uff0c\u5982\u679cRedis\u670d\u52a1\u6062\u590d\uff0c\u6d88\u606f\u80fd\u591f\u7ee7\u7eed\u88ab\u6d88\u8d39\uff0c\u4e0d\u4f1a\u4e22\u5931\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"2-\u89e3\u51b3\u65b9\u6848",children:"2. \u89e3\u51b3\u65b9\u6848"}),"\n",(0,i.jsx)(n.h3,{id:"21-\u6d88\u8d39\u8005\u7c7b\u7684\u91cd\u8bd5\u673a\u5236\u8bbe\u8ba1",children:"2.1 \u6d88\u8d39\u8005\u7c7b\u7684\u91cd\u8bd5\u673a\u5236\u8bbe\u8ba1"}),"\n",(0,i.jsxs)(n.p,{children:["\u6d88\u8d39\u8005\u7c7b\u901a\u8fc7\u5b9a\u65f6\u68c0\u67e5\u8fde\u63a5\u72b6\u6001\uff0c\u5e76\u5728Redis\u8fde\u63a5\u51fa\u73b0\u95ee\u9898\u65f6\u5c1d\u8bd5\u91cd\u8fde\u3002\u6211\u4eec\u901a\u8fc7\u5f15\u5165\u4e00\u4e2a\u6807\u5fd7\u4f4d",(0,i.jsx)(n.code,{children:"isDown"}),"\u6765\u8868\u793a\u5f53\u524d\u6d88\u8d39\u8005\u662f\u5426\u5904\u4e8e\u65ad\u7ebf\u72b6\u6001\u3002\u5728\u8fde\u63a5\u6062\u590d\u540e\uff0c\u6d88\u8d39\u8005\u80fd\u591f\u81ea\u52a8\u6062\u590d\u6d88\u606f\u6d88\u8d39\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u5173\u952e\u4ee3\u7801\u5b9e\u73b0",children:"\u5173\u952e\u4ee3\u7801\u5b9e\u73b0\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'package com.example.redisQueue.consumer;\r\n\r\nimport lombok.extern.slf4j.Slf4j;\r\nimport org.springframework.beans.factory.annotation.Autowired;\r\nimport org.springframework.stereotype.Component;\r\n\r\nimport java.util.concurrent.Executors;\r\nimport java.util.concurrent.atomic.AtomicBoolean;\r\n\r\n/**\r\n * Redis\u6d88\u606f\u961f\u5217\u6d88\u8d39\u8005\u65ad\u8fde\u91cd\u8bd5\u673a\u5236\u5b9e\u73b0\r\n */\r\n@Slf4j\r\n@Component\r\npublic class RedisQueueConsumerListenerRunner implements Runnable {\r\n\r\n    @Autowired\r\n    private MyAbstractRedisQueueConsumer<?> consumer;\r\n\r\n    /**\r\n     * \u662f\u5426\u5b95\u673a\u6807\u5fd7\r\n     * \u901a\u8fc7static\u4fdd\u8bc1\u5168\u5c40\u5171\u4eab\u8be5\u6807\u5fd7\r\n     */\r\n    public static AtomicBoolean isDown = new AtomicBoolean(false);\r\n\r\n    @Override\r\n    public void run() {\r\n        log.info("\u6d88\u8d39\u8005\u542f\u52a8\uff0c\u5f00\u59cb\u76d1\u542cRedis\u961f\u5217...");\r\n\r\n        // \u542f\u52a8\u6d88\u606f\u6d88\u8d39\u7ebf\u7a0b\r\n        Executors.newSingleThreadExecutor().submit(() -> {\r\n            try {\r\n                consumer.consume();\r\n            } catch (Exception e) {\r\n                log.error("\u6d88\u8d39\u8fc7\u7a0b\u4e2d\u53d1\u751f\u5f02\u5e38", e);\r\n                isDown.set(true); // \u8bbe\u7f6e\u65ad\u5f00\u6807\u5fd7\r\n            }\r\n        });\r\n\r\n        // \u542f\u52a8\u65ad\u7ebf\u91cd\u8bd5\u673a\u5236\r\n        startRetryMechanism();\r\n    }\r\n\r\n    /**\r\n     * \u542f\u52a8\u65ad\u8fde\u91cd\u8bd5\u673a\u5236\r\n     */\r\n    public void startRetryMechanism() {\r\n        new Thread(() -> {\r\n            while (true) {\r\n                try {\r\n                    Thread.sleep(30 * 1000L);  // \u6bcf30\u79d2\u68c0\u67e5\u4e00\u6b21\u8fde\u63a5\u72b6\u6001\r\n\r\n                    if (isDown.get()) {\r\n                        log.warn("Redis\u8fde\u63a5\u65ad\u5f00\uff0c\u6b63\u5728\u5c1d\u8bd5\u91cd\u8fde...");\r\n                        Thread.sleep(3000L);  // \u5ef6\u8fdf3\u79d2\u540e\u91cd\u8bd5\r\n\r\n                        // \u6267\u884c\u91cd\u8fde\u64cd\u4f5c\r\n                        consumer.reconnect();\r\n                        isDown.set(false);\r\n                        log.info("Redis\u8fde\u63a5\u6062\u590d\uff0c\u91cd\u8bd5\u6210\u529f");\r\n                    }\r\n                } catch (InterruptedException e) {\r\n                    log.error("\u91cd\u8bd5\u7ebf\u7a0b\u88ab\u4e2d\u65ad", e);\r\n                    Thread.currentThread().interrupt();\r\n                }\r\n            }\r\n        }).start();\r\n    }\r\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"22-\u6d88\u8d39\u8005\u7c7b\u7684\u91cd\u8fde\u65b9\u6cd5",children:"2.2 \u6d88\u8d39\u8005\u7c7b\u7684\u91cd\u8fde\u65b9\u6cd5"}),"\n",(0,i.jsxs)(n.p,{children:["\u6d88\u8d39\u8005\u7c7b\u9700\u8981\u63d0\u4f9b\u4e00\u4e2a",(0,i.jsx)(n.code,{children:"reconnect"}),"\u65b9\u6cd5\uff0c\u7528\u4e8e\u5728\u8fde\u63a5\u65ad\u5f00\u65f6\u91cd\u65b0\u521d\u59cb\u5316\u8fde\u63a5\uff0c\u6062\u590d\u6d88\u8d39\u4efb\u52a1\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u5173\u952e\u4ee3\u7801\u5b9e\u73b0-1",children:"\u5173\u952e\u4ee3\u7801\u5b9e\u73b0\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'package com.example.redisQueue.consumer;\r\n\r\nimport redis.clients.jedis.Jedis;\r\nimport redis.clients.jedis.JedisPool;\r\nimport org.slf4j.Logger;\r\nimport org.slf4j.LoggerFactory;\r\n\r\n/**\r\n * Redis\u6d88\u606f\u961f\u5217\u6d88\u8d39\u8005\u57fa\u7c7b\r\n */\r\npublic abstract class MyAbstractRedisQueueConsumer<T> {\r\n    private Logger logger = LoggerFactory.getLogger(this.getClass());\r\n\r\n    @Autowired\r\n    private JedisPool jedisPool;\r\n\r\n    private String queueName;\r\n\r\n    public MyAbstractRedisQueueConsumer(String queueName) {\r\n        this.queueName = queueName;\r\n    }\r\n\r\n    /**\r\n     * \u91cd\u8fde\u65b9\u6cd5\r\n     * \u7528\u4e8e\u8fde\u63a5\u65ad\u5f00\u540e\u6062\u590d\u8fde\u63a5\r\n     */\r\n    public void reconnect() {\r\n        try (Jedis jedis = jedisPool.getResource()) {\r\n            if (jedis.isConnected()) {\r\n                logger.info("Redis\u8fde\u63a5\u5df2\u6062\u590d\uff0c\u6d88\u8d39\u8005\u5df2\u91cd\u65b0\u8fde\u63a5\u5230\u961f\u5217");\r\n            } else {\r\n                logger.error("\u65e0\u6cd5\u6062\u590dRedis\u8fde\u63a5\uff0c\u6b63\u5728\u5c1d\u8bd5\u91cd\u65b0\u521d\u59cb\u5316");\r\n                // \u8fd9\u91cc\u53ef\u4ee5\u8fdb\u4e00\u6b65\u589e\u52a0\u5bf9Redis\u8fde\u63a5\u6c60\u6216Jedis\u7684\u91cd\u521d\u59cb\u5316\u903b\u8f91\r\n            }\r\n        } catch (Exception e) {\r\n            logger.error("Redis\u91cd\u8fde\u5931\u8d25", e);\r\n        }\r\n    }\r\n\r\n    /**\r\n     * \u6d88\u8d39\u6d88\u606f\u7684\u62bd\u8c61\u65b9\u6cd5\r\n     */\r\n    public abstract void doConsume(T message);\r\n\r\n    /**\r\n     * \u6d88\u8d39\u6d88\u606f\r\n     */\r\n    public void consume() throws Exception {\r\n        try (Jedis jedis = jedisPool.getResource()) {\r\n            while (true) {\r\n                // \u4eceRedis\u961f\u5217\u4e2d\u62c9\u53d6\u6d88\u606f\r\n                List<String> message = jedis.blpop(0, queueName);\r\n                if (message != null && message.size() > 1) {\r\n                    doConsume(message.get(1));  // \u5904\u7406\u6d88\u606f\r\n                }\r\n            }\r\n        } catch (Exception e) {\r\n            logger.error("\u6d88\u8d39\u8fc7\u7a0b\u4e2d\u53d1\u751f\u5f02\u5e38", e);\r\n            throw e;\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"23-\u7ebf\u7a0b\u6c60\u548c\u91cd\u8bd5\u673a\u5236\u7684\u542f\u52a8",children:"2.3 \u7ebf\u7a0b\u6c60\u548c\u91cd\u8bd5\u673a\u5236\u7684\u542f\u52a8"}),"\n",(0,i.jsxs)(n.p,{children:["\u901a\u8fc7",(0,i.jsx)(n.code,{children:"Executors.newSingleThreadExecutor()"}),"\u6211\u4eec\u4e3a\u6d88\u8d39\u8005\u542f\u52a8\u4e86\u72ec\u7acb\u7684\u7ebf\u7a0b\u6765\u6d88\u8d39\u6d88\u606f\uff0c\u5e76\u5728\u6d88\u8d39\u8005\u68c0\u6d4b\u5230\u8fde\u63a5\u65ad\u5f00\u65f6\u542f\u52a8\u91cd\u8bd5\u673a\u5236\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'Executors.newSingleThreadExecutor().submit(() -> {\r\n    try {\r\n        consumer.consume();  // \u542f\u52a8\u6d88\u8d39\r\n    } catch (Exception e) {\r\n        log.error("\u6d88\u8d39\u8fc7\u7a0b\u4e2d\u53d1\u751f\u5f02\u5e38", e);\r\n        isDown.set(true);  // \u8bbe\u7f6e\u65ad\u5f00\u6807\u5fd7\r\n    }\r\n});\n'})}),"\n",(0,i.jsx)(n.h3,{id:"24-\u91cd\u8bd5\u673a\u5236\u7684\u68c0\u67e5\u548c\u5ef6\u8fdf",children:"2.4 \u91cd\u8bd5\u673a\u5236\u7684\u68c0\u67e5\u548c\u5ef6\u8fdf"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u91cd\u8bd5\u673a\u5236\u4e2d\uff0c\u6211\u4eec\u6bcf30\u79d2\u68c0\u67e5\u4e00\u6b21",(0,i.jsx)(n.code,{children:"isDown"}),"\u6807\u5fd7\uff0c\u5982\u679c\u53d1\u73b0\u8fde\u63a5\u5df2\u7ecf\u65ad\u5f00\uff0c\u5c31\u5ef6\u8fdf3\u79d2\u540e\u5c1d\u8bd5\u91cd\u65b0\u8fde\u63a5\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'if (isDown.get()) {\r\n    log.warn("Redis\u8fde\u63a5\u65ad\u5f00\uff0c\u6b63\u5728\u5c1d\u8bd5\u91cd\u8fde...");\r\n    Thread.sleep(3000L);  // \u5ef6\u8fdf3\u79d2\u540e\u91cd\u8bd5\r\n    consumer.reconnect();  // \u6267\u884c\u91cd\u8fde\u64cd\u4f5c\r\n    isDown.set(false);     // \u91cd\u8fde\u540e\u6e05\u9664\u65ad\u5f00\u6807\u5fd7\r\n    log.info("Redis\u8fde\u63a5\u6062\u590d\uff0c\u91cd\u8bd5\u6210\u529f");\r\n}\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"3-\u6280\u672f\u65b9\u6848\u5bf9\u6bd4static-atomicboolean\u4e0e\u66ff\u4ee3\u65b9\u6848",children:["3. \u6280\u672f\u65b9\u6848\u5bf9\u6bd4\uff1a",(0,i.jsx)(n.code,{children:"static AtomicBoolean"}),"\u4e0e\u66ff\u4ee3\u65b9\u6848"]}),"\n",(0,i.jsxs)(n.p,{children:["\u867d\u7136",(0,i.jsx)(n.code,{children:"AtomicBoolean"}),"\u662f\u4e00\u79cd\u7b80\u5355\u4e14\u6709\u6548\u7684\u5b9e\u73b0\u65b9\u5f0f\uff0c\u4f46\u6211\u4eec\u4e5f\u53ef\u4ee5\u8003\u8651\u5176\u4ed6\u65b9\u6848\uff0c\u4ee5\u4e0b\u662f\u51e0\u79cd\u5e38\u89c1\u7684\u66ff\u4ee3\u65b9\u6848\u5bf9\u6bd4\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u6280\u672f\u5bf9\u6bd4\u65b9\u6848",children:"\u6280\u672f\u5bf9\u6bd4\u65b9\u6848"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u6280\u672f\u65b9\u6848"}),(0,i.jsx)(n.th,{children:"\u4f18\u70b9"}),(0,i.jsx)(n.th,{children:"\u7f3a\u70b9"}),(0,i.jsx)(n.th,{children:"\u9002\u7528\u573a\u666f"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"static AtomicBoolean"})})}),(0,i.jsx)(n.td,{children:"- \u7b80\u5355\u6613\u7528\uff0c\u7ebf\u7a0b\u5b89\u5168<br>- \u9002\u7528\u4e8e\u5355\u4e00\u7ebf\u7a0b\u6216\u5c11\u6570\u7ebf\u7a0b\u7684\u5168\u5c40\u72b6\u6001\u63a7\u5236"}),(0,i.jsx)(n.td,{children:"- \u968f\u7740\u7cfb\u7edf\u590d\u6742\u5ea6\u589e\u52a0\uff0c\u53ef\u80fd\u53d8\u5f97\u4e0d\u591f\u7075\u6d3b<br>- \u5171\u4eab\u5168\u5c40\u72b6\u6001\u53ef\u80fd\u5bfc\u81f4\u95ee\u9898"}),(0,i.jsx)(n.td,{children:"\u9002\u5408\u5c0f\u578b\u7cfb\u7edf\u6216\u5c11\u91cf\u7ebf\u7a0b\u7684\u5168\u5c40\u72b6\u6001\u7ba1\u7406"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"CountDownLatch"})})}),(0,i.jsx)(n.td,{children:"- \u53ef\u4ee5\u7075\u6d3b\u5730\u63a7\u5236\u591a\u4e2a\u7ebf\u7a0b\u540c\u6b65<br>- \u9002\u5408\u7b49\u5f85\u591a\u4e2a\u7ebf\u7a0b\u5b8c\u6210\u64cd\u4f5c"}),(0,i.jsx)(n.td,{children:"- \u4e00\u6b21\u6027\u89e6\u53d1\uff0c\u65e0\u6cd5\u91cd\u590d\u4f7f\u7528"}),(0,i.jsx)(n.td,{children:"\u9002\u5408\u4e00\u6b21\u6027\u63a7\u5236\u591a\u7ebf\u7a0b\u5b8c\u6210\u540e\u8fdb\u884c\u91cd\u8bd5\u64cd\u4f5c"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"ScheduledExecutorService"})})}),(0,i.jsx)(n.td,{children:"- \u5b9a\u65f6\u68c0\u67e5\uff0c\u6613\u4e8e\u63a7\u5236<br>- \u652f\u6301\u5b9a\u671f\u4efb\u52a1"}),(0,i.jsx)(n.td,{children:"- \u9002\u5408\u5468\u671f\u6027\u4efb\u52a1\uff0c\u4e0d\u9002\u7528\u4e8e\u5373\u65f6\u54cd\u5e94\u9700\u6c42"}),(0,i.jsx)(n.td,{children:"\u9002\u5408\u5b9a\u671f\u68c0\u67e5\u91cd\u8bd5\u7684\u573a\u666f"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.code,{children:"EventBus"}),"\uff08\u6d88\u606f\u673a\u5236\uff09"]})}),(0,i.jsx)(n.td,{children:"- \u677e\u8026\u5408\uff0c\u9002\u5408\u5206\u5e03\u5f0f\u73af\u5883<br>- \u53ef\u4ee5\u5e7f\u64ad\u4e8b\u4ef6\u901a\u77e5\u5176\u4ed6\u6a21\u5757"}),(0,i.jsx)(n.td,{children:"- \u589e\u52a0\u4e86\u7cfb\u7edf\u590d\u6742\u6027\uff0c\u4f9d\u8d56\u989d\u5916\u7684\u5e93"}),(0,i.jsx)(n.td,{children:"\u9002\u5408\u5206\u5e03\u5f0f\u6216\u5fae\u670d\u52a1\u67b6\u6784\u7684\u6d88\u606f\u5e7f\u64ad\u673a\u5236"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"RetryTemplate"})})}),(0,i.jsx)(n.td,{children:"- \u7075\u6d3b\u63a7\u5236\u91cd\u8bd5\u7b56\u7565\uff0c\u5982\u91cd\u8bd5\u6b21\u6570\u3001\u95f4\u9694\u65f6\u95f4\u7b49<br>- \u7b80\u5316\u91cd\u8bd5\u903b\u8f91"}),(0,i.jsx)(n.td,{children:"- \u5f15\u5165\u5916\u90e8\u4f9d\u8d56<br>- \u914d\u7f6e\u548c\u4f7f\u7528\u7a0d\u663e\u590d\u6742"}),(0,i.jsx)(n.td,{children:"\u9002\u5408\u9700\u8981\u590d\u6742\u91cd\u8bd5\u903b\u8f91\u7684\u573a\u666f"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"static AtomicBoolean"})}),"\uff1a\u9002\u5408\u5c0f\u578b\u7cfb\u7edf\uff0c\u80fd\u591f\u7b80\u5355\u5730\u63a7\u5236\u5168\u5c40\u72b6\u6001\u3002\u7f3a\u70b9\u662f\u968f\u7740\u7cfb\u7edf\u7684\u590d\u6742\u5ea6\u589e\u52a0\uff0c\u53ef\u80fd\u53d8\u5f97\u4e0d\u591f\u7075\u6d3b\uff0c\u4e14\u72b6\u6001\u7ba1\u7406\u53ef\u80fd\u5b58\u5728\u95ee\u9898\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"CountDownLatch"})}),"\uff1a\u9002\u5408\u7b49\u5f85\u591a\u4e2a\u7ebf\u7a0b\u5b8c\u6210\u4efb\u52a1\u540e\u8fdb\u884c\u7edf\u4e00\u64cd\u4f5c\uff0c\u4f46\u65e0\u6cd5\u591a\u6b21\u89e6\u53d1\uff0c\u56e0\u6b64\u4e0d\u9002\u5408\u9700\u8981\u6301\u7eed\u91cd\u8fde\u7684\u573a\u666f\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"ScheduledExecutorService"})}),"\uff1a\u9002\u5408\u5b9a\u671f\u68c0\u67e5\u8fde\u63a5\u72b6\u6001\u5e76\u8fdb\u884c\u91cd\u8bd5\u7684\u573a\u666f\u3002\u7b80\u5355\u6613\u7528\uff0c\u4f46\u9002\u5408\u5468\u671f\u6027\u4efb\u52a1\uff0c\u4e0d\u9002\u5408\u5373\u65f6\u54cd\u5e94\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"EventBus"})}),"\uff1a\u9002\u5408\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\u7684\u4e8b\u4ef6\u9a71\u52a8\u573a\u666f\uff0c\u53ef\u4ee5\u5b9e\u73b0\u677e\u8026"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5408\u7684\u5f02\u6b65\u901a\u77e5\u673a\u5236\uff0c\u4f46\u4f1a\u5f15\u5165\u989d\u5916\u7684\u590d\u6742\u6027\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"RetryTemplate"})}),"\uff1a\u9002\u5408\u9700\u8981\u590d\u6742\u91cd\u8bd5\u7b56\u7565\u7684\u573a\u666f\uff0c\u80fd\u591f\u7075\u6d3b\u914d\u7f6e\u91cd\u8bd5\u6b21\u6570\u548c\u95f4\u9694\u65f6\u95f4\uff0c\u4f46\u76f8\u5bf9\u590d\u6742\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u6839\u636e\u5b9e\u9645\u9700\u6c42\u9009\u62e9\u5408\u9002\u7684\u65b9\u6848\uff0c\u53ef\u4ee5\u6709\u6548\u5730\u63d0\u5347\u7cfb\u7edf\u7684\u7a33\u5b9a\u6027\u548c\u53ef\u7528\u6027\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>c});var s=r(96540);const i={},t=s.createContext(i);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(t.Provider,{value:n},e.children)}},26665:e=>{e.exports=JSON.parse('{"permalink":"/blog/product-design-and-optimization","editUrl":"https://github.com/Jachen99/Jachen99.github.io/tree/V3.0.0/blog/2024/05-08-Redis\u6d88\u606f\u961f\u5217\u6d88\u8d39\u8005\u7aef\u65ad\u8fde\u91cd\u8bd5\u673a\u5236\u5b9e\u73b0.md","source":"@site/blog/2024/05-08-Redis\u6d88\u606f\u961f\u5217\u6d88\u8d39\u8005\u7aef\u65ad\u8fde\u91cd\u8bd5\u673a\u5236\u5b9e\u73b0.md","title":"Redis\u6d88\u606f\u961f\u5217\u6d88\u8d39\u8005\u7aef\u65ad\u8fde\u91cd\u8bd5\u673a\u5236\u5b9e\u73b0","description":"Redis\u6d88\u606f\u961f\u5217\u6d88\u8d39\u8005\u7aef\u65ad\u8fde\u91cd\u8bd5\u673a\u5236\u5b9e\u73b0","date":"2024-05-08T00:00:00.000Z","tags":[{"inline":false,"label":"Redis","permalink":"/blog/tags/redis","description":"\u5173\u4e8eRedis\u7684\u76f8\u5173\u5185\u5bb9"}],"readingTime":8.86,"hasTruncateMarker":false,"authors":[{"name":"\u5b63\u51a0\u81e3","title":"\u540e\u7aef\u7814\u53d1\u5de5\u7a0b\u5e08","url":"https://github.com/jachen99","page":{"permalink":"/blog/authors/jiguanchen"},"socials":{"github":"https://github.com/jachen99"},"imageURL":"https://github.com/jachen99.png","key":"jiguanchen"}],"frontMatter":{"slug":"product-design-and-optimization","title":"Redis\u6d88\u606f\u961f\u5217\u6d88\u8d39\u8005\u7aef\u65ad\u8fde\u91cd\u8bd5\u673a\u5236\u5b9e\u73b0","authors":["jiguanchen"],"tags":["redis"]},"unlisted":false,"prevItem":{"title":"EasyExcel\u4e2d\u7684\u6570\u636e\u7b2c\u4e00\u884c\u83b7\u53d6\u95ee\u9898\u53ca\u89e3\u51b3\u65b9\u6848\u8be6\u89e3","permalink":"/blog/advanced-data-processing-with-easyexcel"},"nextItem":{"title":"\u5b89\u5168\u529f\u80fd\u4e4b\u7cfb\u7edf\u9000\u51fa\u540eJWT\u4ee4\u724c\u5931\u6548","permalink":"/blog/product-security-system-exit-jwt-invalid"}}')}}]);