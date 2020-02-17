import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import component from '@/components'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(component)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
