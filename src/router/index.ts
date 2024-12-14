import { createRouter, createWebHistory } from 'vue-router'
import HomeLayout from "@/layouts/home-layout.vue";
import RecipePageMain from "@/views/recipe-page-main.vue";
import InteractiveRatingComponentMain from "@/views/interactive-rating-component-main.vue";
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
        meta: { difficulty: "newbie" ,  completed: true},
      },
      {
        path: '/interactive-rating-component-main',
        name: "interactive-rating-component-main",
        component: InteractiveRatingComponentMain,
        meta: { difficulty: "newbie" ,  completed: true},
      },

    ]
  })
  
  export default router
  