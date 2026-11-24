<template>
  <ArticleLayout :page="pageMeta">
    <!-- Intro Notice -->
    <div class="p-4 rounded-custom bg-[#F4ECE1] border border-[#B08758]/50 text-xs text-[#79553D] leading-relaxed">
      <strong>本站使命与透明度声明：</strong> 本站（clashapp·图解课堂，官方唯一访问域名：<code>https://clash-app.blog</code>）围绕 Clash 客户端的获取、安装、分流配置、升级备份与故障排障组织中立教程。正文提供可复现的实机操作步骤与清晰的失败排查分支，所有商业合作链接均严格添加 <code>rel="sponsored nofollow noopener"</code>，保障读者知情权与网络规范。
    </div>

    <!-- Section 1: 本站定位与知识图谱 -->
    <section id="about-site" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        1. 本站定位：中立客观的客户端知识图谱
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        clashapp·图解课堂致力于解决中文用户在配置和使用 Clash/Mihomo 过程中的信息不对称与实操难题。我们严格遵循以下准则：
      </p>
      <ul class="text-xs sm:text-sm text-[#493A30] space-y-2 list-disc pl-5">
        <li><strong>区分官方与第三方：</strong> 本站不是任何开源项目的官方开发者或核心维护团队，我们绝不冒充官方身份，所有客户端与内核均指向上游开源 Release 官方渠道或可验证的加速镜像。</li>
        <li><strong>拒绝伪造实测与虚假承诺：</strong> 不使用“全网第一”、“绝对不掉线”、“全绿千兆跑满”等绝对化宣传语，实事求是呈现线路架构、公网抖动与网络限制。</li>
        <li><strong>注重实机可复现性：</strong> 教程步骤均基于真实 Windows 11/10、macOS (Apple Silicon 与 Intel) 设备核对并标注，明确指示适用客户端版本与排错分支。</li>
      </ul>

      <!-- Embedded Neutrality Diagram -->
      <DiagramViewer
        title="clashapp·图解课堂 运营与技术中立性架构图"
        appState="已就绪 - 规则配置正常"
        calloutHint="知识优先、真实核验与透明商业合作标准"
        :steps="diagramSteps"
      />
    </section>

    <!-- Section 2: 联系方式与纠错渠道 (#contact 目标锚点) -->
    <section id="contact" class="space-y-4 scroll-mt-20">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2 flex items-center justify-between">
        <span>2. 联系方式与勘误反馈</span>
        <span class="text-xs font-normal text-[#B08758]">#contact</span>
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        技术生态持续演进，客户端界面与内核参数可能随版本迭代调整。如果您在阅读过程中发现步骤有误、排障逻辑不全或参数失效，欢迎通过以下渠道向编辑组提交纠错：
      </p>

      <div class="p-4 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] space-y-3 text-xs sm:text-sm">
        <div class="flex items-start gap-3">
          <span class="font-bold text-[#79553D] shrink-0">📬 勘误邮箱：</span>
          <span class="text-[#493A30]">feedback@clash-app.blog（邮件请注明教程页面 URL、客户端版本号及复现现象截图）</span>
        </div>
        <div class="flex items-start gap-3">
          <span class="font-bold text-[#79553D] shrink-0">⏱ 处理时效：</span>
          <span class="text-[#493A30]">编辑组核实确认后将在 24-48 小时内完成知识库修正，并在文章底部的「更新核对历史」中公示勘误明细。</span>
        </div>
      </div>
    </section>

    <!-- Section 3: 用户隐私保护策略 (#privacy 目标锚点) -->
    <section id="privacy" class="space-y-4 scroll-mt-20">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2 flex items-center justify-between">
        <span>3. 用户隐私保护策略</span>
        <span class="text-xs font-normal text-[#B08758]">#privacy</span>
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        本站坚决尊重并保护每位访客的隐私权利。本站的隐私保护承诺包括：
      </p>
      <ul class="text-xs sm:text-sm text-[#493A30] space-y-2 list-disc pl-5">
        <li><strong>零网络访问日志收集：</strong> 本站为纯静态托管架构，不架设任何用户数据库，不记录访客的浏览行为、网络轨迹或代理使用习惯。</li>
        <li><strong>无侵入式追踪脚本：</strong> 本站不嵌入任何未经许可的跨站画像脚本或第三方广告追踪 Cookie。</li>
        <li><strong>不搜集敏感配置：</strong> 本站所有教程、排查工具与计算演示均在访客本地浏览器端执行，绝不上传您的个人订阅链接、节点密码或私有密钥。</li>
      </ul>
    </section>

    <!-- Section 4: 免责声明与商业关系说明 (#disclaimer 目标锚点) -->
    <section id="disclaimer" class="space-y-4 scroll-mt-20">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2 flex items-center justify-between">
        <span>4. 免责声明与商业合作披露</span>
        <span class="text-xs font-normal text-[#B08758]">#disclaimer</span>
      </h2>
      <div class="p-4 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] space-y-3 text-xs sm:text-sm text-[#493A30] leading-relaxed">
        <p>
          <strong>一、非官方软件开发者声明：</strong> 本站提供的教程、配置范例及架构解析仅供计算机网络原理研究、学术检索及跨国商务合规使用。各客户端（Clash Verge Rev、Clash Nyanpasu、Mihomo Core、Sing-box 等）版权与商标均归其各自开源作者所有。
        </p>
        <p>
          <strong>二、商业赞助与返佣透明度披露：</strong> 本站部分页面（如核心推荐页 <code>/airport-recommend</code> 及独立评测专刊）包含带有推广追踪参数的外部链接。当您通过本站链接注册并填写优惠码时，您可获得立减折扣，本站亦可能获得微额佣金以维持静态托管与带宽成本。本站坚持实事求是，绝不因商业合作隐瞒服务商已确认的技术限制或伪造虚假测试数据。
        </p>
        <p>
          <strong>三、第三方网络质量免责：</strong> 网络速度、延迟及连通性受用户本地宽带（电信/联通/移动）、国际海底光缆状态、突发故障及目标服务商防火墙策略综合影响，本站不对任何第三方服务商的持续可用性或退款纠纷承担担保责任。
        </p>
      </div>
    </section>

    <!-- Section 5: 自检清单 -->
    <section id="checklist" class="space-y-4">
      <h3 class="text-lg font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        关于本站：使用自检清单
      </h3>
      <Checklist
        title="关于 clashapp·图解课堂 - 读者信任与自检清单"
        :items="checklistItems"
      />
    </section>
  </ArticleLayout>
</template>

<script setup lang="ts">
import { PAGES } from '~/data/pages'

const pageMeta = PAGES.find(p => p.path === '/about')!

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
    num: 1,
    title: "真实客观的内容编撰体系",
    desc: "所有图解步骤均在真实 Windows、Mac、Android 设备上测试核验并制作技术标注。"
  },
  {
    num: 2,
    title: "规范透明的商业合作关系",
    desc: "严格区分教程内容与商业推广，所有返利合作链接均明确标注 sponsored nofollow。"
  },
  {
    num: 3,
    title: "开放的社区勘误与反馈渠道",
    desc: "设立清晰的勘误通道，欢迎读者对失效参数提出指正，并在文章核查记录中公开公示。"
  }
]

const checklistItems = [
  {
    text: "认准官方唯一访问域名：https://clash-app.blog",
    tip: "防范假冒克隆与钓鱼站点"
  },
  {
    text: "理解本站的技术传播者定位，不冒充开源项目开发者",
    tip: "致敬开源社区与内核开发者"
  },
  {
    text: "理解推荐链接挂载的 rel=\"sponsored nofollow noopener\" 属性",
    tip: "符合 Google 搜索规范与商业透明度标准"
  },
  {
    text: "遇到教程步骤与最新版本不符，随时向 feedback@clash-app.blog 反馈",
    tip: "协助编辑组持续保持内容准确性"
  }
]
</script>
