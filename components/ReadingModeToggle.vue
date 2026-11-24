<template>
  <div class="inline-flex items-center gap-2 p-1 bg-[#F2EAE1] rounded-custom border border-[#E4D8C7] text-xs">
    <button
      @click="toggleMode"
      class="flex items-center gap-1.5 px-3 py-1.5 rounded-custom transition-all font-medium text-[#493A30] hover:text-[#79553D]"
      :class="isDetailed ? 'bg-[#FFFCF5] shadow-sm text-[#79553D] font-bold' : ''"
      aria-label="切换阅读模式"
    >
      <!-- Animation 6: 按钮图标旋转90度 -->
      <svg
        width="14"
        height="14"
        class="reading-toggle-icon w-3.5 h-3.5 text-[#B08758]"
        :class="{ active: isDetailed }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
      </svg>
      <span>{{ isDetailed ? '详细说明模式' : '简要步骤模式' }}</span>
    </button>
    <span class="text-[10px] text-[#79553D]/70 px-1 hidden sm:inline">
      {{ isDetailed ? '已展开原理解释与参数细节' : '仅看核心关键指令' }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits(['update:modelValue'])

const isDetailed = computed({
  get: () => props.modelValue,
  set: (val: boolean) => emit('update:modelValue', val)
})

const toggleMode = () => {
  isDetailed.value = !isDetailed.value
}
</script>
