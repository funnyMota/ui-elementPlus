import './assets/main.css'
import './styles/index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Icon from './components/icon/Icon.vue'
import Button from './components/button/Button.vue'
import Card from './components/card/Card.vue'
import Dialog from './components/dialog/Dialog.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('ui-Icon',Icon)
app.component('ui-Button',Button)
app.component('ui-Card',Card)
app.component('ui-Dialog',Dialog)
app.use(router)

app.mount('#app')
