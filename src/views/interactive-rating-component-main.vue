<template>
  <div class="w-full bg-gray-900 h-dvh" style="border: 1px red solid">
    <div class="bg-slate-800 absolute inset-0 m-auto w-2/6 h-3/5 rounded-3xl">
      <div
        style="border: 1px red solid"
        class="absolute inset-0 m-auto w-4/5 mt-12"
      >
        <div class="h-1/5 w-full">
          <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
              fill="#FC7614"
            />
          </svg>
        </div>
        <div style="border: 1px red solid" class="h-2/6 w-full text-left">
          <h1 class="font-bold text-3xl mb-3 text-gray-50">How did we do?</h1>
          <p class="text-lg text-justify text-slate-400">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div
          style="border: 1px red solid"
          class="h-1/6 w-full text-left text-slate-400"
        >
          <div class="flex justify-between items-center h-full">
            <div
              class="bg-slate-600 items-center justify-center rounded-full w-16 h-16 flex hover:bg-slate-400 hover:text-black font-bold cursor-pointer"
              :class="[
                item == scoreRange[0] ? 'bg-white' : '',
                item == scoreRange[1] ? 'bg-amber-500' : '',
              ]"
              v-for="(item, index) in 5"
              :key="index"
              @click="grade(item)"
            >
              {{ item }}
            </div>
          </div>
          {{ scoreRange }}
          <button
            class="rounded-full bg-white text-black h-3/5 w-full mt-6 font-bold text-xl"
            @click="submit"
          >
            S U B M I T
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const scoreRange = ref<number[]>([]);
function grade(score: number): void {
  const scoreIndex = scoreRange.value.indexOf(score);
  if (scoreIndex !== -1) {
    scoreRange.value.splice(scoreIndex, 1);
    return;
  }
  if (scoreRange.value.length < 2) {
    scoreRange.value.push(score);
    scoreRange.value.sort((a, b) => a - b);
  } else {
    scoreRange.value.sort((a, b) => a - b);

    if (score > scoreRange.value[1]) {
      scoreRange.value[1] = score;
    } else if (score < scoreRange.value[1]) {
      scoreRange.value[0] = score; // 替换最小值
    }
  }
}
function submit() {
  alert(scoreRange.value);
}
</script>
<style></style>
