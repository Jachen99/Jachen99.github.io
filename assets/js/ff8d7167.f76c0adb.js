"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[9994],{7386:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>A,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>o});var t=r(1179),a=r(4848),l=r(8453);const i={slug:"talk-about-equals-method",title:"\u6d45\u8c08equals\u65b9\u6cd5",authors:["jiguanchen"]},s=void 0,A={authorsImageUrls:[void 0]},o=[{value:"1 \u3001Object\u7c7b\u4e2d",id:"1-object\u7c7b\u4e2d",level:2},{value:"2\u3001String\u7c7b\u4e2d",id:"2string\u7c7b\u4e2d",level:2},{value:"3\u3001Arrays\u7c7b\u4e2d",id:"3arrays\u7c7b\u4e2d",level:2},{value:"4\u3001Collection\u7c7b",id:"4collection\u7c7b",level:2},{value:"5\u3001Set\u7c7b\uff08HashSet\u3001LinkedHashSet\u3001TreeSet...\uff09",id:"5set\u7c7bhashsetlinkedhashsettreeset",level:2},{value:"6\u3001List\u7c7b\uff08ArrayList\u3001LinkedList\u3001Vector\u3001Stack...\uff09",id:"6list\u7c7barraylistlinkedlistvectorstack",level:2},{value:"7\u3001Map\u7c7b\uff08Hashtable\u3001HashMap\u3001LinkedHashMap\u3001TreeMap...\uff09",id:"7map\u7c7bhashtablehashmaplinkedhashmaptreemap",level:2},{value:"8\u3001Number\u7c7b\u4ee5Integer\u4e3a\u4f8b",id:"8number\u7c7b\u4ee5integer\u4e3a\u4f8b",level:2}];function c(e){const n={code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["\u200b\t\t",(0,a.jsx)(n.em,{children:"equals\u662fJava\u4e2d\u975e\u5e38\u5e38\u89c1\u7684\u65b9\u6cd5\uff0cequals\u4e0d\u53ea\u662f\u5b57\u7b26\u4e32\u533a\u522b\u4e8e==\u7684\u4e00\u4e2a\u6bd4\u8f83\u7684\u65b9\u6cd5\uff0c\u7ee7\u627fObject\u7684\u7c7b\u90fd\u53ef\u4ee5\u91cd\u5199equals\u65b9\u6cd5\uff0c\u56e0\u4e3a\u7c7b\u5f88\u591a\uff0c\u6709\u65f6\u5019\u4f1a\u8bb0\u5f97\u5f88\u4e71\uff0c\u6240\u4ee5\u8fd9\u91cc\u603b\u7ed3\u4e00\u4e0b\u548c\u5b83\u76f8\u5173\u7684\u4e00\u4e9b\u77e5\u8bc6\u70b9\u3002"})]}),"\n",(0,a.jsx)(n.p,{children:"\u8bdd\u4e0d\u591a\u8bf4\uff0c\u4e0a\u6e90\u7801\uff0c\u4ee5\u4e0b\u57fa\u4e8eJDK1.8\u6587\u6863\u603b\u7ed3"}),"\n",(0,a.jsx)(n.h2,{id:"1-object\u7c7b\u4e2d",children:"1 \u3001Object\u7c7b\u4e2d"}),"\n",(0,a.jsx)(n.p,{children:'Indicates whether some other object is "equal to" this one. \u6307\u793a\u5176\u4ed6\u5bf9\u8c61\u662f\u5426\u201c\u7b49\u4e8e\u201d\u6b64\u5bf9\u8c61\u3002'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public boolean equals(Object obj) {\r\n      return (this == obj);\r\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u91cd\u5199equals\u65b9\u6cd5"})}),"\n",(0,a.jsx)(n.p,{children:"\u5b50\u7c7b\u91cd\u5199equals\u65b9\u6cd5\u65f6\uff0c\u8981\u9075\u5faa\u5982\u4e0b\u89c4\u5219\uff1a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u81ea\u53cd\u6027\uff1a\u5bf9\u4e8e\u4efb\u4f55\u975e\u7a7a\u5f15\u7528\u503c x\uff0cx.equals(x) \u90fd\u5e94\u8fd4\u56de true\u3002"}),"\n",(0,a.jsx)(n.li,{children:"\u5bf9\u79f0\u6027\uff1a\u5bf9\u4e8e\u4efb\u4f55\u975e\u7a7a\u5f15\u7528\u503c x \u548c y\uff0c\u5f53\u4e14\u4ec5\u5f53 y.equals(x) \u8fd4\u56de true \u65f6\uff0cx.equals(y) \u624d\u5e94\u8fd4\u56de true\u3002"}),"\n",(0,a.jsx)(n.li,{children:"\u4f20\u9012\u6027\uff1a\u5bf9\u4e8e\u4efb\u4f55\u975e\u7a7a\u5f15\u7528\u503c x\u3001y \u548c z\uff0c\u5982\u679c x.equals(y) \u8fd4\u56de true\uff0c\u5e76\u4e14 y.equals(z) \u8fd4\u56de true\uff0c\u90a3\u4e48 x.equals(z) \u5e94\u8fd4\u56de true\u3002"}),"\n",(0,a.jsx)(n.li,{children:"\u4e00\u81f4\u6027\uff1a\u5bf9\u4e8e\u4efb\u4f55\u975e\u7a7a\u5f15\u7528\u503c x \u548c y\uff0c\u591a\u6b21\u8c03\u7528 x.equals(y) \u59cb\u7ec8\u8fd4\u56de true \u6216\u59cb\u7ec8\u8fd4\u56de false\uff0c\u524d\u63d0\u662f\u5bf9\u8c61\u4e0a equals \u6bd4\u8f83\u4e2d\u6240\u7528\u7684\u4fe1\u606f\u6ca1\u6709\u88ab\u4fee\u6539\u3002"}),"\n",(0,a.jsx)(n.li,{children:"\u5bf9\u4e8e\u4efb\u4f55\u975e\u7a7a\u5f15\u7528\u503c x\uff0cx.equals(null) \u90fd\u5e94\u8fd4\u56de false\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u200b\t\t\u5f53\u6b64\u65b9\u6cd5\u88ab\u91cd\u5199\u65f6\uff0c\u901a\u5e38\u6709\u5fc5\u8981\u91cd\u5199 hashCode \u65b9\u6cd5\uff0c\u4ee5\u7ef4\u62a4 hashCode \u65b9\u6cd5\u7684\u5e38\u89c4\u534f\u5b9a\uff0c\u8be5\u534f\u5b9a\u58f0\u660e\u76f8\u7b49\u5bf9\u8c61\u5fc5\u987b\u5177\u6709\u76f8\u7b49\u7684\u54c8\u5e0c\u7801\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"2string\u7c7b\u4e2d",children:"2\u3001String\u7c7b\u4e2d"}),"\n",(0,a.jsx)(n.p,{children:"Compares this string to the specified object. \u5c06\u6b64\u5b57\u7b26\u4e32\u4e0e\u6307\u5b9a\u5bf9\u8c61\u8fdb\u884c\u6bd4\u8f83\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public boolean equals(Object anObject) {\r\n    if (this == anObject) {\r\n        return true;\r\n    }\r\n    if (anObject instanceof String) {\r\n        String anotherString = (String)anObject;\r\n        int n = value.length;\r\n        if (n == anotherString.value.length) {\r\n            char v1[] = value;\r\n            char v2[] = anotherString.value;\r\n            int i = 0;\r\n            while (n-- != 0) {\r\n                if (v1[i] != v2[i])\r\n                    return false;\r\n                i++;\r\n            }\r\n            return true;\r\n        }\r\n    }\r\n    return false;\r\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"3arrays\u7c7b\u4e2d",children:"3\u3001Arrays\u7c7b\u4e2d"}),"\n",(0,a.jsxs)(n.p,{children:["Returns ",(0,a.jsx)("tt",{children:"true"})," if the two specified arrays of longs are ",(0,a.jsx)("i",{children:"equal"})," to one another.\r\n\u5982\u679c\u4e24\u4e2a\u6570\u7ec4\u4ee5\u76f8\u540c\u7684\u987a\u5e8f\u5305\u542b\u76f8\u540c\u7684\u5143\u7d20\uff0c\u90a3\u4e48\u5b83\u4eec\u5c31\u662f\u76f8\u7b49\u7684\u3002\u53e6\u5916\uff0c\u5982\u679c\u4e24\u4e2a\u6570\u7ec4\u5f15\u7528\u90fd\u4e3a\u7a7a\uff0c\u5219\u8ba4\u4e3a\u4e24\u4e2a\u6570\u7ec4\u5f15\u7528\u76f8\u7b49\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public static boolean equals(long[] a, long[] a2) {\r\n    if (a==a2)\r\n        return true;\r\n    if (a==null || a2==null)\r\n        return false;\r\n\r\n    int length = a.length;\r\n    if (a2.length != length)\r\n        return false;\r\n\r\n    for (int i=0; i<length; i++)\r\n        if (a[i] != a2[i])\r\n            return false;\r\n\r\n    return true;\r\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"4collection\u7c7b",children:"4\u3001Collection\u7c7b"}),"\n",(0,a.jsx)(n.p,{children:"Compares the specified object with this collection for equality.  \u5c06\u6307\u5b9a\u7684\u5bf9\u8c61\u4e0e\u6b64\u96c6\u5408\u8fdb\u884c\u6bd4\u8f83\u4ee5\u83b7\u5f97\u76f8\u7b49\u6027\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"boolean equals(Object o);\n"})}),"\n",(0,a.jsx)(n.h2,{id:"5set\u7c7bhashsetlinkedhashsettreeset",children:"5\u3001Set\u7c7b\uff08HashSet\u3001LinkedHashSet\u3001TreeSet...\uff09"}),"\n",(0,a.jsx)(n.p,{children:"Compares the specified object with this set for equality.   \u6bd4\u8f83\u6307\u5b9a\u5bf9\u8c61\u4e0e\u6b64\u96c6\u5408\u662f\u5426\u76f8\u7b49\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public boolean equals(Object o) {\r\n        if (o == this)\r\n            return true;\r\n\r\n        if (!(o instanceof Set))\r\n            return false;\r\n        Collection<?> c = (Collection<?>) o;\r\n        if (c.size() != size())\r\n            return false;\r\n        try {\r\n            return containsAll(c);\r\n        } catch (ClassCastException unused)   {\r\n            return false;\r\n        } catch (NullPointerException unused) {\r\n            return false;\r\n        }\r\n    }\r\npublic int hashCode() {\r\n        int h = 0;\r\n        Iterator<E> i = iterator();\r\n        while (i.hasNext()) {\r\n            E obj = i.next();\r\n            if (obj != null)\r\n                h += obj.hashCode();\r\n        }\r\n        return h;\r\n    }\n"})}),"\n",(0,a.jsx)(n.h2,{id:"6list\u7c7barraylistlinkedlistvectorstack",children:"6\u3001List\u7c7b\uff08ArrayList\u3001LinkedList\u3001Vector\u3001Stack...\uff09"}),"\n",(0,a.jsx)(n.p,{children:"Compares the specified object with this list for equality.\u6bd4\u8f83\u6307\u5b9a\u5bf9\u8c61\u4e0e\u6b64\u5217\u8868\u662f\u5426\u76f8\u7b49\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public boolean equals(Object o) {\r\n    if (o == this)\r\n        return true;\r\n    if (!(o instanceof List))\r\n        return false;\r\n\r\n    ListIterator<E> e1 = listIterator();\r\n    ListIterator<?> e2 = ((List<?>) o).listIterator();\r\n    while (e1.hasNext() && e2.hasNext()) {\r\n        E o1 = e1.next();\r\n        Object o2 = e2.next();\r\n        if (!(o1==null ? o2==null : o1.equals(o2)))\r\n            return false;\r\n    }\r\n    return !(e1.hasNext() || e2.hasNext());\r\n}\r\n//Returns the hash code value for this list.\r\npublic int hashCode() {\r\n        int hashCode = 1;\r\n        for (E e : this)\r\n            hashCode = 31*hashCode + (e==null ? 0 : e.hashCode());\r\n        return hashCode;\r\n    }\r\n//Vector\r\npublic synchronized boolean equals(Object o) {\r\n        return super.equals(o);\r\n    }\r\npublic synchronized int hashCode() {\r\n        return super.hashCode();\r\n    }\r\n//Stack\r\nclass Stack<E> extends Vector<E>{}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"7map\u7c7bhashtablehashmaplinkedhashmaptreemap",children:"7\u3001Map\u7c7b\uff08Hashtable\u3001HashMap\u3001LinkedHashMap\u3001TreeMap...\uff09"}),"\n",(0,a.jsx)(n.p,{children:"Compares the specified object with this map for equality. \u6bd4\u8f83\u6307\u5b9a\u5bf9\u8c61\u4e0e\u6b64\u6620\u5c04\u662f\u5426\u76f8\u7b49\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public boolean equals(Object o) {\r\n    if (o == this)\r\n        return true;\r\n\r\n    if (!(o instanceof Map))\r\n        return false;\r\n    Map<?,?> m = (Map<?,?>) o;\r\n    if (m.size() != size())\r\n        return false;\r\n\r\n    try {\r\n        Iterator<Entry<K,V>> i = entrySet().iterator();\r\n        while (i.hasNext()) {\r\n            Entry<K,V> e = i.next();\r\n            K key = e.getKey();\r\n            V value = e.getValue();\r\n            if (value == null) {\r\n                if (!(m.get(key)==null && m.containsKey(key)))\r\n                    return false;\r\n            } else {\r\n                if (!value.equals(m.get(key)))\r\n                    return false;\r\n            }\r\n        }\r\n    } catch (ClassCastException unused) {\r\n        return false;\r\n    } catch (NullPointerException unused) {\r\n        return false;\r\n    }\r\n\r\n    return true;\r\n}\r\npublic int hashCode() {\r\n        int h = 0;\r\n        Iterator<Entry<K,V>> i = entrySet().iterator();\r\n        while (i.hasNext())\r\n            h += i.next().hashCode();\r\n        return h;\r\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"8number\u7c7b\u4ee5integer\u4e3a\u4f8b",children:"8\u3001Number\u7c7b\u4ee5Integer\u4e3a\u4f8b"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"image-20221019090440643",src:r(2915).A+"",width:"1416",height:"58"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public boolean equals(Object obj) {\r\n    return (this == obj);\r\n}\r\n// Integer\r\npublic boolean equals(Object obj) {\r\n        if (obj instanceof Integer) {\r\n            return value == ((Integer)obj).intValue();\r\n        }\r\n        return false;\r\n    }\r\n /**\r\n     * The value of the {@code Integer}.\r\n     *\r\n     * @serial\r\n     */\r\n    private final int value;\r\n\r\n    /**\r\n     * Constructs a newly allocated {@code Integer} object that\r\n     * represents the specified {@code int} value.\r\n     *\r\n     * @param   value   the value to be represented by the\r\n     *                  {@code Integer} object.\r\n     */\r\n    public Integer(int value) {\r\n        this.value = value;\r\n    }\r\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"9\u3001File\u7c7b\u4e2d"}),"\n",(0,a.jsx)(n.p,{children:"Tests this abstract pathname for equality with the given object. \u6d4b\u8bd5\u6b64\u62bd\u8c61\u8def\u5f84\u540d\u662f\u5426\u4e0e\u7ed9\u5b9a\u5bf9\u8c61\u76f8\u7b49\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public boolean equals(Object obj) {\r\n    if ((obj != null) && (obj instanceof File)) {\r\n        return compareTo((File)obj) == 0;\r\n    }\r\n    return false;\r\n}\r\n// Compares two abstract pathnames lexicographically.\r\npublic int compareTo(File pathname) {\r\n        return fs.compare(this, pathname);\r\n    }\r\n/**\r\n* The FileSystem object representing the platform's local file system.\r\n*/\r\n private static final FileSystem fs = DefaultFileSystem.getFileSystem();\r\n/**\r\n* Compare two abstract pathnames lexicographically.\r\n*/\r\npublic abstract int compare(File f1, File f2);\n"})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},2915:(e,n,r)=>{r.d(n,{A:()=>t});const t="data:image/png;base64,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"},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>s});var t=r(6540);const a={},l=t.createContext(a);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(l.Provider,{value:n},e.children)}},1179:e=>{e.exports=JSON.parse('{"permalink":"/blog/talk-about-equals-method","editUrl":"https://github.com/Jachen99/Jachen99.github.io/tree/V2.2.1/blog/2022/01-26-\u6d45\u8c08equals\u65b9\u6cd5.md","source":"@site/blog/2022/01-26-\u6d45\u8c08equals\u65b9\u6cd5.md","title":"\u6d45\u8c08equals\u65b9\u6cd5","description":"\u200b\\t\\tequals\u662fJava\u4e2d\u975e\u5e38\u5e38\u89c1\u7684\u65b9\u6cd5\uff0cequals\u4e0d\u53ea\u662f\u5b57\u7b26\u4e32\u533a\u522b\u4e8e==\u7684\u4e00\u4e2a\u6bd4\u8f83\u7684\u65b9\u6cd5\uff0c\u7ee7\u627fObject\u7684\u7c7b\u90fd\u53ef\u4ee5\u91cd\u5199equals\u65b9\u6cd5\uff0c\u56e0\u4e3a\u7c7b\u5f88\u591a\uff0c\u6709\u65f6\u5019\u4f1a\u8bb0\u5f97\u5f88\u4e71\uff0c\u6240\u4ee5\u8fd9\u91cc\u603b\u7ed3\u4e00\u4e0b\u548c\u5b83\u76f8\u5173\u7684\u4e00\u4e9b\u77e5\u8bc6\u70b9\u3002","date":"2022-01-26T00:00:00.000Z","tags":[],"readingTime":5.87,"hasTruncateMarker":false,"authors":[{"name":"\u5b63\u51a0\u81e3","title":"\u540e\u7aef\u7814\u53d1\u5de5\u7a0b\u5e08","url":"https://github.com/jachen99","page":{"permalink":"/blog/authors/jiguanchen"},"socials":{"github":"https://github.com/jachen99"},"imageURL":"https://github.com/jachen99.png","key":"jiguanchen"}],"frontMatter":{"slug":"talk-about-equals-method","title":"\u6d45\u8c08equals\u65b9\u6cd5","authors":["jiguanchen"]},"unlisted":false,"prevItem":{"title":"\u6d45\u8c08https\u975e\u5bf9\u79f0\u52a0\u5bc6","permalink":"/blog/talk-https"},"nextItem":{"title":"\u60b2\u89c2\u9501\u4e50\u89c2\u9501\u5c0f\u7ed3","permalink":"/blog/talk-about-lock"}}')}}]);