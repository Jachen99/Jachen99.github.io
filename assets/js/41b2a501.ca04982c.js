"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[3453],{58321:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>h,contentTitle:()=>c,default:()=>a,frontMatter:()=>d,metadata:()=>s,toc:()=>t});var s=l(89141),i=l(74848),r=l(28453);const d={slug:"product-management-system",title:"SQL\u4f18\u5316\u79ef\u7d2f\u7b14\u8bb0",authors:["jiguanchen"],tags:["shujuku","mysql"]},c=void 0,h={authorsImageUrls:[void 0]},t=[{value:"or\u4e0eunion\u7684\u6267\u884c\u6548\u7387\u6bd4\u8f83",id:"or\u4e0eunion\u7684\u6267\u884c\u6548\u7387\u6bd4\u8f83",level:2},{value:"shell\u811a\u672c\u6279\u91cf\u63d2\u5165mock\u6570\u636e",id:"shell\u811a\u672c\u6279\u91cf\u63d2\u5165mock\u6570\u636e",level:2},{value:"\u7ebf\u4e0a\u8c03\u4f18-\u6162\u67e5\u8be2\u65e5\u5fd7\u914d\u7f6e",id:"\u7ebf\u4e0a\u8c03\u4f18-\u6162\u67e5\u8be2\u65e5\u5fd7\u914d\u7f6e",level:2},{value:"sql\u8bed\u53e5\u6267\u884c\u8fc7\u7a0b\u89e3\u6790",id:"sql\u8bed\u53e5\u6267\u884c\u8fc7\u7a0b\u89e3\u6790",level:2},{value:"\u8bbe\u8ba1\u8868\u7684NULL\u503c\u95ee\u9898",id:"\u8bbe\u8ba1\u8868\u7684null\u503c\u95ee\u9898",level:2},{value:"\u5173\u8054\u67e5\u8be2\u4f18\u5316",id:"\u5173\u8054\u67e5\u8be2\u4f18\u5316",level:2},{value:"\u5b50\u67e5\u8be2\u4f18\u5316",id:"\u5b50\u67e5\u8be2\u4f18\u5316",level:2},{value:"\u6570\u636e\u5e93\u8868\u8bbe\u8ba1",id:"\u6570\u636e\u5e93\u8868\u8bbe\u8ba1",level:2}];function o(n){const e={a:"a",code:"code",em:"em",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u80cc\u666f"}),"\uff1a",(0,i.jsx)(e.em,{children:"\u56e0\u4e3a\u65e5\u5e38\u5de5\u4f5c\u548c\u5b66\u4e60\u4e2d\u96be\u514d\u4f1a\u4e0e\u6570\u636e\u5e93\u6253\u4ea4\u9053\uff0c\u5176\u4e2d\u5982\u4f55\u5feb\u901f\u7684\u4ece\u5e9e\u5927\u7684\u6570\u636e\u5e93\u4e2d\u7cbe\u51c6\u7684\u67e5\u627e\u5230\u6211\u4eec\u60f3\u8981\u7684\u4fe1\u606f\u4e00\u76f4\u662f\u5f88\u70ed\u7684\u8bdd\u9898\uff0c\u6240\u4ee5\u5199\u4e0b\u6b64\u7bc7\u7b14\u8bb0\uff0c\u4ea6\u5728\u4e0d\u65ad\u5730\u79ef\u7d2f\u6709\u5173\u6570\u636e\u5e93\u67e5\u8be2\u4f18\u5316\u65b9\u9762\u7684\u7ecf\u9a8c\uff0c\u4ece\u800c\u80fd\u9ad8\u6548\u7684\u4f7f\u6570\u636e\u4f20\u9012\u7ed9\u5916\u754c\uff0c\u7ed9\u7528\u6237\u66f4\u597d\u7684\u4f53\u9a8c\uff0c\u8fd9\u7bc7\u6587\u7ae0\u4f1a\u4e00\u76f4\u66f4\u65b0\u4e0b\u53bb"}),"\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"or\u4e0eunion\u7684\u6267\u884c\u6548\u7387\u6bd4\u8f83",children:"or\u4e0eunion\u7684\u6267\u884c\u6548\u7387\u6bd4\u8f83"}),"\n",(0,i.jsxs)(e.p,{children:["stackoverflow\u94fe\u63a5: ",(0,i.jsx)(e.a,{href:"https://leetcode.cn/link/?target=https://stackoverflow.com/questions/13750475/sql-performance-union-vs-or%EF%BC%89",children:"https://stackoverflow.com/questions/13750475/sql-performance-union-vs-or\uff09"})]}),"\n",(0,i.jsx)(e.p,{children:"\u5f53SQL\u8bed\u53e5\u6709\u591a\u4e2aor\u8bed\u53e5\u65f6\uff0c\u53ef\u4ee5\u8003\u8651\u4f7f\u7528union\u6216\u8005union all\u4ee3\u66ff\u6765\u63d0\u9ad8\u901f\u5ea6\u3002\u4f7f\u7528or\u7684SQL\u8bed\u53e5\u5f80\u5f80\u65e0\u6cd5\u8fdb\u884c\u4f18\u5316\uff0c\u5bfc\u81f4\u901f\u5ea6\u53d8\u6162\u3002\u4f46\u8fd9\u4e0d\u662f\u56fa\u5b9a\u7684\uff0c\u6709\u65f6\u5019\u4f7f\u7528or\u901f\u5ea6\u4f1a\u66f4\u5feb\u4e9b\u3002\u5177\u4f53\u60c5\u51b5\u8fd8\u8981\u7ecf\u8fc7\u6d4b\u8bd5\u4e3a\u51c6\u3002\u5982\u679c\u52a0\u7d22\u5f15\u7684\u8bdd\uff0c\u4e5f\u53ef\u80fd\u5b9e\u73b0\u901f\u5ea6\u4f18\u5316\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5b9e\u9a8c\u8868\u683c\u5982\u4e0b,\u5b9e\u9645\u6570\u636e\u67092,000,000\u6761\uff0c\u4ece\u91cc\u9762\u8fd4\u56de\u5927\u7ea6\u6700\u591a1000\u884c\u5de6\u53f3\u7684\u6570\u636e\u3002"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"X"}),(0,i.jsx)(e.th,{children:"Y"}),(0,i.jsx)(e.th,{children:"Inline"}),(0,i.jsx)(e.th,{children:"CDP"}),(0,i.jsx)(e.th,{children:"T"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"12002400"}),(0,i.jsx)(e.td,{children:"5801000"}),(0,i.jsx)(e.td,{children:"300"}),(0,i.jsx)(e.td,{children:"300"}),(0,i.jsx)(e.td,{children:"3400"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"12002408"}),(0,i.jsx)(e.td,{children:"5801005"}),(0,i.jsx)(e.td,{children:"300"}),(0,i.jsx)(e.td,{children:"301"}),(0,i.jsx)(e.td,{children:"3402"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"12002416"}),(0,i.jsx)(e.td,{children:"5801010"}),(0,i.jsx)(e.td,{children:"300"}),(0,i.jsx)(e.td,{children:"302"}),(0,i.jsx)(e.td,{children:"3404"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"12002424"}),(0,i.jsx)(e.td,{children:"5801015"}),(0,i.jsx)(e.td,{children:"300"}),(0,i.jsx)(e.td,{children:"303"}),(0,i.jsx)(e.td,{children:"3406"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"..."}),(0,i.jsx)(e.td,{children:"..."}),(0,i.jsx)(e.td,{children:"..."}),(0,i.jsx)(e.td,{children:"..."}),(0,i.jsx)(e.td,{children:"..."})]})]})]}),"\n",(0,i.jsx)(e.p,{children:"or\u8bed\u53e5\uff08\u90e8\u5206\u8282\u9009\uff09"}),"\n",(0,i.jsx)(e.p,{children:"SELECT * FROM tablename where (cdp= 300 and inline=301) or (cdp= 301 and inline=301) or (cdp= 302 and inline=301) or (cdp= 303 and inline=301) or (cdp= 304 and inline=301) or (cdp= 305 and inline=301) or (cdp= 306 and inline=301) or (cdp= 307 and inline=301)"}),"\n",(0,i.jsx)(e.p,{children:"union all\u8bed\u53e5\uff08\u90e8\u5206\u8282\u9009\uff09"}),"\n",(0,i.jsx)(e.p,{children:"SELECT * FROM tablename where (inline= 300 and cdp=300) union all SELECT * FROM tablename where (inline= 301 and cdp=300) union all SELECT * FROM tablename where (inline= 302 and cdp=300) union all SELECT * FROM tablename where (inline= 303 and cdp=300)\n\u8fd4\u56de\u4e0d\u89c4\u5219\u7684900\u6761\u6570\u636e\uff0c\u524d\u8005\u7528\u4e8660\u591a\u79d2\uff0c\u540e\u8005\u7528\u4e868\u79d2\u5de6\u53f3\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u603b\u7ed3\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"Union\uff1a\u5bf9\u4e24\u4e2a\u7ed3\u679c\u96c6\u8fdb\u884c\u5e76\u96c6\u64cd\u4f5c\uff0c\u4e0d\u5305\u62ec\u91cd\u590d\u884c\uff0c\u540c\u65f6\u8fdb\u884c\u9ed8\u8ba4\u89c4\u5219\u7684\u6392\u5e8f\uff1b \u5373\uff1a\u53bb\u91cd+\u6392\u5e8f"}),"\n",(0,i.jsx)(e.li,{children:"Union All\uff1a\u5bf9\u4e24\u4e2a\u7ed3\u679c\u96c6\u8fdb\u884c\u5e76\u96c6\u64cd\u4f5c\uff0c\u5305\u62ec\u91cd\u590d\u884c\uff0c\u4e0d\u8fdb\u884c\u6392\u5e8f\uff1b \u5373\uff1a\u4e0d\u53bb\u91cd+\u4e0d\u6392\u5e8f"}),"\n",(0,i.jsx)(e.li,{children:"\u5bf9\u4e8e\u5355\u5217\u6765\u8bf4\uff0c\u7528or\u662f\u6ca1\u6709\u4efb\u4f55\u95ee\u9898\u7684\uff0c\u4f46\u662for\u6d89\u53ca\u5230\u591a\u4e2a\u5217\u7684\u65f6\u5019\uff0c\u6bcf\u6b21select\u53ea\u80fd\u9009\u53d6\u4e00\u4e2aindex\uff0c\u5982\u679c\u9009\u62e9\u4e86area\uff0cpopulation\u5c31\u9700\u8981\u8fdb\u884ctable-scan\uff0c\u5373\u5168\u90e8\u626b\u63cf\u4e00\u904d\uff0c\u4f46\u662f\u4f7f\u7528union\u5c31\u53ef\u4ee5\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u5206\u522b\u4f7f\u7528area\u548cpopulation\u4e0a\u9762\u7684index\u8fdb\u884c\u67e5\u8be2\u3002 \u4f46\u662f\u8fd9\u91cc\u8fd8\u4f1a\u6709\u4e00\u4e2a\u95ee\u9898\u5c31\u662f\uff0cUNION\u4f1a\u5bf9\u7ed3\u679c\u8fdb\u884c\u6392\u5e8f\u53bb\u91cd\uff0c\u53ef\u80fd\u4f1a\u964d\u4f4e\u4e00\u4e9bperformance(\u8fd9\u6709\u53ef\u80fd\u662f\u65b9\u6cd5\u4e00\u6bd4\u65b9\u6cd5\u4e8c\u5feb\u7684\u539f\u56e0\uff09\uff0c\u6240\u4ee5\u6700\u4f73\u7684\u9009\u62e9\u5e94\u8be5\u662f\u4e24\u79cd\u65b9\u6cd5\u90fd\u8fdb\u884c\u5c1d\u8bd5\u6bd4\u8f83\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"2023/02/09"}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"shell\u811a\u672c\u6279\u91cf\u63d2\u5165mock\u6570\u636e",children:"shell\u811a\u672c\u6279\u91cf\u63d2\u5165mock\u6570\u636e"}),"\n",(0,i.jsx)(e.p,{children:"shell\u811a\u672c"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"#!/bin/bash\necho \"\u8bf7\u8f93\u5165\u5b57\u6bb5servnumber\u7684\u503c\uff1a\"\nread serber\necho \"\u8bf7\u8f93\u5165\u521b\u5efasql\u8bed\u53e5\u7684\u6570\u91cf\uff1a\"\nread number\n# char=`head /dev/urandom | tr -dc 0-9 | head -c 11`\nfor (( i=0;i<$number;i++ ))\n        do\n        pass=`head /dev/urandom | tr -dc a-z | head -c 8`\n        let serber=serber+1\n        echo \"insert into test(id,username,servnumber,password,createtime) values('$i','user${i}','${serber}','$pass',now());\" >>sql1.txt\n   \n     done\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u5c3d\u91cf\u907f\u514d\u4f7f\u7528select *from \uff0c\u5c3d\u91cf\u7cbe\u786e\u5230\u60f3\u8981\u7684\u7ed3\u679c\u5b57\u6bb5\u3002\n\u5c3d\u91cf\u907f\u514d\u6761\u4ef6\u4f7f\u7528or\u3002\n\u8bb0\u5f97\u52a0\u4e0alimit \u9650\u5236\u884c\u6570\uff0c\u907f\u514d\u6570\u636e\u91cf\u8fc7\u5927\u6d88\u8017\u6027\u80fd\u3002\n\u4f7f\u7528\u6a21\u7cca\u67e5\u8be2\u65f6\uff0c%\u653e\u5728\u524d\u9762\u662f\u4f1a\u4f7f\u7d22\u5f15\u5931\u6548\u3002\n\u8981\u5c0f\u5fc3\u6761\u4ef6\u5b57\u6bb5\u7c7b\u578b\u7684\u8f6c\u6362\u3002"}),"\n",(0,i.jsx)(e.p,{children:"2023/02/11"}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"\u7ebf\u4e0a\u8c03\u4f18-\u6162\u67e5\u8be2\u65e5\u5fd7\u914d\u7f6e",children:"\u7ebf\u4e0a\u8c03\u4f18-\u6162\u67e5\u8be2\u65e5\u5fd7\u914d\u7f6e"}),"\n",(0,i.jsx)(e.p,{children:"\u6700\u597d nginxi\u8bbf\u95ee\u65e5\u5fd7\uff0c\u6d41\u91cf\u91cd\u653e\u5728\u6d4b\u8bd5\u73af\u5883\u4e2d\uff1b\u8feb\u4e0d\u5f97\u5df2\u518d\u7ebf\u4e0a\u8c03"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7b2c\u4e00\u6b65\uff1a\u67e5\u770b\u662f\u5426\u5df2\u7ecf\u5f00\u542f\u4e86\u6162\u67e5\u8be2\u65e5\u5fd7"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"mysql> show variables like 'slow%';\n+---------------------+--------------------------------------+\n| Variable_name       | Value                                |\n+---------------------+--------------------------------------+\n| slow_launch_time    | 2                                    |\n| slow_query_log      | OFF                                  |\n| slow_query_log_file | /data/mydata/jachen-public-slow.log |\n+---------------------+--------------------------------------+\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7b2c\u4e8c\u6b65\uff1a\u5f00\u542f\u6162\u67e5\u8be2\u65e5\u5fd7"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"set global slow_query_log = on ;\n\n\u65e5\u5fd7\u8def\u5f84\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\uff1a\n\nset global slow_query_log_file = '\u8def\u5f84';\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7b2c\u4e09\u6b65\uff1a\u67e5\u770b\u6162\u67e5\u8be2\u7684\u65f6\u95f4\u4e34\u754c\u503c"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"show variables like '%long%';\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7b2c\u56db\u6b65\uff1a\u8bbe\u7f6e\u6162\u67e5\u8be2\u7684\u65f6\u95f4\u6807\u51c6"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"set long_query_time=0.4;\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u6ce8\u610f\uff1a\u5047\u5982\u8fd0\u884c\u65f6\u95f4\u6b63\u597d\u7b49\u4e8elong_query_time\u7684\u60c5\u51b5\uff0c\u5e76\u4e0d\u4f1a\u88ab\u8bb0\u5f55\u4e0b\u6765\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5728mysql\u6e90\u7801\u91cc\u662f\u5224\u65ad\u5927\u4e8elong_query_time\uff0c\u800c\u975e\u5927\u4e8e\u7b49\u4e8e\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"\u6c38\u4e45\u751f\u6548\u7684\u8bbe\u7f6e\u65b9\u6cd5\uff1a\u4fee\u6539\u914d\u7f6e\u6587\u4ef6 vi /etc/my.cnf\n[mysqld]\nslow_query_log = 1\nlong_query_time = 0.1\nslow_query_log_file =/usr/local/mysql/mysql_slow.log\n\n\u6700\u540e\u91cd\u65b0\u8fde\u63a5\u624d\u80fd\u751f\u6548\uff0c\u4e0d\u5fc5\u91cd\u542f\u670d\u52a1\u5668\uff01\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u6267\u884c\u8017\u65f6sql\uff1a"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"SELECT * FROM emp;\nSELECT * FROM emp WHERE deptid > 1;\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u67e5\u8be2\u6162\u67e5\u8be2\u8bb0\u5f55\u6570\uff1a"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SHOW GLOBAL STATUS LIKE '%Slow_queries%'; \n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u67e5\u8be2\u65e5\u5fd7\uff1a"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"vim /var/lib/mysql/bogon-slow.log\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"mysqldumpslow\u5206\u6790\u5de5\u5177\uff1a"})}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u5982\u679c\u8981\u624b\u5de5\u5206\u6790\u65e5\u5fd7\uff0c\u67e5\u627e\u3001\u5206\u6790SQL\uff0c\u663e\u7136\u662f\u4e2a\u4f53\u529b\u6d3b\uff0cMySQL\u63d0\u4f9b\u4e86\u65e5\u5fd7\u5206\u6790\u5de5\u5177mysqldumpslow\u3002\u9000\u51famysql\u547d\u4ee4\u884c\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'-- \u67e5\u770bmysqldumpslow\u7684\u5e2e\u52a9\u4fe1\u606f\nmysqldumpslow --help\n\n-- \u5de5\u4f5c\u5e38\u7528\u53c2\u8003\n-- 1.\u5f97\u5230\u8fd4\u56de\u8bb0\u5f55\u96c6\u6700\u591a\u768410\u4e2aSQL\nmysqldumpslow -s r -t 10 /var/lib/mysql/bogon-slow.log\n-- 2.\u5f97\u5230\u8bbf\u95ee\u6b21\u6570\u6700\u591a\u768410\u4e2aSQL\nmysqldumpslow -s c -t 10 /var/lib/mysql/bogon-slow.log\n-- 3.\u5f97\u5230\u6309\u7167\u65f6\u95f4\u6392\u5e8f\u7684\u524d10\u6761\u91cc\u9762\u542b\u6709\u5de6\u8fde\u63a5\u7684\u67e5\u8be2\u8bed\u53e5\nmysqldumpslow -s t -t 10 -g "left join" /var/lib/mysql/bogon-slow.log\n-- 4.\u53e6\u5916\u5efa\u8bae\u5728\u4f7f\u7528\u8fd9\u4e9b\u547d\u4ee4\u65f6\u7ed3\u5408 | \u548cmore \u4f7f\u7528 \uff0c\u5426\u5219\u6709\u53ef\u80fd\u51fa\u73b0\u7206\u5c4f\u60c5\u51b5\nmysqldumpslow -s r -t 10 /var/lib/mysql/bogon-slow.log | more\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"-a: \u5c06\u6570\u5b57\u62bd\u8c61\u6210N\uff0c\u5b57\u7b26\u4e32\u62bd\u8c61\u6210S"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"-s: \u662f\u8868\u793a\u6309\u7167\u4f55\u79cd\u65b9\u5f0f\u6392\u5e8f"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["c: \u8bbf\u95ee\u6b21\u6570","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"l: \u9501\u5b9a\u65f6\u95f4"}),"\n",(0,i.jsx)(e.li,{children:"r: \u8fd4\u56de\u8bb0\u5f55"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"t: \u67e5\u8be2\u65f6\u95f4"}),"\n",(0,i.jsx)(e.li,{children:"al:\u5e73\u5747\u9501\u5b9a\u65f6\u95f4"}),"\n",(0,i.jsx)(e.li,{children:"ar:\u5e73\u5747\u8fd4\u56de\u8bb0\u5f55\u6570"}),"\n",(0,i.jsx)(e.li,{children:"at:\u5e73\u5747\u67e5\u8be2\u65f6\u95f4"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"-t: \u5373\u4e3a\u8fd4\u56de\u524d\u9762\u591a\u5c11\u6761\u7684\u6570\u636e"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"-g: \u540e\u8fb9\u642d\u914d\u4e00\u4e2a\u6b63\u5219\u5339\u914d\u6a21\u5f0f\uff0c\u5927\u5c0f\u5199\u4e0d\u654f\u611f\u7684"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"2023/02/15"}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"sql\u8bed\u53e5\u6267\u884c\u8fc7\u7a0b\u89e3\u6790",children:"sql\u8bed\u53e5\u6267\u884c\u8fc7\u7a0b\u89e3\u6790"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"image-20230223160243626",src:l(27441).A+"",width:"1081",height:"132"})}),"\n",(0,i.jsx)(e.p,{children:"\u4ecb\u7ecd\u5982\u4f55\u5f00\u542f\u6027\u80fd\u8be6\u60c5"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7b2c\u4e00\u6b65\uff1a\u67e5\u770b\u6027\u80fd\u8be6\u60c5\u662f\u5426\u5f00\u542f"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"mysql> show variables like '%profiling%';\n+------------------------+-------+\n| Variable_name          | Value |\n+------------------------+-------+\n| have_profiling         | YES   |\n| profiling              | OFF   |\n| profiling_history_size | 15    |\n+------------------------+-------+\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7b2c\u4e8c\u6b65\uff1a\u5f00\u542f\u6027\u80fd\u8bb0\u5f55\u529f\u80fd"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"set profiling = on ;\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7b2c\u4e09\u6b65\uff1a\u67e5\u770b\u6027\u80fd\u7684\u8bb0\u5f55"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"mysql> show profiles;\n+----------+------------+---------------------------------------------------+\n| Query_ID | Duration   | Query                                             |\n+----------+------------+---------------------------------------------------+\n|        1 | 0.00177775 | show variables like '%profiling%'                 |\n|        2 | 0.00037900 | select * from test where id='087878'              |\n|        3 | 0.34618025 | select * from test where servnumber='1367008787'  |\n|        4 | 0.31986825 | select * from test where servnumber='13670087879' |\n+----------+------------+---------------------------------------------------+\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7b2c\u56db\u6b65\uff1a\u67e5\u770b\u8bed\u53e5\u7684\u6267\u884c\u6027\u80fd\u8be6\u60c5"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"mysql> show profile for query 4;\n+----------------------+----------+\n| Status               | Duration |\n+----------------------+----------+\n| starting             | 0.000100 |\n| checking permissions | 0.000010 |\n| Opening tables       | 0.000023 |\n| init                 | 0.000045 |\n| System lock          | 0.000015 |\n| optimizing           | 0.000016 |\n| statistics           | 0.000028 |\n| preparing            | 0.000020 |\n| executing            | 0.000006 |\n| Sending data         | 0.319489 |\n| end                  | 0.000037 |\n| query end            | 0.000012 |\n| closing tables       | 0.000012 |\n| freeing items        | 0.000040 |\n| cleaning up          | 0.000017 |\n+----------------------+----------+\n"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"\u6027\u80fd\u7ebf\u7a0b\u7684\u8be6\u7ec6\u89e3\u91ca\u5b98\u65b9\u6587\u6863\u94fe\u63a5"}),"\uff1a",(0,i.jsx)(e.a,{href:"https://dev.mysql.com/doc/refman/5.7/en/general-thread-states.html",children:"https://dev.mysql.com/doc/refman/5.7/en/general-thread-states.html"})]}),"\n",(0,i.jsx)(e.p,{children:"2023/02/16"}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"\u8bbe\u8ba1\u8868\u7684null\u503c\u95ee\u9898",children:"\u8bbe\u8ba1\u8868\u7684NULL\u503c\u95ee\u9898"}),"\n",(0,i.jsx)(e.p,{children:"1\u3001\u5b57\u6bb5\u4e0d\u6dfb\u52a0null  \u90fd\u662fnot null\uff0c\u9ed8\u8ba4\u503c"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"image-20230222093720407",src:l(22492).A+"",width:"960",height:"93"})}),"\n",(0,i.jsx)(e.p,{children:"2\u3001\u628a\u5b57\u6bb5\u90fd\u8bbe\u7f6e\u4e3anot null \uff0c\u6dfb\u52a0\u7279\u6b8a\u5b57\u6bb5\uff0c\u628a\u6570\u636e\u5b58\u50a8j\u4e3aJSON\u683c\u5f0f  "}),"\n",(0,i.jsx)(e.p,{children:"2023/02/18"}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"\u5173\u8054\u67e5\u8be2\u4f18\u5316",children:"\u5173\u8054\u67e5\u8be2\u4f18\u5316"}),"\n",(0,i.jsx)(e.p,{children:"1\u3001\u4fdd\u8bc1\u88ab\u9a71\u52a8\u8868\u7684JOIN\u5b57\u6bb5\u5df2\u7ecf\u521b\u5efa\u4e86\u7d22\u5f15\n2\u3001\u9700\u8981JOIN \u7684\u5b57\u6bb5\uff0c\u6570\u636e\u7c7b\u578b\u4fdd\u6301\u7edd\u5bf9\u4e00\u81f4\u3002\n3\u3001LEFT JOIN \u65f6\uff0c\u9009\u62e9\u5c0f\u8868\u4f5c\u4e3a\u9a71\u52a8\u8868\uff0c\u5927\u8868\u4f5c\u4e3a\u88ab\u9a71\u52a8\u8868 \u3002\u51cf\u5c11\u5916\u5c42\u5faa\u73af\u7684\u6b21\u6570\u3002\n4\u3001INNER JOIN \u65f6\uff0cMySQL\u4f1a\u81ea\u52a8\u5c06\u5c0f\u7ed3\u679c\u96c6\u7684\u8868\u9009\u4e3a\u9a71\u52a8\u8868 \u3002\u9009\u62e9\u76f8\u4fe1MySQL\u4f18\u5316\u7b56\u7565\u3002\n5\u3001\u80fd\u591f\u76f4\u63a5\u591a\u8868\u5173\u8054\u7684\u5c3d\u91cf\u76f4\u63a5\u5173\u8054\uff0c\u4e0d\u7528\u5b50\u67e5\u8be2\u3002(\u51cf\u5c11\u67e5\u8be2\u7684\u8d9f\u6570)\n6\u3001\u4e0d\u5efa\u8bae\u4f7f\u7528\u5b50\u67e5\u8be2\uff0c\u5efa\u8bae\u5c06\u5b50\u67e5\u8be2SQL\u62c6\u5f00\u7ed3\u5408\u7a0b\u5e8f\u591a\u6b21\u67e5\u8be2\uff0c\u6216\u4f7f\u7528 JOIN \u6765\u4ee3\u66ff\u5b50\u67e5\u8be2\u3002\n7\u3001\u884d\u751f\u8868\u5efa\u4e0d\u4e86\u7d22\u5f15"}),"\n",(0,i.jsx)(e.p,{children:"2023/02/19"}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"\u5b50\u67e5\u8be2\u4f18\u5316",children:"\u5b50\u67e5\u8be2\u4f18\u5316"}),"\n",(0,i.jsx)(e.p,{children:"\u4f7f\u7528\u8fde\u63a5\uff08JOIN\uff09\u67e5\u8be2\u6765\u66ff\u4ee3\u5b50\u67e5\u8be2\u3002**\u8fde\u63a5\u67e5\u8be2\u4e0d\u9700\u8981\u5efa\u7acb\u4e34\u65f6\u8868 \uff0c\u5176\u901f\u5ea6\u6bd4\u5b50\u67e5\u8be2 \u8981\u5feb \uff0c\u5982\u679c\u67e5\u8be2\u4e2d\u4f7f\u7528\u7d22\u5f15\u7684\u8bdd\uff0c\u6027\u80fd\u5c31\u4f1a\u66f4\u597d.\n\u4f8b\u5982\uff1a\u5c3d\u91cf\u4e0d\u8981\u4f7f\u7528NOT IN \u6216\u8005 NOT EXISTS\uff0c\u7528LEFT JOIN xxx ON xx WHERE xx IS NULL\u66ff\u4ee3"}),"\n",(0,i.jsx)(e.p,{children:"2023/02/22"}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"\u6570\u636e\u5e93\u8868\u8bbe\u8ba1",children:"\u6570\u636e\u5e93\u8868\u8bbe\u8ba1"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5b57\u6bb5\u957f\u5ea6\uff1a\u80fd\u4f7f\u7528int\u5c31\u4e0d\u8981\u4f7f\u7528varchar\u3001char\uff0c\u80fd\u7528varchar(16)\u5c31\u4e0d\u8981\u4f7f\u7528varchar(256)"}),"\n",(0,i.jsx)(e.li,{children:"\u5b57\u6bb5\u9009\u62e9\uff1a\u56fa\u5b9a\u957f\u5ea6\u7684\u7c7b\u578b\u6700\u597d\u4f7f\u7528char,\u80fd\u4f7f\u7528tinyinti\u5c31\u4e0d\u8981\u4f7f\u7528int"}),"\n",(0,i.jsx)(e.li,{children:"\u9ed8\u8ba4\u503c\uff1a\u6700\u597d\u7ed9\u6bcf\u4e2a\u5b57\u6bb5\u4e2a\u9ed8\u8ba4\u503c\uff0c\u6700\u597d\u4e0d\u80fd\u4e3anull,\u5373not null default"}),"\n",(0,i.jsx)(e.li,{children:"\u9002\u5f53\u7d22\u5f15\uff1a\u4e3a\u6bcf\u4e2a\u8868\u521b\u5efa\u5408\u7406\u7684\u7d22\u5f15\uff0c\u5982\u552f\u4e00\u7d22\u5f15\u7ec4\u5408\u7d22\u5f15\u7684\u573a\u666f\u4ee5\u53ca\u666e\u901a\u7d22\u5f15\u7684\u573a\u666f"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"2023/02/28"}),"\n",(0,i.jsx)(e.hr,{})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},22492:(n,e,l)=>{l.d(e,{A:()=>s});const s=l.p+"assets/images/image-20230222093720407-7ffbef4dda48f5ec8896c86307b97bf1.png"},27441:(n,e,l)=>{l.d(e,{A:()=>s});const s=l.p+"assets/images/image-20230223160243626-852c258d2994473f82bad8ae86bcd5df.png"},28453:(n,e,l)=>{l.d(e,{R:()=>d,x:()=>c});var s=l(96540);const i={},r=s.createContext(i);function d(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),s.createElement(r.Provider,{value:e},n.children)}},89141:n=>{n.exports=JSON.parse('{"permalink":"/blog/product-management-system","editUrl":"https://github.com/Jachen99/Jachen99.github.io/tree/V3.0.0/blog/2023/03-02-SQL\u4f18\u5316\u79ef\u7d2f\u7b14\u8bb0.md","source":"@site/blog/2023/03-02-SQL\u4f18\u5316\u79ef\u7d2f\u7b14\u8bb0.md","title":"SQL\u4f18\u5316\u79ef\u7d2f\u7b14\u8bb0","description":"\u80cc\u666f\uff1a\u56e0\u4e3a\u65e5\u5e38\u5de5\u4f5c\u548c\u5b66\u4e60\u4e2d\u96be\u514d\u4f1a\u4e0e\u6570\u636e\u5e93\u6253\u4ea4\u9053\uff0c\u5176\u4e2d\u5982\u4f55\u5feb\u901f\u7684\u4ece\u5e9e\u5927\u7684\u6570\u636e\u5e93\u4e2d\u7cbe\u51c6\u7684\u67e5\u627e\u5230\u6211\u4eec\u60f3\u8981\u7684\u4fe1\u606f\u4e00\u76f4\u662f\u5f88\u70ed\u7684\u8bdd\u9898\uff0c\u6240\u4ee5\u5199\u4e0b\u6b64\u7bc7\u7b14\u8bb0\uff0c\u4ea6\u5728\u4e0d\u65ad\u5730\u79ef\u7d2f\u6709\u5173\u6570\u636e\u5e93\u67e5\u8be2\u4f18\u5316\u65b9\u9762\u7684\u7ecf\u9a8c\uff0c\u4ece\u800c\u80fd\u9ad8\u6548\u7684\u4f7f\u6570\u636e\u4f20\u9012\u7ed9\u5916\u754c\uff0c\u7ed9\u7528\u6237\u66f4\u597d\u7684\u4f53\u9a8c\uff0c\u8fd9\u7bc7\u6587\u7ae0\u4f1a\u4e00\u76f4\u66f4\u65b0\u4e0b\u53bb\u3002","date":"2023-03-02T00:00:00.000Z","tags":[{"inline":false,"label":"\u6570\u636e\u5e93","permalink":"/blog/tags/shujuku","description":"\u5173\u4e8e\u6570\u636e\u4ed3\u5e93\u76f8\u5173\u7684\u8bdd\u9898"},{"inline":false,"label":"MySQL","permalink":"/blog/tags/mysql","description":"\u5173\u4e8eMySQL\u7684\u76f8\u5173\u5185\u5bb9"}],"readingTime":10.76,"hasTruncateMarker":false,"authors":[{"name":"\u5b63\u51a0\u81e3","title":"\u540e\u7aef\u7814\u53d1\u5de5\u7a0b\u5e08","url":"https://github.com/jachen99","page":{"permalink":"/blog/authors/jiguanchen"},"socials":{"github":"https://github.com/jachen99"},"imageURL":"https://github.com/jachen99.png","key":"jiguanchen"}],"frontMatter":{"slug":"product-management-system","title":"SQL\u4f18\u5316\u79ef\u7d2f\u7b14\u8bb0","authors":["jiguanchen"],"tags":["shujuku","mysql"]},"unlisted":false,"prevItem":{"title":"spring-security\u6574\u5408\u5fae\u670d\u52a1\u5b9e\u8df5","permalink":"/blog/product-spring-security-microservices"},"nextItem":{"title":"\u6df1\u5165\u63a2\u7a76mysql8.x\u53bb\u6389CachesBuffers\u539f\u56e0","permalink":"/blog/mysql-CachesBuffers-reason"}}')}}]);