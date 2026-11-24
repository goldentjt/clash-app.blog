<template>
  <ArticleLayout :page="pageMeta">
    <!-- Intro Box -->
    <div class="p-4 rounded-custom bg-[#F4ECE1] border border-[#B08758]/50 text-xs text-[#79553D] leading-relaxed">
      <strong>核心任务与验证口径：</strong> 本文针对 <strong>Clash Linux应用：GUI与核心安装维护</strong> 进行全流程图解与实操复盘。正文涵盖具体配置步骤、预期结果判定与异常恢复方案，所有涉及第三方服务的链接均严格添加 <code>rel="sponsored nofollow noopener"</code>，确保合规透明。
    </div>

    <!-- Section 1 -->
    <section id="section-1" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        1. 选择运行形式与安装包下载
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        Linux 桌面首推 <strong>Clash Verge Rev .deb</strong> 或 <strong>FlClash</strong>，纯服务端与软路由建议直接运行 <strong>Mihomo (Clash Meta) 核心</strong>。官方与加速镜像（外链均带 <code>rel="sponsored nofollow noopener"</code>）：
      </p>

      <!-- Linux Download Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
        <div class="p-3 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] space-y-2 text-xs">
          <div class="flex items-center justify-between">
            <strong class="text-[#493A30]">Clash Verge Rev (x64 .deb)</strong>
            <span class="text-[10px] px-1.5 py-0.2 rounded bg-[#79553D] text-white">Ubuntu/Debian</span>
          </div>
          <p class="text-[11px] text-[#79553D]">图形化 GUI，支持系统托盘与一键 TUN 模式</p>
          <div class="flex items-center gap-1.5 pt-1">
            <a
              href="https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_amd64.deb"
              target="_blank"
              rel="sponsored nofollow noopener"
              class="px-2 py-0.5 rounded bg-[#79553D] text-white text-[10px] font-bold hover:bg-[#5C3E2A] shadow-xs"
            >
              官方下载
            </a>
            <a
              href="https://ghfast.top/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_amd64.deb"
              target="_blank"
              rel="sponsored nofollow noopener"
              class="px-1.5 py-0.5 rounded bg-[#EBDCCB] text-[#79553D] text-[10px] font-medium hover:bg-[#E4D8C7] shadow-xs"
            >
              镜像加速
            </a>
          </div>
        </div>

        <div class="p-3 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] space-y-2 text-xs">
          <div class="flex items-center justify-between">
            <strong class="text-[#493A30]">Clash Verge Rev (ARM64 .deb)</strong>
            <span class="text-[10px] px-1.5 py-0.2 rounded bg-[#B08758] text-white">树莓派/ARM</span>
          </div>
          <p class="text-[11px] text-[#79553D]">适合 ARM64 架构 Linux 主板与工控机</p>
          <div class="flex items-center gap-1.5 pt-1">
            <a
              href="https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_arm64.deb"
              target="_blank"
              rel="sponsored nofollow noopener"
              class="px-2 py-0.5 rounded bg-[#79553D] text-white text-[10px] font-bold hover:bg-[#5C3E2A] shadow-xs"
            >
              官方下载
            </a>
            <a
              href="https://ghfast.top/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_arm64.deb"
              target="_blank"
              rel="sponsored nofollow noopener"
              class="px-1.5 py-0.5 rounded bg-[#EBDCCB] text-[#79553D] text-[10px] font-medium hover:bg-[#E4D8C7] shadow-xs"
            >
              镜像加速
            </a>
          </div>
        </div>

        <div class="p-3 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] space-y-2 text-xs">
          <div class="flex items-center justify-between">
            <strong class="text-[#493A30]">FlClash Linux (.deb)</strong>
            <span class="text-[10px] px-1.5 py-0.2 rounded bg-[#EBDCCB] text-[#79553D]">极简跨平台</span>
          </div>
          <p class="text-[11px] text-[#79553D]">Flutter 现代化界面，易装易用</p>
          <div class="flex items-center gap-1.5 pt-1">
            <a
              href="https://github.com/chen08209/FlClash/releases/download/v0.8.98/FlClash-0.8.98-linux-amd64.deb"
              target="_blank"
              rel="sponsored nofollow noopener"
              class="px-2 py-0.5 rounded bg-[#79553D] text-white text-[10px] font-bold hover:bg-[#5C3E2A] shadow-xs"
            >
              官方下载
            </a>
            <a
              href="https://ghfast.top/https://github.com/chen08209/FlClash/releases/download/v0.8.98/FlClash-0.8.98-linux-amd64.deb"
              target="_blank"
              rel="sponsored nofollow noopener"
              class="px-1.5 py-0.5 rounded bg-[#EBDCCB] text-[#79553D] text-[10px] font-medium hover:bg-[#E4D8C7] shadow-xs"
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
        2. 安装并验证
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        对于桌面用户，赋予 AppImage 可执行权限即可直接双击运行：`chmod +x Clash.Verge_*.AppImage && ./Clash.Verge_*.AppImage`；对于服务器命令行用户，通常将内核解压至 `/usr/local/bin/mihomo`，配置文件存放在 `/etc/mihomo/config.yaml`，并编写一个标准的 Systemd 守护单元文件实现进程保活与自动拉起。
      </p>

      <!-- Embedded Diagram Viewer (Animations 2, 3, 7, 10) -->
      <DiagramViewer
        title="Linux 环境 GUI 与 Systemd 核心守护双轨运行结构图"
        appState="已就绪 - 规则配置正常"
        calloutHint="AppImage 桌面运行与 /usr/local/bin 守护进程对比"
        :steps="diagramSteps"
      />
    </section>

    <!-- Section 3 -->
    <section id="section-3" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        3. 更新和停止服务
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        在终端中让命令行工具（git, apt, docker）享受代理加速，只需在 `~/.bashrc` 或 `~/.zshrc` 中添加快速环境变量别名：`alias setproxy="export http_proxy=http://127.0.0.1:7890 https_proxy=http://127.0.0.1:7890"`，需要时执行 `setproxy` 即可瞬时加速下载！
      </p>

      <TipNote title="Linux 下解决 Git Clone 依然奇慢无比的方法">
        <p>因为系统代理对 Git 命令行无效，必须单独配置 Git 的全局代理指令：
