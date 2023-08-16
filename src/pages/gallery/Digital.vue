<template>
  <div id="digital">
    <slide-transition></slide-transition>
    <hero-header title="Digital" image='./images/digital/cafe.jpg' :style="{
      background: `linear-gradient(to bottom, rgba(102, 251, 233, 0.47), rgba(102, 251, 233, 0.47)),` + 'url(' + require('./images/digital/cafe.jpg') + ')',
      backgroundPosition: 'center 80% !important',
      backgroundSize: 'cover !important',
      backgroundRepeat: 'no-repeat'
    }">
    </hero-header>
    <div class="row">
      <div class="column">
        <div class="container" @click="openLightboxOnSlide(img.id)" v-for="img in filteredItems(1, 3)" :key="img.id">
          <img :src='require(`./images/digital/${img.image}`)' alt="" />
          <div class="overlay">
            <div class="text1">
              <h2 class="mb-0">{{ img.name }}</h2>
              <h3>{{ img.date }}</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="container" @click="openLightboxOnSlide(img.id)" v-for="img in filteredItems(2, 3)" :key="img.id">
          <img :src='require(`./images/digital/${img.image}`)' alt="" />
          <div class="overlay">
            <div class="text1">
              <h2 class="mb-0">{{ img.name }}</h2>
              <h3>{{ img.date }}</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="container" @click="openLightboxOnSlide(img.id)" v-for="img in filteredItems(3, 3)" :key="img.id">
          <img :src='require(`./images/digital/${img.image}`)' alt="" />
          <div class="overlay">
            <div class="text1">
              <h2 class="mb-0">{{ img.name }}</h2>
              <h3>{{ img.date }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="photos">
      <FsLightbox :toggler="toggler" :slide="slide" :sources="[
        require('./images/digital/campfire.jpg'),
        require('./images/digital/bioshock.jpg'),
        require('./images/digital/cafe.jpg'),
        require('./images/digital/jinx.jpg'),
        require('./images/digital/mel.jpg'),
        require('./images/digital/frogs.jpg'),
        require('./images/digital/connor.jpg'),
        require('./images/digital/spheal.jpg'),
        require('./images/digital/swirlix.jpg'),
        require('./images/digital/piplup.jpg'),
        require('./images/digital/ditto.jpg'),
        require('./images/digital/profile-red.jpg'),
        require('./images/digital/creativity.jpg'),
        require('./images/digital/elf.jpg'),
        require('./images/digital/laracroft.jpg'),
        require('./images/digital/adventure.jpg'),
        require('./images/digital/atla.jpg'),
        require('./images/digital/antman.jpg'),
        require('./images/digital/omniman.jpg'),
        require('./images/digital/person-blue.jpg'),
        require('./images/digital/profile.jpg'),
      ]" />
    </div>
  </div>
</template>

<script>
import HeroHeader from '../../components/Layout/HeroHeader.vue';
import FsLightbox from "fslightbox-vue";
import SlideTransition from '../../components/Layout/SlideTransition'
import Digital from '../gallery/data/digital.json';

export default {
  name: 'Digital',
  title() {
    return `MNJaRtz — Digital`
  },
  data() {
    return {
      index: null,
      toggler: false,
      slide: 1,
      items: Digital,
    };
  },
  components: {
    HeroHeader,
    FsLightbox,
    SlideTransition
  },
  methods: {
    filteredItems(column, columns) {
      const self = this; // Enables us to pass this to the method
      const total = this.items.length; // How many items
      const gap = Math.ceil(total / columns); // How many per col
      let top = (gap * column); // Top of the col
      const bottom = ((top - gap)); // Bottom of the col
      top -= 1; // Adjust top back down one
      return self.items.filter(item =>
        self.items.indexOf(item) >= bottom
        && self.items.indexOf(item) <= top,
      ); // Return the items for the given col
    },
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

#digital {
  overflow-x: hidden;
  background-color: white;
}

#digital h2 {
  font-size: 1.2em;
  color: black;
}

#digital h3 {
  font-size: 1em;
}

/* Rest of the styles from Watercolour.vue */
</style>