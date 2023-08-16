<template>
  <div id="water">
    <slide-transition></slide-transition>
    <hero-header title="Watercolour" image='./images/header.jpg' :style="{
      background: `linear-gradient(to bottom, rgba(102, 251, 233, 0.47), rgba(102, 251, 233, 0.47)),` + 'url(' + require('./images/watercolour/turtle.jpg') + ')',
      backgroundPosition: 'center center',
      backgroundSize: 'cover !important'
    }">
    </hero-header>
    <div class="row">
      <div class="column">
        <div class="container" @click="openLightboxOnSlide(img.id)" v-for="img in filteredItems(1, 3)" :key="img.id">
          <img :src='require(`./images/watercolour/${img.image}`)' alt="" />
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
          <img :src='require(`./images/watercolour/${img.image}`)' alt="" />
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
          <img :src='require(`./images/watercolour/${img.image}`)' alt="" />
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
        require('./images/watercolour/spider.jpg'),
        require('./images/watercolour/gwen.jpg'),
        require('./images/watercolour/doggo.jpg'),
        require('./images/watercolour/turtle.jpg'),
        require('./images/watercolour/ironman.jpg'),
        require('./images/watercolour/jv.jpg'),
        require('./images/watercolour/yoda.jpg'),
        require('./images/watercolour/hyuna.jpg'),
      ]" />
    </div>
  </div>
</template>

<script>
import HeroHeader from '../../components/Layout/HeroHeader.vue';
import FsLightbox from "fslightbox-vue";
import SlideTransition from '../../components/Layout/SlideTransition'
import Watercolour from '../gallery/data/watercolour.json';

export default {
  name: 'Watercolour',
  title() {
    return `MNJaRtz — Watercolour`
  },
  data() {
    return {
      index: null,
      toggler: false,
      slide: 1,
      items: Watercolour,
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

#water {
  overflow-x: hidden;
  background-color: white;
}

#water h2 {
  font-size: 1.2em;
  color: black;
}

#water h3 {
  font-size: 1em;
}


/*###########################################

Art Hover Styles

############################################*/

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(102, 251, 233, 0.7);
  overflow: hidden;
  width: 0;
  height: 100%;
  transition: .5s ease;
}

.container:hover .overlay {
  width: 100%;
}

.container:hover img {
  filter: blur(4px);
  height: 90%;
}

.text1 {
  font-size: 20px;
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.text1 h3 {
  white-space: nowrap;
}

.container {
  position: relative;
  width: 100%;
  box-shadow: 2px 2px 10px 0px rgba(68, 68, 68, .4);
  margin: 30px 0;
}


/*###########################################

Image Grid Styles

############################################*/

.row {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 5em auto;
  max-width: 1200px;
}

/* Create three equal columns that sits next to each other */
.column {
  flex: 33.33%;
  max-width: 33.33%;
  padding: 0 15px;
}

.column img {
  vertical-align: middle;
  width: 100%;
  overflow-x: hidden;
  padding: 2em;
}


/*###########################################

Responsiveness

############################################*/

/* Responsive layout - makes a two column-layout instead of three columns */
@media screen and (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}
</style>