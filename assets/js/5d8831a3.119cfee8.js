"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[5884],{3630:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>o,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var l=s(804),i=s(4848),r=s(8453);const t={slug:"mysql-CachesBuffers-reason",title:"\u6df1\u5165\u63a2\u7a76mysql8.x\u53bb\u6389CachesBuffers\u539f\u56e0",authors:["jiguanchen"],tags:["mysql"]},c=void 0,h={authorsImageUrls:[void 0]},a=[{value:"\u5b98\u65b9\u63cf\u8ff0",id:"\u5b98\u65b9\u63cf\u8ff0",level:2},{value:"\u63a2\u7a76\u53bb\u6389\u67e5\u8be2\u7f13\u5b58\u7684\u539f\u56e0",id:"\u63a2\u7a76\u53bb\u6389\u67e5\u8be2\u7f13\u5b58\u7684\u539f\u56e0",level:2},{value:"\u7ba1\u7406\u7b56\u7565\u5c42\u9762\u7684\u7f3a\u5931",id:"\u7ba1\u7406\u7b56\u7565\u5c42\u9762\u7684\u7f3a\u5931",level:3},{value:"\u5e95\u5c42\u6709\u5b8c\u5584\u7684\u7f13\u5b58\u673a\u5236",id:"\u5e95\u5c42\u6709\u5b8c\u5584\u7684\u7f13\u5b58\u673a\u5236",level:3},{value:"\u67e5\u8be2\u7f13\u5b58\u5bb9\u91cf\u5c0f\uff0c\u5b58\u5728\u74f6\u9888\uff0c\u4e14\u547d\u4e2d\u7387\u4e5f\u5f88\u4f4e",id:"\u67e5\u8be2\u7f13\u5b58\u5bb9\u91cf\u5c0f\u5b58\u5728\u74f6\u9888\u4e14\u547d\u4e2d\u7387\u4e5f\u5f88\u4f4e",level:3},{value:"\u66ff\u4ee3\u65b9\u6848",id:"\u66ff\u4ee3\u65b9\u6848",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function d(e){const n={em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u80cc\u666f"}),"\uff1a",(0,i.jsx)(n.em,{children:"\u6211\u4eec\u901a\u5e38\u7406\u89e3\u7684mysql5.7\u8fc7\u6e21\u52308.0\u662f\u7531\u4e8e\u67e5\u8be2\u7f13\u5b58\u5f88\u9e21\u808b\uff0c\u8981\u4fdd\u8bc1\u6bcf\u6b21\u67e5\u8be2\u90fd\u662f\u76f8\u540c\u7684sql\u67e5\u8be2\u8bed\u53e5\uff0c\u547d\u4e2d\u7387\u81ea\u7136\u4f1a\u5f88\u4f4e\u3002\u4f46\u662f\u771f\u7684\u53ea\u662f\u56e0\u4e3a\u8fd9\u4e2a\u539f\u56e0\u5417\uff1f\u90a3\u4e48\u6211\u8981\u662f\u5728\u9ad8\u5e76\u53d1\u4e0b\u8bf7\u6c42\u540c\u4e00sql\u7684\u573a\u666f\u8fd9\u663e\u7136\u4e5f\u662f\u5b58\u5728\u7684\uff0c\u90a3\u4e3a\u4ec0\u4e48\u8fd8\u8981\u53bb\u6389\u8fd9\u5c42\u7f13\u5b58\u5462\uff1f"})]}),"\n",(0,i.jsx)(n.h2,{id:"\u5b98\u65b9\u63cf\u8ff0",children:"\u5b98\u65b9\u63cf\u8ff0"}),"\n",(0,i.jsx)(n.p,{children:"MySQL 8.0 \u5728\u7f13\u5b58\u65b9\u9762\u4e5f\u8fdb\u884c\u4e86\u4e00\u4e9b\u6539\u53d8\uff0c\u4ee5\u4e0b\u662f\u4e00\u4e9b\u4e3b\u8981\u53d8\u5316\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u81ea\u9002\u5e94\u54c8\u5e0c\u7d22\u5f15\uff1aMySQL 8.0 \u5f15\u5165\u4e86\u81ea\u9002\u5e94\u54c8\u5e0c\u7d22\u5f15\uff0c\u7528\u4e8e\u5728\u5185\u5b58\u4e2d\u7f13\u5b58\u67e5\u8be2\u7ed3\u679c\u3002\u8fd9\u79cd\u7d22\u5f15\u53ef\u4ee5\u6839\u636e\u67e5\u8be2\u7684\u9891\u7387\u548c\u6a21\u5f0f\u81ea\u52a8\u8c03\u6574\u5927\u5c0f\uff0c\u4ece\u800c\u63d0\u9ad8\u67e5\u8be2\u6027\u80fd\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u6301\u4e45\u5316\u5185\u5b58\u5f15\u64ce\uff1aMySQL 8.0 \u5f15\u5165\u4e86 InnoDB \u6301\u4e45\u5316\u5185\u5b58\u5f15\u64ce\uff0c\u8fd9\u662f\u4e00\u79cd\u5c06\u6570\u636e\u5b58\u50a8\u5728\u5185\u5b58\u4e2d\u7684\u5f15\u64ce\u3002\u4e0e\u4f20\u7edf\u7684\u5185\u5b58\u5f15\u64ce\u4e0d\u540c\uff0c\u6301\u4e45\u5316\u5185\u5b58\u5f15\u64ce\u53ef\u4ee5\u5c06\u6570\u636e\u6301\u4e45\u5316\u5230\u78c1\u76d8\u4e0a\uff0c\u4ee5\u907f\u514d\u6570\u636e\u4e22\u5931\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u66f4\u597d\u7684\u67e5\u8be2\u7f13\u5b58\uff1aMySQL 8.0 \u5f15\u5165\u4e86\u66f4\u597d\u7684\u67e5\u8be2\u7f13\u5b58\u673a\u5236\uff0c\u7528\u4e8e\u7f13\u5b58\u67e5\u8be2\u7ed3\u679c\u3002\u4e0e\u4e4b\u524d\u7684\u7248\u672c\u4e0d\u540c\uff0cMySQL 8.0 \u4e0d\u518d\u4f7f\u7528\u5168\u5c40\u67e5\u8be2\u7f13\u5b58\uff0c\u800c\u662f\u6539\u4e3a\u4f7f\u7528\u57fa\u4e8e\u67e5\u8be2\u8bed\u53e5\u7684\u7f13\u5b58\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u66f4\u597d\u7684\u5185\u5b58\u7ba1\u7406\uff1aMySQL 8.0 \u6539\u8fdb\u4e86\u5185\u5b58\u7ba1\u7406\uff0c\u4f7f\u5f97\u5185\u5b58\u4f7f\u7528\u66f4\u52a0\u9ad8\u6548\u3002\u8fd9\u5305\u62ec\u6539\u8fdb\u4e86\u5185\u5b58\u5206\u914d\u5668\u3001\u63d0\u4f9b\u4e86\u66f4\u597d\u7684\u5185\u5b58\u76d1\u63a7\u548c\u8b66\u544a\u529f\u80fd\u7b49\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5176\u4e2d\u7b2c\u4e09\u70b9\u63d0\u5230\u4e86 MySQL 8.0 \u5f15\u5165\u4e86\u66f4\u597d\u7684\u67e5\u8be2\u7f13\u5b58\u673a\u5236\uff0c\u7528\u4e8e\u7f13\u5b58\u67e5\u8be2\u7ed3\u679c\uff0c\u8fd9\u4e0e\u4e4b\u524d\u7684\u7248\u672c\u4e0d\u540c\uff0cMySQL 8.0 \u4e0d\u518d\u4f7f\u7528\u5168\u5c40\u67e5\u8be2\u7f13\u5b58\uff0c\u800c\u662f\u6539\u4e3a\u4f7f\u7528\u57fa\u4e8e\u67e5\u8be2\u8bed\u53e5\u7684\u7f13\u5b58\u3002\u8fd9\u91cc\u6211\u4eec\u5177\u4f53\u5c55\u5f00\u6765\u770b\u770b\u8fd9\u4e2a\u53d8\u5316\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4e4b\u524d\u7684 MySQL \u7248\u672c\u4e2d\uff0c\u67e5\u8be2\u7f13\u5b58\u662f\u4e00\u79cd\u53ef\u7528\u4e8e\u7f13\u5b58 SELECT \u8bed\u53e5\u7684\u7ed3\u679c\u96c6\u7684\u673a\u5236\u3002\u8fd9\u4e2a\u673a\u5236\u901a\u8fc7\u5728\u5185\u5b58\u4e2d\u7f13\u5b58\u67e5\u8be2\u7ed3\u679c\u96c6\uff0c\u4ee5\u4fbf\u5728\u4ee5\u540e\u6267\u884c\u76f8\u540c\u7684\u67e5\u8be2\u65f6\u53ef\u4ee5\u76f4\u63a5\u4ece\u7f13\u5b58\u4e2d\u8bfb\u53d6\u7ed3\u679c\u96c6\uff0c\u800c\u65e0\u9700\u6267\u884c\u67e5\u8be2\u3002\u8fd9\u79cd\u673a\u5236\u53ef\u4ee5\u5927\u5927\u63d0\u9ad8\u67e5\u8be2\u6027\u80fd\uff0c\u7279\u522b\u662f\u5728\u6709\u5927\u91cf\u91cd\u590d\u67e5\u8be2\u7684\u60c5\u51b5\u4e0b\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u7136\u800c\uff0cMySQL 8.0 \u4e2d\u7684\u67e5\u8be2\u7f13\u5b58\u4e0e\u4e4b\u524d\u7248\u672c\u4e0d\u540c\uff0c\u5b83\u4e0d\u518d\u4f7f\u7528\u5168\u5c40\u67e5\u8be2\u7f13\u5b58\uff0c\u800c\u662f\u6539\u4e3a\u4f7f\u7528\u57fa\u4e8e\u67e5\u8be2\u8bed\u53e5\u7684\u7f13\u5b58\u3002\u5177\u4f53\u6765\u8bf4\uff0c\u6bcf\u4e2a\u67e5\u8be2\u90fd\u4f1a\u88ab\u5355\u72ec\u7f13\u5b58\uff0c\u5e76\u4e14\u53ea\u6709\u76f8\u540c\u7684\u67e5\u8be2\uff08\u5305\u62ec\u67e5\u8be2\u8bed\u53e5\u548c\u53c2\u6570\uff09\u624d\u80fd\u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6\u7ed3\u679c\u96c6\u3002\u8fd9\u79cd\u673a\u5236\u53ef\u4ee5\u907f\u514d\u4e4b\u524d\u7248\u672c\u4e2d\u9047\u5230\u7684\u4e00\u4e9b\u95ee\u9898\uff0c\u6bd4\u5982\u5168\u5c40\u67e5\u8be2\u7f13\u5b58\u9501\u548c\u5185\u5b58\u5206\u914d\u95ee\u9898\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u53e6\u5916\uff0cMySQL 8.0 \u8fd8\u652f\u6301\u5bf9\u67e5\u8be2\u7f13\u5b58\u8fdb\u884c\u66f4\u7ec6\u7c92\u5ea6\u7684\u63a7\u5236\uff0c\u5305\u62ec\u53ef\u4ee5\u5bf9\u67d0\u4e9b\u67e5\u8be2\u7981\u7528\u67e5\u8be2\u7f13\u5b58\uff0c\u53ef\u4ee5\u5728\u67e5\u8be2\u8bed\u53e5\u4e2d\u6307\u5b9a\u67e5\u8be2\u7ed3\u679c\u96c6\u662f\u5426\u9700\u8981\u88ab\u7f13\u5b58\u7b49\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u867d\u7136 MySQL 8.0 \u5f15\u5165\u4e86\u57fa\u4e8e\u67e5\u8be2\u8bed\u53e5\u7684\u7f13\u5b58\u673a\u5236\uff0c\u4f46\u662f\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u67e5\u8be2\u7f13\u5b58\u5e76\u4e0d\u603b\u662f\u5bf9\u6027\u80fd\u6709\u76ca\u3002\u5bf9\u4e8e\u4e00\u4e9b\u67e5\u8be2\u9891\u7387\u4f4e\u3001\u6570\u636e\u66f4\u65b0\u9891\u7e41\u7684\u60c5\u51b5\uff0c\u7f13\u5b58\u53ef\u80fd\u4f1a\u6d6a\u8d39\u5185\u5b58\uff0c\u800c\u4e0d\u662f\u63d0\u9ad8\u6027\u80fd\u3002\u56e0\u6b64\uff0c\u9700\u8981\u6839\u636e\u5177\u4f53\u60c5\u51b5\u6765\u8bc4\u4f30\u662f\u5426\u4f7f\u7528\u67e5\u8be2\u7f13\u5b58\u3002"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"\u63a2\u7a76\u53bb\u6389\u67e5\u8be2\u7f13\u5b58\u7684\u539f\u56e0",children:"\u63a2\u7a76\u53bb\u6389\u67e5\u8be2\u7f13\u5b58\u7684\u539f\u56e0"}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u5148\u6765\u770b\u770bmysql5.7\u670d\u52a1\u7aef\u83b7\u53d6\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684\u57fa\u672c\u6d41\u7a0b\uff0c\u67e5\u8be2\u7f13\u5b58\u662f\u5728\u89e3\u6790\u4e0e\u4f18\u5316\u6a21\u5757\u7684\u5f00\u59cb\u4f4d\u7f6e\uff0c\u4e5f\u5c31\u610f\u5473\u7740\u5b83\u662f\u4ee5\u5168\u5c40\u67e5\u8be2\u7f13\u5b58\u5b58\u5728\u7684\uff0c\u90a3\u4e48\u8fd9\u6837\u6709\u4ec0\u4e48\u5f0a\u7aef\u5462\uff1f\u5b83\u80fd\u5426\u4fdd\u8bc1\u9ad8\u5e76\u53d1\u5199\u7684\u8bfb\u5199\u4e00\u81f4\u5462\uff1f"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20230220191808225",src:s(5999).A+"",width:"1597",height:"1155"})}),"\n",(0,i.jsx)(n.h3,{id:"\u7ba1\u7406\u7b56\u7565\u5c42\u9762\u7684\u7f3a\u5931",children:"\u7ba1\u7406\u7b56\u7565\u5c42\u9762\u7684\u7f3a\u5931"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u9ad8\u5e76\u53d1\u4e0b\u67e5\u8be2\u540c\u4e00\u4e2asql\u8bed\u53e5select *from user where id = 1;\u90a3\u4e48\u5b58\u5728\u67e5\u8be2\u7f13\u5b58\u7684\u786e\u53ef\u4ee5\u63d0\u9ad8\u67e5\u8be2\u7684\u6548\u7387\uff0c\u8fd9\u662f\u6211\u4eec\u666e\u904d\u8ba4\u4e3a\u7684\u6b63\u5e38\u60c5\u51b5\u3002\u4f46\u662f\u5728\u4e0d\u6b63\u5e38\u7684\u60c5\u51b5\u4e0b\u662f\u4f1a\u51fa\u5927\u95ee\u9898\u7684\uff0c\u5982\u679c\u6211\u4eec\u5df2\u7ecf\u5728\u5185\u5b58\u4e2d\u7684\u6570\u636e\u5728\u78c1\u76d8\u4e2d\u8fdb\u884c\u4e86update\u4fee\u6539\uff0c\u6211\u4eec\u5c31\u5fc5\u987b\u8981\u4f7f\u6211\u4eec\u7f13\u5b58\u4e2d\u7684\u6570\u636e\u66f4\u65b0\uff0c\u4fdd\u8bc1\u6570\u636e\u7684\u4e00\u81f4\u6027\uff0c",(0,i.jsx)(n.strong,{children:"\u4f46\u662f\u5728mysql5.7\u4e2d\uff0c\u5bf9\u5185\u5b58\u662f\u6ca1\u6709\u7ba1\u7406\u7b56\u7565\u7684\uff0c\u5185\u5b58\u4e2d\u6570\u636e\u7684\u751f\u6548\u3001\u5931\u6548\u3001\u8fc7\u671f\u90fd\u6ca1\u6709\u8fdb\u884c\u6807\u8bb0"}),"\u3002\u90a3\u4e48\u5982\u679c\u4e0d\u80fd\u4fdd\u8bc1\u7f13\u5b58\u6570\u636e\u7684\u4e00\u81f4\u6027\u5c31\u4f1a\u67e5\u5230\u810f\u6570\u636e\uff0c\u5982\u679c\u6211\u4eec\u662f\u5728\u5bf9\u6570\u636e\u4e00\u81f4\u6027\u8981\u6c42\u4e0d\u9ad8\u7684\u573a\u666f\u4e0b\u7684\u7a0b\u5e8f\uff0c\u90a3\u4e48\u4f7f\u7528\u67e5\u8be2\u7f13\u5b58\u662f\u4e0d\u5f71\u54cd\u7684\uff0c\u603b\u4e0d\u80fd\u6b63\u5728\u73a9\u7740\u6e38\u620f\uff0c\u4f60\u505c\u673a\u6e38\u620f\u5bf9\u6570\u636e\u8fdb\u884c\u66f4\u65b0\uff1f"]}),"\n",(0,i.jsx)(n.h3,{id:"\u5e95\u5c42\u6709\u5b8c\u5584\u7684\u7f13\u5b58\u673a\u5236",children:"\u5e95\u5c42\u6709\u5b8c\u5584\u7684\u7f13\u5b58\u673a\u5236"}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4eec\u7684\u6392\u5e8f\uff0c\u5927\u6570\u636e\u91cf\u7684\u67e5\u627e\uff0corder by \uff0cjoin\u64cd\u4f5c\u7b49\uff0cjoin\u662f\u5de6\u8868\u53bb\u5339\u914d\u53f3\u8868\uff0c\u5de6\u8868\u62ff\u51fa\u4e00\u884c\u6570\u636e\u5230\u53f3\u8868\u4e00\u4e00\u5bf9\u6bd4\uff0c\u8fd9\u4e2a\u6bd4\u7684\u8fc7\u7a0b\u662f\u7edd\u5bf9\u4e0d\u4f1a\u4ece\u78c1\u76d8\u4e2d\u4e00\u4e00\u62ff\u51fa\u6765\u6bd4\u7684\uff0c\u5b83\u5e95\u5c42\u4f1a\u628a\u6570\u636e\u52a0\u8f7d\u5230\u5185\u5b58\u7684\u7f13\u51b2\u533a",(0,i.jsx)(n.strong,{children:"buffer"}),"\u4e2d\uff0c\u518d\u8fdb\u884c\u6bd4\u8f83\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u5904\u7406\u8fde\u63a5\u7684\u74f6\u9888\u4e2d\u5e76\u53d1\u8fde\u63a5\u6570\u4f1a\u6709\u9650\u5236\uff0c\u6bd4\u5982500\u4e2a\u7ebf\u7a0b\uff0c\u867d\u7136\u5b83\u4ece\u7f13\u5b58\u5185\u5b58\u4e2d\u53d6\u5f88\u5feb\uff0c\u4f46\u662f\u5bf9\u4e8eselect\u8bed\u53e5\uff0c\u53ea\u8981\u505a\u597d\u4f18\u5316\uff0c\u6bd4\u5982\u521b\u5efa\u597d\u7d22\u5f15\uff0c\u5728\u78c1\u76d8\u4e2d\u53d6\u4e5f\u662f\u4e0d\u6162\u7684\uff0c\u800c\u4e14mysql\u5e95\u5c42\u7684\u78c1\u76d8\u662f\u6709\u673a\u7684\u7ec4\u5408\u7684\uff0c\u5e76\u4e14\u5728\u9ad8\u9891\u7684\u8bbf\u95ee\u4e2d\uff0c\u5b83\u4e5f\u4f1a\u6709\u8bfbbuffer\uff0c\u751a\u81f3\u8fd8\u5b58\u5728\u5199buffer\uff0c\u5982\u679c\u8bfbbuffer\u4e2d\u7684\u6570\u636e\u6ca1\u6709\u88ab\u4fee\u6539\uff0c\u5b83\u6bcf\u6b21\u4e5f\u662f\u5728\u5185\u5b58\u4e2d\u8bfb\u7684\uff0c\u4e5f\u4e0d\u4f1a\u5728\u78c1\u76d8\u4e2d\u8bfb\uff0c\u6240\u4ee5\u5c31\u6ca1\u5fc5\u8981\u518d\u52a0\u67e5\u8be2\u7f13\u5b58\u4e86\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20230220200748912",src:s(2464).A+"",width:"1115",height:"815"})}),"\n",(0,i.jsx)(n.h3,{id:"\u67e5\u8be2\u7f13\u5b58\u5bb9\u91cf\u5c0f\u5b58\u5728\u74f6\u9888\u4e14\u547d\u4e2d\u7387\u4e5f\u5f88\u4f4e",children:"\u67e5\u8be2\u7f13\u5b58\u5bb9\u91cf\u5c0f\uff0c\u5b58\u5728\u74f6\u9888\uff0c\u4e14\u547d\u4e2d\u7387\u4e5f\u5f88\u4f4e"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u4e2a\u7f13\u5b58\u673a\u5236\u662f\u7531\u4e00\u7cfb\u5217\u5c0f\u7f13\u5b58\u7ec4\u6210\u7684\u3002\u6bd4\u5982\u8868\u7f13\u5b58\uff0c\u8bb0\u5f55\u7f13\u5b58\uff0ckey\u7f13\u5b58\uff0c\u6743\u9650\u7f13\u5b58\u7b49 \u3002\u53ea\u6709\u76f8\u540c\u7684SQL\u8bed\u53e5\u624d\u4f1a\u547d\u4e2d\u67e5\u8be2\u7f13\u5b58\u3002\u4e24\u4e2a\u67e5\u8be2\u8bf7\u6c42\u5728\u4efb\u4f55\u5b57\u7b26\u4e0a\u7684\u4e0d\u540c\uff08\u4f8b\u5982\uff1a\u7a7a\u683c\u3001\u6ce8\u91ca\u3001\u5927\u5c0f\u5199\uff09\uff0c\u90fd\u4f1a\u5bfc\u81f4\u7f13\u5b58\u4e0d\u4f1a\u547d\u4e2d\u3002\u5728\u4e24\u6761\u67e5\u8be2\u4e4b\u95f4 \u6709 INSERT \u3001 UPDATE \u3001 DELETE \u3001 TRUNCATE TABLE \u3001 ALTER TABLE \u3001 DROP TABLE \u6216 DROP DATABASE \u8bed\u53e5\u4e5f\u4f1a\u5bfc\u81f4\u7f13\u5b58\u5931\u6548\uff0c\u6240\u4ee5\u5728MySQL 8\u4e4b\u540e\u5c31\u629b\u5f03\u4e86\u8fd9\u4e2a\u529f\u80fd\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u4e00\u5f20\u8868\u4e2d\u67098000\u4e07\u6761\u6570\u636e\uff0c\u67e5\u8be2\u7f13\u5b58\u663e\u7136\u5c31\u4f1a\u529b\u4e0d\u4ece\u5fc3\uff0c\u5982\u679c\u53ea\u5b58\u70ed\u70b9\u6570\u636e\u5462\uff1f\u5373\u4fbf\u662f\u4f7f\u7528lru\u7b97\u6cd5\uff0c\u6211\u4eec\u4e5f\u65e0\u6cd5\u786e\u5b9a\u5df2\u7ecf\u5b58\u5728mysql\u7684\u7f13\u5b58\u6570\u636e\uff0c\u5373\u4fbf\u6211\u4eec\u7f13\u5b58\u4e8610w\u6761\u6570\u636e\uff0c\u4f46\u662f\u6211\u4eec\u4e0d\u77e5\u9053\u662f8000w\u6761\u4e2d\u7684\u54ea\u4e00\u4e2a\uff0c\u5c31\u4f1a\u53d1\u751f\u7f13\u5b58\u7a7f\u900f\uff0c\u65e0\u6cd5\u547d\u4e2d\u3002\u52a0\u7f13\u5b58\u96c6\u7fa4\u66f4\u662f\u65e0\u4ece\u8c08\u8d77\uff0c\u6240\u4ee5mysql8.0\u5c31\u76f4\u63a5\u5e9f\u5f03\u4e86\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u66ff\u4ee3\u65b9\u6848",children:"\u66ff\u4ee3\u65b9\u6848"}),"\n",(0,i.jsx)(n.p,{children:"\u5e94\u7528\u5c42\u7ec4\u7ec7\u7f13\u5b58\uff0c\u6700\u7b80\u5355\u7684\u662f\u4f7f\u7528redis,ehcached\u7b49"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,i.jsx)(n.p,{children:"\u7f13\u5b58\u7684\u610f\u4e49\u5728\u4e8e\u5feb\u901f\u67e5\u8be2\u63d0\u5347\u7cfb\u7edf\u6027\u80fd\uff0c\u53ef\u4ee5\u7075\u6d3b\u63a7\u5236\u7f13\u5b58\u7684\u4e00\u81f4\u6027\r\n8.0\u4e4b\u524d\u8ba9DBA\u4e00\u76f4\u7981\u7528\u7684mysql\u7f13\u5b58\u7684\u9650\u5236\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"MySQL\u57fa\u672c\u6ca1\u6709\u624b\u6bb5\u7075\u6d3b\u7684\u7ba1\u7406\u7f13\u5b58\u5931\u6548\u548c\u751f\u6548\uff0c\u5c24\u5176\u5bf9\u4e8e\u9891\u7e41\u66f4\u65b0\u7684\u8868\uff1b"}),"\n",(0,i.jsx)(n.li,{children:"SQL\u5fc5\u987b\u5b8c\u5168\u4e00\u81f4\u624d\u4f1a\u5bfc\u81f4cache\u547d\u4e2d\uff1b"}),"\n",(0,i.jsx)(n.li,{children:"\u4e3a\u4e86\u8282\u7701\u5185\u5b58\u7a7a\u95f4\uff0c\u592a\u5927\u7684result set\u4e0d\u4f1a\u88abcache(query_cache_limit)\uff1b"}),"\n",(0,i.jsx)(n.li,{children:"MySQL\u7f13\u5b58\u5728\u5206\u5e93\u5206\u8868\u73af\u5883\u4e0b\u662f\u4e0d\u8d77\u4f5c\u7528\u7684\uff1b"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884cSQL\u91cc\u6709\u89e6\u53d1\u5668\uff0c\u81ea\u5b9a\u4e49\u51fd\u6570\u65f6\uff0cMySQL\u7f13\u5b58\u4e5f\u662f\u4e0d\u8d77\u4f5c\u7528\u7684\uff1b"}),"\n",(0,i.jsx)(n.li,{children:"\u5728\u8868\u7684\u7ed3\u6784\u6216\u6570\u636e\u53d1\u751f\u6539\u53d8\u65f6\uff0c\u57fa\u4e8e\u8be5\u8868\u76f8\u5173cache.\u7acb\u5373\u5168\u90e8\u5931\u6548\u3002"}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5999:(e,n,s)=>{s.d(n,{A:()=>l});const l=s.p+"assets/images/image-20230220191808225-16977303370541-e4f464f4dacbee7a54fc6a8bfd0161ac.png"},2464:(e,n,s)=>{s.d(n,{A:()=>l});const l=s.p+"assets/images/image-20230220200748912-16977303462983-d6a6d16affe653b8e9f493d7d75b6282.png"},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var l=s(6540);const i={},r=l.createContext(i);function t(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),l.createElement(r.Provider,{value:n},e.children)}},804:e=>{e.exports=JSON.parse('{"permalink":"/blog/mysql-CachesBuffers-reason","editUrl":"https://github.com/Jachen99/Jachen99.github.io/tree/V2.2.1/blog/2023/02-20-\u6df1\u5165\u63a2\u7a76mysql8-x\u53bb\u6389CachesBuffers\u539f\u56e0.md","source":"@site/blog/2023/02-20-\u6df1\u5165\u63a2\u7a76mysql8-x\u53bb\u6389CachesBuffers\u539f\u56e0.md","title":"\u6df1\u5165\u63a2\u7a76mysql8.x\u53bb\u6389CachesBuffers\u539f\u56e0","description":"\u80cc\u666f\uff1a\u6211\u4eec\u901a\u5e38\u7406\u89e3\u7684mysql5.7\u8fc7\u6e21\u52308.0\u662f\u7531\u4e8e\u67e5\u8be2\u7f13\u5b58\u5f88\u9e21\u808b\uff0c\u8981\u4fdd\u8bc1\u6bcf\u6b21\u67e5\u8be2\u90fd\u662f\u76f8\u540c\u7684sql\u67e5\u8be2\u8bed\u53e5\uff0c\u547d\u4e2d\u7387\u81ea\u7136\u4f1a\u5f88\u4f4e\u3002\u4f46\u662f\u771f\u7684\u53ea\u662f\u56e0\u4e3a\u8fd9\u4e2a\u539f\u56e0\u5417\uff1f\u90a3\u4e48\u6211\u8981\u662f\u5728\u9ad8\u5e76\u53d1\u4e0b\u8bf7\u6c42\u540c\u4e00sql\u7684\u573a\u666f\u8fd9\u663e\u7136\u4e5f\u662f\u5b58\u5728\u7684\uff0c\u90a3\u4e3a\u4ec0\u4e48\u8fd8\u8981\u53bb\u6389\u8fd9\u5c42\u7f13\u5b58\u5462\uff1f","date":"2023-02-20T00:00:00.000Z","tags":[{"inline":false,"label":"MySQL","permalink":"/blog/tags/mysql","description":"\u5173\u4e8eMySQL\u7684\u76f8\u5173\u5185\u5bb9"}],"readingTime":9.51,"hasTruncateMarker":false,"authors":[{"name":"\u5b63\u51a0\u81e3","title":"\u540e\u7aef\u7814\u53d1\u5de5\u7a0b\u5e08","url":"https://github.com/jachen99","page":{"permalink":"/blog/authors/jiguanchen"},"socials":{"github":"https://github.com/jachen99"},"imageURL":"https://github.com/jachen99.png","key":"jiguanchen"}],"frontMatter":{"slug":"mysql-CachesBuffers-reason","title":"\u6df1\u5165\u63a2\u7a76mysql8.x\u53bb\u6389CachesBuffers\u539f\u56e0","authors":["jiguanchen"],"tags":["mysql"]},"unlisted":false,"prevItem":{"title":"SQL\u4f18\u5316\u79ef\u7d2f\u7b14\u8bb0","permalink":"/blog/product-management-system"},"nextItem":{"title":"\u6d41\u91cf\u9632\u536b\u5175-Sentinel","permalink":"/blog/product-Sentinel-flow-control"}}')}}]);