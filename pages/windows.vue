<template>
  <ArticleLayout :page="pageMeta">
    <!-- Intro Box -->
    <div class="p-4 rounded-custom bg-[#F4ECE1] border border-[#B08758]/50 text-xs text-[#79553D] leading-relaxed">
      <strong>核心任务与验证口径：</strong> 本文针对 <strong>Clash Windows下载与安装维护指南</strong> 进行全流程图解与实操复盘。正文涵盖具体配置步骤、CPU架构判断、预期结果判定与异常恢复方案，开源客户端下载遵循 nofollow/noopener 规范，商业推广入口遵循 sponsored 规范，确保合规透明。
    </div>

    <!-- Section 1 -->
    <section id="section-1" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        1. 匹配安装包与下载通道
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        Windows 平台当前首推社区深度维护的 <strong>Clash Verge Rev</strong>（内置 Mihomo 内核，支持 VLESS/Reality），备选轻量跨平台 <strong>FlClash</strong> 或经典多协议 <strong>v2rayN</strong>。收录自官方 Releases 与加速镜像：
      </p>

      <!-- Windows Download Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        <div class="p-3 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] space-y-2 text-xs">
          <div class="flex items-center justify-between">
            <strong class="text-[#493A30]">Clash Verge Rev (Win x64)</strong>
            <span class="text-[10px] px-1.5 py-0.2 rounded bg-[#79553D] text-white">首推主流</span>
          </div>
          <p class="text-[11px] text-[#79553D]">适合 Intel/AMD 64位电脑，Win10/11 安装包</p>
          <div class="flex items-center gap-2 pt-1">
            <a
              href="https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_x64-setup.exe"
              target="_blank"
              rel="nofollow noopener"
              class="px-2.5 py-1 rounded bg-[#79553D] text-white text-[11px] font-bold hover:bg-[#5C3E2A] shadow-xs"
            >
              官方原版下载
            </a>
            <a
              href="https://ghfast.top/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_x64-setup.exe"
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
            <strong class="text-[#493A30]">Clash Verge Rev (ARM64)</strong>
            <span class="text-[10px] px-1.5 py-0.2 rounded bg-[#B08758] text-white">高通骁龙</span>
          </div>
          <p class="text-[11px] text-[#79553D]">适合 Surface Pro / 骁龙 X Elite 掌机与轻薄本</p>
          <div class="flex items-center gap-2 pt-1">
            <a
              href="https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_arm64-setup.exe"
              target="_blank"
              rel="nofollow noopener"
              class="px-2.5 py-1 rounded bg-[#79553D] text-white text-[11px] font-bold hover:bg-[#5C3E2A] shadow-xs"
            >
              官方原版下载
            </a>
            <a
              href="https://ghfast.top/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_arm64-setup.exe"
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
            <strong class="text-[#493A30]">FlClash (Win x64)</strong>
            <span class="text-[10px] px-1.5 py-0.2 rounded bg-[#EBDCCB] text-[#79553D]">极简备选</span>
          </div>
          <p class="text-[11px] text-[#79553D]">基于 Flutter 的轻量跨平台 Clash，界面美观</p>
          <div class="flex items-center gap-2 pt-1">
            <a
              href="https://github.com/chen08209/FlClash/releases/download/v0.8.98/FlClash-0.8.98-windows-amd64-setup.exe"
              target="_blank"
              rel="nofollow noopener"
              class="px-2.5 py-1 rounded bg-[#79553D] text-white text-[11px] font-bold hover:bg-[#5C3E2A] shadow-xs"
            >
              官方原版下载
            </a>
            <a
              href="https://ghfast.top/https://github.com/chen08209/FlClash/releases/download/v0.8.98/FlClash-0.8.98-windows-amd64-setup.exe"
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
            <strong class="text-[#493A30]">v2rayN (Win64 绿色免安装)</strong>
            <span class="text-[10px] px-1.5 py-0.2 rounded bg-[#EBDCCB] text-[#79553D]">多协议通用</span>
          </div>
          <p class="text-[11px] text-[#79553D]">免安装解压即用，多核心与高兼容网络利器</p>
          <div class="flex items-center gap-2 pt-1">
            <a
              href="https://github.com/2dust/v2rayN/releases/download/7.24.9/v2rayN-windows-64.zip"
              target="_blank"
              rel="nofollow noopener"
              class="px-2.5 py-1 rounded bg-[#79553D] text-white text-[11px] font-bold hover:bg-[#5C3E2A] shadow-xs"
            >
              官方原版下载
            </a>
            <a
              href="https://ghfast.top/https://github.com/2dust/v2rayN/releases/download/7.24.9/v2rayN-windows-64.zip"
              target="_blank"
              rel="nofollow noopener"
              class="px-2 py-1 rounded bg-[#EBDCCB] text-[#79553D] text-[11px] font-medium hover:bg-[#E4D8C7] shadow-xs"
            >
              镜像加速
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2 -->
    <section id="section-2" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        2. 首次连接与设置
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        在安装环节，绝大多数 Intel 与 AMD 64位电脑请下载 `Clash.Verge_x64-setup.exe`；对于搭载高通骁龙处理器的全新 Windows on ARM 轻薄本，必须下载 `arm64-setup.exe` 才能发挥原生能效。安装时建议勾选「为所有用户安装」，并在首次启动时对 Windows Defender 防火墙的所有网络访问弹窗点击「允许访问」。
      </p>

      <!-- Embedded Diagram Viewer (Animations 2, 3, 7, 10) -->
      <DiagramViewer
        title="Clash Verge Rev 在 Windows 系统的标准配置闭环"
        appState="已就绪 - 规则配置正常"
        calloutHint="Windows 系统服务注册与系统托盘管理"
        :steps="diagramSteps"
      />
    </section>

    <!-- Section 3 -->
    <section id="section-3" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        3. 更新迁移和卸载
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        在日常维护与卸载方面，Clash Verge Rev 提供了开机自启（Auto Launch）与静默启动功能。卸载前请务必在软件中关闭「系统代理」和「服务模式」，避免注册表留存代理指向导致网络瘫痪。
      </p>

      <TipNote title="Win11 代理开关为什么总会自动关闭？">
        <p>部分国产杀毒软件或流氓浏览器会在后台定时轮询并强行重置 Windows 代理注册表。如果遇到系统代理经常被掐断，建议：1. 将 Clash 加入杀毒软件信任白名单；2. 在 Clash Verge 中直接改用 TUN 模式，完全绕过 Windows 注册表代理！</p>
      </TipNote>
    </section>

    <!-- Section 4: Checklist (Animation 8) -->
    <section id="section-4" class="space-y-4">
      <h3 class="text-lg font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        本机完成任务后的检查项
      </h3>
      <Checklist
        title="Clash Windows下载与安装维护指南 - 实施自检清单"
        :items="checklistItems"
      />
    </section>

    
  </ArticleLayout>
