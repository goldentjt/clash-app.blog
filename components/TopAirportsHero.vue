<template>
  <div class="my-8 rounded-custom bg-[#FFFCF5] border-2 border-[#B08758] p-5 sm:p-6 shadow-warm relative overflow-hidden">
    <!-- Header banner -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E4D8C7] pb-4 mb-5">
      <div>
        <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EBDCCB] text-[#79553D] text-[11px] font-bold mb-1">
          <span>👑 核心节点服务精选</span>
          <span>·</span>
          <span>4大主力机场定位区分</span>
        </div>
        <h2 class="text-xl sm:text-2xl font-extrabold text-[#493A30] tracking-tight">
          四大主力机场定位差异与直达推荐
        </h2>
        <p class="text-xs text-[#79553D] mt-0.5">
          按网络需求匹配，避免盲目选型；官网直达注册均配置独家优惠码。
        </p>
      </div>

      <NuxtLink
        to="/airport-recommend"
        class="text-xs font-bold text-[#79553D] hover:text-[#493A30] bg-[#F9F5EC] hover:bg-[#F4ECE1] px-3 py-1.5 rounded-custom border border-[#E4D8C7] shrink-0 transition-colors flex items-center gap-1"
      >
        <span>查看 28 家完整横评与避坑指南</span>
        <span>→</span>
      </NuxtLink>
    </div>

    <!-- 4 Major Airports Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
      <div
        v-for="item in topAirports"
        :key="item.id"
        class="rounded-custom bg-[#F9F5EC] border border-[#E4D8C7] hover:border-[#79553D] p-3.5 flex flex-col justify-between shadow-xs transition-all hover:shadow-sm"
      >
        <div class="space-y-2">
          <!-- Top Badge & Number -->
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#79553D] text-white">
              0{{ item.num }} 主力
            </span>
            <span class="text-[10px] font-bold text-[#B08758]">
              {{ item.tag }}
            </span>
          </div>

          <!-- Name & Core Positioning -->
          <div>
            <h3 class="text-base font-extrabold text-[#493A30]">
              <NuxtLink :to="`/airport/${item.id}`" class="hover:underline">
                {{ item.name }}
              </NuxtLink>
            </h3>
            <p class="text-[11px] font-semibold text-[#79553D] mt-0.5">
              {{ item.positioning }}
            </p>
          </div>

          <!-- Price & Promo -->
          <div class="p-1.5 rounded bg-[#FFFCF5] border border-[#E4D8C7] text-[11px] space-y-0.5">
            <div class="flex justify-between items-center">
              <span class="text-[#79553D]">起步门槛：</span>
              <span class="font-mono font-bold text-[#79553D]">{{ item.minPrice }}</span>
            </div>
            <div class="flex justify-between items-center text-[10px]">
              <span class="text-[#79553D]">优惠码：</span>
              <span class="font-mono font-bold text-[#493A30] bg-[#EBDCCB] px-1 rounded">{{ item.promoCode }}</span>
            </div>
          </div>

          <!-- Distinct Advantage Analysis -->
          <p class="text-[11px] text-[#493A30] leading-snug line-clamp-2">
            {{ item.sellingPoints }}
          </p>
        </div>

        <!-- Prominent Registration Button with rel="sponsored nofollow noopener" -->
        <div class="pt-2.5 mt-2 border-t border-[#E4D8C7] space-y-1">
          <a
            :href="item.inviteUrl"
            target="_blank"
            rel="sponsored nofollow noopener"
            class="w-full py-1.5 px-2 rounded-custom bg-[#79553D] hover:bg-[#5C3E2A] text-white font-bold text-[11px] flex items-center justify-center gap-1 shadow-xs transition-colors"
          >
            <span>⚡️ 直达注册 {{ item.name }}</span>
            <span>→</span>
          </a>
          <NuxtLink
            :to="`/airport/${item.id}`"
            class="block text-center text-[10px] text-[#79553D] hover:underline"
          >
            查阅独立评测 →
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { AIRPORTS } from '~/data/airports'

const topAirports = computed(() => {
  return [
    {
      ...AIRPORTS[0],
      tag: '原生IP · 长期自用',
      positioning: '原生住宅IP · 中转优化'
    },
    {
      ...AIRPORTS[1],
      tag: '纯正IPLC · 抗封锁',
      positioning: '超低延时 (30-50ms) · 抗QoS'
    },
    {
      ...AIRPORTS[2],
      tag: '一键极速 · 新手款',
      positioning: '新手友好 · 三网线路调度'
    },
    {
      ...AIRPORTS[3],
      tag: 'BGP入口 · 低延迟',
      positioning: 'BGP智能隧道 · 网页秒开'
    }
  ]
})
</script>
