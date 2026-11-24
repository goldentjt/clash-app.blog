<template>
  <div class="cover-card-container group relative rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] hover:border-[#79553D] shadow-sm hover:shadow-warm transition-all duration-300 flex flex-col">
    <!-- 持续循环环境动效 3: 重点教程封面回形针轻微摆动 (顶部为轴，10秒一轮，左右约2度，分离于点击区) -->
    <div class="paperclip-decor absolute -top-2.5 right-6 z-25 pointer-events-none select-none" aria-hidden="true">
      <svg width="18" height="34" viewBox="0 0 18 34" fill="none" class="text-[#B08758] drop-shadow-2xs">
        <path d="M5 9V24C5 27.3137 7.68629 30 11 30C14.3137 30 17 27.3137 17 24V6C17 3.23858 14.7614 1 12 1C9.23858 1 7 3.23858 7 6V23C7 24.6569 8.34315 26 10 26C11.6569 26 13 24.6569 13 23V8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>

    <!-- Visual Image / Thumbnail Area -->
    <div class="relative w-full aspect-video bg-[#F2EAE1] overflow-hidden rounded-t-custom flex items-center justify-center border-b border-[#E4D8C7]">
      <!-- SVG Simulated Illustration -->
      <div class="w-full h-full p-4 flex flex-col justify-between relative">
        <div class="flex items-center justify-between z-10">
          <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FFFCF5]/90 text-[#79553D] border border-[#E4D8C7]">
            {{ badge || '图解步骤' }}
          </span>
          <span class="text-xs font-semibold text-[#B08758]">⏱ {{ readTime }}</span>
        </div>
        <div class="flex items-center justify-center my-auto">
          <div class="w-12 h-12 rounded-full bg-[#FFFCF5] border-2 border-[#B08758] flex items-center justify-center text-xl shadow-sm group-hover:scale-110 transition-transform">
            {{ icon || '📖' }}
          </div>
        </div>
        <div class="text-[11px] font-mono text-[#79553D]/70 z-10 flex justify-between">
          <span>{{ category }}</span>
          <span>clash-app.blog</span>
        </div>
      </div>

      <!-- Animation 4: 封面说明条展开 (悬停或聚焦时向上滑出展开真实摘要，手机端直接可见) -->
      <div class="cover-summary-bar absolute inset-x-0 bottom-0 bg-[#493A30]/95 text-[#FFFCF5] p-3 text-xs leading-relaxed backdrop-blur-sm z-20">
        <div class="flex items-center justify-between mb-1 text-[10px] text-[#B08758]">
          <span class="font-bold">核心提要</span>
          <span>点击进入正文 →</span>
        </div>
        <p class="line-clamp-3 text-[11px] text-[#F9F5EC]">{{ summary }}</p>
      </div>
    </div>

    <!-- Card Base Content -->
    <div class="p-4 flex-1 flex flex-col justify-between">
      <div>
        <h3 class="text-base font-bold text-[#493A30] group-hover:text-[#79553D] transition-colors leading-snug mb-1">
          {{ title }}
        </h3>
        <!-- Mobile explicit summary visible directly -->
        <p class="md:hidden text-xs text-[#79553D] line-clamp-2 mt-1 mb-2">
          {{ summary }}
        </p>
      </div>

      <div class="pt-3 border-t border-[#E4D8C7]/50 flex items-center justify-between text-xs text-[#79553D]">
        <span>查看完整图解</span>
        <span class="group-hover:translate-x-1 transition-transform font-bold text-[#79553D]">→</span>
      </div>
    </div>

    <!-- Clickable overlay NuxtLink -->
    <NuxtLink :to="link" class="absolute inset-0 z-30" :aria-label="title"></NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  summary: string
  link: string
  category: string
  readTime: string
  icon?: string
  badge?: string
}>()
</script>
