<template>
  <div class="container mx-auto py-6">
    <p class="text-lg mb-4">
      I practise frontend layouts using challenges from
      <a
        href="https://www.frontendmentor.io/challenges?sort=difficulty%7Casc"
        target="_blank"
        rel="noopener noreferrer"
        class="text-blue-600 hover:underline"
      >
        Frontend Mentor
      </a>
      to develop my skills in
      <span class="text-indigo-600 font-bold">Tailwind CSS</span>,
      <span class="text-green-600 font-bold">Vue</span> and
      <span class="text-purple-600 font-bold">TypeScript</span>.
    </p>

    <!-- Table -->
    <table
      class="table-auto w-full text-center border-collapse border border-gray-300 shadow-md"
    >
      <thead class="bg-gray-200">
        <tr>
          <th class="border border-gray-300 px-4 py-2">Challenge</th>
          <th class="border border-gray-300 px-4 py-2">Difficulty</th>
          <th class="border border-gray-300 px-4 py-2">Implemented</th>
          <th class="border border-gray-300 px-4 py-2">Reference design</th>
          <th class="border border-gray-300 px-4 py-2">Implementation screenshot</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in routers"
          :key="item.path"
          class="hover:bg-gray-50"
        >
          <td class="border border-gray-300 px-4 py-2 text-yellow-700">
            <router-link :to="item.path" class="hover:underline">
              {{ item.name || "Unnamed challenge" }}
            </router-link>
          </td>
          <td class="border border-gray-300 px-4 py-2">
            <span
              :class="getDifficultyClass(item.meta.difficulty)"
              class="px-2 py-1 rounded"
            >
              {{ item.meta.difficulty || "Unknown" }}
            </span>
          </td>
          <td class="border border-gray-300 px-4 py-2">
            <Icon
              :icon="
                item.meta.completed
                  ? 'basil:check-outline'
                  : 'basil:cross-outline'
              "
              width="48 "
              height="48"
              class="inline-block ml-2"
              :color="item.meta.completed ? 'green' : 'red'"
            />
          </td>
          <td class="border border-gray-300 px-4 py-2">
            <img
              :src="designImages[`../assets/design/${String(item.name)}/desktop-design.jpg`]"
              alt="Reference design"
              class="w-20 h-25"
            />
          </td>
          <td class="border border-gray-300 px-4 py-2">
            <img
              :src="resultImages[`../assets/final-product/${String(item.name)}.jpeg`]"
              alt="Implementation screenshot"
              class="w-20 h-25"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const routers = useRouter().getRoutes().filter((item) => item.name !== 'home');
// Vite resolves these images to URLs in the production build.
const designImages = import.meta.glob<string>('../assets/design/*/desktop-design.jpg', {
  eager: true, query: '?url', import: 'default',
});
const resultImages = import.meta.glob<string>('../assets/final-product/*.jpeg', {
  eager: true, query: '?url', import: 'default',
});
const getDifficultyClass = (difficulty: unknown) => {
  switch (difficulty) {
    case 'newbie': return 'bg-green-200 text-green-800';
    case 'junior': return 'bg-blue-200 text-blue-800';
    default: return 'bg-gray-200 text-gray-800';
  }
};
</script>
