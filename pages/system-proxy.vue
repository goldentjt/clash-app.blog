<template>
  <ArticleLayout :page="pageMeta">
    <!-- Intro Box -->
    <div class="p-4 rounded-custom bg-[#F4ECE1] border border-[#B08758]/50 text-xs text-[#79553D] leading-relaxed">
      <strong>核心任务与验证口径：</strong> 本文针对 <strong>Clash应用系统代理：启动、开机、退出与网络残留排查</strong> 进行全流程图解与实操复盘。正文涵盖系统代理机制、异常断电导致的代理死锁恢复与全平台网络残留排查命令，开源软件遵循 nofollow/noopener 规范，商业推广入口遵循 sponsored 规范，确保合规透明。
    </div>

    <!-- Section 1 -->
    <section id="section-1" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        1. 系统设置与应用范围
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        「系统代理（System Proxy）」是几乎所有代理客户端最日常的接入模式。当你点击开启 Clash 的系统代理时，软件并不会侵入你的网络硬件，而是通过调用操作系统的标准网络配置 API，向系统的网络代理协议栈登记一个本地代理服务器地址（默认通常为 <code>127.0.0.1:7897</code> 或 <code>7890</code>）。
      </p>
    </section>

    <!-- Section 2 -->
    <section id="section-2" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        2. 启动后的验证
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        系统代理的**作用范围**主要覆盖遵循操作系统通用代理规范的应用程序，包括 Chrome、Edge、Safari、Firefox 等浏览器及常用办公软件。但必须清楚其边界：命令行（cmd/Terminal）、未适配系统代理的外服游戏客户端以及底层 UDP 数据包，默认不会走系统代理，需要开启 TUN 模式由虚拟网卡全局接管。
      </p>

      <!-- Embedded Diagram Viewer (Animations 2, 3, 7, 10) -->
      <DiagramViewer
        title="操作系统注册表代理开关与 Clash 监听机制流程图"
        appState="已就绪 - 规则配置正常"
        calloutHint="正常注册/撤销代理与非正常关机残留导致断网的对比"
        :steps="diagramSteps"
      />
    </section>

    <!-- Section 3: 卸载或停用后网络残留排查 -->
    <section id="section-3" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        3. 停用或卸载后的网络残留检查与全平台急救
      </h2>
      <div class="text-xs sm:text-sm text-[#493A30] leading-relaxed space-y-3">
        <p>
          系统代理最大的常见故障发生在**「非正常退出」**或**「直接卸载软件」**场景：在代理开启状态下强杀进程、关机或卸载，操作系统仍保留了指向 <code>127.0.0.1</code> 的代理配置，导致所有浏览器报错“无法连接到代理服务器（ERR_PROXY_CONNECTION_FAILED）”。各平台排查清理步骤：
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
          <div class="p-2.5 rounded bg-[#FFFCF5] border border-[#E4D8C7] space-y-1.5">
            <strong class="text-[#79553D]">🪟 Windows 清理方法</strong>
            <p class="text-[11px] text-[#493A30]">Win + I -> 网络和 Internet -> 代理 -> 确保「使用代理服务器」关闭。</p>
            <p class="text-[10px] text-[#79553D]">快速急救（Win+R 执行）：</p>
            <code class="block bg-[#F2EAE1] p-1 rounded text-[10px] text-[#493A30] font-mono break-all">reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyEnable /t REG_DWORD /d 0 /f</code>
            <p class="text-[10px] text-[#79553D]">若曾用 TUN 模式：设备管理器 -> 网络适配器 -> 检查是否有残留 Wintun 网卡，如有右键卸载。</p>
          </div>

          <div class="p-2.5 rounded bg-[#FFFCF5] border border-[#E4D8C7] space-y-1.5">
            <strong class="text-[#79553D]">🍎 macOS 清理方法</strong>
            <p class="text-[11px] text-[#493A30]">系统设置 -> 网络 -> Wi-Fi -> 详细信息 -> 代理 -> 取消勾选「网页代理 (HTTP)」与「安全网页代理 (HTTPS)」。</p>
            <p class="text-[10px] text-[#79553D]">终端一键重置指令：</p>
            <code class="block bg-[#F2EAE1] p-1 rounded text-[10px] text-[#493A30] font-mono break-all">networksetup -setwebproxystate "Wi-Fi" off && networksetup -setsecurewebproxystate "Wi-Fi" off</code>
          </div>

          <div class="p-2.5 rounded bg-[#FFFCF5] border border-[#E4D8C7] space-y-1.5">
            <strong class="text-[#79553D]">💻 终端 Shell 环境变量清理</strong>
            <p class="text-[11px] text-[#493A30]">若在 bash/zsh 终端执行 curl/git 仍提示连接拒绝，说明 shell 注入了代理变量。</p>
            <p class="text-[10px] text-[#79553D]">终端直接执行清理：</p>
            <code class="block bg-[#F2EAE1] p-1 rounded text-[10px] text-[#493A30] font-mono break-all">unset http_proxy https_proxy all_proxy ALL_PROXY</code>
            <p class="text-[10px] text-[#79553D]">检查 <code>~/.zshrc</code> 或 <code>~/.bashrc</code> 是否有残留 export 语句并删除。</p>
          </div>
        </div>
      </div>
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
