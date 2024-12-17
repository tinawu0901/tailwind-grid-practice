<template>
  <div class="container mx-auto py-6">
    <p class="text-lg mb-4">
      透過
      <a
        href="https://www.frontendmentor.io/challenges?sort=difficulty%7Casc"
        target="_blank"
        rel="noopener noreferrer"
        class="text-blue-600 hover:underline"
      >
        Frontend Mentor
      </a>
      提供的題目，練習前端切版。希望能透過這些挑戰精進
      <span class="text-indigo-600 font-bold">Tailwind CSS</span>、
      <span class="text-green-600 font-bold">Vue</span> 和
      <span class="text-purple-600 font-bold">TypeScript</span> 技能。
    </p>

    <!-- Loading State -->
    <p v-if="isLoading" class="text-gray-500">載入中...</p>

    <!-- Table -->
    <table
      v-else
      class="table-auto w-full text-center border-collapse border border-gray-300 shadow-md"
    >
      <thead class="bg-gray-200">
        <tr>
          <th class="border border-gray-300 px-4 py-2">名稱</th>
          <th class="border border-gray-300 px-4 py-2">程度</th>
          <th class="border border-gray-300 px-4 py-2">是否完成</th>
          <th class="border border-gray-300 px-4 py-2">設計草圖</th>
          <th class="border border-gray-300 px-4 py-2">最終成果</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in routers"
          :key="index"
          class="hover:bg-gray-50"
        >
          <td class="border border-gray-300 px-4 py-2 text-yellow-700">
            <router-link :to="item.path" class="hover:underline">
              {{ item.name || "未命名" }}
            </router-link>
          </td>
          <td class="border border-gray-300 px-4 py-2">
            <span
              :class="getDifficultyClass(item.meta.difficulty)"
              class="px-2 py-1 rounded"
            >
              {{ item.meta.difficulty || "未知" }}
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
              :src="`src/assets/design/${item.name}/desktop-design.jpg`"
              alt="設計草圖"
              class="w-20 h-25"
            />
          </td>
          <td class="border border-gray-300 px-4 py-2">
            <img
              :src="`src/assets/final-product/${item.name}.jpeg`"
              alt="完成圖"
              class="w-20 h-25"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div>
    <div v-if="$keycloak && $keycloak.ready">
      <div v-if="$keycloak.authenticated">
        <h2>You should only be able to see this if you are authenticated.</h2>
        <h3>This is what my token looks like:</h3>
        <code>{{ $keycloak.tokenParsed }}</code>
        <h3>This is your access token:</h3>
        <code>{{ $keycloak.token }}</code>
        <br />
        <button @click="$keycloak.logoutFn">Logout</button>
        <button @click="$keycloak.keycloak.updateToken(300)">
          Refresh token
        </button>
      </div>
      <div v-else>
        <h1>Not authenticated</h1>
        <button @click="$keycloak.login">Login</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { getCurrentInstance } from "vue";
const routers = ref([]);
const isLoading = ref(true);
const router = useRouter();
onMounted(() => {
  setTimeout(() => {
    // 模擬資料載入完成
    routers.value = router
      .getRoutes()
      .filter((item) => item.name !== "home")
      .map((item) => ({
        name: item.name,
        path: item.path,
        meta: item.meta || { difficulty: "未知" },
      }));
    isLoading.value = false;
  }, 1000); // 模擬載入時間
});

const getDifficultyClass = (difficulty) => {
  switch (difficulty) {
    case "newbie":
      return "bg-green-200 text-green-800";
    case "junior":
      return "bg-blue-200 text-blue-800";
    case "INTERMEDIATE":
      return "bg-red-200 text-red-800";
    default:
      return "bg-gray-200 text-gray-800";
  }
};
const instance = getCurrentInstance();
console.log(instance?.proxy?.$keycloak); // 確認能拿到 $keycloak
const keycloak = instance?.proxy?.$keycloak;
const handleSubmit = () => {
  console.log(keycloak);
  keycloak.login();
};
const logout = () => {
  keycloak.logout();
};
</script>
