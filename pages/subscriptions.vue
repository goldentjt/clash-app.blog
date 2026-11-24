<template>
  <ArticleLayout :page="pageMeta">
    <!-- Intro Box -->
    <div class="p-4 rounded-custom bg-[#F4ECE1] border border-[#B08758]/50 text-xs text-[#79553D] leading-relaxed">
      <strong>核心任务与验证口径：</strong> 本文针对 <strong>Clash订阅管理：跨设备添加与刷新</strong> 进行全流程图解与实操复盘。正文涵盖具体配置步骤、预期结果判定与异常恢复方案，所有涉及第三方服务的链接均严格添加 <code>rel="sponsored nofollow noopener"</code>，确保合规透明。
    </div>

    <!-- Section 1 -->
    <section id="section-1" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        1. 确认订阅授权
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        订阅链接（Subscription URL）是连接客户端与机场节点服务器的通信纽带。一个标准的 Clash 订阅链接由机场服务商动态生成，内置了鉴权密钥（Token）。客户端向该链接发起 HTTP GET 请求时，服务端会实时返回当前所有可用节点的状态、IP、端口以及预设的分流规则列表。
      </p>
    </section>

    <!-- Section 2 -->
    <section id="section-2" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        2. 分别导入
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        跨设备使用订阅时，需注意不同平台的添加机制：Windows/macOS 桌面端支持直接粘贴 URL 并设置「自动更新间隔」（推荐设置为 24 小时或 12 小时一次）；Android 手机端可在 Clash Meta for Android 中新建配置输入 URL；iOS 端则可在 Shadowrocket 或 Stash 中选择「类型: Subscribe」一键拉取。
      </p>

      <!-- Embedded Diagram Viewer (Animations 2, 3, 7, 10) -->
      <DiagramViewer
        title="跨设备订阅同步与防阻断刷新时序图"
        appState="已就绪 - 规则配置正常"
        calloutHint="订阅请求通过安全通道获取最新节点池"
        :steps="diagramSteps"
      />
    </section>

    <!-- Section 3 -->
    <section id="section-3" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        3. 更新和失效处理
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        当遇到订阅刷新失败（如提示 Socket Timeout 或 Status 500）时，先确认本地是否有可用的前置网络代理。若当前节点全部失效导致无法访问机场订阅域名，可尝试切换手机热点，或者登录机场后台临时开启「应急备用订阅通道」重新拉取节点列表。
      </p>

      <TipNote title="为什么有时不翻墙就无法更新订阅？">
        <p>部分机场的订阅分发服务器部署在海外且未被国内直接加速，当你的电脑完全断网或节点全失效时，就无法连接海外订阅服务器。建议在手机上保留一个稳定的轻量备用节点（或手机热点）用来拉取初始订阅。</p>
      </TipNote>
    </section>

    <!-- Section 4: Checklist (Animation 8) -->
    <section id="section-4" class="space-y-4">
      <h3 class="text-lg font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        本机完成任务后的检查项
      </h3>
      <Checklist
        title="Clash订阅管理：跨设备添加与刷新 - 实施自检清单"
        :items="checklistItems"
      />
    </section>

    
  </ArticleLayout>
</template>

<script setup lang="ts">
import { PAGES } from '~/data/pages'

const pageMeta = PAGES.find(p => p.path === '/subscriptions')!

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
    "title": "复制机场唯一专属订阅链接",
    "desc": "在机场控制台（如 U1S1、极连云、光年梯）复制专属 Clash 订阅链接，严防在公共群组公开展示。"
  },
  {
    "num": 2,
    "title": "按设备平台粘贴并设置自动更新",
    "desc": "在各设备客户端填入链接，设置更新周期（建议 1440 分钟/每天），确保节点变动自动同步。"
  },
  {
    "num": 3,
    "title": "处理订阅刷新异常与域名更换",
    "desc": "若机场因防封更换了订阅分发域名，及时在客户端编辑原配置中的 URL 地址即可恢复拉取。"
  }
]
const checklistItems = [
  {
    "text": "妥善保管个人专属订阅 URL，未在公共网页或论坛暴露包含 Token 的参数",
    "tip": "Token 泄露可能导致他人盗刷你的流量"
  },
  {
    "text": "在客户端中开启了「自动更新订阅」功能",
    "tip": "确保敏感时期能够自动获取抗封锁的新节点"
  },
  {
    "text": "确认订阅套餐尚未到期且月度流量有剩余额度",
    "tip": "流量耗尽会导致订阅拉取失败或节点无响应"
  },
  {
    "text": "测试多设备并发使用未超出机场设定的最大连接数限制",
    "tip": "多设备推荐选 浪网 或 FlyV 不限设备方案"
  }
]
</script>
