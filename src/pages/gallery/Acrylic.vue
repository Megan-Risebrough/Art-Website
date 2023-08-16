<template>
  <div id="acrylic">
    <slide-transition></slide-transition>
    <hero-header title="Acrylic" image='./images/header.jpg' :style="{
      background: `linear-gradient(to bottom, rgba(102, 251, 233, 0.47), rgba(102, 251, 233, 0.47)),` + 'url(' + require('./images/acrylic/car.jpg') + ')',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    }">
    </hero-header>
    <div class="row">
      <div class="column">
        <div class="container" @click="openLightboxOnSlide(1)">
          <img src='./images/acrylic/eye.jpg' alt="" />
          <div class="overlay">
            <div class="text1">
              <h2 class="mb-0">Eye</h2>
              <h3>2019-05-07</h3>
            </div>
          </div>
        </div>
        <img src='./images/cyan.png' aria-hidden="true" alt="" />
        <div class="container" @click="openLightboxOnSlide(2)">
          <img src='./images/acrylic/butterfly.jpg' alt="" />
          <div class="overlay">
            <div class="text1">
              <h2 class="mb-0">Butterfly</h2>
              <h3>2016-07-22</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <img src='./images/dark-grey.png' aria-hidden="true" alt="" />
        <div class="container" @click="openLightboxOnSlide(3)">
          <img src='./images/acrylic/Rosa.jpg' alt="" />
          <div class="overlay">
            <div class="text1">
              <h2 class="mb-0">Rosa Diaz</h2>
              <h3>2019-05-07</h3>
            </div>
          </div>
        </div>
        <img src='./images/black.png' aria-hidden="true" alt="" />
      </div>
      <div class="column">
        <div class="container" @click="openLightboxOnSlide(4)">
          <img src='./images/acrylic/tractor.jpg' alt="" />
          <div class="overlay">
            <div class="text1">
              <h2 class="mb-0">Tractor</h2>
              <h3>2018-05-21</h3>
            </div>
          </div>
        </div>
        <img src='./images/light-grey.png' aria-hidden="true" alt="" />
        <div class="container" @click="openLightboxOnSlide(5)">
          <img src='./images/acrylic/mouth.jpg' alt="" />
          <div class="overlay">
            <div class="text1">
              <h2 class="mb-0">Nose and Mouth</h2>
              <h3>2019-05-03</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="photos">
      <FsLightbox :toggler="toggler" :slide="slide" :sources="[
        require('./images/acrylic/eye.jpg'),
        require('./images/acrylic/butterfly.jpg'),
        require('./images/acrylic/Rosa.jpg'),
        require('./images/acrylic/tractor.jpg'),
        require('./images/acrylic/mouth.jpg'),
      ]" />
    </div>
  </div>
</template>

<script>
import HeroHeader from '../../components/Layout/HeroHeader.vue';
import FsLightbox from "fslightbox-vue";
import SlideTransition from '../../components/Layout/SlideTransition'

export default {
  name: 'Acrylic',
  title() {
    return `MNJaRtz — Acrylic`
  },
  data() {
    return {
      index: null,
      toggler: false,
      slide: 1
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
    },
    openLightboxOnSlide: function (number) {
      this.slide = number;
      this.toggler = !this.toggler;
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
  background-color: white;
}

#acrylic h2 {
  font-size: 1.2em;
  color: black;
}

#acrylic h3 {
  font-size: 1em;
}

/* Rest of the styles from Watercolour.vue */
</style>