<template>
  <div
    ref="diagramContainer"
    class="my-8 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] shadow-sm overflow-hidden"
    :class="{ 'diagram-in-view': isInView, 'origin-highlight-pulse': isHighlightActive }"
  >
    <!-- Header Bar -->
    <div class="px-4 py-3 bg-[#F4ECE1] border-b border-[#E4D8C7] flex items-center justify-between">
      <div class="flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full bg-[#B08758]"></span>
        <h4 class="text-xs font-bold text-[#493A30]">{{ title || '连续操作图解演示' }}</h4>
      </div>
      <div class="flex items-center gap-2 text-xs text-[#79553D]">
        <button
          @click="openLightbox(0)"
          class="px-2 py-0.5 rounded bg-[#FFFCF5] border border-[#E4D8C7] hover:border-[#79553D] text-[11px] font-medium transition-colors flex items-center gap-1"
          aria-label="放大浏览图解"
        >
          <span>🔍 点击放大浏览 (支持键盘切图)</span>
        </button>
      </div>
    </div>

    <!-- Main Content Area: Desktop side-by-side or stacked, Mobile stacked -->
    <div class="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
      <!-- Diagram Image + SVG Callout Overlay -->
      <div class="lg:col-span-7 relative">
        <div
          class="relative rounded-custom border border-[#E4D8C7] bg-[#F9F5EC] overflow-hidden aspect-video flex items-center justify-center cursor-zoom-in group"
          @click="openLightbox(0)"
        >
          <!-- SVG Diagram / Screenshot Mock -->
          <div class="w-full h-full p-4 relative flex flex-col justify-between select-none">
            <!-- Simulated Application Header -->
            <div class="h-6 w-full bg-[#FFFCF5] rounded border border-[#E4D8C7] flex items-center justify-between px-2">
              <div class="flex gap-1">
                <span class="w-2 h-2 rounded-full bg-red-400"></span>
                <span class="w-2 h-2 rounded-full bg-amber-400"></span>
                <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
              </div>
              <span class="text-[9px] font-mono text-[#79553D]">Clash Verge Rev - {{ appState || '配置主界面' }}</span>
              <span class="text-[9px] text-[#B08758]">v1.7.7</span>
            </div>

            <!-- Simulated Interface Body -->
            <div class="flex-1 grid grid-cols-4 gap-2 my-2">
              <!-- Left Sidebar -->
              <div class="col-span-1 bg-[#FFFCF5] rounded border border-[#E4D8C7] p-1.5 space-y-1">
                <div class="h-3 rounded bg-[#EBDCCB]"></div>
                <div class="h-3 rounded bg-[#F2EAE1]"></div>
                <div class="h-3 rounded bg-[#F2EAE1]"></div>
                <div class="h-3 rounded bg-[#F2EAE1]"></div>
              </div>
              <!-- Right Main Panel -->
              <div class="col-span-3 bg-[#FFFCF5] rounded border border-[#E4D8C7] p-2 flex flex-col justify-between">
                <div class="space-y-1">
                  <div class="h-4 w-3/4 bg-[#EBDCCB] rounded"></div>
                  <div class="h-3 w-1/2 bg-[#F2EAE1] rounded"></div>
                </div>
                <div class="h-6 w-full bg-[#F4ECE1] rounded border border-dashed border-[#B08758] flex items-center justify-center text-[9px] text-[#79553D]">
                  {{ calloutHint || '核心设置与状态指示区' }}
                </div>
              </div>
            </div>

            <!-- Status Footer -->
            <div class="h-4 w-full bg-[#FFFCF5] rounded border border-[#E4D8C7] flex items-center justify-between px-2 text-[8px] text-[#79553D]">
              <span>System Proxy: ACTIVE (127.0.0.1:7890)</span>
              <span>Tun Mode: Ready</span>
            </div>
          </div>

          <!-- Animation 2: SVG Connecting Lines that draw when in-view -->
          <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 225">
            <!-- Line 1 -->
            <path
              d="M 60 70 L 100 90 L 140 90"
              fill="none"
              stroke="#B08758"
              stroke-width="2"
              class="diagram-line-path"
            />
            <!-- Line 2 -->
            <path
              d="M 220 120 L 260 140 L 300 140"
              fill="none"
              stroke="#79553D"
              stroke-width="2"
              class="diagram-line-path"
            />
          </svg>

          <!-- Diagram Badges Overlaid -->
          <div
            id="diagram-callout-1"
            class="diagram-badge absolute left-[15%] top-[25%] px-2 py-0.5 rounded-full bg-[#79553D] text-[#FFFCF5] text-[10px] font-bold shadow-md border border-white"
            :class="{ 'target-pulse': activeStep === 1 }"
          >
            ① 导入配置
          </div>
          <div
            id="diagram-callout-2"
            class="diagram-badge absolute left-[55%] top-[55%] px-2 py-0.5 rounded-full bg-[#B08758] text-white text-[10px] font-bold shadow-md border border-white"
            :class="{ 'target-pulse': activeStep === 2 }"
          >
            ② 启用代理
          </div>

          <!-- Zoom indicator badge -->
          <div class="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 text-white text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
            点击全屏查看大图
          </div>
        </div>
      </div>

      <!-- Step-by-Step Instructions -->
      <div class="lg:col-span-5 space-y-3">
        <div class="text-xs text-[#79553D] font-medium mb-1">
          👇 点击步骤编号，画面将对应定位并高亮扩散：
        </div>

        <div
          v-for="step in steps"
          :key="step.num"
          @click="highlightStep(step.num)"
          class="p-3 rounded-custom border transition-all cursor-pointer flex items-start gap-3"
          :class="activeStep === step.num ? 'bg-[#F2EAE1] border-[#79553D] shadow-sm' : 'bg-[#FFFCF5] border-[#E4D8C7] hover:border-[#B08758]'"
        >
          <!-- Animation 3: 步骤点击定位触发 -->
          <span
            class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-transform"
            :class="activeStep === step.num ? 'bg-[#79553D] text-[#FFFCF5] scale-110' : 'bg-[#EBDCCB] text-[#79553D]'"
          >
            {{ step.num }}
          </span>

          <div class="space-y-0.5 flex-1">
            <h5 class="text-xs font-bold text-[#493A30]">{{ step.title }}</h5>
            <p class="text-[11px] text-[#79553D] leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Explicit Caption List (Requirement: 手机端将复杂标注改为图下编号说明) -->
    <div class="lg:hidden px-4 pb-4 pt-1 border-t border-[#E4D8C7]/50 text-xs text-[#79553D] space-y-1">
      <div class="font-bold text-[#493A30]">移动端图解说明编号清单：</div>
      <div v-for="step in steps" :key="'mob-' + step.num" class="flex gap-2">
        <span class="font-bold text-[#79553D]">[{{ step.num }}]</span>
        <span>{{ step.title }}：{{ step.desc }}</span>
      </div>
    </div>

    <!-- Animation 7 & 10: Lightbox Gallery Modal with Horizontal Slide Transition & Return Highlight -->
    <Teleport to="body">
      <div
        v-if="isLightboxOpen"
        class="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 select-none"
        @keydown.esc="closeLightbox"
        @keydown.left="prevImage"
        @keydown.right="nextImage"
        tabindex="0"
        ref="lightboxRef"
      >
        <!-- Close Button -->
        <button
          @click="closeLightbox"
          class="absolute top-4 right-4 z-50 p-2 text-white/80 hover:text-white bg-black/40 rounded-full"
          aria-label="关闭预览"
        >
          <svg width="24" height="24" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <!-- Previous Button -->
        <button
          @click.stop="prevImage"
          class="absolute left-4 z-50 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-full transition-colors"
          aria-label="上一张图片"
        >
          <svg width="24" height="24" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        <!-- Next Button -->
        <button
          @click.stop="nextImage"
          class="absolute right-4 z-50 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-full transition-colors"
          aria-label="下一张图片"
        >
          <svg width="24" height="24" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>

        <!-- Animation 7: Slide Transition between images -->
        <div class="max-w-4xl w-full bg-[#FFFCF5] rounded-custom overflow-hidden shadow-2xl border border-[#E4D8C7] flex flex-col">
          <div class="p-3 bg-[#F4ECE1] border-b border-[#E4D8C7] flex justify-between items-center text-xs text-[#79553D]">
            <span class="font-bold text-[#493A30]">高清步骤放大图解 ({{ currentLightboxIdx + 1 }} / {{ steps.length }})</span>
            <span class="font-mono">按 ESC 或点击右上角关闭</span>
          </div>

          <div
            class="relative aspect-video bg-[#F9F5EC] p-8 flex flex-col justify-center items-center text-center overflow-hidden"
            @touchstart="handleTouchStart"
            @touchend="handleTouchEnd"
          >
            <Transition name="lightbox-slide" mode="out-in">
              <div :key="currentLightboxIdx" class="space-y-4 max-w-lg">
                <div class="w-16 h-16 rounded-full bg-[#79553D] text-white text-2xl font-bold flex items-center justify-center mx-auto shadow-md">
                  {{ steps[currentLightboxIdx]?.num }}
                </div>
                <h3 class="text-xl font-bold text-[#493A30]">
                  {{ steps[currentLightboxIdx]?.title }}
                </h3>
                <p class="text-sm text-[#79553D] leading-relaxed">
                  {{ steps[currentLightboxIdx]?.desc }}
                </p>
                <div class="pt-4 border-t border-[#E4D8C7] text-xs text-[#B08758]">
                  推荐操作按键：← 上一张 ｜ → 下一张 ｜ ESC 退出返回
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const props = defineProps<{
  title?: string
  appState?: string
  calloutHint?: string
  steps: Array<{ num: number; title: string; desc: string }>
}>()

