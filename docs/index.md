---
layout: home

hero:
  name: "蛋白质结构分析"
  text: "从结构到功能的系统解析"
  tagline: 探索蛋白质三维构象与生物学功能的关联
  # 临时注释封面图（避免因缺失图片导致构建失败，后续上传后取消注释）
  # image:
  #   src: /protein_structure.png
  #   alt: 蛋白质结构分析
  actions:
    - theme: brand
      text: 快速入门
      link: /chapter1/ # 关键修正：移除 chapters/ 层级
    - theme: alt
      text: 项目仓库
      link: https://github.com/KinZivy/Protein-structure

features:
  - title: 🧬 结构解析
    details: 聚焦蛋白质各级结构特征，结合实验与预测方法解析构象规律
  - title: 📊 模型评估
    details: 系统讲解蛋白质结构模型的质量评估工具与核心指标
  - title: 🎯 功能关联
    details: 从结构视角解读蛋白质生物学功能的实现机制
  - title: 📚 开源免费
    details: 教程与代码全托管于GitHub，无任何形式收费
  - title: 🔬 实战导向
    details: 结合PyMOL/ChimeraX等工具，注重实操能力培养
  - title: 📈 前沿同步
    details: 覆盖AlphaFold2、冷冻电镜等最新结构生物学技术
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/KinZivy.png',
    name: 'KinZivy',
    title: '项目负责人',
    links: [
      { icon: 'github', link: 'https://github.com/KinZivy' },
    ]
  },
  {
    avatar: 'https://www.github.com/Sm1les.png',
    name: '贡献者1',
    title: '核心开发者',
    links: [
      { icon: 'github', link: 'https://github.com/Sm1les' },
    ]
  }
]
</script>

<h2 align="center">核心团队</h2>
<VPTeamMembers size="small" :members />
