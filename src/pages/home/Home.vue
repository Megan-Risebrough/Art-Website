<template>
  <div id="main">
    <slide-transition></slide-transition>
    <div id="hero">
      <div id="hero-content">
        <h1>Megan</h1>
        <h1>Nancy Jane</h1>
        <h1>Risebrough</h1>
        <h4>Freelance Artist</h4>
        <div id="watermark">
        </div>
      </div>
    </div>
    <div id="intro">
      <div class="content-wrapper mt-5">
        <div class="row ">
          <div class="col-md-4 pb-3 pb-md-0">
            <h2 class="mb-0 pb-3 pt-0">Welcome!</h2>
            <div class="socials d-inline-flex" id="socials">
              <a href="https://www.instagram.com/mnjartz/" target="_blank"><font-awesome-icon :icon="insta" /><span
                  class="offscreen">Instagram</span></a>
              <a href="https://www.deviantart.com/mnjartz" target="_blank"><font-awesome-icon :icon="deviant" /><span
                  class="offscreen">Deviant Art</span></a>
              <a href="https://www.youtube.com/@mnjartz" target="_blank"><font-awesome-icon :icon="youtube" /><span
                  class="offscreen">Youtube</span></a>
              <a href="https://www.etsy.com/ca/shop/MNJaRtz?ref=profile_header" target="_blank"><font-awesome-icon
                  :icon="etsy" /><span class="offscreen">Etsy</span></a>
              <a href="https://www.tiktok.com/@mnjartz" target="_blank"><font-awesome-icon :icon="tiktok" /><span
                  class="offscreen">TikTok</span></a>
              <a href="https://www.pinterest.ca/mnjart24/" target="_blank"><font-awesome-icon :icon="pinterest" /><span
                  class="offscreen">Pinterest</span></a>
            </div>
            <a class="link-white" href="mailto:mnjart24@gmail.com">mnjart24@gmail.com</a>
          </div>
          <div class="col-md-4">
            <p>
              Hi, thanks for stopping
              by! Feel free to check out my work in each medium and
              if you like what you see, feel free to support me by checking out my socials. I also have
              stickers and prints available in my <a href="https://mnjartz.square.site/s/shop" target="_blank">shop</a>!
            </p>
          </div>
        </div>
      </div>
    </div>
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
    <div id="info">
      <div class="content-wrapper" data-aos="zoom-in" data-aos-once="true">
        <router-link to="/gallery"><button>Explore</button></router-link>
      </div>
    </div>
    <div id="commissions">
      <div class="content-wrapper" data-aos-once="true">
        <div class="left">
        </div>
        <div class="right" data-aos="fade-left" data-aos-once="true">
          <h2>Commissions</h2>
          <h3><i>Like what you see?</i></h3>
          <p>
            I do <em>commissions</em> in any style and medium seen here. Just
            send me an email with your request and I'll give you a price.
          </p>
          <router-link to="/contact"><button class="mt-3">Contact Me</button></router-link>
        </div>
      </div>
    </div>
    <div id="about">
      <div class="content-wrapper">
        <div class="left" data-aos="fade-right" data-aos-once="true">
        </div>
        <div class="right" data-aos-once="true" data-aos="fade-left">
          <h2 class="mb-0">About</h2>
          <p>
            I’m Megan Risebrough, a canadian artist and web developer. As you can see, I’ve created this
            website to showcase my artwork, but it was also a way for me to work on my web
            development skills as I recently got my Bachelor's degree in computer science.
          </p>
          <p>
            I have always had a passion for art and have developed different techniques and
            styles for various mediums over the years from school and self-teaching. Art has
            always been a hobby of mine, which started with acrylic rock paintings when I
            was 12. I then began experimenting with different mediums such as watercolour
            and digital when I got to highschool. If you like what you see art-wise, I am
            available for commissions, which can be arranged through the contact page. Art has always been a passion of
            mine, and I'm hoping to one day do it full time. Any support to help me reach that goal is greatly
            appreciated.
          </p>
          <p>
            Like I mentioned before, I also did this project to showcase my web development
            skills, so if you like what you see in that area, feel free to contact me about
            that too. I had lots of fun with this project, which I designed and developed
            myself and I hope you like it.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram, faDeviantart, faEtsy, faYoutube, faTiktok, faPinterest, } from '@fortawesome/free-brands-svg-icons'
import { faTint, faPalette, faLaptop } from '@fortawesome/free-solid-svg-icons'
import { gsap } from "gsap"
import SlideTransition from '../../components/Layout/SlideTransition'

AOS.init({
  duration: 1200,
})

