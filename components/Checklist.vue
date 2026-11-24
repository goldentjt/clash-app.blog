<template>
  <div class="my-6 p-4 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] shadow-sm">
    <div class="flex items-center justify-between mb-3 border-b border-[#E4D8C7]/60 pb-2">
      <div class="flex items-center gap-2">
        <span class="text-base">📋</span>
        <h4 class="font-bold text-sm text-[#493A30]">{{ title || '前置准备与检查清单' }}</h4>
      </div>
      <span class="text-xs text-[#79553D] font-mono">
        已就绪：{{ checkedCount }} / {{ items.length }}
      </span>
    </div>

    <div class="space-y-2">
      <div
        v-for="(item, idx) in items"
        :key="idx"
        @click="toggleItem(idx)"
        @keydown.space.prevent="toggleItem(idx)"
        @keydown.enter.prevent="toggleItem(idx)"
        tabindex="0"
        role="checkbox"
        :aria-checked="checkedItems[idx] || false"
        class="checklist-item flex items-start gap-3 p-2.5 rounded-custom border border-[#E4D8C7] cursor-pointer select-none transition-all"
        :class="{ checked: checkedItems[idx] }"
      >
        <!-- Animation 8: 勾选框与勾号出现动画 -->
        <div
          class="w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 border transition-all"
          :class="checkedItems[idx] ? 'bg-[#79553D] border-[#79553D] text-white' : 'bg-white border-[#E4D8C7]'"
        >
          <svg
            width="14"
            height="14"
            class="checklist-svg-check w-3.5 h-3.5"
            :class="checkedItems[idx] ? 'opacity-100 scale-100' : 'opacity-0 scale-50'"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div class="text-xs text-[#493A30] leading-relaxed flex-1">
          <span :class="{ 'line-through text-[#79553D]/70': checkedItems[idx] }">{{ item.text }}</span>
          <span v-if="item.tip" class="block text-[11px] text-[#79553D]/80 mt-0.5">{{ item.tip }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  title?: string
  items: Array<{ text: string; tip?: string }>
}>()

// Default ALL items UNCHECKED! As strictly required: "允许取消，不能自动勾选"
const checkedItems = ref<Record<number, boolean>>({})

const toggleItem = (idx: number) => {
  checkedItems.value[idx] = !checkedItems.value[idx]
}

const checkedCount = computed(() => {
  return Object.values(checkedItems.value).filter(Boolean).length
})
</script>
