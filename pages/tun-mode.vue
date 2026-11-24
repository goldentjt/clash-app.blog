<template>
  <ArticleLayout :page="pageMeta">
    <!-- Intro Box -->
    <div class="p-4 rounded-custom bg-[#F4ECE1] border border-[#B08758]/50 text-xs text-[#79553D] leading-relaxed">
      <strong>核心任务与验证口径：</strong> 本文针对 <strong>Clash应用TUN：安装组件与系统权限怎样核对</strong> 进行全流程图解与实操复盘。正文涵盖具体配置步骤、预期结果判定与异常恢复方案，所有涉及第三方服务的链接均严格添加 <code>rel="sponsored nofollow noopener"</code>，确保合规透明。
    </div>

    <!-- Section 1 -->
    <section id="section-1" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        1. 确认平台支持
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        传统的「系统代理（System Proxy）」仅通过修改操作系统注册表或网络设置，通知浏览器等遵循标准 HTTP/SOCKS 协议的软件。但许多软件（例如 Windows 终端命令行 git/curl、部分外服游戏、UWP 应用、开发工具 Docker/NodeJS）根本不遵循系统代理，导致出现“开了代理但终端依旧无法 clone 代码”的痛点。TUN（虚拟网卡）模式正是为了彻底根治这一局限而生。
      </p>
    </section>

    <!-- Section 2 -->
    <section id="section-2" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        2. 查项目的接入前提
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        启用 TUN 模式时，Clash 会在操作系统中创建一个高优先级的虚拟网络适配器（Virtual Network Interface），直接在网络第 3 层（IP 层）截获整机进出的所有原始网络数据包，并通过驱动程序将其透明封装进代理隧道中。因此，开启 TUN 模式后，电脑上的任何软件、游戏或命令行工具，无需任何额外配置即可自动实现全局科学上网。
      </p>

      <!-- Embedded Diagram Viewer (Animations 2, 3, 7, 10) -->
      <DiagramViewer
        title="TUN 模式网络协议栈透明截获原理图解"
        appState="已就绪 - 规则配置正常"
        calloutHint="OS 网卡驱动层原始 IP 数据包接管与路由"
        :steps="diagramSteps"
      />
    </section>

    <!-- Section 3 -->
    <section id="section-3" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        3. 启用和关闭验证
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        由于 TUN 模式深入操作系统底层网卡驱动，因此必须具备系统管理员权限（Windows 下需安装 Service Mode 服务模式驱动，macOS 下需安装系统辅助拓展 Helper）。开启前请核验系统安全软件未对虚拟网卡驱动进行拦截。
      </p>

      <TipNote title="关闭 TUN 模式后出现网络无法解析怎么办？">
        <p>请在 Clash 界面中先点击关闭「Tun Mode」，等待 3 秒驱动卸载虚拟路由；若异常强行重启导致断网，可进入「网络连接」，找到名为 Wintun 的适配器右键点击「禁用」，并重置本地 DNS 为 114.114.114.114 或 8.8.8.8。</p>
      </TipNote>
    </section>

    <!-- Section 4: Checklist (Animation 8) -->
    <section id="section-4" class="space-y-4">
      <h3 class="text-lg font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        本机完成任务后的检查项
      </h3>
      <Checklist
        title="Clash应用TUN：安装组件与系统权限怎样核对 - 实施自检清单"
        :items="checklistItems"
      />
    </section>

    
  </ArticleLayout>
</template>

<script setup lang="ts">
import { PAGES } from '~/data/pages'

const pageMeta = PAGES.find(p => p.path === '/tun-mode')!

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
    "title": "安装并启动系统服务模式（Service Mode）",
    "desc": "在 Clash Verge Rev 设置中，点击 Service Mode 旁的「Install」，弹出 UAC 提权时点击允许，图标变绿即表示成功。"
  },
  {
    "num": 2,
    "title": "开启 TUN Mode 开关",
    "desc": "在主界面或设置中打开「Tun Mode」开关，操作系统网络连接中将出现名为 Mihomo / Clash 的虚拟适配器。"
  },
  {
    "num": 3,
    "title": "终端执行 curl 命令验证接管效果",
    "desc": "打开系统 cmd 或 Terminal，无需设置 export http_proxy，直接执行 curl ipinfo.io 即可返回代理 IP。"
  }
]
const checklistItems = [
  {
    "text": "Windows 系统中已成功安装 Service Mode 服务模式并处于运行状态",
    "tip": "绿色盾牌图标代表守护进程已加载"
  },
  {
    "text": "在网络适配器列表中能看到由 Clash 创建的虚拟网卡",
    "tip": "一般显示为 wintun 或 Clash TAP/TUN"
  },
  {
    "text": "终端执行网络请求已自动走代理，无需额外手动配置环境变量",
    "tip": "命令行与开发环境体验极大提升"
  },
  {
    "text": "日常不建议 TUN 模式与普通系统代理同时强制开启并叠加其他 VPN",
    "tip": "可能引发网关路由环路冲突"
  }
]
</script>
