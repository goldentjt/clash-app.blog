<template>
  <div
    :id="'airport-' + airport.id"
    class="rounded-custom border transition-all duration-200 p-4 flex flex-col justify-between"
    :class="airport.isTop4
      ? 'bg-[#FFFCF5] border-2 border-[#79553D] shadow-sm relative'
      : 'bg-[#FFFCF5] border-[#E4D8C7] hover:border-[#B08758]'"
  >
    <!-- Top 4 Crown Badge -->
    <div
      v-if="airport.badge"
      class="absolute -top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#79553D] text-white text-[10px] font-bold shadow-xs tracking-wide"
    >
      {{ airport.badge }}
    </div>

    <!-- Header info -->
    <div class="space-y-2" :class="{ 'pt-1': airport.badge }">
      <div class="flex items-center justify-between border-b border-[#E4D8C7]/60 pb-2">
        <div class="flex items-center gap-2">
          <span class="text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-[#EBDCCB] text-[#79553D]">
            No.{{ airport.num }}
          </span>
          <h3 class="text-base font-extrabold text-[#493A30]">
            {{ airport.name }}
          </h3>
        </div>
        <span class="text-xs font-bold text-[#79553D] font-mono bg-[#F9F5EC] px-2 py-0.5 rounded border border-[#E4D8C7]">
          {{ airport.minPrice }}
        </span>
      </div>

      <p class="text-xs font-semibold text-[#B08758]">{{ airport.headline }}</p>
      <p class="text-xs text-[#493A30] leading-relaxed">{{ airport.sellingPoints }}</p>

      <!-- Coupon Row -->
      <div class="p-2 rounded bg-[#F4ECE1] border border-[#E4D8C7] flex items-center justify-between text-xs">
        <div class="flex items-center gap-1.5 truncate">
          <span class="text-[#79553D] font-medium shrink-0">优惠码：</span>
          <span class="font-mono font-bold text-[#493A30] bg-[#FFFCF5] px-1.5 py-0.2 rounded border border-[#E4D8C7]">
            {{ airport.promoCode }}
          </span>
          <span class="text-[10px] text-[#B08758] truncate">({{ airport.promoDiscount }})</span>
        </div>
        <button
          @click="copyCode(airport.promoCode)"
          class="px-2 py-0.5 rounded bg-[#79553D] text-white text-[10px] font-medium hover:bg-[#5C3E2A] transition-colors shrink-0 ml-2"
        >
          {{ copied ? '已复制' : '复制' }}
        </button>
      </div>

      <!-- Quick specs -->
      <div class="text-[11px] text-[#79553D] space-y-1 pt-1">
        <div><strong>线路：</strong>{{ airport.nodeStatus }}</div>
        <div><strong>套餐：</strong>{{ airport.tierSummary }}</div>
        <div><strong>适用：</strong>{{ airport.targetAudience }}</div>
        <div class="flex items-center gap-1 flex-wrap pt-0.5">
          <span class="font-medium text-[#493A30]">解锁：</span>
          <span v-for="tag in airport.aiUnlock" :key="tag" class="px-1.5 py-0.2 rounded bg-[#FFFCF5] border border-[#E4D8C7] text-[10px]">
            ✓ {{ tag }}
          </span>
        </div>
      </div>
    </div>

    <!-- Official Registration Button with rel="sponsored nofollow noopener" -->
    <div class="mt-4 pt-2.5 border-t border-[#E4D8C7]">
      <a
        :href="airport.inviteUrl"
        target="_blank"
        rel="sponsored nofollow noopener"
        class="w-full py-2.5 px-3 rounded-custom font-bold text-xs transition-all flex items-center justify-center gap-1.5 text-center shadow-xs"
        :class="airport.isTop4
          ? 'bg-[#79553D] text-white hover:bg-[#5C3E2A] shadow-sm'
          : 'bg-[#FFFCF5] border border-[#79553D] text-[#79553D] hover:bg-[#79553D] hover:text-white'"
      >
        <span>⚡️ 官网直达注册 / 立即体验 {{ airport.name }}</span>
        <span>→</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Airport } from '~/data/airports'

defineProps<{
  airport: Airport
}>()

const copied = ref(false)

const copyCode = (code: string) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(code)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  }
}
</script>
