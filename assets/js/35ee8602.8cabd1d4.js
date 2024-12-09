"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[7809],{41688:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var i=e(9757),a=e(74848),s=e(28453);const l={slug:"product-collections",title:"\u96c6\u5408\u5de5\u5177\u7c7bCollections",authors:["jiguanchen"]},o=void 0,r={authorsImageUrls:[void 0]},d=[];function c(n){const t={code:"code",em:"em",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:"\u4ecb\u7ecd\u4e86\u4e0d\u80fd\u88ab\u5b9e\u4f8b\u5316\u7684\u96c6\u5408\u5de5\u5177\u7c7bCollections"})," "]}),"\n",(0,a.jsx)(t.p,{children:"1\u3001Collections\u5305\u542b\u6709\u591a\u79cd\u96c6\u5408\u64cd\u4f5c\u7684\u9759\u6001\u591a\u6001\u65b9\u6cd5\uff0c\u4e0d\u80fd\u628a\u6784\u9020\u51fd\u6570\u79c1\u6709\u5316\uff08\u5373\u5b9e\u4f8b\u5316\uff09"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"public class Collections {\n    // Suppresses default constructor, ensuring non-\ninstantiability.\n    private Collections() {\n    }\n"})}),"\n",(0,a.jsx)(t.p,{children:"2\u3001\u4e0eCollection\u7684\u533a\u522b\nCollection\u662f\u63a5\u53e3\uff0c\u63d0\u4f9b\uf9ba\u5bf9\u96c6\u5408\u5bf9\u8c61\u8fdb\ufa08\u57fa\u672c\u64cd\u4f5c\u7684\u901a\u7528\u63a5\u2f1d\u65b9\u6cd5\uff0cList\u3001Set\u7b49\u591a\u79cd\u5177\u4f53\u7684\u5b9e\u73b0\u7c7b\nCollections\u662f\u5de5\u5177\u7c7b\uff0c\u4e13\u95e8\u64cd\u4f5cCollection\u63a5\u53e3\u5b9e\u73b0\u7c7b\uf9e9\u9762\u7684\u5143\u7d20"}),"\n",(0,a.jsx)(t.p,{children:"3\u3001\u5e38\u89c1\u65b9\u6cd5"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'\u6392\u5e8fsort(List list)\n\n//\u6309\u81ea\u7136\u6392\u5e8f\u5347\u5e8f\nList<String> list = new ArrayList<>();\nlist.add("aaaa");\nlist.add("zzz");\nlist.add("gggg"); \nSystem.out.println(list);\nCollections.sort(list);\nSystem.out.println(list);\n\n/*sort(List list, Comparator c) \u81ea\u5b9a\u4e49\u6392\u5e8f\u89c4\u5219\uff0c\u7531Comparator\u63a7\u5236\u6392\u5e8f\u903b\u8f91*/\nList<String> list = new ArrayList<>();\nlist.add("aaaa");\nlist.add("zzz");\nlist.add("gggg");\nSystem.out.println(list);\n//\u9ed8\u8ba4\u5347\u5e8f\nCollections.sort(list, Comparator.naturalOrder());\nSystem.out.println(list);\n//\u964d\u5e8f\nCollections.sort(list, Comparator.reverseOrder());\nSystem.out.println(list);\n\n\u968f\u673a\u6392\u5e8f shuffle(List list)\n    List<String> list = new ArrayList<>();\n        list.add("1");\n        list.add("2");\n        list.add("3");\n        list.add("4");\n        list.add("5");\n        list.add("6");\n        list.add("7");\n        list.add("8");\n        list.add("9");\n        list.add("10");\n        list.add("J");\n        list.add("Q");\n        list.add("K");\n        System.out.println(list);\n        Collections.shuffle(list);\n        System.out.println(list);\n'})}),"\n",(0,a.jsx)(t.p,{children:"\u83b7\u53d6\u6700\u5927\u5143\u7d20 max(Collection coll) \u9ed8\u8ba4\u6bd4\u8f83\uff0c\uf967\u9002\u5408\u5bf9\u8c61\u6bd4\u8f83"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'//\u83b7\u53d6\u6700\u5927\u5143\u7d20 max(Collection coll, Comparator comparator)\n//\u83b7\u53d6\u6700\u5c0f\u5143\u7d20 min(Collection coll)\n\npublic class CollectionsTest {\n    public static void main(String[] args) {\n        List<Student> list = new ArrayList<>();\n        list.add(new Student("jack", 26));\n        list.add(new Student("tom", 29));\n        list.add(new Student("mary", 32));\n        list.add(new Student("tony", 19));\n        list.add(new Student("smith", 41));\n        System.out.println(list);\n        Student maxAgeStudent =  Collections.max(list, new \nComparator<Student>() {\n            @Override\n            public int compare(Student o1, Student o2) {\n                return o1.getAge() - o2.getAge();\n            }\n        });\n        \n         Student mixAgeStudent =  Collections.mix(list, new \nComparator<Student>()       {\n            @Override\n            public int compare(Student o1, Student o2) {\n                return o1.getAge() - o2.getAge();\n            }\n        });\n       System.out.println(maxAgeStudent.toString());\n    }\n}\nclass Student {\n    public Student(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    private int age;\n    private String name;\n    public void setAge(int age) {\n        this.age = age;\n    }\n    public int getAge() {\n        return age;\n    }\n    public void setName(String name) {\n        this.name = name;\n    }\n    public String getName() {\n        return name;\n    }\n    @Override\n    public String toString() {\n        return "Student{" +\n                "age=" + age +\n                ", name=\'" + name + \'\\\'\' +\n                \'}\';\n    }\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"4\u3001\u521b\u5efa\uf967\u53ef\u53d8\u96c6\u5408unmodifiablleXXX()"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'    List<String> list = new ArrayList<>();\n        list.add("SpringBoot\u8bfe\u7a0b");\n        list.add("\u67b6\u6784\u8bfe\u7a0b");\n        list.add("\u5fae\u670d\u52a1SpringCloud\u8bfe\u7a0b"); //\u8bbe\u7f6e\u4e3a\u53ea\u8bfbList\u96c6\u5408\n        list = Collections.unmodifiableList(list);\n        System.out.println(list);\n        Set<String> set = new HashSet<>();\n        set.add("Mysql\u6559\u7a0b");\n        set.add("Linux\u670d\u52a1\u5668\ufa38\u5668\ufa38\u6559\u7a0b");\n        set.add("Git\u6559\u7a0b");\n        //\u8bbe\u7f6e\u4e3a\u53ea\u8bfbSet\u96c6\u5408\n        set = Collections.unmodifiableSet(set);\n        System.out.println(set);\n        Map<String, String> map = new HashMap<>();\n        map.put("key1", "\u8bfe\u7a0b1");\n        map.put("key2", "\u8bfe\u7a0b2");\n        //\u8bbe\u7f6e\u4e3a\u53ea\u8bfbMap\u96c6\u5408\n        map = Collections.unmodifiableMap(map);\n        System.out.println(map);\n'})}),"\n",(0,a.jsx)(t.p,{children:"5\u3001\u5143\u7d20\u6392\u5e8f\u63a5\u53e3Comparable"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'//\u4ec0\u4e48\u662fComparable\npublic interface Comparable<T> {\n    public int compareTo(T o);\n}\n//\u662f\u4e00\u4e2a\u63a5\u53e3\uff0c\u5b9a\u5236\u6392\u5e8f\u89c4\u5219\n//\u5bf9\u5b83\u7684\u6bcf\u4e2a\u7c7b\u7684\u5bf9\u8c61\u8fdb\ufa08\u6574\u4f53\u6392\u5e8f\uff0c\uf9e9\u9762compareTo\u65b9\u6cd5\u662f\u5b9e\u73b0\u6392\u5e8f\u7684\u5177\u4f53\u65b9\u6cd5\n//\u6bd4\u5982TreeSet\u3001SortedSet\u3001Collections.sort()\u65b9\u6cd5\u8c03\u7528\u8fdb\ufa08\u6392\u5e8f\n//String\u3001Integer\u7b49\u7c7b\u9ed8\u8ba4\u5b9e\u73b0\uf9ba\u8fd9\u4e2a\u63a5\u53e3\uff0c\u6240\u4ee5\u53ef\u4ee5\u6392\u5e8f(\u770b\u6e90\u7801)\n\n//\u8be6\u89e3comparable\u65b9\u6cd5\n//\u2f64\u4e8e\u6bd4\u8f83\u6b21\u5bf9\u8c61\u548c\u6307\u5b9a\u5bf9\u8c61\u7684\u987a\u5e8f\uff0co\u4e3a\u8981\u6bd4\u8f83\u7684\u5bf9\u8c61\n//\u8fd4\u56deint\u7c7b\u578b\n//\u5927\u4e8e0, \u8868\u793athis\u5927\u4e8e\u4f20\u8fdb\u6765\u7684\u5bf9\u8c61o ,\u5219\u5f80\u540e\u6392\uff0c\u5373\u5347\u5e8f\n//\u7b49\u4e8e0\uff0c\u8868\u793athis\u7b49\u4e8e\u4f20\u8fdb\u6765\u7684\u5bf9\u8c61o\n//\u5c0f\u4e8e0\uff0c\u8868\u793athis\u5c0f\u4e8e\u4f20\u8fdb\u6765\u7684\u5bf9\u8c61o\n\n//\u9700\u6c42\uff1a\u6839\u636e\u5b66\u751f\u7684\uf98e\u9f84\u8fdb\ufa08\u6392\u5e8f\npublic class TestCom {\n    public static void main(String [] args) {\n        Set<Student> studentSet = new TreeSet<>();\n        studentSet.add(new Student("jack",32));\n        studentSet.add(new Student("tom",22));\n        studentSet.add(new Student("mary",35));\n        studentSet.add(new Student("tim",11));\n        studentSet.add(new Student("tony",49));\n        studentSet.add(new Student("dd",30));\n        System.out.println(studentSet);\n     }\n}\n class Student implements Comparable{\n    private int age;\n    private String name;\n    public void setAge(int age) {\n \n \n \n \n \n        this.age = age;\n    }\n    public int getAge() {\n        return age;\n    }\n    public void setName(String name) {\n        this.name = name;\n    }\n    public String getName() {\n        return name;\n    }\n    public Student(String name,int age){\n        this.name = name;\n        this.age = age;\n    }\n    @Override\n    public String toString() {\n        return "Student{" +\n                "age=" + age +\n                ", name=\'" + name + \'\\\'\' +\n                \'}\';\n    }\n    @Override\n    public int compareTo(Object o) {\n        if(o instanceof Student){\n            Student student = (Student)o;\n            return this.age - student.age;\n        }\n        //\u8fd4\u56de\u7684\u6570\u662f0\u4ee3\u8868\u4e24\u4e2a\u5bf9\u8c61\u76f8\u540c\n        return 0;\n    }\n}\n'})})]})}function u(n={}){const{wrapper:t}={...(0,s.R)(),...n.components};return t?(0,a.jsx)(t,{...n,children:(0,a.jsx)(c,{...n})}):c(n)}},28453:(n,t,e)=>{e.d(t,{R:()=>l,x:()=>o});var i=e(96540);const a={},s=i.createContext(a);function l(n){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function o(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:l(n.components),i.createElement(s.Provider,{value:t},n.children)}},9757:n=>{n.exports=JSON.parse('{"permalink":"/blog/product-collections","editUrl":"https://github.com/Jachen99/Jachen99.github.io/tree/V3.0.0/blog/2018/07-16-\u96c6\u5408\u5de5\u5177\u7c7bCollections.md","source":"@site/blog/2018/07-16-\u96c6\u5408\u5de5\u5177\u7c7bCollections.md","title":"\u96c6\u5408\u5de5\u5177\u7c7bCollections","description":"\u4ecb\u7ecd\u4e86\u4e0d\u80fd\u88ab\u5b9e\u4f8b\u5316\u7684\u96c6\u5408\u5de5\u5177\u7c7bCollections","date":"2018-07-16T00:00:00.000Z","tags":[],"readingTime":4.32,"hasTruncateMarker":false,"authors":[{"name":"\u5b63\u51a0\u81e3","title":"\u540e\u7aef\u7814\u53d1\u5de5\u7a0b\u5e08","url":"https://github.com/jachen99","page":{"permalink":"/blog/authors/jiguanchen"},"socials":{"github":"https://github.com/jachen99"},"imageURL":"https://github.com/jachen99.png","key":"jiguanchen"}],"frontMatter":{"slug":"product-collections","title":"\u96c6\u5408\u5de5\u5177\u7c7bCollections","authors":["jiguanchen"]},"unlisted":false,"prevItem":{"title":"\u8fed\u4ee3\u5668Iterator","permalink":"/blog/product-iterator"},"nextItem":{"title":"\u96c6\u5408Map","permalink":"/blog/product-map"}}')}}]);