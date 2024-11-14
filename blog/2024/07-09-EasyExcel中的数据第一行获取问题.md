# EasyExcel中的数据第一行获取问题及解决方案详解
在使用Java开发中，处理Excel文件是一个常见需求。EasyExcel作为一个流行的Excel操作库，提供了方便而高效的API来读写Excel文件。然而，有时会遇到数据第一行被误读为表头的问题，特别是在Excel文件的第一行不是标准表头而是实际数据时，这一问题显得尤为突出。
本文将详细讨论这一问题的根本原因，并提供一种有效的解决方案。
## EasyExcel简介 EasyExcel是阿里巴巴开源的一款Java操作Excel的工具库，它提供了强大的功能，支持大数据量的读写操作，并且提供了丰富的样式和格式处理功能，适用于各种场景下的Excel文件处理需求。
## 问题描述
在使用EasyExcel读取Excel文件时，经常会出现第一行数据被错误地识别为表头的情况。这一问题的根本原因在于EasyExcel在某些情况下无法正确识别Excel文件中数据行和表头行的区分，特别是当Excel文件结构比较复杂或者存在特定格式时，EasyExcel的默认解析逻辑可能会出现偏差。
## 解决方案详解
为了解决数据第一行获取问题，我们可以采取以下步骤来调整和优化EasyExcel的读取操作，确保能够正确获取实际数据行而非表头行：
##  方案1：
### 1. 手动指定数据起始行 在读取Excel文件时，手动指定数据的起始行，而不依赖EasyExcel的自动识别。这可以通过设置`headRowNumber`来实现，明确告知EasyExcel从第几行开始读取数据。

```java
ExcelReaderBuilder readBuilder = EasyExcel.read(inputStream, ExcelData.class, new ExcelDataListener())
        .sheet().headRowNumber(2) // 指定从第3行开始读取数据
        .doRead();
```

在上述代码中，通过headRowNumber(2)指定从第3行开始读取数据，避免将第一行误读为表头。

### 数据处理逻辑中排除表头行
在实际数据处理逻辑中，可以通过逻辑判断排除表头行，确保只处理实际的数据行。例如，在invoke方法中可以添加逻辑判断：
```java
@Override 
public void invoke(ExcelData data, AnalysisContext context) {
 if (context.readRowHolder().getRowIndex() > 0) { // 跳过表头行 // 处理实际数据逻辑 } }
```
通过context.readRowHolder().getRowIndex() > 0判断当前行索引大于0时才处理数据，跳过表头行的处理。

### 使用后处理器进行二次处理
EasyExcel提供了后处理器（Handler）机制，在数据读取完成后可以进行二次处理。可以在doAfterAllAnalysed方法中对数据进行进一步处理或过滤，确保最终数据的准确性和完整性。

```java
@Override 
public void doAfterAllAnalysed(AnalysisContext context) { 
// 数据处理完成后的逻辑 
processData(dataList);
}
```
在上述代码中，可以在doAfterAllAnalysed方法中调用processData方法，对数据进行进一步的处理或者存储操作。

示例代码
以下是一个完整的示例代码，展示了如何使用EasyExcel读取Excel文件并处理数据，同时避免数据第一行被误读为表头的问题：

```java
import com.alibaba.excel.EasyExcel;
import com.alibaba.excel.context.AnalysisContext;
import com.alibaba.excel.event.AnalysisEventListener;
import com.alibaba.excel.read.builder.ExcelReaderBuilder;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

public class ExcelReaderExample {

    public static void main(String[] args) {
        String fileName = "path/to/your/excel/file.xlsx";
        InputStream inputStream = null;
        try {
            inputStream = new FileInputStream(fileName);
            ExcelReaderBuilder readBuilder = EasyExcel.read(inputStream, ExcelData.class, new ExcelDataListener());
            readBuilder.sheet().headRowNumber(2); // 指定从第3行开始读取数据
            readBuilder.doRead();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (inputStream != null) {
                try {
                    inputStream.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    public static class ExcelDataListener extends AnalysisEventListener<ExcelData> {

        private List<ExcelData> dataList = new ArrayList<>();

        @Override
        public void invoke(ExcelData data, AnalysisContext context) {
            if (context.readRowHolder().getRowIndex() > 0) { // 跳过表头行
                // 处理实际数据逻辑
                dataList.add(data);
            }
        }

        @Override
        public void doAfterAllAnalysed(AnalysisContext context) {
            // 数据处理完成后的逻辑
            processData(dataList);
        }

        private void processData(List<ExcelData> dataList) {
            // 处理数据的具体逻辑
            for (ExcelData data : dataList) {
                System.out.println(data.toString());
            }
        }
    }

    public static class ExcelData {
        // Excel中的数据字段对应的Java属性
        private String column1;
        private String column2;
        
        // 省略getter和setter方法
    }
}
```

