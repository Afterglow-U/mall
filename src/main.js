import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vant,{Lazyload} from 'vant';
import 'vant/lib/index.css';

Vue.config.productionTip = false
Vue.use(vant);
Vue.use(Lazyload)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
