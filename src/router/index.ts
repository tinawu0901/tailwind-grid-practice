import { createRouter, createWebHistory } from 'vue-router'
import HomeLayout from "@/layouts/home-layout.vue";
import RecipePageMain from "@/views/recipe-page-main.vue";
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

      
    ]
  })
  
  export default router
  