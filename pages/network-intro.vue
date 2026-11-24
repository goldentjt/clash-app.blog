<template>
  <ArticleLayout :page="pageMeta">
    <!-- Intro Box -->
    <div class="p-4 rounded-custom bg-[#F4ECE1] border border-[#B08758]/50 text-xs text-[#79553D] leading-relaxed">
      <strong>核心任务与验证口径：</strong> 本文针对 <strong>科学上网应用入门：软件安装后还需要什么</strong> 进行全流程图解与实操复盘。正文涵盖具体配置步骤、预期结果判定与异常恢复方案，开源软件与代码项目遵循 nofollow/noopener 规范，商业推广合作遵循 sponsored 规范，确保来源合规透明。
    </div>

    <!-- Section 1 -->
    <section id="section-1" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        1. 应用负责什么
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        许多刚刚接触科学上网的完全零基础新手，在网上千辛万苦下载并安装好了 Clash 软件，打开后兴冲冲地访问 Google 或 YouTube，却发现依然一片空白无法打开。很多人因此以为“软件坏了”或者“被骗了”。产生这种误解的根本原因，是未曾厘清**「客户端应用」与「机场节点服务」之间的本质从属关系**。
      </p>
    </section>

    <!-- Section 2 -->
    <section id="section-2" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        2. 配置和服务负责什么
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        用一个最为生动形象的比喻来解释：
- **Clash 客户端就像是一辆性能极佳的顶级跑车（工具 / 车辆）：** 它负责掌控方向盘、规划走哪条路线（规则分流）、控制车速与仪表盘（测速监控）。但这辆跑车刚出厂时，油箱里是**完全空置**的；
- **机场节点服务就像是汽油（能源 / 燃料）：** 机场在海外租用了高速物理服务器和 IPLC 专线，提供了源源不断的数据通道。只有将机场提供的订阅链接（汽油）加注进 Clash（跑车）中，跑车才能轰鸣上路，载着你秒开 4K 视频！
      </p>

      <!-- Embedded Diagram Viewer (Animations 2, 3, 7, 10) -->
      <DiagramViewer
        title="科学上网新手认知闭环：跑车（软件）与汽油（服务）模型图"
        appState="已就绪 - 规则配置正常"
        calloutHint="软件分流与海外节点链路协同闭环"
        :steps="diagramSteps"
      />
    </section>

    <!-- Section 3 -->
    <section id="section-3" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        3. 按平台开始使用
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        因此，完整走完科学上网闭环极其简单，只需三大步：
**第一步：** 挑选并下载适配自己设备操作系统的 Clash 客户端（如 Windows 选 Clash Verge Rev，安卓选 CMFA）；
**第二步：** 选购一家靠谱高速的机场服务（新手推荐直接选用本站精选的 **U1S1** 或 **极连云**），获取专属订阅链接；
**第三步：** 将订阅链接粘贴进软件一键导入，开启系统代理，从此畅游全球互联网络！
      </p>

      <TipNote title="完全零基础新手选型三步极简建议">
        <p>1. 电脑端直接下载本站推荐的 Clash Verge Rev；2. 机场直接选 U1S1（长期自用稳定）或 极连云（IPLC专线极低延迟）；3. 复制订阅到软件内点击 Save，点击开启 System Proxy，即可在 5 分钟内彻底搞定！</p>
      </TipNote>
    </section>

    <!-- Section 4: Checklist (Animation 8) -->
    <section id="section-4" class="space-y-4">
      <h3 class="text-lg font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        本机完成任务后的检查项
      </h3>
      <Checklist
        title="科学上网应用入门：软件安装后还需要什么 - 实施自检清单"
        :items="checklistItems"
      />
    </section>

    
  </ArticleLayout>
</template>

<script setup lang="ts">
import { PAGES } from '~/data/pages'

const pageMeta = PAGES.find(p => p.path === '/network-intro')!

useHead({
  title: pageMeta.title,
  meta: [
    { name: 'description', content: pageMeta.description },
    { name: 'keywords', content: pageMeta.keywords.join(', ') }
  ],
  link: [
    { rel: 'canonical', href: `https://clash-app.blog${pageMeta.path}` }
  ]
})

const diagramSteps = [
  {
    "num": 1,
    "title": "下载并安装本地分流软件（跑车）",
    "desc": "在 Windows、Mac 或手机上安装 Clash 应用，完成基础网络权限授予。"
  },
  {
    "num": 2,
    "title": "选购可靠专线机场服务（汽油）",
    "desc": "根据自身需求（追剧、AI开发、外贸）选购套餐，获取专属 Clash 订阅链接。"
  },
  {
    "num": 3,
    "title": "注入订阅并开启系统代理（出发）",
    "desc": "在客户端导入配置，开启 System Proxy，立刻解锁全网 4K 极速体验。"
  }
]
const checklistItems = [
  {
    "text": "已深刻理解「软件是本地分流工具，节点是海外服务网络」的本质区别",
    "tip": "再也不会误以为光装软件就能翻墙"
  },
  {
    "text": "按自己的设备选择了一条正确的平台客户端路线",
    "tip": "Win/Mac/Android/iOS 教程齐全"
  },
  {
    "text": "在购买机场服务时核对了其是否包含 Clash 通用订阅导入能力",
    "tip": "本站精选的 28 家机场全量支持"
  },
  {
    "text": "清楚如何根据日常用途（4K流媒体/ChatGPT/外贸）挑选合适的节点线路",
    "tip": "参考本站 4 大主力机场深度对比"
  }
]
</script>
