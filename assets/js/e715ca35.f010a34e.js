"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[6613],{54868:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var i=t(82618),s=t(74848),l=t(28453);const r={slug:"product-security-system-exit-jwt-invalid",title:"\u5b89\u5168\u529f\u80fd\u4e4b\u7cfb\u7edf\u9000\u51fa\u540eJWT\u4ee4\u724c\u5931\u6548",authors:["jiguanchen"],tags:["\u5b89\u5168"]},c="\u7cfb\u7edf\u5b89\u5168\u529f\u80fd\uff1a\u7cfb\u7edf\u9000\u51fa\u540e\u4ee4\u724c\u5931\u6548",a={authorsImageUrls:[void 0]},o=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u9700\u6c42",id:"\u9700\u6c42",level:2},{value:"\u5206\u6790\u4e0e\u8bbe\u8ba1",id:"\u5206\u6790\u4e0e\u8bbe\u8ba1",level:2},{value:"\u6838\u5fc3\u4ee3\u7801",id:"\u6838\u5fc3\u4ee3\u7801",level:2},{value:"\u6269\u5c55",id:"\u6269\u5c55",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"\u5728\u73b0\u4ee3Web\u5e94\u7528\u4e2d\uff0c\u7528\u6237\u9000\u51fa\u7cfb\u7edf\u662f\u4e00\u4e2a\u57fa\u672c\u529f\u80fd\uff0c\u7136\u800c\uff0c\u5982\u4f55\u786e\u4fdd\u9000\u51fa\u540e\u7684\u4ee4\u724c\u4e0d\u518d\u6709\u6548\uff0c\u662f\u7cfb\u7edf\u5b89\u5168\u6027\u7684\u4e00\u4e2a\u5173\u952e\u95ee\u9898\u3002\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7\u5728\u7528\u6237\u9000\u51fa\u65f6\u5c06JWT\u4ee4\u724c\u52a0\u5165\u9ed1\u540d\u5355\uff0c\u4ee5\u53ca\u5728\u540e\u7eed\u8bf7\u6c42\u4e2d\u9a8c\u8bc1\u4ee4\u724c\u7684\u6709\u6548\u6027\uff0c\u6784\u5efa\u7cfb\u7edf\u7684\u53cc\u5c42\u5b89\u5168\u673a\u5236\uff0c\u6709\u6548\u5e94\u5bf9\u4ee4\u724c\u6ee5\u7528\u7684\u98ce\u9669\u3002"})}),"\n",(0,s.jsx)(n.h2,{id:"\u80cc\u666f",children:"\u80cc\u666f"}),"\n",(0,s.jsx)(n.p,{children:"Web\u5e94\u7528\u4e2d\u7684\u7528\u6237\u8ba4\u8bc1\u4e00\u822c\u4f9d\u8d56\u4e8eJWT\u4ee4\u724c\uff0c\u5b83\u662f\u4e00\u79cd\u8f7b\u91cf\u7ea7\u7684\u8eab\u4efd\u9a8c\u8bc1\u65b9\u5f0f\u3002\u7136\u800c\uff0c\u4e00\u65e6\u7528\u6237\u9000\u51fa\u7cfb\u7edf\uff0c\u4e4b\u524d\u7684\u4ee4\u724c\u7406\u8bba\u4e0a\u4ecd\u7136\u662f\u6709\u6548\u7684\uff0c\u8fd9\u53ef\u80fd\u5bfc\u81f4\u4e00\u4e9b\u6f5c\u5728\u7684\u5b89\u5168\u95ee\u9898\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u9700\u8981\u4e00\u79cd\u673a\u5236\u6765\u786e\u4fdd\u9000\u51fa\u540e\u7684\u4ee4\u724c\u4e0d\u518d\u88ab\u63a5\u53d7\uff0c\u63d0\u5347\u7cfb\u7edf\u7684\u6574\u4f53\u5b89\u5168\u6027\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u9700\u6c42",children:"\u9700\u6c42"}),"\n",(0,s.jsx)(n.p,{children:"\u5b9e\u73b0\u7528\u6237\u5b89\u5168\u9000\u51fa\u529f\u80fd\u3002\n\u4f7f\u9000\u51fa\u540e\u7684JWT\u4ee4\u724c\u5931\u6548\uff0c\u9632\u6b62\u6ee5\u7528\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u5206\u6790\u4e0e\u8bbe\u8ba1",children:"\u5206\u6790\u4e0e\u8bbe\u8ba1"}),"\n",(0,s.jsx)(n.p,{children:"\u4e3a\u4e86\u6ee1\u8db3\u4e0a\u8ff0\u9700\u6c42\uff0c\u6211\u4eec\u5c06\u91c7\u7528\u4ee5\u4e0b\u65b9\u6848\uff1a"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"1\u3001\u5c06JWT\u4ee4\u724c\u52a0\u5165\u9ed1\u540d\u5355\uff1a"}),"\n\u5728\u7528\u6237\u9000\u51fa\u7cfb\u7edf\u65f6\uff0c\u83b7\u53d6JWT\u4ee4\u724c\u7684ID\u3002\n\u5c06\u4ee4\u724cID\u5b58\u50a8\u5230Redis\u4e2d\uff0c\u6784\u5efa\u9ed1\u540d\u5355\u3002\n\u8bbe\u7f6e\u4e0eJWT\u4ee4\u724c\u76f8\u540c\u7684\u5931\u6548\u65f6\u95f4\uff0c\u4fdd\u8bc1\u9ed1\u540d\u5355\u4e2d\u7684\u4ee4\u724c\u4f1a\u5728\u4e00\u5b9a\u65f6\u95f4\u540e\u81ea\u52a8\u6e05\u7406\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"2\u3001\u9a8c\u8bc1JWT\u4ee4\u724c\u7684\u6709\u6548\u6027\uff1a"}),"\n\u5728\u6bcf\u6b21\u8bf7\u6c42\u4e2d\uff0c\u83b7\u53d6JWT\u4ee4\u724c\u7684Claims\u3002\n\u68c0\u67e5\u7528\u6237\u5bf9\u8c61\u3001Claims\u5bf9\u8c61\u4ee5\u53ca\u4ee4\u724cID\u662f\u5426\u4e0d\u4e3a\u7a7a\u3002\n\u6784\u5efa\u9ed1\u540d\u5355\u4e2d\u7684key\uff0c\u901a\u8fc7Redis\u9a8c\u8bc1\u4ee4\u724c\u662f\u5426\u5728\u9ed1\u540d\u5355\u4e2d\u3002\n\u5982\u679c\u5728\u9ed1\u540d\u5355\u4e2d\uff0c\u62d2\u7edd\u8bf7\u6c42\u5904\u7406\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6838\u5fc3\u4ee3\u7801",children:"\u6838\u5fc3\u4ee3\u7801"}),"\n",(0,s.jsx)(n.p,{children:"\u5c06JWT\u4ee4\u724c\u52a0\u5165\u9ed1\u540d\u5355"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'// \u65b0\u589e\u5c06JWT\u4ee4\u724c\u52a0\u5165\u9ed1\u540d\u5355\u64cd\u4f5c\uff0c\u5e76\u8bbe\u7f6e\u76f8\u540c\u7684\u5931\u6548\u65f6\u95f4\nClaims claims = SecureUtil.getClaims(Objects.requireNonNull(request));\nif (ObjectUtil.isNotEmpty(claims)) {\n    Date expiration = claims.getExpiration();\n    DateTime now = DateTime.now();\n    long seconds = cn.hutool.core.date.DateUtil.between(now, expiration, DateUnit.SECOND);\n    String id = claims.getId();\n    String ExpIdKey = TokenConstant.EXP_ID + ":" + userId + ":" + id;\n    redisTemplate.opsForValue().set(ExpIdKey, id);\n    redisTemplate.expire(ExpIdKey, seconds, TimeUnit.SECONDS);\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u9a8c\u8bc1JWT\u4ee4\u724c\u662f\u5426\u6709\u6548"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'// \u62e6\u622a\u5668\u4e2d \u6821\u9a8c\u9ed1\u540d\u5355\nClaims claims = SecureUtil.getClaims(request);\nif (user != null && claims != null && StringUtil.isNotEmpty(claims.getId())) {\n    String key = TokenConstant.EXP_ID + ":" + user.getUserId() + ":" + claims.getId();\n    String jit = redisTemplate.opsForValue().get(key);\n    if (claims.getId().equals(jit)) {\n        log.debug("\u4ee4\u724c\u5df2\u5931\u6548");\n        failBack(resp);\n        return false;\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u6269\u5c55",children:"\u6269\u5c55"}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u8fc7\u8fd9\u79cd\u53cc\u5c42\u5b89\u5168\u673a\u5236\uff0c\u6211\u4eec\u53ef\u4ee5\u8fdb\u4e00\u6b65\u6269\u5c55\u7cfb\u7edf\u7684\u5b89\u5168\u6027\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5b9a\u65f6\u4efb\u52a1\u6e05\u7406\u8fc7\u671f\u4ee4\u724c\uff1a \u4f7f\u7528\u5b9a\u65f6\u4efb\u52a1\u5b9a\u671f\u6e05\u7406\u9ed1\u540d\u5355\u4e2d\u7684\u8fc7\u671f\u4ee4\u724c\uff0c\u786e\u4fdd\u9ed1\u540d\u5355\u4e0d\u4f1a\u65e0\u9650\u589e\u957f\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u57fa\u4e8e\u89d2\u8272\u6216\u6743\u9650\u7684\u5931\u6548\u7b56\u7565\uff1a \u6839\u636e\u7528\u6237\u7684\u89d2\u8272\u6216\u6743\u9650\uff0c\u5b9e\u73b0\u66f4\u7cbe\u7ec6\u5316\u7684\u4ee4\u724c\u5931\u6548\u7b56\u7565\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u7ed3\u5408\u53cc\u56e0\u7d20\u8ba4\u8bc1\uff1a \u5728\u4ee4\u724c\u9a8c\u8bc1\u524d\u52a0\u5165\u53cc\u56e0\u7d20\u8ba4\u8bc1\uff0c\u63d0\u5347\u7cfb\u7edf\u7684\u8eab\u4efd\u9a8c\u8bc1\u5c42\u7ea7\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u8fc7\u6784\u5efa\u7cfb\u7edf\u7684\u53cc\u5c42\u5b89\u5168\u673a\u5236\uff0c\u6211\u4eec\u6709\u6548\u5730\u5e94\u5bf9\u4e86\u7528\u6237\u9000\u51fa\u540e\u4ee4\u724c\u7684\u6ee5\u7528\u98ce\u9669\u3002\u8fd9\u79cd\u673a\u5236\u7b80\u5355\u800c\u5f3a\u5927\uff0c\u4e3aWeb\u5e94\u7528\u63d0\u4f9b\u4e86\u989d\u5916\u7684\u5b89\u5168\u4fdd\u969c\uff0c\u4f7f\u7528\u6237\u9000\u51fa\u66f4\u5177\u5b89\u5168\u6027\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(96540);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}},82618:e=>{e.exports=JSON.parse('{"permalink":"/blog/product-security-system-exit-jwt-invalid","editUrl":"https://github.com/Jachen99/Jachen99.github.io/tree/V3.0.0/blog/2024/04-10-\u5b89\u5168\u529f\u80fd\u4e4b\u7cfb\u7edf\u9000\u51fa\u540eJWT\u5931\u6548.md","source":"@site/blog/2024/04-10-\u5b89\u5168\u529f\u80fd\u4e4b\u7cfb\u7edf\u9000\u51fa\u540eJWT\u5931\u6548.md","title":"\u5b89\u5168\u529f\u80fd\u4e4b\u7cfb\u7edf\u9000\u51fa\u540eJWT\u4ee4\u724c\u5931\u6548","description":"\u5728\u73b0\u4ee3Web\u5e94\u7528\u4e2d\uff0c\u7528\u6237\u9000\u51fa\u7cfb\u7edf\u662f\u4e00\u4e2a\u57fa\u672c\u529f\u80fd\uff0c\u7136\u800c\uff0c\u5982\u4f55\u786e\u4fdd\u9000\u51fa\u540e\u7684\u4ee4\u724c\u4e0d\u518d\u6709\u6548\uff0c\u662f\u7cfb\u7edf\u5b89\u5168\u6027\u7684\u4e00\u4e2a\u5173\u952e\u95ee\u9898\u3002\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7\u5728\u7528\u6237\u9000\u51fa\u65f6\u5c06JWT\u4ee4\u724c\u52a0\u5165\u9ed1\u540d\u5355\uff0c\u4ee5\u53ca\u5728\u540e\u7eed\u8bf7\u6c42\u4e2d\u9a8c\u8bc1\u4ee4\u724c\u7684\u6709\u6548\u6027\uff0c\u6784\u5efa\u7cfb\u7edf\u7684\u53cc\u5c42\u5b89\u5168\u673a\u5236\uff0c\u6709\u6548\u5e94\u5bf9\u4ee4\u724c\u6ee5\u7528\u7684\u98ce\u9669\u3002","date":"2024-04-10T00:00:00.000Z","tags":[{"inline":true,"label":"\u5b89\u5168","permalink":"/blog/tags/\u5b89\u5168"}],"readingTime":3.8,"hasTruncateMarker":false,"authors":[{"name":"\u5b63\u51a0\u81e3","title":"\u540e\u7aef\u7814\u53d1\u5de5\u7a0b\u5e08","url":"https://github.com/jachen99","page":{"permalink":"/blog/authors/jiguanchen"},"socials":{"github":"https://github.com/jachen99"},"imageURL":"https://github.com/jachen99.png","key":"jiguanchen"}],"frontMatter":{"slug":"product-security-system-exit-jwt-invalid","title":"\u5b89\u5168\u529f\u80fd\u4e4b\u7cfb\u7edf\u9000\u51fa\u540eJWT\u4ee4\u724c\u5931\u6548","authors":["jiguanchen"],"tags":["\u5b89\u5168"]},"unlisted":false,"prevItem":{"title":"Redis\u6d88\u606f\u961f\u5217\u6d88\u8d39\u8005\u7aef\u65ad\u8fde\u91cd\u8bd5\u673a\u5236\u5b9e\u73b0","permalink":"/blog/product-design-and-optimization"},"nextItem":{"title":"\u7b2c\u4e09\u65b9\u6d4b\u8bd5-\u7cfb\u7edf\u5b89\u5168\u6d4b\u8bd5\u95ee\u9898\u4e4b\u6570\u636e\u52a0\u5bc6","permalink":"/blog/product-security-testing-problems"}}')}}]);