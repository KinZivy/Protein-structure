import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config

// 1. 获取环境变量并判断
// 如果环境变量 EDGEONE 等于 '1'，说明在 EdgeOne 环境，使用根路径 '/'
// 否则默认是 GitHub Pages 环境，使用仓库子路径 '/Protein-structure/'（适配你的仓库名）
const isEdgeOne = process.env.EDGEONE === '1'
const baseConfig = isEdgeOne ? '/' : '/Protein-structure/' // 【修改1】仓库名替换为Protein-structure

export default defineConfig({
  lang: 'zh-CN',
  title: "Datawhale | 蛋白质结构分析", // 【修改2】标题保留Datawhale，新增项目名
  description: "Datawhale开源教程：蛋白质结构与功能解析实战", // 【修改3】描述贴合项目主题
  base: baseConfig,
  markdown: {
    math: true // 保留数学公式支持（适配你文档中的10¹²等公式）
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/datawhale-logo.png', // 保留Datawhale logo（如需替换可修改图片名）
    nav: [
      // 【修改4】PDF下载链接指向你的仓库Releases（若无PDF可暂时保留原链接，后续上传后修改）
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
    sidebar: [
      {
        items: [
          // 【修改5】侧边栏适配你的章节结构（与你第一章文档路径匹配）
          { text: '第1章：蛋白质的功能和结构', link: '/chapters/chapter1/' },
          // 可根据后续章节扩展，示例：
          // { text: '第2章：蛋白质结构解析方法', 
          //   items: [
          //     { text: '2.1 实验解析方法', link: '/chapters/chapter2/chapter2_1' },
          //     { text: '2.2 预测解析方法', link: '/chapters/chapter2/chapter2_2' }
          //   ]
          //  }
        ]
      }
    ],

    // 【修改6】社交链接指向你的项目仓库
    socialLinks: [
      { icon: 'github', link: 'https://github.com/KinZivy/Protein-structure' }
    ],

    // 【修改7】编辑文档链接指向你的仓库（方便在线编辑文档）
    editLink: {
      pattern: 'https://github.com/KinZivy/Protein-structure/blob/main/docs/:path'
    },

    // 完全保留Datawhale相关备案、许可信息（符合你“保持Datawhale相关信息”的要求）
    footer: {
      message: '<a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2026002630号-1</a> | <a href="https://beian.mps.gov.cn/#/query/webSearch?code=11010602202215" rel="noreferrer" target="_blank">京公网安备11010602202215号</a>',
      copyright: '本作品采用 <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议（CC BY-NC-SA 4.0）</a> 进行许可'
    }
  }
})
