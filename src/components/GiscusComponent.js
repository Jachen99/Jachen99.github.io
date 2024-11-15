import React from "react";
import Giscus from "@giscus/react";
import {useColorMode} from "@docusaurus/theme-common"; // 导入当前主题 API

export default function GiscusComponent() {
    const {colorMode} = useColorMode(); // 获取当前主题
    return (
        // 前面放一个带 margin 的 div，美观
        <div style={{marginTop: "30px"}}>
            <Giscus
                id="comments"
                repo="Jachen99/Jachen99.github.io"  // 替换为你的 GitHub 仓库
                repoId="R_kgDONLPkoQ"  // 替换为你的 GitHub 仓库 ID
                category="General"  // 选择你想要的分类
                categoryId="DIC_kwDONLPkoc4CkSvv"  // 替换为对应分类的 ID
                mapping="pathname"  // 根据文件路径生成评论
                term="Welcome to @giscus/react component!"  // 可自定义欢迎词
                strict="0"  // 是否严格模式，0 表示不严格
                reactionsEnabled="1"  // 启用评论的反应表情
                emitMetadata="0"  // 是否启用元数据的发送
                inputPosition="top"  // 评论框的位置，`top` 或 `bottom`
                theme={colorMode}  // 根据当前主题设置
                lang="zh-CN"  // 设置评论语言为中文
                loading="lazy"  // 延迟加载评论
                crossorigin="anonymous"  // 跨域请求时使用匿名
                async  // 异步加载
            />
        </div>
    );
}