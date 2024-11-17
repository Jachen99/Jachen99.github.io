"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[1581],{9189:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>t,toc:()=>d});var t=e(9431),i=e(4848),s=e(8453);const a={slug:"productivity-exercise-1",title:"\u7ec3\u4e60\u98981",authors:["jiguanchen"]},c=void 0,o={authorsImageUrls:[void 0]},d=[{value:"\u77e5\u8bc6\u70b9\uff1a\u6570\u7ec4\u3001\u5faa\u73af\u3001if\u3001\u8fb9\u754c",id:"\u77e5\u8bc6\u70b9\u6570\u7ec4\u5faa\u73afif\u8fb9\u754c",level:6},{value:"\u77e5\u8bc6\u70b9\uff1aswitch",id:"\u77e5\u8bc6\u70b9switch",level:6},{value:"\u77e5\u8bc6\u70b9\uff1astatic\u3001\u6570\u7ec4\u3001\u5faa\u73af",id:"\u77e5\u8bc6\u70b9static\u6570\u7ec4\u5faa\u73af",level:6}];function u(n){const r={code:"code",em:"em",h6:"h6",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:(0,i.jsx)(r.em,{children:"\u7b80\u5355\u7684Java\u6709\u5173\u6570\u7ec4\u3001\u5faa\u73af\u7684\u7ec3\u4e60\u9898"})}),"\n",(0,i.jsx)(r.h6,{id:"\u77e5\u8bc6\u70b9\u6570\u7ec4\u5faa\u73afif\u8fb9\u754c",children:"\u77e5\u8bc6\u70b9\uff1a\u6570\u7ec4\u3001\u5faa\u73af\u3001if\u3001\u8fb9\u754c"}),"\n",(0,i.jsx)(r.p,{children:"\u521b\u5efa100\u4e2a\u5b66\u751f\u5bf9\u8c61\uff0cid\u7f16\u53f7\u4e3a1-100\r\n\u628a\u7f16\u53f7\u53ef\u4ee5\u5927\u4e8e60\u7684\u5f52\u4e3a\u4e8c\u7ec4\uff0c\u5176\u5b83\u5f52\u4e3a\u4e00\u7ec4"}),"\n",(0,i.jsx)(r.h6,{id:"\u77e5\u8bc6\u70b9switch",children:"\u77e5\u8bc6\u70b9\uff1aswitch"}),"\n",(0,i.jsx)(r.p,{children:"\u5b9a\u4e49\u4e00\u4e2a\u65b9\u6cd5\uff0c\u7ed91-4\u5176\u4e2d\u4e00\u4e2a\u6570\u5b57\uff0c\u8fd4\u56de\u6625\u590f\u79cb\u51ac\u5b57\u7b26\u4e32\uff0c\u4e0d\u547d\u4e2d\u5219\u8fd4\u56de \u9519\u8bef\u5b63\u8282\u3002"}),"\n",(0,i.jsx)(r.h6,{id:"\u77e5\u8bc6\u70b9static\u6570\u7ec4\u5faa\u73af",children:"\u77e5\u8bc6\u70b9\uff1astatic\u3001\u6570\u7ec4\u3001\u5faa\u73af"}),"\n",(0,i.jsx)(r.p,{children:"\u5b9a\u4e49\u4e00\u4e2aDog\u7c7b\uff0c\u91cc\u9762\u542b\u6709age\u9759\u6001\u53d8\u91cf\u521d\u59cb\u503c\u4e3a10\uff0c\u6709\u4e00\u4e2aname\u6210\u5458\u5c5e\u6027\uff0c\u6709\u4e00\u4e2achangAge\u65b9\u6cd5\uff0c\u4f7fage\u81ea\u589e1\uff0c\u521b\u5efa\u542b5\u4e2a\u7684dog\u6570\u7ec4\uff0c\u83b7\u53d6\u6570\u7ec4\u89d2\u6807\u4e3a3\u7684dog\u5bf9\u8c61\uff0c\u8c03\u7528\u4e24\u6b21changAge\u65b9\u6cd5\uff0c\u6700\u540e\u6253\u53705\u4e2adog\u5bf9\u8c61\u7684age\u5206\u522b\u4e3a\u591a\u5c11\uff1f"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:'public class AnswerTest {\r\n\r\n    public static void main(String [] args){\r\n       // test1();\r\n\r\n        //test2();\r\n        test3();\r\n    }\r\n\r\n    public static void test3(){\r\n        Dog [] dogs = new Dog[5];\r\n\r\n        for(int i=0; i<5; i++){\r\n            Dog dog = new Dog();\r\n            dog.setName("\u65fa\u8d22"+i);\r\n            dogs[i] = dog;\r\n        }\r\n\r\n        Dog dog =  dogs[3];\r\n        dog.changeAge();\r\n        dog.changeAge();\r\n\r\n        for (Dog d : dogs){\r\n            System.out.println("\u540d\u79f0="+d.getName() + ", age="+d.getAge());\r\n        }\r\n\r\n\r\n    }\r\n\r\n    public static void test2(){\r\n        int season = 10;\r\n\r\n        String content;\r\n\r\n        switch (season){\r\n            case 1:content="\u6625";\r\n                break;\r\n\r\n            case 2:content="\u590f";\r\n                break;\r\n\r\n            case 3:content="\u79cb";\r\n                break;\r\n\r\n            case 4:content="\u51ac";\r\n                break;\r\n\r\n            default: {\r\n                content="\u9519\u8bef\u5b63\u8282";\r\n                System.out.println("default \u6267\u884c");\r\n            }\r\n        }\r\n\r\n        System.out.println(content);\r\n\r\n    }\r\n\r\n    public static void test1(){\r\n        Student[] arr1 = new Student[60];\r\n        int arr1Index = 0;\r\n\r\n        Student[] arr2 = new Student[40];\r\n        int arr2Index = 0;\r\n\r\n        for(int i=0; i<100; i++){\r\n            int num = i+1;\r\n            Student student = new Student();\r\n            student.setId(num);\r\n            if(num > 60){\r\n                arr2[arr2Index] = student;\r\n                //arr2Index = arr2Index +1;\r\n                arr2Index++;\r\n            }else {\r\n                arr1[arr1Index] = student;\r\n                arr1Index++;\r\n            }\r\n        }\r\n\r\n\r\n        for(Student s: arr1){\r\n            System.out.println(s.getId());\r\n        }\r\n\r\n        System.out.println("============");\r\n        for(Student s: arr2){\r\n            System.out.println(s.getId());\r\n        }\r\n\r\n    }\r\n}\r\npublic class Student {\r\n\r\n    private int id;\r\n\r\n    public int  getId(){\r\n        return id;\r\n    }\r\n\r\n    public void setId(int id){\r\n        this.id = id;\r\n    }\r\n}\r\n\r\npublic class Dog {\r\n\r\n    public static int age =10;\r\n\r\n    private String name;\r\n\r\n    public void setName(String name){\r\n        this.name = name;\r\n    }\r\n\r\n    public String getName(){\r\n        return name;\r\n    }\r\n\r\n    public void changeAge(){\r\n        age++;\r\n    }\r\n\r\n    public int getAge(){\r\n        return age;\r\n    }\r\n\r\n}\r\n\n'})})]})}function l(n={}){const{wrapper:r}={...(0,s.R)(),...n.components};return r?(0,i.jsx)(r,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},8453:(n,r,e)=>{e.d(r,{R:()=>a,x:()=>c});var t=e(6540);const i={},s=t.createContext(i);function a(n){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function c(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),t.createElement(s.Provider,{value:r},n.children)}},9431:n=>{n.exports=JSON.parse('{"permalink":"/blog/productivity-exercise-1","editUrl":"https://github.com/Jachen99/Jachen99.github.io/tree/V2.2.1/blog/2018/06-09-\u7ec3\u4e60\u98981.md","source":"@site/blog/2018/06-09-\u7ec3\u4e60\u98981.md","title":"\u7ec3\u4e60\u98981","description":"\u7b80\u5355\u7684Java\u6709\u5173\u6570\u7ec4\u3001\u5faa\u73af\u7684\u7ec3\u4e60\u9898","date":"2018-06-09T00:00:00.000Z","tags":[],"readingTime":2.095,"hasTruncateMarker":false,"authors":[{"name":"\u5b63\u51a0\u81e3","title":"\u540e\u7aef\u7814\u53d1\u5de5\u7a0b\u5e08","url":"https://github.com/jachen99","page":{"permalink":"/blog/authors/jiguanchen"},"socials":{"github":"https://github.com/jachen99"},"imageURL":"https://github.com/jachen99.png","key":"jiguanchen"}],"frontMatter":{"slug":"productivity-exercise-1","title":"\u7ec3\u4e60\u98981","authors":["jiguanchen"]},"unlisted":false,"prevItem":{"title":"\u7ec3\u4e60\u98982","permalink":"/blog/productivity-exercise-2"}}')}}]);