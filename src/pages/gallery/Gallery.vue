<template>
 <div>
   <slide-transition></slide-transition>
   <hero-header
    title="Gallery"
    image='./images/header.jpg'
    :style="{ background: `linear-gradient(to bottom, rgba(102, 251, 233, 0.47), rgba(102, 251, 233, 0.47)),` + 'url(' + require('./images/header.jpg') + ')',
    backgroundPosition: 'center center',
    backgroundSize: 'cover' }">
   </hero-header>
    <div id="explore">
      <h2>Explore</h2>
      <span class="icon"><a href="#mediums" v-smooth-scroll><font-awesome-icon :icon="myIcon" /></a></span>
    </div>
    <div id="relativity">
      <div id="mediums">
        <router-link to="/watercolour"><div class="medium" data-aos="fade-right" data-aos-once="true">
          <h1>Watercolour</h1>
          <img src="./images/watercolour.jpg" aria-hidden="true" alt="" />
        </div></router-link>
        <router-link to="/acrylic"><div class="medium" data-aos="fade-left" data-aos-once="true">
          <img src="./images/acrylic.png" aria-hidden="true" alt="" />
          <h1 id="lighter">Acrylic</h1>
        </div></router-link>
        <router-link to="/digital"><div class="medium" data-aos="fade-right" data-aos-once="true">
          <h1>Digital</h1>
          <img src="./images/digital.png" aria-hidden="true" alt="" />
        </div></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import HeroHeader from '../../components/Layout/HeroHeader.vue'
import SlideTransition from '../../components/Layout/SlideTransition'

export default {
  name: 'Gallery',
  data () {
    return {
      myIcon: faCaretDown
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
html {
  scroll-behavior: smooth;
}
div{
  overflow-x: hidden;
}
h1 {
  font-family: 'Source Serif Pro', serif;
  font-weight: bold;
  font-size: 4.5em;
  transition: 1s;
  color: white;
}
h2 {
  font-family: 'Source Serif Pro', serif;
  text-align: center;
  font-size: 3em;
  color: white;
}
.icon {
  font-size: 5em;
  margin-left: 0.25em;
  display: block;
  text-align: center;

  -webkit-animation: action 1s infinite alternate;
  animation: action 1s infinite alternate;
}
@-webkit-keyframes action {
  0% { transform: translateY(0); }
  100% { transform: translateY(-10px); }
}
@keyframes action {
  0% { transform: translateY(0); }
  100% { transform: translateY(-10px); }
}
a, a:hover {
  text-decoration: none;
  color: white;
}

#explore {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #212529;
  position: absolute;
  right: 0px; bottom: 0px;
  width: calc(100vw - 36em);
}

#relativity {
  height: 100vh;
  position: relative;
}

#mediums {
  position: absolute;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
}

.medium {
  display: flex;
  align-items: flex-start;
}

.medium h1 {
  font-family: 'PT Sans', sans-serif;
  flex: 1 1 0;
  font-size: 5em;
  padding: 1em;
  border-bottom: none;
  background-color:black;
  color: white;
  font-weight: lighter;
  max-width: 70%;
}

#lighter {
  background-color: #212529;
}

.medium img {
  flex: 1 1 0;
  max-width: 30%;
  height: 16em;
  object-fit: cover;
  filter: grayscale();
  transition: 1s;
}

.medium:hover img {
  filter: grayscale(0);
  transition: 1s;
}

.medium:hover h1 {
  background-color: rgba(0, 67, 101, 0.87);
}
#lighter:hover {
  background-color: rgba(0, 67, 101, 0.87);
}

/* Responsive layout */
@media screen and (max-width: 600px) {
  .medium h1 {
    font-size: 2em;
  }
  .medium img {
    height: 6.4em;
  }
}
</style>