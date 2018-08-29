// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import 'lib-flexible'
import 'swiper/dist/css/swiper.css'
import Vue from 'vue'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'
import filters from './filters'
import { Button, Row, Col, Swipe, SwipeItem, Lazyload, List } from 'vant'

Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(List)
Vue.use(VueAwesomeSwiper)
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.config.productionTip = false
FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
