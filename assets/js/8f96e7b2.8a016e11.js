"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[9348],{536:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var o=r(727),t=r(4848),i=r(8453);const s={slug:"product-nginx-reload",title:"\u63a2\u7a76Nginx\u4f18\u96c5reload\u7684\u7ec6\u8282",authors:["jiguanchen"],tags:["nginx"]},a=void 0,l={authorsImageUrls:[void 0]},c=[{value:"reload\u6d41\u7a0b",id:"reload\u6d41\u7a0b",level:2},{value:"reload \u4e0d\u505c\u673a\u8f7d\u5165\u65b0\u914d\u7f6e",id:"reload-\u4e0d\u505c\u673a\u8f7d\u5165\u65b0\u914d\u7f6e",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",img:"img",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u80cc\u666f"}),"\uff1a",(0,t.jsx)(n.em,{children:"\u6211\u4eec\u77e5\u9053\u5728Ngnix\u7684conf\u914d\u7f6e\u6587\u4ef6\u4e4b\u540e,\u4e0d\u80fdkill\u6389matser\u91cd\u65b0\u542f\u52a8Ngnix\u670d\u52a1\u5668\uff0c\u800c\u662f\u9700\u8981\u6267\u884c nginx -s reload\u547d\u4ee4\uff0c\u5728 \u4e0d\u505c\u6b62\u670d\u52a1\u59cb\u7ec8\u5728\u5904\u7406\u65b0\u7684\u8bf7\u6c42\u7684\u540c\u65f6\u628a nginx \u7684\u914d\u7f6e\u6587\u4ef6\u5e73\u6ed1\u7684\u628a\u65e7\u7684 nginx.conf \u914d\u7f6e\u66f4\u65b0\u4e3a\u65b0\u7684 nginx.conf \u914d\u7f6e\u3002\u90a3\u4e48\u8fd9\u662f\u4e3a\u4ec0\u4e48\u5462\uff1f"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u6837\u4e00\u4e2a\u529f\u80fd\u5bf9\u4e8e nginx \u975e\u5e38\u6709\u5fc5\u8981\uff0c\u4f46\u662f\u6709\u65f6\u5019\u6211\u4eec\u4f1a\u53d1\u73b0\u5728\u6267\u884c ",(0,t.jsx)(n.code,{children:"nginx -s reload"})," \u547d\u4ee4\u540e\uff0cworker \u5b50\u8fdb\u7a0b\u7684\u6570\u91cf\u4f1a\u53d8\u591a\u4e86\uff0c\u8fd9\u662f\u56e0\u4e3a\u8001\u7684\u914d\u7f6e\u8fd0\u884c\u7684 worker \u8fdb\u7a0b\u957f\u65f6\u95f4\u6ca1\u6709\u9000\u51fa\uff0c\u5f53\u4f7f\u7528 stream \u505a\u56db\u5c42\u53cd\u5411\u4ee3\u7406\u7684\u65f6\u5019\uff0c\u53ef\u80fd\u8fd9\u79cd\u573a\u666f\u4f1a\u66f4\u591a\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u90a3\u4e48\u4e0b\u9762\u6211\u4eec\u901a\u8fc7\u5206\u6790 nginx \u7684 reload \u6d41\u7a0b\uff0c\u6765\u63a2\u7a76\u4e0b nginx \u5230\u5e95\u505a\u4e86\u4e9b\u4ec0\u4e48\uff1f\u6240\u8c13\u4f18\u96c5\u7684\u9000\u51fa\u548c\u7acb\u5373\u9000\u51fa\u6709\u4ec0\u4e48\u533a\u522b\uff1f"}),"\n",(0,t.jsx)(n.h2,{id:"reload\u6d41\u7a0b",children:"reload\u6d41\u7a0b"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20230129234025673",src:r(196).A+"",width:"867",height:"594"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7b2c\u4e00\u6b65\u5728\u4fee\u6539\u597d nginx \u7684\u914d\u7f6e\u6587\u4ef6 nginx.conf \u540e\uff0c\u5411 master \u8fdb\u7a0b\u53d1\u9001 HUP \u4fe1\u53f7\uff0c\u8fd9\u5b9e\u9645\u4e0a\u548c\u6211\u4eec\u5728\u547d\u4ee4\u884c\u6267\u884c ",(0,t.jsx)(n.code,{children:"nginx -s reload"})," \u547d\u4ee4\u6548\u679c\u662f\u4e00\u6837\u7684\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u90a3\u4e48 master \u8fdb\u7a0b\u5728\u6536\u5230 HUP \u4fe1\u53f7\u4ee5\u540e\uff0c\u4f1a\u5728\u7b2c\u4e8c\u6b65\u68c0\u67e5\u6211\u4eec\u7684\u914d\u7f6e\u6587\u4ef6\u8bed\u6cd5\u662f\u5426\u6b63\u786e\uff0c\u4e5f\u5c31\u662f\u8bf4\u6211\u4eec\u5e76\u4e0d\u4e00\u5b9a\u975e\u8981\u5728 nginx -s reload \u524d\u6267\u884c nginx -t \u68c0\u9a8c\u4e0b\u8bed\u6cd5\u662f\u5426\u6b63\u786e\uff0c\u56e0\u4e3a\u5728\u7b2c\u4e8c\u6b65 nginx \u7684 master \u8fdb\u7a0b\u4e00\u5b9a\u4f1a\u6267\u884c\u8fd9\u4e2a\u6b65\u9aa4\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5728 nginx \u7684\u914d\u7f6e\u8bed\u6cd5\u5168\u90e8\u6b63\u786e\u4ee5\u540e\uff0cmaster \u8fdb\u7a0b\u4f1a\u6253\u5f00\u65b0\u7684\u76d1\u542c\u7aef\u53e3\uff0c\u4e3a\u4ec0\u4e48\u8981\u5728 master \u8fdb\u7a0b\u4e2d\u6253\u5f00\u65b0\u7684\u76d1\u542c\u7aef\u53e3\uff1f\u56e0\u4e3a\u6211\u4eec\u53ef\u80fd\u5728 nginx.conf \u4e2d\u4f1a\u5f15\u5165\u65b0\u7684\u4f8b\u5982 443 \u6216\u8005\u4e4b\u524d\u6211\u4eec\u6ca1\u6709\u6253\u5f00\u7684\u7684\u76d1\u542c\u7aef\u53e3\uff0c\u800c\u6240\u6709 worker \u8fdb\u7a0b\u662f master \u8fdb\u7a0b \u7684\u5b50\u8fdb\u7a0b\uff0c\u5b50\u8fdb\u7a0b\u4f1a\u7ee7\u627f\u7236\u8fdb\u7a0b\u6240\u6709\u5df2\u7ecf\u6253\u5f00\u7684\u7aef\u53e3\uff0c\u8fd9\u662f linux \u64cd\u4f5c\u7cfb\u7edf\u5b9a\u4e49\u7684\uff0c\u6240\u4ee5\u7b2c\u4e09\u6b65\uff0c\u6211\u4eec master \u8fdb\u7a0b\u6253\u5f00\u4e86\u53ef\u80fd\u5f15\u5165\u7684\u65b0\u7684\u76d1\u542c\u7aef\u53e3\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u63a5\u4e0b\u6765 mster \u8fdb\u7a0b\u4f1a\u7528\u65b0\u7684 nginx.conf \u914d\u7f6e\u6587\u4ef6\u6765\u542f\u52a8\u65b0\u7684 worker \u5b50\u8fdb\u7a0b\uff0c\u90a3\u4e48\u8001\u7684 worker \u5b50\u8fdb\u7a0b\u4f1a\u600e\u4e48\u6837\u5462\uff1f"}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u4eec\u4f1a\u5728\u7b2c\u4e94\u6b65\u5728\u542f\u52a8\u65b0\u7684 worker \u5b50\u8fdb\u7a0b\u4ee5\u540e\uff0c\u7531 master \u8fdb\u7a0b\u518d\u5411\u8001 worker \u5b50\u8fdb\u7a0b\u53d1\u9001 QUIT \u4fe1\u53f7\uff0cQUIT \u4fe1\u53f7\u548c TERM\uff0cINT \u4fe1\u53f7\u662f\u4e0d\u4e00\u6837\u7684\uff0cQUIT \u4fe1\u53f7\u662f\u8bf7\u4f18\u96c5\u5730\u5173\u95ed\u5b50\u8fdb\u7a0b\uff0c\u8fd9\u65f6\u5019\u9700\u8981\u5173\u6ce8\u987a\u5e8f\uff0c\u56e0\u4e3a nginx \u9700\u8981\u4fdd\u8bc1\u5e73\u6ed1\uff0c\u6240\u4ee5\u8981\u5148\u542f\u52a8\u65b0\u7684 worker \u5b50\u8fdb\u7a0b\uff0c\u518d\u5411\u8001\u7684 worker \u5b50\u8fdb\u7a0b\u53d1\u9001 QUIT \u4fe1\u53f7\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u90a3\u4e48\u8001\u7684 master \u5b50\u8fdb\u7a0b\u6536\u5230 QUIT \u4fe1\u53f7\u540e\uff0c\u9996\u5148\u5173\u95ed\u76d1\u542c\u53e5\u67c4\uff0c\u4e5f\u5c31\u662f\u8bf4\u8fd9\u4e2a\u65f6\u5019\u65b0\u7684\u8fde\u63a5\u53ea\u4f1a\u5230\u65b0\u7684 worker \u5b50\u8fdb\u7a0b\uff0c\u6240\u4ee5\u867d\u7136\u4ed6\u4eec\u4e4b\u95f4\u6709\u65f6\u95f4\u5dee\uff0c\u4f46\u662f\u65f6\u95f4\u662f\u975e\u5e38\u5feb\u901f\u7684\uff0c\u90a3\u4e48\u5173\u95ed\u76d1\u542c\u53e5\u67c4\u540e\uff0c\u5904\u7406\u5b8c\u5f53\u524d\u8fde\u63a5\u540e\u5c31\u7ed3\u675f\u8fdb\u7a0b\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4e0b\u9762\u770b reload \u4e0d\u505c\u673a\u8f7d\u5165\u65b0\u914d\u7f6e\u7684\u56fe\u793a\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"reload-\u4e0d\u505c\u673a\u8f7d\u5165\u65b0\u914d\u7f6e",children:"reload \u4e0d\u505c\u673a\u8f7d\u5165\u65b0\u914d\u7f6e"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1356806-20191216111255642-526956790",src:r(6953).A+"",width:"2016",height:"1020"})}),"\n",(0,t.jsx)(n.p,{children:"master \u8fdb\u7a0b\u4e0a\u539f\u5148\u6709\u56db\u4e2a\u7eff\u8272\u7684 worker \u5b50\u8fdb\u7a0b\uff0c\u5b83\u4eec\u4f7f\u7528\u4e86\u8001\u7684\u914d\u7f6e\uff0c\u5f53\u6211\u4eec\u66f4\u6539\u4e86 nginx.conf \u914d\u7f6e\u6587\u4ef6\u540e\uff0c\u5411 master \u53d1\u9001 SIGHUP \u4fe1\u53f7\u6216\u8005\u6267\u884c reload \u547d\u4ee4\uff0c \u7136\u540e master \u4f1a\u7528\u65b0\u7684\u914d\u7f6e\u6587\u4ef6\u542f\u52a8\u56db\u4e2a\u65b0\u7684\u9ec4\u8272 worker \u5b50\u8fdb\u7a0b\uff0c\u6b64\u65f6\u662f\u56db\u4e2a\u8001\u7684\u7eff\u8272 worker \u5b50\u8fdb\u7a0b\u548c\u56db\u4e2a\u65b0\u7684\u9ec4\u8272\u7684 worker \u5b50\u8fdb\u7a0b\u662f\u5e76\u5b58\u7684\u3002\u90a3\u4e48\u8001\u7684 worker \u5b50\u8fdb\u7a0b\u5728\u6b63\u5e38\u7684\u60c5\u51b5\u4e0b\u4f1a\u5728\u5904\u7406\u5df2\u7ecf\u5efa\u7acb\u597d\u7684\u8fde\u63a5\u4e0a\u7684\u8bf7\u6c42\u4e4b\u540e\u5173\u95ed\u8fd9\u4e2a\u8fde\u63a5\uff0c\u54ea\u6015\u8fd9\u4e2a\u8fde\u63a5\u662f keeplive \u8bf7\u6c42\u4e5f\u4f1a\u6b63\u5e38\u5173\u95ed\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4f46\u662f\u5f02\u5e38\u60c5\u51b5\uff0c\u5982\u679c\u6709\u4e00\u4e9b\u8bf7\u6c42\u51fa\u73b0\u95ee\u9898\uff0c\u5ba2\u6237\u7aef\u957f\u65f6\u95f4\u65e0\u6cd5\u5904\u7406\uff0c\u90a3\u4e48\u5c31\u4f1a\u5bfc\u81f4\u8fd9\u4e2a\u8bf7\u6c42\u957f\u65f6\u95f4\u505c\u7559\u5728\u8fd9\u4e2a worker \u5b50\u8fdb\u7a0b\u5f53\u4e2d\uff0c\u90a3\u4e48\u8fd9\u4e2a worker \u5b50\u8fdb\u7a0b\u4f1a\u957f\u65f6\u95f4\u5b58\u5728\uff0c\u56e0\u4e3a\u65b0\u7684\u8fde\u63a5\u5df2\u7ecf\u8dd1\u5728\u9ec4\u8272\u7684 worker \u5b50\u8fdb\u7a0b\u4e2d\uff0c\u6240\u4ee5\u5f71\u54cd\u5e76\u4e0d\u4f1a\u5f88\u5927\uff0c\u552f\u4e00\u4f1a\u5f71\u54cd\u7684\u5c31\u662f\u7eff\u8272\u7684 worker \u5b50\u8fdb\u7a0b\u4f1a\u957f\u65f6\u95f4\u5b58\u5728\uff0c\u4f46\u4e5f\u53ea\u5f71\u54cd\u5df2\u5b58\u5728\u7684\u8fde\u63a5\uff0c\u4e0d\u4f1a\u5f71\u54cd\u65b0\u7684\u8fde\u63a5\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u4eec\u6709\u4ec0\u4e48\u529e\u6cd5\u5904\u7406\u5462\uff1f\u5728\u65b0\u7248\u672c\u4e2d\u63d0\u4f9b\u4e86\u4e00\u4e2a\u65b0\u7684\u914d\u7f6e worker_shutdown_timeout\uff0c\u4e5f\u5c31\u662f\u8bf4\u6700\u957f\u7b49\u5f85\u591a\u957f\u65f6\u95f4\uff0c\u8fd9\u6837 master \u8fdb\u7a0b\u542f\u52a8\u65b0\u7684\u9ec4\u8272 worker \u8fdb\u7a0b\u4e4b\u540e\uff0c\u5982\u679c\u8001\u7684 worker \u8fdb\u7a0b\u4e00\u76f4\u6ca1\u6709\u9000\u51fa\uff0c\u65f6\u95f4\u5230\u4e86\u4e4b\u540e\u4f1a\u5f3a\u5236\u628a\u8001\u7684 worker \u8fdb\u7a0b\u9000\u51fa\u6389\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,t.jsx)(n.p,{children:"\u672c\u6587\u4e3b\u8981\u8bb2\u89e3\u4e86 Nginx \u5e73\u6ed1\u5347\u7ea7\u65b0\u7684\u914d\u7f6e\u6587\u4ef6\u7684\u6d41\u7a0b\uff0c\u5728\u6211\u4eec\u4e86\u89e3\u4e86\u4f18\u96c5\u5173\u95ed worker \u5b50\u8fdb\u7a0b\u548c\u542f\u52a8\u65b0\u914d\u7f6e\u7684 worker \u5b50\u8fdb\u7a0b\u6d41\u7a0b\u95f4\u7684\u5173\u7cfb\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u66f4\u597d\u5730\u5904\u7406\u7f55\u89c1\u7684\u5f02\u5e38\u573a\u666f\u3002"})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},6953:(e,n,r)=>{r.d(n,{A:()=>o});const o=r.p+"assets/images/1356806-20191216111255642-526956790-c3d6cf140a54e7b57d0e02248be04cb7.png"},196:(e,n,r)=>{r.d(n,{A:()=>o});const o=r.p+"assets/images/image-20230129234025673-408e9591c6b983445a857dc17ae854f4.png"},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var o=r(6540);const t={},i=o.createContext(t);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(i.Provider,{value:n},e.children)}},727:e=>{e.exports=JSON.parse('{"permalink":"/blog/product-nginx-reload","editUrl":"https://github.com/Jachen99/Jachen99.github.io/tree/V3.0.0/blog/2024/10-02-\u63a2\u7a76Nginx\u4f18\u96c5reload\u7684\u7ec6\u8282.md","source":"@site/blog/2024/10-02-\u63a2\u7a76Nginx\u4f18\u96c5reload\u7684\u7ec6\u8282.md","title":"\u63a2\u7a76Nginx\u4f18\u96c5reload\u7684\u7ec6\u8282","description":"\u80cc\u666f\uff1a\u6211\u4eec\u77e5\u9053\u5728Ngnix\u7684conf\u914d\u7f6e\u6587\u4ef6\u4e4b\u540e,\u4e0d\u80fdkill\u6389matser\u91cd\u65b0\u542f\u52a8Ngnix\u670d\u52a1\u5668\uff0c\u800c\u662f\u9700\u8981\u6267\u884c nginx -s reload\u547d\u4ee4\uff0c\u5728 \u4e0d\u505c\u6b62\u670d\u52a1\u59cb\u7ec8\u5728\u5904\u7406\u65b0\u7684\u8bf7\u6c42\u7684\u540c\u65f6\u628a nginx \u7684\u914d\u7f6e\u6587\u4ef6\u5e73\u6ed1\u7684\u628a\u65e7\u7684 nginx.conf \u914d\u7f6e\u66f4\u65b0\u4e3a\u65b0\u7684 nginx.conf \u914d\u7f6e\u3002\u90a3\u4e48\u8fd9\u662f\u4e3a\u4ec0\u4e48\u5462\uff1f","date":"2024-10-02T00:00:00.000Z","tags":[{"inline":false,"label":"Nginx","permalink":"/blog/tags/nginx","description":"\u5173\u4e8eNginx\u7684\u76f8\u5173\u5185\u5bb9"}],"readingTime":5.98,"hasTruncateMarker":false,"authors":[{"name":"\u5b63\u51a0\u81e3","title":"\u540e\u7aef\u7814\u53d1\u5de5\u7a0b\u5e08","url":"https://github.com/jachen99","page":{"permalink":"/blog/authors/jiguanchen"},"socials":{"github":"https://github.com/jachen99"},"imageURL":"https://github.com/jachen99.png","key":"jiguanchen"}],"frontMatter":{"slug":"product-nginx-reload","title":"\u63a2\u7a76Nginx\u4f18\u96c5reload\u7684\u7ec6\u8282","authors":["jiguanchen"],"tags":["nginx"]},"unlisted":false,"prevItem":{"title":"\u63a2\u7a76\u96f6\u62f7\u8d1d\u6280\u672f","permalink":"/blog/product-introduction-of-zero-copy-technology"},"nextItem":{"title":"EasyExcel\u4e2d\u7684\u6570\u636e\u7b2c\u4e00\u884c\u83b7\u53d6\u95ee\u9898\u53ca\u89e3\u51b3\u65b9\u6848\u8be6\u89e3","permalink":"/blog/advanced-data-processing-with-easyexcel"}}')}}]);