</template>

<script setup lang="ts">
import { PAGES } from '~/data/pages'

const pageMeta = PAGES.find(p => p.path === '/windows')!

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
    "title": "下载并以管理员身份运行安装包",
    "desc": "下载对应 x64 或 arm64 安装包，跟随向导完成安装并放行防火墙公用/专用网络权限。"
  },
  {
    "num": 2,
    "title": "导入机场 YAML 订阅并启用",
    "desc": "在「订阅」界面粘贴订阅 URL，右键设为当前主配置，在「代理」中选定香港或日本节点。"
  },
  {
    "num": 3,
    "title": "开启开机自启与服务模式",
    "desc": "在「设置」中打开「开机启动」和「静默启动」，安装 Service Mode 保障 TUN 模式可用。"
  }
]
const checklistItems = [
  {
    "text": "Windows 10/11 安装包架构匹配正确（x64 或 arm64）",
    "tip": "可从本站下载页核对安装文件登记表"
  },
  {
    "text": "防火墙已放行 Clash Verge 核心进出站规则",
    "tip": "防止局域网共享与外部连接被误杀"
  },
  {
    "text": "已开启「开机自启」并测试系统重启后能自动在托盘正常工作",
    "tip": "实现开机免手动重复打开"
  },
  {
    "text": "知道如何通过 Win+I 快速进入代理设置页面验证代理状态",
    "tip": "设置 -> 网络和 Internet -> 代理"
  }
]
</script>
