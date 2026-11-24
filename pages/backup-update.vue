<template>
  <ArticleLayout :page="pageMeta">
    <!-- Intro Box -->
    <div class="p-4 rounded-custom bg-[#F4ECE1] border border-[#B08758]/50 text-xs text-[#79553D] leading-relaxed">
      <strong>核心任务与验证口径：</strong> 本文针对 <strong>Clash应用更新与备份：怎样迁移并回退</strong> 进行全流程图解与实操复盘。正文涵盖备份绝对路径、升级后三项核验指标与一分钟紧急回退方案，开源软件遵循 nofollow/noopener 规范，商业推广入口遵循 sponsored 规范，确保合规透明。
    </div>

    <!-- Section 1 -->
    <section id="section-1" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        1. 更新前备份：核心数据存放路径与快照留存
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        升级客户端前，核心是保留**本地配置快照与订阅凭据**。不同操作系统下配置数据的主目录如下：
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div class="p-3 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] space-y-1">
          <div class="font-bold text-[#79553D]">🪟 Windows 备份路径</div>
          <p class="text-[11px] text-[#493A30]">Win + R 输入并打开：</p>
          <code class="block bg-[#F2EAE1] p-1.5 rounded text-[11px] text-[#493A30] font-mono break-all">%APPDATA%\clash-verge-rev\profiles</code>
          <p class="text-[10px] text-[#79553D]">将 <code>profiles</code> 文件夹及同级的 <code>config.yaml</code> 复制到桌面 <code>Clash_Backup</code> 文件夹。</p>
        </div>

        <div class="p-3 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] space-y-1">
          <div class="font-bold text-[#79553D]">🍎 macOS 备份路径</div>
          <p class="text-[11px] text-[#493A30]">访达快捷键 Cmd + Shift + G 粘贴：</p>
          <code class="block bg-[#F2EAE1] p-1.5 rounded text-[11px] text-[#493A30] font-mono break-all">~/Library/Application Support/clash-verge-rev/profiles</code>
          <p class="text-[10px] text-[#79553D]">按住 Option 拖拽 <code>profiles</code> 复制一份归档即可完成快照备份。</p>
        </div>
      </div>
    </section>

    <!-- Section 2 -->
    <section id="section-2" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        2. 更新后验证：三大指标排查新内核兼容性
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        覆盖安装新版后，切勿直接最小化，必须依次完成以下 3 项健康核验：
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-[#493A30]">
        <div class="p-2.5 rounded bg-[#FFFCF5] border border-[#E4D8C7] space-y-1">
          <div class="font-bold text-[#79553D]">① 内核与 API 端口监听</div>
          <p class="text-[11px]">终端运行 <code>netstat -ano | findstr 9097</code> (Win) 或 <code>lsof -i :9097</code> (Mac)，确认内核守护进程正常启动。</p>
        </div>
        <div class="p-2.5 rounded bg-[#FFFCF5] border border-[#E4D8C7] space-y-1">
          <div class="font-bold text-[#79553D]">② 日志语法报错审查</div>
          <p class="text-[11px]">切换至左侧「Logs / 日志」，过滤 <code>[ERROR]</code>。若出现 <code>yaml: unmarshal errors</code> 说明新内核弃用了旧语法，需右键刷新订阅。</p>
        </div>
        <div class="p-2.5 rounded bg-[#FFFCF5] border border-[#E4D8C7] space-y-1">
          <div class="font-bold text-[#79553D]">③ DNS与出口连通性</div>
          <p class="text-[11px]">访问海外测试站确认 IP 为节点属地，同时访问国内百度确认直连不被代理挟持，双向分流正常。</p>
        </div>
      </div>

      <!-- Embedded Diagram Viewer (Animations 2, 3, 7, 10) -->
      <DiagramViewer
        title="安全更新四步闭环：备份-安装-验证-紧急回滚"
        appState="已就绪 - 规则配置正常"
        calloutHint="建立灾备快照，确保任何故障 1 分钟内回退"
        :steps="diagramSteps"
      />
    </section>

    <!-- Section 3 -->
    <section id="section-3" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        3. 紧急回退：新版本异常时的 1 分钟恢复方案
      </h2>
      <div class="text-xs sm:text-sm text-[#493A30] leading-relaxed space-y-2">
        <p>
          如果更新后出现驱动冲突、无法启动或网络中断：
        </p>
        <ol class="list-decimal pl-5 space-y-1 text-[#79553D]">
          <li><strong>卸载或关闭新版：</strong> 托盘退出应用，若安装了虚拟网卡先关闭 TUN 模式。</li>
          <li><strong>运行上一个稳定安装包：</strong> 从本地下载目录运行旧版 <code>.exe</code> 或将旧版 <code>.dmg</code> 拖入 Applications 覆盖。</li>
          <li><strong>还原配置快照：</strong> 将第 1 步备份的 <code>profiles</code> 文件夹拷回原目录，重启旧版客户端即可无缝恢复。</li>
        </ol>

        <TipNote title="更新后提示「yaml: line XX: did not find expected key」如何修复？">
          <p>这是典型的旧版 YAML 配置与新版内核规范冲突。解决方法非常简单：不要手动修改报错的行，直接在客户端的「订阅」卡片上右键点击「更新订阅」，机场服务端会立即下发针对新内核规范自动转换后的全新配置文件！</p>
        </TipNote>
      </div>
    </section>

    <!-- Section 4: Checklist (Animation 8) -->
    <section id="section-4" class="space-y-4">
      <h3 class="text-lg font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        本机完成任务后的检查项
      </h3>
      <Checklist
        title="Clash应用更新与备份：怎样迁移并回退 - 实施自检清单"
        :items="checklistItems"
      />
    </section>

    
  </ArticleLayout>
</template>

<script setup lang="ts">
import { PAGES } from '~/data/pages'

const pageMeta = PAGES.find(p => p.path === '/backup-update')!

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
    "title": "定位并归档当前工作 profiles 目录",
    "desc": "将用户数据目录下的 profiles 与 config.yaml 复制到备份文件夹，标注备份日期。"
  },
  {
    "num": 2,
    "title": "阅读 Release 变更日志并覆盖安装新版",
    "desc": "核对 Release 说明中的核心升级与新协议支持，运行新版安装包覆盖安装。"
  },
  {
    "num": 3,
    "title": "全面验证海外连通性与规则生效状况",
    "desc": "测试 YouTube 4K、ChatGPT 对话以及国内直连服务，确认一切指标正常。"
  }
]
const checklistItems = [
  {
    "text": "在本地安全位置保留了一份带日期的 profiles 配置快照",
    "tip": "备份是应对任何未知更新故障的灵丹妙药"
  },
  {
    "text": "电脑中保留了上一个能稳定运行的旧版本离线安装包",
    "tip": "新版出问题可直接降级安装"
  },
  {
    "text": "备份文件中包含敏感订阅 Token 时，避免上传至云盘公共共享目录",
    "tip": "防止订阅流量被未知爬虫盗刷"
  },
  {
    "text": "熟练掌握新旧版本的覆盖安装与配置目录替换步骤",
    "tip": "1分钟内恢复稳定工作网络环境"
  }
]
</script>
