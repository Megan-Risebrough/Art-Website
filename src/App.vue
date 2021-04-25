<template>
 <div id="main">
    <TopNavNew></TopNavNew>
    <router-view/>
    <page-footer></page-footer>
  </div>
</template>

<script>
import TopNavNew from './components/Layout/TopNavNew'
import PageFooter from './components/Layout/PageFooter'

export default {
  components: {
    TopNavNew,
    PageFooter
  }
};
</script>