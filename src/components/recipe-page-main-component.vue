<template>
  <div>
    <h1
      class="my-1.5 font-bold text-4xl mb-6 font-youngserif"
      :class="{
        'text-fuchsia-800': title === 'Preparation time',
        'text-yellow-700': title !== 'Preparation time',
      }"
    >
      {{ title }}
    </h1>
    <ul
      class="pl-5 marker:font-bold space-y-5 font-outfit"
      :class="[
        listClass,
        title === 'Preparation time'
          ? 'marker:text-fuchsia-800'
          : 'marker:text-yellow-700',
      ]"
    >
      <li v-for="(item, index) in items" :key="index" class="pl-3 mb-2">
        <template v-if="hasContent(item)">
          <strong> {{ getLabel(item) }} </strong>: {{ getContent(item) }}
        </template>
        <template v-else>
          {{ item }}
        </template>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  title: String,
  listType: {
    type: String,
    default: "disc", // 預設值
  },
  items: {
    type: Array,
  },
});

const listClass = computed(() => {
  return props.listType === "numbered" ? "list-decimal" : "list-disc";
});

// 提取冒號前的部分
const getLabel = (item: string): string => item.split(":")[0].trim();

// 提取冒號後的部分
const getContent = (item: string): string => item.split(":")[1].trim() || "";

// 檢查是否有冒號內容
const hasContent = (item: string): boolean => item.includes(":");
</script>