`git config --global http.proxy http://127.0.0.1:7890`
`git config --global https.proxy http://127.0.0.1:7890`
配置后拉取 GitHub 仓库速度将直接飙升跑满带宽！</p>
      </TipNote>
    </section>

    <!-- Section 4: Checklist (Animation 8) -->
    <section id="section-4" class="space-y-4">
      <h3 class="text-lg font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        本机完成任务后的检查项
      </h3>
      <Checklist
        title="Clash Linux应用：GUI与核心安装维护 - 实施自检清单"
        :items="checklistItems"
      />
    </section>

    
  </ArticleLayout>
</template>

<script setup lang="ts">
import { PAGES } from '~/data/pages'

const pageMeta = PAGES.find(p => p.path === '/linux')!

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
    "title": "选择运行包格式（AppImage / 二进制）",
    "desc": "桌面开发机下载 AppImage 或 deb 包；服务器下载官方 tar.gz 编译二进制核心。"
  },
  {
    "num": 2,
    "title": "配置 Systemd 守护服务单元文件",
    "desc": "创建 /etc/systemd/system/mihomo.service，配置 ExecStart 与 Restart=on-failure。"
  },
  {
    "num": 3,
    "title": "验证 RESTful API 与网页面板管理",
    "desc": "核心启动后监听 9090 端口，可通过浏览器打开 Yacd 远程面板管理节点与测速。"
  }
]
const checklistItems = [
  {
    "text": "Linux 安装包根据自身发行版架构选对（通常为 x86_64 或 aarch64）",
    "tip": "云服务器注意核对是否为 ARM 实例"
  },
  {
    "text": "Systemd 服务已成功执行 systemctl enable --now mihomo",
    "tip": "服务开机自动常驻运行"
  },
  {
    "text": "终端执行 curl -I https://google.com --proxy http://127.0.0.1:7890 验证连通",
    "tip": "返回 HTTP/2 200 即代表通道成功建立"
  },
  {
    "text": "懂得如何通过 systemctl stop 或 kill 正常终止旧实例",
    "tip": "防止后台僵尸进程占用 7890 端口"
  }
]
</script>
