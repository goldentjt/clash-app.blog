<template>
  <ArticleLayout :page="pageMeta">
    <!-- Intro Notice -->
    <div class="p-3 rounded-custom bg-[#F4ECE1] border border-[#B08758]/50 text-xs text-[#79553D] leading-relaxed">
      <strong>安全声明与下载准则：</strong>收录各平台官方 Release 原版与国内加速镜像。开源客户端下载遵循 <code>rel="nofollow noopener"</code> 安全规范，商业推广入口遵循 <code>rel="sponsored"</code>，确保来源透明、纯净且无恶意捆绑。
    </div>

    <!-- Section 1: 识别系统和处理器 -->
    <section id="section-1" class="space-y-3">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        1. 识别系统和处理器：精准匹配 CPU 架构
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        下载客户端前必须精准核对操作系统与 CPU 芯片指令集架构。安装包若与底层芯片不匹配，轻则依赖转译层多耗电量，重则直接提示“无法在此设备上运行”或进程崩溃：
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
        <div class="p-3 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] space-y-1.5">
          <div class="font-bold text-[#79553D]">🪟 Windows 架构核查</div>
          <p class="text-[11px] text-[#493A30]">终端命令：<code>echo %PROCESSOR_ARCHITECTURE%</code></p>
          <ul class="list-disc pl-4 space-y-0.5 text-[#79553D] text-[11px]">
            <li><strong>x64 (AMD64)：</strong>常规 Intel Core / AMD Ryzen 电脑，必须选 <code>x64-setup.exe</code>。</li>
            <li><strong>ARM64：</strong>高通骁龙 X Elite、Surface Pro X，必须选 <code>arm64-setup.exe</code> 原生驱动。</li>
          </ul>
        </div>

        <div class="p-3 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] space-y-1.5">
          <div class="font-bold text-[#79553D]">🍎 macOS 架构核查</div>
          <p class="text-[11px] text-[#493A30]">终端命令：<code>uname -m</code></p>
          <ul class="list-disc pl-4 space-y-0.5 text-[#79553D] text-[11px]">
            <li><strong>Apple Silicon (M1~M4)：</strong>输出 <code>arm64</code>，必须选 <code>aarch64.dmg</code>，原生运行省电免发热。</li>
            <li><strong>Intel Mac：</strong>输出 <code>x86_64</code>，选 <code>x64.dmg</code>。误选转译会白白消耗 20% 内存。</li>
          </ul>
        </div>

        <div class="p-3 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] space-y-1.5">
          <div class="font-bold text-[#79553D]">🐧 Linux / Android 区分</div>
          <p class="text-[11px] text-[#493A30]">终端命令：<code>uname -m</code></p>
          <ul class="list-disc pl-4 space-y-0.5 text-[#79553D] text-[11px]">
            <li><strong>Linux 桌面/服务器：</strong>x86_64 选 <code>amd64.AppImage/deb</code>；树莓派选 <code>arm64</code>。</li>
            <li><strong>Android 手机/车机：</strong>目前99%以上手机为 <code>arm64-v8a.apk</code>，老设备选 <code>armeabi-v7a</code>。</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Section 2: 对照文件资料 -->
    <section id="section-2" class="space-y-3">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E4D8C7] pb-2">
        <h2 class="text-xl sm:text-2xl font-bold text-[#493A30]">
          2. 安装包下载渠道与架构登记表
        </h2>
        <div class="flex flex-wrap gap-1 text-[11px]">
          <button
            v-for="cat in platformTabs"
            :key="cat"
            @click="activePlatform = cat"
            class="px-2 py-0.5 rounded transition-colors"
            :class="activePlatform === cat ? 'bg-[#79553D] text-white font-bold' : 'bg-[#EBDCCB] text-[#79553D] hover:bg-[#E4D8C7]'"
          >
            {{ cat }}
          </button>
        </div>
      </div>
      <p class="text-xs text-[#493A30] leading-relaxed">
        检索收录自 tizilab.cc 等权威开源索引，官方原版与国内加速下载直达：
      </p>

      <!-- Download Metadata Table -->
      <div class="overflow-x-auto border border-[#E4D8C7] rounded-custom bg-[#FFFCF5]">
        <table class="w-full text-xs text-left border-collapse">
          <thead>
            <tr class="bg-[#F4ECE1] text-[#79553D]">
              <th class="p-2 border-b border-[#E4D8C7]">系统</th>
              <th class="p-2 border-b border-[#E4D8C7]">客户端 / 版本</th>
              <th class="p-2 border-b border-[#E4D8C7]">适配架构</th>
              <th class="p-2 border-b border-[#E4D8C7]">下载通道 (官方/镜像)</th>
              <th class="p-2 border-b border-[#E4D8C7]">指南</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#E4D8C7]">
            <tr v-for="item in filteredDownloads" :key="item.downloadId" class="hover:bg-[#F9F5EC] transition-colors">
              <td class="p-2 font-bold text-[#493A30] whitespace-nowrap">{{ item.platform }}</td>
              <td class="p-2 whitespace-nowrap">
                <span class="font-medium text-[#79553D]">{{ item.project }}</span>
                <span class="block text-[10px] text-[#B08758]">{{ item.version }}</span>
              </td>
              <td class="p-2 text-[11px] text-[#493A30]">{{ item.arch }}</td>
              <td class="p-2 whitespace-nowrap">
                <div class="flex items-center gap-1.5">
                  <a
                    :href="item.officialUrl"
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    class="px-2 py-0.5 rounded bg-[#79553D] hover:bg-[#5C3E2A] text-white text-[10px] font-bold shadow-xs inline-block"
                  >
                    官方下载
                  </a>
                  <a
                    v-if="item.mirrorUrl"
                    :href="item.mirrorUrl"
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    class="px-1.5 py-0.5 rounded bg-[#EBDCCB] hover:bg-[#E4D8C7] text-[#79553D] text-[10px] font-medium shadow-xs inline-block"
                  >
                    镜像加速
                  </a>
                </div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <NuxtLink :to="item.guideRoute" class="font-bold text-[#79553D] hover:underline text-[11px]">
                  指南 →
                </NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Section 3: 确认下载后的下一步 -->
    <section id="section-3" class="space-y-3">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        3. 确认下载后的下一步：从安装准备到导入订阅
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        下载安装包后安全运行三步法：
      </p>

      <DiagramViewer
        title="首次安装与环境核查流程"
        appState="安装完成 - 准备启动"
        calloutHint="防火墙放行与TUN虚拟网卡授权"
        :steps="[
          { num: 1, title: '核对防篡改哈希', desc: '终端执行 certutil 或 shasum -a 256 核验安装包完整性，杜绝恶意二次打包。' },
          { num: 2, title: '授予系统服务权限', desc: '安装过程中若提示虚拟网卡驱动或安装 Helper，点击允许以支持 TUN 全局接管。' },
          { num: 3, title: '导入优质机场订阅', desc: '客户端安装后需导入 IPLC 专线或 BGP 订阅节点即可畅享海外高速连接。' }
        ]"
      />
    </section>

    <!-- Section 4: 检查清单 -->
    <section id="section-4">
      <h3 class="text-lg font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        本机完成任务后的检查项
      </h3>
      <Checklist
        title="下载与安装完成后的检查清单"
        :items="[
          { text: '已确认下载文件名与自身电脑芯片/系统完全一致', tip: 'Mac 苹果 M 芯片绝不选 x64' },
          { text: '运行安装包未被安全管家或杀毒软件无提示直接隔离', tip: '如遇误报需手动添加白名单' },
          { text: '启动应用后主窗口能正常渲染并展示版本号', tip: '若白屏说明显卡硬件加速冲突，可尝试关闭 GPU 加速' },
          { text: '已准备好稳定可用的机场订阅（如 全球云 或 暮光加速）', tip: '前往推荐页选择 5 大主力方案' }
        ]"
      />
    </section>
  </ArticleLayout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { PAGES } from '~/data/pages'
import { DOWNLOADS } from '~/data/downloads'

const pageMeta = PAGES.find(p => p.path === '/download')!
const activePlatform = ref('全部')
const platformTabs = ['全部', 'Windows', 'macOS', 'Android', 'iOS', 'Linux', '路由器']

const filteredDownloads = computed(() => {
  if (activePlatform.value === '全部') return DOWNLOADS
  return DOWNLOADS.filter(d => d.platform === activePlatform.value)
})

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
</script>
