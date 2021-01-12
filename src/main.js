import Vue from 'vue'
import App from './App'
import router from './router'

import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.px.css';

Vue.use(YDUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
