import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin, NavbarPlugin, CarouselPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import FsLightbox from "fslightbox-vue";

Vue.use(FsLightbox);

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import VueRouter from 'vue-router'

Vue.use(VueRouter)

library.add(faBars)

import VueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(VueSmoothScroll, {
  duration: 600,
  updateHistory: false,
})


import HeroHeader from './components/Layout/HeroHeader'

Vue.use(HeroHeader)


import { gsap } from "gsap"

Vue.use(gsap)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import VuePageTransition from 'vue-page-transition'

Vue.use(VuePageTransition)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(NavbarPlugin)
Vue.use(CarouselPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data: {
			load : false,
  },
  router,
  methods: {
    afterLeave () {
      this.$root.$emit('triggerScroll')
    }
  }
}).$mount('#app')
