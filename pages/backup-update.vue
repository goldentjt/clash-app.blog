<template>
  <ArticleLayout :page="pageMeta">
    <!-- Intro Box -->
    <div class="p-4 rounded-custom bg-[#F4ECE1] border border-[#B08758]/50 text-xs text-[#79553D] leading-relaxed">
      <strong>核心任务与验证口径：</strong> 本文针对 <strong>Clash应用更新与备份：怎样迁移并回退</strong> 进行全流程图解与实操复盘。正文涵盖具体配置步骤、预期结果判定与异常恢复方案，所有涉及第三方服务的链接均严格添加 <code>rel="sponsored nofollow noopener"</code>，确保合规透明。
    </div>

    <!-- Section 1 -->
    <section id="section-1" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        1. 保存当前可用资料
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        许多用户在使用 Clash 时经常陷入两个极端：要么“几年不升级一次，直到某天节点彻底失效才发现内核已严重过时”；要么“看到小红点提示就立刻盲目点击更新，结果新版本配置不兼容导致全盘崩溃无法上网”。建立科学的**应用更新与备份回滚策略**，是保障生产力长期不间断的压舱石。
      </p>
    </section>

    <!-- Section 2 -->
    <section id="section-2" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        2. 查目标版本兼容
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        更新前的首要原则是：**「备份永远优先于升级」**。在下载新版本覆盖安装前，花 30 秒将当前能正常工作的 profiles 配置文件夹、自定义 merge 脚本进行本地压缩备份。这样即便新版本存在严重 Bug 或内核崩溃，只需下载旧版安装包重新解压，覆盖回备份文件夹，即可在 1 分钟内无缝回滚至上一稳定状态。
      </p>

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
        3. 验证和回退
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        在阅读更新日志（Changelog）时，重点关注带有 `BREAKING CHANGES（破坏性变更）` 标签的内容。例如：内核废弃了某个老旧配置字段，或者调整了默认监听端口。更新完成后，切忌立即关闭终端，应依次执行：1. 测速测试；2. 规则分流测试；3. 系统代理启闭测试，三项全过方可投入正式生产使用。
      </p>

      <TipNote title="更新后提示「yaml: line XX: did not find expected key」如何修复？">
        <p>这是典型的旧版 YAML 配置与新版内核规范冲突。解决方法非常简单：不要手动修改报错的行，直接在客户端的「订阅」卡片上右键点击「更新订阅」，机场服务端会立即下发针对新内核规范自动转换后的全新配置文件！</p>
      </TipNote>
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
