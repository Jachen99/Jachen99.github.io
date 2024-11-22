"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[3125],{39276:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>t,toc:()=>p});var t=n(6283),a=n(74848),i=n(28453);const c={slug:"product-jasypt-nacos-config",title:"SpringBoot\u96c6\u6210Jasypt\u5b9e\u73b0Nacos\u914d\u7f6e\u52a0\u5bc6\u4e0e\u89e3\u5bc6",authors:["jiguanchen"],tags:["\u5b89\u5168"]},s="SpringBoot\u96c6\u6210Jasypt\u5b9e\u73b0Nacos\u914d\u7f6e\u52a0\u5bc6\u4e0e\u89e3\u5bc6",o={authorsImageUrls:[void 0]},p=[{value:"1. \u96c6\u6210Jasypt\u52a0\u5bc6\u5e93",id:"1-\u96c6\u6210jasypt\u52a0\u5bc6\u5e93",level:2},{value:"1.1\u3001\u5c06Jasypt\u52a0\u5bc6\u5e93\u96c6\u6210\u5230Spring Boot\u9879\u76ee\u4e2d\u3002\u5728pom.xml\u6587\u4ef6\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u4f9d\u8d56\uff1a",id:"11\u5c06jasypt\u52a0\u5bc6\u5e93\u96c6\u6210\u5230spring-boot\u9879\u76ee\u4e2d\u5728pomxml\u6587\u4ef6\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u4f9d\u8d56",level:5},{value:"1.2\u3001\u5728\u542f\u52a8\u7c7b\u4e0a\u6dfb\u52a0\u6ce8\u89e3 @EnableEncryptableProperties",id:"12\u5728\u542f\u52a8\u7c7b\u4e0a\u6dfb\u52a0\u6ce8\u89e3-enableencryptableproperties",level:5},{value:"2. \u521b\u5efa\u56fd\u5bc6SM4\u52a0\u5bc6\u5de5\u5177\u7c7b",id:"2-\u521b\u5efa\u56fd\u5bc6sm4\u52a0\u5bc6\u5de5\u5177\u7c7b",level:2},{value:"3. \u521b\u5efa\u81ea\u5b9a\u4e49\u7684Jasypt\u52a0\u5bc6\u5668",id:"3-\u521b\u5efa\u81ea\u5b9a\u4e49\u7684jasypt\u52a0\u5bc6\u5668",level:2},{value:"4. \u914d\u7f6eNacos\u4f7f\u7528\u81ea\u5b9a\u4e49\u52a0\u5bc6\u5668",id:"4-\u914d\u7f6enacos\u4f7f\u7528\u81ea\u5b9a\u4e49\u52a0\u5bc6\u5668",level:2},{value:"5. \u52a0\u5bc6\u914d\u7f6e\u9879\u5e76\u653e\u5165Nacos",id:"5-\u52a0\u5bc6\u914d\u7f6e\u9879\u5e76\u653e\u5165nacos",level:2}];function l(r){const e={a:"a",code:"code",em:"em",h2:"h2",h5:"h5",p:"p",pre:"pre",...(0,i.R)(),...r.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728Nacos\u4e2d\u4f7f\u7528\u56fd\u5bc6SM4\u7b97\u6cd5\u5bf9\u654f\u611f\u4fe1\u606f\u8fdb\u884c\u52a0\u5bc6\uff0c\u5e76\u5728Spring Boot\u9879\u76ee\u4e2d\u89e3\u5bc6\u8fd9\u4e9b\u914d\u7f6e\u9879\u3002\u4f7f\u7528Jasypt\u6765\u96c6\u6210\u52a0\u5bc6\u5e93\uff0c\u5e76\u7f16\u5199\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684\u52a0\u5bc6\u5668\uff0c\u4ee5\u5b9e\u73b0\u914d\u7f6e\u9879\u7684\u52a0\u5bc6\u548c\u89e3\u5bc6\u529f\u80fd\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"1-\u96c6\u6210jasypt\u52a0\u5bc6\u5e93",children:"1. \u96c6\u6210Jasypt\u52a0\u5bc6\u5e93"}),"\n",(0,a.jsx)(e.h5,{id:"11\u5c06jasypt\u52a0\u5bc6\u5e93\u96c6\u6210\u5230spring-boot\u9879\u76ee\u4e2d\u5728pomxml\u6587\u4ef6\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u4f9d\u8d56",children:"1.1\u3001\u5c06Jasypt\u52a0\u5bc6\u5e93\u96c6\u6210\u5230Spring Boot\u9879\u76ee\u4e2d\u3002\u5728pom.xml\u6587\u4ef6\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u4f9d\u8d56\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-xml",children:"<dependency>\r\n    <groupId>com.github.ulisesbocchio</groupId>\r\n    <artifactId>jasypt-spring-boot</artifactId>\r\n    <version>3.0.4</version>\r\n</dependency>\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsxs)(e.em,{children:["\u6ce8\uff1a\u9700\u8981\u5f15\u7528\u9ad8\u7248\u672c\u76843.0.4\uff0c\u907f\u514d\u5f71\u54cd\u7cfb\u7edf\u6027\u80fd\uff0c\u53c2\u8003 ",(0,a.jsx)(e.a,{href:"https://www.jianshu.com/p/c02276987d46",children:"https://www.jianshu.com/p/c02276987d46"})]})}),"\n",(0,a.jsx)(e.h5,{id:"12\u5728\u542f\u52a8\u7c7b\u4e0a\u6dfb\u52a0\u6ce8\u89e3-enableencryptableproperties",children:"1.2\u3001\u5728\u542f\u52a8\u7c7b\u4e0a\u6dfb\u52a0\u6ce8\u89e3 @EnableEncryptableProperties"}),"\n",(0,a.jsx)(e.h2,{id:"2-\u521b\u5efa\u56fd\u5bc6sm4\u52a0\u5bc6\u5de5\u5177\u7c7b",children:"2. \u521b\u5efa\u56fd\u5bc6SM4\u52a0\u5bc6\u5de5\u5177\u7c7b"}),"\n",(0,a.jsx)(e.p,{children:"\u521b\u5efa\u56fd\u5bc6SM4\u52a0\u5bc6\u5de5\u5177\u7c7b\uff0c\u5b83\u5c06\u8d1f\u8d23\u5b9e\u9645\u7684\u52a0\u5bc6\u548c\u89e3\u5bc6\u64cd\u4f5c\u3002\u5df2\u6709\u5de5\u5177\u6240\u5728\u76ee\u5f55 com.space.jiguanchen.utils.Sm4Utils \uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'package com.space.jiguanchen.utils;\r\n\r\nimport org.bouncycastle.jce.provider.BouncyCastleProvider;\r\nimport org.bouncycastle.pqc.math.linearalgebra.ByteUtils;\r\n\r\nimport javax.crypto.Cipher;\r\nimport javax.crypto.KeyGenerator;\r\nimport javax.crypto.spec.SecretKeySpec;\r\nimport java.security.Key;\r\nimport java.security.SecureRandom;\r\nimport java.security.Security;\r\nimport java.util.Arrays;\r\n\r\n/**\r\n * @author jiguanchen\r\n */\r\npublic class Sm4Utils {\r\n    public static final String ENCODING = "UTF-8";\r\n    public static final String ALGORIGTHM_NAME = "SM4";\r\n    public static final String ALGORITHM_NAME_ECB_PADDING = "SM4/ECB/PKCS7Padding";\r\n    public static final int DEFAULT_KEY_SIZE = 128;\r\n    public static final String key="dhjashdasa26kl223jkwqe2ejwejwq";\r\n\r\n    public Sm4Utils() {\r\n    }\r\n\r\n    static {\r\n        Security.addProvider(new BouncyCastleProvider());\r\n    }\r\n\r\n    /**\r\n     *  @Description:\u751f\u6210ecb\u6697\u53f7\r\n     */\r\n    private static Cipher generateEcbCipher(String algorithmName, int mode, byte[] key) throws Exception {\r\n        Cipher cipher = Cipher.getInstance(algorithmName,BouncyCastleProvider.PROVIDER_NAME);\r\n        Key sm4Key = new SecretKeySpec(key, ALGORIGTHM_NAME);\r\n        cipher.init(mode, sm4Key);\r\n        return cipher;\r\n    }\r\n\r\n    /**\r\n     *  @Description:\u81ea\u52a8\u751f\u6210\u5bc6\u94a5\r\n     */\r\n    public static byte[] generateKey() throws Exception {\r\n        return generateKey(DEFAULT_KEY_SIZE);\r\n    }\r\n\r\n    public static byte[] generateKey(int keySize) throws Exception {\r\n        KeyGenerator kg = KeyGenerator.getInstance(ALGORIGTHM_NAME, BouncyCastleProvider.PROVIDER_NAME);\r\n        kg.init(keySize, new SecureRandom());\r\n        return kg.generateKey().getEncoded();\r\n    }\r\n\r\n\r\n    /**\r\n     *  @Description:\u52a0\u5bc6\r\n     */\r\n    public static String encryptEcb(String hexKey, String paramStr, String charset) throws Exception {\r\n        String cipherText = "";\r\n        if (null != paramStr && !"".equals(paramStr)) {\r\n            byte[] keyData = ByteUtils.fromHexString(hexKey);\r\n            charset = charset.trim();\r\n            if (charset.length() <= 0) {\r\n                charset = ENCODING;\r\n            }\r\n            byte[] srcData = paramStr.getBytes(charset);\r\n            byte[] cipherArray = encrypt_Ecb_Padding(keyData, srcData);\r\n            cipherText = ByteUtils.toHexString(cipherArray);\r\n        }\r\n        return cipherText;\r\n    }\r\n\r\n    /**\r\n     *  @Description:\u52a0\u5bc6\u6a21\u5f0f\u4e4becb\r\n     */\r\n    public static byte[] encrypt_Ecb_Padding(byte[] key, byte[] data) throws Exception {\r\n        Cipher cipher = generateEcbCipher(ALGORITHM_NAME_ECB_PADDING, Cipher.ENCRYPT_MODE, key);\r\n        byte[] bs = cipher.doFinal(data);\r\n        return bs;\r\n    }\r\n\r\n    /**\r\n     *  @Description:sm4\u89e3\u5bc6\r\n     */\r\n    public static String decryptEcb(String hexKey, String cipherText, String charset) throws Exception {\r\n        String decryptStr = "";\r\n        byte[] keyData = ByteUtils.fromHexString(hexKey);\r\n        byte[] cipherData = ByteUtils.fromHexString(cipherText);\r\n        byte[] srcData = decrypt_Ecb_Padding(keyData, cipherData);\r\n        charset = charset.trim();\r\n        if (charset.length() <= 0) {\r\n            charset = ENCODING;\r\n        }\r\n        decryptStr = new String(srcData, charset);\r\n        return decryptStr;\r\n    }\r\n\r\n    /**\r\n     *  @Description:\u89e3\u5bc6\r\n     */\r\n    public static byte[] decrypt_Ecb_Padding(byte[] key, byte[] cipherText) throws Exception {\r\n        Cipher cipher = generateEcbCipher(ALGORITHM_NAME_ECB_PADDING, Cipher.DECRYPT_MODE, key);\r\n        return cipher.doFinal(cipherText);\r\n    }\r\n\r\n    /**\r\n     *  @Description:\u5bc6\u7801\u6821\u9a8c\r\n     */\r\n    public static boolean verifyEcb(String hexKey,String cipherText,String paramStr) throws Exception {\r\n        boolean flag = false;\r\n        byte[] keyData = ByteUtils.fromHexString(hexKey);\r\n        byte[] cipherData = ByteUtils.fromHexString(cipherText);\r\n        byte[] decryptData = decrypt_Ecb_Padding(keyData,cipherData);\r\n        byte[] srcData = paramStr.getBytes(ENCODING);\r\n        flag = Arrays.equals(decryptData,srcData);\r\n        return flag;\r\n    }\r\n\r\n    /**\r\n     *  @Description:\u6d4b\u8bd5\u7c7b\r\n     */\r\n    public static void main(String[] args) {\r\n        try {\r\n\r\n            // \u81ea\u5b9a\u4e49\u768432\u4f4d16\u8fdb\u5236\u5bc6\u94a5\r\n            String key = "dhjashdasa26kl223jkwqe2ejwejwq";\r\n            String url = Sm4Utils.encryptEcb(key, "jdbc:mysql://127.0.0.1:3306/demo?serverTimezone=GMT%2B8",ENCODING);\r\n            String username = Sm4Utils.encryptEcb(key, "root",ENCODING);\r\n            String password = Sm4Utils.encryptEcb(key, "root",ENCODING);\r\n\r\n            System.out.println(url);\r\n            System.out.println(username);\r\n            System.out.println(password);\r\n\r\n        } catch (Exception e) {\r\n            e.printStackTrace();\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"Sm4Utils"}),"\u7c7b\u5305\u542b\u4e86\u56fd\u5bc6SM4\u7b97\u6cd5\u7684\u52a0\u5bc6\u548c\u89e3\u5bc6\u65b9\u6cd5\u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"3-\u521b\u5efa\u81ea\u5b9a\u4e49\u7684jasypt\u52a0\u5bc6\u5668",children:"3. \u521b\u5efa\u81ea\u5b9a\u4e49\u7684Jasypt\u52a0\u5bc6\u5668"}),"\n",(0,a.jsxs)(e.p,{children:["\u4e3a\u4e86\u8ba9Nacos\u4f7f\u7528\u6211\u4eec\u81ea\u5df1\u7684\u52a0\u5bc6\u5de5\u5177\u8fdb\u884c\u914d\u7f6e\u89e3\u5bc6\uff0c\u6211\u4eec\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684Jasypt\u52a0\u5bc6\u5668\u3002\u5728\u9879\u76ee\u4e2d\u65b0\u5efa\u4e00\u4e2a\u540d\u4e3a",(0,a.jsx)(e.code,{children:"JasyptStringEncryptor"}),"\u7684\u7c7b\uff0c\u5e76\u8ba9\u5b83\u5b9e\u73b0jasypt\u63d0\u4f9b\u7684",(0,a.jsx)(e.code,{children:"StringEncryptor"}),"\u63a5\u53e3\uff0c\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'package com.space.jiguanchen.auth.config;\r\n\r\nimport com.space.jiguanchen.utils.Sm4Utils;\r\nimport lombok.extern.slf4j.Slf4j;\r\nimport org.jasypt.encryption.StringEncryptor;\r\nimport org.springframework.beans.factory.annotation.Value;\r\nimport org.springframework.stereotype.Component;\r\n\r\n/**\r\n * @author jiguanchen\r\n */\r\n@Component\r\n@Slf4j\r\npublic class JasyptStringEncryptor implements StringEncryptor {\r\n\r\n    @Value("${my.jasyptEncryptor.enable:false}")\r\n    private boolean enable;\r\n\r\n    @Override\r\n    public String encrypt(String message) {\r\n        final String exMsg = String.format("encrypt method is not implemented, original message: \'%s\'.", message);\r\n        log.error(exMsg);\r\n        throw new UnsupportedOperationException(exMsg);\r\n    }\r\n\r\n    @Override\r\n    public String decrypt(String message) {\r\n        String decryptedMessage = null;\r\n        try {\r\n            if (enable){\r\n                decryptedMessage = Sm4Utils.decryptEcb(Sm4Utils.key,message,Sm4Utils.ENCODING);\r\n            }else {\r\n                decryptedMessage=message;\r\n            }\r\n\r\n            log.debug("---------------------------------------\u89e3\u5bc6\u4e86: {} -----------------------------------",decryptedMessage);\r\n        } catch (Exception e) {\r\n            log.error("decrypt failed:"+message+"-"+ e);\r\n            throw new RuntimeException(e);\r\n        }\r\n        return decryptedMessage;\r\n    }\r\n}\n'})}),"\n",(0,a.jsxs)(e.p,{children:["\u5728",(0,a.jsx)(e.code,{children:"JasyptStringEncryptor"}),"\u4e2d\uff0c\u6211\u4eec\u6ce8\u5165\u4e86\u4e00\u4e2a\u540d\u4e3a",(0,a.jsx)(e.code,{children:"enable"}),"\u7684\u5c5e\u6027\uff0c\u8be5\u5c5e\u6027\u7528\u4e8e\u63a7\u5236\u52a0\u5bc6\u529f\u80fd\u662f\u5426\u542f\u7528\u3002\u5f53",(0,a.jsx)(e.code,{children:"enable"}),"\u4e3a",(0,a.jsx)(e.code,{children:"true"}),"\u65f6\uff0c\u6211\u4eec\u4f7f\u7528\u6211\u4eec\u81ea\u5df1\u7684\u56fd\u5bc6SM4\u5de5\u5177\u5bf9\u914d\u7f6e\u4fe1\u606f\u8fdb\u884c\u89e3\u5bc6\uff1b\u5f53",(0,a.jsx)(e.code,{children:"enable"}),"\u4e3a",(0,a.jsx)(e.code,{children:"false"}),"\u65f6\uff0c\u6211\u4eec\u76f4\u63a5\u8fd4\u56de\u539f\u59cb\u914d\u7f6e\u4fe1\u606f\uff0c\u5373\u4e0d\u8fdb\u884c\u89e3\u5bc6\u64cd\u4f5c\u3002"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.em,{children:"\u6ce8\uff1a\u5982\u679c\u81ea\u5b9a\u4e49\u7c7b\u540d\u4e0d\u662fJasyptStringEncryptor\uff0c\u5219\u9700\u8981\u5728nacos\u4e0a\u9762\u6dfb\u52a0\u914d\u7f6e\uff1a"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-yaml",children:"jasypt:\r\n  encryptor:\r\n    ## \u5b9e\u73b0jasypt\u52a0\u52a0\u5bc6\u89e3\u5bc6\u7684\u7c7b\r\n    bean: JasyptStringEncryptorDemo\n"})}),"\n",(0,a.jsx)(e.h2,{id:"4-\u914d\u7f6enacos\u4f7f\u7528\u81ea\u5b9a\u4e49\u52a0\u5bc6\u5668",children:"4. \u914d\u7f6eNacos\u4f7f\u7528\u81ea\u5b9a\u4e49\u52a0\u5bc6\u5668"}),"\n",(0,a.jsxs)(e.p,{children:["\u6700\u540e\uff0c\u6211\u4eec\u9700\u8981\u5728Nacos\u914d\u7f6e\u6587\u4ef6\u4e2d\u6307\u5b9a\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u52a0\u5bc6\u5668\u3002\u5728",(0,a.jsx)(e.code,{children:"bootstrap.properties"}),"\u6216",(0,a.jsx)(e.code,{children:"bootstrap.yml"}),"\u6587\u4ef6\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff1a"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-yaml",children:"# \u542f\u7528\u81ea\u5b9a\u4e49\u52a0\u5bc6\u5668\r\nmy:\r\n  jasyptEncryptor:\r\n    enable: false  \n"})}),"\n",(0,a.jsxs)(e.p,{children:["\u8fd9\u91cc\u7684",(0,a.jsx)(e.code,{children:"my.jasyptEncryptor.enable"}),"\u5c5e\u6027\u7684\u503c\u8bbe\u7f6e\u4e3a",(0,a.jsx)(e.code,{children:"true"}),"\uff0c\u8868\u793a\u542f\u7528\u6211\u4eec\u81ea\u5df1\u7f16\u5199\u7684\u52a0\u5bc6\u903b\u8f91\uff0c\u5373\u4f7f\u7528\u56fd\u5bc6SM4\u8fdb\u884c\u89e3\u5bc6\u3002\u5982\u679c\u8981\u7981\u7528\u52a0\u5bc6\u529f\u80fd\uff0c\u5c06\u5176\u8bbe\u7f6e\u4e3a",(0,a.jsx)(e.code,{children:"false"}),"\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"\u5b8c\u6210\u4e86\u4ee5\u4e0a\u6b65\u9aa4\u540e\uff0cNacos\u4f1a\u5728\u542f\u52a8\u65f6\u81ea\u52a8\u52a0\u8f7d\u5e76\u4f7f\u7528\u6211\u4eec\u7684\u81ea\u5b9a\u4e49\u52a0\u5bc6\u5668\uff0c\u4ece\u800c\u5b9e\u73b0\u6570\u636e\u5e93\u914d\u7f6e\u7684\u89e3\u5bc6\u64cd\u4f5c\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"5-\u52a0\u5bc6\u914d\u7f6e\u9879\u5e76\u653e\u5165nacos",children:"5. \u52a0\u5bc6\u914d\u7f6e\u9879\u5e76\u653e\u5165Nacos"}),"\n",(0,a.jsxs)(e.p,{children:["\u4f7f\u7528\u56fd\u5bc6SM4\u52a0\u5bc6\u5de5\u5177\u7c7b",(0,a.jsx)(e.code,{children:"Sm4Utils"}),"\u6765\u52a0\u5bc6\u654f\u611f\u914d\u7f6e\u9879\uff0c\u4f8b\u5982\u6570\u636e\u5e93\u8fde\u63a5\u7684url\u3001username\u548cpassword\u3002\u5728Sm4Utils\u7684",(0,a.jsx)(e.code,{children:"main"}),"\u65b9\u6cd5\u4e2d\u8fdb\u884c\u52a0\u5bc6\u64cd\u4f5c\uff0c\u5f97\u5230\u52a0\u5bc6\u540e\u7684\u914d\u7f6e\u9879\uff1a"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'public static void main(String[] args) {\r\n    try {\r\n        // \u81ea\u5b9a\u4e49\u768432\u4f4d16\u8fdb\u5236\u5bc6\u94a5\r\n        String key = "dhjashdasa26kl223jkwqe2ejwejwq";\r\n        String url = Sm4Utils.encryptEcb(key, "jdbc:mysql://127.0.0.1:3306/demo?serverTimezone=GMT%2B8",ENCODING);\r\n        String username = Sm4Utils.encryptEcb(key, "root",ENCODING);\r\n        String password = Sm4Utils.encryptEcb(key, "root",ENCODING);\r\n\r\n        System.out.println(url);\r\n        System.out.println(username);\r\n        System.out.println(password);\r\n    } catch (Exception e) {\r\n        e.printStackTrace();\r\n    }\r\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u5f97\u5230\u52a0\u5bc6\u540e\u7684\u5bc6\u6587\u914d\u7f6e\u9879\uff0c\u5c06\u5b83\u4eec\u4f5c\u4e3a\u503c\u5b58\u653e\u5230Nacos\u4e2d\u7684\u914d\u7f6e\u9879\u4e2d\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-properties",children:"url=ENC(opkdai32klsamnxa97b678f092c50e042f756371ef644de9dc4aa6318afa8a304a20b327ce84eb573ade0fb7336be9827cec08cd149f0c5380af4926f5219b7829edde1b4026d4229d30a86702851948164bc23af18a4797bae23f7833c2239ab3fd654dc234be37b2b3f31cbeae9e09eaf519a04a623d3c5795d23fa8fa3ce1c59eaf87c0af\r\nusername=ENC(dasjkdljasdjad23342mkljjlk)\r\npassword=ENC(0298hsdajd328783jdsakjd212)\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u91cd\u542f\u670d\u52a1\uff0c\u5728Nacos\u542f\u52a8\u65f6\u4f1a\u88ab\u6b63\u786e\u5730\u89e3\u5bc6\u5e76\u52a0\u8f7d\u5230Spring Boot\u9879\u76ee\u4e2d\u3002"})]})}function d(r={}){const{wrapper:e}={...(0,i.R)(),...r.components};return e?(0,a.jsx)(e,{...r,children:(0,a.jsx)(l,{...r})}):l(r)}},28453:(r,e,n)=>{n.d(e,{R:()=>c,x:()=>s});var t=n(96540);const a={},i=t.createContext(a);function c(r){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function s(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(a):r.components||a:c(r.components),t.createElement(i.Provider,{value:e},r.children)}},6283:r=>{r.exports=JSON.parse('{"permalink":"/blog/product-jasypt-nacos-config","editUrl":"https://github.com/Jachen99/Jachen99.github.io/tree/V3.0.0/blog/2024/11-02-SpringBoot\u96c6\u6210Jasypt\u5b9e\u73b0Nacos\u914d\u7f6e\u52a0\u5bc6.md","source":"@site/blog/2024/11-02-SpringBoot\u96c6\u6210Jasypt\u5b9e\u73b0Nacos\u914d\u7f6e\u52a0\u5bc6.md","title":"SpringBoot\u96c6\u6210Jasypt\u5b9e\u73b0Nacos\u914d\u7f6e\u52a0\u5bc6\u4e0e\u89e3\u5bc6","description":"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728Nacos\u4e2d\u4f7f\u7528\u56fd\u5bc6SM4\u7b97\u6cd5\u5bf9\u654f\u611f\u4fe1\u606f\u8fdb\u884c\u52a0\u5bc6\uff0c\u5e76\u5728Spring Boot\u9879\u76ee\u4e2d\u89e3\u5bc6\u8fd9\u4e9b\u914d\u7f6e\u9879\u3002\u4f7f\u7528Jasypt\u6765\u96c6\u6210\u52a0\u5bc6\u5e93\uff0c\u5e76\u7f16\u5199\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684\u52a0\u5bc6\u5668\uff0c\u4ee5\u5b9e\u73b0\u914d\u7f6e\u9879\u7684\u52a0\u5bc6\u548c\u89e3\u5bc6\u529f\u80fd\u3002","date":"2024-11-02T00:00:00.000Z","tags":[{"inline":true,"label":"\u5b89\u5168","permalink":"/blog/tags/\u5b89\u5168"}],"readingTime":6.285,"hasTruncateMarker":false,"authors":[{"name":"\u5b63\u51a0\u81e3","title":"\u540e\u7aef\u7814\u53d1\u5de5\u7a0b\u5e08","url":"https://github.com/jachen99","page":{"permalink":"/blog/authors/jiguanchen"},"socials":{"github":"https://github.com/jachen99"},"imageURL":"https://github.com/jachen99.png","key":"jiguanchen"}],"frontMatter":{"slug":"product-jasypt-nacos-config","title":"SpringBoot\u96c6\u6210Jasypt\u5b9e\u73b0Nacos\u914d\u7f6e\u52a0\u5bc6\u4e0e\u89e3\u5bc6","authors":["jiguanchen"],"tags":["\u5b89\u5168"]},"unlisted":false,"nextItem":{"title":"\u63a2\u7a76\u96f6\u62f7\u8d1d\u6280\u672f","permalink":"/blog/product-introduction-of-zero-copy-technology"}}')}}]);