export default {
  name: 'Home',
  title() {
    return `MNJaRtz — Home`
  },
  data() {
    return {
      insta: faInstagram,
      deviant: faDeviantart,
      youtube: faYoutube,
      etsy: faEtsy,
      tiktok: faTiktok,
      pinterest: faPinterest,
      water: faTint,
      palette: faPalette,
      laptop: faLaptop
    }
  },
  components: {
    FontAwesomeIcon,
    SlideTransition
  },
  mounted() {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.to("#hero-content", { x: "0%", duration: 1 });
    tl.fromTo("#hero-content h1", { opacity: 0 }, { opacity: 1, duration: 1 });

    // For about section router link
    var section = this.$router.currentRoute.hash.replace("#", "");
    if (section)
      this.$nextTick(() => window.document.getElementById(section).scrollIntoView());
  }
};
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("hero").style.height = "20em";
    document.getElementById("hero-content").style.height = "20em";
    const headers = document.querySelectorAll("#hero-content h1");
    headers.forEach(element => {
      element.style.paddingRight = "0.4em";
    });
  } else {
    document.getElementById("hero").style.height = "30em";
    document.getElementById("hero-content").style.height = "30em";
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Source+Serif+Pro:ital,wght@0,200;0,300;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');


/*###########################################

General Page Styles

############################################*/

:root {
  --lightcyan: #A3FFF9;
}

#main {
  overflow-x: hidden;
}

.right p {
  color: white;
}

/*###########################################

Hero Header Styles

############################################*/

#hero {
  background-image: url('../gallery/images/digital/campfire.jpg');
}

/*###########################################

Introduction Styles

############################################*/

#intro .content-wrapper {
  position: relative;
  background: #353535;
  z-index: 10;
}

#intro p {
  color: white;
}

#intro p>a {
  color: #A3FFF9;
}

/* Socials Styles */
.socials {
  padding: 1em 0;
}

.socials a {
  display: inline-block;
  text-decoration: none;
  color: white;
  margin: 0 0.5em;
  font-size: 1.5em;
  transition: 0.25s ease-in-out;
}

.socials a:first-of-type {
  margin-left: 0;
}

.socials a:hover {
  filter: drop-shadow(0px 0px 2px rgba(102, 251, 233, 0.47));
  font-size: 1.65em;
  color: #A3FFF9;
  transition: 0.25s ease-in-out;
}


/*###########################################

Explore Styles

############################################*/

#info {
  background-image:
    linear-gradient(to bottom, rgba(154, 156, 165, 0.52), rgba(0, 0, 0, 0.75)),
    url("images/explore.png");
  filter: grayscale();
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 5em;
  overflow: hidden;
  overflow-x: hidden;
}

#info button {
  color: white;
  font-family: 'Source Serif Pro', serif;
  font-weight: bold;
  font-size: 4em;
  transition: 1s;
  background: transparent;
  border: 3px solid white;
  border-radius: 15px;
  padding: 0.5em 1em;
  width: 100%;
  transition: 1s ease-in-out;
  transform: scale(1, 1);
}

#info button:hover {
  transform: scale(1.25, 1.25);
  transition: 1s ease-in-out;
}


/*###########################################

Commissions Styles

############################################*/

#commissions .content-wrapper {
  background-image: url('images/doggo.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  margin: 5em auto;
  border-radius: 20px;
}

#commissions h2 {
  font-size: 3em;
  margin: 0;
  color: #353535;
}

#commissions h3 {
  font-family: 'Source Serif Pro', serif;
  font-weight: bolder;
  color: #353535;
}

#commissions p {
  color: #353535;
}

#commissions .left {
  background: none;
  box-shadow: none;
}

#commissions .right {
  background-color: rgba(255, 255, 255, 0.85);
  margin: 0;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

#commissions button {
  transition: 0.75s;
  background: #A3FFF9;
  filter: drop-shadow(2px 2px 2px #353535);
  border: none;
  border-radius: 10px;
  padding: 0.5em 1em;
}

#commissions button:hover {
  color: white;
  background-color: #353535;
  -webkit-animation: action 1s infinite alternate;
  animation: action 1s infinite alternate;
}

@-webkit-keyframes action {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-10px);
  }
}

@keyframes action {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-5px);
  }
}


/*###########################################

About Styles

############################################*/

#about {
  display: flex;
}

#about .left {
  background-image: url("../../assets/images/profile-red.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  height: 500px;
  margin: 20% -2.5em 20% 0;
  z-index: 100;
}

#about .right {
  margin: 5em 0;
  padding: 5em;
  background-color: #353535;
  border-radius: 20px;
}


@media screen and (max-width: 900px) {

  #intro p {
    padding: 0;
  }

  #about {
    height: 100%;
  }

  #about .left {
    padding: 125px;
    width: 250px;
    margin: 0 auto -9em 5em;
  }

  #commissions .right {
    width: 100%;
    border-radius: 0;
  }
}

@media screen and (max-width: 600px) {

  /* Intro Mobile */
  #intro .content-wrapper {
    padding: 0 2em;
  }

  #about .right {
    padding: 5em 2em;
  }

  #about .left {
    margin: 0 auto -9em 2em;
  }

  /* Explore Mobile */
  #info {
    padding: 5em 2em;
  }

  #info button {
    font-size: 3.25em;
    padding: 0.5em 1em;
  }

  /* Commissions Mobile */
  #commissions .content-wrapper {
    padding: 0 1;
  }

  #commissions h2 {
    font-size: 2.5em;
    padding: 0 0 0.5em 0;
  }

  #commissions p {
    margin-bottom: 1em;
  }

  #commissions .left {
    flex: 0.1 0.1 0;
  }
}
</style>