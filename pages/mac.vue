<template>
  <ArticleLayout :page="pageMeta">
    <!-- Intro Box -->
    <div class="p-4 rounded-custom bg-[#F4ECE1] border border-[#B08758]/50 text-xs text-[#79553D] leading-relaxed">
      <strong>核心任务与验证口径：</strong> 本文针对 <strong>Clash Mac下载与使用：架构、应用与迁移</strong> 进行全流程图解与实操复盘。正文涵盖具体配置步骤、预期结果判定与异常恢复方案，开源客户端下载遵循 nofollow/noopener 规范，商业推广入口遵循 sponsored 规范，确保合规透明。
    </div>

    <!-- Section 1 -->
    <section id="section-1" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        1. 核对Intel或Apple架构与下载通道
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        macOS 请根据芯片严格区分架构（终端执行 <code>uname -m</code> 核对）：Apple Silicon 芯片选 <code>aarch64.dmg</code>，老款 Intel 芯片选 <code>x64.dmg</code>。收录自官方 Releases 与国内高速镜像：
      </p>

      <!-- Mac Download Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        <div class="p-3 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] space-y-2 text-xs">
          <div class="flex items-center justify-between">
            <strong class="text-[#493A30]">Clash Verge Rev (Apple 芯片)</strong>
            <span class="text-[10px] px-1.5 py-0.2 rounded bg-[#79553D] text-white">M1~M4 原生</span>
          </div>
          <p class="text-[11px] text-[#79553D]">aarch64 原生编译，低功耗持久续航，支持 TUN</p>
          <div class="flex items-center gap-2 pt-1">
            <a
              href="https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_aarch64.dmg"
              target="_blank"
              rel="nofollow noopener"
              class="px-2.5 py-1 rounded bg-[#79553D] text-white text-[11px] font-bold hover:bg-[#5C3E2A] shadow-xs"
            >
              官方原版下载
            </a>
            <a
              href="https://ghfast.top/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_aarch64.dmg"
              target="_blank"
              rel="nofollow noopener"
              class="px-2 py-1 rounded bg-[#EBDCCB] text-[#79553D] text-[11px] font-medium hover:bg-[#E4D8C7] shadow-xs"
            >
              镜像加速
            </a>
          </div>
        </div>

        <div class="p-3 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] space-y-2 text-xs">
          <div class="flex items-center justify-between">
            <strong class="text-[#493A30]">Clash Verge Rev (Intel 芯片)</strong>
            <span class="text-[10px] px-1.5 py-0.2 rounded bg-[#B08758] text-white">2020前老Mac</span>
          </div>
          <p class="text-[11px] text-[#79553D]">x64 架构专属安装包，兼容旧款 Intel MacBook/iMac</p>
          <div class="flex items-center gap-2 pt-1">
            <a
              href="https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_x64.dmg"
              target="_blank"
              rel="nofollow noopener"
              class="px-2.5 py-1 rounded bg-[#79553D] text-white text-[11px] font-bold hover:bg-[#5C3E2A] shadow-xs"
            >
              官方原版下载
            </a>
            <a
              href="https://ghfast.top/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_x64.dmg"
              target="_blank"
              rel="nofollow noopener"
              class="px-2 py-1 rounded bg-[#EBDCCB] text-[#79553D] text-[11px] font-medium hover:bg-[#E4D8C7] shadow-xs"
            >
              镜像加速
            </a>
          </div>
        </div>

        <div class="p-3 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] space-y-2 text-xs">
          <div class="flex items-center justify-between">
            <strong class="text-[#493A30]">FlClash Mac (Apple 芯片)</strong>
            <span class="text-[10px] px-1.5 py-0.2 rounded bg-[#EBDCCB] text-[#79553D]">Flutter极简</span>
          </div>
          <p class="text-[11px] text-[#79553D]">优雅极简备选，适合追求轻量无打扰界面的 Mac 用户</p>
          <div class="flex items-center gap-2 pt-1">
            <a
              href="https://github.com/chen08209/FlClash/releases/download/v0.8.98/FlClash-0.8.98-macos-arm64.dmg"
              target="_blank"
              rel="nofollow noopener"
              class="px-2.5 py-1 rounded bg-[#79553D] text-white text-[11px] font-bold hover:bg-[#5C3E2A] shadow-xs"
            >
              官方原版下载
            </a>
            <a
              href="https://ghfast.top/https://github.com/chen08209/FlClash/releases/download/v0.8.98/FlClash-0.8.98-macos-arm64.dmg"
              target="_blank"
              rel="nofollow noopener"
              class="px-2 py-1 rounded bg-[#EBDCCB] text-[#79553D] text-[11px] font-medium hover:bg-[#E4D8C7] shadow-xs"
            >
              镜像加速
            </a>
          </div>
        </div>

        <div class="p-3 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] space-y-2 text-xs">
          <div class="flex items-center justify-between">
            <strong class="text-[#493A30]">全平台下载中心</strong>
            <span class="text-[10px] px-1.5 py-0.2 rounded bg-[#EBDCCB] text-[#79553D]">多端矩阵</span>
          </div>
          <p class="text-[11px] text-[#79553D]">涵盖 Windows、安卓、苹果 iOS 及路由器的全量清单</p>
          <div class="pt-1">
            <NuxtLink
              to="/download"
              class="px-3 py-1 rounded bg-[#79553D] text-white text-[11px] font-bold hover:bg-[#5C3E2A] shadow-xs inline-block"
            >
              进入全量下载列表 →
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2 -->
    <section id="section-2" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        2. 安装与首次运行
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        由于开源项目未向苹果支付每年高昂的开发者公证签名费，macOS Gatekeeper（门禁系统）首次打开时经常会弹出「“Clash Verge”已损坏，您应该将它移到废纸篓」或「无法打开，因为无法验证开发者」的阻断提示。这并非软件真正损坏，而是苹果的安全拦截。只需打开系统「终端（Terminal）」，执行一行权限命令：`sudo xattr -rd com.apple.quarantine /Applications/Clash\ Verge.app` 即可永久解除拦截顺利打开。
      </p>

      <!-- Embedded Diagram Viewer (Animations 2, 3, 7, 10) -->
      <DiagramViewer
        title="macOS 架构匹配与 Gatekeeper 放行图解"
        appState="已就绪 - 规则配置正常"
        calloutHint="Apple Silicon 原生 DMG 安装与隔离属性解除"
        :steps="diagramSteps"
      />
    </section>

    <!-- Section 3 -->
    <section id="section-3" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        3. 备份和卸载
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        在 macOS 下，Clash Verge Rev 支持通过菜单栏图标（MenuBar）常驻，点击小猫咪或图标即可快捷切线，轻巧优雅。若需卸载，先关闭系统代理，然后删除 `/Applications/Clash Verge.app` 以及 `~/Library/Application Support/clash-verge` 即可彻底清除配置。
      </p>

      <TipNote title="Mac 睡眠唤醒后网络经常断连怎么办？">
        <p>macOS 的深度睡眠机制（Power Nap）会休眠网络连接，导致长连接节点掉线。进入 Clash Verge 设置，开启「断网后自动恢复连接」，或者将主要策略组设置为自动测速故障转移，Mac 唤醒后 2 秒内即可全自动重连。</p>
      </TipNote>
    </section>

    <!-- Section 4: Checklist (Animation 8) -->
    <section id="section-4" class="space-y-4">
      <h3 class="text-lg font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        本机完成任务后的检查项
      </h3>
      <Checklist
        title="Clash Mac下载与使用：架构、应用与迁移 - 实施自检清单"
        :items="checklistItems"
      />
    </section>

    
  </ArticleLayout>
