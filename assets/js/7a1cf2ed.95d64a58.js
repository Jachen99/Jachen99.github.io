"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[5808],{5214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var o=n(9357),a=n(4848),r=n(8453);const i={slug:"talk-about-lock",title:"\u60b2\u89c2\u9501\u4e50\u89c2\u9501\u5c0f\u7ed3",authors:["jiguanchen"]},l=void 0,s={authorsImageUrls:[void 0]},c=[{value:"\u60b2\u89c2\u9501",id:"\u60b2\u89c2\u9501",level:2},{value:"\u4e50\u89c2\u9501",id:"\u4e50\u89c2\u9501",level:2}];function u(e){const t={em:"em",h2:"h2",p:"p",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"\u4e00\u70b9\u70b9\u5173\u4e8e\u4e50\u89c2\u548c\u60b2\u89c2\u9501\u7684\u60f3\u6cd5 \u7b80\u5355\u8bb0\u5f55\u4e00\u4e0b.."})}),"\n",(0,a.jsx)(t.h2,{id:"\u60b2\u89c2\u9501",children:"\u60b2\u89c2\u9501"}),"\n",(0,a.jsx)(t.p,{children:"\u5c31\u662f\u5f88\u60b2\u89c2\u7684\u770b\u5f85\u95ee\u9898\u3002"}),"\n",(0,a.jsx)(t.p,{children:"\u4e3b\u89c2\u8ba4\u4e3a\u6bcf\u6b21\u53bb\u62ff\u6570\u636e\u90fd\u8ba4\u4e3a\u4f1a\u88ab\u522b\u4eba\u4fee\u6539\uff0c\u6240\u4ee5\u6bcf\u6b21\u62ff\u6570\u636e\u7684\u65f6\u5019\u90fd\u4f1a\u4e0a\u9501\uff0c\u8fd9\u6837\u522b\u4eba\u60f3\u62ff\u5230\u8fd9\u4e2a\u6570\u636e\u5c31\u4f1ablock\u76f4\u5230\u5b83\u62ff\u5230\u9501\u3002\u5982\u679c\u53d1\u751f\u5e76\u53d1\u51b2\u7a81\uff0c\u4f1a\u5c4f\u853d\u4e00\u5207\u53ef\u80fd\u8fdd\u53cd\u6570\u636e\u5b8c\u6574\u6027\u7684\u64cd\u4f5c \u60b2\u89c2\u9501\u4e4b\u6240\u4ee5\u60b2\u89c2\u3002\u5c31\u5728\u4e8e\u6b64\u3002\u6240\u4ee5\u5bf9\u5546\u54c1\u52a0\u4e0a\u9501\uff0c\u5c31\u53ef\u4ee5\u5b89\u5fc3\u7684\u505a\u5224\u65ad\u548c\u66f4\u65b0\u3002\u56e0\u4e3a\u8fd9\u4e2a\u65f6\u5019\u4e0d\u4f1a\u6709\u522b\u4eba\u66f4\u65b0\u8fd9\u6761\u5546\u54c1\u5e93\u5b58\u3002Java synchronized\u5c31\u662f\u60b2\u89c2\u9501\u7684\u4e00\u79cd\u5b9e\u73b0\uff0c\u6bcf\u6b21\u7ebf\u7a0b\u8981\u4fee\u6539\u6570\u636e\u65f6\u90fd\u4f1a\u5148\u83b7\u5f97\u9501 \u4fdd\u8bc1\u540c\u4e00\u65f6\u523b\u53ea\u6709\u4e00\u4e2a\u7ebf\u7a0b \u80fd\u64cd\u4f5c\u6570\u636e \u5176\u4ed6\u7ebf\u7a0b\u4f1a\u88abblock\uff08\u963b\u585e\uff09"}),"\n",(0,a.jsx)(t.h2,{id:"\u4e50\u89c2\u9501",children:"\u4e50\u89c2\u9501"}),"\n",(0,a.jsx)(t.p,{children:"\u5c31\u662f\u975e\u5e38\u4e50\u89c2\u7684\u770b\u5f85\u95ee\u9898 \u65e0\u9700\u52a0\u9501\u3002"}),"\n",(0,a.jsx)(t.p,{children:"\u4f46\u662f\u4f1a\u5728\u8868\u4e2d\u589e\u52a0\u7248\u672c\u5b57\u6bb5\uff0c\u66f4\u65b0\u65f6where\u8bed\u53e5\u4e2d\u589e\u52a0\u7248\u672c\u7684\u5224\u65ad \u7b97\u662fCAS \uff08compare and swap\uff09\u6bd4\u8f83\u5e76\u66ff\u6362\u7684\u64cd\u4f5c \u5728\u5546\u54c1\u5e93\u5b58\u573a\u666f\u4e2dnumber\u8d77\u5230\u4e86\u7248\u672c\u63a7\u5236 \u76f8\u5f53\u4e8e version \u7684\u4f5c\u7528 \u603b\u7684\u6765\u8bf4\u5c31\u662f \u5047\u8bbe\u4e0d\u4f1a\u53d1\u751f\u51b2\u7a81 \u53ea\u5728\u63d0\u4ea4\u64cd\u4f5c\u65f6\u68c0\u67e5\u662f\u5426\u8fdd\u53cd\u4e86\u6570\u636e\u7684\u5b8c\u6574\u6027 \u4e50\u89c2\u9501\u9002\u7528\u4e8e\u8bfb\u591a\u5199\u5c11\u7684\u5e94\u7528\u573a\u5408\u3002\u8fd9\u6837\u53ef\u4ee5\u63d0\u9ad8\u541e\u5410\u91cf"}),"\n",(0,a.jsx)(t.p,{children:"\u4e5f\u6709\u7684\u4f1a\u52a0\u65f6\u95f4\u6233\u3002"}),"\n",(0,a.jsx)(t.p,{children:"\u5b9e\u73b0\u5206\u5e03\u5f0f\u9501 \uff1a Redis \u548c Zookeeper"})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var o=n(6540);const a={},r=o.createContext(a);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(r.Provider,{value:t},e.children)}},9357:e=>{e.exports=JSON.parse('{"permalink":"/blog/talk-about-lock","editUrl":"https://github.com/Jachen99/Jachen99.github.io/tree/V3.0.0/blog/2022/01-17-\u60b2\u89c2\u9501\u4e50\u89c2\u9501\u5c0f\u7ed3.md","source":"@site/blog/2022/01-17-\u60b2\u89c2\u9501\u4e50\u89c2\u9501\u5c0f\u7ed3.md","title":"\u60b2\u89c2\u9501\u4e50\u89c2\u9501\u5c0f\u7ed3","description":"\u4e00\u70b9\u70b9\u5173\u4e8e\u4e50\u89c2\u548c\u60b2\u89c2\u9501\u7684\u60f3\u6cd5 \u7b80\u5355\u8bb0\u5f55\u4e00\u4e0b..","date":"2022-01-17T00:00:00.000Z","tags":[],"readingTime":1.875,"hasTruncateMarker":false,"authors":[{"name":"\u5b63\u51a0\u81e3","title":"\u540e\u7aef\u7814\u53d1\u5de5\u7a0b\u5e08","url":"https://github.com/jachen99","page":{"permalink":"/blog/authors/jiguanchen"},"socials":{"github":"https://github.com/jachen99"},"imageURL":"https://github.com/jachen99.png","key":"jiguanchen"}],"frontMatter":{"slug":"talk-about-lock","title":"\u60b2\u89c2\u9501\u4e50\u89c2\u9501\u5c0f\u7ed3","authors":["jiguanchen"]},"unlisted":false,"prevItem":{"title":"\u6d45\u8c08equals\u65b9\u6cd5","permalink":"/blog/talk-about-equals-method"},"nextItem":{"title":"\u6cd5\u672c\u4fe1\u606f\u7ec4\u9762\u8bd5\u9898","permalink":"/blog/talk-about-fuben-information-group-interview"}}')}}]);