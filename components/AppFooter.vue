<template>
  <footer class="mt-auto border-t border-[#E4D8C7] bg-[#FFFCF5] pt-12 pb-8 text-[#493A30]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- High-CTR & Long-Tail Keyword Cloud Section -->
      <div class="bg-[#F9F5EC] border border-[#E4D8C7] rounded-custom p-6 mb-10 shadow-sm">
        <h4 class="text-xs font-bold text-[#79553D] tracking-wider uppercase mb-3 flex items-center gap-2">
          <span>🔍 高频检索关键词与长尾知识导航</span>
          <span class="text-[10px] font-normal px-2 py-0.5 rounded-full bg-[#EBDCCB] text-[#79553D]">实时更新收录</span>
        </h4>
        <div class="flex flex-wrap gap-2 text-xs">
          <NuxtLink to="/download" class="px-2.5 py-1 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] hover:border-[#79553D] hover:text-[#79553D] transition-colors">
            Clash下载官方安装包
          </NuxtLink>
          <NuxtLink to="/windows" class="px-2.5 py-1 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] hover:border-[#79553D] hover:text-[#79553D] transition-colors">
            Clash Windows 11/10使用教程
          </NuxtLink>
          <NuxtLink to="/mac" class="px-2.5 py-1 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] hover:border-[#79553D] hover:text-[#79553D] transition-colors">
            Clash Mac M1/M2/M3架构安装包
          </NuxtLink>
          <NuxtLink to="/android" class="px-2.5 py-1 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] hover:border-[#79553D] hover:text-[#79553D] transition-colors">
            Clash安卓手机配置指南
          </NuxtLink>
          <NuxtLink to="/iphone" class="px-2.5 py-1 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] hover:border-[#79553D] hover:text-[#79553D] transition-colors">
            Clash iOS / Shadowrocket导入
          </NuxtLink>
          <NuxtLink to="/airport-recommend" class="px-2.5 py-1 rounded-custom bg-[#EBDCCB] text-[#79553D] font-semibold border border-[#B08758] hover:bg-[#79553D] hover:text-white transition-colors">
            2026优质稳定Clash机场推荐
          </NuxtLink>
          <NuxtLink to="/app-errors" class="px-2.5 py-1 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] hover:border-[#79553D] hover:text-[#79553D] transition-colors">
            Clash无法连接/打不开网页解决
          </NuxtLink>
          <NuxtLink to="/tun-mode" class="px-2.5 py-1 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] hover:border-[#79553D] hover:text-[#79553D] transition-colors">
            Clash TUN虚拟网卡全局模式
          </NuxtLink>
          <NuxtLink to="/subscriptions" class="px-2.5 py-1 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] hover:border-[#79553D] hover:text-[#79553D] transition-colors">
            Clash订阅管理与防泄露
          </NuxtLink>
          <NuxtLink to="/profiles" class="px-2.5 py-1 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] hover:border-[#79553D] hover:text-[#79553D] transition-colors">
            Clash YAML配置覆写与迁移
          </NuxtLink>
          <NuxtLink to="/proxies" class="px-2.5 py-1 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] hover:border-[#79553D] hover:text-[#79553D] transition-colors">
            Clash节点延迟测速与自动选择
          </NuxtLink>
          <NuxtLink to="/routing" class="px-2.5 py-1 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] hover:border-[#79553D] hover:text-[#79553D] transition-colors">
            Clash规则分流Rule/Global配置
          </NuxtLink>
          <NuxtLink to="/dns-settings" class="px-2.5 py-1 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] hover:border-[#79553D] hover:text-[#79553D] transition-colors">
            Clash DNS防污染与Fake-IP模式
          </NuxtLink>
          <NuxtLink to="/system-proxy" class="px-2.5 py-1 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] hover:border-[#79553D] hover:text-[#79553D] transition-colors">
            Clash关机后系统代理残留修复
          </NuxtLink>
          <NuxtLink to="/verge-rev" class="px-2.5 py-1 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] hover:border-[#79553D] hover:text-[#79553D] transition-colors">
            Clash Verge Rev中文完整配置
          </NuxtLink>
          <NuxtLink to="/meta-core" class="px-2.5 py-1 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] hover:border-[#79553D] hover:text-[#79553D] transition-colors">
            Mihomo (Clash Meta) 内核新特性
          </NuxtLink>
        </div>
      </div>

      <!-- Main Footer Columns -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-sm">
        <!-- Col 1: About Platform -->
        <div class="space-y-3">
          <div class="flex items-center gap-2">
            <div class="w-7 h-7 rounded-custom bg-[#79553D] flex items-center justify-center p-1 border border-[#B08758]">
              <img src="/favicon.png" alt="clashapp icon" class="w-full h-full object-contain" />
            </div>
            <span class="font-barlow font-bold text-base text-[#493A30]">clashapp·图解课堂</span>
          </div>
          <p class="text-xs text-[#79553D] leading-relaxed">
            专注为中文用户提供严谨、无废话的 Clash 应用生命周期教程，涵盖应用下载、配置导入、分流规则设置到故障排除的完整闭环。
          </p>
          <div class="text-[11px] text-[#79553D]/80 font-mono">
            域名唯一标识：https://clash-app.blog
          </div>
        </div>

        <!-- Col 2: Platform Links -->
        <div>
          <h4 class="font-bold text-sm text-[#493A30] mb-3 border-l-2 border-[#B08758] pl-2">客户端与平台</h4>
          <ul class="space-y-1.5 text-xs text-[#79553D]">
            <li><NuxtLink to="/windows" class="hover:text-[#493A30]">Clash Windows 教程</NuxtLink></li>
            <li><NuxtLink to="/mac" class="hover:text-[#493A30]">Clash Mac 架构适配</NuxtLink></li>
            <li><NuxtLink to="/android" class="hover:text-[#493A30]">Clash Android 保活设置</NuxtLink></li>
            <li><NuxtLink to="/iphone" class="hover:text-[#493A30]">Clash iOS 兼容生态</NuxtLink></li>
            <li><NuxtLink to="/linux" class="hover:text-[#493A30]">Clash Linux GUI/服务</NuxtLink></li>
            <li><NuxtLink to="/download" class="hover:text-[#493A30] font-medium text-[#79553D]">全部安装包登记表 →</NuxtLink></li>
          </ul>
        </div>

        <!-- Col 3: Core Knowledge -->
        <div>
          <h4 class="font-bold text-sm text-[#493A30] mb-3 border-l-2 border-[#B08758] pl-2">知识与排查</h4>
          <ul class="space-y-1.5 text-xs text-[#79553D]">
            <li><NuxtLink to="/first-run" class="hover:text-[#493A30]">首次运行到正常退出</NuxtLink></li>
            <li><NuxtLink to="/profiles" class="hover:text-[#493A30]">配置文件管理与迁移</NuxtLink></li>
            <li><NuxtLink to="/subscriptions" class="hover:text-[#493A30]">订阅管理跨设备刷新</NuxtLink></li>
            <li><NuxtLink to="/tun-mode" class="hover:text-[#493A30]">TUN模式系统权限核对</NuxtLink></li>
            <li><NuxtLink to="/app-errors" class="hover:text-[#493A30] text-amber-800 font-semibold">无法连接故障排查表</NuxtLink></li>
            <li><NuxtLink to="/faq" class="hover:text-[#493A30]">高频应用问答FAQ</NuxtLink></li>
          </ul>
        </div>

        <!-- Col 4: Service & Legal -->
        <div>
          <h4 class="font-bold text-sm text-[#493A30] mb-3 border-l-2 border-[#B08758] pl-2">机场服务与信任说明</h4>
          <ul class="space-y-1.5 text-xs text-[#79553D]">
            <li>
              <NuxtLink to="/airport-recommend" class="hover:text-[#493A30] font-bold text-[#79553D] flex items-center gap-1">
                <span>🔥 28家精选机场评测</span>
              </NuxtLink>
            </li>
            <li><NuxtLink to="/about#contact" class="hover:text-[#493A30]">联系方式与反馈</NuxtLink></li>
            <li><NuxtLink to="/about#privacy" class="hover:text-[#493A30]">用户隐私政策</NuxtLink></li>
            <li><NuxtLink to="/about#disclaimer" class="hover:text-[#493A30]">免责声明与身份说明</NuxtLink></li>
            <li><NuxtLink to="/projects" class="hover:text-[#493A30]">开源项目出处核验</NuxtLink></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-[#E4D8C7] pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#79553D]/80 gap-3">
        <p>© 2026 clashapp (clash-app.blog). 奶油咖啡·图解课堂. 保持原创与真实证据交付.</p>
        <div class="flex items-center gap-4 text-[11px]">
          <NuxtLink to="/about#contact" class="hover:underline">联系反馈</NuxtLink>
          <NuxtLink to="/about#privacy" class="hover:underline">隐私策略</NuxtLink>
          <NuxtLink to="/about#disclaimer" class="hover:underline">免责声明</NuxtLink>
          <span class="text-[#B08758]">外链已挂载 rel="sponsored nofollow noopener"</span>
        </div>
      </div>
    </div>
  </footer>
</template>
