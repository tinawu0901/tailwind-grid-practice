<template>
  <div class="bg-black w-full h-lvh max-md:h-[150lvh] absolute">
    <div
      class="grid grid-rows-2 gap-5 grid-cols-4 place-content-center h-3/5 w-3/5 absolute inset-0 m-auto max-sm:flex max-sm:flex-col max-sm:relative max-sm:mt-80"
    >
      <div class="row-span-2">
        <div
          class="bg-indigo-500 border border-black w-full h-3/5 rounded text-white max-sm:grid max-sm:grid-cols-2 max-sm:h-4/5"
        >
          <div class="w-full h-1/3 mt-2">
            <img
              alt="Vue logo"
              src="@/assets/images/time-tracking-dashboard-main/image-jeremy.png"
              class="w-20 h-20 ml-4 mt-4 max-sm:w-16 max-sm:h-16 max-sm:ml-4 max-sm:mt-0 border-white border-2 rounded-full"
            />
          </div>
          <div class="text-left ml-3 text-sm">
            Report for
            <p class="text-2xl text-wrap">
              <span class="block max-sm:hidden">Jeremy<br />Robson</span>
              <span class="hidden max-sm:block">Jeremy Robson</span>
            </p>
          </div>
        </div>
        <div
          class="w-full text-slate-400 h-2/5 grid grid-cols-1 max-sm:grid-cols-3 ml-5 mt-2 max-sm:ml-0"
        >
          <div
            class="hover:text-white cursor-pointer"
            :class="{ 'text-white': selectedData === data }"
            v-for="(data, index) in datas"
            :key="index"
            @click="selectedData = data"
          >
            {{ data }}
          </div>
        </div>
      </div>

      <div v-for="(data, index) in dataInfos" :key="index">
        <div
          class="w-full h-1/3 rounded-lg flex justify-end items-center"
          :class="data.bgColor"
        >
          <img
            :src="`src/assets/images/time-tracking-dashboard-main/icon-${lowercaseAndHyphenate(
              data.title
            )}.svg `"
            class="object-contain max-w-full max-h-full mr-2 mt-1"
            :class="data.bgColor"
          />
        </div>
        <div
          class="bg-blue-950 w-full h-3/4 rounded-2xl relative -mt-4 grid grid-rows-3 grid-cols-2 px-4 text-white hover:bg-blue-900 cursor-pointer"
        >
          <div class="text-sm mt-2">{{ data.title }}</div>
          <img
            src="@/assets/images/time-tracking-dashboard-main/icon-ellipsis.svg"
            alt="Ellipsis Icon "
            class="mt-5 ml-5"
          />

          <div class="text-2xl col-span-2 max-sm:col-span-1 max-sm:text-xl">
            {{ data.timeframes[currentTimeframe].current }}hrs
          </div>
          <div
            class="text-sm col-span-2 max-sm:col-span-1 max-sm:text-xs text-slate-400"
          >
            Last {{ removeLy(currentTimeframe) }} -
            {{ data.timeframes[currentTimeframe].previous }}hrs
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
const datas = ["Daily", "Weekly", "Monthly"];
const selectedData = ref("Weekly");
const currentTimeframe = computed(() => {
  return selectedData.value.toLowerCase();
});
const dataInfos = [
  {
    title: "Work",
    bgColor: "bg-orange-400",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    bgColor: "bg-sky-300",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    bgColor: "bg-pink-500",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    bgColor: "bg-emerald-400",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    bgColor: "bg-purple-500",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    bgColor: "bg-yellow-300",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];
const lowercaseAndHyphenate = (string: string) => {
  return string.toLowerCase().replace(/\s+/g, "-");
};
const removeLy = (str: string) => {
  if (str.toLowerCase() === "daily") {
    return "day";
  }
  return str.replace(/ly$/, "");
};
</script>
