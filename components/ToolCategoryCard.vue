<template>
  <NuxtLink
    :to="link"
    class="tool-category-card group p-5 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] hover:border-[#79553D] hover:shadow-warm transition-all flex flex-col justify-between"
  >
    <div class="flex items-start gap-3">
      <!-- Animation 5: 工具图标摇摆 (tool-icon swings ±3deg on hover/focus) -->
      <div class="tool-icon w-12 h-12 rounded-custom bg-[#F9F5EC] border border-[#E4D8C7] group-hover:border-[#B08758] flex items-center justify-center text-2xl shrink-0 transition-transform">
        <span>{{ icon }}</span>
      </div>

      <div class="space-y-1">
        <div class="flex items-center gap-2">
          <h3 class="font-bold text-sm text-[#493A30] group-hover:text-[#79553D] transition-colors">
            {{ title }}
          </h3>
          <span v-if="tag" class="text-[10px] px-1.5 py-0.2 rounded bg-[#EBDCCB] text-[#79553D] font-medium">
            {{ tag }}
          </span>
        </div>
        <p class="text-xs text-[#79553D] leading-relaxed line-clamp-2">
          {{ desc }}
        </p>
      </div>
    </div>

    <div class="mt-4 pt-3 border-t border-[#E4D8C7]/50 flex items-center justify-between text-xs text-[#79553D]">
      <span>{{ count }} 篇核心教程</span>
      <span class="group-hover:translate-x-1 transition-transform font-bold text-[#79553D]">浏览 →</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  desc: string
  link: string
  icon: string
  count: number
  tag?: string
}>()
</script>
