// @ts-check
// 使用 `@type` JSDoc 注解可以启用编辑器自动补全和类型检查
// 有多种等效的方式声明你的 Docusaurus 配置
// 参考：https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// 该文件运行在 Node.js 环境中 - 不要在此处使用客户端代码（浏览器 API、JSX 等）

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // 设置站点的生产 URL
  url: 'https://jachen99.github.io',
  // 设置网站的基本路径
  // 对于 GitHub Pages 部署，通常是 '/<projectName>/'
  baseUrl: '/Jachen99.github.io/',

  // GitHub Pages 部署配置
  // 如果不是使用 GitHub Pages，可以忽略这些配置
  organizationName: 'Jachen99', // 通常是 GitHub 组织或用户名
  projectName: 'Jachen99.github.io', // 通常是 GitHub 仓库名

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // 即使不使用国际化功能，也可以设置此字段以提供有用的 HTML 元数据
  // 例如，如果站点是中文，可以将 "en" 替换为 "zh-Hans"
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // 请将此处更改为你的仓库 URL
          // 如果不需要编辑页面链接，可以删除该配置
          editUrl:
            'https://github.com/Jachen99/Jachen99.github.io/tree/main/docs/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // 请将此处更改为你的仓库 URL
          // 如果不需要编辑页面链接，可以删除该配置
          editUrl:
            'https://github.com/Jachen99/Jachen99.github.io/tree/main/blog/',
          // 强制执行博客的最佳实践
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 替换为项目的社交分享图
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '教程',
          },
          { to: '/blog', label: '博客', position: 'left' },
          {
            href: 'https://github.com/Jachen99/Jachen99.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
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
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
