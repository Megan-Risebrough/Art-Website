<template>
    <div id="water">
      <slide-transition></slide-transition>
      <hero-header
        title="Watercolour"
        image='./images/header.jpg'
        :style="{ background: `linear-gradient(to bottom, rgba(102, 251, 233, 0.47), rgba(102, 251, 233, 0.47)),` + 'url(' + require('./images/watercolour.jpg') + ')',
        backgroundPosition: 'center center',
        backgroundSize: 'cover' }">
      </hero-header>
      <div class="row">
        <div class="column">
          <div class="container" @click="toggler = !toggler">
            <img src='./images/watercolour/doggo.jpg' alt=""/>
            <div class="overlay">
              <div class="text1">
                <h2>Golden Retriever</h2>
                <h3>2019-08-15</h3>
              </div>
            </div>
          </div>
          <img src='./images/cyan.png' aria-hidden="true" alt=""/>
          <div class="container" @click="toggler = !toggler">
            <img src='./images/watercolour/spider.jpg' alt=""/>
            <div class="overlay">
              <div class="text1">
                <h2>Miles Morales</h2>
                <h3>2019-10-27</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <img src='./images/dark-grey.png' aria-hidden="true" alt=""/>
          <div class="container" @click="toggler = !toggler">
            <img src='./images/watercolour/yoda.jpg' alt=""/>
            <div class="overlay">
              <div class="text1">
                <h2>Yoda</h2>
                <h3>2020-04-19</h3>
              </div>
            </div>
          </div>
          <img src='./images/black.png' aria-hidden="true" alt=""/>
        </div>
        <div class="column">
          <div class="container" @click="toggler = !toggler">
            <img src='./images/watercolour/ironman.jpg' alt=""/>
            <div class="overlay">
              <div class="text1">
                <h2>Iron Man</h2>
                <h3>2019-08-01</h3>
              </div>
            </div>
          </div>
          <img src='./images/light-grey.png' aria-hidden="true" alt=""/>
          <div class="container" @click="toggler = !toggler">
            <img src='./images/watercolour/turtle.jpg' alt=""/>
            <div class="overlay">
              <div class="text1">
                <h2>Sea Turtle</h2>
                <h3>2020-02-15</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="photos">
        <FsLightbox
          :toggler="toggler"
          :sources="[
          require('./images/watercolour/doggo.jpg'),
          require('./images/watercolour/turtle.jpg'),
          require('./images/watercolour/spider.jpg'),
          require('./images/watercolour/yoda.jpg'),
          require('./images/watercolour/ironman.jpg'),
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

#water {
  overflow-x: hidden;
}

#water h2 {
  font-size: 1.2em;
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

.text1 h3{
  white-space: nowrap;
}

.container {
  position: relative;
  width: 100%;
  box-shadow: 2px 2px 10px 0px rgba(68, 68, 68, .4);
}


/*###########################################

Image Grid Styles

############################################*/

.row {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding: 5em 14vw;
  margin-bottom: 5em;
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