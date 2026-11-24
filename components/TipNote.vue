<template>
  <div class="my-5 rounded-custom border border-[#B08758]/50 bg-[#FFFCF5] overflow-hidden shadow-sm transition-all">
    <!-- Note Header Trigger -->
    <button
      @click="isOpen = !isOpen"
      class="w-full px-4 py-3 bg-[#F4ECE1] hover:bg-[#EBDCCB] transition-colors flex items-center justify-between text-left focus:outline-none"
      :aria-expanded="isOpen"
    >
      <div class="flex items-center gap-2.5">
        <!-- Animation 9: 便签顶部小扣点转动 45 度 -->
        <div
          class="note-peg-icon w-4 h-4 rounded-full bg-[#B08758] flex items-center justify-center text-white shadow-xs shrink-0"
          :class="{ open: isOpen }"
        >
          <span class="text-[9px] font-bold">📌</span>
        </div>
        <span class="text-xs font-bold text-[#79553D]">{{ title || '深度拓展与避坑提示' }}</span>
      </div>

      <div class="flex items-center gap-2 text-xs text-[#79553D]">
        <span>{{ isOpen ? '收起提示' : '展开查看' }}</span>
        <svg
          width="16"
          height="16"
          class="w-4 h-4 transform transition-transform duration-200"
          :class="isOpen ? 'rotate-180' : ''"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </button>

    <!-- Note Body Panel (Downward unrolling) -->
    <div
      v-show="isOpen"
      class="p-4 text-xs text-[#493A30] leading-relaxed border-t border-[#E4D8C7] bg-[#FFFCF5] space-y-2"
    >
      <slot></slot>
      <div class="pt-2 text-right">
        <button
          @click="isOpen = false"
          class="text-[11px] text-[#79553D] hover:underline font-medium"
        >
          [明确关闭此提示]
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  title?: string
}>()

const isOpen = ref(false)
</script>
