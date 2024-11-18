"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[6126],{33845:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>n,toc:()=>c});var n=r(96537),l=r(74848),s=r(28453);const a={slug:"product-servlet",title:"Servlet",authors:["jiguanchen"]},i=void 0,o={authorsImageUrls:[void 0]},c=[{value:"1\u3001\u4ec0\u4e48\u662fServlet",id:"1\u4ec0\u4e48\u662fservlet",level:3},{value:"2\u3001\u91cd\u5199doGet\u548cdoPost\u65b9\u6cd5",id:"2\u91cd\u5199doget\u548cdopost\u65b9\u6cd5",level:3},{value:"3\u3001\u8bb2\u89e3Servlet\u7684\u751f\u547d\u5468\u671f\uff08\u9762\u8bd5\uff09",id:"3\u8bb2\u89e3servlet\u7684\u751f\u547d\u5468\u671f\u9762\u8bd5",level:3},{value:"4\u3001\u65b0\u7248Servlet3.0~5.0\u548c\u65e7\u7248\u914d\u7f6e",id:"4\u65b0\u7248servlet3050\u548c\u65e7\u7248\u914d\u7f6e",level:3}];function v(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:(0,l.jsx)(t.em,{children:"\u4ecb\u7ecd\u4e86\u4ec0\u4e48\u662fServlet\u3001Servlet\u5e38\u7528\u65b9\u6cd5\u3001\u751f\u547d\u5468\u671f\u7b49"})}),"\n",(0,l.jsxs)(t.p,{children:["\u8fd9\u662f\u4e00\u4e2aJavaWeb Servlet\u6587\u6863:",(0,l.jsx)(t.a,{href:"https://tomcat.apache.org/tomcat-9.0-doc/servletapi/index.html",children:"https://tomcat.apache.org/tomcat-9.0-doc/servletapi/index.html"})]}),"\n",(0,l.jsx)(t.h3,{id:"1\u4ec0\u4e48\u662fservlet",children:"1\u3001\u4ec0\u4e48\u662fServlet"}),"\n",(0,l.jsx)(t.p,{children:"**\u7b80\u4ecb\uff1a**\u662fJavaServlet\u7684\u7b80\u79f0\uff0c\u7528Java\u7f16\u5199\u7684\u8fd0\ufa08\u5728Web\u670d\u52a1\ufa38\u6216\u5e94\u7528\u670d\u52a1\ufa38\u4e0a\u7684\u7a0b\u5e8f,\u5177\u6709\u72ec\u7acb\u4e8e\u5e73\u53f0\u548c\u534f\u8bae\u7684\u7279\u6027, \u4e3b\u8981\u529f\u80fd\u5728\u4e8e\u4ea4\u4e92\u5f0f\u5730\u6d4f\u89c8\u548c\u751f\u6210\u52a8\u6001Web\u5185\u5bb9\r\n**\u4f5c\u7528\uff1a**\u63a5\u6536\u7528\u6237\u901a\u8fc7\u6d4f\u89c8\ufa38\u4f20\u6765\u7684\u8868\u5355\u6570\u636e\uff0c\u6216\u8005\u8bfb\u53d6\u6570\u636e\u5e93\u4fe1\u606f\u8fd4\u56de\u7ed9\u6d4f\u89c8\ufa38\u67e5\u770b\uff0c\u521b\u5efa\u52a8\u6001\u7f51\u9875\r\n**\u63a5\u53e3\uf937\u5f84\uff1a**package javax.servlet\r\n\u6709\u4e24\u4e2a\u5e38\u89c1\u7684\u2f26\u5b50\u7c7b\uff1aHttpServlet\u3001GenericServlet"}),"\n",(0,l.jsx)(t.h3,{id:"2\u91cd\u5199doget\u548cdopost\u65b9\u6cd5",children:"2\u3001\u91cd\u5199doGet\u548cdoPost\u65b9\u6cd5"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"doGet\u65b9\u6cd5"}),"\r\n",(0,l.jsx)(t.strong,{children:"doPost\u65b9\u6cd5"})]}),"\n",(0,l.jsx)(t.h3,{id:"3\u8bb2\u89e3servlet\u7684\u751f\u547d\u5468\u671f\u9762\u8bd5",children:"3\u3001\u8bb2\u89e3Servlet\u7684\u751f\u547d\u5468\u671f\uff08\u9762\u8bd5\uff09"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-java",children:"\u5b9e\u4f8b\u5316->\u4f7f\u7528\u6784\u9020\u65b9\u6cd5\u521b\u5efa\u5bf9\u8c61\r\n\r\n\u521d\u59cb\u5316->\u6267\u884cinit\u65b9\u6cd5\uff1aServlet \u7684\u751f\u547d\u671f\u4e2d\uff0c\u4ec5\u6267\ufa08\u4e00\u6b21 init() \u65b9\u6cd5\uff0c\u5b83\u662f\u5728\u670d\u52a1\u5668\u88c5\u2f0aServlet \u65f6\u6267\u884c\u7684,\u5373\u7b2c\u4e00\u6b21\u8bbf\u95ee\u8fd9\u4e2aServlet\u624d\u6267\ufa08\r\n\r\n\u670d\u52a1->\u6267\ufa08service\u65b9\u6cd5\uff0cservice()\u65b9\u6cd5\u662f Servlet\u7684\u6838\u5fc3\u3002\u6bcf\u5f53\u4e00\u4e2a\u5ba2\u6237\u8bf7\u6c42\u4e00\u4e2aHttpServlet \u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u7684service()\u65b9\u6cd5\u5c31\u8981\u88ab\u8c03\u7528\r\n\r\n\u9500\u6bc1-> \u6267\ufa08destroy\u65b9\u6cd5,destroy() \u65b9\u6cd5\u4ec5\u6267\ufa08\u4e00\u6b21\uff0c\u5373\u5728\u670d\u52a1\ufa38\u505c\u6b62\u4e14\u5378\u88c5 Servlet \u65f6\u6267\ufa08\u8be5\u65b9\u6cd5\r\n\r\npublic interface Servlet {\r\n   void init(ServletConfig var1) throws ServletException;\r\n   ServletConfig getServletConfig();\r\n   void service(ServletRequest var1, ServletResponse var2) throws \r\nServletException, IOException;\r\n   String getServletInfo();\r\n    void destroy();\r\n}\r\n\r\nHttpServlet\uf9e9\u9762\u5b9e\u73b0\uf9baservice\u65b9\u6cd5\uff0c\uf9e9\u9762\u4f1a\u6839\u636e\uf967\u540c\u7684http method\u8c03\u7528\u4e0d\u540c\u7684\u65b9\u6cd5\uff0c\u6240\u4ee5\u6211\u4eec\u81ea\u5b9a\u4e49servlet\u53ea\u8981\u91cd\u5199\u5bf9\u5e94\u7684doXXX\u65b9\u6cd5\u5373\u53ef\n"})}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"\u67e5\u770b\u7ee7\u627f\u548c\u5b9e\u73b0\u5173\u7cfb XXXServlet->HttpServlet->GenericServlet->implements Servle"})}),"\n",(0,l.jsx)(t.h3,{id:"4\u65b0\u7248servlet3050\u548c\u65e7\u7248\u914d\u7f6e",children:"4\u3001\u65b0\u7248Servlet3.0~5.0\u548c\u65e7\u7248\u914d\u7f6e"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"\u65e7\u7248Servlet\uff0c\u5728xml\uf9e9\u9762\u914d\u7f6e\u7c7b\u76ee\u548c\uf937\u5f84\uff0c\u6bd4\u8f83\uf967\u65b9\uf965"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-java",children:"//XML\u914d\u7f6e\r\n<servlet>\r\n        <servlet-name>userServlet</servlet-name>\r\n        <servlet-class>net.xdclass.web.UserServlet</servlet-class>\r\n    </servlet>\r\n    \r\n    <servlet-mapping>\r\n        <servlet-name>userServlet</servlet-name>\r\n        <url-pattern>/userServlet</url-pattern>\r\n    </servlet-mapping>\n"})}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"\u65b0\u7248Servelt\uff0c\u4e5f\u5c31\u662f3.0\u4e4b\u540e\uff0c\u652f\u6301\u6ce8\u89e3\u7684\u65b9\u5f0f"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-java",children:'@WebServlet(name = "userServlet",urlPatterns = {"/user1","/user2","/test"})\r\npublic class UserServlet extends HttpServlet {\r\n     @Override\r\n    protected void doGet(HttpServletRequest req, HttpServletResponse resp) \r\nthrows ServletException, IOException {\r\n        System.out.println("doGet");\r\n        //\u5b9e\u6218\u54cd\u5e94\u5185\u5bb9\r\n        resp.setContentType("text/html;charset=utf-8");\r\n        PrintWriter printWriter = resp.getWriter();\r\n        printWriter.write("<div> doGet jiguanchen.space \u4f60\u597d\uff01 \r\n</div>");\r\n    }\r\n}\r\n       \r\n                          \r\n//\u914d\u7f6e\u9879\r\n//servlet\u540d\u79f0\uff0c\u82e5\uf967\u6307\u5b9a\uff0c\u5219\u4e3aServlet\u7684\u5b8c\u6574\u7c7b\u540d\r\n  String name() default "";\r\n//\uf937\u5f84\u6620\u5c04,\u914d\u7f6e\u591a\u4e2a\uff0c\u9700\u8981/\u5f00\u5934\r\n  String[] value() default {};\r\n//\uf937\u5f84\u6620\u5c04,\u2f40\u6301\u914d\u7f6e\u591a\u4e2a\uff0c\u9700\u8981/\u5f00\u5934\r\n  String[] urlPatterns() default {};\r\n //\u6807\u8bb0\u5bb9\ufa38\u662f\u5426\u5728\u542f\u52a8\u5e94\u7528\u65f6\u5c31\u52a0\u8f7dServlet\uff0c\u9ed8\u8ba4\u6216\u6570\u503c\u4e3a\u8d1f\u6570\u65f6\u8868\u793a\u7b2c\u4e00\u6b21\u8bf7\u6c42Servlet\u65f6\u518d\u52a0\u8f7d\uff1b0\u6216\u6b63\u6570\u8868\u793a\u542f\u52a8\u5e94\u7528\u5c31\u52a0\u8f7d\r\n  int loadOnStartup() default -1;\r\n //\u914d\u7f6e\u521d\u59cb\u53c2\u6570\r\n  WebInitParam[] initParams() default {};\r\n  //\u662f\u5426\u652f\u6301\u5f02\u6b65\u64cd\u4f5c\u6a21\u5f0f\r\n  boolean asyncSupported() default false;\n'})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(v,{...e})}):v(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>i});var n=r(96540);const l={},s=n.createContext(l);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),n.createElement(s.Provider,{value:t},e.children)}},96537:e=>{e.exports=JSON.parse('{"permalink":"/blog/product-servlet","editUrl":"https://github.com/Jachen99/Jachen99.github.io/tree/V3.0.0/blog/2018/12-10-Servlet.md","source":"@site/blog/2018/12-10-Servlet.md","title":"Servlet","description":"\u4ecb\u7ecd\u4e86\u4ec0\u4e48\u662fServlet\u3001Servlet\u5e38\u7528\u65b9\u6cd5\u3001\u751f\u547d\u5468\u671f\u7b49","date":"2018-12-10T00:00:00.000Z","tags":[],"readingTime":3.145,"hasTruncateMarker":false,"authors":[{"name":"\u5b63\u51a0\u81e3","title":"\u540e\u7aef\u7814\u53d1\u5de5\u7a0b\u5e08","url":"https://github.com/jachen99","page":{"permalink":"/blog/authors/jiguanchen"},"socials":{"github":"https://github.com/jachen99"},"imageURL":"https://github.com/jachen99.png","key":"jiguanchen"}],"frontMatter":{"slug":"product-servlet","title":"Servlet","authors":["jiguanchen"]},"unlisted":false,"prevItem":{"title":"HTTP\u7684content-type\u5a92\u4f53\u7c7b\u578b","permalink":"/blog/product-http-content-type"},"nextItem":{"title":"\u7ebf\u7a0b\u57fa\u7840","permalink":"/blog/product-manager-guide"}}')}}]);