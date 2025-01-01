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
            class="object-contain w-full h-2/3"
          />
          <!-- <div
            class="flex justify-center items-center bg-white rounded-lg m-2 h-12 -mt-6 relative z-10 border-2 w-48 border-red-300"
          > -->
          <!-- <div
            class="flex justify-center items-center bg-white rounded-2xl m-2 h-12 -mt-6 absolute inset-x-0 mx-auto z-10 border-2 w-48 border-red-300"
          >
            <img
              src="@/assets/images/product-list-with-cart-main/icon-add-to-cart.svg"
            />
            Add to Cart
          </div> -->
          <div
            class="flex justify-between text-white items-center bg-orange-700 rounded-2xl m-2 h-12 -mt-6 absolute inset-x-0 mx-auto z-10 border-2 w-48 border-orange-700"
          >
            <Icon
              icon="lsicon:minus-outline"
              width="26"
              height="26"
              color="white"
              @click="console.log('minus to cart')"
            />
            5

            <Icon
              icon="icons8:plus"
              width="26"
              height="26"
              color="white"
              @click="console.log('add to cart')"
            />
          </div>
          <div
            class="flex flex-col justify-start items-start pl-2 space-y-2 mt-6 ml-4"
          >
            <div class="text-sm font-light text-slate-400">{{ data.name }}</div>
            <div class="text-xl text-black">{{ data.category }}</div>
            <div class="text-red font-bold text-xl text-orange-500">
              ${{ data.price.toFixed(2) }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/5 max-sm:w-full h-full">222</div>
  </div>
</template>

<script setup lang="ts">
const dataInfo = [
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
  },
  {
    image: {
      thumbnail:
        "src/assets/images/product-list-with-cart-main/mage-macaron-thumbnail.jpg",
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
  },
];
// const handleClick = () => {
//   console.log("add to cart");
// };
</script>
<style scoped>
/* div {
  border: 1px solid rgb(59, 22, 22);
} */
</style>
