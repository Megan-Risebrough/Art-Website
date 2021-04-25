<template>
    <div id="acrylic">
      <slide-transition></slide-transition>
      <hero-header
        title="Acrylic"
        image='./images/header.jpg'
        :style="{ background: `linear-gradient(to bottom, rgba(102, 251, 233, 0.47), rgba(102, 251, 233, 0.47)),` + 'url(' + require('./images/acrylic/car.jpg') + ')',
        backgroundPosition: 'center center',
        backgroundSize: 'cover' }">
      </hero-header>
      <div class="row">
        <div class="column">
          <div class="container" @click="toggler = !toggler">
            <img src='./images/acrylic/eye.jpg' alt=""/>
            <div class="overlay">
              <div class="text1">
                <h2>Eye</h2>
                <h3>2019-05-07</h3>
              </div>
            </div>
          </div>
          <img src='./images/cyan.png' aria-hidden="true" alt=""/>
          <div class="container" @click="toggler = !toggler">
            <img src='./images/acrylic/butterfly.jpg' alt=""/>
            <div class="overlay">
              <div class="text1">
                <h2>Butterfly</h2>
                <h3>2016-07-22</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <img src='./images/dark-grey.png' aria-hidden="true" alt=""/>
          <div class="container" @click="toggler = !toggler">
            <img src='./images/acrylic/Rosa.jpg' alt=""/>
            <div class="overlay">
              <div class="text1">
                <h2>Rosa Diaz</h2>
                <h3>2019-05-07</h3>
              </div>
            </div>
          </div>
          <img src='./images/black.png' aria-hidden="true" alt=""/>
        </div>
        <div class="column">
          <div class="container" @click="toggler = !toggler">
            <img src='./images/acrylic/tractor.jpg' alt=""/>
            <div class="overlay">
              <div class="text1">
                <h2>Tractor</h2>
                <h3>2018-05-21</h3>
              </div>
            </div>
          </div>
          <img src='./images/light-grey.png' aria-hidden="true" alt=""/>
          <div class="container" @click="toggler = !toggler">
            <img src='./images/acrylic/mouth.jpg' alt=""/>
            <div class="overlay">
              <div class="text1">
                <h2>Nose and Mouth</h2>
                <h3>2019-05-03</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="photos">
        <FsLightbox
          :toggler="toggler"
          :sources="[
          require('./images/acrylic/eye.jpg'),
          require('./images/acrylic/butterfly.jpg'),
          require('./images/acrylic/Rosa.jpg'),
          require('./images/acrylic/tractor.jpg'),
          require('./images/acrylic/mouth.jpg'),
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

#acrylic {
  overflow-x: hidden;
}

#acrylic h2 {
  font-size: 1.2em;
}

#acrylic h3 {
  font-size: 1em;
}

/* Rest of the styles from Watercolour.vue */
</style>