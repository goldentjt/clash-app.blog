<template>
  <ArticleLayout :page="pageMeta">
    <!-- Intro Box -->
    <div class="p-4 rounded-custom bg-[#F4ECE1] border border-[#B08758]/50 text-xs text-[#79553D] leading-relaxed">
      <strong>核心任务与验证口径：</strong> 本文针对 <strong>Clash订阅管理：跨设备添加、刷新与配置覆盖机制</strong> 进行全流程图解与实操复盘。正文涵盖跨端导入、订阅覆盖更新与本地自定义规则不被冲掉的解耦方案，开源软件遵循 nofollow/noopener 规范，商业推广入口遵循 sponsored 规范，确保合规透明。
    </div>

    <!-- Section 1 -->
    <section id="section-1" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        1. 确认订阅授权与多端导入
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        订阅链接（Subscription URL）是连接客户端与机场节点服务器的通信纽带。内置了鉴权密钥（Token），客户端通过 HTTP GET 获取包含最新节点与规则的 YAML 文件。各平台导入方式：
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-[#493A30]">
        <div class="p-2.5 rounded bg-[#FFFCF5] border border-[#E4D8C7] space-y-1">
          <strong class="text-[#79553D]">💻 桌面端 (Verge Rev)</strong>
          <p class="text-[11px]">进入「Profiles / 订阅」，粘贴 URL 并点击 Save，建议设置自动更新为 1440 分钟（24小时）。</p>
        </div>
        <div class="p-2.5 rounded bg-[#FFFCF5] border border-[#E4D8C7] space-y-1">
          <strong class="text-[#79553D]">📱 Android (CMFA)</strong>
          <p class="text-[11px]">点击「配置」-「新配置」-「URL导入」，粘贴链接并点击右上角保存，返回勾选启用。</p>
        </div>
        <div class="p-2.5 rounded bg-[#FFFCF5] border border-[#E4D8C7] space-y-1">
          <strong class="text-[#79553D]">🍎 iOS (小火箭/Stash)</strong>
          <p class="text-[11px]">选择类型为 Subscribe，粘贴 URL 下载。更新时下拉列表即可同步远端最新节点变动。</p>
        </div>
      </div>
    </section>

    <!-- Section 2: 核心难点：配置覆盖 vs 本地修改 -->
    <section id="section-2" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        2. 配置覆盖机制：为什么直接改 YAML 刷新会被冲掉？
      </h2>
      <div class="text-xs sm:text-sm text-[#493A30] leading-relaxed space-y-2">
        <p>
          很多新手在订阅的 YAML 文件中手动添加了国内公司内网直连规则，但只要客户端一点击「Update / 刷新订阅」，所有手动修改就会<strong>被远程下发的全新 YAML 彻底覆盖清空</strong>。这是因为订阅更新是全量覆写机制。
        </p>

        <div class="p-3 rounded-custom bg-[#FFFDF9] border border-[#B08758] space-y-2 text-xs">
          <div class="font-bold text-[#79553D]">💡 两种推荐解耦方案（修改永久生效）：</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
            <div class="p-2 rounded bg-[#F9F5EC] border border-[#E4D8C7] space-y-1">
              <strong class="text-[#493A30]">方案 A：使用 Script / Merge 扩展配置</strong>
              <p class="text-[#79553D]">在 Clash Verge Rev 中新建「Merge」或「Script」配置，在 <code>prepend-rules</code> 中写入自定义分流规则。客户端会在每次刷新订阅后动态将自定义规则合并在最前列，永不丢失。</p>
            </div>
            <div class="p-2 rounded bg-[#F9F5EC] border border-[#E4D8C7] space-y-1">
              <strong class="text-[#493A30]">方案 B：本地 Profile + proxy-providers</strong>
              <p class="text-[#79553D]">新建一个纯本地配置文件，分流规则与 DNS 永久固化在本地；将机场订阅 URL 写在 <code>proxy-providers</code> 中，只让节点列表自动更新，规则与节点彻底解耦。</p>
            </div>
          </div>
        </div>
      </div>

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
