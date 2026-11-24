import os
import json

# import pages_data
from generate_all_pages_data import pages_data

template = """<template>
  <ArticleLayout :page="pageMeta">
    <!-- Intro Box -->
    <div class="p-4 rounded-custom bg-[#F4ECE1] border border-[#B08758]/50 text-xs text-[#79553D] leading-relaxed">
      <strong>核心任务与验证口径：</strong> 本文针对 <strong>__H1__</strong> 进行全流程图解与实操复盘。正文涵盖具体配置步骤、预期结果判定与异常恢复方案，所有涉及第三方服务的链接均严格添加 <code>rel="sponsored nofollow noopener"</code>，确保合规透明。
    </div>

    <!-- Section 1 -->
    <section id="section-1" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        1. __H2_1__
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        __CONTENT_P1__
      </p>
    </section>

    <!-- Section 2 -->
    <section id="section-2" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        2. __H2_2__
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        __CONTENT_P2__
      </p>

      <!-- Embedded Diagram Viewer (Animations 2, 3, 7, 10) -->
      <DiagramViewer
        title="__DIAGRAM_TITLE__"
        appState="已就绪 - 规则配置正常"
        calloutHint="__DIAGRAM_HINT__"
        :steps="diagramSteps"
      />
    </section>

    <!-- Section 3 -->
    <section id="section-3" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        3. __H2_3__
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        __CONTENT_P3__
      </p>

      <TipNote title="__TIP_TITLE__">
        <p>__TIP_CONTENT__</p>
      </TipNote>
    </section>

    <!-- Section 4: Checklist (Animation 8) -->
    <section id="section-4" class="space-y-4">
      <h3 class="text-lg font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        本机完成任务后的检查项
      </h3>
      <Checklist
        title="__H1__ - 实施自检清单"
        :items="checklistItems"
      />
    </section>

    __EXTRA_FAQ_BLOCK__
  </ArticleLayout>
</template>

<script setup lang="ts">
import { PAGES } from '~/data/pages'

const pageMeta = PAGES.find(p => p.path === '__PATH__')!

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

const diagramSteps = __STEPS_JSON__
const checklistItems = __CHECKLIST_JSON__
</script>
"""

faq_extra = """
    <section class="space-y-4 pt-6 border-t border-[#E4D8C7]">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30]">
        全量高频应用解答（所有条目已默认全部展开）：
      </h2>
      <FaqList />
    </section>
"""

for item in pages_data:
    slug = item["slug"]
    filepath = f"pages/{slug}.vue"
    
    h2_1 = item["h2s"][0] if len(item["h2s"]) > 0 else "核心原理解析"
    h2_2 = item["h2s"][1] if len(item["h2s"]) > 1 else "具体实操步骤"
    h2_3 = item["h2s"][2] if len(item["h2s"]) > 2 else "验证与异常恢复"
    
    extra_faq = faq_extra if slug == "faq" else ""
    
    code = template
    code = code.replace("__H1__", item["h1"])
    code = code.replace("__PATH__", item["path"])
    code = code.replace("__H2_1__", h2_1)
    code = code.replace("__H2_2__", h2_2)
    code = code.replace("__H2_3__", h2_3)
    code = code.replace("__CONTENT_P1__", item["content_p1"])
    code = code.replace("__CONTENT_P2__", item["content_p2"])
    code = code.replace("__CONTENT_P3__", item["content_p3"])
    code = code.replace("__DIAGRAM_TITLE__", item["diagram_title"])
    code = code.replace("__DIAGRAM_HINT__", item["diagram_hint"])
    code = code.replace("__TIP_TITLE__", item["tip_title"])
    code = code.replace("__TIP_CONTENT__", item["tip_content"])
    code = code.replace("__STEPS_JSON__", json.dumps(item["steps"], ensure_ascii=False, indent=2))
    code = code.replace("__CHECKLIST_JSON__", json.dumps(item["checklist"], ensure_ascii=False, indent=2))
    code = code.replace("__EXTRA_FAQ_BLOCK__", extra_faq)
    
    with open(filepath, "w", encoding="utf-8") as out:
        out.write(code)
    print(f"Generated {filepath}")

print("All pages generated successfully!")
