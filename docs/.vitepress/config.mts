import { defineConfig } from 'vitepress'

// 环境变量判断（保留）
const isEdgeOne = process.env.EDGEONE === '1'
const baseConfig = isEdgeOne ? '/' : '/Protein-structure/'

export default defineConfig({
  lang: 'zh-CN',
  title: "Datawhale | 结构蛋白质组学",
  description: "Datawhale开源教程：蛋白质结构解析+实战",
  base: baseConfig,
  markdown: {
    math: true // 保留数学公式支持（适配第二章的pKa、pI等公式）
  },
  themeConfig: {
    logo: '/datawhale-logo.png',
    nav: [
      { text: 'PDF版本下载', link: 'https://github.com/KinZivy/Protein-structure/releases' },
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },
    // 🔥 目录修改页面区域
    sidebar: [
      {
        items: [
          // 第一章：单一页面
          { text: '第1章：蛋白质概述', link: '/chapter1/chapter1_1' },
          // 第二章：3个子页面
          {
            text: '第2章：氨基酸',
            items: [
              { text: '2.1 氨基酸的基本化学结构', link: '/chapter2/chapter2_1' },
              { text: '2.2 20种氨基酸的特性', link: '/chapter2/chapter2_2' },
              { text: '2.3 氨基酸之间的键作用', link: '/chapter2/chapter2_3' }
            ]
          },
          { text: '第3章：二级结构', link: '/chapter3/chapter3_1' },
          { text: '第4章：三级结构', link: '/chapter4/chapter4_1' },
          { text: '第5章：四级结构', link: '/chapter5/chapter5_1' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KinZivy/Protein-structure' }
    ],

    editLink: {
      pattern: 'https://github.com/KinZivy/Protein-structure/blob/main/docs/:path'
    },

    footer: {
      message: '<a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2026002630号-1</a> | <a href="https://beian.mps.gov.cn/#/query/webSearch?code=11010602202215" rel="noreferrer" target="_blank">京公网安备11010602202215号</a>',
      copyright: '本作品采用 <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议（CC BY-NC-SA 4.0）</a> 进行许可'
    }
  }
})
