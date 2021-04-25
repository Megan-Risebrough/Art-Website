import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue';
import Home from '@/pages/home/Home'
import Gallery from '@/pages/gallery/Gallery'
import Watercolour from '@/pages/gallery/Watercolour'
import Digital from '@/pages/gallery/Digital'
import Acrylic from '@/pages/gallery/Acrylic'
import Contact from '@/pages/contact/Contact'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { scrollToTop: true }
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery,
      meta: { scrollToTop: true }
    },
    {
      path: '/watercolour',
      name: 'Watercolour',
      component: Watercolour,
      meta: { scrollToTop: true }
    },
    {
      path: '/digital',
      name: 'digital',
      component: Digital,
      meta: { scrollToTop: true }
    },
    {
      path: '/acrylic',
      name: 'acrylic',
      component: Acrylic,
      meta: { scrollToTop: true }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: { scrollToTop: true }
    },
  ], 
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    else
      return { x: 0, y: 0 };
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')