<template>
  <div class="my-8 rounded-custom bg-[#FFFCF5] border-2 border-[#B08758] p-5 sm:p-6 shadow-warm relative overflow-hidden">
    <!-- Header banner -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E4D8C7] pb-4 mb-5">
      <div>
        <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EBDCCB] text-[#79553D] text-[11px] font-bold mb-1">
          <span>👑 核心节点服务精选</span>
          <span>·</span>
          <span>5大主力机场定位区分</span>
        </div>
        <h2 class="text-xl sm:text-2xl font-extrabold text-[#493A30] tracking-tight">
          五大主力机场定位差异与直达推荐
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

    <!-- 5 Major Airports Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
      <div
        v-for="item in topAirports"
        :key="item.id"
        class="rounded-custom bg-[#F9F5EC] border border-[#E4D8C7] hover:border-[#79553D] p-3 flex flex-col justify-between shadow-xs transition-all hover:shadow-sm"
        :class="item.id === 'quanqiuyun' ? 'ring-2 ring-[#79553D]/40 bg-[#FFFDF9]' : ''"
      >
        <div class="space-y-2">
          <!-- Top Badge & Number -->
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#79553D] text-white">
              0{{ item.num }} 主力
            </span>
            <span class="text-xs font-bold text-[#B08758] truncate max-w-[120px]">
              {{ item.tag }}
            </span>
          </div>

          <!-- Name & Core Positioning -->
          <div>
            <h3 class="text-sm sm:text-base font-extrabold text-[#493A30]">
              <NuxtLink :to="`/airport/${item.id}`" class="hover:underline">
                {{ item.name }}
              </NuxtLink>
            </h3>
            <p class="text-xs font-medium text-[#79553D] mt-0.5 line-clamp-1">
              {{ item.positioning }}
            </p>
          </div>

          <!-- Price & Promo -->
          <div class="p-2 rounded bg-[#FFFCF5] border border-[#E4D8C7] text-xs space-y-1">
            <div class="flex justify-between items-center">
              <span class="text-[#79553D]">起步门槛：</span>
              <span class="font-mono font-bold text-[#79553D]">{{ item.minPrice }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-[#79553D]">优惠码：</span>
              <span class="font-mono font-bold text-[#493A30] bg-[#EBDCCB] px-1.5 py-0.2 rounded">{{ item.promoCode }}</span>
            </div>
          </div>

          <!-- Distinct Advantage Analysis -->
          <p class="text-xs text-[#493A30] leading-snug line-clamp-2">
            {{ item.sellingPoints }}
          </p>
        </div>

        <!-- Prominent Registration Button with rel="sponsored nofollow noopener" -->
        <div class="pt-2.5 mt-2 border-t border-[#E4D8C7] space-y-1.5">
          <a
            :href="item.inviteUrl"
            target="_blank"
            rel="sponsored nofollow noopener"
            class="w-full py-2 px-2.5 rounded-custom bg-[#79553D] hover:bg-[#5C3E2A] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1 shadow-xs transition-colors"
          >
            <span>⚡️ 直达注册</span>
            <span>→</span>
          </a>
          <NuxtLink
            :to="`/airport/${item.id}`"
            class="block text-center text-xs text-[#79553D] hover:underline font-medium"
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
      tag: '主推 · 多国矩阵',
      positioning: '欧美亚多国出口 · 8折码 qq88'
    },
    {
      ...AIRPORTS[1],
      tag: '晚高峰稳 · 低抖动',
      positioning: '三网大带宽优化 · 4K秒开'
    },
    {
      ...AIRPORTS[2],
      tag: '低价IEPL · 香港稳',
      positioning: '低价IEPL专线 · 流媒体全解'
    },
    {
      ...AIRPORTS[3],
      tag: '智能隧道 · 极速响应',
      positioning: '多机房智能隧道 · 网页秒开'
    },
    {
      ...AIRPORTS[4],
      tag: '企业专线 · 多端并发',
      positioning: '物理专线抗QoS · 多设备稳定'
    }
  ]
})
</script>
