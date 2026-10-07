import './assets/main.css'
import './styles/index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Icon from './components/icon/Icon.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('ui-Icon',Icon)
app.use(router)

app.mount('#app')
