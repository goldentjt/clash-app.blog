<template>
  <ArticleLayout :page="pageMeta">
    <!-- Intro Box -->
    <div class="p-4 rounded-custom bg-[#F4ECE1] border border-[#B08758]/50 text-xs text-[#79553D] leading-relaxed">
      <strong>核心任务与验证口径：</strong> 本文针对 <strong>Clash配置管理：导入、保存与迁移</strong> 进行全流程图解与实操复盘。正文涵盖具体配置步骤、预期结果判定与异常恢复方案，开源软件遵循 nofollow/noopener 规范，商业推广入口遵循 sponsored 规范，确保合规透明。
    </div>

    <!-- Section 1 -->
    <section id="section-1" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        1. 配置存放与选择
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        Clash 客户端的核心运行依赖于 YAML 格式的配置文件。配置文件不仅包含了你的节点服务器连接凭据（密码、端口、UUID、公钥），还规定了 DNS 解析逻辑、本地监听端口、TUN 虚拟网卡参数以及流量分流策略组。理解配置文件的存放路径与层次结构，是跨设备迁移与灾难备份的核心技能。
      </p>
    </section>

    <!-- Section 2 -->
    <section id="section-2" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        2. 备份有效内容
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        在桌面客户端（如 Clash Verge Rev）中，配置文件通常存放在应用的数据目录中（例如 Windows 的 <code>%APPDATA%\clash-verge\profiles</code> 或 macOS 的 <code>~/Library/Application Support/clash-verge/profiles</code>）。订阅导入时，客户端会自动将远程 YAML 保存为独立哈希命名的文件，避免直接修改内核的主运行模板。
      </p>

      <!-- Embedded Diagram Viewer (Animations 2, 3, 7, 10) -->
      <DiagramViewer
        title="Clash 配置存储体系与多配置切换结构图"
        appState="已就绪 - 规则配置正常"
        calloutHint="本地 profiles 目录与运行时合并配置关系"
        :steps="diagramSteps"
      />
    </section>

    <!-- Section 3 -->
    <section id="section-3" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        3. 迁移后核对
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        进行配置备份时，切勿直接将包含私人订阅 Token 的完整文件公开上传至公共 GitHub 仓库或分享给他人。推荐定期压缩 profiles 目录并进行本地离线归档；在迁移至新电脑或新设备时，只需在目标设备上重新导入订阅 URL，或者解压本地备份覆盖即可瞬间还原所有的分流规则和节点选择偏好。
      </p>

      <TipNote title="避坑提示：换新客户端后原有规则报错怎么处理？">
        <p>部分老旧配置使用了已弃用的旧版 Clash 语法（如旧版 proxy-groups 格式）。若在新版 Clash Verge（Mihomo内核）中运行报错，只需右键订阅卡片执行一次「更新订阅」，机场服务端会自动下发兼容最新 Mihomo 内核的规范配置。</p>
      </TipNote>
    </section>

    <!-- Section 4: Checklist (Animation 8) -->
    <section id="section-4" class="space-y-4">
      <h3 class="text-lg font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        本机完成任务后的检查项
      </h3>
      <Checklist
        title="Clash配置管理：导入、保存与迁移 - 实施自检清单"
        :items="checklistItems"
      />
    </section>

    
  </ArticleLayout>
</template>

<script setup lang="ts">
import { PAGES } from '~/data/pages'

const pageMeta = PAGES.find(p => p.path === '/profiles')!

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
    "title": "识别本地 profiles 存储目录",
    "desc": "在客户端配置界面右键点击订阅卡片，选择「打开所在文件夹」，直接定位实际 YAML 文件存放路径。"
  },
  {
    "num": 2,
    "title": "提取并备份有效分流规则",
    "desc": "若自己编写了自定义扩展脚本（Script）或覆写规则（Merge），单独备份该 yaml 文本文件。"
  },
  {
    "num": 3,
    "title": "迁移后进行语法与核心校验",
    "desc": "将配置导入新设备后，观察右上角是否提示 YAML 语法解析成功，核对节点数与策略组完整度。"
  }
]
const checklistItems = [
  {
    "text": "已明确本地 profiles 真实物理存放路径，未直接篡改程序安装包目录",
    "tip": "安装目录与用户数据目录是分离的"
  },
  {
    "text": "定期将个性化分流规则和扩展配置脚本进行本地文本备份",
    "tip": "防范客户端升级意外覆盖用户设置"
  },
  {
    "text": "跨设备迁移时优先复制机场订阅链接重新下载最新节点池",
    "tip": "推荐搭配 全球云 或 暮光加速 专线订阅保持节点最新"
  },
  {
    "text": "确认新设备上无端口冲突（如 7890 端口未被其他服务抢占）",
    "tip": "若冲突可在设置中修改监听端口"
  }
]
</script>
