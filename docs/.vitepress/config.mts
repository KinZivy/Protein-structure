import { defineConfig } from 'vitepress'

// 环境变量判断（保留）
const isEdgeOne = process.env.EDGEONE === '1'
const baseConfig = isEdgeOne ? '/' : '/Protein-structure/'

export default defineConfig({
  lang: 'zh-CN',
  title: "Datawhale | 蛋白质结构分析",
  description: "Datawhale开源教程：蛋白质结构与功能解析实战",
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
    // 🔥 核心修改：第二章改为父菜单，包含两个子页面
    sidebar: [
      {
        items: [
          // 第一章：单一页面
          { text: '第1章：蛋白质的功能和结构', link: '/chapter1/' },
          // 第二章：父菜单（可折叠），包含2.1和2.2子页面
          {
            text: '第2章：氨基酸的组成和种类',
            // 配置子菜单
            items: [
              { text: '2.1 氨基酸的基本化学结构', link: '/chapter2/chapter2_1' },
              { text: '2.2 Ramachandran 构象筛选标准', link: '/chapter2/chapter2_2' }
            ]
          }
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
