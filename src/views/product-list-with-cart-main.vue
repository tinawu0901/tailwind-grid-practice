<template>
  <div class="w-full min-h-screen flex max-sm:flex-col bg-red-50 p-12">
    <div class="w-4/5 max-sm:w-full h-full">
      <div class="grid grid-col-3 gap-4 max-sm:grid-col-1">
        <div class="col-span-3 max-sm:col-span-1 text-2xl font-bold">
          Desserts
        </div>
        <div v-for="(data, index) in dataInfo" :key="index" class="relative">
          <img
            alt="Vue logo"
            :src="data.image.desktop"
            class="object-contain w-full hover:border-2 border-orange-700"
          />
          <!-- <div
            class="flex justify-center items-center bg-white rounded-lg m-2 h-12 -mt-6 relative z-10 border-2 w-48 border-red-300"
          > -->
          <div
            class="flex justify-center items-center bg-white rounded-2xl m-2 h-12 -mt-6 absolute inset-x-0 mx-auto z-10 border-2 w-48 border-red-300 cursor-pointer"
            @mouseover="data.hover = true"
            @mouseleave="data.hover = false"
            v-if="!data.hover"
          >
            <img
              src="@/assets/images/product-list-with-cart-main/icon-add-to-cart.svg"
            />
            Add to Cart
          </div>
          <div
            class="flex justify-between text-white items-center bg-orange-700 rounded-2xl m-2 h-12 -mt-6 absolute inset-x-0 mx-auto z-10 border-2 w-48 border-orange-700"
            @mouseover="data.hover = true"
            @mouseleave="data.hover = false"
            v-if="data.hover"
          >
            <Icon
              icon="lsicon:minus-outline"
              width="26"
              height="26"
              @click="handleMinusToCart(data.name)"
              class="fill-current text-white hover:text-orange-700 hover:bg-white rounded-full cursor-pointer"
            />
            {{ data.numbers }}

            <Icon
              icon="icons8:plus"
              width="26"
              height="26"
              @click="handlePlusToCart(data.name)"
              class="fill-current text-white hover:text-orange-700 hover:bg-white rounded-full cursor-pointer"
            />
          </div>
          <div
            class="flex flex-col justify-start items-start pl-2 space-y-2 mt-6 ml-4"
          >
            <div class="text-sm font-light text-slate-400">
              {{ data.category }}
            </div>
            <div class="text-xl text-black">{{ data.name }}</div>
            <div class="text-red font-bold text-xl text-orange-500">
              ${{ data.price.toFixed(2) }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/4 max-sm:w-full min-h-screen max-sm:mt-4 ml-2">
      <div class="bg-white flex flex-col p-4" v-if="orderNumber === 0">
        <p class="text-2xl text-orange-400 font-bold">Your Cart(0)</p>

        <img
          src="@/assets/images/product-list-with-cart-main/illustration-empty-cart.svg"
        />
        <p class="text-xs text-amber-800 font-bold text-nowrap">
          Your added items will appear here
        </p>
      </div>

      <div class="bg-white flex flex-col p-4" v-if="orderNumber !== 0">
        <p class="text-2xl text-orange-400 font-bold">
          Your Cart({{ orderNumber }})
        </p>

        <div
          class="flex justify-between items-center mt-4 border-b-2 border-gray-300"
          v-for="(data, index) in orderInfo"
          :key="index"
        >
          <div class="mb-2">
            <div class="font-bold">{{ data.name }}</div>
            <div class="text-sm text-slate-400 mt-2">
              <span class="text-orange-500">{{ data.numbers }}x</span>
              <span class="mx-3">@${{ data.price }}</span>
              <span class="ml-auto">${{ data.total }}</span>
            </div>
          </div>
          <div>
            <Icon
              icon="material-symbols:cancel-outline"
              width="26"
              height="26"
              color="black"
              @click="handleCancelToCart(data.name)"
            />
          </div>
        </div>

        <div class="flex justify-between items-center mt-4">
          <span>Order Total</span>
          <span class="text-3xl font-bold">${{ orderInfoTotal }}</span>
        </div>
        <div
          class="flex justify-center text-nowrap items-center mt-4 text-xs bg-gray-100 p-5 rounded-lg overflow-hidden"
        >
          <img
            src="@/assets/images/product-list-with-cart-main/icon-carbon-neutral.svg"
            class="mr-1"
          /><span
            >This is a
            <span class="font-bold">carbon-neutral</span> delivery</span
          >
        </div>
        <button
          class="rounded-xl m-2 p-2 bg-orange-700 text-white text-xl"
          @click="handleConfirm"
        >
          Confirm Order
        </button>
      </div>
    </div>

    <div
      v-if="confirmOrder"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div class="bg-white flex flex-col p-4 rounded-lg w-96 h-4/5">
        <img
          src="@/assets/images/product-list-with-cart-main/icon-order-confirmed.svg"
          class="w-8 h-8"
        />
        <p class="text-2xl font-bold m-2">Order Confirmed</p>
        <p class="text-xs font-thin m-2">We hope you enjoy your food!</p>

        <div class="bg-amber-50 h-auto max-h-3/4 overflow-y-auto">
          <div
            class="flex justify-between items-center mt-4"
            v-for="(data, index) in orderInfo"
            :key="index"
          >
            <div class="mb-1 flex items-center">
              <img
                :src="data.thumbnail"
                class="w-12 h-12 object-cover rounded-lg"
              />
              <div class="ml-2">
                <div class="font-bold">{{ data.name }}</div>
                <div class="text-sm text-slate-400 mt-2">
                  <span class="text-orange-500">{{ data.numbers }}x</span>
                  <span class="mx-3">@${{ data.price }}</span>
                </div>
              </div>
            </div>
            <div class="mr-2">${{ data.total }}</div>
          </div>
        </div>
        <div class="flex justify-between items-center mt-4">
          <span>Order Total</span>
          <span class="text-3xl font-bold">${{ orderInfoTotal }}</span>
        </div>

        <button
          class="rounded-xl m-2 p-2 bg-orange-700 text-white text-sm"
          @click="handleConfirm"
        >
          Start New Order
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
const dataInfo = ref([
  {
    image: {
      thumbnail:
        "src/assets/images/product-list-with-cart-main/image-waffle-thumbnail.jpg",
      mobile:
        "src/assets/images/product-list-with-cart-main/image-waffle-mobile.jpg",
      tablet:
        "src/assets/images/product-list-with-cart-main/image-waffle-tablet.jpg",
      desktop:
        "src/assets/images/product-list-with-cart-main/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
    numbers: 0,
    hover: false,
  },
  {
    image: {
      thumbnail:
        "src/assets/images/product-list-with-cart-main/image-creme-brulee-thumbnail.jpg",
      tablet:
        "src/assets/images/product-list-with-cart-main/image-creme-brulee-tablet.jpg",
      mobile:
        "src/assets/images/product-list-with-cart-main/image-creme-brulee-mobile.jpg",
      desktop:
        "src/assets/images/product-list-with-cart-main/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
    numbers: 0,
    hover: false,
  },
  {
    image: {
      thumbnail:
        "src/assets/images/product-list-with-cart-main/image-macaron-thumbnail.jpg",
      mobile:
        "src/assets/images/product-list-with-cart-main/image-macaron-mobile.jpg",
      tablet:
        "src/assets/images/product-list-with-cart-main/image-macaron-tablet.jpg",
      desktop:
        "src/assets/images/product-list-with-cart-main/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
    numbers: 0,
    hover: false,
  },
  {
    image: {
      thumbnail:
        "src/assets/images/product-list-with-cart-main/image-tiramisu-thumbnail.jpg",
      mobile:
        "src/assets/images/product-list-with-cart-main/image-tiramisu-mobile.jpg",
      tablet:
        "src/assets/images/product-list-with-cart-main/image-tiramisu-tablet.jpg",
      desktop:
        "src/assets/images/product-list-with-cart-main/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
    numbers: 0,
    hover: false,
  },
  {
    image: {
      thumbnail:
        "src/assets/images/product-list-with-cart-main/image-baklava-thumbnail.jpg",
      mobile:
        "src/assets/images/product-list-with-cart-main/image-baklava-mobile.jpg",
      tablet:
        "src/assets/images/product-list-with-cart-main/image-baklava-tablet.jpg",
      desktop:
        "src/assets/images/product-list-with-cart-main/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
    numbers: 0,
    hover: false,
  },
  {
    image: {
      thumbnail:
        "src/assets/images/product-list-with-cart-main/image-meringue-thumbnail.jpg",
      mobile:
        "src/assets/images/product-list-with-cart-main/image-meringue-mobile.jpg",
      tablet:
        "src/assets/images/product-list-with-cart-main/image-meringue-tablet.jpg",
      desktop:
        "src/assets/images/product-list-with-cart-main/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
    numbers: 0,
    hover: false,
  },
  {
    image: {
      thumbnail:
        "src/assets/images/product-list-with-cart-main/image-cake-thumbnail.jpg",
      mobile:
        "src/assets/images/product-list-with-cart-main/image-cake-mobile.jpg",
      tablet:
        "src/assets/images/product-list-with-cart-main/image-cake-tablet.jpg",
      desktop:
        "src/assets/images/product-list-with-cart-main/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
    numbers: 0,
    hover: false,
  },
  {
    image: {
      thumbnail:
        "src/assets/images/product-list-with-cart-main/image-brownie-thumbnail.jpg",
      mobile:
        "src/assets/images/product-list-with-cart-main/image-brownie-mobile.jpg",
      tablet:
        "src/assets/images/product-list-with-cart-main/image-brownie-tablet.jpg",
      desktop:
        "src/assets/images/product-list-with-cart-main/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
    numbers: 0,
    hover: false,
  },
  {
    image: {
      thumbnail:
        "src/assets/images/product-list-with-cart-main/image-panna-cotta-thumbnail.jpg",
      mobile:
        "src/assets/images/product-list-with-cart-main/image-panna-cotta-mobile.jpg",
      tablet:
        "src/assets/images/product-list-with-cart-main/image-panna-cotta-tablet.jpg",
      desktop:
        "src/assets/images/product-list-with-cart-main/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
    numbers: 0,
    hover: false,
  },
]);
const confirmOrder = ref(false);
const handleConfirm = () => {
  console.log("add to cart");
  confirmOrder.value = !confirmOrder.value;
};
const handlePlusToCart = (name: string) => {
  const index = dataInfo.value.findIndex((data) => data.name === name);
  dataInfo.value[index].numbers++;
};
const handleMinusToCart = (name: string) => {
  const index = dataInfo.value.findIndex((data) => data.name === name);
  if (dataInfo.value[index].numbers > 0) {
    dataInfo.value[index].numbers--;
  }
};
const orderInfo = ref([]);
const orderInfoTotal = ref(0);
const orderNumber = ref(0);
const handleCancelToCart = (name: string) => {
  //remove item from orderInfo
  const index = orderInfo.value.findIndex((data) => data.name === name);
  orderInfo.value.splice(index, 1);
  // find item form dataInfo and reset numbers
  const dataIndex = dataInfo.value.findIndex((data) => data.name === name);
  dataInfo.value[dataIndex].numbers = 0;
};
watch(
  dataInfo,
  (newVal) => {
    orderInfo.value = [];
    orderInfoTotal.value = 0;
    orderNumber.value = 0;
    newVal.forEach((data) => {
      if (data.numbers > 0) {
        let dataInfo = {
          name: data.name,
          price: data.price,
          numbers: data.numbers,
          total: data.price * data.numbers,
          thumbnail: data.image.thumbnail,
        };
        orderInfo.value.push(dataInfo);
        orderInfoTotal.value += dataInfo.total;
        orderNumber.value += dataInfo.numbers;
      }
    });
  },
  { deep: true }
);
</script>
<style scoped>
/* div {
  border: 1px solid rgb(59, 22, 22);
} */
</style>
