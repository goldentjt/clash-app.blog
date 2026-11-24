<template>
  <header class="sticky top-0 z-50 bg-[#F9F5EC]/95 backdrop-blur-md border-b border-[#E4D8C7] transition-all duration-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <!-- Logo & Domain -->
      <NuxtLink to="/" class="flex items-center gap-3 group shrink-0">
        <div class="w-10 h-10 rounded-custom bg-[#79553D] flex items-center justify-center p-1.5 shadow-sm group-hover:scale-105 transition-transform duration-200 border border-[#B08758]">
          <img src="/favicon.png" alt="clashapp logo" class="w-full h-full object-contain" />
        </div>
        <div class="flex flex-col">
          <span class="font-barlow font-bold text-lg leading-tight text-[#493A30] tracking-tight group-hover:text-[#79553D] transition-colors">
            clashapp<span class="text-[#B08758] font-normal text-xs ml-1">图解课堂</span>
          </span>
          <span class="text-[10px] text-[#79553D]/80 font-mono tracking-wider">clash-app.blog</span>
        </div>
      </NuxtLink>

      <!-- Desktop Nav Links -->
      <nav class="hidden md:flex items-center gap-1 text-sm font-medium text-[#493A30]">
        <NuxtLink to="/" class="px-2.5 py-1.5 rounded-custom hover:bg-[#FFFCF5] hover:text-[#79553D] transition-colors" active-class="text-[#79553D] font-bold bg-[#FFFCF5] border border-[#E4D8C7]">
          首页
        </NuxtLink>
        <NuxtLink to="/download" class="px-2.5 py-1.5 rounded-custom hover:bg-[#FFFCF5] hover:text-[#79553D] transition-colors" active-class="text-[#79553D] font-bold bg-[#FFFCF5] border border-[#E4D8C7]">
          客户端下载
        </NuxtLink>
        <NuxtLink to="/first-run" class="px-2.5 py-1.5 rounded-custom hover:bg-[#FFFCF5] hover:text-[#79553D] transition-colors" active-class="text-[#79553D] font-bold bg-[#FFFCF5] border border-[#E4D8C7]">
          入门教程
        </NuxtLink>
        <NuxtLink to="/profiles" class="px-2.5 py-1.5 rounded-custom hover:bg-[#FFFCF5] hover:text-[#79553D] transition-colors" active-class="text-[#79553D] font-bold bg-[#FFFCF5] border border-[#E4D8C7]">
          配置与订阅
        </NuxtLink>
        <NuxtLink to="/app-errors" class="px-2.5 py-1.5 rounded-custom hover:bg-[#FFFCF5] hover:text-[#79553D] transition-colors" active-class="text-[#79553D] font-bold bg-[#FFFCF5] border border-[#E4D8C7]">
          无法连接排查
        </NuxtLink>
        <NuxtLink to="/airport-recommend" class="px-3 py-1.5 rounded-custom bg-[#79553D] text-[#FFFCF5] hover:bg-[#5C3E2A] transition-all shadow-sm font-semibold flex items-center gap-1 ml-1">
          <span>🚀 机场推荐</span>
          <span class="bg-[#B08758] text-[10px] px-1.5 py-0.2 rounded-full text-white">4大主力</span>
        </NuxtLink>
      </nav>

      <!-- Search Bar & Mobile Menu Button -->
      <div class="flex items-center gap-2">
        <!-- Live Search Bar -->
        <div class="relative">
          <div class="relative flex items-center">
            <input
              v-model="searchQuery"
              @focus="isSearchOpen = true"
              type="text"
              placeholder="搜索所有教程与问题..."
              class="w-40 sm:w-56 md:w-64 pl-8 pr-3 py-1.5 text-xs sm:text-sm rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] focus:outline-none focus:border-[#79553D] focus:ring-1 focus:ring-[#79553D] text-[#493A30] placeholder-[#79553D]/50 transition-all shadow-sm"
            />
            <svg width="16" height="16" style="width:16px;height:16px;min-width:16px;min-height:16px;max-width:16px;max-height:16px;flex-shrink:0;" class="w-4 h-4 absolute left-2.5 text-[#79553D]/60 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <button
              v-if="searchQuery"
              @click="searchQuery = ''"
              class="absolute right-2 text-xs text-[#79553D]/60 hover:text-[#493A30]"
            >
              ✕
            </button>
          </div>

          <!-- Live Search Results Dropdown -->
          <div
            v-if="isSearchOpen && (searchResults.length > 0 || searchQuery.trim().length > 0)"
            class="absolute right-0 mt-2 w-80 sm:w-96 max-h-96 overflow-y-auto bg-[#FFFCF5] border border-[#E4D8C7] rounded-custom shadow-warm-hover p-2 z-50"
          >
            <div class="text-[11px] font-medium text-[#79553D] px-2 py-1 border-b border-[#E4D8C7] flex justify-between items-center">
              <span>找到 {{ searchResults.length }} 篇相关指南</span>
              <button @click="isSearchOpen = false" class="hover:text-[#493A30]">关闭</button>
            </div>
            <div v-if="searchResults.length === 0" class="p-4 text-center text-xs text-[#79553D]/70">
              未检索到匹配文章，请尝试搜索 “Windows”、“订阅”、“无法连接” 或 “机场”
            </div>
            <ul v-else class="divide-y divide-[#E4D8C7]/50 mt-1">
              <li v-for="page in searchResults" :key="page.path">
                <NuxtLink
                  :to="page.path"
                  @click="isSearchOpen = false; searchQuery = ''"
                  class="block p-2 hover:bg-[#F2EAE1] rounded-custom transition-colors"
                >
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-[#493A30] truncate">{{ page.shortTitle }}</span>
                    <span class="text-[10px] px-1.5 py-0.5 rounded bg-[#EBDCCB] text-[#79553D]">{{ page.category }}</span>
                  </div>
                  <p class="text-[11px] text-[#79553D] line-clamp-1 mt-0.5">{{ page.title }}</p>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <!-- Mobile Drawer Toggle -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden p-2 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] text-[#493A30] hover:text-[#79553D]"
          aria-label="切换菜单"
        >
          <svg width="20" height="20" style="width:20px;height:20px;min-width:20px;min-height:20px;max-width:20px;max-height:20px;flex-shrink:0;" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div v-if="isMobileMenuOpen" class="md:hidden border-t border-[#E4D8C7] bg-[#FFFCF5] px-4 py-4 space-y-3">
      <div class="grid grid-cols-2 gap-2 text-xs">
        <NuxtLink to="/" @click="isMobileMenuOpen = false" class="p-2 rounded-custom bg-[#F9F5EC] border border-[#E4D8C7] text-center font-medium">首页</NuxtLink>
        <NuxtLink to="/download" @click="isMobileMenuOpen = false" class="p-2 rounded-custom bg-[#F9F5EC] border border-[#E4D8C7] text-center font-medium">客户端下载</NuxtLink>
        <NuxtLink to="/first-run" @click="isMobileMenuOpen = false" class="p-2 rounded-custom bg-[#F9F5EC] border border-[#E4D8C7] text-center font-medium">首次运行教程</NuxtLink>
        <NuxtLink to="/profiles" @click="isMobileMenuOpen = false" class="p-2 rounded-custom bg-[#F9F5EC] border border-[#E4D8C7] text-center font-medium">配置管理</NuxtLink>
        <NuxtLink to="/subscriptions" @click="isMobileMenuOpen = false" class="p-2 rounded-custom bg-[#F9F5EC] border border-[#E4D8C7] text-center font-medium">订阅更新</NuxtLink>
        <NuxtLink to="/proxies" @click="isMobileMenuOpen = false" class="p-2 rounded-custom bg-[#F9F5EC] border border-[#E4D8C7] text-center font-medium">节点与策略</NuxtLink>
        <NuxtLink to="/routing" @click="isMobileMenuOpen = false" class="p-2 rounded-custom bg-[#F9F5EC] border border-[#E4D8C7] text-center font-medium">规则分流</NuxtLink>
        <NuxtLink to="/tun-mode" @click="isMobileMenuOpen = false" class="p-2 rounded-custom bg-[#F9F5EC] border border-[#E4D8C7] text-center font-medium">TUN网卡模式</NuxtLink>
        <NuxtLink to="/app-errors" @click="isMobileMenuOpen = false" class="p-2 rounded-custom bg-[#F9F5EC] border border-[#E4D8C7] text-center font-medium text-amber-800">无法连接排查</NuxtLink>
        <NuxtLink to="/faq" @click="isMobileMenuOpen = false" class="p-2 rounded-custom bg-[#F9F5EC] border border-[#E4D8C7] text-center font-medium">常见问答FAQ</NuxtLink>
      </div>
      <div class="pt-2 border-t border-[#E4D8C7]/60">
        <NuxtLink
          to="/airport-recommend"
          @click="isMobileMenuOpen = false"
          class="w-full py-2.5 rounded-custom bg-[#79553D] text-[#FFFCF5] font-semibold flex items-center justify-center gap-2 text-xs shadow-sm"
        >
          <span>🚀 2026好用Clash机场推荐 (含4大主力)</span>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { PAGES } from '~/data/pages'

const searchQuery = ref('')
const isSearchOpen = ref(false)
const isMobileMenuOpen = ref(false)

const searchResults = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return []
  return PAGES.filter(p => {
    return (
      p.title.toLowerCase().includes(q) ||
      p.h1.toLowerCase().includes(q) ||
      p.shortTitle.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.keywords.some(k => k.toLowerCase().includes(q)) ||
      p.longTailKeywords.some(l => l.toLowerCase().includes(q))
    )
  }).slice(0, 8)
})
</script>
