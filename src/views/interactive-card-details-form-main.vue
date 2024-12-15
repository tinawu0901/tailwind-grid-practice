<template>
  <div class="w-full h-dvh flex" style="border: 1px solid red">
    <div
      class="w-1/3 h-full relative bg-no-repeat bg-[url('@/assets/images/interactive-card-details-form-main/bg-main-desktop.png')]"
    >
      <!-- Front Card -->
      <div
        class="absolute top-40 left-52 w-4/5 h-1/4 rounded-xl bg-no-repeat bg-cover bg-[url('@/assets/images/interactive-card-details-form-main/bg-card-front.png')]"
      >
        <div class="flex justify-start items-center">
          <div class="w-8 h-8 bg-white rounded-full mt-6 ml-6"></div>
          <div
            class="w-4 h-4 rounded-full mt-6 ml-7 border-2 border-white"
          ></div>
        </div>
        <div
          class="w-4/5 h-1/5 ml-6 absolute bottom-12 text-white font-bold text-2xl"
        >
          1111 2222 3333 4444
        </div>
        <div
          class="w-4/5 h-1/5 text-white absolute bottom-4 text-lg flex justify-between ml-6 items-center"
        >
          <div>{{ name }}</div>
          <div>{{ expiryMonth }} / {{ expiryYear }}</div>
        </div>
      </div>

      <div
        class="absolute top-96 mt-5 left-72 w-4/5 h-1/4 rounded-xl bg-no-repeat bg-cover bg-[url('@/assets/images/interactive-card-details-form-main/bg-card-back.png')]"
      >
        <div class="absolute bottom-24 right-12 text-white">
          {{ cardVerificationCode }}
        </div>
      </div>
    </div>

    <div class="w-2/3 h-full bg-white flex items-center justify-center">
      <div class="w-2/5 h-1/2" style="border: 1px green solid">
        <form class="w-full h-full">
          <label class="block w-full h-1/4" style="border: 1px red solid">
            <span class="uppercase block text-lg font-bold text-black my-3">
              Cardholder Name
            </span>
            <input
              v-model="name"
              type="text"
              name="text"
              class="bg-white border border-slate-300 placeholder-slate-400 block w-full h-1/2 rounded-md"
              placeholder="e.g. Jane Appleseed"
            />
          </label>

          <label class="block w-full h-1/4" style="border: 1px red solid">
            <span class="uppercase block text-lg font-bold text-black my-3">
              Card Number
            </span>
            <input
              v-model="cardNumber"
              type="text"
              name="text"
              class="bg-white border border-slate-300 placeholder-slate-400 block w-full h-1/2 rounded-md"
              placeholder="e.g. 1234 5678 9123 0000"
              @input="formatCardNumber"
              :class="{ 'border-pink-600': isInvalid }"
            />
            <p v-if="isInvalid" class="mt-2 text-pink-600 text-sm">
              Wrong format, numbers only
            </p>
          </label>

          <div
            class="flex justify-between w-full h-1/4 my-3"
            style="border: 3px teal solid"
          >
            <label class="block w-1/2 h-full" style="border: 1px red solid">
              <span class="uppercase block text-lg font-bold text-black">
                Exp. Date (MM/YY)
              </span>
              <div class="flex justify-between h-1/2">
                <input
                  type="text"
                  name="text"
                  class="bg-white border border-slate-300 placeholder-slate-400 block w-2/5 h-full rounded-md"
                  placeholder="MM"
                  v-model="expiryMonth"
                />
                <input
                  type="text"
                  name="text"
                  class="bg-white border border-slate-300 placeholder-slate-400 block w-2/5 h-full rounded-md"
                  placeholder="YY"
                  v-model="expiryYear"
                />
              </div>
            </label>
            <label class="block w-1/2 h-full" style="border: 1px red solid">
              <span class="uppercase block text-lg font-bold text-black">
                CVC
              </span>
              <input
                v-model="cardVerificationCode"
                type="text"
                name="text"
                class="bg-white border border-slate-300 placeholder-slate-400 block w-full h-1/2 rounded-md"
                placeholder="e.g. 123"
              />
            </label>
          </div>
          <button
            class="rounded bg-black text-white h-1/5 w-full mt-2 font-bold text-xl"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const name = ref<string>(""); // 卡號
const cardNumber = ref<string>(""); // 卡號
const cardVerificationCode = ref<string>("000"); // 卡片驗證碼
const expiryMonth = ref<string>(""); // 過期月份
const expiryYear = ref<string>(""); // 過期年份

const isInvalid = ref<boolean>(false);

const formatCardNumber = () => {
  // // 去除非數字和空格字符，僅保留數字和空格
  // let cleaned = cardNumber.value.replace(/[^\d\s]/g, "");
  // // 每四個數字後插入空格
  // let formatted = cleaned.replace(/(\d{4})(?=\d)/g, "$1 ");
  // // 更新卡號值
  // cardNumber.value = formatted;
  // // 檢查格式是否正確，這裡假設卡號應該是數字並以空格分隔
  // isInvalid.value = !/^\d{4}(\s?\d{4}){3}$/.test(cardNumber.value);
};
</script>
<style scoped></style>
