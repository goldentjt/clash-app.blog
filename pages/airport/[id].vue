<template>
  <ArticleLayout v-if="review" :page="pageMeta">
    <!-- Top Highlight Card with Promo Code & Official Entrance -->
    <div class="p-4 sm:p-5 rounded-custom bg-[#FFFDF9] border-2 border-[#B08758] shadow-warm space-y-3">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E4D8C7] pb-3">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span v-if="review.id === 'quanqiuyun'" class="px-2 py-0.5 rounded text-xs font-bold bg-[#79553D] text-white">
              🌟 本站主推 · 推广合作
            </span>
            <span v-else class="px-2 py-0.5 rounded text-xs font-mono font-bold bg-[#79553D] text-white">
              0{{ review.num }} 主力推荐
            </span>
            <span class="px-2 py-0.5 rounded text-xs font-bold bg-[#EBDCCB] text-[#79553D]">
              {{ review.focusType }}
            </span>
            <span class="text-xs text-[#B08758] font-bold">
              {{ review.tag }}
            </span>
          </div>
          <h2 class="text-lg sm:text-xl font-extrabold text-[#493A30] tracking-tight">
            {{ review.name }} 官方通道与独立评测概览
          </h2>
        </div>

        <!-- Official Registration CTA Button -->
        <div class="flex flex-col gap-1.5 shrink-0 sm:text-right">
          <a
            :href="review.inviteUrl"
            target="_blank"
            rel="sponsored nofollow noopener"
            class="px-5 py-2.5 rounded-custom bg-[#79553D] hover:bg-[#5C3E2A] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-warm hover:shadow-warm-hover transition-all"
          >
            <span>⚡️ 直达注册 {{ review.name }} 官网</span>
            <span>→</span>
          </a>
          <div class="flex items-center gap-1.5 text-xs text-[#79553D] justify-center sm:justify-end">
            <span>专属优惠码：</span>
            <code class="font-mono font-bold bg-[#EBDCCB] px-1.5 py-0.5 rounded text-[#493A30]">{{ review.promoCode }}</code>
            <button
              @click="copyCode(review.promoCode)"
              class="text-[11px] text-[#79553D] hover:text-[#493A30] underline"
            >
              {{ copied ? '已复制！' : '点击复制' }}
            </button>
          </div>
        </div>
      </div>

      <!-- Quick Specs Pills -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
        <div class="p-2 rounded bg-[#F9F5EC] border border-[#E4D8C7]">
          <div class="text-[#79553D] text-[11px]">门槛价格</div>
          <div class="font-bold text-[#493A30] font-mono mt-0.5">{{ review.minPrice }}</div>
        </div>
        <div class="p-2 rounded bg-[#F9F5EC] border border-[#E4D8C7]">
          <div class="text-[#79553D] text-[11px]">线路类型</div>
          <div class="font-bold text-[#493A30] mt-0.5">{{ review.focusType }}</div>
        </div>
        <div class="p-2 rounded bg-[#F9F5EC] border border-[#E4D8C7]">
          <div class="text-[#79553D] text-[11px]">核对日期</div>
          <div class="font-bold text-[#493A30] mt-0.5">2026年11月24日</div>
        </div>
        <div class="p-2 rounded bg-[#F9F5EC] border border-[#E4D8C7]">
          <div class="text-[#79553D] text-[11px]">外链安全属性</div>
          <div class="font-bold text-[#B08758] mt-0.5">rel="sponsored" 规范</div>
        </div>
      </div>
    </div>

    <!-- Commercial Transparency Disclosure for 全球云 -->
    <div v-if="review.id === 'quanqiuyun'" class="p-3 rounded-custom bg-[#F4ECE1] border-l-4 border-[#79553D] text-xs text-[#493A30] space-y-1">
      <div class="font-bold text-[#79553D]">📢 商业推广与透明度声明</div>
      <p class="text-[11px] text-[#79553D] leading-relaxed">
        全球云为本站重点推荐与商务合作服务商。上方注册链接包含专属 8 折优惠代码（<code>qq88</code>）。评测内容遵循客观中立原则，资费与配置均已核验，已明确标注待进一步核验的事项（如年付重置周期），确保读者透明决策。
      </p>
    </div>

    <!-- 1. 开头先给购买判断 -->
    <section id="section-1" class="space-y-2 mt-4">
      <h2 class="text-base sm:text-lg font-bold text-[#493A30] border-b border-[#E4D8C7] pb-1">
        一、购买决策判断与核心速览
      </h2>
      <div class="p-3.5 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] space-y-2 text-xs text-[#493A30] leading-relaxed">
        <div class="p-2.5 rounded bg-[#EBDCCB]/50 border-l-4 border-[#79553D] font-medium text-[#493A30]">
          <strong>核心速判：</strong> {{ review.verdict.summary }}
        </div>
        <ul class="space-y-1.5 pt-0.5">
          <li><strong>🎯 适合需求：</strong>{{ review.verdict.targetNeed }}</li>
          <li><strong>✨ 核心特点：</strong>{{ review.verdict.keyFeature }}</li>
          <li><strong>⚠️ 已确认限制：</strong>{{ review.verdict.knownLimits }}</li>
          <li><strong>🔍 尚未测试项目：</strong>{{ review.verdict.untestedItems }}</li>
        </ul>
      </div>
    </section>

    <!-- 2. 机场基本资料 -->
    <section id="section-2" class="space-y-2 mt-4">
      <h2 class="text-base sm:text-lg font-bold text-[#493A30] border-b border-[#E4D8C7] pb-1">
        二、机场基本资料与来源声明
      </h2>
      <div class="p-3.5 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] text-xs text-[#493A30] space-y-2">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div><strong>官网入口：</strong><a :href="review.inviteUrl" target="_blank" rel="sponsored nofollow noopener" class="text-[#B08758] underline font-bold">{{ review.name }} 官网登录入口</a></div>
          <div><strong>客户端支持：</strong>Clash Verge Rev、Clash Meta、Shadowrocket、Sing-box</div>
          <div><strong>运营周期参考：</strong>{{ review.basicInfo.operatingTime }}</div>
          <div><strong>客服渠道：</strong>{{ review.basicInfo.supportChannels }}</div>
        </div>
        <div class="p-2 rounded bg-[#F4ECE1] text-[11px] text-[#79553D] leading-relaxed">
          <strong>来源与核查声明：</strong>{{ review.basicInfo.officialVsVerified }}
        </div>
      </div>
    </section>

    <!-- 3. 套餐与真实使用成本 -->
    <section id="section-3" class="space-y-2 mt-4">
      <h2 class="text-base sm:text-lg font-bold text-[#493A30] border-b border-[#E4D8C7] pb-1">
        三、套餐梯度与真实使用成本
      </h2>
      <div class="space-y-2.5 text-xs text-[#493A30]">
        <div class="overflow-x-auto border border-[#E4D8C7] rounded bg-[#FFFCF5]">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-[#F4ECE1] text-[#79553D]">
                <th class="p-2 border-b border-[#E4D8C7]">套餐档位</th>
                <th class="p-2 border-b border-[#E4D8C7]">价格</th>
                <th class="p-2 border-b border-[#E4D8C7]">流量</th>
                <th class="p-2 border-b border-[#E4D8C7]">特点与选档说明</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(p, idx) in review.pricingAndCost.plans" :key="idx" class="border-b border-[#E4D8C7]/50 hover:bg-[#F9F5EC]">
                <td class="p-2 font-bold">{{ p.name }}</td>
                <td class="p-2 font-mono text-[#79553D] font-bold">{{ p.price }}</td>
                <td class="p-2">{{ p.traffic }}</td>
                <td class="p-2 text-[11px] text-[#79553D]">{{ p.note }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
          <div class="p-2.5 rounded bg-[#FFFCF5] border border-[#E4D8C7] space-y-1">
            <div class="font-bold text-[#79553D]">💡 周期差异与重置：</div>
            <p>{{ review.pricingAndCost.cycleDifference }} {{ review.pricingAndCost.unlimitedTrafficRule }}</p>
          </div>
          <div class="p-2.5 rounded bg-[#FFFCF5] border border-[#E4D8C7] space-y-1">
            <div class="font-bold text-[#79553D]">👥 设备与退款规则：</div>
            <p>{{ review.pricingAndCost.deviceLimit }} {{ review.pricingAndCost.refundRules }}</p>
          </div>
        </div>
        <div class="p-2.5 rounded bg-[#F4ECE1] text-[11px] text-[#79553D]">
          <strong>费用测算：</strong>{{ review.pricingAndCost.costEstimation }}
        </div>
      </div>
    </section>

    <!-- 4. 节点地区与覆盖范围 -->
    <section id="section-4" class="space-y-2 mt-4">
      <h2 class="text-base sm:text-lg font-bold text-[#493A30] border-b border-[#E4D8C7] pb-1">
        四、节点地区与覆盖范围
      </h2>
      <div class="overflow-x-auto border border-[#E4D8C7] rounded bg-[#FFFCF5] text-xs">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-[#F4ECE1] text-[#79553D]">
              <th class="p-2 border-b border-[#E4D8C7]">地区</th>
              <th class="p-2 border-b border-[#E4D8C7]">线路类型</th>
              <th class="p-2 border-b border-[#E4D8C7]">倍率</th>
              <th class="p-2 border-b border-[#E4D8C7]">适用场景</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(r, idx) in review.nodesAndCoverage.regions" :key="idx" class="border-b border-[#E4D8C7]/50 hover:bg-[#F9F5EC]">
              <td class="p-2 font-bold">{{ r.region }}</td>
              <td class="p-2">{{ r.lineType }}</td>
              <td class="p-2 font-mono text-[#79553D]">{{ r.multiplier }}</td>
              <td class="p-2 text-[11px] text-[#79553D]">{{ r.feature }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- 5. 实机场景验证表现 (AI / 流媒体 / 办公) -->
    <section id="section-5" class="space-y-2 mt-4">
      <h2 class="text-base sm:text-lg font-bold text-[#493A30] border-b border-[#E4D8C7] pb-1">
        五、实机场景验证表现 (AI / 流媒体 / 办公)
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
        <div class="p-2.5 rounded bg-[#FFFCF5] border border-[#E4D8C7] space-y-1">
          <div class="font-bold text-[#79553D]">🤖 AI 工具交互</div>
          <p class="text-[11px] text-[#493A30] leading-relaxed">
            支持 ChatGPT 4o、Claude 3.5。推荐选择美国（US）或新加坡（SG）原生住宅节点，避开未开放地区出口。
          </p>
        </div>
        <div class="p-2.5 rounded bg-[#FFFCF5] border border-[#E4D8C7] space-y-1">
          <div class="font-bold text-[#79553D]">🎬 4K/8K 视频播放</div>
          <p class="text-[11px] text-[#493A30] leading-relaxed">
            YouTube 4K 秒开，Netflix 华语特供与迪士尼正常加载。晚高峰建议使用香港/日本 IPLC 或优化中转。
          </p>
        </div>
        <div class="p-2.5 rounded bg-[#FFFCF5] border border-[#E4D8C7] space-y-1">
          <div class="font-bold text-[#79553D]">📚 学术检索与办公</div>
          <p class="text-[11px] text-[#493A30] leading-relaxed">
            Google Scholar、GitHub 代码拉取流畅无阻。建议搭配规则分流模式，避免国内流量误走节点。
          </p>
        </div>
      </div>
      <div class="p-2 rounded bg-[#F4ECE1] text-[11px] text-[#79553D]">
        <strong>测试环境与免责：</strong>基于 macOS / Windows 客户端实机观察，不承诺搜索排名或绝对无中断，网络质量受本地 ISP 影响。
      </div>
    </section>

    <!-- 6. Clash 客户端导入与排错指南 -->
    <section id="section-6" class="space-y-2 mt-4">
      <h2 class="text-base sm:text-lg font-bold text-[#493A30] border-b border-[#E4D8C7] pb-1">
        六、Clash 客户端导入与排错指南
      </h2>
      <div class="p-3.5 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] text-xs text-[#493A30] space-y-2">
        <ol class="list-decimal pl-4 space-y-1 text-[11px] text-[#493A30] leading-relaxed">
          <li>登录 <a :href="review.inviteUrl" target="_blank" rel="sponsored nofollow noopener" class="text-[#B08758] underline font-bold">{{ review.name }} 官网后台</a>，在「仪表盘」复制 Clash 订阅链接。</li>
          <li>打开 Clash Verge Rev 或 Clash Meta，在「配置」页粘贴链接并点击「下载/保存」。</li>
          <li>在「代理/PROXIES」策略组选择低延迟节点，开启「系统代理」或「TUN 模式」即可畅游。</li>
        </ol>
        <div class="p-2 rounded bg-[#EBDCCB]/40 text-[11px] text-[#79553D]">
          遇到节点全红超时？请查阅本站核心指南：<NuxtLink to="/app-errors" class="text-[#79553D] underline font-bold">《Clash 无法连接故障排查表》</NuxtLink> 与 <NuxtLink to="/routing" class="text-[#79553D] underline font-bold">《分流规则配置教程》</NuxtLink>。
        </div>
      </div>
    </section>

    <!-- 7. 优缺点总结与选型对比 -->
    <section id="section-7" class="space-y-2 mt-4">
      <h2 class="text-base sm:text-lg font-bold text-[#493A30] border-b border-[#E4D8C7] pb-1">
        七、优缺点总结与选型对比
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
        <div class="p-3 rounded bg-[#FFFCF5] border border-[#E4D8C7] space-y-1.5">
          <div class="font-bold text-[#79553D]">✅ 核心优势</div>
          <ul class="text-[11px] text-[#493A30] space-y-1 list-disc pl-4">
            <li v-for="(pro, i) in review.prosAndCons.pros" :key="i">{{ pro }}</li>
          </ul>
        </div>
        <div class="p-3 rounded bg-[#FFFCF5] border border-[#E4D8C7] space-y-1.5">
          <div class="font-bold text-[#79553D]">⚠️ 注意事项与边界</div>
          <ul class="text-[11px] text-[#493A30] space-y-1 list-disc pl-4">
            <li v-for="(con, i) in review.prosAndCons.cons" :key="i">{{ con }}</li>
          </ul>
        </div>
      </div>
      <div class="p-2.5 rounded bg-[#F4ECE1] text-[11px] text-[#79553D] space-y-1">
        <p><strong>横向选型对比：</strong>{{ review.comparison.comparedToTop4 }}</p>
        <p class="pt-0.5">详细多维横评与 28 家价格对比，请移步本站核心专题：<NuxtLink to="/airport-recommend" class="text-[#B08758] underline font-bold">《Clash 机场服务选型与横评对比》</NuxtLink>。</p>
      </div>
    </section>

    <!-- 8. 常见高频疑问解答 (全部展开) -->
    <section id="section-8" class="space-y-2 mt-4">
      <div class="border-b border-[#E4D8C7] pb-1 flex justify-between items-center">
        <h2 class="text-base sm:text-lg font-bold text-[#493A30]">
          八、常见使用疑问解答（全部展开）
        </h2>
        <span class="text-[11px] text-[#79553D]">直观速查 · 无须折叠</span>
      </div>
      <div class="space-y-2 text-xs text-[#493A30]">
        <div v-for="(faq, i) in review.faqs" :key="i" class="p-3 rounded bg-[#FFFCF5] border border-[#E4D8C7] space-y-0.5">
          <h3 class="font-bold text-sm text-[#493A30]">Q{{ i + 1 }}：{{ faq.q }}</h3>
          <p class="text-[11px] text-[#79553D] leading-relaxed">
            答：{{ faq.a }}
          </p>
        </div>
      </div>
    </section>

    <!-- 9. 更新核对历史 -->
    <section id="section-9" class="space-y-1.5 mt-4">
      <h2 class="text-sm font-bold text-[#493A30] border-b border-[#E4D8C7] pb-1">
        九、更新记录与核查历史
      </h2>
      <div class="p-2.5 rounded bg-[#FFFCF5] border border-[#E4D8C7] text-[11px] text-[#79553D] space-y-1">
        <div v-for="(ch, i) in review.changelog" :key="i">
          <strong>{{ ch.date }}【{{ ch.type }}】：</strong>{{ ch.detail }}
        </div>
      </div>
    </section>
  </ArticleLayout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { AIRPORT_REVIEWS } from '~/data/airportReviews'
import { PAGES, type PageMeta } from '~/data/pages'

const route = useRoute()
const airportId = route.params.id as string
const review = AIRPORT_REVIEWS[airportId] || AIRPORT_REVIEWS['u1s1']

const pageMeta = computed<PageMeta>(() => {
  const found = PAGES.find(p => p.path === `/airport/${review.id}`)
  if (found) return found
  return {
    path: `/airport/${review.id}`,
    title: `${review.name}机场独立评测：${review.tag}与选型指南｜clashapp`,
    description: review.seoDescription,
    h1: `${review.name} 机场独立深度评测报告`,
    h2s: ['购买决策判断与核心速览', '机场基本资料与来源声明', '套餐梯度与真实使用成本', '节点地区与覆盖范围', '实机场景验证表现', 'Clash 客户端导入与排错指南', '优缺点总结与选型对比', '常见使用疑问解答'],
    category: '服务选择',
    shortTitle: `${review.name}评测`,
    keywords: review.keywords,
    longTailKeywords: [review.seoTitle],
    readTime: '5 分钟',
    summary: review.seoDescription
  }
})

const copied = ref(false)
function copyCode(code: string) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(code)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  }
}

useHead({
  title: `${review.name}机场独立评测：${review.tag}与选型指南｜clashapp`,
  meta: [
    { name: 'description', content: review.seoDescription },
    { name: 'keywords', content: review.keywords.join(', ') },
    { property: 'og:title', content: review.seoTitle },
    { property: 'og:description', content: review.seoDescription }
  ],
  link: [
    { rel: 'canonical', href: `https://clash-app.blog/airport/${review.id}` }
  ]
})
</script>
