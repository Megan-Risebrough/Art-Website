import Vue from 'vue';
import App from './App.vue';
import router from './router';
import FsLightbox from "fslightbox-vue";

Vue.use(FsLightbox);

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faBars, faShoppingCart);

import VueSmoothScroll from 'vue2-smooth-scroll';
Vue.use(VueSmoothScroll, {
  duration: 600,
  updateHistory: false,
});

import titleMixin from './mixins/titleMixin';
Vue.mixin(titleMixin);


import HeroHeader from './components/Layout/HeroHeader';
Vue.use(HeroHeader);


import { gsap } from "gsap";
Vue.use(gsap);

Vue.component('font-awesome-icon', FontAwesomeIcon);

import VuePageTransition from 'vue-page-transition';
Vue.use(VuePageTransition);

Vue.config.productionTip = false;

var urlPath = window.location.pathname;
router.push({ path: urlPath });

new Vue({
  render: h => h(App),
  data: {
    load: false,
  },
  router,
  methods: {
    afterLeave() {
      this.$root.$emit('triggerScroll');
    }
  }
}).$mount('#app');