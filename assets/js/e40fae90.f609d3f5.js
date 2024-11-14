"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[8419],{7705:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"advanced-data-processing-with-easyexcel","metadata":{"permalink":"/https://blog.jiguanchen.space/Jachen99.github.io/blog/advanced-data-processing-with-easyexcel","editUrl":"https://github.com/Jachen99/Jachen99.github.io/tree/main/blog/blog/2024/07-09-EasyExcel\u4e2d\u7684\u6570\u636e\u7b2c\u4e00\u884c\u83b7\u53d6\u95ee\u9898.md","source":"@site/blog/2024/07-09-EasyExcel\u4e2d\u7684\u6570\u636e\u7b2c\u4e00\u884c\u83b7\u53d6\u95ee\u9898.md","title":"EasyExcel\u4e2d\u7684\u6570\u636e\u7b2c\u4e00\u884c\u83b7\u53d6\u95ee\u9898\u53ca\u89e3\u51b3\u65b9\u6848\u8be6\u89e3","description":"EasyExcel\u4e2d\u7684\u6570\u636e\u7b2c\u4e00\u884c\u83b7\u53d6\u95ee\u9898\u53ca\u89e3\u51b3\u65b9\u6848\u8be6\u89e3","date":"2024-07-09T00:00:00.000Z","tags":[{"inline":false,"label":"EasyExcel","permalink":"/https://blog.jiguanchen.space/Jachen99.github.io/blog/tags/easy-excel","description":"\u5173\u4e8eEasyExcel\u7684\u76f8\u5173\u5185\u5bb9"},{"inline":false,"label":"\u6570\u636e\u5904\u7406","permalink":"/https://blog.jiguanchen.space/Jachen99.github.io/blog/tags/data-processing","description":"\u5173\u4e8e\u6570\u636e\u5904\u7406\u76f8\u5173\u7684\u8bdd\u9898"},{"inline":false,"label":"\u6211\u7684Bug","permalink":"/https://blog.jiguanchen.space/Jachen99.github.io/blog/tags/my-bug","description":"\u5173\u4e8e\u8f6f\u4ef6\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u7684Bug"}],"readingTime":7.29,"hasTruncateMarker":false,"authors":[{"name":"\u5b63\u51a0\u81e3","title":"\u540e\u7aef\u7814\u53d1\u5de5\u7a0b\u5e08","url":"https://github.com/jachen99","page":{"permalink":"/https://blog.jiguanchen.space/Jachen99.github.io/blog/authors/jiguanchen"},"socials":{"github":"https://github.com/jachen99"},"imageURL":"https://github.com/jachen99.png","key":"jiguanchen"}],"frontMatter":{"slug":"advanced-data-processing-with-easyexcel","title":"EasyExcel\u4e2d\u7684\u6570\u636e\u7b2c\u4e00\u884c\u83b7\u53d6\u95ee\u9898\u53ca\u89e3\u51b3\u65b9\u6848\u8be6\u89e3","authors":["jiguanchen"],"tags":["EasyExcel","data-processing","my-bug"]},"unlisted":false,"nextItem":{"title":"\u552e\u7535\u5e02\u573a\u667a\u80fd\u5206\u6790\u9884\u6d4b\u7cfb\u7edf","permalink":"/https://blog.jiguanchen.space/Jachen99.github.io/blog/product-5"}},"content":"## EasyExcel\u4e2d\u7684\u6570\u636e\u7b2c\u4e00\u884c\u83b7\u53d6\u95ee\u9898\u53ca\u89e3\u51b3\u65b9\u6848\u8be6\u89e3\\r\\n\\r\\n\u5728Java\u5f00\u53d1\u4e2d\uff0c\u5904\u7406Excel\u6587\u4ef6\u662f\u4e00\u4e2a\u5e38\u89c1\u7684\u9700\u6c42\u3002EasyExcel\u4f5c\u4e3a\u4e00\u4e2a\u6d41\u884c\u7684Excel\u64cd\u4f5c\u5e93\uff0c\u63d0\u4f9b\u4e86\u65b9\u4fbf\u800c\u9ad8\u6548\u7684API\u6765\u8bfb\u5199Excel\u6587\u4ef6\u3002\u7136\u800c\uff0c\u6709\u65f6\u4f1a\u9047\u5230\u6570\u636e\u7b2c\u4e00\u884c\u88ab\u8bef\u8bfb\u4e3a\u8868\u5934\u7684\u95ee\u9898\uff0c\u7279\u522b\u662f\u5728Excel\u6587\u4ef6\u7684\u7b2c\u4e00\u884c\u4e0d\u662f\u6807\u51c6\u8868\u5934\u800c\u662f\u5b9e\u9645\u6570\u636e\u65f6\uff0c\u8fd9\u4e00\u95ee\u9898\u663e\u5f97\u5c24\u4e3a\u7a81\u51fa\u3002\u672c\u6587\u5c06\u8be6\u7ec6\u8ba8\u8bba\u8fd9\u4e00\u95ee\u9898\u7684\u6839\u672c\u539f\u56e0\uff0c\u5e76\u63d0\u4f9b\u4e00\u79cd\u6709\u6548\u7684\u89e3\u51b3\u65b9\u6848\u3002\\r\\n\\r\\n### 1. EasyExcel\u7b80\u4ecb\\r\\n\\r\\nEasyExcel\u662f\u963f\u91cc\u5df4\u5df4\u5f00\u6e90\u7684\u4e00\u6b3eJava\u64cd\u4f5cExcel\u7684\u5de5\u5177\u5e93\uff0c\u5b83\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u529f\u80fd\uff0c\u652f\u6301\u5927\u6570\u636e\u91cf\u7684\u8bfb\u5199\u64cd\u4f5c\uff0c\u5e76\u4e14\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u6837\u5f0f\u548c\u683c\u5f0f\u5904\u7406\u529f\u80fd\uff0c\u9002\u7528\u4e8e\u5404\u79cd\u573a\u666f\u4e0b\u7684Excel\u6587\u4ef6\u5904\u7406\u9700\u6c42\u3002\u4f60\u53ef\u4ee5\u8bbf\u95ee EasyExcel \u7684\u5b98\u65b9 GitHub \u9875\u9762\u83b7\u53d6\u66f4\u591a\u7684\u8d44\u6599\u548c\u4e0b\u8f7d\uff1a https://github.com/alibaba/easyexcel\\r\\n\\r\\n### 2. \u95ee\u9898\u63cf\u8ff0\\r\\n\\r\\n\u5728\u4f7f\u7528EasyExcel\u8bfb\u53d6Excel\u6587\u4ef6\u65f6\uff0c\u7ecf\u5e38\u4f1a\u51fa\u73b0\u7b2c\u4e00\u884c\u6570\u636e\u88ab\u9519\u8bef\u5730\u8bc6\u522b\u4e3a\u8868\u5934\u7684\u60c5\u51b5\u3002\u8fd9\u4e00\u95ee\u9898\u7684\u6839\u672c\u539f\u56e0\u5728\u4e8eEasyExcel\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u65e0\u6cd5\u6b63\u786e\u8bc6\u522bExcel\u6587\u4ef6\u4e2d\u6570\u636e\u884c\u548c\u8868\u5934\u884c\u7684\u533a\u5206\uff0c\u7279\u522b\u662f\u5f53Excel\u6587\u4ef6\u7ed3\u6784\u6bd4\u8f83\u590d\u6742\u6216\u8005\u5b58\u5728\u7279\u5b9a\u683c\u5f0f\u65f6\uff0cEasyExcel\u7684\u9ed8\u8ba4\u89e3\u6790\u903b\u8f91\u53ef\u80fd\u4f1a\u51fa\u73b0\u504f\u5dee\u3002\\r\\n\\r\\n### 3. \u89e3\u51b3\u65b9\u6848\u8be6\u89e3\\r\\n\\r\\n\u4e3a\u4e86\u89e3\u51b3\u6570\u636e\u7b2c\u4e00\u884c\u83b7\u53d6\u95ee\u9898\uff0c\u6211\u4eec\u53ef\u4ee5\u91c7\u53d6\u4ee5\u4e0b\u6b65\u9aa4\u6765\u8c03\u6574\u548c\u4f18\u5316EasyExcel\u7684\u8bfb\u53d6\u64cd\u4f5c\uff0c\u786e\u4fdd\u80fd\u591f\u6b63\u786e\u83b7\u53d6\u5b9e\u9645\u6570\u636e\u884c\u800c\u975e\u8868\u5934\u884c\uff1a\\r\\n\\r\\n##### \u65b9\u68481\uff1a\u624b\u52a8\u6307\u5b9a\u6570\u636e\u8d77\u59cb\u884c\\r\\n\\r\\n\u5728\u8bfb\u53d6Excel\u6587\u4ef6\u65f6\uff0c\u624b\u52a8\u6307\u5b9a\u6570\u636e\u7684\u8d77\u59cb\u884c\uff0c\u800c\u4e0d\u4f9d\u8d56EasyExcel\u7684\u81ea\u52a8\u8bc6\u522b\u3002\u8fd9\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e`headRowNumber`\u6765\u5b9e\u73b0\uff0c\u660e\u786e\u544a\u77e5EasyExcel\u4ece\u7b2c\u51e0\u884c\u5f00\u59cb\u8bfb\u53d6\u6570\u636e\u3002\\r\\n\\r\\n```java\\r\\nExcelReaderBuilder readBuilder = EasyExcel.read(inputStream, ExcelData.class, new ExcelDataListener())\\r\\n        .sheet().headRowNumber(2) // \u6307\u5b9a\u4ece\u7b2c3\u884c\u5f00\u59cb\u8bfb\u53d6\u6570\u636e\\r\\n        .doRead();\\r\\n```\\r\\n\\r\\n\u5728\u4e0a\u8ff0\u4ee3\u7801\u4e2d\uff0c\u901a\u8fc7`headRowNumber(2)`\u6307\u5b9a\u4ece\u7b2c3\u884c\u5f00\u59cb\u8bfb\u53d6\u6570\u636e\uff0c\u907f\u514d\u5c06\u7b2c\u4e00\u884c\u8bef\u8bfb\u4e3a\u8868\u5934\u3002\\r\\n\\r\\n**\u6570\u636e\u5904\u7406\u903b\u8f91\u4e2d\u6392\u9664\u8868\u5934\u884c**\\r\\n\\r\\n\u5728\u5b9e\u9645\u6570\u636e\u5904\u7406\u903b\u8f91\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7\u903b\u8f91\u5224\u65ad\u6392\u9664\u8868\u5934\u884c\uff0c\u786e\u4fdd\u53ea\u5904\u7406\u5b9e\u9645\u7684\u6570\u636e\u884c\u3002\u4f8b\u5982\uff0c\u5728`invoke`\u65b9\u6cd5\u4e2d\u53ef\u4ee5\u6dfb\u52a0\u903b\u8f91\u5224\u65ad\uff1a\\r\\n\\r\\n```java\\r\\n@Override \\r\\npublic void invoke(ExcelData data, AnalysisContext context) {\\r\\n    if (context.readRowHolder().getRowIndex() > 0) { // \u8df3\u8fc7\u8868\u5934\u884c\\r\\n        // \u5904\u7406\u5b9e\u9645\u6570\u636e\u903b\u8f91\\r\\n    }\\r\\n}\\r\\n```\\r\\n\\r\\n\u901a\u8fc7`context.readRowHolder().getRowIndex() > 0`\u5224\u65ad\u5f53\u524d\u884c\u7d22\u5f15\u5927\u4e8e0\u65f6\u624d\u5904\u7406\u6570\u636e\uff0c\u8df3\u8fc7\u8868\u5934\u884c\u7684\u5904\u7406\u3002\\r\\n\\r\\n**\u4f7f\u7528\u540e\u5904\u7406\u5668\u8fdb\u884c\u4e8c\u6b21\u5904\u7406**\\r\\n\\r\\nEasyExcel\u63d0\u4f9b\u4e86\u540e\u5904\u7406\u5668\uff08Handler\uff09\u673a\u5236\uff0c\u5728\u6570\u636e\u8bfb\u53d6\u5b8c\u6210\u540e\u53ef\u4ee5\u8fdb\u884c\u4e8c\u6b21\u5904\u7406\u3002\u53ef\u4ee5\u5728`doAfterAllAnalysed`\u65b9\u6cd5\u4e2d\u5bf9\u6570\u636e\u8fdb\u884c\u8fdb\u4e00\u6b65\u5904\u7406\u6216\u8fc7\u6ee4\uff0c\u786e\u4fdd\u6700\u7ec8\u6570\u636e\u7684\u51c6\u786e\u6027\u548c\u5b8c\u6574\u6027\u3002\\r\\n\\r\\n```java\\r\\n@Override \\r\\npublic void doAfterAllAnalysed(AnalysisContext context) { \\r\\n    // \u6570\u636e\u5904\u7406\u5b8c\u6210\u540e\u7684\u903b\u8f91 \\r\\n    processData(dataList);\\r\\n}\\r\\n```\\r\\n\\r\\n\u5728\u4e0a\u8ff0\u4ee3\u7801\u4e2d\uff0c\u53ef\u4ee5\u5728`doAfterAllAnalysed`\u65b9\u6cd5\u4e2d\u8c03\u7528`processData`\u65b9\u6cd5\uff0c\u5bf9\u6570\u636e\u8fdb\u884c\u8fdb\u4e00\u6b65\u7684\u5904\u7406\u6216\u8005\u5b58\u50a8\u64cd\u4f5c\u3002\\r\\n\\r\\n**\u793a\u4f8b\u4ee3\u7801**\\r\\n\\r\\n\u4ee5\u4e0b\u662f\u4e00\u4e2a\u5b8c\u6574\u7684\u793a\u4f8b\u4ee3\u7801\uff0c\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528EasyExcel\u8bfb\u53d6Excel\u6587\u4ef6\u5e76\u5904\u7406\u6570\u636e\uff0c\u540c\u65f6\u907f\u514d\u6570\u636e\u7b2c\u4e00\u884c\u88ab\u8bef\u8bfb\u4e3a\u8868\u5934\u7684\u95ee\u9898\uff1a\\r\\n\\r\\n```java\\r\\nimport com.alibaba.excel.EasyExcel;\\r\\nimport com.alibaba.excel.context.AnalysisContext;\\r\\nimport com.alibaba.excel.event.AnalysisEventListener;\\r\\nimport com.alibaba.excel.read.builder.ExcelReaderBuilder;\\r\\n\\r\\nimport java.io.FileInputStream;\\r\\nimport java.io.IOException;\\r\\nimport java.io.InputStream;\\r\\nimport java.util.ArrayList;\\r\\nimport java.util.List;\\r\\n\\r\\npublic class ExcelReaderExample {\\r\\n\\r\\n    public static void main(String[] args) {\\r\\n        String fileName = \\"path/to/your/excel/file.xlsx\\";\\r\\n        InputStream inputStream = null;\\r\\n        try {\\r\\n            inputStream = new FileInputStream(fileName);\\r\\n            ExcelReaderBuilder readBuilder = EasyExcel.read(inputStream, ExcelData.class, new ExcelDataListener());\\r\\n            readBuilder.sheet().headRowNumber(2); // \u6307\u5b9a\u4ece\u7b2c3\u884c\u5f00\u59cb\u8bfb\u53d6\u6570\u636e\\r\\n            readBuilder.doRead();\\r\\n        } catch (IOException e) {\\r\\n            e.printStackTrace();\\r\\n        } finally {\\r\\n            if (inputStream != null) {\\r\\n                try {\\r\\n                    inputStream.close();\\r\\n                } catch (IOException e) {\\r\\n                    e.printStackTrace();\\r\\n                }\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n\\r\\n    public static class ExcelDataListener extends AnalysisEventListener<ExcelData> {\\r\\n\\r\\n        private List<ExcelData> dataList = new ArrayList<>();\\r\\n\\r\\n        @Override\\r\\n        public void invoke(ExcelData data, AnalysisContext context) {\\r\\n            if (context.readRowHolder().getRowIndex() > 0) { // \u8df3\u8fc7\u8868\u5934\u884c\\r\\n                // \u5904\u7406\u5b9e\u9645\u6570\u636e\u903b\u8f91\\r\\n                dataList.add(data);\\r\\n            }\\r\\n        }\\r\\n\\r\\n        @Override\\r\\n        public void doAfterAllAnalysed(AnalysisContext context) {\\r\\n            // \u6570\u636e\u5904\u7406\u5b8c\u6210\u540e\u7684\u903b\u8f91\\r\\n            processData(dataList);\\r\\n        }\\r\\n\\r\\n        private void processData(List<ExcelData> dataList) {\\r\\n            // \u5904\u7406\u6570\u636e\u7684\u5177\u4f53\u903b\u8f91\\r\\n            for (ExcelData data : dataList) {\\r\\n                System.out.println(data.toString());\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n\\r\\n    public static class ExcelData {\\r\\n        // Excel\u4e2d\u7684\u6570\u636e\u5b57\u6bb5\u5bf9\u5e94\u7684Java\u5c5e\u6027\\r\\n        private String column1;\\r\\n        private String column2;\\r\\n\\r\\n        // \u7701\u7565getter\u548csetter\u65b9\u6cd5\\r\\n    }\\r\\n}\\r\\n```\\r\\n\\r\\n##### \u65b9\u68482\uff1a\u7b2c\u4e00\u884c\u6570\u636e\u8bfb\u5728\u8868\u5934\u5355\u72ec\u5904\u7406\\r\\n\\r\\n```java\\r\\n@Override\\r\\n@SneakyThrows\\r\\npublic byte[] exportExcel(List<String> sheet1Ids, List<String> sheet2Ids, List<String> sheet3Ids, String startDate, String endDate) {\\r\\n    byte[] result;\\r\\n\\r\\n    // \u8bfb\u53d6\u6a21\u7248\\r\\n    try (ByteArrayOutputStream outputStream = new ByteArrayOutputStream();\\r\\n         InputStream inputStream = templateFileService.getTemplateInputStreamByPath(dataComparisonFileResource.getPath())) {\\r\\n        ExcelWriter excelWriter = EasyExcel.write(outputStream)\\r\\n                .withTemplate(inputStream)\\r\\n                .autoCloseStream(true)\\r\\n                .registerWriteHandler(new CustomSheet1CellWriteHandler())\\r\\n                .build();\\r\\n\\r\\n        // \u5199\u5165\u88681 \u6570\u636e\\r\\n        List<LfDispatchDataComparisonGridOperationVo> sheet1Data = getGridOperationData(sheet1Ids, startDate, endDate);\\r\\n        this.writerSheet1(excelWriter, sheet1Data);\\r\\n\\r\\n        // \u5199\u5165\u88682 \u6570\u636e\\r\\n        List<LfDispatchDataComparisonGwEnergyVo> sheet2Data = getGwEnergyData(sheet2Ids, startDate, endDate);\\r\\n        this.writerSheet2(excelWriter, sheet2Data);\\r\\n\\r\\n        // \u5199\u5165\u88683 \u6570\u636e\\r\\n        List<LfDispatchDataComparisonNewEnergyOperationVo> sheet3Data = getNewEnergyOperationData(sheet3Ids, startDate, endDate);\\r\\n        this.writerSheet3(excelWriter, sheet3Data);\\r\\n\\r\\n        // \u751f\u6210excel\\r\\n        excelWriter.finish();\\r\\n\\r\\n        // \u786e\u4fdd\u6240\u6709\u5185\u5bb9\u90fd\u5199\u5165\u8f93\u51fa\u6d41\u4e2d\\r\\n        result = outputStream.toByteArray();\\r\\n    }\\r\\n\\r\\n    return result;\\r\\n}\\r\\n\\r\\n/**\\r\\n * \u81ea\u5b9a\u4e49sheet1\u7684cell\u6837\u5f0f \u7528\u4e8e\u6807\u8bb0 \u8d1f\u8377\u5360\u6bd4\u3001\u7535\u91cf\u5360\u6bd4 \u5927\u4e8e1\u7684\u5355\u5143\u683c\\r\\n */\\r\\npublic static class CustomSheet1CellWriteHandler implements WorkbookWriteHandler, CellWriteHandler {\\r\\n\\r\\n    /**\\r\\n     * \u5904\u7406\u7b2c\u4e00\u884c\u6570\u636e (easyExcel\u5de5\u5177\u7684bug \u4f1a\u5c06\u7b2c\u4e00\u884c\u6570\u636e\u8bfb\u5728\u8868\u5934)\\r\\n     *\\r\\n     * @param context \u4e0a\u4e0b\u6587\\r\\n     */\\r\\n    @Override\\r\\n    public void afterCellDispose(CellWriteHandlerContext context) {\\r\\n        if (context.getRowIndex() == 2 && (context.getColumnIndex() == 14 || context.getColumnIndex() == 15)) {\\r\\n            // \u5904\u7406\u7b2c\u7b2c\u4e00\u4e2asheet\\r\\n            Sheet sheet = context.getRow().getSheet().getWorkbook().getSheetAt(0);\\r\\n            Row row = sheet.getRow(2);\\r\\n\\r\\n            Cell cell14 = row.getCell(14);\\r\\n            Cell cell15 = row.getCell(15);\\r\\n\\r\\n            // \u5e94\u7528\u7ea2\u8272\u6837\u5f0f\\r\\n            applyRedStyleToCells(cell14, cell15);\\r\\n        }\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * \u5904\u7406\u9664\u4e86\u7b2c\u4e00\u884c\u4ee5\u5916\u7684\u5176\u4ed6\u6570\u636e\u884c\\r\\n     *\\r\\n     * @param context \u4e0a\u4e0b\u6587\\r\\n     */\\r\\n    @Override\\r\\n    public void afterWorkbookDispose(WorkbookWriteHandlerContext context) {\\r\\n        Workbook workbook = context.getWriteWorkbookHolder().getWorkbook();\\r\\n        // \u53ea\u5904\u7406 sheet1\\r\\n        Sheet sheet = workbook.getSheetAt(0);\\r\\n\\r\\n        applyRedStyleToSheet(sheet);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * \u6309\u5217\u6807\u8bb0\u7ea2\u8272\\r\\n     *\\r\\n     * @param sheet \u5de5\u4f5c\u8868\\r\\n     */\\r\\n    private void applyRedStyleToSheet(Sheet sheet) {\\r\\n        for (Row row : sheet) {\\r\\n            applyRedStyleToCells(row.getCell(14), row.getCell(15));\\r\\n        }\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * \u5bf9\u6307\u5b9a\u7684\u5355\u5143\u683c\u5e94\u7528\u7ea2\u8272\u5b57\u4f53\u6837\u5f0f\\r\\n     *\\r\\n     * @param cells \u9700\u8981\u5e94\u7528\\r\\n\\r\\n\u7ea2\u8272\u6837\u5f0f\u7684\u5355\u5143\u683c\\r\\n     */\\r\\n    private void applyRedStyleToCells(Cell... cells) {\\r\\n        for (Cell cell : cells) {\\r\\n            if (cell != null) {\\r\\n                Workbook workbook = cell.getSheet().getWorkbook();\\r\\n                CellStyle redStyle = workbook.createCellStyle();\\r\\n                Font redFont = workbook.createFont();\\r\\n                redFont.setColor(IndexedColors.RED.getIndex());\\r\\n                redStyle.setFont(redFont);\\r\\n                cell.setCellStyle(redStyle);\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n}\\r\\n```\\r\\n\\r\\n### 5. \u7ed3\u8bba\\r\\n\u6211\u603b\u7ed3\uff1a\u5efa\u8bae\u4e0d\u518d\u4f7f\u7528EasyExcel\u5de5\u5177\u3002\\r\\n\\r\\n---"},{"id":"product-5","metadata":{"permalink":"/https://blog.jiguanchen.space/Jachen99.github.io/blog/product-5","editUrl":"https://github.com/Jachen99/Jachen99.github.io/tree/main/blog/blog/2023/10-12-\u552e\u7535\u5e02\u573a\u667a\u80fd\u5206\u6790\u9884\u6d4b\u7cfb\u7edf.md","source":"@site/blog/2023/10-12-\u552e\u7535\u5e02\u573a\u667a\u80fd\u5206\u6790\u9884\u6d4b\u7cfb\u7edf.md","title":"\u552e\u7535\u5e02\u573a\u667a\u80fd\u5206\u6790\u9884\u6d4b\u7cfb\u7edf","description":"\u8be5\u7cfb\u7edf\u9488\u5bf9\u552e\u7535\u5e02\u573a\u667a\u80fd\u5206\u6790\u9700\u6c42\uff0c\u652f\u6301\u884c\u4e1a\u5206\u7c7b\u548c\u552e\u7535\u6570\u636e\u5206\u6790\u3002","date":"2023-10-12T00:00:00.000Z","tags":[{"inline":false,"label":"\u7535\u529b\u884c\u4e1a","permalink":"/https://blog.jiguanchen.space/Jachen99.github.io/blog/tags/dianli-industry","description":"\u5173\u4e8e\u7535\u529b\u884c\u4e1a\u76f8\u5173\u7684\u8bdd\u9898"},{"inline":false,"label":"\u9884\u6d4b","permalink":"/https://blog.jiguanchen.space/Jachen99.github.io/blog/tags/forecasting","description":"\u6570\u636e\u5206\u6790\u4e0e\u9884\u6d4b\u76f8\u5173\u7684\u5185\u5bb9"}],"readingTime":2.275,"hasTruncateMarker":false,"authors":[{"name":"\u5b63\u51a0\u81e3","title":"\u540e\u7aef\u7814\u53d1\u5de5\u7a0b\u5e08","url":"https://github.com/jachen99","page":{"permalink":"/https://blog.jiguanchen.space/Jachen99.github.io/blog/authors/jiguanchen"},"socials":{"github":"https://github.com/jachen99"},"imageURL":"https://github.com/jachen99.png","key":"jiguanchen"}],"frontMatter":{"slug":"product-5","title":"\u552e\u7535\u5e02\u573a\u667a\u80fd\u5206\u6790\u9884\u6d4b\u7cfb\u7edf","authors":["jiguanchen"],"tags":["dianli-industry","forecasting"]},"unlisted":false,"prevItem":{"title":"EasyExcel\u4e2d\u7684\u6570\u636e\u7b2c\u4e00\u884c\u83b7\u53d6\u95ee\u9898\u53ca\u89e3\u51b3\u65b9\u6848\u8be6\u89e3","permalink":"/https://blog.jiguanchen.space/Jachen99.github.io/blog/advanced-data-processing-with-easyexcel"},"nextItem":{"title":"\u6d77\u91cf\u7528\u6237\u7528\u7535\u9700\u6c42\u5206\u6790\u9884\u6d4b\u7cfb\u7edf","permalink":"/https://blog.jiguanchen.space/Jachen99.github.io/blog/product-3"}},"content":"\u8be5\u7cfb\u7edf\u9488\u5bf9\u552e\u7535\u5e02\u573a\u667a\u80fd\u5206\u6790\u9700\u6c42\uff0c\u652f\u6301\u884c\u4e1a\u5206\u7c7b\u548c\u552e\u7535\u6570\u636e\u5206\u6790\u3002\\r\\n\\r\\n## 1. \u884c\u4e1a\u5206\u7c7b\\r\\n- \u4e09\u4ea7+\u5c45\u6c11\\r\\n- \u5341\u4e8c\u5927+\u5c45\u6c11\\r\\n- 133\u884c\u4e1a\\r\\n- 631\u884c\u4e1a\\r\\n  - \u7528\u6237\u89d2\u5ea6\uff1a\u9ad8\u8017\u80fd\u3001\u91cd\u70b9\u652f\u67f1\u884c\u4e1a\u3001\u7ec6\u5206\u884c\u4e1a\uff08133\uff09\\r\\n\\r\\n## 2. \u6570\u636e\u6765\u6e90\\r\\n- \u8425\u95001.0\u3001\u8425\u95002.0 \u6570\u636e\\r\\n- \u65b0\u589e\uff1a\u5927\u4e00\u62a5\u8868\\r\\n\\r\\n## 3. \u7528\u6237\u6765\u6e90\\r\\n- \u9ad8\u538b\u7528\u6237\u3001\u4f4e\u538b\u53f0\u533a\u7528\u6237\uff08\u5de5\u4e1a\u56ed\u533a\u3001\u5b66\u6821\uff09\\r\\n\\r\\n## 4. \u552e\u7535\u7c7b\u522b\\r\\n- \u5168\u96c6\u552e\u7535\u4ef7\u683c\u7c7b\u522b\u4fe1\u606f\u8868 `lf_ctrl_price`\\r\\n- \u552e\u7535\u4ef7\u683c\u7c7b\u522b\u4fe1\u606f\u8868 `lf_fc_sell_type`\\r\\n\\r\\n## 5. \u53e3\u5f84\uff08\u7edf\u8ba1\u6570\u636e\u6765\u6e90\u65b9\u5f0f\uff09\\r\\n- \u8d2d\u552e\u540c\u671f\u540e\u53e3\u5f84 00\\r\\n- \u8d2d\u552e\u540c\u671f\u524d\u53e3\u5f84\\r\\n- \u53d1\u5c55\u90e8\\r\\n- \u5927\u4e00\u62a5\u8868\\r\\n\\r\\n## 6. \u6c14\u8c61\u6570\u636e\\r\\n- \u6765\u6e90\uff1a\u6c14\u8c61\u7f51\uff0c\u7528\u4e8e\u5206\u6790\u548c\u9884\u6d4b\\r\\n\\r\\n## 7. \u8c03\u5ea6\\r\\n- \u652f\u6301\u7528\u7535\u91cf\u9884\u6d4b\u548c\u53d1\u7535\u91cf\u8c03\u5ea6\uff0c\u6ee1\u8db3\u7528\u7535\u548c\u8d1f\u8377\u9884\u6d4b\u9700\u6c42\\r\\n\\r\\n## 8. \u7535\u91cf\u548c\u8d1f\u8377\\r\\n\\r\\n### \u8d1f\u8377\\r\\n- \u77ac\u65f6\u503c\\r\\n\\r\\n### \u7535\u91cf\\r\\n- \u7d2f\u52a0\u503c\\r\\n\\r\\n### \u8ba1\u7b97\u6307\u6807\\r\\n- \u8d1f\u8377\u7387\uff1a\u5e73\u5747\u8d1f\u8377/\u6700\u9ad8\u8d1f\u8377\\r\\n- \u5cf0\u8c37\u5dee\uff1a\u6700\u9ad8\u8d1f\u8377-\u6700\u4f4e\u8d1f\u8377\\r\\n- \u5cf0\u8c37\u5dee\u7387\uff1a\u5cf0\u8c37\u5dee/\u6700\u9ad8\u8d1f\u8377\\r\\n\\r\\n## 9. \u5916\u90e8\u7ecf\u6d4e\u6570\u636e\\r\\n- \u901a\u8fc7\u63a5\u5165\u5916\u90e8\u6570\u636e\uff0c\u652f\u6301\u591a\u7ef4\u5ea6\u7684\u6570\u636e\u5206\u6790\u548c\u9884\u6d4b\\r\\n\\r\\n## 10. \u7535\u91cf\u5206\u6790\u5468\u671f\\r\\n- \u652f\u6301\u65e5\u3001\u5468\u3001\u6708\u3001\u5b63\u3001\u5e74\u7b49\u591a\u5468\u671f\u7684\u7535\u91cf\u9884\u6d4b\u548c\u5206\u6790\\r\\n\\r\\n## 11. \u4e1a\u6269\u7c7b\u578b\\r\\n- \u65b0\u589e\u3001\u589e\u5bb9\u3001\u51cf\u5bb9\u3001\u6682\u505c\u3001\u9500\u6237\u3001\u51cf\u5bb9\u6062\u590d\u3001\u6682\u505c\u6062\u590d\u7b49\\r\\n\\r\\n## 12. \u4ee3\u7406\u5de5\u5546\u4e1a\\r\\n- \u652f\u6301\u4ee3\u7406\u4e1a\u52a1\u6570\u636e\u7684\u5206\u6790\u4e0e\u9884\u6d4b\\r\\n\\r\\n## 13. \u7528\u6237\u7fa4\u4f53\\r\\n- \u63d0\u4f9b\u884c\u4e1a\u548c\u533a\u57df\u7528\u6237\u7684\u7ec6\u5206\u6570\u636e\uff0c\u4fbf\u4e8e\u5206\u6790\u548c\u9884\u6d4b\\r\\n\\r\\n## 14. \u533a\u57df\u8c03\u5ea6\\r\\n- \u901a\u8fc7\u533a\u57df\u8c03\u5ea6\u548c\u8d1f\u8377\u9884\u6d4b\u4f18\u5316\u7528\u7535\u91cf\u7ba1\u7406\\r\\n\\r\\n---\\r\\n\\r\\n\u901a\u8fc7\u8fd9\u4e9b\u529f\u80fd\u6a21\u5757\uff0c\u672c\u7cfb\u7edf\u80fd\u591f\u5728\u552e\u7535\u5e02\u573a\u4e2d\u63d0\u4f9b\u7cbe\u7ec6\u5316\u5206\u6790\u4e0e\u9884\u6d4b\uff0c\u6ee1\u8db3\u591a\u7ef4\u5ea6\u7684\u6570\u636e\u5e94\u7528\u9700\u6c42\u3002"},{"id":"product-3","metadata":{"permalink":"/https://blog.jiguanchen.space/Jachen99.github.io/blog/product-3","editUrl":"https://github.com/Jachen99/Jachen99.github.io/tree/main/blog/blog/2023/04-06-\u7528\u7535\u9700\u6c42\u5206\u6790\u9884\u6d4b\u7cfb\u7edf.md","source":"@site/blog/2023/04-06-\u7528\u7535\u9700\u6c42\u5206\u6790\u9884\u6d4b\u7cfb\u7edf.md","title":"\u6d77\u91cf\u7528\u6237\u7528\u7535\u9700\u6c42\u5206\u6790\u9884\u6d4b\u7cfb\u7edf","description":"\u8be5\u7cfb\u7edf\u65e8\u5728\u5206\u6790\u548c\u9884\u6d4b\u6d77\u91cf\u7528\u6237\u7684\u7528\u7535\u9700\u6c42\uff0c\u652f\u6301\u591a\u7ef4\u5ea6\u7684\u5e02\u573a\u8ddf\u8e2a\u3001\u7535\u91cf\u9884\u8b66\u548c\u62a5\u8868\u751f\u6210\u3002","date":"2023-04-06T00:00:00.000Z","tags":[{"inline":false,"label":"\u7535\u529b\u884c\u4e1a","permalink":"/https://blog.jiguanchen.space/Jachen99.github.io/blog/tags/dianli-industry","description":"\u5173\u4e8e\u7535\u529b\u884c\u4e1a\u76f8\u5173\u7684\u8bdd\u9898"},{"inline":false,"label":"\u9884\u6d4b","permalink":"/https://blog.jiguanchen.space/Jachen99.github.io/blog/tags/forecasting","description":"\u6570\u636e\u5206\u6790\u4e0e\u9884\u6d4b\u76f8\u5173\u7684\u5185\u5bb9"}],"readingTime":2.81,"hasTruncateMarker":false,"authors":[{"name":"\u5b63\u51a0\u81e3","title":"\u540e\u7aef\u7814\u53d1\u5de5\u7a0b\u5e08","url":"https://github.com/jachen99","page":{"permalink":"/https://blog.jiguanchen.space/Jachen99.github.io/blog/authors/jiguanchen"},"socials":{"github":"https://github.com/jachen99"},"imageURL":"https://github.com/jachen99.png","key":"jiguanchen"}],"frontMatter":{"slug":"product-3","title":"\u6d77\u91cf\u7528\u6237\u7528\u7535\u9700\u6c42\u5206\u6790\u9884\u6d4b\u7cfb\u7edf","authors":["jiguanchen"],"tags":["dianli-industry","forecasting"]},"unlisted":false,"prevItem":{"title":"\u552e\u7535\u5e02\u573a\u667a\u80fd\u5206\u6790\u9884\u6d4b\u7cfb\u7edf","permalink":"/https://blog.jiguanchen.space/Jachen99.github.io/blog/product-5"},"nextItem":{"title":"\u6b22\u8fce\u6765\u5230\u6211\u7684\u535a\u5ba2","permalink":"/https://blog.jiguanchen.space/Jachen99.github.io/blog/welcome"}},"content":"\u8be5\u7cfb\u7edf\u65e8\u5728\u5206\u6790\u548c\u9884\u6d4b\u6d77\u91cf\u7528\u6237\u7684\u7528\u7535\u9700\u6c42\uff0c\u652f\u6301\u591a\u7ef4\u5ea6\u7684\u5e02\u573a\u8ddf\u8e2a\u3001\u7535\u91cf\u9884\u8b66\u548c\u62a5\u8868\u751f\u6210\u3002\\r\\n\\r\\n## 1. \u80cc\u666f\u610f\u4e49\\r\\n\u901a\u8fc7\u8be5\u7cfb\u7edf\uff0c\u53ef\u4ee5\u5168\u9762\u5206\u6790\u7528\u6237\u7684\u7528\u7535\u9700\u6c42\uff0c\u63d0\u5347\u4f9b\u7535\u90e8\u95e8\u7684\u670d\u52a1\u6548\u7387\u548c\u7cbe\u51c6\u5ea6\u3002\\r\\n\\r\\n## 2. \u7406\u8bba\u7814\u7a76\u76ee\u6807\\r\\n\u7814\u7a76\u5e76\u5efa\u7acb\u79d1\u5b66\u3001\u51c6\u786e\u7684\u7528\u6237\u7528\u7535\u9700\u6c42\u5206\u6790\u6a21\u578b\uff0c\u6ee1\u8db3\u4e0d\u540c\u884c\u4e1a\u548c\u7528\u6237\u7684\u9884\u6d4b\u9700\u6c42\u3002\\r\\n\\r\\n## 3. \u603b\u4f53\u5efa\u8bbe\u76ee\u6807\\r\\n\\r\\n### \u6570\u636e\u4e2d\u5fc3\\r\\n- \u5e02\u573a\u8ddf\u8e2a\u4e0e\u5206\u6790\\r\\n- \u7535\u91cf\u53ca\u8d1f\u8377\u9884\u6d4b\\r\\n- \u7535\u91cf\u9884\u8b66\\r\\n- \u62a5\u8868\u62a5\u544a\\r\\n\\r\\n## 4. \u603b\u4f53\u5efa\u8bbe\u65b9\u6848\\r\\n\\r\\n### \u57fa\u7840\u6570\u636e\uff08\u5185\u56e0\u3001\u5916\u56e0\u5206\u6790\uff09\\r\\n- \u884c\u4e1a\u7535\u91cf\\r\\n- \u5927\u7528\u6237\u4fe1\u606f\\r\\n- \u7535\u5382\u4fe1\u606f\\r\\n- \u4e1a\u6269\u62a5\u88c5\u4fe1\u606f\\r\\n- \u6c14\u8c61\u4fe1\u606f\\r\\n- \u7ecf\u6d4e\u4fe1\u606f\\r\\n\\r\\n### \u5f71\u54cd\u56e0\u7d20\uff08\u667a\u80fd\u8ddf\u8e2a\uff09\\r\\n- \u8ddf\u8e2a\u6c14\u8c61\u56e0\u7d20\\r\\n- \u8ddf\u8e2a\u7528\u6237\u56e0\u7d20\\r\\n- \u8ddf\u8e2a\u7ecf\u6d4e\u56e0\u7d20\\r\\n- \u8ddf\u8e2a\u884c\u4e1a\u56e0\u7d20\\r\\n\\r\\n### \u5206\u6790\u5185\u5bb9\\r\\n- \u57fa\u4e8e\u6c14\u8c61\u7ecf\u6d4e\\r\\n- \u57fa\u4e8e\u76f8\u4f3c\u7528\u6237\\r\\n- \u57fa\u4e8e\u4e1a\u6269\u5bb9\u91cf\\r\\n- \u57fa\u4e8e\u4e3b\u5bfc\u884c\u4e1a\\r\\n\\r\\n### \u534f\u8c03\u5355\u4f4d\uff08\u534f\u8c03\u9884\u6d4b\uff09\\r\\n- \u7701\u5730\u534f\u8c03\\r\\n- \u90e8\u95e8\u534f\u8c03\\r\\n- \u65f6\u95f4\u534f\u8c03\\r\\n- \u53e3\u5f84\u534f\u8c03\\r\\n\\r\\n### \u9884\u8b66\uff08\u9884\u8b66\u4f53\u7cfb\uff09\\r\\n- \u9884\u8b66\u6307\u6807\u7b5b\u9009\\r\\n- \u9884\u8b66\u4f53\u7cfb\u5efa\u7acb\\r\\n\\r\\n### \u5168\u8986\u76d6\u5168\u65f6\u57df\u7535\u91cf\u8ddf\u8e2a\u5206\u6790\u9884\u8b66\u7cfb\u7edf\u5e73\u53f0\u5efa\u8bbe\\r\\n\\r\\n## \u6570\u636e\u5904\u7406\u529f\u80fd\\r\\n\\r\\n### \u6570\u636e\u5904\u7406\\r\\n- \u63d0\u4f9b\u6d77\u91cf\u5f02\u5e38\u6570\u636e\u8fa8\u8bc6\u4e0e\u4fee\u6b63\\r\\n- \u57fa\u4e8e BI \u7684\u53ef\u89c6\u5316\u6570\u636e\u5206\u6790\\r\\n  - \u7cbe\u7ec6\u5316\u7684\u8ddf\u8e2a\u5206\u6790\u4e0e\u6570\u636e\u94bb\u53d6\\r\\n  - \u91cf\u5316\u6c14\u8c61\u5f71\u54cd\u4e0e\u5206\u6790\\r\\n  - \u91cf\u5316\u7ecf\u6d4e\u5f71\u54cd\\r\\n  - \u4e1a\u6269\u7528\u7535\u7279\u6027\u7814\u7a76\u4e0e\u63d0\u70bc\\r\\n  - \u667a\u80fd\u5316\u8d1f\u8377\u9884\u6d4b\u7b97\u6cd5\\r\\n\\r\\n### \u667a\u80fd\u8d1f\u8377\u9884\u6d4b\u65b9\u6cd5\u5e93\u7ba1\u7406\\r\\n- \u96c6\u4e2d\u9884\u6d4b\uff1a\u652f\u6301\u4e00\u952e\u9884\u6d4b\\r\\n\\r\\n## \u591a\u65f6\u7a7a\u5c3a\u5ea6\u7684\u9884\u6d4b\u7ed3\u679c\u534f\u8c03\\r\\n\\r\\n### \u65f6\u95f4\u5c3a\u5ea6\\r\\n- \u5e74\u3001\u6708\u3001\u5468\u3001\u65e5\\r\\n\\r\\n### \u7a7a\u95f4\u5c3a\u5ea6\\r\\n- \u5168\u7701\u3001\u5730\u5e02\\r\\n\\r\\n### \u53e3\u5f84\\r\\n- \u7528\u7535\u91cf\u3001\u552e\u7535\u91cf\u3001\u4f9b\u7535\u91cf\\r\\n\\r\\n## \u5b8c\u5584\u7684\u9884\u8b66\u4f53\u7cfb\\r\\n- \u57fa\u4e8e\u5185\u56e0\u3001\u5916\u56e0\u3001\u8ddf\u8e2a\u548c\u9884\u6d4b\u7684\u9884\u8b66\u5206\u6790\\r\\n- \u63d0\u4f9b\u8ba1\u5212\u5b8c\u6210\u7387\u9884\u8b66\u3001\u9006\u52bf\u53d1\u5c55\u9884\u8b66\u3001\u5148\u884c\u6307\u6807\u9884\u8b66\u3001\u8d8b\u52bf\u9884\u8b66\u7b49\\r\\n\\r\\n## \u5b9e\u7528\u5316\u7684\u62a5\u8868\\r\\n- \u652f\u6301\u9ad8\u6548\u3001\u7cbe\u51c6\u7684\u62a5\u544a\u751f\u6210\uff0c\u52a9\u529b\u4e1a\u52a1\u51b3\u7b56\\r\\n\\r\\n## \u5fae\u670d\u52a1\u6280\u672f\u67b6\u6784\\r\\n- \u63d0\u4f9b\u7a33\u5b9a\u3001\u53ef\u6269\u5c55\u7684\u5fae\u670d\u52a1\u67b6\u6784\uff0c\u786e\u4fdd\u7cfb\u7edf\u7684\u7075\u6d3b\u6027\u548c\u6269\u5c55\u6027\\r\\n\\r\\n---"},{"id":"welcome","metadata":{"permalink":"/https://blog.jiguanchen.space/Jachen99.github.io/blog/welcome","editUrl":"https://github.com/Jachen99/Jachen99.github.io/tree/main/blog/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"\u6b22\u8fce\u6765\u5230\u6211\u7684\u535a\u5ba2","description":"\u6211\u7684\u535a\u5ba2\u4f7f\u7528\u4e86 Docusaurus \u535a\u5ba2\u529f\u80fd\uff0c\u7531 \u535a\u5ba2\u63d2\u4ef6 \u63d0\u4f9b\u652f\u6301\u3002","date":"2021-08-26T00:00:00.000Z","tags":[{"inline":false,"label":"Docusaurus","permalink":"/https://blog.jiguanchen.space/Jachen99.github.io/blog/tags/docusaurus","description":"Docusaurus tag description"},{"inline":false,"label":"\u4e2a\u4eba\u535a\u5ba2","permalink":"/https://blog.jiguanchen.space/Jachen99.github.io/blog/tags/myblog","description":"My Blog tag description"}],"readingTime":1.66,"hasTruncateMarker":true,"authors":[{"name":"\u5b63\u51a0\u81e3","title":"\u540e\u7aef\u7814\u53d1\u5de5\u7a0b\u5e08","url":"https://github.com/jachen99","page":{"permalink":"/https://blog.jiguanchen.space/Jachen99.github.io/blog/authors/jiguanchen"},"socials":{"github":"https://github.com/jachen99"},"imageURL":"https://github.com/jachen99.png","key":"jiguanchen"}],"frontMatter":{"slug":"welcome","title":"\u6b22\u8fce\u6765\u5230\u6211\u7684\u535a\u5ba2","authors":["jiguanchen"],"tags":["docusaurus","my-blog"],"sticky":true},"unlisted":false,"prevItem":{"title":"\u6d77\u91cf\u7528\u6237\u7528\u7535\u9700\u6c42\u5206\u6790\u9884\u6d4b\u7cfb\u7edf","permalink":"/https://blog.jiguanchen.space/Jachen99.github.io/blog/product-3"},"nextItem":{"title":"\u6211\u7684\u7b2c\u4e00\u7bc7 MDX \u535a\u5ba2\u6587\u7ae0","permalink":"/https://blog.jiguanchen.space/Jachen99.github.io/blog/my-first-blog-post"}},"content":"\u6211\u7684\u535a\u5ba2\u4f7f\u7528\u4e86 [Docusaurus \u535a\u5ba2\u529f\u80fd](https://docusaurus.io/docs/blog)\uff0c\u7531 [\u535a\u5ba2\u63d2\u4ef6](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog) \u63d0\u4f9b\u652f\u6301\u3002\\r\\n\\r\\n\u8fd9\u91cc\u6709\u4e00\u4e9b\u5c0f\u6280\u5de7\uff0c\u5e2e\u52a9\u4f60\u66f4\u597d\u5730\u4f7f\u7528 Docusaurus \u535a\u5ba2\u3002\\r\\n\\r\\n\x3c!-- truncate --\x3e\\r\\n\\r\\n\u4f60\u53ef\u4ee5\u7b80\u5355\u5730\u5c06 Markdown \u6587\u4ef6\uff08\u6216\u6587\u4ef6\u5939\uff09\u6dfb\u52a0\u5230 `blog` \u76ee\u5f55\u4e2d\uff0c\u5c31\u53ef\u4ee5\u5f00\u59cb\u5199\u4f5c\u5566\uff01\\r\\n\\r\\n\u5e38\u89c4\u7684\u535a\u5ba2\u4f5c\u8005\u4fe1\u606f\u53ef\u4ee5\u6dfb\u52a0\u5230 `authors.yml` \u6587\u4ef6\u4e2d\u3002\\r\\n\\r\\n\u6587\u7ae0\u7684\u53d1\u5e03\u65e5\u671f\u53ef\u4ee5\u4ece\u6587\u4ef6\u540d\u4e2d\u63d0\u53d6\uff0c\u6bd4\u5982\uff1a\\r\\n\\r\\n- `2024-11-12-welcome.md`\\r\\n- `2024-11-12-welcome/index.md`\\r\\n\\r\\n\u5c06\u6587\u7ae0\u548c\u76f8\u5173\u8d44\u6e90\u653e\u5728\u540c\u4e00\u6587\u4ef6\u5939\u4e2d\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5730\u7ba1\u7406\u535a\u5ba2\u6587\u7ae0\u7684\u56fe\u7247\u8d44\u6e90\u3002\u4f8b\u5982\uff1a\\r\\n\\r\\n![Docusaurus \u516c\u4ed4](./docusaurus-plushie-banner.jpeg)\\r\\n\\r\\n\u535a\u5ba2\u8fd8\u652f\u6301\u6807\u7b7e\u529f\u80fd\uff01\u65b9\u4fbf\u5f52\u7c7b\u548c\u7b5b\u9009\u6587\u7ae0\u3002\\r\\n\\r\\n**\u5982\u679c\u4f60\u4e0d\u9700\u8981\u535a\u5ba2**\uff1a\u53ea\u9700\u5220\u9664\u8fd9\u4e2a\u76ee\u5f55\uff0c\u5e76\u5728 Docusaurus \u914d\u7f6e\u4e2d\u5c06 `blog: false`\u3002\\r\\n\\r\\n## \u5173\u4e8e\u6211\\r\\n\\r\\n\u6211\u662f\u5b63\u51a0\u81e3\uff08GitHub \u7528\u6237\u540d\uff1ajachen99\uff09\uff0c\u76ee\u524d\u662f\u4e00\u540d\u540e\u7aef\u5f00\u53d1\u5de5\u7a0b\u5e08\uff0c\u559c\u6b22\u7814\u7a76\u65b0\u7684\u6280\u672f\uff0c\u5c24\u5176\u662f Docusaurus \u8fd9\u6837\u7684\u9759\u6001\u7ad9\u70b9\u751f\u6210\u5668\u5de5\u5177\u3002\u8fd9\u4e2a\u535a\u5ba2\u662f\u4e3a\u4e86\u5206\u4eab\u6211\u7684\u6280\u672f\u7ecf\u9a8c\u548c\u5b66\u4e60\u7b14\u8bb0\u800c\u521b\u5efa\u7684\u3002\\r\\n\\r\\n## \u6211\u7684\u535a\u5ba2\u8ba1\u5212\\r\\n\\r\\n\u6211\u4f1a\u5206\u4eab\u4e00\u4e9b Java \u5f00\u53d1\u3001\u524d\u7aef\u77e5\u8bc6\u548c\u4e2a\u4eba\u9879\u76ee\u7684\u8fdb\u5c55\uff0c\u5e0c\u671b\u6211\u7684\u7ecf\u9a8c\u80fd\u5bf9\u4f60\u6709\u6240\u5e2e\u52a9\uff01\u4e5f\u6b22\u8fce\u5927\u5bb6\u7559\u8a00\u4ea4\u6d41\u3002\\r\\n\\r\\n---\\r\\n\\r\\n\u611f\u8c22\u4f60\u7684\u5173\u6ce8\uff0c\u6b22\u8fce\u968f\u65f6\u5149\u4e34\u6211\u7684\u535a\u5ba2\uff01"},{"id":"my-first-blog-post","metadata":{"permalink":"/https://blog.jiguanchen.space/Jachen99.github.io/blog/my-first-blog-post","editUrl":"https://github.com/Jachen99/Jachen99.github.io/tree/main/blog/blog/2021-08-01-mdx-blog-post.mdx","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"\u6211\u7684\u7b2c\u4e00\u7bc7 MDX \u535a\u5ba2\u6587\u7ae0","description":"\u8fd9\u7bc7\u6587\u7ae0\u5c55\u793a\u4e86 Docusaurus Markdown \u529f\u80fd \u7684\u4e00\u4e9b\u7279\u70b9\uff0c\u6bd4\u5982 MDX \u7684\u652f\u6301\u3002","date":"2021-08-01T00:00:00.000Z","tags":[{"inline":false,"label":"Docusaurus","permalink":"/https://blog.jiguanchen.space/Jachen99.github.io/blog/tags/docusaurus","description":"Docusaurus tag description"},{"inline":false,"label":"\u4e2a\u4eba\u535a\u5ba2","permalink":"/https://blog.jiguanchen.space/Jachen99.github.io/blog/tags/myblog","description":"My Blog tag description"}],"readingTime":0.42,"hasTruncateMarker":true,"authors":[{"name":"\u5b63\u51a0\u81e3","title":"\u540e\u7aef\u7814\u53d1\u5de5\u7a0b\u5e08","url":"https://github.com/jachen99","page":{"permalink":"/https://blog.jiguanchen.space/Jachen99.github.io/blog/authors/jiguanchen"},"socials":{"github":"https://github.com/jachen99"},"imageURL":"https://github.com/jachen99.png","key":"jiguanchen"}],"frontMatter":{"slug":"my-first-blog-post","title":"\u6211\u7684\u7b2c\u4e00\u7bc7 MDX \u535a\u5ba2\u6587\u7ae0","authors":["jiguanchen"],"tags":["docusaurus","my-blog"]},"unlisted":false,"prevItem":{"title":"\u6b22\u8fce\u6765\u5230\u6211\u7684\u535a\u5ba2","permalink":"/https://blog.jiguanchen.space/Jachen99.github.io/blog/welcome"}},"content":"\u8fd9\u7bc7\u6587\u7ae0\u5c55\u793a\u4e86 [Docusaurus Markdown \u529f\u80fd](https://docusaurus.io/docs/markdown-features) \u7684\u4e00\u4e9b\u7279\u70b9\uff0c\u6bd4\u5982 [MDX](https://mdxjs.com/) \u7684\u652f\u6301\u3002\\r\\n\\r\\n:::tip\\r\\n\\r\\n\u501f\u52a9 React \u7684\u529b\u91cf\uff0c\u4f60\u53ef\u4ee5\u5728\u535a\u5ba2\u6587\u7ae0\u4e2d\u521b\u5efa\u4ea4\u4e92\u5f0f\u7684\u7ec4\u4ef6\u548c\u5185\u5bb9\u3002\\r\\n\\r\\n:::\\r\\n\\r\\n{/* truncate */}\\r\\n\\r\\n\u4f8b\u5982\uff0c\u8fd9\u91cc\u7528 JSX \u521b\u5efa\u4e86\u4e00\u4e2a\u4ea4\u4e92\u5f0f\u6309\u94ae\uff1a\\r\\n\\r\\n```js\\r\\n<button onClick={() => alert(\'\u6309\u94ae\u88ab\u70b9\u51fb\u4e86\uff01\')}>\u70b9\u6211\u4e00\u4e0b\uff01</button>"}]}}')}}]);