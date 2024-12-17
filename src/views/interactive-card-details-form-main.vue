<template>
  <div class="w-full h-dvh flex">
    <div
      class="w-1/3 h-full relative bg-no-repeat bg-[url('@/assets/images/interactive-card-details-form-main/bg-main-desktop.png')]"
    >
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
          {{ cardNumber }}
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
      <div class="w-2/5 h-1/2" v-show="!isSubmit">
        <!-- <form class="w-full h-full"> -->
        <label class="block w-full h-1/4">
          <span class="uppercase block text-sm font-bold text-black my-2">
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

        <label class="block w-full h-1/4">
          <span class="uppercase block font-bold text-black text-sm my-2">
            Card Number
          </span>
          <input
            v-model="cardNumber"
            type="text"
            name="text"
            class="bg-white border placeholder-slate-400 block w-full h-1/2 rounded-md"
            placeholder="e.g. 1234 5678 9123 0000"
            @input="formatCardNumber"
            :class="
              isInvalidCardNumber ? 'border-pink-600' : 'border-slate-300'
            "
          />
          <p v-if="isInvalidCardNumber" class="mt-1 text-pink-600 text-xs">
            Wrong format, numbers only
          </p>
        </label>

        <div class="flex justify-between w-full h-1/4 mt-4">
          <label class="block w-1/2 h-full">
            <span class="uppercase block text-sm font-bold text-black">
              Exp. Date (MM/YY)
            </span>
            <div class="flex justify-between h-1/2 mt-1">
              <input
                type="text"
                name="text"
                class="bg-white border border-slate-300 placeholder-slate-400 block w-2/5 h-full rounded-md"
                placeholder="MM"
                v-model="expiryMonth"
                :class="isInvalidMonth ? 'border-pink-600' : 'border-slate-300'"
              />
              <input
                type="text"
                name="text"
                class="bg-white border border-slate-300 placeholder-slate-400 block w-2/5 h-full rounded-md"
                placeholder="YY"
                v-model="expiryYear"
                :class="isInvalidYear ? 'border-pink-600' : 'border-slate-300'"
              />
            </div>
            <div class="flex justify-between h-1/2 mt-1">
              <p class="text-pink-600 text-xs" v-if="isInvalidMonth">
                Can't be blank
              </p>
              <p class="text-pink-600 text-xs" v-if="isInvalidYear">
                Can't be blank
              </p>
            </div>
          </label>
          <label class="block w-1/2 h-full ml-2">
            <span class="uppercase block text-sm font-bold text-black">
              CVC
            </span>
            <input
              v-model="cardVerificationCode"
              type="text"
              name="text"
              class="bg-white border border-slate-300 placeholder-slate-400 block w-full h-1/2 rounded-md mt-1"
              placeholder="e.g. 123"
              :class="isInvalidCVC ? 'border-pink-600' : 'border-slate-300'"
            />
            <p v-if="isInvalidCVC" class="mt-1 text-pink-600 text-xs">
              Can't be blank
            </p>
          </label>
        </div>

        <button
          class="rounded bg-black text-white h-1/5 w-full mt-2 font-bold text-xl"
          @click="handleSubmit()"
        >
          Confirm
        </button>
        <!-- </form> -->
      </div>
      <div class="w-2/5 h-1/2" v-show="isSubmit">
        <div class="w-full h-2/5 flex items-center justify-center">
          <div class="bg-indigo-600 rounded-full w-12 h-12">
            <Icon
              icon="basil:check-outline"
              width="48 "
              height="48"
              color="white"
            />
          </div>
        </div>
        <div class="w-full h-1/5 font-bold text-3xl text-center my-1 uppercase">
          Thank you!
        </div>
        <div class="text-sm w-full h-1/5 text-center">
          We've added your card details
        </div>
        <button
          class="rounded bg-black text-white h-1/5 w-full mt-2 font-bold text-xl"
        >
          Continue
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";

const isSubmit = ref(false);

// 卡號、到期日、CVC等資料
const name = ref<string>("");
const cardNumber = ref<string>("");
const expiryMonth = ref<string>("");
const expiryYear = ref<string>("");
const cardVerificationCode = ref<string>("");

// 驗證狀態

const isInvalidCardNumber = ref(false);
const isInvalidMonth = ref(false);
const isInvalidYear = ref(false);
const isInvalidCVC = ref(false);

const formatCardNumber = () => {
  // 每四個數字後插入空格
  let formatted = cardNumber.value.replace(/(\d{4})(?=\d)/g, "$1 ");
  // 更新卡號值
  cardNumber.value = formatted;

  // isInvalidCardNumber.value = /\D/.test(cardNumber.value.replace(/\s/g, ""));
};

// 單獨驗證卡號
const validateCardNumber = () => {
  isInvalidCardNumber.value = !/^\d{4}(\s?\d{4}){3}$/.test(cardNumber.value);
};

// 單獨驗證月份
const validateMonth = () => {
  isInvalidMonth.value =
    expiryMonth.value === "" || !/^(0[1-9]|1[0-2])$/.test(expiryMonth.value);
};

// 單獨驗證年份
const validateYear = () => {
  isInvalidYear.value =
    expiryYear.value === "" || !/^\d{2}$/.test(expiryYear.value);
};

// 單獨驗證CVC
const validateCVC = () => {
  isInvalidCVC.value =
    cardVerificationCode.value === "" ||
    !/^\d{3}$/.test(cardVerificationCode.value);
};

// // 單獨驗證姓名
// const validateName = () => {
//   isInvalidName.value = name.value === "";
// };

// 監聽各個欄位的變化來驗證
watch([cardNumber, expiryMonth, expiryYear, cardVerificationCode, name], () => {
  if (cardNumber.value !== "") {
    validateCardNumber(); // 驗證卡號
  }
  if (expiryMonth.value !== "") {
    validateMonth(); // 驗證月份
  }
  if (expiryYear.value !== "") {
    validateYear(); // 驗證年份
  }
  if (cardVerificationCode.value !== "") {
    validateCVC(); // 驗證CVC
  }
  // if (name.value !== "") {
  //   validateName(); // 驗證姓名
  // }
});

// 全面驗證表單
const validateAll = () => {
  validateCardNumber();
  validateMonth();
  validateYear();
  validateCVC();
  // validateName();
};

// 提交表單處理
const handleSubmit = (event) => {
  // 在提交時，強制驗證所有欄位
  validateAll();

  // 檢查所有欄位是否有效
  if (
    !isInvalidCardNumber.value &&
    !isInvalidMonth.value &&
    !isInvalidYear.value &&
    !isInvalidCVC.value
  ) {
    isSubmit.value = true;
  } else {
    event.preventDefault(); // 阻止表單提交刷新
  }
};
</script>
<style scoped></style>
