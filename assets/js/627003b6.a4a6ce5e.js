"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[8781],{3722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var r=n(5640),a=n(4848),o=n(8453);const i={slug:"product-java-jdk8-new-features",title:"JDK8\u65b0\u7279\u6027",authors:["jiguanchen"]},c=void 0,u={authorsImageUrls:[void 0]},s=[{value:"JDK8\u65b0\u7279\u6027",id:"jdk8\u65b0\u7279\u6027",level:2}];function l(e){const t={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"\u4e3b\u8981\u4ecb\u7ecd\u4e86JDK8\u7684\u4e00\u4e9b\u65b0\u7279\u6027\uff0c\u4e5f\u7b97\u4e0d\u4e0a\u65b0\u7279\u6027\uff0c\u51fa\u6765\u597d\u591a\u5e74\u4e86...."})}),"\n",(0,a.jsx)(t.h2,{id:"jdk8\u65b0\u7279\u6027",children:"JDK8\u65b0\u7279\u6027"}),"\n",(0,a.jsx)(t.p,{children:"1\u3001interface\u4e2d\u53ef\u4ee5\u6709static\u2f45\u6cd5\uff0c\u4f46\u5fc5\u987b\u6709\u2f45\u6cd5\u5b9e\u73b0\u4f53\uff0c\u8be5\u2f45\u65b9\u6cd5\u53ea\u5c5e\u4e8e\u8be5\u63a5\u2f1d\uff0c\u63a5\u53e3\u540d\u76f4\u63a5\u8c03\u2f64\u7528\u8be5\u65b9\u6cd5\r\n2\u3001\u63a5\u2f1d\u4e2d\u65b0\u589edefault\u5173\u952e\u5b57\u4fee\u9970\u7684\u65b9\u6cd5\uff0cdefault\u65b9\u6cd5\u53ea\u80fd\u5b9a\u4e49\u5728\u63a5\u2f1d\u4e2d\uff0c\u53ef\u4ee5\u5728\u5b50\u7c7b\u6216\u5b50\u63a5\u2f1d\u4e2d\u88ab\u91cd\u5199\u3002default\u5b9a\u4e49\u7684\u2f45\u65b9\u6cd5\u5fc5\u987b\u6709\u2f45\u65b9\u6cd5\u4f53\r\n3\u3001\u7236\u63a5\u53e3\u7684default\u65b9\u6cd5\u5982\u679c\u5728\u5b50\u63a5\u53e3\u6216\u5b50\u7c7b\u88ab\u91cd\u5199\uff0c\u90a3\u4e48\u2f26\u63a5\u53e3\u5b9e\u73b0\u5bf9\u8c61\u3001\u5b50\u7c7b\u5bf9\u8c61\uff0c\u8c03\u2f64\u7528\u8be5\u65b9\u6cd5\uff0c\u4ee5\u91cd\u5199\u4e3a\u51c6\r\n4\u3001\u672c\u7c7b\u3001\u63a5\u2f1d\u5982\u679c\u6ca1\u6709\u91cd\u5199\u7236\u7c7b\uff08\u5373\u63a5\u2f1d\uff09\u7684default\u65b9\u6cd5\uff0c\u5219\u5728\u8c03\u2f64default\u2f45\u6cd5\u65f6\uff0c\u4f7f\u2f64\u7528\u2f57\u7c7b\u5b9a\u4e49\u7684default\u2f45\u65b9\u6cd5\u903b\u8f91"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'public interface IPay{  \r\n    // static\u4fee\u9970\u7b26\u5b9a\u4e49\u9759\u6001\u2f45\u6cd5  \r\n    static void staticMethod() {  \r\n        System.out.println("\u63a5\u2f1d\u4e2d\u7684\u9759\u6001\u2f45\u6cd5");  \r\n    }  \r\n  \r\n    // default\u4fee\u9970\u7b26\u5b9a\u4e49\u9ed8\u8ba4\u65b9\u6cd5 ,\u9ed8\u8ba4\u65b9\u6cd5\uf967\u662f\u62bd\u8c61\u65b9\u6cd5\uff0c\u53ef\u4ee5\uf967\u91cd\u5199\u4e5f\u53ef\u4ee5\u91cd\u5199 \r\n    default void defaultMethod() {  \r\n        System.out.println("\u63a5\u2f1d\u4e2d\u7684\u9ed8\u8ba4\u2f45\u6cd5");  \r\n    }  \r\n}  \r\n// static\u2f45\u6cd5\u5fc5\u987b\u901a\u8fc7\u63a5\u2f1d\u7c7b\u8c03\u2f64\u7528  \r\n IPay.staticMethod();  \r\n  \r\n //default\u2f45\u6cd5\u5fc5\u987b\u901a\u8fc7\u5b9e\u73b0\u7c7b\u7684\u5bf9\u8c61\u8c03\u2f64\u7528  \r\n new IPay().defaultMethod();\n'})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(6540);const a={},o=r.createContext(a);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:t},e.children)}},5640:e=>{e.exports=JSON.parse('{"permalink":"/blog/product-java-jdk8-new-features","editUrl":"https://github.com/Jachen99/Jachen99.github.io/tree/V3.0.0/blog/2019/12-10-JDK8\u65b0\u7279\u6027.md","source":"@site/blog/2019/12-10-JDK8\u65b0\u7279\u6027.md","title":"JDK8\u65b0\u7279\u6027","description":"\u4e3b\u8981\u4ecb\u7ecd\u4e86JDK8\u7684\u4e00\u4e9b\u65b0\u7279\u6027\uff0c\u4e5f\u7b97\u4e0d\u4e0a\u65b0\u7279\u6027\uff0c\u51fa\u6765\u597d\u591a\u5e74\u4e86....","date":"2019-12-10T00:00:00.000Z","tags":[],"readingTime":1.53,"hasTruncateMarker":false,"authors":[{"name":"\u5b63\u51a0\u81e3","title":"\u540e\u7aef\u7814\u53d1\u5de5\u7a0b\u5e08","url":"https://github.com/jachen99","page":{"permalink":"/blog/authors/jiguanchen"},"socials":{"github":"https://github.com/jachen99"},"imageURL":"https://github.com/jachen99.png","key":"jiguanchen"}],"frontMatter":{"slug":"product-java-jdk8-new-features","title":"JDK8\u65b0\u7279\u6027","authors":["jiguanchen"]},"unlisted":false,"prevItem":{"title":"Linux\u5e38\u7528\u547d\u4ee4","permalink":"/blog/product-Linux"},"nextItem":{"title":"\u5f02\u5e38\u5904\u7406\u4e2dfinally\u5fc5\u6267\u884c","permalink":"/blog/product-java-exception-finally-must-execute"}}')}}]);