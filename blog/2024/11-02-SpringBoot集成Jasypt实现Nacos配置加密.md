---
slug: springboot-jasypt-nacos-config-encryption
title: SpringBoot集成Jasypt实现Nacos配置加密与解密
description: "教程：如何在SpringBoot项目中集成Jasypt，通过自定义加密器实现Nacos配置中心敏感信息（如数据库密码）的国密SM4加解密。保障生产环境配置安全。"
authors: [jiguanchen]
tags: [secure]
---

# SpringBoot集成Jasypt实现Nacos配置加密与解密

本文介绍如何在Nacos中使用国密SM4算法对敏感信息进行加密，并在Spring Boot项目中解密这些配置项。使用Jasypt来集成加密库，并编写一个自定义的加密器，以实现配置项的加密和解密功能。

## 1. 集成Jasypt加密库

##### 1.1、将Jasypt加密库集成到Spring Boot项目中。在pom.xml文件中添加以下依赖：

```xml
<dependency>
    <groupId>com.github.ulisesbocchio</groupId>
    <artifactId>jasypt-spring-boot</artifactId>
    <version>3.0.4</version>
</dependency>
```

*注：需要引用高版本的3.0.4，避免影响系统性能，参考 https://www.jianshu.com/p/c02276987d46*

##### 1.2、在启动类上添加注解 @EnableEncryptableProperties

## 2. 创建国密SM4加密工具类

创建国密SM4加密工具类，它将负责实际的加密和解密操作。已有工具所在目录 com.space.jiguanchen.utils.Sm4Utils ：

```java
package com.space.jiguanchen.utils;

import org.bouncycastle.jce.provider.BouncyCastleProvider;
import org.bouncycastle.pqc.math.linearalgebra.ByteUtils;

import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.spec.SecretKeySpec;
import java.security.Key;
import java.security.SecureRandom;
import java.security.Security;
import java.util.Arrays;

/**
 * @author jiguanchen
 */
public class Sm4Utils {
    public static final String ENCODING = "UTF-8";
    public static final String ALGORIGTHM_NAME = "SM4";
    public static final String ALGORITHM_NAME_ECB_PADDING = "SM4/ECB/PKCS7Padding";
    public static final int DEFAULT_KEY_SIZE = 128;
    public static final String key="dhjashdasa26kl223jkwqe2ejwejwq";

    public Sm4Utils() {
    }

    static {
        Security.addProvider(new BouncyCastleProvider());
    }

    /**
     *  @Description:生成ecb暗号
     */
    private static Cipher generateEcbCipher(String algorithmName, int mode, byte[] key) throws Exception {
        Cipher cipher = Cipher.getInstance(algorithmName,BouncyCastleProvider.PROVIDER_NAME);
        Key sm4Key = new SecretKeySpec(key, ALGORIGTHM_NAME);
        cipher.init(mode, sm4Key);
        return cipher;
    }

    /**
     *  @Description:自动生成密钥
     */
    public static byte[] generateKey() throws Exception {
        return generateKey(DEFAULT_KEY_SIZE);
    }

    public static byte[] generateKey(int keySize) throws Exception {
        KeyGenerator kg = KeyGenerator.getInstance(ALGORIGTHM_NAME, BouncyCastleProvider.PROVIDER_NAME);
        kg.init(keySize, new SecureRandom());
        return kg.generateKey().getEncoded();
    }


    /**
     *  @Description:加密
     */
    public static String encryptEcb(String hexKey, String paramStr, String charset) throws Exception {
        String cipherText = "";
        if (null != paramStr && !"".equals(paramStr)) {
            byte[] keyData = ByteUtils.fromHexString(hexKey);
            charset = charset.trim();
            if (charset.length() <= 0) {
                charset = ENCODING;
            }
            byte[] srcData = paramStr.getBytes(charset);
            byte[] cipherArray = encrypt_Ecb_Padding(keyData, srcData);
            cipherText = ByteUtils.toHexString(cipherArray);
        }
        return cipherText;
    }

    /**
     *  @Description:加密模式之ecb
     */
    public static byte[] encrypt_Ecb_Padding(byte[] key, byte[] data) throws Exception {
        Cipher cipher = generateEcbCipher(ALGORITHM_NAME_ECB_PADDING, Cipher.ENCRYPT_MODE, key);
        byte[] bs = cipher.doFinal(data);
        return bs;
    }

    /**
     *  @Description:sm4解密
     */
    public static String decryptEcb(String hexKey, String cipherText, String charset) throws Exception {
        String decryptStr = "";
        byte[] keyData = ByteUtils.fromHexString(hexKey);
        byte[] cipherData = ByteUtils.fromHexString(cipherText);
        byte[] srcData = decrypt_Ecb_Padding(keyData, cipherData);
        charset = charset.trim();
        if (charset.length() <= 0) {
            charset = ENCODING;
        }
        decryptStr = new String(srcData, charset);
        return decryptStr;
    }

    /**
     *  @Description:解密
     */
    public static byte[] decrypt_Ecb_Padding(byte[] key, byte[] cipherText) throws Exception {
        Cipher cipher = generateEcbCipher(ALGORITHM_NAME_ECB_PADDING, Cipher.DECRYPT_MODE, key);
        return cipher.doFinal(cipherText);
    }

    /**
     *  @Description:密码校验
     */
    public static boolean verifyEcb(String hexKey,String cipherText,String paramStr) throws Exception {
        boolean flag = false;
        byte[] keyData = ByteUtils.fromHexString(hexKey);
        byte[] cipherData = ByteUtils.fromHexString(cipherText);
        byte[] decryptData = decrypt_Ecb_Padding(keyData,cipherData);
        byte[] srcData = paramStr.getBytes(ENCODING);
        flag = Arrays.equals(decryptData,srcData);
        return flag;
    }

    /**
     *  @Description:测试类
     */
    public static void main(String[] args) {
        try {

            // 自定义的32位16进制密钥
            String key = "dhjashdasa26kl223jkwqe2ejwejwq";
            String url = Sm4Utils.encryptEcb(key, "jdbc:mysql://127.0.0.1:3306/demo?serverTimezone=GMT%2B8",ENCODING);
            String username = Sm4Utils.encryptEcb(key, "root",ENCODING);
            String password = Sm4Utils.encryptEcb(key, "root",ENCODING);

            System.out.println(url);
            System.out.println(username);
            System.out.println(password);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

`Sm4Utils`类包含了国密SM4算法的加密和解密方法。

## 3. 创建自定义的Jasypt加密器

为了让Nacos使用我们自己的加密工具进行配置解密，我们需要创建一个自定义的Jasypt加密器。在项目中新建一个名为`JasyptStringEncryptor`的类，并让它实现jasypt提供的`StringEncryptor`接口，如下所示：

```java
package com.space.jiguanchen.auth.config;

