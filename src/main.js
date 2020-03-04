// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'mint-ui/lib/style.css'

import Vue from 'vue'
import App from './App'
import router from './router'
// import MintUI from 'mint-ui'
// 按需导入
import { Button, Toast } from 'mint-ui'

Vue.config.productionTip = false

Vue.component('mt-button', Button)

/**
 * 全部导入
 */
// Vue.use(MintUI)
// Vue.prototype.mint = MintUI

Vue.prototype.Toast = Toast

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
