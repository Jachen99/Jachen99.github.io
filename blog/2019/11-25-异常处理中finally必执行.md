---
slug: java-finally-must-be-executed
title: 异常处理中finally必执行
authors: [jiguanchen]
---

*课程代码演示 面试题，返回结果最终是finally为准*<!--more-->（尽量不要在finally里面使用return，会忽略try catch里面的return，容易造成未知的bug）

```
try{
   // 可能发生异常的代码
}catch(ExceptionName1 e1){
   //出异常的时候处理
}catch(ExceptionName2 e2){
   //出异常的时候处理
}
try{
   // 可能发生异常的代码
}catch(ExceptionName1 e1){
   //出异常的时候处理
}finally{
    //肯定执行的代码
}
try{
   // 可能发生异常的代码
}finally{
    //肯定执行的代码
}
    public static int divide(int num1, int num2){
        try {
            int result = num1/num2;
            return result;
        }catch (Exception e){
            System.out.println("出异常");
        }finally {
            System.out.println("finally执⾏了");
             return -2;
                    }
                 //   return -1;
}
```

不管是否存在异常输出都是-2
