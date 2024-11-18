// @ts-check
// 使用 `@type` JSDoc 注解可以启用编辑器自动补全和类型检查
// 有多种等效的方式声明你的 Docusaurus 配置
// 参考：https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  // 网站标题
  title: '软件一班季同学的世界',
  // 网站副标题
  tagline: 'do the littllllllllle things well : )',
  // 网站的 favicon 图标路径
  favicon: 'img/favicon.ico',

  // 设置站点的生产 URL
  url: 'https://jachen99.github.io',
  // 设置网站的基本路径
  baseUrl: '/',

  // GitHub Pages 部署配置
  // 如果不是使用 GitHub Pages，可以忽略这些配置
  organizationName: 'Jachen99', // GitHub 组织或用户名
  projectName: 'Jachen99.github.io', // GitHub 仓库名

  // 配置对错误链接的处理方式
  onBrokenLinks: 'throw', // 遇到错误链接抛出异常
  onBrokenMarkdownLinks: 'warn', // 遇到错误 Markdown 链接发出警告
  deploymentBranch: 'gh-pages-V3', // 部署分支

  // 配置网站的默认语言
  i18n: {
    defaultLocale: 'zh-Hans', // 默认语言设为简体中文
    locales: ['zh-Hans'], // 仅支持简体中文
  },

presets: [
  [
    'classic',
    /** @type {import('@docusaurus/preset-classic').Options} */
    ({
      docs: {
        sidebarPath: './sidebars.js', // 文档侧边栏配置文件路径
        editUrl: 'https://github.com/Jachen99/Jachen99.github.io/tree/V3.0.0/', // GitHub 上文档编辑链接
      },
      blog: {
        showReadingTime: true, // 显示博客文章的阅读时长
        feedOptions: {
          type: ['rss', 'atom'], // 提供 RSS 和 Atom 订阅源
          xslt: true, // 使用 XSLT 样式
        },
        editUrl: 'https://github.com/Jachen99/Jachen99.github.io/tree/V3.0.0/', // GitHub 上博客编辑链接

        // 修改博客配置
        blogTitle: '我的个人博客', // 博客标题
        blogDescription: '分享技术心得与生活记录。', // 博客描述
        postsPerPage: 'ALL', // 显示所有文章在单页中
        blogSidebarTitle: '所有文章', // 修改侧边栏标题
        blogSidebarCount: 'ALL', // 侧边栏展示所有文章

        // 博客最佳实践相关警告
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'warn',
      },
      theme: {
        customCss: './src/css/custom.css', // 自定义 CSS 文件路径
      },
    }),
  ],
],


  themeConfig: {


    // 评论区配置



    giscus: {
      repo: 'Jachen99/Jachen99.github.io',
      repoId: 'R_kgDONLPkoQ',
      category: 'General',
      categoryId: 'DIC_kwDONLPkoc4CkSvv',
      mapping: 'title',
      lang: 'zh-CN',
    },



    // 搜索框配置
    algolia: {
      // Algolia 提供的应用 ID
      appId: 'H57FMVRMJ9',

      //  公开 API 密钥：提交它没有危险
      apiKey: '13a368b8333bd969cbd463cb79cbdf76',

      indexName: 'jiguanchen',

      // 可选：见下文
      contextualSearch: true,

      // 可选：声明哪些域名需要用 window.location 型的导航而不是 history.push。 适用于 Algolia 配置会爬取多个文档站点，而我们想要用 window.location.href 在它们之间跳转时。
      externalUrlRegex: 'external\\.com|domain\\.com',

      // 可选：替换 Algolia 的部分网址。 在使用相同搜索索引支持多个不同 baseUrl 的部署时非常有用。 你可以在 “from” 中使用正则表达式或字符串。 比方说，localhost:3000 和 myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/blog/', // or as RegExp: /\/docs\//
        to: '/',
      },

      // 可选：Algolia 搜索参数
      searchParameters: {},

      // 可选：默认启用的搜索页路径（传递 `false` 以禁用它）
      searchPagePath: 'search',

      // 可选：Docsearch 的 insights 功能是否启用（默认为 `false`）
      insights: false,

      // 每天凌晨0:00进行爬取
      schedule: 'every 1 day at 1:00 am',

      //... 其他 Algolia 参数
    },

    // 配置浅色和暗黑模式
    colorMode: {
      defaultMode: 'light', // 默认浅色模式
      disableSwitch: false, // 允许用户切换配色模式
      respectPrefersColorScheme: true, // 遵循用户系统的配色偏好
    },
    // 社交分享图像
    image: 'img/docusaurus-social-card.jpg',
    // 导航栏配置
    navbar: {
      title: '我的空间', // 导航栏标题
      logo: {
        alt: 'My Site Logo', // Logo 的替代文本
        src: 'img/logo.svg', // Logo 路径
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: '随笔',
        },
        {to: '/blog', label: '博客', position: 'right'}, // 导航到博客页
        {
          href: 'https://github.com/Jachen99/Jachen99.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    // 页脚配置
    footer: {
      style: 'dark', // 页脚样式，支持 `dark` 和 `light`
      links: [
        {
          title: '文档',
          items: [
            {
              label: '随笔',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: '我的微博',
              href: 'https://weibo.com/u/5489560765',
            },
            {
              label: 'CSDN',
              href: 'https://blog.csdn.net/m0_46464597?type=blog',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '我的博客',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Jachen99/Jachen99.github.io',
            },
          ],
        },
      ],
      copyright: `
        <img src="/img/logo.svg" alt="Logo" style="height: 38px; vertical-align: middle;" />
            © ${new Date().getFullYear()} jachen99.github.io, Inc. Built with 
        <a href="https://docusaurus.io/" target="_blank" style="text-decoration: none;">Docusaurus</a>.
      `,
    },
    // Prism 代码高亮配置
    prism: {
      theme: prismThemes.github, // 浅色模式主题
      darkTheme: prismThemes.dracula, // 暗黑模式主题
    },
  },
};

export default config;
