import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'VMDC-UI',
  favicon: ' ',
  logo: ' ',
  outputPath: 'docs-dist',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  base: '/VMDC-UI',
  publicPath: '/VMDC-UI/',
  mode: 'site',
  navs: {
    // 多语言 key 值需与 locales 配置中的 key 一致
    'en-US': [
      null, // null 值代表保留约定式生成的导航，只做增量配置
      {
        title: 'GitHub',
        path: 'https://github.com/VirStudio/VMDC-UI',
      },
    ],
    'zh-CN': [
      null, // null 值代表保留约定式生成的导航，只做增量配置
      {
        title: 'GitHub',
        path: 'https://github.com/VirStudio/VMDC-UI',
      },
    ],
  },
  // more config: https://d.umijs.org/config
});
