<template>
  <div class="w-full bg-gray-900 h-dvh">
    <div
      class="bg-slate-800 absolute inset-0 m-auto w-2/6 h-3/5 rounded-3xl min-w-96"
    >
      <div class="absolute inset-0 m-auto w-4/5 mt-12" v-show="!isSubmit">
        <div class="h-1/5 w-full">
          <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
              fill="#FC7614"
            />
          </svg>
        </div>
        <div class="h-2/6 w-full text-left">
          <h1 class="font-bold text-3xl mb-3 text-gray-50">How did we do?</h1>
          <p class="text-lg text-justify text-slate-400">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div class="h-1/6 w-full text-left text-slate-400">
          <div class="flex justify-between items-center h-full mt-3">
            <div
              class="bg-slate-600 items-center justify-center text-2xl rounded-full w-16 h-16 flex hover:bg-amber-500 hover:text-black font-bold cursor-pointer"
              v-for="(item, index) in 5"
              :key="index"
              @click="setRating(item)"
              :class="[item === selectedRating ? 'bg-white text-black' : '']"
            >
              {{ item }}
            </div>
          </div>
          <button
            class="rounded-full bg-amber-500 hover:bg-white text-black h-3/5 w-full mt-6 font-bold text-xl"
            @click="submit()"
          >
            S U B M I T
          </button>
        </div>
      </div>
      <div class="absolute inset-0 m-auto w-4/5 mt-12" v-show="isSubmit">
        <div class="flex justify-center items-center mt-12">
          <img
            alt="Vue logo"
            src="@/assets/images/interactive-rating-component-main/illustration-thank-you.svg"
          />
        </div>
        <div class="text-orange-500 text-lg my-6 text-center">
          You selected
          {{ selectedRating }}
          out of 5
        </div>
        <div class="text-center">
          <h1 class="font-bold text-3xl mb-3 text-gray-50">Thank you!</h1>
          <p class="text-lg text-center text-slate-400">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const selectedRating = ref<number | null>(null); // 當前選擇的分數
const isSubmit = ref(false);
function setRating(score: number): void {
  selectedRating.value = score;
}
function submit() {
  isSubmit.value = true;
}
</script>
<style></style>