</template>

<script setup lang="ts">
import { PAGES } from '~/data/pages'

const pageMeta = PAGES.find(p => p.path === '/mac')!

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
    "title": "下载 aarch64.dmg 并拖入应用程序",
    "desc": "M 系列芯片下载 aarch64.dmg，挂载后将 App 拖拽入 Applications 文件夹。"
  },
  {
    "num": 2,
    "title": "解除 Gatekeeper 隔离属性放行",
    "desc": "若提示已损坏，在终端执行 sudo xattr -rd com.apple.quarantine 应用路径解除隔离。"
  },
  {
    "num": 3,
    "title": "安装系统辅助工具授权 Helper",
    "desc": "在系统偏好设置中允许辅助工具运行，开启菜单栏常驻与系统代理接管。"
  }
]
const checklistItems = [
  {
    "text": "在「关于本机」已核对芯片类型，M 系列芯片确保使用 aarch64 原生版本",
    "tip": "活动监视器中种类显示为 Apple 即代表原生运行"
  },
  {
    "text": "掌握 sudo xattr 终端命令，能熟练化解已损坏误报弹窗",
    "tip": "开源客户端常见的安全策略放行手段"
  },
  {
    "text": "在「系统设置」→「隐私与安全性」中为 Clash 授予必要网络控制权限",
    "tip": "确保系统代理与 Helper 正常生效"
  },
  {
    "text": "日常使用善用顶部菜单栏图标快速测速切线与启停代理",
    "tip": "无需每次打开沉重的大窗口"
  }
]
</script>