##  方案2：
第一行数据读在表头单独处理。
```java

	@Override
    @SneakyThrows
    public byte[] exportExcel(List<String> sheet1Ids, List<String> sheet2Ids, List<String> sheet3Ids, String startDate, String endDate) {
        byte[] result;

        // 读取模版
        try (ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
             InputStream inputStream = templateFileService.getTemplateInputStreamByPath(dataComparisonFileResource.getPath())) {
            ExcelWriter excelWriter = EasyExcel.write(outputStream)
                    .withTemplate(inputStream)
                    .autoCloseStream(true)
                    .registerWriteHandler(new CustomSheet1CellWriteHandler())
                    .build();

            // 写入表1 数据
            List<LfDispatchDataComparisonGridOperationVo> sheet1Data = getGridOperationData(sheet1Ids, startDate, endDate);
            this.writerSheet1(excelWriter, sheet1Data);

            // 写入表2 数据
            List<LfDispatchDataComparisonGwEnergyVo> sheet2Data = getGwEnergyData(sheet2Ids, startDate, endDate);
            this.writerSheet2(excelWriter, sheet2Data);

            // 写入表3 数据
            List<LfDispatchDataComparisonNewEnergyOperationVo> sheet3Data = getNewEnergyOperationData(sheet3Ids, startDate, endDate);
            this.writerSheet3(excelWriter, sheet3Data);

            // 生成excel
            excelWriter.finish();

            // 确保所有内容都写入输出流中
            result = outputStream.toByteArray();
        }

        return result;
    }


    /**
     * 自定义sheet1的cell样式 用于标记 负荷占比、电量占比 大于1的单元格
     */
    public static class CustomSheet1CellWriteHandler implements WorkbookWriteHandler, CellWriteHandler {

        /**
         * 处理第一行数据 (easyExcel工具的bug 会将第一行数据读在表头)
         *
         * @param context 上下文
         */
        @Override
        public void afterCellDispose(CellWriteHandlerContext context) {
            if (context.getRowIndex() == 2 && (context.getColumnIndex() == 14 || context.getColumnIndex() == 15)) {
                // 处理第第一个sheet
                Sheet sheet = context.getRow().getSheet().getWorkbook().getSheetAt(0);
                Row row = sheet.getRow(2);

                Cell cell14 = row.getCell(14);
                Cell cell15 = row.getCell(15);

//                if (cell14 == null || cell15 == null){
//                    cell14 = row.createCell(14, CellType.STRING);
//                    cell15 = row.createCell(15, CellType.STRING);
//                }

                // 应用红色样式
                applyRedStyleToCells(cell14, cell15);
            }
        }

        /**
         * 处理除了第一行以外的其他数据行
         *
         * @param context 上下文
         */
        @Override
        public void afterWorkbookDispose(WorkbookWriteHandlerContext context) {
            Workbook workbook = context.getWriteWorkbookHolder().getWorkbook();
            // 只处理 sheet1
            Sheet sheet = workbook.getSheetAt(0);

            applyRedStyleToSheet(sheet);
        }

        /**
         * 按列标记红色
         *
         * @param sheet 工作表
         */
        private void applyRedStyleToSheet(Sheet sheet) {
            for (Row row : sheet) {
                applyRedStyleToCells(row.getCell(14), row.getCell(15));
            }
        }

        /**
         * 对指定的单元格应用红色字体样式
         *
         * @param cells 需要应用样式的单元格
         */
        private void applyRedStyleToCells(Cell... cells) {
            for (Cell cell : cells) {
                if (cell != null && cell.getCellType() == CellType.NUMERIC && cell.getNumericCellValue() > 1) {
                    Workbook workbook = cell.getSheet().getWorkbook();
                    CellStyle originalCellStyle = cell.getCellStyle();
                    CellStyle redCellStyle = workbook.createCellStyle();
                    redCellStyle.cloneStyleFrom(originalCellStyle);

                    // 创建一个红色字体
                    Font redFont = workbook.createFont();
                    redFont.setColor(IndexedColors.RED.getIndex());
                    redCellStyle.setFont(redFont);

                    cell.setCellStyle(redCellStyle);
                }
            }
        }
    }
```

**总结**
我总结：建议不再使用EasyExcel工具。