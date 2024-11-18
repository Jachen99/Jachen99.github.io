"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[2395],{3072:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>a});var t=i(19930),s=i(74848),r=i(28453);const l={slug:"product-introduction-of-zero-copy-technology",title:"\u63a2\u7a76\u96f6\u62f7\u8d1d\u6280\u672f",authors:["jiguanchen"],tags:["rocketmq"]},o=void 0,c={authorsImageUrls:[void 0]},a=[];function d(e){const n={a:"a",code:"code",em:"em",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u80cc\u666f"}),"\uff1a",(0,s.jsx)(n.em,{children:"RocketMQ\u662f\u963f\u91cc\u56e2\u961f\u7814\u53d1\u5e76\u5f00\u6e90\u7684\u6d88\u606f\u4e2d\u95f4\u4ef6\uff0c\u5b83\u5ef6\u7eed\u4e86kafka\u7684\u5f88\u591a\u4f18\u70b9\uff0c\u4f8b\u5982\u9ad8\u6027\u80fd\uff0c\u4e3a\u4e86\u7814\u7a76RocketMQ\u7a76\u7adf\u662f\u5982\u4f55\u505a\u5230\u9ad8\u6027\u80fd\u7684\u5462\uff1f\u96f6\u62f7\u8d1d\u6280\u672f\u5c31\u662f\u4e00\u4e2a\u91cd\u8981\u7684\u539f\u56e0\u3002"})]}),"\n",(0,s.jsx)(n.p,{children:"\u9ad8\u6548\u539f\u56e0\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"CommitLog\u987a\u5e8f\u5199, \u5b58\u50a8\u4e86MessagBody\u3001message key\u3001tag\u7b49\u4fe1\u606f"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"ConsumeQueue\u968f\u673a\u8bfb + \u64cd\u4f5c\u7cfb\u7edf\u7684PageCache + \u96f6\u62f7\u8d1d\u6280\u672fZeroCopy"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u96f6\u62f7\u8d1d\u6280\u672f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"read(file, tmp_buf, len);\r\nwrite(socket, tmp_buf, len);\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5b50\uff1a\u5c06\u4e00\u4e2aFile\u8bfb\u53d6\u5e76\u53d1\u9001\u51fa\u53bb\uff08Linux\u6709\u4e24\u4e2a\u4e0a\u4e0b\u6587\uff0c\u5185\u6838\u6001\uff0c\u7528\u6237\u6001\uff09"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["File\u6587\u4ef6\u7684\u7ecf\u5386\u4e864\u6b21copy","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u8c03\u7528read,\u5c06\u6587\u4ef6\u62f7\u8d1d\u5230\u4e86kernel\u5185\u6838\u6001"}),"\n",(0,s.jsx)(n.li,{children:"CPU\u63a7\u5236 kernel\u6001\u7684\u6570\u636ecopy\u5230\u7528\u6237\u6001"}),"\n",(0,s.jsx)(n.li,{children:"\u8c03\u7528write\u65f6\uff0cuser\u6001\u4e0b\u7684\u5185\u5bb9\u4f1acopy\u5230\u5185\u6838\u6001\u7684socket\u7684buffer\u4e2d"}),"\n",(0,s.jsx)(n.li,{children:"\u6700\u540e\u5c06\u5185\u6838\u6001socket buffer\u7684\u6570\u636ecopy\u5230\u7f51\u5361\u8bbe\u5907\u4e2d\u4f20\u9001"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"\u7f3a\u70b9\uff1a\u589e\u52a0\u4e86\u4e0a\u4e0b\u6587\u5207\u6362\u3001\u6d6a\u8d39\u4e862\u6b21\u65e0\u6548\u62f7\u8d1d(\u5373\u6b65\u9aa42\u548c3)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"ZeroCopy\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u8bf7\u6c42kernel\u76f4\u63a5\u628adisk\u7684data\u4f20\u8f93\u7ed9socket\uff0c\u800c\u4e0d\u662f\u901a\u8fc7\u5e94\u7528\u7a0b\u5e8f\u4f20\u8f93\u3002Zero copy\u5927\u5927\u63d0\u9ad8\u4e86\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd\uff0c\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u5185\u6838\u7f13\u51b2\u533a\u8ddf\u7528\u6237\u7f13\u51b2\u533a\u95f4\u7684\u62f7\u8d1d\uff0c\u4ece\u800c\u51cf\u5c11CPU\u7684\u5f00\u9500\u548c\u51cf\u5c11\u4e86kernel\u548cuser\u6a21\u5f0f\u7684\u4e0a\u4e0b\u6587\u5207\u6362\uff0c\u8fbe\u5230\u6027\u80fd\u7684\u63d0\u5347"}),"\n",(0,s.jsxs)(n.li,{children:["\u5bf9\u5e94\u96f6\u62f7\u8d1d\u6280\u672f\u6709mmap\u53casendfile","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["mmap:\u5c0f\u6587\u4ef6\u4f20\u8f93\u5feb","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"RocketMQ \u9009\u62e9\u8fd9\u79cd\u65b9\u5f0f\uff0cmmap+write \u65b9\u5f0f\uff0c\u5c0f\u5757\u6570\u636e\u4f20\u8f93\uff0c\u6548\u679c\u4f1a\u6bd4 sendfile \u66f4\u597d"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"sendfile:\u5927\u6587\u4ef6\u4f20\u8f93\u6bd4mmap\u5feb"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Java\u4e2d\u7684TransferTo()\u5b9e\u73b0\u4e86Zero-Copy"}),"\n",(0,s.jsx)(n.li,{children:"\u5e94\u7528\uff1aKafka\u3001Netty\u3001RocketMQ\u7b49\u90fd\u91c7\u7528\u4e86\u96f6\u62f7\u8d1d\u6280\u672f"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u539f\u59cb\u7684\u62f7\u8d1d\u6280\u672f\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20230128234721451",src:i(35696).A+"",width:"805",height:"562"})}),"\n",(0,s.jsx)(n.p,{children:"\u96f6\u62f7\u8d1d\u6280\u672f\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20230128234745085",src:i(9957).A+"",width:"761",height:"492"})}),"\n",(0,s.jsxs)(n.p,{children:["\u53c2\u8003\u6587\u7ae0\uff1a ",(0,s.jsx)(n.a,{href:"https://github.com/0voice/linux_kernel_wiki/blob/main/%E6%96%87%E7%AB%A0/%E8%BF%9B%E7%A8%8B%E7%AE%A1%E7%90%86/%E4%B8%80%E6%96%87%E5%B8%A6%E4%BD%A0%EF%BC%8C%E5%BD%BB%E5%BA%95%E4%BA%86%E8%A7%A3%EF%BC%8C%E9%9B%B6%E6%8B%B7%E8%B4%9DZero-Copy%E6%8A%80%E6%9C%AF.md",children:"https://github.com/0voice/linux_kernel_wiki/blob/main/%E6%96%87%E7%AB%A0/%E8%BF%9B%E7%A8%8B%E7%AE%A1%E7%90%86/%E4%B8%80%E6%96%87%E5%B8%A6%E4%BD%A0%EF%BC%8C%E5%BD%BB%E5%BA%95%E4%BA%86%E8%A7%A3%EF%BC%8C%E9%9B%B6%E6%8B%B7%E8%B4%9DZero-Copy%E6%8A%80%E6%9C%AF.md"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},35696:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/image-20230128234721451-dd4af67b7a2fa7c9784cf766e100dfae.png"},9957:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/image-20230128234745085-207f8aae1e516506317e609e36e7f1d5.png"},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var t=i(96540);const s={},r=t.createContext(s);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}},19930:e=>{e.exports=JSON.parse('{"permalink":"/blog/product-introduction-of-zero-copy-technology","editUrl":"https://github.com/Jachen99/Jachen99.github.io/tree/V3.0.0/blog/2024/10-10-\u63a2\u7a76\u96f6\u62f7\u8d1d\u6280\u672f.md","source":"@site/blog/2024/10-10-\u63a2\u7a76\u96f6\u62f7\u8d1d\u6280\u672f.md","title":"\u63a2\u7a76\u96f6\u62f7\u8d1d\u6280\u672f","description":"\u80cc\u666f\uff1aRocketMQ\u662f\u963f\u91cc\u56e2\u961f\u7814\u53d1\u5e76\u5f00\u6e90\u7684\u6d88\u606f\u4e2d\u95f4\u4ef6\uff0c\u5b83\u5ef6\u7eed\u4e86kafka\u7684\u5f88\u591a\u4f18\u70b9\uff0c\u4f8b\u5982\u9ad8\u6027\u80fd\uff0c\u4e3a\u4e86\u7814\u7a76RocketMQ\u7a76\u7adf\u662f\u5982\u4f55\u505a\u5230\u9ad8\u6027\u80fd\u7684\u5462\uff1f\u96f6\u62f7\u8d1d\u6280\u672f\u5c31\u662f\u4e00\u4e2a\u91cd\u8981\u7684\u539f\u56e0\u3002","date":"2024-10-10T00:00:00.000Z","tags":[{"inline":false,"label":"RocketMQ","permalink":"/blog/tags/rocketmq","description":"\u5173\u4e8eRocketMQ\u7684\u76f8\u5173\u5185\u5bb9"}],"readingTime":2.14,"hasTruncateMarker":false,"authors":[{"name":"\u5b63\u51a0\u81e3","title":"\u540e\u7aef\u7814\u53d1\u5de5\u7a0b\u5e08","url":"https://github.com/jachen99","page":{"permalink":"/blog/authors/jiguanchen"},"socials":{"github":"https://github.com/jachen99"},"imageURL":"https://github.com/jachen99.png","key":"jiguanchen"}],"frontMatter":{"slug":"product-introduction-of-zero-copy-technology","title":"\u63a2\u7a76\u96f6\u62f7\u8d1d\u6280\u672f","authors":["jiguanchen"],"tags":["rocketmq"]},"unlisted":false,"nextItem":{"title":"\u63a2\u7a76Nginx\u4f18\u96c5reload\u7684\u7ec6\u8282","permalink":"/blog/product-nginx-reload"}}')}}]);