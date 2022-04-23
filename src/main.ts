import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import yaml from 'js-yaml'

fetch(process.env.BASE_URL + 'config.yml').then(response => response.text().then(text => {
  App.config = yaml.load(text)
  console.log(App.config)
  createApp(App).use(router).mount('#app')
}))
