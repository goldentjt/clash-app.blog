<template>
  <ArticleLayout :page="pageMeta">
    <!-- Intro Box -->
    <div class="p-4 rounded-custom bg-[#F4ECE1] border border-[#B08758]/50 text-xs text-[#79553D] leading-relaxed">
      <strong>核心任务与验证口径：</strong> 本文针对 <strong>Clash应用系统代理：启动、开机与退出怎样管理</strong> 进行全流程图解与实操复盘。正文涵盖具体配置步骤、预期结果判定与异常恢复方案，所有涉及第三方服务的链接均严格添加 <code>rel="sponsored nofollow noopener"</code>，确保合规透明。
    </div>

    <!-- Section 1 -->
    <section id="section-1" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        1. 系统设置与应用范围
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        「系统代理（System Proxy）」是几乎所有代理客户端最核心、最日常的接入模式。当你点击开启 Clash 的系统代理时，软件并不会侵入你的网络硬件，而是通过调用操作系统的标准系统 API，向系统的网络代理协议栈登记一个本地代理服务器地址（通常为 `127.0.0.1:7890`）。
      </p>
    </section>

    <!-- Section 2 -->
    <section id="section-2" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        2. 启动后的验证
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        系统代理的**作用范围**主要覆盖遵循操作系统通用代理规范的应用程序，包括：Chrome、Edge、Safari、Firefox（默认跟随系统）等主流浏览器，以及大部分桌面办公软件。但必须清楚其边界：命令行（cmd/Terminal）、部分未适配系统代理的特定外服游戏客户端、以及底层 UDP 数据包，默认并不会走系统代理，这类流量需交由 TUN 模式接管。
      </p>

      <!-- Embedded Diagram Viewer (Animations 2, 3, 7, 10) -->
      <DiagramViewer
        title="操作系统注册表代理开关与 Clash 监听机制流程图"
        appState="已就绪 - 规则配置正常"
        calloutHint="正常注册/撤销代理与非正常关机残留导致断网的对比"
        :steps="diagramSteps"
      />
    </section>

    <!-- Section 3 -->
    <section id="section-3" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        3. 退出与残留恢复
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        系统代理最大的潜在风险发生在**「非正常退出」**场景下：如果电脑在开启代理的状态下直接强制关机、拔电源、死机重启，或者 Clash 进程在后台被杀毒软件强制终止，操作系统注册表里的 `ProxyServer = 127.0.0.1:7890` 开关并未被正常注销。开机后由于 Clash 尚未启动，7890 端口无人监听，所有浏览器打开网页都会报错“代理服务器拒绝连接”。掌握残留手动清理是每个使用者的必备基本功。
      </p>

      <TipNote title="万能急救指令：一行命令重置 Windows 系统代理残留">
        <p>如果开机后发现所有网页打不开，且不想在设置里翻找，直接按下 `Win + R` 键，输入以下命令并回车，即可瞬间重置并清除所有代理残留：
`reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyEnable /t REG_DWORD /d 0 /f`</p>
      </TipNote>
    </section>

    <!-- Section 4: Checklist (Animation 8) -->
    <section id="section-4" class="space-y-4">
      <h3 class="text-lg font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        本机完成任务后的检查项
      </h3>
      <Checklist
        title="Clash应用系统代理：启动、开机与退出怎样管理 - 实施自检清单"
        :items="checklistItems"
      />
    </section>

    
  </ArticleLayout>
</template>

<script setup lang="ts">
import { PAGES } from '~/data/pages'

const pageMeta = PAGES.find(p => p.path === '/system-proxy')!

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
    "title": "开启系统代理并观察系统设置联动",
    "desc": "在客户端点击开启 System Proxy，打开 Windows 代理设置，观察代理服务器开关已自动开启。"
  },
  {
    "num": 2,
    "title": "确认浏览器流量已顺利经过分流规则",
    "desc": "访问海外网站观察 Clash 界面中的上传/下载速率是否有流量波动。"
  },
  {
    "num": 3,
    "title": "用完后在软件内规范关闭再退出程序",
    "desc": "绝不直接强杀进程，先关代理开关，确认 Windows 代理开关恢复关闭后再退出。"
  }
]
const checklistItems = [
  {
    "text": "深刻理解系统代理在本地 127.0.0.1:7890 监听的原理",
    "tip": "软件退出后该端口即关闭"
  },
  {
    "text": "掌握在 Win11/Win10 设置中快速手动关闭代理服务器的路径",
    "tip": "网络和 Internet -> 代理 -> 使用代理服务器关闭"
  },
  {
    "text": "在 macOS 下知道在「系统设置」→「网络」→「详细信息」→「代理」中排查",
    "tip": "确认 HTTP 与 HTTPS 代理复选框状态"
  },
  {
    "text": "日常养成良好习惯：关机或长时间不用前，顺手关闭 System Proxy",
    "tip": "彻底根除开机断网疑难杂症"
  }
]
</script>
