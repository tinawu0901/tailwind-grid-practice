import { createRouter, createWebHistory } from 'vue-router'
import HomeLayout from "@/layouts/home-layout.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeLayout
    
      },

      
    ]
  })
  
  export default router
  