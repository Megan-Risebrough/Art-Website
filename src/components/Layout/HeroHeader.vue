<template>
  <div id="hero">
    <div id="hero-content">
      <h1>{{ title }}</h1>
      <h4></h4>
      <div id="watermark">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroHeader",
  props: {
    title: String,
    image: String
  },
  computed: {
    cssVars() {
      return {
        "background": "linear-gradient(to bottom, rgba(102, 251, 233, 0.47), rgba(102, 251, 233, 0.47))," + `url(${this.image})`,
        "height": "30em",
        "background-repeat": "no-repeat",
        "background-size": "cover",
        "background-position": "center",
        "transition": "1s"
      }
    }
  }
}
</script>