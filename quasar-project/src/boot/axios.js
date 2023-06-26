import axios from 'axios'
import { VueShowdownPlugin } from 'vue-showdown'

export default ({ app }) => {
  app.config.globalProperties.$axios = axios
  app.component('vue-showdown', VueShowdownPlugin)
}
