import Vue from 'vue'
import App from './App.vue'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
