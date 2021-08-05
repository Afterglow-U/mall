import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vant,{Lazyload} from 'vant';
import 'vant/lib/index.css';

// 添加事件总线对象
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false
Vue.use(vant);
Vue.use(Lazyload)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
