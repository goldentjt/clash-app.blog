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
            <h4 class="text-xs font-bold text-[#79553D] uppercase tracking-wider mb-3 flex items-center gap-2">
              <span>📑 页面章节导航</span>
            </h4>
            <ul class="space-y-2 text-xs">
              <li v-for="(h2, idx) in page.h2s" :key="idx">
                <a
                  :href="'#section-' + (idx + 1)"
                  class="block py-1 px-2 rounded hover:bg-[#F2EAE1] text-[#493A30] hover:text-[#79553D] transition-colors"
                >
                  {{ idx + 1 }}. {{ h2 }}
                </a>
              </li>
              <li v-if="page.h3s && page.h3s.length">
                <div class="mt-2 pt-2 border-t border-[#E4D8C7]/50 text-[11px] text-[#79553D]">
                  <span class="font-bold">检查项与故障排查：</span>
                  <div v-for="(h3, i) in page.h3s" :key="i" class="pl-2 py-0.5 text-[#493A30]">
                    • {{ h3 }}
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <!-- Top 4 Airport Recommendation Callout Box -->
          <div class="p-5 rounded-custom bg-gradient-to-br from-[#FFFCF5] to-[#F9F5EC] border-2 border-[#B08758] shadow-sm space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-[#79553D] uppercase">🚀 核心专线配套</span>
              <span class="text-[10px] bg-[#B08758] text-white px-1.5 py-0.2 rounded-full font-bold">4大主力机场</span>
            </div>
            <h4 class="text-sm font-bold text-[#493A30]">
              客户端已就绪？精选 4 大主力机场
            </h4>
            <p class="text-xs text-[#79553D] leading-relaxed">
              针对不同应用场景严格区分定位，晚高峰 4K 秒开与 ChatGPT 原生解锁：
            </p>
            <div class="space-y-2 text-xs text-[#493A30]">
              <!-- 01 U1S1 -->
              <div class="p-2 rounded bg-white border border-[#E4D8C7] flex items-center justify-between gap-2 shadow-2xs">
                <div>
                  <div class="flex items-center gap-1.5">
                    <span class="text-[9px] font-bold px-1 rounded bg-[#79553D] text-white">主力 01</span>
                    <strong class="text-xs text-[#493A30]">U1S1</strong>
                    <span class="text-[9px] text-[#B08758] font-bold">稳健自用</span>
                  </div>
                  <div class="text-[10px] text-[#79553D] mt-0.5">原生IP/20元起/码 u1s188</div>
                </div>
                <a
                  href="https://quanqiu.v2yunvipaff.com/#/?code=YCf9VJsS"
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  class="px-2.5 py-1 rounded bg-[#79553D] hover:bg-[#5C3E2A] text-white text-[11px] font-bold shrink-0 transition-colors shadow-2xs"
                >
                  官网注册 →
                </a>
              </div>

              <!-- 02 极连云 -->
              <div class="p-2 rounded bg-white border border-[#E4D8C7] flex items-center justify-between gap-2 shadow-2xs">
                <div>
                  <div class="flex items-center gap-1.5">
                    <span class="text-[9px] font-bold px-1 rounded bg-[#79553D] text-white">主力 02</span>
                    <strong class="text-xs text-[#493A30]">极连云</strong>
                    <span class="text-[9px] text-[#B08758] font-bold">IPLC专线</span>
                  </div>
                  <div class="text-[10px] text-[#79553D] mt-0.5">超低延迟/15.5元起/码 jly88</div>
                </div>
                <a
                  href="https://quanqiu.jlyvipaff.com/#/?code=NplcUEEV"
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  class="px-2.5 py-1 rounded bg-[#79553D] hover:bg-[#5C3E2A] text-white text-[11px] font-bold shrink-0 transition-colors shadow-2xs"
                >
                  官网注册 →
                </a>
              </div>

              <!-- 03 光年梯 -->
              <div class="p-2 rounded bg-white border border-[#E4D8C7] flex items-center justify-between gap-2 shadow-2xs">
                <div>
                  <div class="flex items-center gap-1.5">
                    <span class="text-[9px] font-bold px-1 rounded bg-[#79553D] text-white">主力 03</span>
                    <strong class="text-xs text-[#493A30]">光年梯</strong>
                    <span class="text-[9px] text-[#B08758] font-bold">极简导入</span>
                  </div>
                  <div class="text-[10px] text-[#79553D] mt-0.5">新手一键/18元起/码 gnt88</div>
                </div>
                <a
                  href="https://quanqiu.gntaff.com/#/?code=qUJeOegs"
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  class="px-2.5 py-1 rounded bg-[#79553D] hover:bg-[#5C3E2A] text-white text-[11px] font-bold shrink-0 transition-colors shadow-2xs"
                >
                  官网注册 →
                </a>
              </div>

              <!-- 04 光速云 -->
              <div class="p-2 rounded bg-white border border-[#E4D8C7] flex items-center justify-between gap-2 shadow-2xs">
                <div>
                  <div class="flex items-center gap-1.5">
                    <span class="text-[9px] font-bold px-1 rounded bg-[#79553D] text-white">主力 04</span>
                    <strong class="text-xs text-[#493A30]">光速云</strong>
                    <span class="text-[9px] text-[#B08758] font-bold">即时响应</span>
                  </div>
                  <div class="text-[10px] text-[#79553D] mt-0.5">BGP隧道/17元起/码 gsy88</div>
                </div>
                <a
                  href="https://quanqiu.gsyaff.com/#/?code=AAkbe2W6"
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  class="px-2.5 py-1 rounded bg-[#79553D] hover:bg-[#5C3E2A] text-white text-[11px] font-bold shrink-0 transition-colors shadow-2xs"
                >
                  官网注册 →
                </a>
              </div>
            </div>

            <NuxtLink
              to="/airport-recommend"
              class="w-full py-2 rounded-custom bg-[#EBDCCB] hover:bg-[#E4D8C7] text-[#79553D] text-xs font-bold flex items-center justify-center gap-1 transition-colors text-center"
            >
              <span>查看 28 家机场全量对比表与参数</span>
              <span>→</span>
            </NuxtLink>
          </div>

          <!-- Long-Tail Search Index Box -->
          <div class="p-4 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] text-xs space-y-2">
            <h5 class="font-bold text-[#493A30] text-[11px]">本页长尾检索意图承接：</h5>
            <ul class="text-[11px] text-[#79553D] space-y-1 list-disc pl-4">
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
import type { PageMeta } from '~/data/pages'

defineProps<{
  page: PageMeta
}>()
</script>
