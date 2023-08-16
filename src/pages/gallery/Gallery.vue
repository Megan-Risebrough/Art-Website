<template>
  <div>
    <slide-transition></slide-transition>
    <hero-header title="Gallery" image='./images/header.jpg' :style="{
      background: `linear-gradient(to bottom, rgba(102, 251, 233, 0.47), rgba(102, 251, 233, 0.47)),` + 'url(' + require('./images/header.jpg') + ')',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    }">
    </hero-header>
    <div id="relativity">
      <div class="mediums content-wrapper">
        <div class="content-wrapper">
          <div class="medium" data-aos="zoom-in" data-aos-once="true">
            <router-link to="/watercolour">
              <span class="med-icon"><font-awesome-icon :icon="water" /></span>
              <h3>Watercolour</h3>
              <p>
                I have been working with watercolour for about {{ new Date().getFullYear() - 2015 }} years now. I use a
                semi-realistic style, paired with black outlines and texture.
              </p>
            </router-link>
          </div>
          <div class="medium" data-aos="zoom-in" data-aos-once="true">
            <router-link to="/acrylic">
              <span class="med-icon"><font-awesome-icon :icon="palette" /></span>
              <h3>Acrylic</h3>
              <p>
                I have been working with acrylics for about {{ new Date().getFullYear() - 2013 }} years now. I use a
                realism style by utilizing the blending quality of the paints. I
                prefer painting on rocks and think they make the perfect gift.
              </p>
            </router-link>
          </div>
          <div class="medium" data-aos="zoom-in" data-aos-once="true">
            <router-link to="/digital">
              <span class="med-icon"><font-awesome-icon :icon="laptop" /></span>
              <h3>Digital</h3>
              <p>
                I have been working digitally for about {{ new Date().getFullYear() - 2016 }} years now. I use various
                styles as this medium is very versatile. My two prominent styles are
                realism and comic-like.
              </p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTint, faPalette, faLaptop } from '@fortawesome/free-solid-svg-icons'
import HeroHeader from '../../components/Layout/HeroHeader.vue'
import SlideTransition from '../../components/Layout/SlideTransition'

export default {
  name: 'Gallery',
  title() {
    return `MNJaRtz — Gallery`
  },
  data() {
    return {
      water: faTint,
      palette: faPalette,
      laptop: faLaptop
    }
  },
  components: {
    FontAwesomeIcon,
    HeroHeader,
    SlideTransition
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Source+Serif+Pro:ital,wght@0,200;0,300;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');

#relativity {
  position: relative;
  z-index: 10;
}
</style>