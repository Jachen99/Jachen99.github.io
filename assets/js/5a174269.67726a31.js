"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[7600],{82208:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>x,frontMatter:()=>s,metadata:()=>n,toc:()=>c});var n=t(13424),a=t(74848),l=t(28453);const s={slug:"advanced-data-processing-with-easyexcel",title:"EasyExcel\u4e2d\u7684\u6570\u636e\u7b2c\u4e00\u884c\u83b7\u53d6\u95ee\u9898\u53ca\u89e3\u51b3\u65b9\u6848\u8be6\u89e3",authors:["jiguanchen"],tags:["EasyExcel","data-processing","my-bug"]},i=void 0,o={authorsImageUrls:[void 0]},c=[{value:"EasyExcel\u4e2d\u7684\u6570\u636e\u7b2c\u4e00\u884c\u83b7\u53d6\u95ee\u9898\u53ca\u89e3\u51b3\u65b9\u6848\u8be6\u89e3",id:"easyexcel\u4e2d\u7684\u6570\u636e\u7b2c\u4e00\u884c\u83b7\u53d6\u95ee\u9898\u53ca\u89e3\u51b3\u65b9\u6848\u8be6\u89e3",level:2},{value:"1. EasyExcel\u7b80\u4ecb",id:"1-easyexcel\u7b80\u4ecb",level:3},{value:"2. \u95ee\u9898\u63cf\u8ff0",id:"2-\u95ee\u9898\u63cf\u8ff0",level:3},{value:"3. \u89e3\u51b3\u65b9\u6848\u8be6\u89e3",id:"3-\u89e3\u51b3\u65b9\u6848\u8be6\u89e3",level:3},{value:"\u65b9\u68481\uff1a\u624b\u52a8\u6307\u5b9a\u6570\u636e\u8d77\u59cb\u884c",id:"\u65b9\u68481\u624b\u52a8\u6307\u5b9a\u6570\u636e\u8d77\u59cb\u884c",level:5},{value:"\u65b9\u68482\uff1a\u7b2c\u4e00\u884c\u6570\u636e\u8bfb\u5728\u8868\u5934\u5355\u72ec\u5904\u7406",id:"\u65b9\u68482\u7b2c\u4e00\u884c\u6570\u636e\u8bfb\u5728\u8868\u5934\u5355\u72ec\u5904\u7406",level:5},{value:"5. \u7ed3\u8bba",id:"5-\u7ed3\u8bba",level:3}];function d(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",h5:"h5",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h2,{id:"easyexcel\u4e2d\u7684\u6570\u636e\u7b2c\u4e00\u884c\u83b7\u53d6\u95ee\u9898\u53ca\u89e3\u51b3\u65b9\u6848\u8be6\u89e3",children:"EasyExcel\u4e2d\u7684\u6570\u636e\u7b2c\u4e00\u884c\u83b7\u53d6\u95ee\u9898\u53ca\u89e3\u51b3\u65b9\u6848\u8be6\u89e3"}),"\n",(0,a.jsx)(r.p,{children:"\u5728Java\u5f00\u53d1\u4e2d\uff0c\u5904\u7406Excel\u6587\u4ef6\u662f\u4e00\u4e2a\u5e38\u89c1\u7684\u9700\u6c42\u3002EasyExcel\u4f5c\u4e3a\u4e00\u4e2a\u6d41\u884c\u7684Excel\u64cd\u4f5c\u5e93\uff0c\u63d0\u4f9b\u4e86\u65b9\u4fbf\u800c\u9ad8\u6548\u7684API\u6765\u8bfb\u5199Excel\u6587\u4ef6\u3002\u7136\u800c\uff0c\u6709\u65f6\u4f1a\u9047\u5230\u6570\u636e\u7b2c\u4e00\u884c\u88ab\u8bef\u8bfb\u4e3a\u8868\u5934\u7684\u95ee\u9898\uff0c\u7279\u522b\u662f\u5728Excel\u6587\u4ef6\u7684\u7b2c\u4e00\u884c\u4e0d\u662f\u6807\u51c6\u8868\u5934\u800c\u662f\u5b9e\u9645\u6570\u636e\u65f6\uff0c\u8fd9\u4e00\u95ee\u9898\u663e\u5f97\u5c24\u4e3a\u7a81\u51fa\u3002\u672c\u6587\u5c06\u8be6\u7ec6\u8ba8\u8bba\u8fd9\u4e00\u95ee\u9898\u7684\u6839\u672c\u539f\u56e0\uff0c\u5e76\u63d0\u4f9b\u4e00\u79cd\u6709\u6548\u7684\u89e3\u51b3\u65b9\u6848\u3002"}),"\n",(0,a.jsx)(r.h3,{id:"1-easyexcel\u7b80\u4ecb",children:"1. EasyExcel\u7b80\u4ecb"}),"\n",(0,a.jsxs)(r.p,{children:["EasyExcel\u662f\u963f\u91cc\u5df4\u5df4\u5f00\u6e90\u7684\u4e00\u6b3eJava\u64cd\u4f5cExcel\u7684\u5de5\u5177\u5e93\uff0c\u5b83\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u529f\u80fd\uff0c\u652f\u6301\u5927\u6570\u636e\u91cf\u7684\u8bfb\u5199\u64cd\u4f5c\uff0c\u5e76\u4e14\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u6837\u5f0f\u548c\u683c\u5f0f\u5904\u7406\u529f\u80fd\uff0c\u9002\u7528\u4e8e\u5404\u79cd\u573a\u666f\u4e0b\u7684Excel\u6587\u4ef6\u5904\u7406\u9700\u6c42\u3002\u4f60\u53ef\u4ee5\u8bbf\u95ee EasyExcel \u7684\u5b98\u65b9 GitHub \u9875\u9762\u83b7\u53d6\u66f4\u591a\u7684\u8d44\u6599\u548c\u4e0b\u8f7d\uff1a ",(0,a.jsx)(r.a,{href:"https://github.com/alibaba/easyexcel",children:"https://github.com/alibaba/easyexcel"})]}),"\n",(0,a.jsx)(r.h3,{id:"2-\u95ee\u9898\u63cf\u8ff0",children:"2. \u95ee\u9898\u63cf\u8ff0"}),"\n",(0,a.jsx)(r.p,{children:"\u5728\u4f7f\u7528EasyExcel\u8bfb\u53d6Excel\u6587\u4ef6\u65f6\uff0c\u7ecf\u5e38\u4f1a\u51fa\u73b0\u7b2c\u4e00\u884c\u6570\u636e\u88ab\u9519\u8bef\u5730\u8bc6\u522b\u4e3a\u8868\u5934\u7684\u60c5\u51b5\u3002\u8fd9\u4e00\u95ee\u9898\u7684\u6839\u672c\u539f\u56e0\u5728\u4e8eEasyExcel\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u65e0\u6cd5\u6b63\u786e\u8bc6\u522bExcel\u6587\u4ef6\u4e2d\u6570\u636e\u884c\u548c\u8868\u5934\u884c\u7684\u533a\u5206\uff0c\u7279\u522b\u662f\u5f53Excel\u6587\u4ef6\u7ed3\u6784\u6bd4\u8f83\u590d\u6742\u6216\u8005\u5b58\u5728\u7279\u5b9a\u683c\u5f0f\u65f6\uff0cEasyExcel\u7684\u9ed8\u8ba4\u89e3\u6790\u903b\u8f91\u53ef\u80fd\u4f1a\u51fa\u73b0\u504f\u5dee\u3002"}),"\n",(0,a.jsx)(r.h3,{id:"3-\u89e3\u51b3\u65b9\u6848\u8be6\u89e3",children:"3. \u89e3\u51b3\u65b9\u6848\u8be6\u89e3"}),"\n",(0,a.jsx)(r.p,{children:"\u4e3a\u4e86\u89e3\u51b3\u6570\u636e\u7b2c\u4e00\u884c\u83b7\u53d6\u95ee\u9898\uff0c\u6211\u4eec\u53ef\u4ee5\u91c7\u53d6\u4ee5\u4e0b\u6b65\u9aa4\u6765\u8c03\u6574\u548c\u4f18\u5316EasyExcel\u7684\u8bfb\u53d6\u64cd\u4f5c\uff0c\u786e\u4fdd\u80fd\u591f\u6b63\u786e\u83b7\u53d6\u5b9e\u9645\u6570\u636e\u884c\u800c\u975e\u8868\u5934\u884c\uff1a"}),"\n",(0,a.jsx)(r.h5,{id:"\u65b9\u68481\u624b\u52a8\u6307\u5b9a\u6570\u636e\u8d77\u59cb\u884c",children:"\u65b9\u68481\uff1a\u624b\u52a8\u6307\u5b9a\u6570\u636e\u8d77\u59cb\u884c"}),"\n",(0,a.jsxs)(r.p,{children:["\u5728\u8bfb\u53d6Excel\u6587\u4ef6\u65f6\uff0c\u624b\u52a8\u6307\u5b9a\u6570\u636e\u7684\u8d77\u59cb\u884c\uff0c\u800c\u4e0d\u4f9d\u8d56EasyExcel\u7684\u81ea\u52a8\u8bc6\u522b\u3002\u8fd9\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e",(0,a.jsx)(r.code,{children:"headRowNumber"}),"\u6765\u5b9e\u73b0\uff0c\u660e\u786e\u544a\u77e5EasyExcel\u4ece\u7b2c\u51e0\u884c\u5f00\u59cb\u8bfb\u53d6\u6570\u636e\u3002"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:"ExcelReaderBuilder readBuilder = EasyExcel.read(inputStream, ExcelData.class, new ExcelDataListener())\r\n        .sheet().headRowNumber(2) // \u6307\u5b9a\u4ece\u7b2c3\u884c\u5f00\u59cb\u8bfb\u53d6\u6570\u636e\r\n        .doRead();\n"})}),"\n",(0,a.jsxs)(r.p,{children:["\u5728\u4e0a\u8ff0\u4ee3\u7801\u4e2d\uff0c\u901a\u8fc7",(0,a.jsx)(r.code,{children:"headRowNumber(2)"}),"\u6307\u5b9a\u4ece\u7b2c3\u884c\u5f00\u59cb\u8bfb\u53d6\u6570\u636e\uff0c\u907f\u514d\u5c06\u7b2c\u4e00\u884c\u8bef\u8bfb\u4e3a\u8868\u5934\u3002"]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"\u6570\u636e\u5904\u7406\u903b\u8f91\u4e2d\u6392\u9664\u8868\u5934\u884c"})}),"\n",(0,a.jsxs)(r.p,{children:["\u5728\u5b9e\u9645\u6570\u636e\u5904\u7406\u903b\u8f91\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7\u903b\u8f91\u5224\u65ad\u6392\u9664\u8868\u5934\u884c\uff0c\u786e\u4fdd\u53ea\u5904\u7406\u5b9e\u9645\u7684\u6570\u636e\u884c\u3002\u4f8b\u5982\uff0c\u5728",(0,a.jsx)(r.code,{children:"invoke"}),"\u65b9\u6cd5\u4e2d\u53ef\u4ee5\u6dfb\u52a0\u903b\u8f91\u5224\u65ad\uff1a"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:"@Override \r\npublic void invoke(ExcelData data, AnalysisContext context) {\r\n    if (context.readRowHolder().getRowIndex() > 0) { // \u8df3\u8fc7\u8868\u5934\u884c\r\n        // \u5904\u7406\u5b9e\u9645\u6570\u636e\u903b\u8f91\r\n    }\r\n}\n"})}),"\n",(0,a.jsxs)(r.p,{children:["\u901a\u8fc7",(0,a.jsx)(r.code,{children:"context.readRowHolder().getRowIndex() > 0"}),"\u5224\u65ad\u5f53\u524d\u884c\u7d22\u5f15\u5927\u4e8e0\u65f6\u624d\u5904\u7406\u6570\u636e\uff0c\u8df3\u8fc7\u8868\u5934\u884c\u7684\u5904\u7406\u3002"]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"\u4f7f\u7528\u540e\u5904\u7406\u5668\u8fdb\u884c\u4e8c\u6b21\u5904\u7406"})}),"\n",(0,a.jsxs)(r.p,{children:["EasyExcel\u63d0\u4f9b\u4e86\u540e\u5904\u7406\u5668\uff08Handler\uff09\u673a\u5236\uff0c\u5728\u6570\u636e\u8bfb\u53d6\u5b8c\u6210\u540e\u53ef\u4ee5\u8fdb\u884c\u4e8c\u6b21\u5904\u7406\u3002\u53ef\u4ee5\u5728",(0,a.jsx)(r.code,{children:"doAfterAllAnalysed"}),"\u65b9\u6cd5\u4e2d\u5bf9\u6570\u636e\u8fdb\u884c\u8fdb\u4e00\u6b65\u5904\u7406\u6216\u8fc7\u6ee4\uff0c\u786e\u4fdd\u6700\u7ec8\u6570\u636e\u7684\u51c6\u786e\u6027\u548c\u5b8c\u6574\u6027\u3002"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:"@Override \r\npublic void doAfterAllAnalysed(AnalysisContext context) { \r\n    // \u6570\u636e\u5904\u7406\u5b8c\u6210\u540e\u7684\u903b\u8f91 \r\n    processData(dataList);\r\n}\n"})}),"\n",(0,a.jsxs)(r.p,{children:["\u5728\u4e0a\u8ff0\u4ee3\u7801\u4e2d\uff0c\u53ef\u4ee5\u5728",(0,a.jsx)(r.code,{children:"doAfterAllAnalysed"}),"\u65b9\u6cd5\u4e2d\u8c03\u7528",(0,a.jsx)(r.code,{children:"processData"}),"\u65b9\u6cd5\uff0c\u5bf9\u6570\u636e\u8fdb\u884c\u8fdb\u4e00\u6b65\u7684\u5904\u7406\u6216\u8005\u5b58\u50a8\u64cd\u4f5c\u3002"]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"\u793a\u4f8b\u4ee3\u7801"})}),"\n",(0,a.jsx)(r.p,{children:"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u5b8c\u6574\u7684\u793a\u4f8b\u4ee3\u7801\uff0c\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528EasyExcel\u8bfb\u53d6Excel\u6587\u4ef6\u5e76\u5904\u7406\u6570\u636e\uff0c\u540c\u65f6\u907f\u514d\u6570\u636e\u7b2c\u4e00\u884c\u88ab\u8bef\u8bfb\u4e3a\u8868\u5934\u7684\u95ee\u9898\uff1a"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:'import com.alibaba.excel.EasyExcel;\r\nimport com.alibaba.excel.context.AnalysisContext;\r\nimport com.alibaba.excel.event.AnalysisEventListener;\r\nimport com.alibaba.excel.read.builder.ExcelReaderBuilder;\r\n\r\nimport java.io.FileInputStream;\r\nimport java.io.IOException;\r\nimport java.io.InputStream;\r\nimport java.util.ArrayList;\r\nimport java.util.List;\r\n\r\npublic class ExcelReaderExample {\r\n\r\n    public static void main(String[] args) {\r\n        String fileName = "path/to/your/excel/file.xlsx";\r\n        InputStream inputStream = null;\r\n        try {\r\n            inputStream = new FileInputStream(fileName);\r\n            ExcelReaderBuilder readBuilder = EasyExcel.read(inputStream, ExcelData.class, new ExcelDataListener());\r\n            readBuilder.sheet().headRowNumber(2); // \u6307\u5b9a\u4ece\u7b2c3\u884c\u5f00\u59cb\u8bfb\u53d6\u6570\u636e\r\n            readBuilder.doRead();\r\n        } catch (IOException e) {\r\n            e.printStackTrace();\r\n        } finally {\r\n            if (inputStream != null) {\r\n                try {\r\n                    inputStream.close();\r\n                } catch (IOException e) {\r\n                    e.printStackTrace();\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    public static class ExcelDataListener extends AnalysisEventListener<ExcelData> {\r\n\r\n        private List<ExcelData> dataList = new ArrayList<>();\r\n\r\n        @Override\r\n        public void invoke(ExcelData data, AnalysisContext context) {\r\n            if (context.readRowHolder().getRowIndex() > 0) { // \u8df3\u8fc7\u8868\u5934\u884c\r\n                // \u5904\u7406\u5b9e\u9645\u6570\u636e\u903b\u8f91\r\n                dataList.add(data);\r\n            }\r\n        }\r\n\r\n        @Override\r\n        public void doAfterAllAnalysed(AnalysisContext context) {\r\n            // \u6570\u636e\u5904\u7406\u5b8c\u6210\u540e\u7684\u903b\u8f91\r\n            processData(dataList);\r\n        }\r\n\r\n        private void processData(List<ExcelData> dataList) {\r\n            // \u5904\u7406\u6570\u636e\u7684\u5177\u4f53\u903b\u8f91\r\n            for (ExcelData data : dataList) {\r\n                System.out.println(data.toString());\r\n            }\r\n        }\r\n    }\r\n\r\n    public static class ExcelData {\r\n        // Excel\u4e2d\u7684\u6570\u636e\u5b57\u6bb5\u5bf9\u5e94\u7684Java\u5c5e\u6027\r\n        private String column1;\r\n        private String column2;\r\n\r\n        // \u7701\u7565getter\u548csetter\u65b9\u6cd5\r\n    }\r\n}\n'})}),"\n",(0,a.jsx)(r.h5,{id:"\u65b9\u68482\u7b2c\u4e00\u884c\u6570\u636e\u8bfb\u5728\u8868\u5934\u5355\u72ec\u5904\u7406",children:"\u65b9\u68482\uff1a\u7b2c\u4e00\u884c\u6570\u636e\u8bfb\u5728\u8868\u5934\u5355\u72ec\u5904\u7406"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:"@Override\r\n@SneakyThrows\r\npublic byte[] exportExcel(List<String> sheet1Ids, List<String> sheet2Ids, List<String> sheet3Ids, String startDate, String endDate) {\r\n    byte[] result;\r\n\r\n    // \u8bfb\u53d6\u6a21\u7248\r\n    try (ByteArrayOutputStream outputStream = new ByteArrayOutputStream();\r\n         InputStream inputStream = templateFileService.getTemplateInputStreamByPath(dataComparisonFileResource.getPath())) {\r\n        ExcelWriter excelWriter = EasyExcel.write(outputStream)\r\n                .withTemplate(inputStream)\r\n                .autoCloseStream(true)\r\n                .registerWriteHandler(new CustomSheet1CellWriteHandler())\r\n                .build();\r\n\r\n        // \u5199\u5165\u88681 \u6570\u636e\r\n        List<LfDispatchDataComparisonGridOperationVo> sheet1Data = getGridOperationData(sheet1Ids, startDate, endDate);\r\n        this.writerSheet1(excelWriter, sheet1Data);\r\n\r\n        // \u5199\u5165\u88682 \u6570\u636e\r\n        List<LfDispatchDataComparisonGwEnergyVo> sheet2Data = getGwEnergyData(sheet2Ids, startDate, endDate);\r\n        this.writerSheet2(excelWriter, sheet2Data);\r\n\r\n        // \u5199\u5165\u88683 \u6570\u636e\r\n        List<LfDispatchDataComparisonNewEnergyOperationVo> sheet3Data = getNewEnergyOperationData(sheet3Ids, startDate, endDate);\r\n        this.writerSheet3(excelWriter, sheet3Data);\r\n\r\n        // \u751f\u6210excel\r\n        excelWriter.finish();\r\n\r\n        // \u786e\u4fdd\u6240\u6709\u5185\u5bb9\u90fd\u5199\u5165\u8f93\u51fa\u6d41\u4e2d\r\n        result = outputStream.toByteArray();\r\n    }\r\n\r\n    return result;\r\n}\r\n\r\n/**\r\n * \u81ea\u5b9a\u4e49sheet1\u7684cell\u6837\u5f0f \u7528\u4e8e\u6807\u8bb0 \u8d1f\u8377\u5360\u6bd4\u3001\u7535\u91cf\u5360\u6bd4 \u5927\u4e8e1\u7684\u5355\u5143\u683c\r\n */\r\npublic static class CustomSheet1CellWriteHandler implements WorkbookWriteHandler, CellWriteHandler {\r\n\r\n    /**\r\n     * \u5904\u7406\u7b2c\u4e00\u884c\u6570\u636e (easyExcel\u5de5\u5177\u7684bug \u4f1a\u5c06\u7b2c\u4e00\u884c\u6570\u636e\u8bfb\u5728\u8868\u5934)\r\n     *\r\n     * @param context \u4e0a\u4e0b\u6587\r\n     */\r\n    @Override\r\n    public void afterCellDispose(CellWriteHandlerContext context) {\r\n        if (context.getRowIndex() == 2 && (context.getColumnIndex() == 14 || context.getColumnIndex() == 15)) {\r\n            // \u5904\u7406\u7b2c\u7b2c\u4e00\u4e2asheet\r\n            Sheet sheet = context.getRow().getSheet().getWorkbook().getSheetAt(0);\r\n            Row row = sheet.getRow(2);\r\n\r\n            Cell cell14 = row.getCell(14);\r\n            Cell cell15 = row.getCell(15);\r\n\r\n            // \u5e94\u7528\u7ea2\u8272\u6837\u5f0f\r\n            applyRedStyleToCells(cell14, cell15);\r\n        }\r\n    }\r\n\r\n    /**\r\n     * \u5904\u7406\u9664\u4e86\u7b2c\u4e00\u884c\u4ee5\u5916\u7684\u5176\u4ed6\u6570\u636e\u884c\r\n     *\r\n     * @param context \u4e0a\u4e0b\u6587\r\n     */\r\n    @Override\r\n    public void afterWorkbookDispose(WorkbookWriteHandlerContext context) {\r\n        Workbook workbook = context.getWriteWorkbookHolder().getWorkbook();\r\n        // \u53ea\u5904\u7406 sheet1\r\n        Sheet sheet = workbook.getSheetAt(0);\r\n\r\n        applyRedStyleToSheet(sheet);\r\n    }\r\n\r\n    /**\r\n     * \u6309\u5217\u6807\u8bb0\u7ea2\u8272\r\n     *\r\n     * @param sheet \u5de5\u4f5c\u8868\r\n     */\r\n    private void applyRedStyleToSheet(Sheet sheet) {\r\n        for (Row row : sheet) {\r\n            applyRedStyleToCells(row.getCell(14), row.getCell(15));\r\n        }\r\n    }\r\n\r\n    /**\r\n     * \u5bf9\u6307\u5b9a\u7684\u5355\u5143\u683c\u5e94\u7528\u7ea2\u8272\u5b57\u4f53\u6837\u5f0f\r\n     *\r\n     * @param cells \u9700\u8981\u5e94\u7528\r\n\r\n\u7ea2\u8272\u6837\u5f0f\u7684\u5355\u5143\u683c\r\n     */\r\n    private void applyRedStyleToCells(Cell... cells) {\r\n        for (Cell cell : cells) {\r\n            if (cell != null) {\r\n                Workbook workbook = cell.getSheet().getWorkbook();\r\n                CellStyle redStyle = workbook.createCellStyle();\r\n                Font redFont = workbook.createFont();\r\n                redFont.setColor(IndexedColors.RED.getIndex());\r\n                redStyle.setFont(redFont);\r\n                cell.setCellStyle(redStyle);\r\n            }\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,a.jsx)(r.h3,{id:"5-\u7ed3\u8bba",children:"5. \u7ed3\u8bba"}),"\n",(0,a.jsx)(r.p,{children:"\u6211\u603b\u7ed3\uff1a\u5efa\u8bae\u4e0d\u518d\u4f7f\u7528EasyExcel\u5de5\u5177\u3002"}),"\n",(0,a.jsx)(r.hr,{})]})}function x(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>i});var n=t(96540);const a={},l=n.createContext(a);function s(e){const r=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(l.Provider,{value:r},e.children)}},13424:e=>{e.exports=JSON.parse('{"permalink":"/blog/advanced-data-processing-with-easyexcel","editUrl":"https://github.com/Jachen99/Jachen99.github.io/tree/V3.0.0/blog/2024/07-09-EasyExcel\u4e2d\u7684\u6570\u636e\u7b2c\u4e00\u884c\u83b7\u53d6\u95ee\u9898.md","source":"@site/blog/2024/07-09-EasyExcel\u4e2d\u7684\u6570\u636e\u7b2c\u4e00\u884c\u83b7\u53d6\u95ee\u9898.md","title":"EasyExcel\u4e2d\u7684\u6570\u636e\u7b2c\u4e00\u884c\u83b7\u53d6\u95ee\u9898\u53ca\u89e3\u51b3\u65b9\u6848\u8be6\u89e3","description":"EasyExcel\u4e2d\u7684\u6570\u636e\u7b2c\u4e00\u884c\u83b7\u53d6\u95ee\u9898\u53ca\u89e3\u51b3\u65b9\u6848\u8be6\u89e3","date":"2024-07-09T00:00:00.000Z","tags":[{"inline":false,"label":"EasyExcel","permalink":"/blog/tags/easy-excel","description":"\u5173\u4e8eEasyExcel\u7684\u76f8\u5173\u5185\u5bb9"},{"inline":false,"label":"\u6570\u636e\u5904\u7406","permalink":"/blog/tags/data-processing","description":"\u5173\u4e8e\u6570\u636e\u5904\u7406\u76f8\u5173\u7684\u8bdd\u9898"},{"inline":false,"label":"\u6211\u7684Bug","permalink":"/blog/tags/my-bug","description":"\u5173\u4e8e\u8f6f\u4ef6\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u7684Bug"}],"readingTime":7.29,"hasTruncateMarker":false,"authors":[{"name":"\u5b63\u51a0\u81e3","title":"\u540e\u7aef\u7814\u53d1\u5de5\u7a0b\u5e08","url":"https://github.com/jachen99","page":{"permalink":"/blog/authors/jiguanchen"},"socials":{"github":"https://github.com/jachen99"},"imageURL":"https://github.com/jachen99.png","key":"jiguanchen"}],"frontMatter":{"slug":"advanced-data-processing-with-easyexcel","title":"EasyExcel\u4e2d\u7684\u6570\u636e\u7b2c\u4e00\u884c\u83b7\u53d6\u95ee\u9898\u53ca\u89e3\u51b3\u65b9\u6848\u8be6\u89e3","authors":["jiguanchen"],"tags":["EasyExcel","data-processing","my-bug"]},"unlisted":false,"prevItem":{"title":"\u63a2\u7a76Nginx\u4f18\u96c5reload\u7684\u7ec6\u8282","permalink":"/blog/product-nginx-reload"},"nextItem":{"title":"xxl-job\u5206\u5e03\u5f0f\u8c03\u5ea6\u5b9e\u8df5","permalink":"/blog/product-xxl-job"}}')}}]);