const diagramContainer = ref<HTMLElement | null>(null)
const isInView = ref(false)
const activeStep = ref(1)
const isHighlightActive = ref(false)
const isLightboxOpen = ref(false)
const currentLightboxIdx = ref(0)
const lightboxRef = ref<HTMLElement | null>(null)

let observer: IntersectionObserver | null = null
let touchStartX = 0

onMounted(() => {
  // Animation 2: IntersectionObserver for diagram entrance
  if ('IntersectionObserver' in window && diagramContainer.value) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isInView.value = true
        }
      })
    }, { threshold: 0.25 })
    observer.observe(diagramContainer.value)
  } else {
    isInView.value = true
  }
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
    observer = null
  }
})

// Animation 3: 步骤点击定位与局部脉冲扩散
const highlightStep = (stepNum: number) => {
  activeStep.value = stepNum
  const el = document.getElementById(`diagram-callout-${stepNum}`)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }
}

// Lightbox Open
const openLightbox = (idx: number) => {
  currentLightboxIdx.value = idx
  isLightboxOpen.value = true
  nextTick(() => {
    lightboxRef.value?.focus()
  })
}

// Animation 7: Next / Previous Image with slide
const nextImage = () => {
  if (currentLightboxIdx.value < props.steps.length - 1) {
    currentLightboxIdx.value++
  } else {
    currentLightboxIdx.value = 0
  }
}

const prevImage = () => {
  if (currentLightboxIdx.value > 0) {
    currentLightboxIdx.value--
  } else {
    currentLightboxIdx.value = props.steps.length - 1
  }
}

// Touch swipe support
const handleTouchStart = (e: TouchEvent) => {
  touchStartX = e.changedTouches[0].screenX
}

const handleTouchEnd = (e: TouchEvent) => {
  const touchEndX = e.changedTouches[0].screenX
  if (touchStartX - touchEndX > 50) {
    nextImage()
  } else if (touchEndX - touchStartX > 50) {
    prevImage()
  }
}

// Animation 10: 返回阅读位置并播放原图短暂高亮强调
const closeLightbox = () => {
  isLightboxOpen.value = false
  isHighlightActive.value = true
  setTimeout(() => {
    isHighlightActive.value = false
  }, 1200)
}
</script>
