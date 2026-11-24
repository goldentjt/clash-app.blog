<template>
  <div>
    <!-- 1. Hero Banner with Animation 1 (Bracket open) & High CTR keywords -->
    <HeroBanner />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-16">
      <!-- 2. 重点图解教程 (Featured Illustrated Tutorials) - with Animation 4 (Cover caption expand) -->
      <section class="space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#E4D8C7] pb-4">
          <div>
            <div class="inline-flex items-center gap-1.5 text-xs font-bold text-[#B08758] mb-1">
              <span>🌟 FEATURED GUIDES</span>
              <span>·</span>
              <span>核心推荐</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-[#493A30] tracking-tight">
              重点图解教程：生命周期核心指南
            </h2>
          </div>
          <p class="text-xs text-[#79553D]">
            从下载安装、订阅更新到异常排查的 4 大核心任务
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CoverCard
            title="Clash应用教程：第一次运行到正常退出"
            summary="从零演示安装授权、节点载入、开启系统代理以及用完后干净退出的完整闭环，避免断网残留。"
            link="/first-run"
            category="新手入门"
            readTime="7分钟"
            icon="🚀"
            badge="首推必读"
          />
          <CoverCard
            title="Clash下载：按系统与架构找安装包"
            summary="精确对照 Windows、macOS (Intel/M系列)、Android 与 iOS 的安装包架构及 Hash 校验，杜绝木马捆绑。"
            link="/download"
            category="下载指南"
            readTime="5分钟"
            icon="📥"
            badge="官方原版"
          />
          <CoverCard
            title="Clash订阅管理：跨设备添加与刷新"
            summary="安全导入机场 YAML 订阅、定时自动更新策略、防 Token 泄露以及节点无法加载的快速抢修技巧。"
            link="/subscriptions"
            category="配置管理"
            readTime="5分钟"
            icon="🔗"
            badge="高频实用"
          />
          <CoverCard
            title="Clash无法连接：从核心到日志排查"
            summary="全面解决“系统代理开了网页打不开”、“节点全红”、“核心端口被占用”等高频症状，附脱敏日志反馈。"
            link="/app-errors"
            category="故障排除"
            readTime="8分钟"
            icon="🛠️"
            badge="急救手册"
          />
        </div>
      </section>

      <!-- 3. 工具分类 (Tool Categories) - with Animation 5 (Tool icon swing) -->
      <section class="space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#E4D8C7] pb-4">
          <div>
            <div class="inline-flex items-center gap-1.5 text-xs font-bold text-[#B08758] mb-1">
              <span>🗂️ CATEGORIES</span>
              <span>·</span>
              <span>知识体系</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-[#493A30] tracking-tight">
              工具分类：全方位覆盖 Clash 知识
            </h2>
          </div>
          <p class="text-xs text-[#79553D]">
            悬停图标可预览微动效，点击直达各专题深度分类
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <ToolCategoryCard
            title="客户端与下载"
            desc="涵盖 Windows、macOS、Android、iOS 和 Linux 全平台安装包架构与生命周期。"
            link="/download"
            icon="💻"
            :count="6"
            tag="多端适配"
          />
          <ToolCategoryCard
            title="入门与新手概念"
            desc="从首次启动到理解核心架构，厘清客户端软件与代理服务的根本区别。"
            link="/network-intro"
            icon="🌱"
            :count="5"
            tag="零门槛"
          />
          <ToolCategoryCard
            title="配置与订阅管理"
            desc="掌握 YAML 配置文件、节点测速、分流规则设置及跨设备订阅自动同步。"
            link="/profiles"
            icon="⚙️"
            :count="5"
            tag="规则分流"
          />
          <ToolCategoryCard
            title="网络与问题诊断"
            desc="TUN 虚拟网卡、DNS 防污染、关机系统代理残留修复以及全套故障急救方案。"
            link="/app-errors"
            icon="🩺"
            :count="5"
            tag="急救速查"
          />
          <ToolCategoryCard
            title="2026好用机场推荐"
            desc="严格收录 28 家真实机场服务商，重磅区分推荐 5 大主力，全网最全独家优惠码。"
            link="/airport-recommend"
            icon="✈️"
            :count="28"
            tag="5大主力"
          />
          <ToolCategoryCard
            title="常见问答与站点说明"
            desc="全量默认展开问答，披露真实运营身份，绝不冒充官方或篡改开源二进制。"
            link="/faq"
            icon="🛡️"
            :count="4"
            tag="全展开FAQ"
          />
        </div>
      </section>

      <!-- 4. 五大主力机场深度对比与推荐 (Distinguished 5 Main Airports) -->
      <section>
        <TopAirportsHero />
      </section>

      <!-- 5. 核心图解与动画演示区域 (Animations 2, 3, 6, 7, 8, 9, 10 showcase) -->
      <section class="space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#E4D8C7] pb-4">
          <div>
            <div class="inline-flex items-center gap-1.5 text-xs font-bold text-[#B08758] mb-1">
              <span>🎨 INTERACTIVE DEMO</span>
              <span>·</span>
              <span>动效图解课堂</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-[#493A30] tracking-tight">
              最新图解：Clash Verge Rev 核心配置流程
            </h2>
          </div>
          <!-- Reading Mode Switcher (Animation 6: 90 deg rotation) -->
          <ReadingModeToggle v-model="isDetailMode" />
        </div>

        <!-- Animation 2, 3, 7, 10 Diagram Viewer -->
        <DiagramViewer
          title="Clash Verge Rev 标准三步导入与启用流程（点击放大支持水平滑动切图）"
          appState="已连接 - 香港 01 [IPLC专线]"
          calloutHint="策略组：PROXIES 自动优选低延迟节点"
          :steps="[
            { num: 1, title: '导入机场订阅链接', desc: '复制机场提供的 Clash YAML 订阅 URL，粘贴进订阅框并点击「Save」，客户端将自动拉取全部节点。' },
            { num: 2, title: '选择目标节点或策略组', desc: '在「代理」界面展开 PROXIES 分组，建议选用自动测速低延迟节点或手动指定原生住宅 IP。' },
            { num: 3, title: '开启系统代理 / TUN模式', desc: '在右下角或侧边栏点击开启「System Proxy」。若需要接管不支持系统代理的软件，启动「TUN Mode」。' }
          ]"
        />

        <!-- Conditional Detail Expansion based on isDetailMode (Animation 6) -->
        <Transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="transform -translate-y-2 opacity-0"
          enter-to-class="transform translate-y-0 opacity-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="transform translate-y-0 opacity-100"
          leave-to-class="transform -translate-y-2 opacity-0"
        >
          <div v-if="isDetailMode" class="p-5 rounded-custom bg-[#F4ECE1] border border-[#B08758]/50 space-y-3 text-xs leading-relaxed">
            <div class="flex items-center gap-2 font-bold text-[#79553D]">
              <span>💡 详细说明模式已激活：底层原理扩展</span>
            </div>
            <p>
              当开启系统代理（System Proxy）时，Clash 在本地 127.0.0.1 监听 7890 端口，并修改操作系统注册表（Windows）或网络偏好设置（macOS），将 HTTP/HTTPS/SOCKS5 流量重定向至此。若应用不遵循系统代理设置，必须借助 TUN 模式安装虚拟网卡，从网络驱动层拦截所有 IP 数据包。
            </p>
          </div>
        </Transition>

        <!-- Checklist Demo (Animation 8) & Tip Note (Animation 9) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <Checklist
            title="首次使用 Clash 前置检查清单（主动勾选触发）"
            :items="[
              { text: '电脑/手机系统时间已开启自动网络同步（时钟偏差过大会导致 TLS 证书校验失败）', tip: '可在系统日期和时间设置中点击「立即同步」对齐 NTP 授时' },
              { text: '已获取有效的机场订阅链接（推荐使用 U1S1 或 极连云专线订阅）', tip: '订阅链接中包含个人 Token，切勿分享给他人' },
              { text: '卸载或退出了冲突的第三方 VPN/代理软件', tip: '同时运行多个代理工具会导致虚拟网卡或端口 7890 冲突' },
              { text: '确认浏览器未安装强制走 Direct 的异常插件', tip: '如 SwitchyOmega 若设置为直接连接会导致网页无法翻墙' }
            ]"
          />

          <div class="space-y-4">
            <TipNote title="避坑便签：关机前为什么必须手动关闭系统代理？">
              <p>
                如果在关机或重启前直接强制拔掉电源、或者 Clash 异常闪退，操作系统中的代理开关未能被正常撤销，仍指向 <code class="bg-[#F2EAE1] px-1 rounded">127.0.0.1:7890</code>。下次开机时因为 Clash 尚未启动，会导致微信、百度等所有国内网站全部打不开。
              </p>
              <p class="font-bold text-[#79553D] pt-1">
                救援方案：进入 Windows 设置 → 网络和 Internet → 代理 → 将「使用代理服务器」手动关闭即可立即恢复！
              </p>
            </TipNote>

            <TipNote title="核心理念：应用（车）与节点（油）的本质关系">
              <p>
                Clash 本身只是一款开源或社区维护的高性能网络分流客户端（就像一辆性能强劲的跑车）；而机场提供的订阅节点则是燃料（汽油）。跑车必须加满优质汽油才能跑出 4K/8K 的高速体验。
              </p>
            </TipNote>
          </div>
        </div>
      </section>

      <!-- 6. 系列学习 (Series Learning Tracks) -->
      <section class="space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#E4D8C7] pb-4">
          <div>
            <div class="inline-flex items-center gap-1.5 text-xs font-bold text-[#B08758] mb-1">
              <span>📚 SERIES LEARNING</span>
              <span>·</span>
              <span>进阶进阶路径</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-[#493A30] tracking-tight">
              系列学习路线：从入门到高阶专家
            </h2>
          </div>
          <p class="text-xs text-[#79553D]">
            循序渐进的系统化阅读指引
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Track 1 -->
          <div class="p-6 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] shadow-sm flex flex-col justify-between">
            <div class="space-y-3">
              <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-[#EBDCCB] text-[#79553D]">第一阶段 · 搭建基础</span>
              <h3 class="text-lg font-bold text-[#493A30]">新手起步与多端安装</h3>
              <p class="text-xs text-[#79553D] leading-relaxed">
                建立对科学上网基础概念的认识，按自己的设备下载匹配安装包，顺利完成首次翻墙连接。
              </p>
              <ul class="text-xs space-y-1.5 text-[#493A30] pt-2">
                <li><NuxtLink to="/network-intro" class="hover:text-[#79553D]">• 科学上网应用入门：软件安装后还需要什么</NuxtLink></li>
                <li><NuxtLink to="/download" class="hover:text-[#79553D]">• 按系统和架构下载对应安装包</NuxtLink></li>
                <li><NuxtLink to="/first-run" class="hover:text-[#79553D]">• 第一次运行到正常退出标准图解</NuxtLink></li>
              </ul>
            </div>
            <div class="pt-4 mt-4 border-t border-[#E4D8C7]/50">
              <NuxtLink to="/first-run" class="text-xs font-bold text-[#79553D] hover:underline flex items-center justify-between">
                <span>开始学习入门阶段</span>
                <span>→</span>
              </NuxtLink>
            </div>
          </div>

          <!-- Track 2 -->
          <div class="p-6 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] shadow-sm flex flex-col justify-between">
            <div class="space-y-3">
              <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-[#EBDCCB] text-[#79553D]">第二阶段 · 规则掌握</span>
              <h3 class="text-lg font-bold text-[#493A30]">分流规则与订阅维护</h3>
              <p class="text-xs text-[#79553D] leading-relaxed">
                学会区分 Rule 分流、Direct 直连和 Global 全局模式，管理多套配置文件与订阅自动更新。
              </p>
              <ul class="text-xs space-y-1.5 text-[#493A30] pt-2">
                <li><NuxtLink to="/profiles" class="hover:text-[#79553D]">• Clash 配置管理：导入、保存与迁移</NuxtLink></li>
                <li><NuxtLink to="/subscriptions" class="hover:text-[#79553D]">• 跨设备添加订阅与防泄露处理</NuxtLink></li>
                <li><NuxtLink to="/routing" class="hover:text-[#79553D]">• 界面规则设置选项底层对应什么</NuxtLink></li>
              </ul>
            </div>
            <div class="pt-4 mt-4 border-t border-[#E4D8C7]/50">
              <NuxtLink to="/routing" class="text-xs font-bold text-[#79553D] hover:underline flex items-center justify-between">
                <span>进入规则配置学习</span>
                <span>→</span>
              </NuxtLink>
            </div>
          </div>

          <!-- Track 3 -->
          <div class="p-6 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] shadow-sm flex flex-col justify-between">
            <div class="space-y-3">
              <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-[#EBDCCB] text-[#79553D]">第三阶段 · 高级网络</span>
              <h3 class="text-lg font-bold text-[#493A30]">TUN模式与故障排查</h3>
              <p class="text-xs text-[#79553D] leading-relaxed">
                深入掌握 Fake-IP 与 DNS 防污染解析，配置 TUN 虚拟网卡接管游戏与开发环境，化解各类断网疑难。
              </p>
              <ul class="text-xs space-y-1.5 text-[#493A30] pt-2">
                <li><NuxtLink to="/tun-mode" class="hover:text-[#79553D]">• TUN 模式安装组件与系统权限核对</NuxtLink></li>
                <li><NuxtLink to="/dns-settings" class="hover:text-[#79553D]">• DNS 覆写设置与防泄露解析管理</NuxtLink></li>
                <li><NuxtLink to="/app-errors" class="hover:text-[#79553D]">• 无法连接：从核心状态到运行日志</NuxtLink></li>
              </ul>
            </div>
            <div class="pt-4 mt-4 border-t border-[#E4D8C7]/50">
              <NuxtLink to="/app-errors" class="text-xs font-bold text-[#79553D] hover:underline flex items-center justify-between">
                <span>查阅高级故障排查</span>
                <span>→</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <!-- 7. 全量默认展开 FAQ Section (Requirement: "所有的FAQ全部要展开") -->
      <section class="space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#E4D8C7] pb-4">
          <div>
            <div class="inline-flex items-center gap-1.5 text-xs font-bold text-[#B08758] mb-1">
              <span>❓ FAQ</span>
              <span>·</span>
              <span>全部展开问答</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-[#493A30] tracking-tight">
              新手常见疑问：默认全部展开解答
            </h2>
          </div>
          <p class="text-xs text-[#79553D]">
            直观展现核心知识点，无需折叠与点击
          </p>
        </div>

        <FaqList />
      </section>

      <!-- 8. 作者与本站介绍 (Author Introduction & Identity) -->
      <section class="p-6 sm:p-8 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] shadow-sm flex flex-col md:flex-row items-center gap-6">
        <div class="w-20 h-20 rounded-custom bg-[#79553D] flex items-center justify-center p-3 border-2 border-[#B08758] shrink-0 shadow-md">
          <img src="/logo.png" alt="clash-app.blog logo" class="w-full h-full object-contain" />
        </div>
        <div class="space-y-2 text-center md:text-left flex-1">
          <div class="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <h3 class="text-xl font-extrabold text-[#493A30]">关于 clashapp·图解课堂</h3>
            <span class="text-xs px-2 py-0.5 rounded bg-[#EBDCCB] text-[#79553D] font-mono">clash-app.blog</span>
          </div>
          <p class="text-xs sm:text-sm text-[#79553D] leading-relaxed">
            本站由一群资深网络协议研究者与前端工程师共同编撰。我们坚持“图解优先、真实证据交付、客观中立测评”的原则，所有安装包均核对官方发布源与哈希值。对于第三方推荐链接，严格执行 <code class="bg-[#F2EAE1] px-1 rounded text-[#79553D]">rel="sponsored nofollow noopener"</code> 标准，确保透明公开，杜绝黑心带货与虚标骗局。
          </p>
          <div class="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-medium text-[#79553D]">
            <NuxtLink to="/about" class="hover:underline text-[#493A30] font-bold">了解完整站点说明与商业关系 →</NuxtLink>
            <NuxtLink to="/about#contact" class="hover:underline">提交教程纠错与意见反馈</NuxtLink>
            <NuxtLink to="/about#privacy" class="hover:underline">隐私与数据声明</NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

useHead({
  title: 'clashapp：按平台选择Clash应用并学会维护｜clashapp',
  meta: [
    { name: 'description', content: '围绕选择操作系统、确认应用与安装包、从首次运行到维护，按具体项目、系统与版本提供图解教程、操作实例和验证方法。' },
    { name: 'keywords', content: 'clashapp, Clash知识, Clash教程, 科学上网, Clash下载, Clash配置, Clash机场推荐, 高性价比梯子, 2026稳定机场' }
  ],
  link: [
    { rel: 'canonical', href: 'https://clash-app.blog/' }
  ]
})

const isDetailMode = ref(false)
</script>
