"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[7801],{74709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var r=n(67730),s=n(74848),o=n(28453);const c={slug:"talk-about-reduce-context-switch-overhead",title:"\u51cf\u5c11\u5207\u6362\u4e0a\u4e0b\u6587\u5f00\u9500",authors:["jiguanchen"],tags:["GUC"]},i=void 0,a={authorsImageUrls:[void 0]},l=[];function u(e){const t={em:"em",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"\u6211\u4eec\u600e\u4e48\u80fd\u51cf\u5c11\u5207\u6362\u4e0a\u4e0b\u6587\u5e26\u6765\u7684\u5f00\u9500\u5462\uff1f"})}),"\n",(0,s.jsx)(t.p,{children:"cpu\u4e3a\u7ebf\u7a0b\u5206\u914d\u65f6\u95f4\u7247\uff0c\u65f6\u95f4\u7247\u975e\u5e38\u77ed\uff08\u6beb\u79d2\u7ea7\u522b\uff09\uff0ccpu\u4e0d\u505c\u7684\u5207\u6362\u7ebf\u7a0b\u6267\u884c\uff0c\u5728\u5207\u6362\u524d\u4f1a\u4fdd\u5b58\u4e0a\u4e00\u4e2a\u4efb\u52a1\u7684\u72b6\u6001\uff0c\u4ee5\u4fbf\u4e0b\u6b21\u5207\u6362\u56de\u8fd9\u4e2a\u4efb\u52a1\u65f6\uff0c\u53ef\u4ee5\u518d\u52a0\u8f7d\u8fd9\u4e2a\u4efb\u52a1\u7684\u72b6\u6001\uff0c\u8ba9\u6211\u4eec\u611f\u89c9\u662f\u591a\u4e2a\u7a0b\u5e8f\u540c\u65f6\u8fd0\u884c\u7684\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u4e0a\u4e0b\u6587\u7684\u9891\u7e41\u5207\u6362\uff0c\u4f1a\u5e26\u6765\u4e00\u5b9a\u7684\u6027\u80fd\u5f00\u9500"}),"\n",(0,s.jsxs)(t.p,{children:["\u90a3\u4e48",(0,s.jsx)(t.strong,{children:"\u5982\u4f55\u51cf\u5c11\u4e0a\u4e0b\u6587\u5207\u6362\u7684\u5f00\u9500"}),"\uff1f"]}),"\n",(0,s.jsxs)(t.p,{children:["1\u3001",(0,s.jsx)(t.strong,{children:"\u65e0\u9501\u5e76\u53d1\u7f16\u7a0b"}),"\r\n\u65e0\u9501\u5e76\u53d1\u7f16\u7a0b\u3002\u591a\u7ebf\u7a0b\u7ade\u4e89\u9501\u65f6\uff0c\u4f1a\u5f15\u8d77\u4e0a\u4e0b\u6587\u5207\u6362\uff0c\u6240\u4ee5\u591a\u7ebf\u7a0b\u5904\u7406\u6570\u636e\u65f6\uff0c\u53ef\u4ee5\u7528\u4e00\u4e9b\u529e\u6cd5\u6765\u907f\u514d\u4f7f\u7528\u9501\uff0c\u5982\u5c06\u6570\u636e\u7684ID\u6309\u7167Hash\u7b97\u6cd5\u53d6\u6a21\u5206\u6bb5\uff0c\u4e0d\u540c\u7684\u7ebf\u7a0b2\u5904\u7406\u4e0d\u540c\u6bb5\u7684\u6570\u636e"]}),"\n",(0,s.jsxs)(t.p,{children:["2\u3001",(0,s.jsx)(t.strong,{children:"CAS"}),"\r\nJava\u7684Atomic\u5305\u4f7f\u7528CAS\u7b97\u6cd5\u6765\u66f4\u65b0\u6570\u636e\uff0c\u800c\u4e0d\u9700\u8981\u52a0\u9501\u3002\u4f7f\u7528\u6700\u5c11\u7ebf\u7a0b"]}),"\n",(0,s.jsxs)(t.p,{children:["3\u3001",(0,s.jsx)(t.strong,{children:"\u4f7f\u7528\u6700\u5c11\u7ebf\u7a0b"}),"\r\n\u907f\u514d\u521b\u5efa\u4e0d\u9700\u8981\u7684\u7ebf\u7a0b\uff0c\u6bd4\u5982\u4efb\u52a1\u5f88\u5c11\uff0c\u4f46\u662f\u521b\u5efa\u4e86\u5f88\u591a\u7ebf\u7a0b\u6765\u5904\u7406\uff0c\u8fd9\u6837\u4f1a\u9020\u6210\u5927\u91cf\u7ebf\u7a0b\u90fd\u5904\u4e8e\u7b49\u5f85\u72b6\u6001"]}),"\n",(0,s.jsxs)(t.p,{children:["4\u3001",(0,s.jsx)(t.strong,{children:"\u534f\u7a0b"}),"\r\n\u5728\u5355\u7ebf\u7a0b\u91cc\u5b9e\u73b0\u591a\u4efb\u52a1\u7684\u8c03\u5ea6\uff0c\u5e76\u5728\u5355\u7ebf\u7a0b\u91cc\u7ef4\u6301\u591a\u4e2a\u4efb\u52a1\u95f4\u7684\u5207\u6362\u3002"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var r=n(96540);const s={},o=r.createContext(s);function c(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:t},e.children)}},67730:e=>{e.exports=JSON.parse('{"permalink":"/blog/talk-about-reduce-context-switch-overhead","editUrl":"https://github.com/Jachen99/Jachen99.github.io/tree/V3.0.0/blog/2022/05-20-\u51cf\u5c11\u5207\u6362\u4e0a\u4e0b\u6587\u5f00\u9500.md","source":"@site/blog/2022/05-20-\u51cf\u5c11\u5207\u6362\u4e0a\u4e0b\u6587\u5f00\u9500.md","title":"\u51cf\u5c11\u5207\u6362\u4e0a\u4e0b\u6587\u5f00\u9500","description":"\u6211\u4eec\u600e\u4e48\u80fd\u51cf\u5c11\u5207\u6362\u4e0a\u4e0b\u6587\u5e26\u6765\u7684\u5f00\u9500\u5462\uff1f","date":"2022-05-20T00:00:00.000Z","tags":[{"inline":true,"label":"GUC","permalink":"/blog/tags/guc"}],"readingTime":1.625,"hasTruncateMarker":false,"authors":[{"name":"\u5b63\u51a0\u81e3","title":"\u540e\u7aef\u7814\u53d1\u5de5\u7a0b\u5e08","url":"https://github.com/jachen99","page":{"permalink":"/blog/authors/jiguanchen"},"socials":{"github":"https://github.com/jachen99"},"imageURL":"https://github.com/jachen99.png","key":"jiguanchen"}],"frontMatter":{"slug":"talk-about-reduce-context-switch-overhead","title":"\u51cf\u5c11\u5207\u6362\u4e0a\u4e0b\u6587\u5f00\u9500","authors":["jiguanchen"],"tags":["GUC"]},"unlisted":false,"prevItem":{"title":"SpringMVC\u67b6\u6784\u5b9e\u73b0\u6d41\u7a0b","permalink":"/blog/talk-about-SpringMVC-implementation-process"},"nextItem":{"title":"RDB\u548cAOF\u6301\u4e45\u5316\u5c0f\u7ed3","permalink":"/blog/talk-about-redis-persistence"}}')}}]);