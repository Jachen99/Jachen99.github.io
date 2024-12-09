"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[2750],{57900:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var i=t(54721),a=t(74848),r=t(28453);const l={slug:"product-optimization-jdbc-time-range-sharding-strategy",title:"\u65f6\u95f4\u8303\u56f4\u5206\u8868\u7b56\u7565\u7684\u5b9e\u73b0\u4e0e\u4f18\u5316",authors:["jiguanchen"],tags:["sharding-jdbc"]},s="\u65f6\u95f4\u8303\u56f4\u5206\u8868\u7b56\u7565\u7684\u5b9e\u73b0\u4e0e\u4f18\u5316",c={authorsImageUrls:[void 0]},d=[{value:"\u5206\u8868\u6280\u672f\u6982\u8ff0",id:"\u5206\u8868\u6280\u672f\u6982\u8ff0",level:2},{value:"\u57fa\u4e8e\u65f6\u95f4\u8303\u56f4\u7684\u5206\u8868\u7b56\u7565",id:"\u57fa\u4e8e\u65f6\u95f4\u8303\u56f4\u7684\u5206\u8868\u7b56\u7565",level:2},{value:"1. \u5206\u8868\u89c4\u5219\u8bbe\u8ba1",id:"1-\u5206\u8868\u89c4\u5219\u8bbe\u8ba1",level:3},{value:"2. \u5206\u7247\u7b97\u6cd5\u7684\u5b9e\u73b0",id:"2-\u5206\u7247\u7b97\u6cd5\u7684\u5b9e\u73b0",level:3},{value:"3. \u5b9e\u73b0\u4ee3\u7801",id:"3-\u5b9e\u73b0\u4ee3\u7801",level:3},{value:"4. \u5206\u8868\u7b56\u7565\u89e3\u6790",id:"4-\u5206\u8868\u7b56\u7565\u89e3\u6790",level:3},{value:"\u4f18\u5316\u4e0e\u5e94\u7528",id:"\u4f18\u5316\u4e0e\u5e94\u7528",level:2},{value:"1. \u52a8\u6001\u6269\u5c55\u6027",id:"1-\u52a8\u6001\u6269\u5c55\u6027",level:3},{value:"2. \u8d1f\u8f7d\u5747\u8861",id:"2-\u8d1f\u8f7d\u5747\u8861",level:3},{value:"3. \u67e5\u8be2\u4f18\u5316",id:"3-\u67e5\u8be2\u4f18\u5316",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function o(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["\u5728\u5904\u7406\u5927\u91cf\u6570\u636e\u65f6\uff0c\u5982\u4f55\u9ad8\u6548\u5730\u5b58\u50a8\u548c\u67e5\u8be2\u662f\u6211\u4eec\u5e38\u9762\u4e34\u7684\u6311\u6218\u3002\u7279\u522b\u662f\u5728\u9700\u8981\u6309\u65f6\u95f4\u8fdb\u884c\u7edf\u8ba1\u3001\u5206\u6790\u548c\u5c55\u793a\u7684\u6570\u636e\u573a\u666f\u4e0b\uff0c\u6570\u636e\u91cf\u5f80\u5f80\u968f\u7740\u65f6\u95f4\u7684\u79ef\u7d2f\u800c\u8fc5\u901f\u81a8\u80c0\u3002\u4e3a\u4e86\u5e94\u5bf9\u8fd9\u4e9b\u6311\u6218\uff0c",(0,a.jsx)(n.strong,{children:"\u5206\u8868\u6280\u672f"}),"\u6210\u4e3a\u4e86\u4f18\u5316\u67e5\u8be2\u6027\u80fd\u548c\u7ba1\u7406\u5927\u89c4\u6a21\u6570\u636e\u7684\u5173\u952e\u624b\u6bb5\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u5728\u5b9e\u9645\u7684\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u9488\u5bf9\u5177\u6709\u65f6\u95f4\u7ef4\u5ea6\u7684\u5927\u6570\u636e\u8868\uff0c\u6211\u4eec\u901a\u5e38\u4f1a\u91c7\u7528\u6309\u65f6\u95f4\u8fdb\u884c\u5206\u8868\u7684\u7b56\u7565\u3002\u672c\u6587\u5c06\u603b\u7ed3\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a\u57fa\u4e8e\u65f6\u95f4\u8303\u56f4\u7684\u5206\u8868\u7b56\u7565\uff0c\u5e76\u901a\u8fc7\u5177\u4f53\u7684\u6280\u672f\u5b9e\u73b0\u6765\u5c55\u793a\u8fd9\u4e00\u7b56\u7565\u5728\u5b9e\u9645\u7cfb\u7edf\u4e2d\u7684\u5e94\u7528\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u5206\u8868\u6280\u672f\u6982\u8ff0",children:"\u5206\u8868\u6280\u672f\u6982\u8ff0"}),"\n",(0,a.jsx)(n.p,{children:"\u5206\u8868\u6280\u672f\u662f\u5c06\u4e00\u4e2a\u5927\u8868\u62c6\u5206\u6210\u591a\u4e2a\u5c0f\u8868\uff0c\u4ee5\u6b64\u6765\u63d0\u5347\u67e5\u8be2\u6027\u80fd\u548c\u7cfb\u7edf\u7684\u6269\u5c55\u6027\u3002\u5e38\u89c1\u7684\u5206\u8868\u7b56\u7565\u6709\uff1a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"\u6c34\u5e73\u5206\u8868"}),"\uff1a\u6839\u636e\u67d0\u4e2a\u5b57\u6bb5\uff08\u5982\u7528\u6237ID\u3001\u65f6\u95f4\u7b49\uff09\u5c06\u6570\u636e\u5206\u6563\u5230\u591a\u4e2a\u8868\u4e2d\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"\u5782\u76f4\u5206\u8868"}),"\uff1a\u5c06\u8868\u4e2d\u7684\u4e0d\u540c\u5b57\u6bb5\u62c6\u5206\u5230\u591a\u4e2a\u8868\u4e2d\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u5728\u6c34\u5e73\u5206\u8868\u4e2d\uff0c\u65f6\u95f4\u5b57\u6bb5\uff08\u5982\u5e74\u3001\u6708\u3001\u65e5\uff09\u662f\u4e00\u4e2a\u5e38\u89c1\u7684\u5206\u7247\u7ef4\u5ea6\u3002\u6839\u636e\u4e1a\u52a1\u9700\u6c42\uff0c\u6570\u636e\u4f1a\u88ab\u62c6\u5206\u6210\u591a\u4e2a\u6309\u65f6\u95f4\u547d\u540d\u7684\u8868\uff0c\u67e5\u8be2\u65f6\u901a\u8fc7\u65f6\u95f4\u8303\u56f4\u6765\u786e\u5b9a\u8981\u67e5\u8be2\u7684\u5177\u4f53\u5206\u8868\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u57fa\u4e8e\u65f6\u95f4\u8303\u56f4\u7684\u5206\u8868\u7b56\u7565",children:"\u57fa\u4e8e\u65f6\u95f4\u8303\u56f4\u7684\u5206\u8868\u7b56\u7565"}),"\n",(0,a.jsx)(n.p,{children:"\u4ee5\u67d0\u4e2a\u6570\u636e\u8868\uff08\u6bd4\u5982\u201c\u7535\u529b\u6d88\u8017\u6570\u636e\u201d\uff09\u4e3a\u4f8b\uff0c\u6211\u4eec\u5e0c\u671b\u6839\u636e\u65f6\u95f4\u6765\u8fdb\u884c\u5206\u8868\uff0c\u5c06\u6bcf\u4e2a\u6708\u7684\u6570\u636e\u5b58\u50a8\u5230\u4e0d\u540c\u7684\u8868\u4e2d\u3002\u8fd9\u79cd\u7b56\u7565\u4e0d\u4ec5\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u9ad8\u6548\u5730\u7ba1\u7406\u5927\u89c4\u6a21\u7684\u6570\u636e\uff0c\u8fd8\u80fd\u5728\u67e5\u8be2\u65f6\u907f\u514d\u5bf9\u6574\u4e2a\u8868\u7684\u5168\u8868\u626b\u63cf\uff0c\u4ece\u800c\u63d0\u9ad8\u6027\u80fd\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"1-\u5206\u8868\u89c4\u5219\u8bbe\u8ba1",children:"1. \u5206\u8868\u89c4\u5219\u8bbe\u8ba1"}),"\n",(0,a.jsxs)(n.p,{children:["\u5047\u8bbe\u6211\u4eec\u7684\u8868\u540d\u4e3a ",(0,a.jsx)(n.code,{children:"electricity_usage_data"}),"\uff0c\u6211\u4eec\u51b3\u5b9a\u6839\u636e\u6708\u4efd\u8fdb\u884c\u5206\u8868\u3002\u5206\u8868\u89c4\u5219\u5982\u4e0b\uff1a"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\u6309\u6708\u8fdb\u884c\u5206\u8868\uff0c\u8868\u540d\u683c\u5f0f\u4e3a ",(0,a.jsx)(n.code,{children:"electricity_usage_data_yyyyMM"}),"\uff0c\u4f8b\u5982\uff1a",(0,a.jsx)(n.code,{children:"electricity_usage_data_202301"}),"\u3001",(0,a.jsx)(n.code,{children:"electricity_usage_data_202302"})," \u7b49\u3002"]}),"\n",(0,a.jsx)(n.li,{children:"\u5728\u67e5\u8be2\u65f6\uff0c\u4f9d\u636e\u65f6\u95f4\u5b57\u6bb5\uff08\u5982\u67e5\u8be2\u67d0\u6708\u7684\u7535\u529b\u6570\u636e\uff09\uff0c\u52a8\u6001\u9009\u62e9\u6d89\u53ca\u7684\u5206\u8868\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"2-\u5206\u7247\u7b97\u6cd5\u7684\u5b9e\u73b0",children:"2. \u5206\u7247\u7b97\u6cd5\u7684\u5b9e\u73b0"}),"\n",(0,a.jsx)(n.p,{children:"\u4e3a\u4e86\u5b9e\u73b0\u6309\u65f6\u95f4\u8303\u56f4\u7684\u5206\u8868\uff0c\u6211\u4eec\u9700\u8981\u5b9e\u73b0\u4e00\u4e2a\u5206\u7247\u7b97\u6cd5\uff0c\u8fd9\u4e2a\u7b97\u6cd5\u7684\u4e3b\u8981\u4f5c\u7528\u662f\u6839\u636e\u67e5\u8be2\u7684\u65f6\u95f4\u8303\u56f4\uff0c\u8ba1\u7b97\u51fa\u9700\u8981\u8bbf\u95ee\u7684\u5206\u8868\u3002\u901a\u5e38\uff0c\u8fd9\u4e2a\u7b97\u6cd5\u4f1a\u6839\u636e\u4e00\u4e2a\u8d77\u59cb\u65f6\u95f4\u548c\u7ed3\u675f\u65f6\u95f4\uff0c\u786e\u5b9a\u54ea\u4e9b\u8868\u9700\u8981\u88ab\u67e5\u8be2\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u5047\u8bbe\u67e5\u8be2\u7684\u65f6\u95f4\u8303\u56f4\u662f\u4ece ",(0,a.jsx)(n.code,{children:"2023\u5e7401\u6708"})," \u5230 ",(0,a.jsx)(n.code,{children:"2023\u5e7403\u6708"}),"\uff0c\u90a3\u4e48\u5206\u7247\u7b97\u6cd5\u4f1a\u8fd4\u56de ",(0,a.jsx)(n.code,{children:"electricity_usage_data_202301"}),"\u3001",(0,a.jsx)(n.code,{children:"electricity_usage_data_202302"})," \u548c ",(0,a.jsx)(n.code,{children:"electricity_usage_data_202303"})," \u8fd9\u4e09\u4e2a\u8868\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"3-\u5b9e\u73b0\u4ee3\u7801",children:"3. \u5b9e\u73b0\u4ee3\u7801"}),"\n",(0,a.jsx)(n.p,{children:"\u4e0b\u9762\u662f\u4e00\u4e2a\u57fa\u4e8e\u65f6\u95f4\u8303\u56f4\u7684\u5206\u8868\u7b97\u6cd5\u5b9e\u73b0\u793a\u4f8b\u3002\u6211\u4eec\u4f7f\u7528\u4e86Sharding-JDBC\u6765\u5b9e\u73b0\u8fd9\u4e00\u5206\u7247\u7b56\u7565\uff0c\u5177\u4f53\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'@Component\npublic class MonthRangeShardingAlgorithm implements RangeShardingAlgorithm<String> {\n\n    @Override\n    public Collection<String> doSharding(Collection<String> collection, RangeShardingValue<String> rangeShardingValue) {\n        Collection<String> result = new ArrayList<>();\n        List<String> rangeList = getRangeList(rangeShardingValue);\n        \n        for (String tableName : rangeList) {\n            if (collection.contains(tableName.toLowerCase()) || collection.contains(tableName.toUpperCase())) {\n                result.add(tableName);\n            }\n        }\n        \n        if (result.isEmpty()) {\n            throw new UnsupportedOperationException("\u6ca1\u6709\u5339\u914d\u5230\u5206\u7247\u8868");\n        }\n        \n        return result;\n    }\n\n    private List<String> getRangeList(RangeShardingValue<String> rangeShardingValue) {\n        List<String> rangeList = new ArrayList<>();\n        String logicTableName = rangeShardingValue.getLogicTableName();\n        SimpleDateFormat format = new SimpleDateFormat("yyyyMMdd");\n        Range<String> valueRange = rangeShardingValue.getValueRange();\n        Object start = valueRange.lowerEndpoint();\n        Object end = valueRange.upperEndpoint();\n        \n        try {\n            Date startDate = format.parse(start.toString());\n            Date endDate = format.parse(end.toString());\n            DateTime startDateTime = DateUtil.beginOfMonth(startDate);\n            DateTime endDateTime = DateUtil.beginOfMonth(endDate);\n            \n            do {\n                String time = DateUtil.format(startDateTime, "yyyyMM");\n                String tableName = logicTableName.concat("_").concat(time);\n                rangeList.add(tableName);\n                startDateTime = DateUtil.offset(startDateTime, DateField.MONTH, 1);\n            } while (startDateTime.compareTo(endDateTime) <= 0);\n        } catch (ParseException e) {\n            e.printStackTrace();\n        }\n        \n        return rangeList;\n    }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"4-\u5206\u8868\u7b56\u7565\u89e3\u6790",children:"4. \u5206\u8868\u7b56\u7565\u89e3\u6790"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsxs)(n.strong,{children:[(0,a.jsx)(n.code,{children:"doSharding"}),"\u65b9\u6cd5"]}),"\uff1a\u8be5\u65b9\u6cd5\u6839\u636e\u8f93\u5165\u7684\u65f6\u95f4\u8303\u56f4\uff0c\u8ba1\u7b97\u51fa\u6d89\u53ca\u7684\u6240\u6709\u5206\u8868\u3002\u901a\u8fc7\u5bf9\u6bd4\u8868\u540d\uff0c\u7b5b\u9009\u51fa\u5b9e\u9645\u9700\u8981\u67e5\u8be2\u7684\u5206\u8868\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsxs)(n.strong,{children:[(0,a.jsx)(n.code,{children:"getRangeList"}),"\u65b9\u6cd5"]}),"\uff1a\u5c06\u67e5\u8be2\u7684\u8d77\u59cb\u65f6\u95f4\u548c\u7ed3\u675f\u65f6\u95f4\u8fdb\u884c\u5904\u7406\uff0c\u8ba1\u7b97\u51fa\u6d89\u53ca\u7684\u6240\u6709\u6708\u4efd\uff0c\u5e76\u751f\u6210\u5bf9\u5e94\u7684\u8868\u540d\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"\u65f6\u95f4\u683c\u5f0f\u5316\u548c\u5904\u7406"}),"\uff1a\u6211\u4eec\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"SimpleDateFormat"})," \u548c ",(0,a.jsx)(n.code,{children:"DateUtil"})," \u8fdb\u884c\u65f6\u95f4\u7684\u683c\u5f0f\u5316\u548c\u6708\u4efd\u7684\u5904\u7406\u3002\u901a\u8fc7 ",(0,a.jsx)(n.code,{children:"DateUtil.beginOfMonth"})," \u83b7\u53d6\u6bcf\u4e2a\u6708\u7684\u7b2c\u4e00\u5929\uff0c\u4ee5\u4fbf\u7edf\u4e00\u5904\u7406\u65f6\u95f4\u8303\u56f4\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u4f18\u5316\u4e0e\u5e94\u7528",children:"\u4f18\u5316\u4e0e\u5e94\u7528"}),"\n",(0,a.jsx)(n.h3,{id:"1-\u52a8\u6001\u6269\u5c55\u6027",children:"1. \u52a8\u6001\u6269\u5c55\u6027"}),"\n",(0,a.jsxs)(n.p,{children:["\u8be5\u65b9\u6848\u7684\u4f18\u52bf\u5728\u4e8e\u5176",(0,a.jsx)(n.strong,{children:"\u52a8\u6001\u6269\u5c55\u6027"}),"\u3002\u968f\u7740\u6570\u636e\u91cf\u7684\u4e0d\u65ad\u589e\u957f\uff0c\u65b0\u7684\u5206\u8868\u4f1a\u6839\u636e\u65f6\u95f4\u81ea\u52a8\u521b\u5efa\uff0c\u4e14\u67e5\u8be2\u65f6\u4f1a\u6839\u636e\u5b9e\u9645\u7684\u65f6\u95f4\u8303\u56f4\u52a8\u6001\u8ba1\u7b97\u6240\u9700\u7684\u8868\uff0c\u907f\u514d\u4e86\u624b\u52a8\u5e72\u9884\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"2-\u8d1f\u8f7d\u5747\u8861",children:"2. \u8d1f\u8f7d\u5747\u8861"}),"\n",(0,a.jsx)(n.p,{children:"\u901a\u8fc7\u5c06\u6570\u636e\u5206\u6563\u5230\u591a\u4e2a\u8868\u4e2d\uff0c\u7cfb\u7edf\u80fd\u591f\u66f4\u597d\u5730\u8fdb\u884c\u8d1f\u8f7d\u5747\u8861\u3002\u5f53\u67d0\u4e00\u6708\u4efd\u7684\u6570\u636e\u91cf\u589e\u5927\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u6c34\u5e73\u6269\u5c55\uff08\u4f8b\u5982\u589e\u52a0\u65b0\u7684\u5206\u8868\uff09\u6765\u5e94\u5bf9\u6027\u80fd\u74f6\u9888\uff0c\u800c\u65e0\u9700\u5bf9\u6574\u4e2a\u8868\u8fdb\u884c\u8fc1\u79fb\u6216\u6539\u9020\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"3-\u67e5\u8be2\u4f18\u5316",children:"3. \u67e5\u8be2\u4f18\u5316"}),"\n",(0,a.jsx)(n.p,{children:"\u6309\u65f6\u95f4\u8303\u56f4\u5206\u8868\u7684\u6700\u5927\u4f18\u52bf\u5728\u4e8e\u67e5\u8be2\u6548\u7387\u7684\u63d0\u5347\u3002\u5f53\u67e5\u8be2\u67d0\u4e00\u65f6\u95f4\u6bb5\u7684\u6570\u636e\u65f6\uff0c\u53ea\u9700\u8981\u8bbf\u95ee\u76f8\u5173\u7684\u5206\u8868\uff0c\u800c\u4e0d\u662f\u5bf9\u6574\u4e2a\u6570\u636e\u8868\u8fdb\u884c\u626b\u63cf\uff0c\u4ece\u800c\u5927\u5927\u63d0\u5347\u4e86\u67e5\u8be2\u901f\u5ea6\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,a.jsx)(n.p,{children:"\u57fa\u4e8e\u65f6\u95f4\u8303\u56f4\u7684\u5206\u8868\u7b56\u7565\u5728\u5927\u6570\u636e\u91cf\u573a\u666f\u4e0b\u5c24\u5176\u91cd\u8981\uff0c\u5c24\u5176\u662f\u5728\u7535\u529b\u7b49\u9700\u8981\u5904\u7406\u5927\u91cf\u5386\u53f2\u6570\u636e\u7684\u884c\u4e1a\u3002\u901a\u8fc7\u5408\u7406\u7684\u5206\u8868\u8bbe\u8ba1\uff0c\u6211\u4eec\u53ef\u4ee5\u6709\u6548\u5730\u63d0\u5347\u7cfb\u7edf\u6027\u80fd\uff0c\u4f18\u5316\u67e5\u8be2\u54cd\u5e94\u65f6\u95f4\uff0c\u786e\u4fdd\u7cfb\u7edf\u7684\u9ad8\u53ef\u7528\u6027\u548c\u6269\u5c55\u6027\u3002\u8fd9\u4e2a\u65b9\u6848\u4e0d\u4ec5\u9002\u7528\u4e8e\u7535\u529b\u884c\u4e1a\uff0c\u4e5f\u53ef\u4ee5\u5e7f\u6cdb\u5e94\u7528\u4e8e\u4efb\u4f55\u5177\u6709\u65f6\u95f4\u7ef4\u5ea6\u7684\u5927\u6570\u636e\u573a\u666f\u4e2d\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var i=t(96540);const a={},r=i.createContext(a);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(r.Provider,{value:n},e.children)}},54721:e=>{e.exports=JSON.parse('{"permalink":"/blog/product-optimization-jdbc-time-range-sharding-strategy","editUrl":"https://github.com/Jachen99/Jachen99.github.io/tree/V3.0.0/blog/2023/10-07-\u65f6\u95f4\u8303\u56f4\u5206\u8868\u7b56\u7565\u7684\u5b9e\u73b0\u4e0e\u4f18\u5316.md","source":"@site/blog/2023/10-07-\u65f6\u95f4\u8303\u56f4\u5206\u8868\u7b56\u7565\u7684\u5b9e\u73b0\u4e0e\u4f18\u5316.md","title":"\u65f6\u95f4\u8303\u56f4\u5206\u8868\u7b56\u7565\u7684\u5b9e\u73b0\u4e0e\u4f18\u5316","description":"\u5728\u5904\u7406\u5927\u91cf\u6570\u636e\u65f6\uff0c\u5982\u4f55\u9ad8\u6548\u5730\u5b58\u50a8\u548c\u67e5\u8be2\u662f\u6211\u4eec\u5e38\u9762\u4e34\u7684\u6311\u6218\u3002\u7279\u522b\u662f\u5728\u9700\u8981\u6309\u65f6\u95f4\u8fdb\u884c\u7edf\u8ba1\u3001\u5206\u6790\u548c\u5c55\u793a\u7684\u6570\u636e\u573a\u666f\u4e0b\uff0c\u6570\u636e\u91cf\u5f80\u5f80\u968f\u7740\u65f6\u95f4\u7684\u79ef\u7d2f\u800c\u8fc5\u901f\u81a8\u80c0\u3002\u4e3a\u4e86\u5e94\u5bf9\u8fd9\u4e9b\u6311\u6218\uff0c\u5206\u8868\u6280\u672f\u6210\u4e3a\u4e86\u4f18\u5316\u67e5\u8be2\u6027\u80fd\u548c\u7ba1\u7406\u5927\u89c4\u6a21\u6570\u636e\u7684\u5173\u952e\u624b\u6bb5\u3002","date":"2023-10-07T00:00:00.000Z","tags":[{"inline":true,"label":"sharding-jdbc","permalink":"/blog/tags/sharding-jdbc"}],"readingTime":6.68,"hasTruncateMarker":false,"authors":[{"name":"\u5b63\u51a0\u81e3","title":"\u540e\u7aef\u7814\u53d1\u5de5\u7a0b\u5e08","url":"https://github.com/jachen99","page":{"permalink":"/blog/authors/jiguanchen"},"socials":{"github":"https://github.com/jachen99"},"imageURL":"https://github.com/jachen99.png","key":"jiguanchen"}],"frontMatter":{"slug":"product-optimization-jdbc-time-range-sharding-strategy","title":"\u65f6\u95f4\u8303\u56f4\u5206\u8868\u7b56\u7565\u7684\u5b9e\u73b0\u4e0e\u4f18\u5316","authors":["jiguanchen"],"tags":["sharding-jdbc"]},"unlisted":false,"prevItem":{"title":"xxl-job\u5206\u5e03\u5f0f\u8c03\u5ea6\u5b9e\u8df5","permalink":"/blog/product-xxl-job"},"nextItem":{"title":"MongoDB\u5b9e\u73b0\u903b\u8f91\u5220\u9664","permalink":"/blog/product-logic-delete"}}')}}]);