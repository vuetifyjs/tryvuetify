import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'unfonts.css'
import './styles/style.css'

const app = createApp(App)

app
  .use(vuetify)
  .mount('#app')
