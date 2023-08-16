import Vue from 'vue';
import App from './App.vue';
import router from './router';
import FsLightbox from "fslightbox-vue";

Vue.use(router);
Vue.use(FsLightbox);

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

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