"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[5627],{1211:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var i=r(6939),s=r(4848),l=r(8453);const t={slug:"talk-about-redis-cache-exceptions-and-solutions",title:"Redis\u7f13\u5b58\u5e38\u89c1\u5f02\u5e38\u53ca\u89e3\u51b3\u65b9\u6848",authors:["jiguanchen"],tags:["zhongjianjian","redis"]},d=void 0,a={authorsImageUrls:[void 0]},c=[{value:"Redis\u5e38\u89c1\u5e94\u7528",id:"redis\u5e38\u89c1\u5e94\u7528",level:2},{value:"Redis\u5e38\u89c1\u7f13\u5b58\u5f02\u5e38",id:"redis\u5e38\u89c1\u7f13\u5b58\u5f02\u5e38",level:2},{value:"1\u3001\u7f13\u5b58\u96ea\u5d29",id:"1\u7f13\u5b58\u96ea\u5d29",level:3},{value:"1.1\u73b0\u8c61",id:"11\u73b0\u8c61",level:4},{value:"1.2\u539f\u56e0",id:"12\u539f\u56e0",level:4},{value:"1.3\u89e3\u51b3\u65b9\u6848",id:"13\u89e3\u51b3\u65b9\u6848",level:4},{value:"2\u3001\u7f13\u5b58\u7a7f\u900f",id:"2\u7f13\u5b58\u7a7f\u900f",level:3},{value:"2.1\u73b0\u8c61",id:"21\u73b0\u8c61",level:4},{value:"2.2\u5f02\u5e38\u539f\u56e0",id:"22\u5f02\u5e38\u539f\u56e0",level:4},{value:"2.3\u89e3\u51b3\u65b9\u6848",id:"23\u89e3\u51b3\u65b9\u6848",level:4},{value:"3\u3001\u7f13\u5b58\u51fb\u7a7f",id:"3\u7f13\u5b58\u51fb\u7a7f",level:3},{value:"3.1\u73b0\u8c61",id:"31\u73b0\u8c61",level:4},{value:"3.2\u5f02\u5e38\u539f\u56e0",id:"32\u5f02\u5e38\u539f\u56e0",level:4},{value:"3.3\u89e3\u51b3\u65b9\u6848",id:"33\u89e3\u51b3\u65b9\u6848",level:4},{value:"\u5176\u4ed6\u5e38\u89c1\u7684Redis\u9519\u8bef\u53ca\u5176\u89e3\u51b3\u65b9\u6cd5\uff1a",id:"\u5176\u4ed6\u5e38\u89c1\u7684redis\u9519\u8bef\u53ca\u5176\u89e3\u51b3\u65b9\u6cd5",level:2}];function h(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u80cc\u666f"}),"\uff1a",(0,s.jsx)(n.em,{children:"Redis\u662f\u4e00\u79cd\u6d41\u884c\u7684\u5185\u5b58\u6570\u636e\u7ed3\u6784\u5b58\u50a8\uff0c\u5e7f\u6cdb\u7528\u4f5c\u6570\u636e\u5e93\u3001\u7f13\u5b58\u548c\u6d88\u606f\u4ee3\u7406\u3002Redis \u4e3b\u8981\u7528\u6765\u505a\u7f13\u5b58\u4f7f\u7528\uff0c\u5728\u63d0\u9ad8\u6570\u636e\u67e5\u8be2\u6548\u7387\u3001\u4fdd\u62a4\u6570\u636e\u5e93\u7b49\u65b9\u9762\u8d77\u5230\u4e86\u5173\u952e\u6027\u7684\u4f5c\u7528\uff0c\u5f88\u5927\u7a0b\u5ea6\u4e0a\u63d0\u9ad8\u7cfb\u7edf\u7684\u6027\u80fd\u3002\u5f53\u7136\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\uff0c\u4e5f\u4f1a\u51fa\u73b0\u4e00\u4e9b\u5f02\u5e38\u60c5\u666f\uff0c\u5bfc\u81f4 Redis \u5931\u53bb\u7f13\u5b58\u4f5c\u7528\u3002"})]}),"\n",(0,s.jsx)(n.h2,{id:"redis\u5e38\u89c1\u5e94\u7528",children:"Redis\u5e38\u89c1\u5e94\u7528"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f13\u5b58\uff1aRedis\u901a\u5e38\u7528\u4f5c\u7f13\u5b58\uff0c\u4ee5\u5b58\u50a8\u5e38\u7528\u6570\u636e\uff0c\u4ee5\u51cf\u5c11\u6570\u636e\u5e93\u67e5\u8be2\u6b21\u6570\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u4f1a\u8bdd\u7ba1\u7406\uff1aRedis\u7528\u4e8e\u5b58\u50a8Web\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u7528\u6237\u4f1a\u8bdd\u6570\u636e\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5b9e\u65f6\u5206\u6790\uff1aRedis\u7528\u4e8e\u5904\u7406\u548c\u5206\u6790\u5927\u91cf\u7684\u5b9e\u65f6\u6570\u636e\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u961f\u5217\u7ba1\u7406\uff1aRedis\u7528\u4e8e\u5b9e\u73b0\u6d88\u606f\u961f\u5217\uff0c\u4ee5\u5f02\u6b65\u5206\u53d1\u548c\u5904\u7406\u4efb\u52a1\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u6392\u884c\u699c\u548c\u8ba1\u6570\uff1aRedis\u7528\u4e8e\u7ef4\u62a4\u6e38\u620f\u3001\u793e\u4ea4\u5a92\u4f53\u548c\u5176\u4ed6\u5e94\u7528\u4e2d\u9879\u76ee\u7684\u5b9e\u65f6\u6392\u540d\u548c\u8ba1\u6570\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u53d1\u5e03/\u8ba2\u9605\u6d88\u606f\uff1aRedis\u652f\u6301\u53d1\u5e03/\u8ba2\u9605\u6d88\u606f\u6a21\u5f0f\uff0c\u5e76\u7528\u4e8e\u5b9e\u65f6\u804a\u5929\u548c\u901a\u77e5\u7cfb\u7edf\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"redis\u5e38\u89c1\u7f13\u5b58\u5f02\u5e38",children:"Redis\u5e38\u89c1\u7f13\u5b58\u5f02\u5e38"}),"\n",(0,s.jsx)(n.p,{children:"\u7f13\u5b58\u96ea\u5d29 \u7f13\u5b58\u7a7f\u900f \u7f13\u5b58\u51fb\u7a7f"}),"\n",(0,s.jsx)(n.h3,{id:"1\u7f13\u5b58\u96ea\u5d29",children:"1\u3001\u7f13\u5b58\u96ea\u5d29"}),"\n",(0,s.jsx)(n.h4,{id:"11\u73b0\u8c61",children:"1.1\u73b0\u8c61"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u53d1\u751f\u5728\u7f13\u5b58\u6570\u636e\u5728\u540c\u4e00\u65f6\u523b\u5927\u91cf\u5931\u6548\uff0c\u6bd4\u5982\u7f13\u5b58\u6570\u636e\u7684\u8fc7\u671f\u65f6\u95f4\u8bbe\u7f6e\u4e3a\u540c\u4e00\u65f6\u523b\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u7531\u4e8e\u7f13\u5b58\u4e2d\u7684\u6570\u636e\u5931\u6548\uff0c\u5927\u91cf\u7684\u8bf7\u6c42\u76f4\u63a5\u8bf7\u6c42\u540e\u7aef\u6570\u636e\uff0c\u5bfc\u81f4\u7cfb\u7edf\u8bf7\u6c42\u91cf\u77ac\u95f4\u589e\u52a0\uff0c\u9020\u6210\u7cfb\u7edf\u538b\u529b\u8fc7\u5927\uff0c\u4ece\u800c\u5b95\u673a\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20230130104242186",src:r(8055).A+"",width:"466",height:"217"})}),"\n",(0,s.jsx)(n.h4,{id:"12\u539f\u56e0",children:"1.2\u539f\u56e0"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f13\u5b58\u670d\u52a1\u4e0d\u53ef\u7528\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u7f13\u5b58\u670d\u52a1\u53ef\u7528\uff0c\u4f46\u662f\u5927\u91cf KEY \u540c\u65f6\u5931\u6548\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"13\u89e3\u51b3\u65b9\u6848",children:"1.3\u89e3\u51b3\u65b9\u6848"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f13\u5b58\u670d\u52a1\u4e0d\u53ef\u7528\r\nredis \u7684\u90e8\u7f72\u65b9\u5f0f\u4e3b\u8981\u6709\u5355\u673a\u3001\u4e3b\u4ece\u3001\u54e8\u5175\u548c cluster \u6a21\u5f0f\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5355\u673a\r\n\u53ea\u6709\u4e00\u53f0\u673a\u5668\uff0c\u6240\u6709\u6570\u636e\u90fd\u5b58\u5728\u8fd9\u53f0\u673a\u5668\u4e0a\uff0c\u5f53\u673a\u5668\u51fa\u73b0\u5f02\u5e38\u65f6\uff0credis \u5c06\u5931\u6548\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4 redis \u7f13\u5b58\u96ea\u5d29\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u4e3b\u4ece\r\n\u4e3b\u4ece\u5176\u5b9e\u5c31\u662f\u4e00\u53f0\u673a\u5668\u505a\u4e3b\uff0c\u4e00\u4e2a\u6216\u591a\u4e2a\u673a\u5668\u505a\u4ece\uff0c\u4ece\u8282\u70b9\u4ece\u4e3b\u8282\u70b9\u590d\u5236\u6570\u636e\uff0c\u53ef\u4ee5\u5b9e\u73b0\u8bfb\u5199\u5206\u79bb\uff0c\u4e3b\u8282\u70b9\u505a\u5199\uff0c\u4ece\u8282\u70b9\u505a\u8bfb\u3002\r\n\u4f18\u70b9\uff1a\u5f53\u67d0\u4e2a\u4ece\u8282\u70b9\u5f02\u5e38\u65f6\uff0c\u4e0d\u5f71\u54cd\u4f7f\u7528\u3002\r\n\u7f3a\u70b9\uff1a\u5f53\u4e3b\u8282\u70b9\u5f02\u5e38\u65f6\uff0c\u670d\u52a1\u5c06\u4e0d\u53ef\u7528\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u54e8\u5175\r\n\u54e8\u5175\u6a21\u5f0f\u4e5f\u662f\u4e00\u79cd\u4e3b\u4ece\uff0c\u53ea\u4e0d\u8fc7\u589e\u52a0\u4e86\u54e8\u5175\u7684\u529f\u80fd\uff0c\u7528\u4e8e\u76d1\u63a7\u4e3b\u8282\u70b9\u7684\u72b6\u6001\uff0c\u5f53\u4e3b\u8282\u70b9\u5b95\u673a\u4e4b\u540e\u4f1a\u8fdb\u884c\u6295\u7968\u5728\u4ece\u8282\u70b9\u4e2d\u91cd\u65b0\u9009\u51fa\u4e3b\u8282\u70b9\u3002\r\n\u4f18\u70b9\uff1a\u9ad8\u53ef\u7528\uff0c\u5f53\u4e3b\u8282\u70b9\u5f02\u5e38\u65f6\uff0c\u81ea\u52a8\u5728\u4ece\u8282\u70b9\u5f53\u4e2d\u9009\u62e9\u4e00\u4e2a\u4e3b\u8282\u70b9\u3002\r\n\u7f3a\u70b9\uff1a\u53ea\u6709\u4e00\u4e2a\u4e3b\u8282\u70b9\uff0c\u5f53\u6570\u636e\u6bd4\u8f83\u591a\u65f6\uff0c\u4e3b\u8282\u70b9\u538b\u529b\u4f1a\u5f88\u5927\u3002"}),"\n",(0,s.jsx)(n.li,{children:"cluster \u6a21\u5f0f\r\n\u96c6\u7fa4\u91c7\u7528\u4e86\u591a\u4e3b\u591a\u4ece\uff0c\u6309\u7167\u4e00\u5b9a\u7684\u89c4\u5219\u8fdb\u884c\u5206\u7247\uff0c\u5c06\u6570\u636e\u5206\u522b\u5b58\u50a8\uff0c\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u89e3\u51b3\u4e86\u54e8\u5175\u6a21\u5f0f\u4e0b\u5355\u673a\u5b58\u50a8\u6709\u9650\u7684\u95ee\u9898\u3002\r\n\u4f18\u70b9\uff1a\u9ad8\u53ef\u7528\uff0c\u914d\u7f6e\u4e86\u591a\u4e3b\u591a\u4ece\uff0c\u53ef\u4ee5\u4f7f\u6570\u636e\u5206\u533a\uff0c\u53bb\u4e2d\u5fc3\u5316\uff0c\u51cf\u5c0f\u4e86\u5355\u53f0\u673a\u5b50\u7684\u8d1f\u62c5.\r\n\u7f3a\u70b9\uff1a\u673a\u5668\u8d44\u6e90\u4f7f\u7528\u6bd4\u8f83\u591a\uff0c\u914d\u7f6e\u590d\u6742\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5c0f\u7ed3\r\n\u4ece\u9ad8\u53ef\u7528\u5f97\u89d2\u5ea6\u8003\u8651\uff0c\u4f7f\u7528\u54e8\u5175\u6a21\u5f0f\u548c cluster \u6a21\u5f0f\u53ef\u4ee5\u9632\u6b62\u56e0\u4e3a redis \u4e0d\u53ef\u7528\u5bfc\u81f4\u7684\u7f13\u5b58\u96ea\u5d29\u95ee\u9898\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"\u5927\u91cf KEY \u540c\u65f6\u5931\u6548\r\n\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u6c38\u4e0d\u5931\u6548\u3001\u8bbe\u7f6e\u4e0d\u540c\u5931\u6548\u65f6\u95f4\u3001\u4f7f\u7528\u4e8c\u7ea7\u7f13\u5b58\u548c\u5b9a\u65f6\u66f4\u65b0\u7f13\u5b58\u5931\u6548\u65f6\u95f4"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u8bbe\u7f6e\u6c38\u4e0d\u5931\u6548\r\n\u5982\u679c\u6240\u6709\u7684 key \u90fd\u8bbe\u7f6e\u4e0d\u5931\u6548\uff0c\u4e0d\u5c31\u4e0d\u4f1a\u51fa\u73b0\u56e0\u4e3a KEY \u5931\u6548\u5bfc\u81f4\u7684\u7f13\u5b58\u96ea\u5d29\u95ee\u9898\u4e86\u3002redis \u8bbe\u7f6e key \u6c38\u8fdc\u6709\u6548\u7684\u547d\u4ee4\u5982\u4e0b\uff1a\r\nPERSIST key\r\n\u7f3a\u70b9\uff1a\u4f1a\u5bfc\u81f4 redis \u7684\u7a7a\u95f4\u8d44\u6e90\u9700\u6c42\u53d8\u5927\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u8bbe\u7f6e\u968f\u673a\u5931\u6548\u65f6\u95f4\r\n\u5982\u679c key \u7684\u5931\u6548\u65f6\u95f4\u4e0d\u76f8\u540c\uff0c\u5c31\u4e0d\u4f1a\u5728\u540c\u4e00\u65f6\u523b\u5931\u6548\uff0c\u8fd9\u6837\u5c31\u4e0d\u4f1a\u51fa\u73b0\u5927\u91cf\u8bbf\u95ee\u6570\u636e\u5e93\u7684\u60c5\u51b5\u3002\r\nredis \u8bbe\u7f6e key \u6709\u6548\u65f6\u95f4\u547d\u4ee4\u5982\u4e0b\uff1a\r\nExpire key\r\n\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff0c\u901a\u8fc7 RedisClient \u5b9e\u73b0"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"/**\r\n* \u968f\u673a\u8bbe\u7f6e\u5c0f\u4e8e30\u5206\u949f\u7684\u5931\u6548\u65f6\u95f4\r\n* @param redisKey\r\n* @param value\r\n*/\r\nprivate void setRandomTimeForReidsKey(String redisKey,String value){\r\n//\u968f\u673a\u51fd\u6570\r\nRandom rand = new Random();\r\n//\u968f\u673a\u83b7\u53d630\u5206\u949f\u5185\uff0830*60\uff09\u7684\u968f\u673a\u6570\r\nint times = rand.nextInt(1800);\r\n//\u8bbe\u7f6e\u7f13\u5b58\u65f6\u95f4\uff08\u7f13\u5b58\u7684key,\u7f13\u5b58\u7684\u503c\uff0c\u5931\u6548\u65f6\u95f4\uff1a\u5355\u4f4d\u79d2\uff09\r\nredisClient.setNxEx(redisKey,value,times);\r\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4f7f\u7528\u4e8c\u7ea7\u7f13\u5b58\r\n\u4e8c\u7ea7\u7f13\u5b58\u662f\u4f7f\u7528\u4e24\u7ec4\u7f13\u5b58\uff0c1 \u7ea7\u7f13\u5b58\u548c 2 \u7ea7\u7f13\u5b58\uff0c\u540c\u4e00\u4e2a Key \u5728\u4e24\u7ec4\u7f13\u5b58\u91cc\u90fd\u4fdd\u5b58\uff0c\u4f46\u662f\u4ed6\u4eec\u7684\u5931\u6548\u65f6\u95f4\u4e0d\u540c\uff0c\u8fd9\u6837 1 \u7ea7\u7f13\u5b58\u6ca1\u6709\u67e5\u5230\u6570\u636e\u65f6\uff0c\u53ef\u4ee5\u5728\u4e8c\u7ea7\u7f13\u5b58\u91cc\u67e5\u8be2\uff0c\u4e0d\u4f1a\u76f4\u63a5\u8bbf\u95ee\u6570\u636e\u5e93\u3002\r\n\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'public static void main(String[] args) {\r\nCacheTest test = new CacheTest();\r\n//\u4ece1\u7ea7\u7f13\u5b58\u4e2d\u83b7\u53d6\u6570\u636e\r\nString value = test.queryByOneCacheKey("key");\r\n//\u5982\u679c1\u7ea7\u7f13\u5b58\u4e2d\u6ca1\u6709\u6570\u636e\uff0c\u518d\u4e8c\u7ea7\u7f13\u5b58\u4e2d\u67e5\u627e\r\nif(StringUtils.isBlank(value)){\r\nvalue = test.queryBySecondCacheKey("key");\r\n//\u5982\u679c\u4e8c\u7ea7\u7f13\u5b58\u4e2d\u6ca1\u6709\uff0c\u4ece\u6570\u636e\u5e93\u4e2d\u67e5\u627e\r\nif(StringUtils.isBlank(value)){\r\nvalue =test.getFromDb();\r\n//\u5982\u679c\u6570\u636e\u5e93\u4e2d\u4e5f\u6ca1\u6709\uff0c\u5c31\u8fd4\u56de\u7a7a\r\nif(StringUtils.isBlank(value)){\r\nSystem.out.println("\u6570\u636e\u4e0d\u5b58\u5728!");\r\n}else{\r\n//\u4e8c\u7ea7\u7f13\u5b58\u4e2d\u4fdd\u5b58\u6570\u636e\r\ntest.secondCacheSave("key",value);\r\n//\u4e00\u7ea7\u7f13\u5b58\u4e2d\u4fdd\u5b58\u6570\u636e\r\ntest.oneCacheSave("key",value);\r\nSystem.out.println("\u6570\u636e\u5e93\u4e2d\u8fd4\u56de\u6570\u636e!");\r\n}\r\n}else{\r\n//\u4e00\u7ea7\u7f13\u5b58\u4e2d\u4fdd\u5b58\u6570\u636e\r\ntest.oneCacheSave("key",value);\r\nSystem.out.println("\u4e8c\u7ea7\u7f13\u5b58\u4e2d\u8fd4\u56de\u6570\u636e!");\r\n}\r\n}else {\r\nSystem.out.println("\u4e00\u7ea7\u7f13\u5b58\u4e2d\u8fd4\u56de\u6570\u636e!");\r\n}\r\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5f02\u6b65\u66f4\u65b0\u7f13\u5b58\u65f6\u95f4"}),"\n",(0,s.jsx)(n.p,{children:"\u6bcf\u6b21\u8bbf\u95ee\u7f13\u5b58\u65f6\uff0c\u542f\u52a8\u4e00\u4e2a\u7ebf\u7a0b\u6216\u8005\u5efa\u7acb\u4e00\u4e2a\u5f02\u6b65\u4efb\u52a1\u6765\uff0c\u66f4\u65b0\u7f13\u5b58\u65f6\u95f4\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'public class CacheRunnable implements Runnable {\r\n\r\nprivate ClusterRedisClientAdapter redisClient;\r\n/**\r\n* \u8981\u66f4\u65b0\u7684key\r\n*/\r\npublic String key;\r\n\r\npublic CacheRunnable(String key){\r\nthis.key =key;\r\n}\r\n\r\n@Override\r\npublic void run() {\r\n//\u66f4\u7ec6\u7f13\u5b58\u65f6\u95f4\r\nredisClient.expire(this.getKey(),1800);\r\n}\r\n\r\npublic String getKey() {\r\nreturn key;\r\n}\r\n\r\npublic void setKey(String key) {\r\nthis.key = key;\r\n}\r\n}\r\npublic static void main(String[] args) {\r\nCacheTest test = new CacheTest();\r\n//\u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6\u6570\u636e\r\nString value = test.getFromCache("key");\r\nif(StringUtils.isBlank(value)){\r\n//\u4ece\u6570\u636e\u5e93\u4e2d\u83b7\u53d6\u6570\u636e\r\nvalue = test.getFromDb("key");\r\n//\u5c06\u6570\u636e\u653e\u5728\u7f13\u5b58\u4e2d\r\ntest.oneCacheSave("key",value);\r\n//\u8fd4\u56de\u6570\u636e\r\nSystem.out.println("\u8fd4\u56de\u6570\u636e");\r\n}else{\r\n//\u5f02\u6b65\u4efb\u52a1\u66f4\u65b0\u7f13\u5b58\r\nCacheRunnable runnable = new CacheRunnable("key");\r\nrunnable.run();\r\n//\u8fd4\u56de\u6570\u636e\r\nSystem.out.println("\u8fd4\u56de\u6570\u636e");\r\n}\r\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"2\u7f13\u5b58\u7a7f\u900f",children:"2\u3001\u7f13\u5b58\u7a7f\u900f"}),"\n",(0,s.jsx)(n.h4,{id:"21\u73b0\u8c61",children:"2.1\u73b0\u8c61"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u53d1\u751f\u5728\u8bf7\u6c42\u7684\u6570\u636e\u4e0d\u5b58\u5728\u4e8e\u7f13\u5b58\uff0c\u4f46\u662f\u8bf7\u6c42\u4f9d\u7136\u4f1a\u5230\u8fbe\u540e\u7aef\u670d\u52a1\u5668\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u7531\u4e8e\u8bf7\u6c42\u7684\u6570\u636e\u4e0d\u5b58\u5728\uff0c\u6bcf\u6b21\u8bf7\u6c42\u90fd\u4f1a\u5230\u8fbe\u540e\u7aef\u670d\u52a1\u5668\uff0c\u5bfc\u81f4\u5927\u91cf\u7684\u65e0\u6548\u8bf7\u6c42\uff0c\u589e\u52a0\u4e86\u540e\u7aef\u7684\u538b\u529b\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20230130110129433",src:r(9887).A+"",width:"442",height:"207"})}),"\n",(0,s.jsx)(n.h4,{id:"22\u5f02\u5e38\u539f\u56e0",children:"2.2\u5f02\u5e38\u539f\u56e0"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u975e\u6cd5\u8c03\u7528"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"23\u89e3\u51b3\u65b9\u6848",children:"2.3\u89e3\u51b3\u65b9\u6848"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u5bf9\u4e8e\u4e0d\u5b58\u5728\u7684\u6570\u636e\u8bbe\u7f6e\u4e00\u4e2a\u7a7a\u503c\uff0c\u8bbe\u7f6e\u6709\u6548\u671f"}),"\n",(0,s.jsx)(n.li,{children:"\u5bf9\u8bf7\u6c42\u6570\u636e\u505a\u9650\u6d41"}),"\n",(0,s.jsx)(n.li,{children:"\u54c8\u5e0c/\u5e03\u9686\u8fc7\u6ee4\u5668\u9884\u5904\u7406"}),"\n",(0,s.jsx)(n.li,{children:"\u4f7f\u7528\u5e03\u5c14\u503c\u8fdb\u884c\u6807\u8bc6\uff08\u4f8b\u5982\uff1a0\u62161\uff09\u8868\u793a\u6570\u636e\u662f\u5426\u5b58\u5728"}),"\n",(0,s.jsx)(n.li,{children:"\u53cc\u91cd\u68c0\u67e5\u673a\u5236\uff08Cache Aside Pattern\uff09"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"TODO \u8fd9\u91cc\u53ea\u5199\u4e86\u7b2c\u4e00\u79cd\u89e3\u51b3\u65b9\u6848\uff0c\u5269\u4e0b\u7684\u4ee5\u540e\u8865\u5145..."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f13\u5b58\u7a7a\u503c\r\n\u5f53\u7f13\u5b58\u548c\u6570\u636e\u5e93\u4e2d\u90fd\u6ca1\u6709\u503c\u65f6\uff0c\u53ef\u4ee5\u5728\u7f13\u5b58\u4e2d\u5b58\u653e\u4e00\u4e2a\u7a7a\u503c\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u51cf\u5c11\u91cd\u590d\u67e5\u8be2\u7a7a\u503c\u5f15\u8d77\u7684\u7cfb\u7edf\u538b\u529b\u589e\u5927\uff0c\u4ece\u800c\u4f18\u5316\u4e86\u7f13\u5b58\u7a7f\u900f\u95ee\u9898\u3002\r\n\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"private String queryMessager(String key){\r\n//\u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6\u6570\u636e\r\nString message = getFromCache(key);\r\n//\u5982\u679c\u7f13\u5b58\u4e2d\u6ca1\u6709 \u4ece\u6570\u636e\u5e93\u4e2d\u67e5\u627e\r\nif(StringUtils.isBlank(message)){\r\nmessage = getFromDb(key);\r\n//\u5982\u679c\u6570\u636e\u5e93\u4e2d\u4e5f\u6ca1\u6709\u6570\u636e \u5c31\u8bbe\u7f6e\u77ed\u65f6\u95f4\u7684\u7f13\u5b58\r\nif(StringUtils.isBlank(message)){\r\n//\u8bbe\u7f6e\u7f13\u5b58\u65f6\u95f4\uff08\u7f13\u5b58\u7684key,\u7f13\u5b58\u7684\u503c\uff0c\u5931\u6548\u65f6\u95f4\uff1a\u5355\u4f4d\u79d2\uff09\r\nredisClient.setNxEx(key,null,60);\r\n}else{\r\nredisClient.setNxEx(key,message,1800);\r\n}\r\n}\r\nreturn message;\r\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7f3a\u70b9\uff1a\u5927\u91cf\u7684\u7a7a\u7f13\u5b58\u5bfc\u81f4\u8d44\u6e90\u7684\u6d6a\u8d39\uff0c\u4e5f\u6709\u53ef\u80fd\u5bfc\u81f4\u7f13\u5b58\u548c\u6570\u636e\u5e93\u4e2d\u7684\u6570\u636e\u4e0d\u4e00\u81f4\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"3\u7f13\u5b58\u51fb\u7a7f",children:"3\u3001\u7f13\u5b58\u51fb\u7a7f"}),"\n",(0,s.jsx)(n.h4,{id:"31\u73b0\u8c61",children:"3.1\u73b0\u8c61"}),"\n",(0,s.jsx)(n.p,{children:"\u5f53\u4e00\u4e2a\u9ad8\u6d41\u91cf\u7684\u8bf7\u6c42\u8bbf\u95ee\u540c\u4e00\u4e2a\u7f13\u5b58\u6570\u636e\u65f6\uff0c\u5982\u679c\u8be5\u6570\u636e\u7684\u7f13\u5b58\u5931\u6548\uff0c\u90a3\u4e48\u6240\u6709\u7684\u8bf7\u6c42\u90fd\u4f1a\u76f4\u63a5\u8bf7\u6c42\u6570\u636e\u5e93\uff0c\u9020\u6210\u6570\u636e\u5e93\u538b\u529b\u8fc7\u5927\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4e0e\u7f13\u5b58\u7a7f\u900f\u533a\u522b\uff1a\u7f13\u5b58\u51fb\u7a7f\u662f\u56e0\u4e3a\u67d0\u4e2a\u6570\u636e\u88ab\u5927\u91cf\u8bf7\u6c42\uff0c\u5bfc\u81f4\u5176\u7f13\u5b58\u5931\u6548\uff0c\u4ece\u800c\u6253\u51fb\u6570\u636e\u5e93\uff1b\u7f13\u5b58\u7a7f\u900f\u662f\u56e0\u4e3a\u8bf7\u6c42\u4e86\u4e0d\u5b58\u5728\u7684\u6570\u636e\uff0c\u5bfc\u81f4\u6240\u6709\u8bf7\u6c42\u90fd\u9700\u8981\u8bbf\u95ee\u6570\u636e\u5e93\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20230130111239309",src:r(7730).A+"",width:"449",height:"221"})}),"\n",(0,s.jsx)(n.h4,{id:"32\u5f02\u5e38\u539f\u56e0",children:"3.2\u5f02\u5e38\u539f\u56e0"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u70ed\u70b9 KEY \u5931\u6548\u7684\u540c\u65f6\uff0c\u5927\u91cf",(0,s.jsx)(n.strong,{children:"\u76f8\u540c"})," KEY \u8bf7\u6c42\u540c\u65f6\u8bbf\u95ee\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"33\u89e3\u51b3\u65b9\u6848",children:"3.3\u89e3\u51b3\u65b9\u6848"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u52a0\u9501\u673a\u5236\uff1a\u5bf9\u4e8e\u7279\u5b9a\u7684\u6570\u636e\u8bf7\u6c42\u52a0\u9501\uff0c\u907f\u514d\u5927\u91cf\u8bf7\u6c42\u9020\u6210\u7684\u7f13\u5b58\u5931\u6548\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5206\u5e03\u5f0f\u9501\uff1a\u4f7f\u7528\u5206\u5e03\u5f0f\u9501\u6765\u786e\u4fdd\u5bf9\u7279\u5b9a\u6570\u636e\u7684\u66f4\u65b0\u64cd\u4f5c\u662f\u539f\u5b50\u6027\u7684\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u540e\u5907\u673a\u5236\uff1a\u5728\u7f13\u5b58\u5931\u6548\u65f6\u4f7f\u7528\u540e\u5907\u673a\u5236\uff0c\u4fdd\u8bc1\u7f13\u5b58\u8bf7\u6c42\u80fd\u591f\u5f97\u5230\u54cd\u5e94\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u9650\u6d41\u673a\u5236\uff1a\u5bf9\u8bf7\u6c42\u6570\u636e\u8fdb\u884c\u9650\u6d41\uff0c\u9632\u6b62\u5927\u91cf\u8bf7\u6c42\u9020\u6210\u7684\u538b\u529b\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5bf9\u4e8e\u8fc7\u671f\u7684\u6570\u636e\u8fdb\u884c\u5f02\u6b65\u5220\u9664\uff1a\u907f\u514d\u56e0\u6570\u636e\u8fc7\u671f\u5bfc\u81f4\u7684\u7f13\u5b58\u51fb\u7a7f\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5206\u5e03\u5f0f\u9501"}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528\u5206\u5e03\u5f0f\u9501\uff0c\u540c\u4e00\u65f6\u95f4\u53ea\u6709 1 \u4e2a\u8bf7\u6c42\u53ef\u4ee5\u8bbf\u95ee\u5230\u6570\u636e\u5e93\uff0c\u5176\u4ed6\u8bf7\u6c42\u7b49\u5f85\u4e00\u6bb5\u65f6\u95f4\u540e\uff0c\u91cd\u590d\u8c03\u7528\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"/**\r\n* \u6839\u636ekey\u83b7\u53d6\u6570\u636e\r\n* @param key\r\n* @return\r\n* @throws InterruptedException\r\n*/\r\npublic String queryForMessage(String key) throws InterruptedException {\r\n//\u521d\u59cb\u5316\u8fd4\u56de\u7ed3\u679c\r\nString result = StringUtils.EMPTY;\r\n//\u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6\u6570\u636e\r\nresult = queryByOneCacheKey(key);\r\n//\u5982\u679c\u7f13\u5b58\u4e2d\u6709\u6570\u636e\uff0c\u76f4\u63a5\u8fd4\u56de\r\nif(StringUtils.isNotBlank(result)){\r\nreturn result;\r\n}else{\r\n//\u83b7\u53d6\u5206\u5e03\u5f0f\u9501\r\nif(lockByBusiness(key)){\r\n//\u4ece\u6570\u636e\u5e93\u4e2d\u83b7\u53d6\u6570\u636e\r\nresult = getFromDb(key);\r\n//\u5982\u679c\u6570\u636e\u5e93\u4e2d\u6709\u6570\u636e\uff0c\u5c31\u52a0\u5728\u7f13\u5b58\u4e2d\r\nif(StringUtils.isNotBlank(result)){\r\noneCacheSave(key,result);\r\n}\r\n}else {\r\n//\u5982\u679c\u6ca1\u6709\u83b7\u53d6\u5230\u5206\u5e03\u5f0f\u9501\uff0c\u7761\u7720\u4e00\u4e0b\uff0c\u518d\u63a5\u7740\u67e5\u8be2\u6570\u636e\r\nThread.sleep(500);\r\nreturn queryForMessage(key);\r\n}\r\n}\r\nreturn result;\r\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd8\u53ef\u4ee5\u9884\u5148\u8bbe\u7f6e\u70ed\u95e8\u6570\u636e\uff0c\u901a\u8fc7\u4e00\u4e9b\u76d1\u63a7\u65b9\u6cd5\uff0c\u53ca\u65f6\u6536\u96c6\u70ed\u70b9\u6570\u636e\uff0c\u5c06\u6570\u636e\u9884\u5148\u4fdd\u5b58\u5728\u7f13\u5b58\u4e2d\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u603b\u7ed3\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f13\u5b58\u96ea\u5d29\u662f\u56e0\u4e3a\u7f13\u5b58\u6570\u636e\u7684\u5931\u6548\u5bfc\u81f4\u7684\u8bf7\u6c42\u589e\u52a0\uff0c\u9020\u6210\u7cfb\u7edf\u538b\u529b\u8fc7\u5927\uff0c\u5b95\u673a\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u7f13\u5b58\u7a7f\u900f\u662f\u56e0\u4e3a\u8bf7\u6c42\u7684\u6570\u636e\u4e0d\u5b58\u5728\uff0c\u5bfc\u81f4\u8bf7\u6c42\u76f4\u63a5\u5230\u8fbe\u540e\u7aef\uff0c\u589e\u52a0\u4e86\u540e\u7aef\u7684\u538b\u529b\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u7f13\u5b58\u51fb\u7a7f\u662f\u56e0\u4e3a\u67d0\u4e2a\u6570\u636e\u88ab\u5927\u91cf\u8bf7\u6c42\uff0c\u5bfc\u81f4\u5176\u7f13\u5b58\u5931\u6548\uff0c\u4ece\u800c\u6253\u51fb\u6570\u636e\u5e93\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5176\u4ed6\u5e38\u89c1\u7684redis\u9519\u8bef\u53ca\u5176\u89e3\u51b3\u65b9\u6cd5",children:"\u5176\u4ed6\u5e38\u89c1\u7684Redis\u9519\u8bef\u53ca\u5176\u89e3\u51b3\u65b9\u6cd5\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u8fde\u63a5\u88ab\u62d2\u7edd\uff1a\u5f53Redis\u6ca1\u6709\u8fd0\u884c\u6216\u9632\u706b\u5899\u963b\u6b62\u4e86\u8fde\u63a5\u65f6\u4f1a\u53d1\u751f\u6b64\u9519\u8bef\u3002\u89e3\u51b3\u65b9\u6848\uff1a\u68c0\u67e5Redis\u662f\u5426\u6b63\u5728\u8fd0\u884c\uff0c\u5982\u679c\u9632\u706b\u5899\u963b\u6b62\u4e86\u8fde\u63a5\uff0c\u8bf7\u4e3aRedis\u6dfb\u52a0\u4e00\u4e2a\u4f8b\u5916\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u8fbe\u5230\u6700\u5927\u5ba2\u6237\u7aef\u6570\uff1a\u5f53\u592a\u591a\u5ba2\u6237\u7aef\u8bd5\u56fe\u540c\u65f6\u8fde\u63a5\u5230Redis\u65f6\u4f1a\u53d1\u751f\u6b64\u9519\u8bef\u3002\u89e3\u51b3\u65b9\u6848\uff1a\u589e\u52a0Redis\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684maxclients\u8bbe\u7f6e\uff0c\u6216\u6dfb\u52a0\u66f4\u591a\u7684Redis\u5b9e\u4f8b\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u4e0d\u8db3\uff1a\u5f53Redis\u7684\u5185\u5b58\u7528\u5c3d\u65f6\u4f1a\u53d1\u751f\u6b64\u9519\u8bef\u3002\u89e3\u51b3\u65b9\u6848\uff1a\u51cf\u5c0f\u5b58\u50a8\u5728Redis\u4e2d\u7684\u6570\u636e\u7684\u5927\u5c0f\uff0c\u4e3a\u670d\u52a1\u5668\u6dfb\u52a0\u66f4\u591a\u5185\u5b58\uff0c\u6216\u4f7f\u7528Redis\u7684\u9010\u51fa\u7b56\u7565\u81ea\u52a8\u5220\u9664\u6700\u8fd1\u6700\u5c11\u4f7f\u7528\u7684\u9879\u76ee\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u8bed\u6cd5\u9519\u8bef\uff1a\u5f53\u547d\u4ee4\u4ee5\u9519\u8bef\u7684\u8bed\u6cd5\u53d1\u9001\u5230Redis\u65f6\u4f1a\u53d1\u751f\u6b64\u9519\u8bef\u3002\u89e3\u51b3\u65b9\u6848\uff1a\u68c0\u67e5\u547d\u4ee4\u7684\u8bed\u6cd5\uff0c\u7136\u540e\u91cd\u8bd5\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u672a\u627e\u5230\u952e\uff1a\u5f53\u5c1d\u8bd5\u68c0\u7d22\u4e0d\u5b58\u5728\u7684\u952e\u7684\u503c\u65f6\u4f1a\u53d1\u751f\u6b64\u9519\u8bef\u3002\u89e3\u51b3\u65b9\u6848\uff1a\u4f7f\u7528EXISTS\u547d\u4ee4\u5728\u5c1d\u8bd5\u68c0\u7d22\u5176\u503c\u4e4b\u524d\u68c0\u67e5\u952e\u662f\u5426\u5b58\u5728\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5c06\u6570\u636e\u52a0\u8f7d\u5230\u5185\u5b58\uff1a\u5f53Redis\u4ece\u78c1\u76d8\u91cd\u65b0\u52a0\u8f7d\u6570\u636e\u5230\u5185\u5b58\u65f6\u4f1a\u53d1\u751f\u6b64\u9519\u8bef\u3002\u89e3\u51b3\u65b9\u6848\uff1a\u7b49\u5f85\u91cd\u65b0\u52a0\u8f7d\u5b8c\u6210\uff0c\u6216\u589e\u52a0Redis\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u4fdd\u5b58\u95f4\u9694\u3002"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8055:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/image-20230130104242186-e4f0b4b1debe0d650cdbca530f870ef7.png"},9887:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/image-20230130110129433-feec4a9784b5878620fadfead17e626d.png"},7730:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/image-20230130111239309-55a5b514708d305b7d9938695fc84f32.png"},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>d});var i=r(6540);const s={},l=i.createContext(s);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(l.Provider,{value:n},e.children)}},6939:e=>{e.exports=JSON.parse('{"permalink":"/blog/talk-about-redis-cache-exceptions-and-solutions","editUrl":"https://github.com/Jachen99/Jachen99.github.io/tree/V2.2.1/blog/2022/12-27-Redis\u7f13\u5b58\u5e38\u89c1\u5f02\u5e38\u53ca\u89e3\u51b3\u65b9\u6848.md","source":"@site/blog/2022/12-27-Redis\u7f13\u5b58\u5e38\u89c1\u5f02\u5e38\u53ca\u89e3\u51b3\u65b9\u6848.md","title":"Redis\u7f13\u5b58\u5e38\u89c1\u5f02\u5e38\u53ca\u89e3\u51b3\u65b9\u6848","description":"\u80cc\u666f\uff1aRedis\u662f\u4e00\u79cd\u6d41\u884c\u7684\u5185\u5b58\u6570\u636e\u7ed3\u6784\u5b58\u50a8\uff0c\u5e7f\u6cdb\u7528\u4f5c\u6570\u636e\u5e93\u3001\u7f13\u5b58\u548c\u6d88\u606f\u4ee3\u7406\u3002Redis \u4e3b\u8981\u7528\u6765\u505a\u7f13\u5b58\u4f7f\u7528\uff0c\u5728\u63d0\u9ad8\u6570\u636e\u67e5\u8be2\u6548\u7387\u3001\u4fdd\u62a4\u6570\u636e\u5e93\u7b49\u65b9\u9762\u8d77\u5230\u4e86\u5173\u952e\u6027\u7684\u4f5c\u7528\uff0c\u5f88\u5927\u7a0b\u5ea6\u4e0a\u63d0\u9ad8\u7cfb\u7edf\u7684\u6027\u80fd\u3002\u5f53\u7136\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\uff0c\u4e5f\u4f1a\u51fa\u73b0\u4e00\u4e9b\u5f02\u5e38\u60c5\u666f\uff0c\u5bfc\u81f4 Redis \u5931\u53bb\u7f13\u5b58\u4f5c\u7528\u3002","date":"2022-12-27T00:00:00.000Z","tags":[{"inline":false,"label":"\u4e2d\u95f4\u4ef6","permalink":"/blog/tags/zhongjianjian","description":"\u5173\u4e8e\u4e2d\u95f4\u4ef6\u76f8\u5173\u7684\u8bdd\u9898"},{"inline":false,"label":"Redis","permalink":"/blog/tags/redis","description":"\u5173\u4e8eRedis\u7684\u76f8\u5173\u5185\u5bb9"}],"readingTime":14.255,"hasTruncateMarker":false,"authors":[{"name":"\u5b63\u51a0\u81e3","title":"\u540e\u7aef\u7814\u53d1\u5de5\u7a0b\u5e08","url":"https://github.com/jachen99","page":{"permalink":"/blog/authors/jiguanchen"},"socials":{"github":"https://github.com/jachen99"},"imageURL":"https://github.com/jachen99.png","key":"jiguanchen"}],"frontMatter":{"slug":"talk-about-redis-cache-exceptions-and-solutions","title":"Redis\u7f13\u5b58\u5e38\u89c1\u5f02\u5e38\u53ca\u89e3\u51b3\u65b9\u6848","authors":["jiguanchen"],"tags":["zhongjianjian","redis"]},"unlisted":false,"prevItem":{"title":"\u670d\u52a1\u6cbb\u7406\u4e4bNacos","permalink":"/blog/product-nacos-service-management"},"nextItem":{"title":"jedis\u5b9e\u64cdredisAPI","permalink":"/blog/talk-about-redis-api"}}')}}]);