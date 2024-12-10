
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use({
    version: '2.0.0',
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

app.mount('#app')
