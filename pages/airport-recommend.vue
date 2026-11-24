<template>
  <ArticleLayout :page="pageMeta">
    <!-- Header Box with Transparent Disclosure -->
    <div class="space-y-3">
      <div class="p-4 sm:p-5 rounded-custom bg-[#FFFDF9] border-2 border-[#B08758] shadow-warm space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#EBDCCB] text-[#79553D]">
            🎯 选型核心枢纽
          </span>
          <span class="text-xs text-[#B08758] font-bold">2026年11月核实</span>
        </div>
        <div class="text-xl sm:text-2xl font-extrabold text-[#493A30] tracking-tight">
          Clash 机场服务选型与横评对比：28家多维横评与避坑指南
        </div>
        <p class="text-xs text-[#79553D] leading-relaxed">
          Clash 客户端必须配合优质节点订阅（YAML 格式）才能稳定访问海外网络。本页依据公开套餐、协议规范与实机核查，按需对比，帮您找到网络稳定、预算匹配的节点方案。
        </p>
      </div>

      <!-- Commercial Disclosure Alert Box -->
      <div class="p-3 rounded-custom bg-[#F4ECE1] border-l-4 border-[#79553D] text-[11px] text-[#493A30] space-y-1">
        <div class="font-bold text-[#79553D]">📢 商业模式与赞助透明度披露</div>
        <p class="text-[#79553D] leading-relaxed">
          本页面提供的外部注册入口包含推广代码（Affiliate Links）。通过本站链接注册并填入优惠码可获立减折扣，本站亦获得少额返利以维持服务器与教程维护支出。评测遵循客观事实与网络逻辑，不因商业关系隐瞒任何已确认的限制或缺陷。
        </p>
      </div>
    </div>

    <!-- Section 1: 选型决策树与场景匹配 -->
    <section id="section-1" class="space-y-3 mt-5">
      <h2 class="text-base sm:text-lg font-bold text-[#493A30] border-b border-[#E4D8C7] pb-1">
        一、比较对象纳入依据与场景决策树
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs sm:text-sm">
        <div class="p-3 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] space-y-1">
          <div class="font-bold text-[#79553D]">🔍 偶尔查资料 / 轻度学术</div>
          <p class="text-xs text-[#79553D] leading-relaxed">月耗 &lt; 50GB。首推 7-15 元入门小包（如飞猫云、快狸），花极少成本保活。</p>
        </div>
        <div class="p-3 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] space-y-1">
          <div class="font-bold text-[#79553D]">🎬 4K/8K 影音 / 高清追剧</div>
          <p class="text-xs text-[#79553D] leading-relaxed">月耗 200GB+。首推大带宽中转或专线（如暮光加速、大佬云），晚高峰抗抖动。</p>
        </div>
        <div class="p-3 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] space-y-1">
          <div class="font-bold text-[#79553D]">🤖 跨境运营 / AI商务协作</div>
          <p class="text-xs text-[#79553D] leading-relaxed">TikTok、ChatGPT 4o、Claude。首推全球云多国矩阵或微风网络智能隧道。</p>
        </div>
        <div class="p-3 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] space-y-1">
          <div class="font-bold text-[#79553D]">📦 长期备用 / 拒绝月度清零</div>
          <p class="text-xs text-[#79553D] leading-relaxed">平时用量少，用时需大流量。首推不限时按量包（如全球云一次性包、梯子云）。</p>
        </div>
      </div>
    </section>

    <!-- 本站主推 · 推广合作专区：全球云 (Featured Partner) -->
    <section id="featured-partner" class="space-y-2 mt-5">
      <div class="p-4 sm:p-5 rounded-custom bg-[#FFFDF9] border-2 border-[#79553D] shadow-warm space-y-3">
        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-[#E4D8C7] pb-2.5">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded text-xs font-bold bg-[#79553D] text-white">
              🌟 本站主推 · 推广合作
            </span>
            <span class="text-base sm:text-lg font-extrabold text-[#493A30]">全球云 (Global Cloud)</span>
          </div>
          <div class="text-xs sm:text-sm text-[#79553D]">
            专属8折优惠码：<code class="bg-[#EBDCCB] px-2 py-0.5 rounded font-mono font-bold text-[#493A30] text-xs sm:text-sm">qq88</code>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs sm:text-sm">
          <div class="p-2.5 rounded bg-[#F9F5EC] border border-[#E4D8C7] space-y-1">
            <div class="font-bold text-[#79553D]">真实资费架构</div>
            <p class="text-xs text-[#493A30] leading-relaxed">轻量版 20元/月(折后16元·120G)；进阶版 40元/月(折后32元·300G)；尊享大户 180元/月(1500G)；轻量年付 99元起；独享专线 680元/月。</p>
          </div>
          <div class="p-2.5 rounded bg-[#F9F5EC] border border-[#E4D8C7] space-y-1">
            <div class="font-bold text-[#79553D]">线路架构与协议格式</div>
            <p class="text-xs text-[#493A30] leading-relaxed">港/日/美/新/英/德多国出口矩阵，BGP智能中转优化；支持 Shadowsocks/Trojan 协议，一键导出 Clash YAML 订阅。</p>
          </div>
          <div class="p-2.5 rounded bg-[#F9F5EC] border border-[#E4D8C7] space-y-1">
            <div class="font-bold text-[#79553D]">核心业务定位</div>
            <p class="text-xs text-[#493A30] leading-relaxed">跨境电商后台、TikTok海外运营、ChatGPT/Claude多国IP调度；提供在线客服与工单快速支持。</p>
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#E4D8C7]/60">
          <div class="text-xs text-[#79553D]">
            透明提示：商业推广合作项目，资费真实核验，建议新手先选月付测试。
          </div>
          <div class="flex items-center gap-2">
            <NuxtLink to="/airport/quanqiuyun" class="text-xs sm:text-sm text-[#79553D] hover:underline font-bold">
              查看全球云独立评测 →
            </NuxtLink>
            <a
              href="https://hueue09.gcvipaff.com/#/?code=z8U9aaa4"
              target="_blank"
              rel="sponsored nofollow noopener"
              class="px-3.5 py-1.5 rounded bg-[#79553D] hover:bg-[#5C3E2A] text-white text-xs sm:text-sm font-bold transition-colors shadow-xs"
            >
              ⚡️ 直达全球云官网 (享8折) →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: 五大核心主力机场定位区分 -->
    <section id="section-2" class="space-y-3 mt-5">
      <div class="flex items-center justify-between border-b border-[#E4D8C7] pb-1">
        <h2 class="text-base sm:text-lg font-bold text-[#493A30]">
          二、五大主力机场差异化定位与直达通道
        </h2>
        <span class="text-xs text-[#79553D]">各具特色 · 避免盲目选型</span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 text-xs sm:text-sm">
        <div
          v-for="item in top5Airports"
          :key="item.id"
          class="p-3 rounded-custom bg-[#FFFCF5] border-2 border-[#79553D] flex flex-col justify-between shadow-xs transition-all"
          :class="item.id === 'quanqiuyun' ? 'ring-2 ring-[#79553D]/40' : ''"
        >
          <div class="space-y-1.5">
            <div class="flex items-center justify-between">
              <span class="text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-[#79553D] text-white">0{{ item.num }} 主力</span>
              <span class="text-xs font-bold text-[#B08758]">{{ item.tag }}</span>
            </div>
            <h3 class="text-sm sm:text-base font-extrabold text-[#493A30]">
              <NuxtLink :to="`/airport/${item.id}`" class="hover:underline">
                {{ item.name }}
              </NuxtLink>
            </h3>
            <div class="bg-[#F9F5EC] p-1.5 rounded border border-[#E4D8C7] text-xs space-y-0.5">
              <div class="flex justify-between items-center"><span>真实起价:</span><strong class="text-[#79553D] font-mono font-bold">{{ item.minPrice }}</strong></div>
              <div class="flex justify-between items-center"><span>专属码:</span><code class="bg-[#EBDCCB] px-1.5 py-0.5 rounded font-bold text-[#493A30] font-mono">{{ item.promoCode }}</code></div>
            </div>
            <p class="text-xs text-[#493A30] leading-snug line-clamp-2">{{ item.sellingPoints }}</p>
          </div>

          <div class="pt-2 mt-2 border-t border-[#E4D8C7] space-y-1.5">
            <a
              :href="item.inviteUrl"
              target="_blank"
              rel="sponsored nofollow noopener"
              class="w-full py-1.5 px-2 rounded bg-[#79553D] hover:bg-[#5C3E2A] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1 shadow-xs transition-colors"
            >
              <span>⚡️ 官网注册</span>
              <span>→</span>
            </a>
            <NuxtLink :to="`/airport/${item.id}`" class="block text-center text-xs text-[#79553D] hover:underline font-medium">
              查阅独立评测 →
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: 全网 28 家机场多维对比表 -->
    <section id="section-3" class="space-y-2.5 mt-5">
      <div class="border-b border-[#E4D8C7] pb-1 flex justify-between items-center">
        <h2 class="text-base sm:text-lg font-bold text-[#493A30]">
          三、全网 28 家机场价格线路多维总表
        </h2>
        <span class="text-xs text-[#79553D]">支持按需查阅独立报告</span>
      </div>

      <div class="overflow-x-auto border border-[#E4D8C7] rounded-custom bg-[#FFFCF5]">
        <table class="w-full text-xs sm:text-sm text-left border-collapse">
          <thead>
            <tr class="bg-[#F4ECE1] text-[#79553D] text-xs sm:text-sm font-bold">
              <th class="p-2.5 sm:p-3 border-b border-[#E4D8C7]">机场名称</th>
              <th class="p-2.5 sm:p-3 border-b border-[#E4D8C7]">起价/口径</th>
              <th class="p-2.5 sm:p-3 border-b border-[#E4D8C7]">线路架构</th>
              <th class="p-2.5 sm:p-3 border-b border-[#E4D8C7]">协议/格式</th>
              <th class="p-2.5 sm:p-3 border-b border-[#E4D8C7]">业务场景</th>
              <th class="p-2.5 sm:p-3 border-b border-[#E4D8C7]">专属码</th>
              <th class="p-2.5 sm:p-3 border-b border-[#E4D8C7]">操作通道</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#E4D8C7]">
            <tr
              v-for="a in allAirports"
              :key="a.id"
              class="hover:bg-[#F9F5EC] transition-colors"
              :class="a.id === 'quanqiuyun' ? 'bg-[#FFF9F0]' : a.isTop5 ? 'bg-[#FFFDF9]' : ''"
            >
              <td class="p-2.5 sm:p-3 whitespace-nowrap">
                <span class="font-mono text-[#79553D] text-xs mr-1 font-bold">{{ a.num }}</span>
                <NuxtLink :to="`/airport/${a.id}`" class="text-[#493A30] hover:text-[#79553D] font-bold text-xs sm:text-sm hover:underline">
                  {{ a.name }}
                </NuxtLink>
                <span v-if="a.id === 'quanqiuyun'" class="ml-1 text-xs bg-[#79553D] text-white px-1.5 py-0.5 rounded font-bold">主推</span>
                <span v-else-if="a.isTop5" class="ml-1 text-xs bg-[#EBDCCB] text-[#79553D] px-1.5 py-0.5 rounded font-bold">主力</span>
              </td>
              <td class="p-2.5 sm:p-3 whitespace-nowrap">
                <div class="font-bold text-[#79553D] font-mono text-xs sm:text-sm">{{ a.minPrice }}</div>
                <div class="text-xs text-[#79553D]/80">{{ a.periodNote }}</div>
              </td>
              <td class="p-2.5 sm:p-3 text-xs text-[#493A30] whitespace-nowrap font-medium">{{ a.lineArch }}</td>
              <td class="p-2.5 sm:p-3 text-xs text-[#79553D] whitespace-nowrap">{{ a.protocol }}</td>
              <td class="p-2.5 sm:p-3 text-xs text-[#493A30]">{{ a.audience }}</td>
              <td class="p-2.5 sm:p-3 whitespace-nowrap">
                <code class="text-xs bg-[#EBDCCB] px-1.5 py-0.5 rounded font-bold text-[#493A30] font-mono">{{ a.promoCode }}</code>
              </td>
              <td class="p-2.5 sm:p-3 whitespace-nowrap">
                <div class="flex items-center gap-1.5">
                  <NuxtLink
                    :to="`/airport/${a.id}`"
                    class="px-2 py-1 rounded border border-[#B08758] text-[#79553D] hover:bg-[#F4ECE1] text-xs font-bold transition-colors"
                  >
                    评测
                  </NuxtLink>
                  <a
                    :href="a.inviteUrl"
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    class="px-2 py-1 rounded bg-[#79553D] text-white hover:bg-[#5C3E2A] text-xs font-bold transition-colors shadow-2xs"
                  >
                    注册 →
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-xs text-[#79553D] mt-1.5">
        注：标注【年付折算】者需一次性支付全年；标注【未知】者系服务商未明示流量重置日，购买前请在官方结算页核对。
      </p>
    </section>

    <!-- Section 4: 选型网络知识 -->
    <section id="section-4" class="space-y-2 mt-5">
      <h2 class="text-base sm:text-lg font-bold text-[#493A30] border-b border-[#E4D8C7] pb-1">
        四、选购必备网络知识与配置关联
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs text-[#493A30]">
        <div class="p-2.5 rounded bg-[#FFFCF5] border border-[#E4D8C7] space-y-1">
          <h4 class="font-bold text-[#79553D]">BGP 中转 vs IPLC 专线</h4>
          <p class="text-[11px] leading-relaxed">
            普通直连易受国际出口拥塞影响；BGP 在三网机房优化中转；IPLC 为物理内网专线，不经 GFW 审查，抗封抗 QoS 处于第一梯队。
          </p>
          <NuxtLink to="/network-intro" class="text-[10px] text-[#B08758] hover:underline block">
            → 详见《科学上网入门：应用与节点》
          </NuxtLink>
        </div>
        <div class="p-2.5 rounded bg-[#FFFCF5] border border-[#E4D8C7] space-y-1">
          <h4 class="font-bold text-[#79553D]">节点倍率如何影响流量？</h4>
          <p class="text-[11px] leading-relaxed">
            1.0x 传输 1GB 扣 1GB；0.5x 节点传输 1GB 仅扣 500MB（适合下载）；1.5x 专线每 1GB 扣 1.5GB。
          </p>
          <NuxtLink to="/routing" class="text-[10px] text-[#B08758] hover:underline block">
            → 详见《Clash 规则分流设置》
          </NuxtLink>
        </div>
        <div class="p-2.5 rounded bg-[#FFFCF5] border border-[#E4D8C7] space-y-1">
          <h4 class="font-bold text-[#79553D]">订阅如何导入客户端？</h4>
          <p class="text-[11px] leading-relaxed">
            在机场后台复制 YAML 订阅，填入 Clash Verge Rev 或 CMFA 即可一键更新节点。
          </p>
          <NuxtLink to="/subscriptions" class="text-[10px] text-[#B08758] hover:underline block">
            → 详见《Clash 订阅管理指南》
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Section 5: 常见问答 (All expanded FAQs) -->
    <section id="section-5" class="space-y-2 mt-5">
      <div class="border-b border-[#E4D8C7] pb-1 flex justify-between items-center">
        <h2 class="text-base sm:text-lg font-bold text-[#493A30]">
          五、新手选购常见疑问（全部展开）
        </h2>
        <span class="text-[11px] text-[#79553D]">直观速查 · 无须折叠</span>
      </div>
      <div class="space-y-2 text-xs text-[#493A30]">
        <div class="p-3 rounded bg-[#FFFCF5] border border-[#E4D8C7] space-y-0.5">
          <h3 class="font-bold text-sm text-[#493A30]">Q1：为什么强烈建议新手首购选月付？</h3>
          <p class="text-[11px] text-[#79553D] leading-relaxed">
            答：国际出口受光缆与防火墙动态影响，年付锁定全年风险。建议先选 1 个月月付，在常用时段（特别是 20:00-23:00 晚高峰）验证满意后再升档。
          </p>
        </div>
        <div class="p-3 rounded bg-[#FFFCF5] border border-[#E4D8C7] space-y-0.5">
          <h3 class="font-bold text-sm text-[#493A30]">Q2：为什么连接后 ChatGPT 仍然提示 Access Denied？</h3>
          <p class="text-[11px] text-[#79553D] leading-relaxed">
            答：AI 平台对机房数据中心 IP 风控极严。应在 Clash 的 PROXIES 策略组中切换至美国或新加坡原生住宅 IP 节点，避免使用香港等未开放地区出口。
          </p>
        </div>
        <div class="p-3 rounded bg-[#FFFCF5] border border-[#E4D8C7] space-y-0.5">
          <h3 class="font-bold text-sm text-[#493A30]">Q3：不限时流量包真能一直用吗？</h3>
          <p class="text-[11px] text-[#79553D] leading-relaxed">
            答：流量不随月清零，但依赖服务商长期存续；多数商家规定超过 180 天完全无活跃连接可能休眠。按需采购 1-2 年量即可，无需屯超大包。
          </p>
        </div>
        <div class="p-3 rounded bg-[#FFFCF5] border border-[#E4D8C7] space-y-0.5">
          <h3 class="font-bold text-sm text-[#493A30]">Q4：节点全红连接超时怎么办？</h3>
          <p class="text-[11px] text-[#79553D] leading-relaxed">
            答：先查本机系统时钟是否开启自动同步（时钟偏差会导致 TLS 证书校验失败）；再右键更新订阅；排查见
            <NuxtLink to="/app-errors" class="text-[#B08758] underline font-bold">《故障排查表》</NuxtLink>。
          </p>
        </div>
      </div>
    </section>

    <!-- Section 6: 更新记录 -->
    <section id="section-6" class="space-y-1 mt-5">
      <h2 class="text-xs font-bold text-[#493A30] border-b border-[#E4D8C7] pb-0.5">
        六、更新记录与核查历史
      </h2>
      <div class="p-2 rounded bg-[#FFFCF5] border border-[#E4D8C7] text-[10px] text-[#79553D] space-y-0.5">
        <div><strong>2026-11-24：</strong>存量内容审查：核实 28 家价格口径，新增全球云主推合作专区与架构解耦。</div>
        <div><strong>2026-11-23：</strong>上线 28 家独立评测专刊链接与优惠码核验。</div>
      </div>
    </section>
  </ArticleLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { PAGES } from '~/data/pages'
import { AIRPORTS } from '~/data/airports'

const pageMeta = PAGES.find(p => p.path === '/airport-recommend')!

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

const allAirports = computed(() => {
  return AIRPORTS.map(a => {
    let periodNote = '常规月付'
    if (a.id === 'feimaoyun') periodNote = '年付折算(84元)'
    else if (a.id === 'jilianyun') periodNote = '常规月付/年付'
    else if (a.id === 'flashleap' || a.id === 'firefly') periodNote = '年付折算(96元)'
    else if (a.id === 'civet') periodNote = '年付85元起'
    else if (a.id === 'kuajieyun' || a.id === 'dalaoyun') periodNote = '阶梯月付'
    else if (a.id === 'kuaili') periodNote = '入门月付'
    else if (a.id === 'quanqiuyun') periodNote = '月付(折后16元)'

    let lineArch = a.nodeStatus.includes('IPLC') ? 'IPLC专线' :
                   a.nodeStatus.includes('IEPL') ? 'IEPL专线' :
                   a.nodeStatus.includes('多国') ? '多国BGP' :
                   a.nodeStatus.includes('BGP') ? 'BGP中转' : '优化隧道'
    let protocol = 'SS/Trojan'
    let audience = a.targetAudience.replace(/追求/g, '').replace(/人群/g, '').replace(/用户/g, '').replace(/和/g, '/').trim()
    return { ...a, periodNote, lineArch, protocol, audience }
  })
})

const top5Airports = computed(() => {
  return [
    { ...AIRPORTS[0], tag: '多国矩阵', sellingPoints: '欧美亚多国出口矩阵，跨境出海首选，8折码 qq88。' },
    { ...AIRPORTS[1], tag: '晚高峰稳', sellingPoints: '三网大带宽优化，晚高峰稳定低抖动，4K秒开。' },
    { ...AIRPORTS[2], tag: '低价IEPL', sellingPoints: '低价IEPL专线，香港晚高峰稳，流媒体全解锁。' },
    { ...AIRPORTS[3], tag: '智能隧道', sellingPoints: '多机房智能隧道互联，低延迟高吞吐，即时通信顺畅。' },
    { ...AIRPORTS[4], tag: '企业专线', sellingPoints: '物理专线抗QoS拥塞，多设备大并发稳定不掉线。' }
  ]
})
</script>
