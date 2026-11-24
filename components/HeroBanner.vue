<template>
  <div class="relative overflow-hidden bg-gradient-to-b from-[#FFFCF5] to-[#F9F5EC] border-b border-[#E4D8C7] py-12 sm:py-16">
    <!-- Decorative subtle warm background blur circles -->
    <div class="absolute top-0 right-1/4 w-96 h-96 bg-[#B08758]/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-0 left-10 w-72 h-72 bg-[#79553D]/5 rounded-full blur-2xl pointer-events-none"></div>

    <!-- 持续循环环境动效 2: 首屏边缘极简叶片线稿 (11秒周期轻摆，角度不超过3度，手机端保留并缩小幅度) -->
    <div class="leaf-sway-11 absolute top-4 left-2 sm:top-6 sm:left-8 z-10 pointer-events-none select-none opacity-25 text-[#79553D]" aria-hidden="true">
      <svg class="w-7 h-9 sm:w-9 sm:h-13" width="38" height="52" viewBox="0 0 38 52" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 50C19 36 19 15 19 2"/>
        <path d="M19 40C13 38 7 31 9 23C11 23 16 27 19 32"/>
        <path d="M19 28C25 26 31 19 29 11C27 11 22 15 19 20"/>
        <path d="M19 16C15 14 11 8 13 3C14 3 17 6 19 10"/>
      </svg>
    </div>

    <!-- 持续循环环境动效 2: 首屏边缘极简叶片线稿 (15秒周期轻摆，右侧叶片在手机端隐藏，保持小屏清爽) -->
    <div class="leaf-sway-15 hidden sm:block absolute top-12 right-3 sm:right-10 z-10 pointer-events-none select-none opacity-25 text-[#B08758]" aria-hidden="true">
      <svg width="34" height="46" viewBox="0 0 34 46" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17 44C17 30 17 13 17 2"/>
        <path d="M17 34C23 32 28 26 26 19C24 19 19 23 17 27"/>
        <path d="M17 24C11 22 6 16 8 9C10 9 15 12 17 17"/>
        <path d="M17 14C21 12 24 7 22 3C21 3 18 5 17 9"/>
      </svg>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-4xl mx-auto text-center space-y-6">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFCF5] border border-[#E4D8C7] text-xs font-medium text-[#79553D] shadow-sm">
          <span class="w-2 h-2 rounded-full bg-[#B08758] animate-pulse"></span>
          <span>奶油咖啡·图解课堂 ｜ 2026 全平台 Clash 实践知识库</span>
        </div>

        <!-- 持续循环环境动效 1: 标题两侧咖啡色装饰括号缓慢开合 (向外移动3px回到原位，8秒一轮，文字与占位始终固定，独立图层) -->
        <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight sm:leading-snug select-text">
          <span class="bracket-anim-left text-[#B08758] font-serif mr-1 select-none pointer-events-none" aria-hidden="true">【</span>
          <span class="phrase-color-transition font-bold">按平台选择Clash应用</span>
          <span class="text-[#79553D]">并学会维护</span>
          <span class="bracket-anim-right text-[#B08758] font-serif ml-1 select-none pointer-events-none" aria-hidden="true">】</span>
        </h1>

        <!-- High-CTR & Long-tail Subtitle Description -->
        <p class="text-base sm:text-lg text-[#79553D] max-w-2xl mx-auto leading-relaxed">
          解决 <strong class="text-[#493A30]">Clash下载</strong>、<strong class="text-[#493A30]">Clash配置导入</strong>、<strong class="text-[#493A30]">Clash订阅刷新</strong> 与 <strong class="text-[#493A30]">Clash无法连接</strong> 全生命周期问题。支持 Windows、Mac (M系列芯片)、Android、iOS 与 Linux，一步一图，真实可验。
        </p>

        <!-- Call to Action Buttons -->
        <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
          <NuxtLink
            to="/download"
            class="px-6 py-3 rounded-custom bg-[#79553D] text-[#FFFCF5] font-bold text-sm sm:text-base hover:bg-[#5C3E2A] transition-all shadow-warm hover:shadow-warm-hover flex items-center gap-2 group"
          >
            <span>📥 下载 Clash 适配安装包</span>
            <span class="group-hover:translate-x-1 transition-transform">→</span>
          </NuxtLink>
          <NuxtLink
            to="/airport-recommend"
            class="px-6 py-3 rounded-custom bg-[#FFFCF5] text-[#79553D] font-bold text-sm sm:text-base border-2 border-[#B08758] hover:bg-[#F2EAE1] transition-all shadow-sm flex items-center gap-2"
          >
            <span>⚡️ 查看 4 大主力机场推荐</span>
            <span class="text-xs bg-[#B08758] text-white px-2 py-0.5 rounded-full font-normal">低延迟</span>
          </NuxtLink>
        </div>

        <!-- Platform Quick Selector Icons Bar -->
        <div class="pt-8 grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 max-w-3xl mx-auto text-xs">
          <NuxtLink to="/windows" class="p-3 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] hover:border-[#79553D] hover:shadow-sm transition-all flex flex-col items-center gap-1 group">
            <span class="text-lg">🪟</span>
            <span class="font-bold text-[#493A30] group-hover:text-[#79553D]">Windows</span>
            <span class="text-[10px] text-[#79553D]/80">Win10/11 x64/arm64</span>
          </NuxtLink>
          <NuxtLink to="/mac" class="p-3 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] hover:border-[#79553D] hover:shadow-sm transition-all flex flex-col items-center gap-1 group">
            <span class="text-lg">🍎</span>
            <span class="font-bold text-[#493A30] group-hover:text-[#79553D]">macOS</span>
            <span class="text-[10px] text-[#79553D]/80">Apple M/Intel</span>
          </NuxtLink>
          <NuxtLink to="/android" class="p-3 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] hover:border-[#79553D] hover:shadow-sm transition-all flex flex-col items-center gap-1 group">
            <span class="text-lg">🤖</span>
            <span class="font-bold text-[#493A30] group-hover:text-[#79553D]">Android</span>
            <span class="text-[10px] text-[#79553D]/80">APK后台保活</span>
          </NuxtLink>
          <NuxtLink to="/iphone" class="p-3 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] hover:border-[#79553D] hover:shadow-sm transition-all flex flex-col items-center gap-1 group">
            <span class="text-lg">📱</span>
            <span class="font-bold text-[#493A30] group-hover:text-[#79553D]">iOS / iPad</span>
            <span class="text-[10px] text-[#79553D]/80">Shadowrocket/Stash</span>
          </NuxtLink>
          <NuxtLink to="/linux" class="p-3 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] hover:border-[#79553D] hover:shadow-sm transition-all flex flex-col items-center gap-1 group col-span-2 sm:col-span-1">
            <span class="text-lg">🐧</span>
            <span class="font-bold text-[#493A30] group-hover:text-[#79553D]">Linux</span>
            <span class="text-[10px] text-[#79553D]/80">AppImage/Systemd</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
