"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[2929],{732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var s=n(9402),i=n(4848),l=n(8453);const a={slug:"talk-about-transaction-isolation-levels",title:"\u6d45\u8c08\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b",authors:["jiguanchen"],tags:["shujuku","mysql"]},r=void 0,d={authorsImageUrls:[void 0]},c=[{value:"1\u3001\u90a3\u4e48\u7a76\u7adf\u4ec0\u4e48\u662f\u810f\u8bfb\u3001\u5e7b\u8bfb\u548c\u4e0d\u53ef\u91cd\u590d\u8bfb\u5462\uff1f",id:"1\u90a3\u4e48\u7a76\u7adf\u4ec0\u4e48\u662f\u810f\u8bfb\u5e7b\u8bfb\u548c\u4e0d\u53ef\u91cd\u590d\u8bfb\u5462",level:2},{value:"2\u3001\u4ec0\u4e48\u662f\u4e8b\u52a1\u7684\u9694\u79bb\u7ea7\u522b\u5462\uff1f\u5982\u4f55\u67e5\u770b\u9694\u79bb\u7ea7\u522b\uff1f(dos \u547d\u4ee4)",id:"2\u4ec0\u4e48\u662f\u4e8b\u52a1\u7684\u9694\u79bb\u7ea7\u522b\u5462\u5982\u4f55\u67e5\u770b\u9694\u79bb\u7ea7\u522bdos-\u547d\u4ee4",level:2}];function o(e){const t={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.em,{children:[(0,i.jsx)(t.strong,{children:"\u80cc\u666f"}),"\uff1a\u4eca\u5929\u5728\u590d\u4e60\u4e8b\u52a1\u7684\u9694\u79bb\u7ea7\u522b\u7684\u65f6\u5019\u603b\u7ed3\u4e86\u4e00\u4e9b\u65b0\u7684\u60f3\u6cd5\uff0c\u4e4b\u524d\u53ea\u77e5\u9053\u4e8b\u52a1\u7684\u9694\u79bb\u7ea7\u522b\u5206\u4e3a\u8bfb\u672a\u63d0\u4ea4\u3001\u8bfb\u5df2\u63d0\u4ea4\u3001\u53ef\u91cd\u590d\u8bfb\u3001\u5e8f\u5217\u5316\u56db\u4e2a\u9694\u79bb\u7ea7\u522b\uff0c\u800c\u5728\u5e76\u53d1\u8fd0\u884c\u4e2d\uff0c\u51fa\u73b0\u7684\u9694\u79bb\u7ea7\u522b\u4e2d\u7684\u810f\u8bfb\u3001\u5e7b\u8bfb\u548c\u4e0d\u53ef\u91cd\u590d\u8bfb\u7684\u533a\u522b\uff0c\u4ee5\u53ca\u4ed6\u4eec\u7684\u89e6\u53d1\u6761\u4ef6\u4e0d\u662f\u5f88\u6e05\uff0c\u7ecf\u8fc7\u4e86\u4e00\u756a\u6298\u817e\uff0c\u8fd9\u91cc\u603b\u7ed3\u4e86\u4e00\u4e9b\u60f3\u6cd5\u3002"]})}),"\n",(0,i.jsx)(t.h2,{id:"1\u90a3\u4e48\u7a76\u7adf\u4ec0\u4e48\u662f\u810f\u8bfb\u5e7b\u8bfb\u548c\u4e0d\u53ef\u91cd\u590d\u8bfb\u5462",children:"1\u3001\u90a3\u4e48\u7a76\u7adf\u4ec0\u4e48\u662f\u810f\u8bfb\u3001\u5e7b\u8bfb\u548c\u4e0d\u53ef\u91cd\u590d\u8bfb\u5462\uff1f"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\u810f\u8bfb\uff1a\u4e00\u4e2a\u4e8b\u52a1\u8bfb\u53d6\u4e86\u53e6\u4e00\u4e2a\u4e8b\u52a1\u672a\u63d0\u4ea4\u6570\u636e\uff1b"}),"\n",(0,i.jsx)(t.li,{children:"\u4e0d\u53ef\u91cd\u590d\u8bfb\uff1a\u540c\u4e00\u4e2a\u4e8b\u52a1\u4e2d\u524d\u540e\u4e24\u6b21\u8bfb\u53d6\u540c\u4e00\u6761\u8bb0\u5f55\u4e0d\u4e00\u6837\u3002\u56e0\u4e3a\u88ab\u5176\u4ed6\u4e8b\u52a1\u4fee\u6539\u4e86\u5e76\u4e14\u63d0\u4ea4\u4e86\u3002"}),"\n",(0,i.jsx)(t.li,{children:"\u5e7b\u8bfb\uff1a\u4e00\u4e2a\u4e8b\u52a1\u8bfb\u53d6\u4e86\u53e6\u4e00\u4e2a\u4e8b\u52a1\u65b0\u589e\u3001\u5220\u9664\u7684\u8bb0\u5f55\u60c5\u51b5\uff0c\u8bb0\u5f55\u6570\u4e0d\u4e00\u6837\uff0c\u50cf\u662f\u51fa\u73b0\u5e7b\u89c9\u3002"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"2\u4ec0\u4e48\u662f\u4e8b\u52a1\u7684\u9694\u79bb\u7ea7\u522b\u5462\u5982\u4f55\u67e5\u770b\u9694\u79bb\u7ea7\u522bdos-\u547d\u4ee4",children:"2\u3001\u4ec0\u4e48\u662f\u4e8b\u52a1\u7684\u9694\u79bb\u7ea7\u522b\u5462\uff1f\u5982\u4f55\u67e5\u770b\u9694\u79bb\u7ea7\u522b\uff1f(dos \u547d\u4ee4)"}),"\n",(0,i.jsxs)(t.p,{children:["\u4e8b\u52a1\u9694\u79bb\u662f\u6570\u636e\u5e93\u5904\u7406\u7684\u57fa\u7840\u4e4b\u4e00\u3002\u9694\u79bb\u662f\u9996\u5b57\u6bcd\u7f29\u7565\u8bcd ",(0,i.jsx)(t.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/glossary.html#glos_acid",children:"ACID"}),"\u4e2d\u7684 I \uff1b\u9694\u79bb\u7ea7\u522b\u662f\u5728\u591a\u4e2a\u4e8b\u52a1\u540c\u65f6\u8fdb\u884c\u66f4\u6539\u548c\u6267\u884c\u67e5\u8be2\u65f6\u5fae\u8c03\u6027\u80fd\u4e0e\u7ed3\u679c\u7684\u53ef\u9760\u6027\u3001\u4e00\u81f4\u6027\u548c\u53ef\u518d\u73b0\u6027\u4e4b\u95f4\u7684\u5e73\u8861\u7684\u8bbe\u7f6e\u3002"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-mysql",children:"/*\r\nmysql\u652f\u6301\u56db\u4e2a\u9694\u79bb\u7ea7\u522b\uff1a\r\nread-uncommitted\uff1a\u4f1a\u51fa\u73b0\u810f\u8bfb\u3001\u4e0d\u53ef\u91cd\u590d\u8bfb\u3001\u5e7b\u8bfb\r\nread-committed\uff1a\u53ef\u4ee5\u907f\u514d\u810f\u8bfb\uff0c\u4f1a\u51fa\u73b0\u4e0d\u53ef\u91cd\u590d\u8bfb\u3001\u5e7b\u8bfb\r\nrepeatable-read\uff1a\u53ef\u4ee5\u907f\u514d\u810f\u8bfb\u3001\u4e0d\u53ef\u91cd\u590d\u8bfb\u3001\u5e7b\u8bfb\u3002\u4f46\u662f\u4e24\u4e2a\u4e8b\u52a1\u4e0d\u80fd\u64cd\u4f5c\uff08\u5199update,delete\uff09\u540c\u4e00\u4e2a\u884c\u3002\r\nserializable\uff1a\u53ef\u4ee5\u907f\u514d\u810f\u8bfb\u3001\u4e0d\u53ef\u91cd\u590d\u8bfb\u3001\u5e7b\u8bfb\u3002\u4f46\u662f\u4e24\u4e2a\u4e8b\u52a1\u4e0d\u80fd\u64cd\u4f5c\uff08\u5199update,delete\uff09\u540c\u4e00\u4e2a\u8868\u3002\r\n\r\n\u4fee\u6539\u9694\u79bb\u7ea7\u522b\uff1a\r\nset transaction_isolation='\u9694\u79bb\u7ea7\u522b';  \r\n#mysql8\u4e4b\u524d transaction_isolation\u53d8\u91cf\u540d\u662f tx_isolation\r\n\r\n\u67e5\u770b\u9694\u79bb\u7ea7\u522b\uff1a\r\nselect @@transaction_isolation; \u9ed8\u8ba4\u4e3a\uff1arepeatable-read\u53ef\u91cd\u590d\u8bfb\r\n*/\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"\u6570\u636e\u5e93\u63d0\u4f9b\u7684 4 \u79cd\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b\uff1a"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"\u9694\u79bb\u7ea7\u522b"}),(0,i.jsx)(t.th,{children:"\u63cf\u8ff0"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"read-uncommitted"}),(0,i.jsx)(t.td,{children:"\u5141\u8bb8A\u4e8b\u52a1\u8bfb\u53d6\u5176\u4ed6\u4e8b\u52a1\u672a\u63d0\u4ea4\u548c\u5df2\u63d0\u4ea4\u7684\u6570\u636e\u3002\u4f1a\u51fa\u73b0\u810f\u8bfb\u3001\u4e0d\u53ef\u91cd\u590d\u8bfb\u3001\u5e7b\u8bfb\u95ee\u9898"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"read-committed"}),(0,i.jsx)(t.td,{children:"\u53ea\u5141\u8bb8A\u4e8b\u52a1\u8bfb\u53d6\u5176\u4ed6\u4e8b\u52a1\u5df2\u63d0\u4ea4\u7684\u6570\u636e\u3002\u53ef\u4ee5\u907f\u514d\u810f\u8bfb\uff0c\u4f46\u4ecd\u7136\u4f1a\u51fa\u73b0\u4e0d\u53ef\u91cd\u590d\u8bfb\u3001\u5e7b\u8bfb\u95ee\u9898"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"repeatable-read"}),(0,i.jsx)(t.td,{children:"\u786e\u4fdd\u4e8b\u52a1\u53ef\u4ee5\u591a\u6b21\u4ece\u4e00\u4e2a\u5b57\u6bb5\u4e2d\u8bfb\u53d6\u76f8\u540c\u7684\u503c\u3002\u5728\u8fd9\u4e2a\u4e8b\u52a1\u6301\u7eed\u671f\u95f4\uff0c\u7981\u6b62\u5176\u4ed6\u4e8b\u52a1\u5bf9\u8fd9\u4e2a\u5b57\u6bb5\u8fdb\u884c\u66f4\u65b0\u3002\u53ef\u4ee5\u907f\u514d\u810f\u8bfb\u548c\u4e0d\u53ef\u91cd\u590d\u8bfb\u3002\u4f46\u662f\u5e7b\u8bfb\u95ee\u9898\u4ecd\u7136\u5b58\u5728\u3002\u6ce8\u610f\uff1amysql\u4e2d\u4f7f\u7528\u4e86MVCC\u591a\u7248\u672c\u63a7\u5236\u6280\u672f\uff0c\u5728\u8fd9\u4e2a\u7ea7\u522b\u4e5f\u53ef\u4ee5\u907f\u514d\u5e7b\u8bfb\u3002"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"serializable"}),(0,i.jsx)(t.td,{children:"\u786e\u4fdd\u4e8b\u52a1\u53ef\u4ee5\u4ece\u4e00\u4e2a\u8868\u4e2d\u8bfb\u53d6\u76f8\u540c\u7684\u884c\uff0c\u76f8\u540c\u7684\u8bb0\u5f55\u3002\u5728\u8fd9\u4e2a\u4e8b\u52a1\u6301\u7eed\u671f\u95f4\uff0c\u7981\u6b62\u5176\u4ed6\u4e8b\u52a1\u5bf9\u8be5\u8868\u6267\u884c\u63d2\u5165\u3001\u66f4\u65b0\u3001\u5220\u9664\u64cd\u4f5c\u3002\u6240\u6709\u5e76\u53d1\u95ee\u9898\u90fd\u53ef\u4ee5\u907f\u514d\uff0c\u4f46\u6027\u80fd\u5341\u5206\u4f4e\u4e0b\u3002"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"image-20211202002655521",src:n(7550).A+"",width:"1336",height:"539"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"image-20211202002704464",src:n(3391).A+"",width:"1336",height:"476"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"image-20211202002714841",src:n(8489).A+"",width:"1336",height:"493"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"image-20211202002723256",src:n(5865).A+"",width:"1336",height:"429"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"\u603b\u7ed3"}),"\uff1a"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"\u810f\u8bfb\uff1a\u662f\u5728\u8bfb\u672a\u63d0\u4ea4\u65f6\u53d1\u751f\u7684\uff0c\u4e8b\u52a1A\u8bfb\u53d6\u4e86\u4e8b\u52a1B\u8fd8\u672a\u63d0\u4ea4\u7684\u6570\u636e\uff0c\u662f\u4e00\u79cd\u9519\u8bef\u3002"}),"\n",(0,i.jsx)(t.li,{children:"\u5e7b\u8bfb\uff1a\u53d1\u751f\u5728\u8bfb\u672a\u63d0\u4ea4\u3001\u8bfb\u5df2\u63d0\u4ea4\u548c\u53ef\u91cd\u590d\u8bfb\u7ea7\u522b\u90fd\u4f1a\u51fa\u73b0\uff0c\u5b83\u5f3a\u8c03\u7684\u662f\u8bb0\u5f55\u6570\u4e0d\u4e00\u6837\uff0c\u5373\u589e\u5220\u7684\u60c5\u51b5\u3002\u4e8b\u52a1A\u8bfb\u53d6\u4e86\u4e8b\u52a1B\u5df2\u63d0\u4ea4\u7684\u6570\u636e\uff0c\u53d1\u751f\u4e86\u5e7b\u8bfb\uff0c\u5b83\u4e0d\u662f\u9519\u8bef\u3002"}),"\n",(0,i.jsx)(t.li,{children:"\u4e0d\u53ef\u91cd\u590d\u8bfb\uff1a\u53d1\u751f\u5728\u8bfb\u672a\u63d0\u4ea4\u548c\u8bfb\u5df2\u63d0\u4ea4\u7684\u9694\u79bb\u7ea7\u522b\uff0c\u5b83\u5f3a\u8c03\u7684\u662f\u6570\u636e\u5185\u5bb9\u53d1\u751f\u6539\u53d8\uff0c\u5373\u4fee\u6539\u7684\u60c5\u51b5\u3002\u4e8b\u52a1A\u8bfb\u53d6\u4e86\u4e8b\u52a1B\u5df2\u63d0\u4ea4\u7684\u6570\u636e\uff0c\u4e8b\u52a1A\u524d\u540e\u4e24\u6b21\u8bfb\u53d6\u540c\u4e00\u6761\u8bb0\u5f55\u4e0d\u4e00\u6837\uff0c\u5b83\u4e5f\u4e0d\u662f\u9519\u8bef\u3002"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},7550:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/image-20211202002655521-c351dff0778fbbe99a4f25b7d3b69fe3.png"},3391:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/image-20211202002704464-52b519465267410aefeb172925524fa0.png"},8489:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/image-20211202002714841-a8688cdf8b5e913ec56e5cac6382da3e.png"},5865:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/image-20211202002723256-532094975a1a532ffddc3354ebda749d.png"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var s=n(6540);const i={},l=s.createContext(i);function a(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(l.Provider,{value:t},e.children)}},9402:e=>{e.exports=JSON.parse('{"permalink":"/blog/talk-about-transaction-isolation-levels","editUrl":"https://github.com/Jachen99/Jachen99.github.io/tree/V2.2.1/blog/2022/02-25-\u6d45\u8c08\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b.md","source":"@site/blog/2022/02-25-\u6d45\u8c08\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b.md","title":"\u6d45\u8c08\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b","description":"*\u80cc\u666f\uff1a\u4eca\u5929\u5728\u590d\u4e60\u4e8b\u52a1\u7684\u9694\u79bb\u7ea7\u522b\u7684\u65f6\u5019\u603b\u7ed3\u4e86\u4e00\u4e9b\u65b0\u7684\u60f3\u6cd5\uff0c\u4e4b\u524d\u53ea\u77e5\u9053\u4e8b\u52a1\u7684\u9694\u79bb\u7ea7\u522b\u5206\u4e3a\u8bfb\u672a\u63d0\u4ea4\u3001\u8bfb\u5df2\u63d0\u4ea4\u3001\u53ef\u91cd\u590d\u8bfb\u3001\u5e8f\u5217\u5316\u56db\u4e2a\u9694\u79bb\u7ea7\u522b\uff0c\u800c\u5728\u5e76\u53d1\u8fd0\u884c\u4e2d\uff0c\u51fa\u73b0\u7684\u9694\u79bb\u7ea7\u522b\u4e2d\u7684\u810f\u8bfb\u3001\u5e7b\u8bfb\u548c\u4e0d\u53ef\u91cd\u590d\u8bfb\u7684\u533a\u522b\uff0c\u4ee5\u53ca\u4ed6\u4eec\u7684\u89e6\u53d1\u6761\u4ef6\u4e0d\u662f\u5f88\u6e05\uff0c\u7ecf\u8fc7\u4e86\u4e00\u756a\u6298\u817e\uff0c\u8fd9\u91cc\u603b\u7ed3\u4e86\u4e00\u4e9b\u60f3\u6cd5\u3002*","date":"2022-02-25T00:00:00.000Z","tags":[{"inline":false,"label":"\u6570\u636e\u5e93","permalink":"/blog/tags/shujuku","description":"\u5173\u4e8e\u6570\u636e\u4ed3\u5e93\u76f8\u5173\u7684\u8bdd\u9898"},{"inline":false,"label":"MySQL","permalink":"/blog/tags/mysql","description":"\u5173\u4e8eMySQL\u7684\u76f8\u5173\u5185\u5bb9"}],"readingTime":4.655,"hasTruncateMarker":false,"authors":[{"name":"\u5b63\u51a0\u81e3","title":"\u540e\u7aef\u7814\u53d1\u5de5\u7a0b\u5e08","url":"https://github.com/jachen99","page":{"permalink":"/blog/authors/jiguanchen"},"socials":{"github":"https://github.com/jachen99"},"imageURL":"https://github.com/jachen99.png","key":"jiguanchen"}],"frontMatter":{"slug":"talk-about-transaction-isolation-levels","title":"\u6d45\u8c08\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b","authors":["jiguanchen"],"tags":["shujuku","mysql"]},"unlisted":false,"prevItem":{"title":"RDB\u548cAOF\u6301\u4e45\u5316\u5c0f\u7ed3","permalink":"/blog/talk-about-redis-persistence"},"nextItem":{"title":"\u6d45\u8c08https\u975e\u5bf9\u79f0\u52a0\u5bc6","permalink":"/blog/talk-https"}}')}}]);