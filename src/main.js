import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
// 在main引入font-awesome套件
// 需要用時再引入。
// 不須直接引入全部。
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faShoppingBag, faShoppingCart, faInfoCircle, faCartArrowDown, faTimes } from '@fortawesome/free-solid-svg-icons'

Vue.use(VueSweetalert2)
library.add(faShoppingBag, faShoppingCart, faInfoCircle, faCartArrowDown, faTimes)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
