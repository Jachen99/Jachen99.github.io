"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[7552],{99456:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>u});var r=e(51983),a=e(74848),i=e(28453);const c={slug:"product-java-exception-finally-must-execute",title:"\u5f02\u5e38\u5904\u7406\u4e2dfinally\u5fc5\u6267\u884c",authors:["jiguanchen"]},l=void 0,o={authorsImageUrls:[void 0]},u=[];function s(n){const t={code:"code",em:"em",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:"\u8bfe\u7a0b\u4ee3\u7801\u6f14\u793a \u9762\u8bd5\u9898\uff0c\u8fd4\u56de\u7ed3\u679c\u6700\u7ec8\u662ffinally\u4e3a\u51c6"}),"\uff08\u5c3d\u91cf\uf967\u8981\u5728finally\u91cc\u9762\u4f7f\u7528return\uff0c\u4f1a\u5ffd\uf976try catch\u91cc\u9762\u7684return\uff0c\u5bb9\u6613\u9020\u6210\u672a\u77e5\u7684bug\uff09"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'try{\r\n   // \u53ef\u80fd\u53d1\u751f\u5f02\u5e38\u7684\u4ee3\u7801\r\n}catch(ExceptionName1 e1){\r\n   //\u51fa\u5f02\u5e38\u7684\u65f6\u5019\u5904\uf9e4\r\n}catch(ExceptionName2 e2){\r\n   //\u51fa\u5f02\u5e38\u7684\u65f6\u5019\u5904\uf9e4\r\n}\r\ntry{\r\n   // \u53ef\u80fd\u53d1\u751f\u5f02\u5e38\u7684\u4ee3\u7801\r\n}catch(ExceptionName1 e1){\r\n   //\u51fa\u5f02\u5e38\u7684\u65f6\u5019\u5904\uf9e4\r\n}finally{\r\n    //\u80af\u5b9a\u6267\ufa08\u7684\u4ee3\u7801\r\n}\r\ntry{\r\n   // \u53ef\u80fd\u53d1\u751f\u5f02\u5e38\u7684\u4ee3\u7801\r\n}finally{\r\n    //\u80af\u5b9a\u6267\u884c\u7684\u4ee3\u7801\r\n}\r\n    public static int divide(int num1, int num2){\r\n        try {\r\n            int result = num1/num2;\r\n            return result;\r\n        }catch (Exception e){\r\n            System.out.println("\u51fa\u5f02\u5e38");\r\n        }finally {\r\n            System.out.println("finally\u6267\u2f8f\uf9ba");\r\n             return -2;\r\n                    }\r\n                 //   return -1;\r\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"\u4e0d\u7ba1\u662f\u5426\u5b58\u5728\u5f02\u5e38\u8f93\u51fa\u90fd\u662f-2"})]})}function p(n={}){const{wrapper:t}={...(0,i.R)(),...n.components};return t?(0,a.jsx)(t,{...n,children:(0,a.jsx)(s,{...n})}):s(n)}},28453:(n,t,e)=>{e.d(t,{R:()=>c,x:()=>l});var r=e(96540);const a={},i=r.createContext(a);function c(n){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function l(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:c(n.components),r.createElement(i.Provider,{value:t},n.children)}},51983:n=>{n.exports=JSON.parse('{"permalink":"/blog/product-java-exception-finally-must-execute","editUrl":"https://github.com/Jachen99/Jachen99.github.io/tree/V3.0.0/blog/2019/11-25-\u5f02\u5e38\u5904\u7406\u4e2dfinally\u5fc5\u6267\u884c.md","source":"@site/blog/2019/11-25-\u5f02\u5e38\u5904\u7406\u4e2dfinally\u5fc5\u6267\u884c.md","title":"\u5f02\u5e38\u5904\u7406\u4e2dfinally\u5fc5\u6267\u884c","description":"\u8bfe\u7a0b\u4ee3\u7801\u6f14\u793a \u9762\u8bd5\u9898\uff0c\u8fd4\u56de\u7ed3\u679c\u6700\u7ec8\u662ffinally\u4e3a\u51c6\uff08\u5c3d\u91cf\uf967\u8981\u5728finally\u91cc\u9762\u4f7f\u7528return\uff0c\u4f1a\u5ffd\uf976try catch\u91cc\u9762\u7684return\uff0c\u5bb9\u6613\u9020\u6210\u672a\u77e5\u7684bug\uff09","date":"2019-11-25T00:00:00.000Z","tags":[],"readingTime":0.91,"hasTruncateMarker":false,"authors":[{"name":"\u5b63\u51a0\u81e3","title":"\u540e\u7aef\u7814\u53d1\u5de5\u7a0b\u5e08","url":"https://github.com/jachen99","page":{"permalink":"/blog/authors/jiguanchen"},"socials":{"github":"https://github.com/jachen99"},"imageURL":"https://github.com/jachen99.png","key":"jiguanchen"}],"frontMatter":{"slug":"product-java-exception-finally-must-execute","title":"\u5f02\u5e38\u5904\u7406\u4e2dfinally\u5fc5\u6267\u884c","authors":["jiguanchen"]},"unlisted":false,"prevItem":{"title":"JDK8\u65b0\u7279\u6027","permalink":"/blog/product-java-jdk8-new-features"},"nextItem":{"title":"Java\u6d41\u7a0b\u63a7\u5236\u8bed\u53e5","permalink":"/blog/product-java-flow-control-statement"}}')}}]);