import com.space.jiguanchen.utils.Sm4Utils;
import lombok.extern.slf4j.Slf4j;
import org.jasypt.encryption.StringEncryptor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/**
 * @author jiguanchen
 */
@Component
@Slf4j
public class JasyptStringEncryptor implements StringEncryptor {

    @Value("${my.jasyptEncryptor.enable:false}")
    private boolean enable;

    @Override
    public String encrypt(String message) {
        final String exMsg = String.format("encrypt method is not implemented, original message: '%s'.", message);
        log.error(exMsg);
        throw new UnsupportedOperationException(exMsg);
    }

    @Override
    public String decrypt(String message) {
        String decryptedMessage = null;
        try {
            if (enable){
                decryptedMessage = Sm4Utils.decryptEcb(Sm4Utils.key,message,Sm4Utils.ENCODING);
            }else {
                decryptedMessage=message;
            }

            log.debug("---------------------------------------解密了: {} -----------------------------------",decryptedMessage);
        } catch (Exception e) {
            log.error("decrypt failed:"+message+"-"+ e);
            throw new RuntimeException(e);
        }
        return decryptedMessage;
    }
}
```

在`JasyptStringEncryptor`中，我们注入了一个名为`enable`的属性，该属性用于控制加密功能是否启用。当`enable`为`true`时，我们使用我们自己的国密SM4工具对配置信息进行解密；当`enable`为`false`时，我们直接返回原始配置信息，即不进行解密操作。

*注：如果自定义类名不是JasyptStringEncryptor，则需要在nacos上面添加配置：*

```yaml
jasypt:
  encryptor:
    ## 实现jasypt加加密解密的类
    bean: JasyptStringEncryptorDemo
```

## 4. 配置Nacos使用自定义加密器

最后，我们需要在Nacos配置文件中指定使用自定义的加密器。在`bootstrap.properties`或`bootstrap.yml`文件中添加以下配置：

```yaml
# 启用自定义加密器
my:
  jasyptEncryptor:
    enable: false  
```

这里的`my.jasyptEncryptor.enable`属性的值设置为`true`，表示启用我们自己编写的加密逻辑，即使用国密SM4进行解密。如果要禁用加密功能，将其设置为`false`。

完成了以上步骤后，Nacos会在启动时自动加载并使用我们的自定义加密器，从而实现数据库配置的解密操作。

## 5. 加密配置项并放入Nacos

使用国密SM4加密工具类`Sm4Utils`来加密敏感配置项，例如数据库连接的url、username和password。在Sm4Utils的`main`方法中进行加密操作，得到加密后的配置项：

```java
public static void main(String[] args) {
    try {
        // 自定义的32位16进制密钥
        String key = "dhjashdasa26kl223jkwqe2ejwejwq";
        String url = Sm4Utils.encryptEcb(key, "jdbc:mysql://127.0.0.1:3306/demo?serverTimezone=GMT%2B8",ENCODING);
        String username = Sm4Utils.encryptEcb(key, "root",ENCODING);
        String password = Sm4Utils.encryptEcb(key, "root",ENCODING);

        System.out.println(url);
        System.out.println(username);
        System.out.println(password);
    } catch (Exception e) {
        e.printStackTrace();
    }
}
```

得到加密后的密文配置项，将它们作为值存放到Nacos中的配置项中：

```properties
url=ENC(opkdai32klsamnxa97b678f092c50e042f756371ef644de9dc4aa6318afa8a304a20b327ce84eb573ade0fb7336be9827cec08cd149f0c5380af4926f5219b7829edde1b4026d4229d30a86702851948164bc23af18a4797bae23f7833c2239ab3fd654dc234be37b2b3f31cbeae9e09eaf519a04a623d3c5795d23fa8fa3ce1c59eaf87c0af
username=ENC(dasjkdljasdjad23342mkljjlk)
password=ENC(0298hsdajd328783jdsakjd212)
```

重启服务，在Nacos启动时会被正确地解密并加载到Spring Boot项目中。
