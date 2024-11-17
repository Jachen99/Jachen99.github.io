"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[3884],{4163:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>i});var r=n(6890),s=n(4848),a=n(8453);const o={slug:"product-set",title:"\u96c6\u5408Set",authors:["jiguanchen"]},c=void 0,l={authorsImageUrls:[void 0]},i=[];function h(e){const t={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"\u96c6\u5408\u6846\u67b6\u4e4bSet\u53ca\u5176\u5b50\u7c7b"}),"  "]}),"\n",(0,s.jsxs)(t.p,{children:["\uf9fd\u4e48\u662fSet\u6570\u636e\u7ed3\u6784\uff1f\r\n1\u3001Set\u76f8\u5bf9\u4e8eList\u662f\u7b80\u5355\u7684\u4e00\u79cd\u96c6\u5408,\u5177\u6709\u548c Collection \u5b8c\u5168\u4e00\u6837\u7684\u63a5\u53e3\uff0c\u53ea\u662f\u5b9e\u73b0\u4e0a\uf967\u540c\uff0c",(0,s.jsx)(t.strong,{children:"Set\uf967\u4fdd\u5b58\u91cd\u590d\u7684\u5143\u7d20\uff0c\u5b58\u50a8\u4e00\u7ec4\u552f\u4e00\uff0c\u2f46\u5e8f\u7684\u5bf9\u8c61"}),"\u3002\r\n2\u3001Set\u4e2d\u7684\u5143\u7d20\u662f\uf967\u80fd\u91cd\u590d\u7684, \u5b9e\u73b0\u7ec6\u8282\u53ef\u4ee5\u53c2\u8003Map\uff0c\u56e0\u4e3a\u8fd9\u4e9bSet\u7684\u5b9e\u73b0\u90fd\u662f\u5bf9\u5e94\u7684Map\u7684\u4e00\u79cd\u5c01\u88c5\u3002\u6bd4\u5982HashSet\u662f\u5bf9HashMap\u7684\u5c01\u88c5\uff0cTreeSet\u5bf9TreeMap\r\n3\u3001Set\u5e95\u5c42\u662f\u4e00\u4e2aHashMap\uff0c\u7531\u4e8eHashMap\u7684put()\u65b9\u6cd5\u662f\u4e00\u4e2a\u952e\u503c\u5bf9\uff0c\u5f53\u65b0\u653e\u2f0aHashMap\u7684Entry\u4e2dkey \u4e0e\u96c6\u5408\u4e2d\u539f\u6709Entry\u7684key\u76f8\u540c\uff08hashCode()\u8fd4\u56de\u503c\u76f8\u7b49\uff0c\u901a\u8fc7equals\u6bd4\u8f83\u4e5f\u8fd4\u56detrue\uff09\uff0c\u65b0\u6dfb\u52a0\u7684Entry\u7684value\u4f1a\u5c06\u8986\u76d6\u539f\u6765Entry\u7684value\uff0c\u4f46key\uf967\u4f1a\u6709\u4efb\u4f55\u6539\u53d8\u3002\r\n4\u3001\u5141\u8bb8\u5305\u542b\u503c\u4e3anull\u7684\u5143\u7d20\uff0c\u4f46\u6700\u591a\u53ea\u80fd\u6709\u4e00\u4e2anull\u5143\u7d20"]}),"\n",(0,s.jsx)(t.p,{children:"\u5e38\u2ec5\u7684\u5b9e\u73b0\u7c7b\u3002\r\nHashSet\r\nHashSet\u7c7b\u6309\u7167\u54c8\u5e0c\u7b97\u6cd5\u6765\u5b58\u53d6\u96c6\u5408\u4e2d\u7684\u5bf9\u8c61\uff0c\u5b58\u53d6\u901f\u5ea6\u6bd4\u8f83\u5feb\r\n\u5bf9\u5e94\u7684Map\u662fHashMap\uff0c\u662f\u57fa\u4e8eHash\u7684\u5feb\u901f\u5143\u7d20\u63d2\u5165\uff0c\u5143\u7d20\u2f46\u987a\u5e8f\u3002\r\nTreeSet\r\nTreeSet\u7c7b\u5b9e\u73b0\uf9baSortedSet\u63a5\u53e3\uff0c\u80fd\u591f\u5bf9\u96c6\u5408\u4e2d\u7684\u5bf9\u8c61\u8fdb\ufa08\u6392\u5e8f"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'//\u521b\u5efa\u5bf9\u8c61,HashSet\u548cTreeSet api\u4e00\u6837\r\nSet<Integer> set = new HashSet<>();\r\n//\u5f80\u5bb9\u5668\uf9e9\u9762\u6dfb\u52a0\u5bf9\u8c61\r\nset.add("jack");\r\n//\u6e05\u7a7a\u5143\u7d20 \r\nset.clear();\r\n//\u8fd4\u56de\u2f24\u5c0f  \r\nset.size();\r\n//\u6839\u636e\u5bf9\u8c61\u5220\u9664\u5143\u7d20\r\nset.remove("jack");\r\n//\u662f\u5426\u4e3a\u7a7a\r\nset.isEmpty();\n'})}),"\n",(0,s.jsx)(t.p,{children:"\u4e24\u8005\u5e38\u89c1\u533a\u522b\r\n1\u3001HashSet\uf967\u80fd\u4fdd\u8bc1\u5143\u7d20\u7684\u6392\u5217\uf99c\u987a\u5e8f\uff0cTreeSet\u662fSortedSet\u63a5\u53e3\u7684\u552f\u4e00\u5b9e\u73b0\u7c7b\uff0c\u53ef\u4ee5\u786e\u4fdd\u96c6\u5408\u5143\u7d20\u5904\u4e8e\u6392\u5e8f\u72b6\u6001\r\n2\u3001HashSet\u5e95\u5c42\u7528\u7684\u662f\u54c8\u5e0c\u8868\uff0cTreeSet\u91c7\u7528\u7684\u6570\u636e\u7ed3\u6784\u662f\u7ea2\u2fca\u6811\uff08\u7ea2\u2fca\u6811\u662f\u2f00\u79cd\u7279\u5b9a\u7c7b\u578b\u7684\u2f06\u53c9\u6811\uff09\r\n3\u3001HashSet\u4e2d\u5143\u7d20\u53ef\u4ee5\u662fnull\uff0c\u4f46\u53ea\u80fd\u6709\u4e00\u4e2a\uff0cTreeSet\uf967\u5141\u8bb8\u653e\u2f0anull\r\n4\u3001\u4e00\u822c\u4f7f\u2f64\u7528HashSet\uff0c\u5982\u679c\u9700\u8981\u6392\u5e8f\u7684\u529f\u80fd\u65f6\uff0c\u624d\u4f7f\u7528TreeSet\uff08\u6027\u80fd\u539f\u56e0\uff09"})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(6540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}},6890:e=>{e.exports=JSON.parse('{"permalink":"/blog/product-set","editUrl":"https://github.com/Jachen99/Jachen99.github.io/tree/V2.2.1/blog/2018/07-13-\u96c6\u5408Set.md","source":"@site/blog/2018/07-13-\u96c6\u5408Set.md","title":"\u96c6\u5408Set","description":"\u96c6\u5408\u6846\u67b6\u4e4bSet\u53ca\u5176\u5b50\u7c7b","date":"2018-07-13T00:00:00.000Z","tags":[],"readingTime":2.37,"hasTruncateMarker":false,"authors":[{"name":"\u5b63\u51a0\u81e3","title":"\u540e\u7aef\u7814\u53d1\u5de5\u7a0b\u5e08","url":"https://github.com/jachen99","page":{"permalink":"/blog/authors/jiguanchen"},"socials":{"github":"https://github.com/jachen99"},"imageURL":"https://github.com/jachen99.png","key":"jiguanchen"}],"frontMatter":{"slug":"product-set","title":"\u96c6\u5408Set","authors":["jiguanchen"]},"unlisted":false,"prevItem":{"title":"\u96c6\u5408Map","permalink":"/blog/product-map"},"nextItem":{"title":"\u96c6\u5408List","permalink":"/blog/product-list"}}')}}]);