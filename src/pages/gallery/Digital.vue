<template>
    <div id="digital">
      <slide-transition></slide-transition>
      <hero-header
        title="Digital"
        image='./images/digital.jpg'
        :style="{ background: `linear-gradient(to bottom, rgba(102, 251, 233, 0.47), rgba(102, 251, 233, 0.47)),` + 'url(' + require('./images/digital.jpg') + ')',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' }">
      </hero-header>
      <div class="row">
        <div class="column">
          <div class="container" @click="toggler = !toggler">
            <img src='./images/digital/Elf.jpg' alt=""/>
            <div class="overlay">
              <div class="text1">
                <h2>Elf</h2>
                <h3>2019-01-25</h3>
              </div>
            </div>
          </div>
          <img src='./images/cyan.png' aria-hidden="true" alt=""/>
          <div class="container" @click="toggler = !toggler">
            <img src='./images/digital/connor.jpg' alt=""/>
            <div class="overlay">
              <div class="text1">
                <h2>Connor</h2>
                <h3>2019-07-14</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <img src='./images/dark-grey.png' aria-hidden="true" alt=""/>
          <div class="container" @click="toggler = !toggler">
            <img src='./images/digital/thumbnail.png' alt=""/>
            <div class="overlay">
              <div class="text1">
                <h2>Portrait</h2>
                <h3>2019-03-07</h3>
              </div>
            </div>
          </div>
          <img src='./images/black.png' aria-hidden="true" alt=""/>
        </div>
        <div class="column">
          <div class="container" @click="toggler = !toggler">
            <img src='./images/digital/profile.jpg' alt=""/>
            <div class="overlay">
              <div class="text1">
                <h2>Comic Style Person</h2>
                <h3>2018-11-21</h3>
              </div>
            </div>
          </div>
          <img src='./images/light-grey.png' aria-hidden="true" alt=""/>
          <div class="container" @click="toggler = !toggler">
            <img src='./images/digital/Creativity.jpg' alt=""/>
            <div class="overlay">
              <div class="text1">
                <h2>Creativity</h2>
                <h3>2019-03-14</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="photos">
        <FsLightbox
          :toggler="toggler"
          :sources="[
          require('./images/digital/Elf.jpg'),
          require('./images/digital/connor.jpg'),
          require('./images/digital/thumbnail.png'),
          require('./images/digital/profile.jpg'),
          require('./images/digital/Creativity.jpg'),
          ]"
        />
      </div>
    </div>
</template>

<script>
import HeroHeader from '../../components/Layout/HeroHeader.vue';
import FsLightbox from "fslightbox-vue";
import SlideTransition from '../../components/Layout/SlideTransition'

export default {
  name: 'Watercolour',
  data() {
    return {
      index: null,
      toggler: false
    };
  },
  components: {
    HeroHeader,
    FsLightbox,
    SlideTransition
  },
  methods: {
    setIndex(index) {
      this.index = index
    }
  }
}
</script>

<style>

/*###########################################

General Page Styles

############################################*/

#digital {
  overflow-x: hidden;
}

#digital h2 {
  font-size: 1.2em;
}

#digital h3 {
  font-size: 1em;
}

/* Rest of the styles from Watercolour.vue */
</style>