<template>
  <div class="py-8 sm:py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Breadcrumbs -->
      <nav class="flex items-center gap-2 text-xs text-[#79553D] mb-6" aria-label="面包屑导航">
        <NuxtLink to="/" class="hover:underline">首页</NuxtLink>
        <span>/</span>
        <span class="text-[#B08758]">{{ page.category }}</span>
        <span>/</span>
        <span class="text-[#493A30] font-medium truncate max-w-xs">{{ page.shortTitle }}</span>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- Main Article Content (lg:col-span-8) -->
        <main class="lg:col-span-8 space-y-6">
          <!-- Article Header Card -->
          <div class="p-6 sm:p-8 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] shadow-sm space-y-4">
            <div class="flex flex-wrap items-center justify-between gap-2 border-b border-[#E4D8C7]/60 pb-3">
              <span class="px-2.5 py-0.5 rounded-full bg-[#EBDCCB] text-[#79553D] text-xs font-semibold inline-flex items-center">
                <span class="bracket-anim-left text-[#B08758] font-serif mr-0.5 select-none text-xs pointer-events-none" aria-hidden="true">【</span>
                <span>{{ page.category }} · 核心图解</span>
                <span class="bracket-anim-right text-[#B08758] font-serif ml-0.5 select-none text-xs pointer-events-none" aria-hidden="true">】</span>
              </span>
              <div class="flex items-center gap-3 text-xs text-[#79553D]">
                <span>⏱ 预估阅读：{{ page.readTime }}</span>
                <span>📅 校验日期：2026-11-22</span>
              </div>
            </div>

            <!-- H1 Title with subtle breathing brackets (确保文字并行，末尾括号与文字绑定绝不独占单行) -->
            <h1 class="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#493A30] tracking-tight leading-snug break-words" style="text-wrap: balance;">
              <span class="bracket-anim-left text-[#B08758] font-serif mr-0.5 select-none text-lg sm:text-2xl pointer-events-none" aria-hidden="true">【</span><span>{{ page.h1.slice(0, -2) }}</span><span class="inline-block whitespace-nowrap">{{ page.h1.slice(-2) }}<span class="bracket-anim-right text-[#B08758] font-serif ml-0.5 select-none text-lg sm:text-2xl pointer-events-none" aria-hidden="true">】</span></span>
            </h1>

            <!-- Summary & Description -->
            <p class="text-sm sm:text-base text-[#79553D] leading-relaxed">
              {{ page.description }}
            </p>

            <!-- Keyword Tags -->
            <div class="flex flex-wrap gap-1.5 pt-2">
              <span
                v-for="kw in page.keywords"
                :key="kw"
                class="px-2 py-0.5 rounded text-[11px] bg-[#F9F5EC] border border-[#E4D8C7] text-[#79553D]"
              >
                # {{ kw }}
              </span>
            </div>
          </div>

          <!-- Article Body -->
          <article class="p-6 sm:p-8 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] shadow-sm text-[#493A30] leading-relaxed text-sm sm:text-base space-y-6">
            <slot></slot>
          </article>

          <!-- Prev & Next Navigation -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <NuxtLink
              v-if="page.prevPage"
              :to="page.prevPage.path"
              class="p-4 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] hover:border-[#79553D] hover:shadow-sm transition-all group"
            >
              <span class="text-xs text-[#79553D] block mb-1">← 上一篇阅读任务</span>
              <span class="text-sm font-bold text-[#493A30] group-hover:text-[#79553D]">{{ page.prevPage.title }}</span>
            </NuxtLink>
            <div v-else class="hidden sm:block"></div>

            <NuxtLink
              v-if="page.nextPage"
              :to="page.nextPage.path"
              class="p-4 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] hover:border-[#79553D] hover:shadow-sm transition-all text-right group"
            >
              <span class="text-xs text-[#79553D] block mb-1">下一篇进阶任务 →</span>
              <span class="text-sm font-bold text-[#493A30] group-hover:text-[#79553D]">{{ page.nextPage.title }}</span>
            </NuxtLink>
          </div>
        </main>

        <!-- Sidebar (lg:col-span-4) -->
        <aside class="lg:col-span-4 space-y-6 sticky top-20">
          <!-- In-Page Table of Contents -->
          <div class="p-5 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] shadow-sm">
            <h4 class="text-sm font-extrabold text-[#79553D] uppercase tracking-wider mb-3 flex items-center gap-2">
              <span>📑 页面章节导航</span>
            </h4>
            <ul class="space-y-2 text-xs sm:text-sm">
              <li v-for="(h2, idx) in page.h2s" :key="idx">
                <a
                  :href="'#section-' + (idx + 1)"
                  class="block py-1 px-2 rounded hover:bg-[#F2EAE1] text-[#493A30] hover:text-[#79553D] transition-colors"
                >
                  {{ idx + 1 }}. {{ h2 }}
                </a>
              </li>
              <li v-if="page.h3s && page.h3s.length">
                <div class="mt-2 pt-2 border-t border-[#E4D8C7]/50 text-xs text-[#79553D]">
                  <span class="font-bold">检查项与故障排查：</span>
                  <div v-for="(h3, i) in page.h3s" :key="i" class="pl-2 py-0.5 text-[#493A30]">
                    • {{ h3 }}
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <!-- Top 5 Airport Recommendation Callout Box -->
          <div class="p-5 sm:p-6 rounded-custom bg-gradient-to-br from-[#FFFCF5] to-[#F9F5EC] border-2 border-[#B08758] shadow-sm space-y-3.5">
            <div class="flex items-center justify-between">
              <span class="text-xs sm:text-sm font-extrabold text-[#79553D] uppercase tracking-wide">🚀 核心专线配套</span>
              <span class="text-xs bg-[#B08758] text-white px-2 py-0.5 rounded-full font-bold shadow-2xs">5大主力机场</span>
            </div>
            <h4 class="text-base sm:text-lg font-extrabold text-[#493A30] tracking-tight">
              客户端已就绪？精选 5 大主力机场
            </h4>
            <p class="text-xs sm:text-sm text-[#5C4033] leading-relaxed">
              针对不同应用场景严格区分定位，晚高峰 4K 秒开与 ChatGPT 原生解锁：
            </p>
            <div class="space-y-2.5 text-xs sm:text-sm text-[#493A30]">
              <div
                v-for="a in top5Airports"
                :key="a.id"
                class="p-2.5 sm:p-3 rounded-custom bg-white border border-[#E4D8C7] hover:border-[#79553D] flex items-center justify-between gap-3 shadow-2xs transition-all"
                :class="a.id === 'quanqiuyun' ? 'ring-2 ring-[#79553D]/30' : ''"
              >
                <div class="min-w-0 flex-1">
                  <div class="flex items-center gap-1.5 flex-nowrap">
                    <span class="text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-[#79553D] text-white shrink-0 whitespace-nowrap">
                      主力 {{ a.num }}
                    </span>
                    <NuxtLink
                      :to="'/airport/' + a.id"
                      class="text-sm sm:text-base font-extrabold text-[#493A30] hover:text-[#79553D] transition-colors whitespace-nowrap"
                    >
                      {{ a.name.split('（')[0] }}
                    </NuxtLink>
                    <span class="text-xs text-[#B08758] font-bold shrink-0 whitespace-nowrap">
                      {{ a.id === 'quanqiuyun' ? '多国出口·主推' : (a.id === 'muguang' ? '晚高峰4K' : (a.id === 'feimaoyun' ? '低价IEPL' : (a.id === 'breezenet' ? '大流量骨干' : '大带宽中转'))) }}
                    </span>
                  </div>
                  <div class="text-xs text-[#5C4033] mt-1 flex items-center gap-x-2 gap-y-0.5 whitespace-nowrap">
                    <span class="font-bold text-[#79553D] whitespace-nowrap">{{ a.minPrice.split(' ')[0] }}</span>
                    <span class="whitespace-nowrap">码: <code class="font-mono font-bold bg-[#EBDCCB] px-1.5 py-0.5 rounded text-[#493A30] whitespace-nowrap">{{ a.promoCode }}</code></span>
                  </div>
                </div>
                <a
                  :href="a.inviteUrl"
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  class="px-3 py-1.5 rounded-custom bg-[#79553D] hover:bg-[#5C3E2A] text-white text-xs sm:text-sm font-bold shrink-0 transition-colors shadow-2xs flex items-center gap-0.5 whitespace-nowrap"
                >
                  <span>官网注册</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            <NuxtLink
              to="/airport-recommend"
              class="w-full py-2.5 rounded-custom bg-[#EBDCCB] hover:bg-[#E4D8C7] text-[#79553D] text-xs sm:text-sm font-extrabold flex items-center justify-center gap-1 transition-colors text-center shadow-2xs mt-2"
            >
              <span>查看 28 家机场全量对比表与参数</span>
              <span>→</span>
            </NuxtLink>
          </div>

          <!-- Long-Tail Search Index Box -->
          <div class="p-4 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] text-xs space-y-2">
            <h5 class="font-bold text-[#493A30] text-xs">本页长尾检索意图承接：</h5>
            <ul class="text-xs text-[#79553D] space-y-1 list-disc pl-4">
              <li v-for="(lt, i) in page.longTailKeywords" :key="i">
                {{ lt }}
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { PageMeta } from '~/data/pages'
import { AIRPORTS } from '~/data/airports'

defineProps<{
  page: PageMeta
}>()

const top5Airports = computed(() => AIRPORTS.filter(a => a.isTop5))
</script>
