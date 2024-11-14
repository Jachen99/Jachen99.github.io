// @ts-check
// 使用 `@type` JSDoc 注解可以启用编辑器自动补全和类型检查
// 有多种等效的方式声明你的 Docusaurus 配置
// 参考：https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  // 网站标题
  title: '软件一班季同学的世界',
  // 网站副标题
  tagline: 'so cool',
  // 网站的 favicon 图标路径
  favicon: 'img/favicon.ico',

  // 设置站点的生产 URL
  url: 'https://jachen99.github.io',
  // 设置网站的基本路径
  // 对于 GitHub Pages 部署，通常是 '/<projectName>/'
  baseUrl: '/Jachen99.github.io/',

  // GitHub Pages 部署配置
  // 如果不是使用 GitHub Pages，可以忽略这些配置
  organizationName: 'Jachen99', // GitHub 组织或用户名
  projectName: 'Jachen99.github.io', // GitHub 仓库名

  // 配置对错误链接的处理方式
  onBrokenLinks: 'throw', // 遇到错误链接抛出异常
  onBrokenMarkdownLinks: 'warn', // 遇到错误 Markdown 链接发出警告
  deploymentBranch: 'gh-pages-V2', // 部署分支

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
          editUrl: 'https://github.com/Jachen99/Jachen99.github.io/tree/main/docs/', // GitHub 上文档编辑链接
        },
        blog: {
          showReadingTime: true, // 显示博客文章的阅读时长
          feedOptions: {
            type: ['rss', 'atom'], // 提供 RSS 和 Atom 订阅源
            xslt: true, // 使用 XSLT 样式
          },
          editUrl: 'https://github.com/Jachen99/Jachen99.github.io/tree/main/blog/', // GitHub 上博客编辑链接
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
      title: 'My Site', // 导航栏标题
      logo: {
        alt: 'My Site Logo', // Logo 的替代文本
        src: 'img/logo.svg', // Logo 路径
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar', // 关联到侧边栏 ID 为 `tutorialSidebar` 的文档
          position: 'left',
          label: '教程', // 导航项标签
        },
        { to: '/blog', label: '博客', position: 'left' }, // 导航到博客页
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
              label: '教程',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '博客',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Jachen99/Jachen99.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    // Prism 代码高亮配置
    prism: {
      theme: prismThemes.github, // 浅色模式主题
      darkTheme: prismThemes.dracula, // 暗黑模式主题
    },
  },
};

export default config;
