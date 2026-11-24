<template>
  <ArticleLayout :page="pageMeta">
    <div class="p-4 rounded-custom bg-[#F4ECE1] border border-[#B08758]/50 text-xs text-[#79553D] leading-relaxed">
      <strong>全量展开问答：</strong> 本页收录新手与进阶最高频疑问，所有解答默认全部展开，涵盖安装包选型、内核识别、配置迁移、机场订阅及防断网卸载，提供可验证的实操指引。
    </div>

    <!-- Section 1: 下载与安装 -->
    <section id="section-1" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        1. 下载与安装常见疑问
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        安装包需按操作系统与处理器芯片严格匹配，Windows 选 x64/arm64，Mac M 系列选 aarch64，避免跨架构导致的闪退。
      </p>
    </section>

    <!-- Section 2: 配置与服务账号 -->
    <section id="section-2" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        2. 配置与服务账号常见疑问
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        客户端与机场服务完全解耦，换用不同客户端仅需重新导入同一套订阅 URL，无需重复购入套餐。
      </p>
    </section>

    <!-- Section 3: 更新和卸载 -->
    <section id="section-3" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        3. 更新和卸载常见疑问
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        升级前备份 profiles 目录，卸载前必须手动关闭系统代理与 TUN 模式，确保系统代理注销避免断网。
      </p>
    </section>

    <!-- All FAQs Expanded (Requirement: 所有的FAQ全部要展开) -->
    <section class="space-y-4 pt-4 border-t border-[#E4D8C7]">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30]">
        高频应用解答（默认全部展开呈现）：
      </h2>
      <FaqList />
    </section>
  </ArticleLayout>
</template>

<script setup lang="ts">
import { PAGES } from '~/data/pages'

const pageMeta = PAGES.find(p => p.path === '/faq')!

useHead({
  title: pageMeta.title,
  meta: [
    { name: 'description', content: pageMeta.description },
    { name: 'keywords', content: pageMeta.keywords.join(', ') }
  ],
  link: [
    { rel: 'canonical', href: `https://clash-app.blog${pageMeta.path}` }
  ]
})
</script>
