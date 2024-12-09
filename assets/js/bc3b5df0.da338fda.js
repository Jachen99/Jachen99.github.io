"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[6540],{70453:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var r=t(16239),i=t(74848),a=t(28453);const l={slug:"product-tree-structure-construction",title:"\u4f7f\u7528Java8\u65b0\u7279\u6027\u6784\u5efa\u6811\u5f62\u7ed3\u6784\uff1a\u7075\u6d3b\u7684\u7236\u5b50\u8282\u70b9\u5173\u7cfb\u5904\u7406",authors:["jiguanchen"],tags:["java"]},s=void 0,d={authorsImageUrls:[void 0]},o=[{value:"\u9879\u76ee\u80cc\u666f",id:"\u9879\u76ee\u80cc\u666f",level:3},{value:"\u9879\u76ee\u9700\u6c42",id:"\u9879\u76ee\u9700\u6c42",level:3},{value:"\u5173\u952e\u6280\u672f",id:"\u5173\u952e\u6280\u672f",level:3},{value:"\u4ee3\u7801\u5b9e\u73b0",id:"\u4ee3\u7801\u5b9e\u73b0",level:3},{value:"\u4ee3\u7801\u89e3\u6790",id:"\u4ee3\u7801\u89e3\u6790",level:3},{value:"\u8f93\u51fa\u7ed3\u679c",id:"\u8f93\u51fa\u7ed3\u679c",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:3}];function c(n){const e={blockquote:"blockquote",code:"code",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["\u5728\u5b9e\u9645\u5f00\u53d1\u4e2d\uff0c\u6811\u5f62\u7ed3\u6784\u5e7f\u6cdb\u5e94\u7528\u4e8e\u7ec4\u7ec7\u548c\u8868\u793a\u5c42\u7ea7\u5316\u6570\u636e\uff0c\u5982\u6587\u4ef6\u76ee\u5f55\u3001\u83dc\u5355\u5bfc\u822a\u3001\u7ec4\u7ec7\u67b6\u6784\u7b49\u3002Java 8 \u7684\u6d41\u5f0f API \u548c\u51fd\u6570\u5f0f\u7f16\u7a0b\u7279\u6027\u4e3a\u5904\u7406\u8fd9\u7c7b\u95ee\u9898\u63d0\u4f9b\u4e86\u6781\u5927\u7684\u4fbf\u5229\u3002\u4e0b\u9762\u5c06\u5206\u4eab\u5982\u4f55\u4f7f\u7528 Java 8 \u4e2d\u7684 ",(0,i.jsx)(e.code,{children:"Function"})," \u548c ",(0,i.jsx)(e.code,{children:"BiConsumer"})," \u7b49\u65b0\u7279\u6027\uff0c\u6784\u5efa\u6811\u5f62\u7ed3\u6784\u5e76\u5904\u7406\u7236\u5b50\u8282\u70b9\u5173\u7cfb\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"\u9879\u76ee\u80cc\u666f",children:"\u9879\u76ee\u80cc\u666f"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u8bb8\u591a\u4e1a\u52a1\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u7ecf\u5e38\u9700\u8981\u6839\u636e\u8282\u70b9\u7684\u7236\u5b50\u5173\u7cfb\u6765\u6784\u5efa\u4e00\u4e2a\u6811\u5f62\u7ed3\u6784\u3002\u4f8b\u5982\uff0c\u4e00\u4e2a\u7b80\u5355\u7684\u4ea4\u6613\u4fe1\u606f\u6a21\u578b\u53ef\u80fd\u5305\u542b\u591a\u4e2a\u4ea4\u6613\u8282\u70b9\uff0c\u8282\u70b9\u4e4b\u95f4\u6709\u7236\u5b50\u5173\u7cfb\u3002\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0c\u6211\u4eec\u53ef\u4ee5\u5feb\u901f\u5b9e\u73b0\u5c42\u7ea7\u7ed3\u6784\uff0c\u5e76\u5bf9\u6570\u636e\u8fdb\u884c\u7075\u6d3b\u64cd\u4f5c\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u9879\u76ee\u9700\u6c42",children:"\u9879\u76ee\u9700\u6c42"}),"\n",(0,i.jsxs)(e.p,{children:["\u6211\u4eec\u9700\u8981\u5b9e\u73b0\u4e00\u4e2a\u65b9\u6cd5\uff0c\u5c06\u4e00\u7ec4\u6570\u636e\u6839\u636e\u7236\u5b50\u5173\u7cfb\u6784\u5efa\u6210\u6811\u5f62\u7ed3\u6784\u3002\u5728\u6811\u5f62\u7ed3\u6784\u4e2d\uff0c\u7236\u8282\u70b9\u5c06\u5305\u542b\u6240\u6709\u5b50\u8282\u70b9\u3002\u6211\u4eec\u4f7f\u7528 Java 8 \u63d0\u4f9b\u7684\u6d41\u5f0f\u64cd\u4f5c\u6765\u5b9e\u73b0\u8fd9\u4e00\u529f\u80fd\uff0c\u540c\u65f6\u5229\u7528\u51fd\u6570\u5f0f\u63a5\u53e3\uff0c\u5982 ",(0,i.jsx)(e.code,{children:"Function"})," \u548c ",(0,i.jsx)(e.code,{children:"BiConsumer"}),"\uff0c\u6765\u63d0\u9ad8\u4ee3\u7801\u7684\u7075\u6d3b\u6027\u548c\u53ef\u590d\u7528\u6027\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"\u5173\u952e\u6280\u672f",children:"\u5173\u952e\u6280\u672f"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"BiConsumer"}),"\uff1a\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\u5e76\u8fd4\u56de ",(0,i.jsx)(e.code,{children:"void"}),"\uff0c\u6211\u4eec\u7528\u5b83\u6765\u5904\u7406\u8282\u70b9\u4e4b\u95f4\u7684\u7236\u5b50\u5173\u7cfb\uff0c\u4f8b\u5982\u4e3a\u7236\u8282\u70b9\u8bbe\u7f6e\u5b50\u8282\u70b9\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Function"}),"\uff1a\u63a5\u53d7\u4e00\u4e2a\u8f93\u5165\u53c2\u6570\u5e76\u8fd4\u56de\u4e00\u4e2a\u7ed3\u679c\uff0c\u7528\u4e8e\u4ece\u8282\u70b9\u4e2d\u83b7\u53d6 ID \u548c\u7236 ID\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Stream API"}),"\uff1a\u901a\u8fc7\u6d41\u5f0f\u64cd\u4f5c\u5bf9\u6570\u636e\u8fdb\u884c\u8fc7\u6ee4\u548c\u5904\u7406\uff0c\u907f\u514d\u4e86\u4f20\u7edf\u7684\u5d4c\u5957\u5faa\u73af\u65b9\u5f0f\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u4ee3\u7801\u5b9e\u73b0",children:"\u4ee3\u7801\u5b9e\u73b0"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'import java.util.ArrayList;\nimport java.util.Arrays;\nimport java.util.List;\nimport java.util.function.BiConsumer;\nimport java.util.function.Function;\nimport java.util.stream.Collectors;\n\n/**\n * \u529f\u80fd\u63cf\u8ff0: \n * \u8be5\u7c7b\u7528\u4e8e\u6784\u5efa\u6811\u5f62\u7ed3\u6784\uff0c\u57fa\u4e8e\u7ed9\u5b9a\u7684\u6570\u636e\u5217\u8868\uff0c\u5c06\u7236\u5b50\u8282\u70b9\u5173\u7cfb\u7ec4\u7ec7\u6210\u5c42\u7ea7\u5316\u7684\u6811\u5f62\u7ed3\u6784\u3002\n * \u901a\u8fc7\u4f7f\u7528 Java 8 \u65b0\u7279\u6027\uff0c\u5982 Function \u548c BiConsumer\uff0c\u7075\u6d3b\u5730\u5904\u7406\u8282\u70b9\u95f4\u7684\u7236\u5b50\u5173\u7cfb\u3002\n * -\n * \u521b\u5efa\u4eba: \u5b63\u51a0\u81e3\n * \u521b\u5efa\u65f6\u95f4: 2024/12/2 15:38\n */\npublic class TreeStructureTest {\n\n    // \u6a21\u62df\u7684\u8282\u70b9\u7c7b\n    static class TradeInfo {\n        private String tradeID;  // \u5f53\u524d\u8282\u70b9ID\n        private String parentID; // \u7236\u8282\u70b9ID\n        private List<TradeInfo> children;  // \u5b50\u8282\u70b9\u5217\u8868\n\n        public TradeInfo(String tradeID, String parentID) {\n            this.tradeID = tradeID;\n            this.parentID = parentID;\n            this.children = new ArrayList<>();\n        }\n\n        // Getter \u548c Setter \u65b9\u6cd5\n        public String getTradeID() {\n            return tradeID;\n        }\n\n        public void setTradeID(String tradeID) {\n            this.tradeID = tradeID;\n        }\n\n        public String getParentID() {\n            return parentID;\n        }\n\n        public void setParentID(String parentID) {\n            this.parentID = parentID;\n        }\n\n        public List<TradeInfo> getChildren() {\n            return children;\n        }\n\n        public void setChildren(List<TradeInfo> children) {\n            this.children = children;\n        }\n\n        @Override\n        public String toString() {\n            return "TradeInfo{" +\n                    "tradeID=\'" + tradeID + \'\\\'\' +\n                    ", parentID=\'" + parentID + \'\\\'\' +\n                    ", children=" + children +\n                    \'}\';\n        }\n    }\n\n    // \u6784\u5efa\u6811\u5f62\u7ed3\u6784\n    private static <T, R> List<T> buildTree(List<T> dataList, BiConsumer<T, List<T>> setChildF, Function<T, R> getIdF,\n                                            Function<T, R> getParentIdF, R rootParentId) {\n        if (dataList != null && !dataList.isEmpty()) {\n            setChildCall(dataList, setChildF, getIdF, getParentIdF, rootParentId);\n            dataList = dataList.stream()\n                    .filter(t -> (rootParentId != null && rootParentId.equals(getParentIdF.apply(t)))\n                            || (rootParentId == null && getParentIdF.apply(t) == null))\n                    .collect(Collectors.toList());\n        }\n        return dataList;\n    }\n\n    // \u5c06\u5b50\u96c6\u653e\u5165\u7236\u7ea7\n    private static <T, R> List<T> setChildCall(List<T> dataList, BiConsumer<T, List<T>> setChildF, Function<T, R> getIdF,\n                                               Function<T, R> getParentIdF, R parentId) {\n        if (dataList == null || dataList.isEmpty()) {\n            return dataList;\n        }\n        List<T> parentChild = dataList.stream()\n                .filter(t -> parentId == null || (getParentIdF.apply(t) != null && getParentIdF.apply(t).equals(parentId)))\n                .collect(Collectors.toList());\n\n        for (T t : parentChild) {\n            setChildF.accept(t, setChildCall(dataList, setChildF, getIdF, getParentIdF, getIdF.apply(t)));\n        }\n        return parentChild;\n    }\n\n    public static void main(String[] args) {\n        // \u521b\u5efa\u793a\u4f8b\u6570\u636e\n        List<TradeInfo> dataList = Arrays.asList(\n                new TradeInfo("1", null),\n                new TradeInfo("2", "1"),\n                new TradeInfo("3", "1"),\n                new TradeInfo("4", "2"),\n                new TradeInfo("5", "2")\n        );\n\n        // \u5b9a\u4e49\u5982\u4f55\u83b7\u53d6ID\u548c\u7236ID\n        Function<TradeInfo, String> getIdF = TradeInfo::getTradeID;\n        Function<TradeInfo, String> getParentIdF = TradeInfo::getParentID;\n\n        // \u5b9a\u4e49\u5982\u4f55\u8bbe\u7f6e\u5b50\u8282\u70b9\n        BiConsumer<TradeInfo, List<TradeInfo>> setChildF = TradeInfo::setChildren;\n\n        // \u6784\u5efa\u6811\u7ed3\u6784\n        List<TradeInfo> tree = buildTree(dataList, setChildF, getIdF, getParentIdF, null);\n\n        // \u8f93\u51fa\u7ed3\u679c\n        System.out.println("\u6784\u5efa\u540e\u7684\u6811\u5f62\u7ed3\u6784:");\n        tree.forEach(System.out::println);\n    }\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"\u4ee3\u7801\u89e3\u6790",children:"\u4ee3\u7801\u89e3\u6790"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"TradeInfo \u7c7b"}),"\uff1a\u5b9a\u4e49\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u8282\u70b9\u7c7b\uff0c\u5305\u542b ",(0,i.jsx)(e.code,{children:"tradeID"})," \u548c ",(0,i.jsx)(e.code,{children:"parentID"}),"\uff0c\u5e76\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"children"})," \u5217\u8868\u5b58\u50a8\u5b50\u8282\u70b9\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"buildTree \u65b9\u6cd5"}),"\uff1a\u8fd9\u662f\u6811\u5f62\u7ed3\u6784\u6784\u5efa\u7684\u6838\u5fc3\u65b9\u6cd5\u3002\u5b83\u901a\u8fc7\u9012\u5f52\u5c06\u5b50\u8282\u70b9\u8bbe\u7f6e\u5230\u7236\u8282\u70b9\uff0c\u5e76\u6839\u636e\u7236\u8282\u70b9 ID \u7b5b\u9009\u51fa\u8be5\u5c42\u7ea7\u7684\u8282\u70b9\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"setChildCall \u65b9\u6cd5"}),"\uff1a\u8be5\u65b9\u6cd5\u5b9e\u73b0\u4e86\u9012\u5f52\u7684\u6838\u5fc3\u903b\u8f91\uff0c\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"BiConsumer"})," \u5c06\u5b50\u8282\u70b9\u8bbe\u7f6e\u5230\u7236\u8282\u70b9\uff0c\u6784\u5efa\u6811\u5f62\u7ed3\u6784\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u51fd\u6570\u5f0f\u63a5\u53e3"}),"\uff1a\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"Function"})," \u63a5\u53e3\u83b7\u53d6\u8282\u70b9\u7684 ID \u548c\u7236 ID\uff0c\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"BiConsumer"})," \u8bbe\u7f6e\u5b50\u8282\u70b9\uff0c\u5b9e\u73b0\u4e86\u7075\u6d3b\u7684\u8282\u70b9\u5173\u7cfb\u64cd\u4f5c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u8f93\u51fa\u7ed3\u679c",children:"\u8f93\u51fa\u7ed3\u679c"}),"\n",(0,i.jsx)(e.p,{children:"\u8fd0\u884c\u4ee5\u4e0a\u4ee3\u7801\u540e\uff0c\u8f93\u51fa\u7684\u6811\u5f62\u7ed3\u6784\u5c06\u5c55\u793a\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"\u6784\u5efa\u540e\u7684\u6811\u5f62\u7ed3\u6784:\nTradeInfo{tradeID='1', parentID='null', children=[TradeInfo{tradeID='2', parentID='1', children=[TradeInfo{tradeID='4', parentID='2', children=[]}, TradeInfo{tradeID='5', parentID='2', children=[]}]}, TradeInfo{tradeID='3', parentID='1', children=[]}]}\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u4e0a\u6240\u793a\uff0c\u6211\u4eec\u6210\u529f\u5730\u5c06\u4ea4\u6613\u4fe1\u606f\u5217\u8868\u7ec4\u7ec7\u6210\u4e86\u6811\u5f62\u7ed3\u6784\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u5c0f\u7ed3",children:"\u5c0f\u7ed3"}),"\n",(0,i.jsx)(e.p,{children:"\u901a\u8fc7 Java 8 \u7684\u51fd\u6570\u5f0f\u7f16\u7a0b\u7279\u6027\uff0c\u6211\u4eec\u53ef\u4ee5\u66f4\u52a0\u7b80\u6d01\u3001\u7075\u6d3b\u5730\u5904\u7406\u590d\u6742\u7684\u7236\u5b50\u8282\u70b9\u5173\u7cfb\u3002\u8fd9\u79cd\u65b9\u6cd5\u4e0d\u4ec5\u9002\u7528\u4e8e\u6811\u5f62\u7ed3\u6784\u7684\u6784\u5efa\uff0c\u8fd8\u80fd\u591f\u5e7f\u6cdb\u5e94\u7528\u4e8e\u5176\u4ed6\u9700\u8981\u5c42\u7ea7\u5173\u7cfb\u7684\u6570\u636e\u5904\u7406\u573a\u666f\u3002\u4f8b\u5982\uff0c\u5728\u5904\u7406\u6587\u4ef6\u76ee\u5f55\u3001\u7ec4\u7ec7\u67b6\u6784\u3001\u83dc\u5355\u5c42\u7ea7\u7b49\u95ee\u9898\u65f6\uff0c\u91c7\u7528\u7c7b\u4f3c\u7684\u65b9\u6cd5\u5c06\u5927\u5927\u63d0\u9ad8\u4ee3\u7801\u7684\u53ef\u8bfb\u6027\u548c\u53ef\u7ef4\u62a4\u6027\u3002"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u5f53\u7136\uff0c\u5728\u5b9e\u9645\u5e94\u7528\u4e2d\uff0c\u6811\u5f62\u7ed3\u6784\u53ef\u80fd\u4f1a\u66f4\u52a0\u590d\u6742\uff0c\u6d89\u53ca\u66f4\u591a\u7684\u4e1a\u52a1\u903b\u8f91\u3002\u4f60\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u8fdb\u884c\u6269\u5c55\u548c\u8c03\u6574\u3002\u5e0c\u671b\u672c\u6587\u80fd\u4e3a\u4f60\u7684\u5f00\u53d1\u5de5\u4f5c\u63d0\u4f9b\u4e00\u4e9b\u542f\u53d1\uff01\ud83d\ude80"}),"\n"]}),"\n",(0,i.jsx)(e.hr,{})]})}function u(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>s});var r=t(96540);const i={},a=r.createContext(i);function l(n){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),r.createElement(a.Provider,{value:e},n.children)}},16239:n=>{n.exports=JSON.parse('{"permalink":"/blog/product-tree-structure-construction","editUrl":"https://github.com/Jachen99/Jachen99.github.io/tree/V3.0.0/blog/2024/12-02-\u4f7f\u7528Java8\u65b0\u7279\u6027\u6784\u5efa\u6811\u5f62\u7ed3\u6784.md","source":"@site/blog/2024/12-02-\u4f7f\u7528Java8\u65b0\u7279\u6027\u6784\u5efa\u6811\u5f62\u7ed3\u6784.md","title":"\u4f7f\u7528Java8\u65b0\u7279\u6027\u6784\u5efa\u6811\u5f62\u7ed3\u6784\uff1a\u7075\u6d3b\u7684\u7236\u5b50\u8282\u70b9\u5173\u7cfb\u5904\u7406","description":"\u5728\u5b9e\u9645\u5f00\u53d1\u4e2d\uff0c\u6811\u5f62\u7ed3\u6784\u5e7f\u6cdb\u5e94\u7528\u4e8e\u7ec4\u7ec7\u548c\u8868\u793a\u5c42\u7ea7\u5316\u6570\u636e\uff0c\u5982\u6587\u4ef6\u76ee\u5f55\u3001\u83dc\u5355\u5bfc\u822a\u3001\u7ec4\u7ec7\u67b6\u6784\u7b49\u3002Java 8 \u7684\u6d41\u5f0f API \u548c\u51fd\u6570\u5f0f\u7f16\u7a0b\u7279\u6027\u4e3a\u5904\u7406\u8fd9\u7c7b\u95ee\u9898\u63d0\u4f9b\u4e86\u6781\u5927\u7684\u4fbf\u5229\u3002\u4e0b\u9762\u5c06\u5206\u4eab\u5982\u4f55\u4f7f\u7528 Java 8 \u4e2d\u7684 Function \u548c BiConsumer \u7b49\u65b0\u7279\u6027\uff0c\u6784\u5efa\u6811\u5f62\u7ed3\u6784\u5e76\u5904\u7406\u7236\u5b50\u8282\u70b9\u5173\u7cfb\u3002","date":"2024-12-02T00:00:00.000Z","tags":[{"inline":true,"label":"java","permalink":"/blog/tags/java"}],"readingTime":6.41,"hasTruncateMarker":false,"authors":[{"name":"\u5b63\u51a0\u81e3","title":"\u540e\u7aef\u7814\u53d1\u5de5\u7a0b\u5e08","url":"https://github.com/jachen99","page":{"permalink":"/blog/authors/jiguanchen"},"socials":{"github":"https://github.com/jachen99"},"imageURL":"https://github.com/jachen99.png","key":"jiguanchen"}],"frontMatter":{"slug":"product-tree-structure-construction","title":"\u4f7f\u7528Java8\u65b0\u7279\u6027\u6784\u5efa\u6811\u5f62\u7ed3\u6784\uff1a\u7075\u6d3b\u7684\u7236\u5b50\u8282\u70b9\u5173\u7cfb\u5904\u7406","authors":["jiguanchen"],"tags":["java"]},"unlisted":false,"prevItem":{"title":"BI\u53ef\u89c6\u5316\u5e73\u53f0\u96c6\u6210OSS","permalink":"/blog/product-docs-oss-integration"},"nextItem":{"title":"SpringBoot\u96c6\u6210Jasypt\u5b9e\u73b0Nacos\u914d\u7f6e\u52a0\u5bc6\u4e0e\u89e3\u5bc6","permalink":"/blog/product-jasypt-nacos-config"}}')}}]);