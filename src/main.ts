
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/main.css'
 
import App from './App.vue'
import router from './router'
import { Icon } from '@iconify/vue';


import VueKeycloakJs from '@dsb-norge/vue-keycloak-js'
import Keycloak from "keycloak-js";
import { VueKeycloakInstance } from "@dsb-norge/vue-keycloak-js/dist/types";


const app = createApp(App)

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties  {
    $keycloak: VueKeycloakInstance
  }
}

app.use({
    version: '3.0.0',
    tasks: [
      {
        label: 'Run CSS and Dev',
        type: 'shell',
        command: 'node run-commands.js',
        problemMatcher: [],
        group: {
          kind: 'build',
          isDefault: true
        }
      }
    ]
  })
app.use(createPinia())
app.use(router)
app.component('Icon', Icon); // 註冊全域 Icon 組件



// app
//   .use(VueKeycloakJs, {
//     init: {
//       onLoad: 'check-sso',
//       checkLoginIframe: false,
//       redirectUri:'http://localhost:5173',
//       enableLogging:true,
//       silentCheckSsoFallback: false,
//       // flow: 'standard',  // 使用標準流
//     },
//     config: {
//       url: 'http://localhost:8080/',
//       clientId: 'frotend-test',
//       realm: 'test-oauth'
//     },
//     onReady (keycloak: Keycloak) {
//       console.log('Keycloak ready', keycloak)
//       app.mount('#app')
//     }
//   })
app.mount('#app')

