<template>
  <div id="main">
    <TopNavNew></TopNavNew>
    <router-view />
    <page-footer></page-footer>
  </div>
</template>

<script>
import TopNavNew from './components/Layout/TopNavNew'
import PageFooter from './components/Layout/PageFooter'

export default {
  title() {
    return `MNJaRtz — Home`
  },
  components: {
    TopNavNew,
    PageFooter
  }
};
</script>

<style>
@import './assets/css/styles.css';
</style>