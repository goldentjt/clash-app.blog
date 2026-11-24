<template>
  <ArticleLayout :page="pageMeta">
    <!-- Intro Box -->
    <div class="p-4 rounded-custom bg-[#F4ECE1] border border-[#B08758]/50 text-xs text-[#79553D] leading-relaxed">
      <strong>核心任务与验证口径：</strong> 本文针对 <strong>Clash Verge Rev应用指南：安装、配置与更新</strong> 进行全流程图解与实操复盘。正文涵盖具体配置步骤、预期结果判定与异常恢复方案，所有涉及第三方服务的链接均严格添加 <code>rel="sponsored nofollow noopener"</code>，确保合规透明。
    </div>

    <!-- Section 1 -->
    <section id="section-1" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        1. 确认项目和版本（附各端官方与加速下载）
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        <strong>Clash Verge Rev</strong> 采用 Rust + Tauri 构建，内置 Mihomo (Meta) 内核，全平台跨系统支持。以下整理自官方 Releases 与加速镜像（外链均带 <code>rel="sponsored nofollow noopener"</code>）：
      </p>

      <!-- Verge Rev Download Channels -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
        <div class="p-3 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] space-y-1.5">
          <div class="font-bold text-[#493A30] flex items-center justify-between">
            <span>🪟 Windows (v2.5.5)</span>
            <span class="text-[10px] text-[#79553D]">x64 / ARM64</span>
          </div>
          <div class="space-y-1 pt-1">
            <div class="flex items-center justify-between">
              <span class="text-[11px] text-[#79553D]">x64 安装包:</span>
              <div class="flex gap-1">
                <a href="https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_x64-setup.exe" target="_blank" rel="sponsored nofollow noopener" class="px-1.5 py-0.5 rounded bg-[#79553D] text-white text-[10px] font-bold hover:bg-[#5C3E2A]">官方</a>
                <a href="https://ghfast.top/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_x64-setup.exe" target="_blank" rel="sponsored nofollow noopener" class="px-1.5 py-0.5 rounded bg-[#EBDCCB] text-[#79553D] text-[10px] font-medium hover:bg-[#E4D8C7]">镜像</a>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-[11px] text-[#79553D]">ARM64 安装包:</span>
              <div class="flex gap-1">
                <a href="https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_arm64-setup.exe" target="_blank" rel="sponsored nofollow noopener" class="px-1.5 py-0.5 rounded bg-[#79553D] text-white text-[10px] font-bold hover:bg-[#5C3E2A]">官方</a>
                <a href="https://ghfast.top/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_arm64-setup.exe" target="_blank" rel="sponsored nofollow noopener" class="px-1.5 py-0.5 rounded bg-[#EBDCCB] text-[#79553D] text-[10px] font-medium hover:bg-[#E4D8C7]">镜像</a>
              </div>
            </div>
          </div>
        </div>

        <div class="p-3 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] space-y-1.5">
          <div class="font-bold text-[#493A30] flex items-center justify-between">
            <span>🍎 macOS (v2.5.5)</span>
            <span class="text-[10px] text-[#79553D]">M系列 / Intel</span>
          </div>
          <div class="space-y-1 pt-1">
            <div class="flex items-center justify-between">
              <span class="text-[11px] text-[#79553D]">Apple 芯片:</span>
              <div class="flex gap-1">
                <a href="https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_aarch64.dmg" target="_blank" rel="sponsored nofollow noopener" class="px-1.5 py-0.5 rounded bg-[#79553D] text-white text-[10px] font-bold hover:bg-[#5C3E2A]">官方</a>
                <a href="https://ghfast.top/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_aarch64.dmg" target="_blank" rel="sponsored nofollow noopener" class="px-1.5 py-0.5 rounded bg-[#EBDCCB] text-[#79553D] text-[10px] font-medium hover:bg-[#E4D8C7]">镜像</a>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-[11px] text-[#79553D]">Intel 芯片:</span>
              <div class="flex gap-1">
                <a href="https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_x64.dmg" target="_blank" rel="sponsored nofollow noopener" class="px-1.5 py-0.5 rounded bg-[#79553D] text-white text-[10px] font-bold hover:bg-[#5C3E2A]">官方</a>
                <a href="https://ghfast.top/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_x64.dmg" target="_blank" rel="sponsored nofollow noopener" class="px-1.5 py-0.5 rounded bg-[#EBDCCB] text-[#79553D] text-[10px] font-medium hover:bg-[#E4D8C7]">镜像</a>
              </div>
            </div>
          </div>
        </div>

        <div class="p-3 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] space-y-1.5">
          <div class="font-bold text-[#493A30] flex items-center justify-between">
            <span>🐧 Linux (v2.5.5)</span>
            <span class="text-[10px] text-[#79553D]">x86 / ARM deb</span>
          </div>
          <div class="space-y-1 pt-1">
            <div class="flex items-center justify-between">
              <span class="text-[11px] text-[#79553D]">x86-64 .deb:</span>
              <div class="flex gap-1">
                <a href="https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_amd64.deb" target="_blank" rel="sponsored nofollow noopener" class="px-1.5 py-0.5 rounded bg-[#79553D] text-white text-[10px] font-bold hover:bg-[#5C3E2A]">官方</a>
                <a href="https://ghfast.top/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_amd64.deb" target="_blank" rel="sponsored nofollow noopener" class="px-1.5 py-0.5 rounded bg-[#EBDCCB] text-[#79553D] text-[10px] font-medium hover:bg-[#E4D8C7]">镜像</a>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-[11px] text-[#79553D]">ARM64 .deb:</span>
              <div class="flex gap-1">
                <a href="https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_arm64.deb" target="_blank" rel="sponsored nofollow noopener" class="px-1.5 py-0.5 rounded bg-[#79553D] text-white text-[10px] font-bold hover:bg-[#5C3E2A]">官方</a>
                <a href="https://ghfast.top/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_arm64.deb" target="_blank" rel="sponsored nofollow noopener" class="px-1.5 py-0.5 rounded bg-[#EBDCCB] text-[#79553D] text-[10px] font-medium hover:bg-[#E4D8C7]">镜像</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2 -->
    <section id="section-2" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        2. 完成首次任务
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        本指南将带你完整走一遍 Clash Verge Rev 的全套关键实操：从官网 Release 页面识别最新的稳定发布版本（当前建议选用 v1.7.7 及以上稳定版），到完成界面的主题美化与语言设置；从订阅链接的拖拽导入与定时刷新配置，到 Service Mode 系统服务模式的安装与 TUN 模式的开启。
      </p>

      <!-- Embedded Diagram Viewer (Animations 2, 3, 7, 10) -->
      <DiagramViewer
        title="Clash Verge Rev 核心功能架构与操作路径全景图"
        appState="已就绪 - 规则配置正常"
        calloutHint="订阅管理-代理策略-系统设置-服务扩展闭环"
        :steps="diagramSteps"
      />
    </section>

    <!-- Section 3 -->
    <section id="section-3" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        3. 备份更新与卸载
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        进阶玩法中，Clash Verge Rev 还提供了无与伦比的 **Merge（扩展合并配置）** 与 **Script（JavaScript 规则脚本）** 功能。通过编写轻量的小脚本，你可以在不修改原始机场订阅的前提下，动态向配置注入自定义的屏蔽规则、私有 DNS 甚至自定义策略组，实现千人千面的极客级定制。
      </p>

      <TipNote title="如何利用 Verge 的 Merge 功能为 OpenAI 强制指定专线节点？">
        <p>在 Verge 的「订阅」页面下方新建一个 Merge 扩展配置，写入：
```yaml
prepend-rules:
  - DOMAIN-SUFFIX,openai.com,极连云-日本专线
  - DOMAIN-SUFFIX,claude.ai,U1S1-香港原生
```
保存后，无论机场订阅如何刷新变动，你的 ChatGPT 流量都将永远优先走你指定的顶级专线！</p>
      </TipNote>
    </section>

    <!-- Section 4: Checklist (Animation 8) -->
    <section id="section-4" class="space-y-4">
      <h3 class="text-lg font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        本机完成任务后的检查项
      </h3>
      <Checklist
        title="Clash Verge Rev应用指南：安装、配置与更新 - 实施自检清单"
        :items="checklistItems"
      />
    </section>

    
  </ArticleLayout>
</template>

<script setup lang="ts">
import { PAGES } from '~/data/pages'

const pageMeta = PAGES.find(p => p.path === '/verge-rev')!

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
    "title": "下载安装并完成初始首选项配置",
    "desc": "安装完成后打开设置，可切换为「奶油咖啡 / 浅色 / 深色」主题，开启开机自启。"
  },
  {
    "num": 2,
    "title": "订阅导入与自动更新策略配置",
    "desc": "在「订阅」添加机场 URL，设置更新间隔 1440 分钟，并右键点击应用规则配置。"
  },
  {
    "num": 3,
    "title": "安装 Service Mode 激活系统级 TUN 网卡",
    "desc": "点击设置中的 Service Mode 安装服务，开启 Tun Mode 获得整机全流量透明加速。"
  }
]
const checklistItems = [
  {
    "text": "客户端运行版本在 v1.7.7 以上，界面中文渲染完整无乱码",
    "tip": "确保获得最新的安全补丁与协议优化"
  },
  {
    "text": "在「订阅」中成功保存并激活了至少一套主力机场配置文件",
    "tip": "卡片左侧出现激活高亮即表示生效"
  },
  {
    "text": "系统托盘图标状态与「System Proxy」开关同步良好",
    "tip": "可通过右键托盘小图标一键启停系统代理"
  },
  {
    "text": "卸载前已在设置中点击 Uninstall Service 彻底卸载服务驱动",
    "tip": "保持系统环境干净清爽"
  }
]
</script>
