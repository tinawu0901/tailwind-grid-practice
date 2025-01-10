import { createRouter, createWebHistory } from 'vue-router'
import HomeLayout from "@/layouts/home-layout.vue";
import RecipePageMain from "@/views/recipe-page-main.vue";
import InteractiveRatingComponentMain from "@/views/interactive-rating-component-main.vue";
import interactiveCardDetailsFormMain from "@/views/interactive-card-details-form-main.vue";
import timeTrackingDashboardMain from "@/views/time-tracking-dashboard-main.vue";
import productListWithCartMain from "@/views/product-list-with-cart-main.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeLayout,
        children: [
     
        ]
      },
      {
        path: '/recipe-page-main',
        name: "recipe-page-main",
        component: RecipePageMain,
        meta: { difficulty: "newbie" ,  completed: true,
          }  // 完成圖的照片路徑},
      },
      
      {
        path: '/interactive-rating-component-main',
        name: "interactive-rating-component-main",
        component: InteractiveRatingComponentMain,
        meta: { difficulty: "newbie" ,  completed: true},
      },
      {
        path: '/interactive-card-details-form-main',
        name: "interactive-card-details-form-main",
        component: interactiveCardDetailsFormMain,
        meta: { difficulty: "junior" ,  completed: false},
      },

      {
        path: '/time-tracking-dashboard-main',
        name: "time-tracking-dashboard-main",
        component: timeTrackingDashboardMain,
        meta: { difficulty: "junior" ,  completed: true},
      },
      {
        path: '/product-list-with-cart-main',
        name: "product-list-with-cart-main",
        component: productListWithCartMain,
        meta: { difficulty: "junior" ,  completed: true},
      },
      
    ]
  })
  
  export default router
  