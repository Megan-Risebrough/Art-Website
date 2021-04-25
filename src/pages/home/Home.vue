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
      <div class="content-wrapper">
        <div class="col">
          <h2>Introduction</h2>
          <div class="socials" id="socials">
            <a href="https://www.instagram.com/mnjartz/" target="_blank"><font-awesome-icon :icon="insta" /></a>
            <a href="https://www.deviantart.com/mnjartz" target="_blank"><font-awesome-icon :icon="deviant" /></a>
            <a href="https://www.youtube.com/channel/UCDOI3u69jAPZe1llUpGs55Q" target="_blank"><font-awesome-icon :icon="youtube" /></a>
            <a href="https://www.etsy.com/ca/shop/MNJaRtz?ref=profile_header" target="_blank"><font-awesome-icon :icon="etsy" /></a>
          </div>
        </div>
        <p>
          Hi, I am Megan Risebrough, a freelance artist who works in several
          mediums as shown below. Feel free to check out my work in each medium and
          if you like what you see, I am available for commission. Contact me by
          email in the contact page or checkout my etsy here.
        </p>
      </div>
    </div>
    <div class="mediums content-wrapper">
      <div class="content-wrapper">
        <div class="medium" data-aos="zoom-in" data-aos-once="true">
          <router-link to="/watercolour">
          <span class="med-icon"><font-awesome-icon :icon="water" /></span>
          <h3>Watercolour</h3>
          <p>
            I have been working with watercolour for about 6 years now. I use a
            semi-realistic style, paired with black outlines and texture.
          </p>
          </router-link>
        </div>
        <div class="medium" data-aos="zoom-in" data-aos-once="true">
          <router-link to="/acrylic">
          <span class="med-icon"><font-awesome-icon :icon="palette" /></span>
          <h3>Acrylic</h3>
          <p>
            I have been working with acrylics for about 8 years now. I use a
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
            I have been working digitally for about 6 years now. I use various
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
          <div class="row">
            <router-link to="/contact"><button>Contact Me</button></router-link>
          </div>
        </div>
      </div>
    </div>
    <div id="about">
      <div class="content-wrapper">
        <div class="left">
        </div>
        <div class="right" data-aos-once="true">
          <h2>About</h2>
          <p>
            I’m Megan Risebrough, an artist and student. As you can see, I’ve created this
            website to showcase my artwork, but it was also a way for me to work on my web
            development skills as I am currently enrolled in a computer science program.
          </p>
          <p>
            I have always had a passion for art and have developed different techniques and
            styles for various mediums over the years from school and self-teaching. Art has
            always been a hobby of mine, which started with acrylic rock paintings when I
            was 12. I then began experimenting with different mediums such as watercolour
            and digital when I got to highschool. If you like what you see art-wise, I am
            available for commissions, which can be arranged through the contact page.
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
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faDeviantart } from '@fortawesome/free-brands-svg-icons'
import { faEtsy } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faTint } from '@fortawesome/free-solid-svg-icons'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { gsap } from "gsap"
import SlideTransition from '../../components/Layout/SlideTransition'

AOS.init({
  duration: 1200,
})

export default {
  name: 'Home',
  data () {
    return {
      insta: faInstagram,
      deviant: faDeviantart,
      youtube: faYoutube,
      etsy: faEtsy,
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

    //tl.to(".text", { y: "0%", duration: 2, stagger: 0.5 }, "=1");
    //tl.to(".slider", { x: "100%", duration: 1.5, delay: 0.5 });
    //tl.to(".intro", { x: "100%", duration: 1 }, "-=1");
    tl.to("#hero-content", { x: "0%", duration: 1 });
    tl.fromTo("#hero-content h1", { opacity: 0 }, { opacity: 1, duration: 1 });

    // For about section router link
    var section=this.$router.currentRoute.hash.replace("#", "");
    if (section)
      this.$nextTick(()=> window.document.getElementById(section).scrollIntoView());
  }
};
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("hero").style.height = "30em";
    document.getElementById("hero-content").style.height = "30em";
    document.getElementById("hero-content").style.paddingTop = "2em";
    const headers = document.querySelectorAll("#hero-content h1");
    headers.forEach(element => {
      element.style.paddingRight = "0.4em";
    });
  } else {
    document.getElementById("hero").style.height = "100vh";
    document.getElementById("hero-content").style.height = "100vh";
    document.getElementById("hero-content").style.paddingTop = "18em";
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
  /*Heading Styles */
  h1 {
    font-family: 'Source Serif Pro', serif;
    font-weight: bold;
    font-size: 4.5em;
    transition: 1s;
    color: white;
  }
  h2,h3,h4,p {font-family: 'PT Sans', sans-serif;}
  h2 {
    color: #A3FFF9;
    padding: 1em 0;
    font-size: 2.5em;
    margin-bottom: 1em;
  }
  h3 {
    color: #353535;
  }
  h4 {
    color: #A3FFF9;
    margin-top: 1em;
  }

  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }

  em {
    font-style: normal;
    font-weight: bolder;
  }

  .row {
    display: flex;
    justify-content: center;
  }
  .content-wrapper {
    display: flex;
    justify-content: center;
    max-width: 1044px;
    margin-left: auto;
    margin-right: auto;
  }
  .content-wrapper.col {
    flex-direction: column;
  }
  .left {
    flex: 1 1 0;
    z-index: 5;
  }
  .right {
    flex: 1 1 0;
    padding: 2em;
    margin-left: 3em;
    z-index: 5;
  }
  .right p {
    color: white;
  }


/*###########################################

Hero Header Styles

############################################*/

  #hero {
    height: 100vh;
    background-image: url('images/hero.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: 1s;
  }
  #hero-content {
    background-color: rgba(0, 0, 0, 0.75);
    height: 100vh;
    width: 35em;
    padding: 18em 5em;
    transition: 1s;
  }
  #watermark {
    position: absolute;
    width: 100vw;
    height: 60vh;
    left: -100px;
    bottom: 0;
    z-index: 0;

    background: url('images/Watermark_white.png');
    background-size: cover;
    background-repeat: no-repeat;
    filter: opacity(0.2);
  }
  #hero h4 {
    margin-top: 2em;
    padding-left: 0.5em;
    border-left: 200px solid white;
    height: 1em;
  }

/*###########################################

Introduction Styles

############################################*/

  #intro .content-wrapper {
    position: relative;
    background: #353535;
    padding: 8.5em 9em;
    margin-top: 5em;
    z-index: 10;
  }
  #intro p {
    padding: 0 0 0 5em;
    color: white;
  }
  #intro h2 {
    padding: 0;
    margin: 0;
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

Mediums Styles

############################################*/
  .mediums {
    position: relative;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 4em;
  }
  .medium {
    text-align: center;
    margin: 7em 1em 2em 1em;
    padding: 1em;
    border: 1px solid #353535;
    flex: 1 1 0;
    transition: 0.5s;
  }
  .medium:hover {
    filter: drop-shadow(0px 0px 20px rgba(102, 251, 233, 0.65));
    background-color: #A3FFF9;
    transition: 0.75s;
  }
  .medium h3 {
    padding: 3em 0 1.5em;
  }
  .medium a {
    color: #353535;
  }
  .med-icon {
    font-size: 6em;
    position: absolute;
    top: -75px;
    left: 0; right: 0;
    width: 100%;
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
    transform: scale(1,1);
  }

  #info button:hover {
    transform: scale(1.25,1.25);
    transition: 1s ease-in-out;
  }


/*###########################################

Commissions Styles

############################################*/

  #commissions .content-wrapper{
    height: 45em;
    background-image: url('images/doggo.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    padding: 0 2em;
    width: 100%;
  }
  #commissions h2 {
    font-size: 3em;
    padding: 2em 0 0.75em 0;
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
    margin-bottom: 2em;
  }
  #commissions .left {
    background: none;
    box-shadow: none;
  }
  #commissions button {
    transition: 1s;
    background: #A3FFF9;
    border: none;
    border-radius: 10px;
    padding: 0.5em 1em;
  }
  #commissions button:hover {
    color: #bee9ff;
    border-color: #004365;
    -webkit-animation: action 1s infinite alternate;
    animation: action 1s infinite alternate;
  }
  @-webkit-keyframes action {
    0% { transform: translateY(0); }
    100% { transform: translateY(-10px); }
  }
  @keyframes action {
    0% { transform: translateY(0); }
    100% { transform: translateY(-5px); }
  }


/*###########################################

About Styles

############################################*/

  #about {
    display: flex;
    background: #353535;
    background-image: url("images/about.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom left;
    height: 100vh;
    max-width: 100vw;
  }
  #about img {
    align-self: flex-end;
    max-width: 0vw;
    height: fit-content;
    max-height: 100vh;
    filter: grayscale(0.5) drop-shadow(0 0 70px rgba(102, 251, 233, 0.4));
  }
  #about .right {
    margin: 0;
    padding: 5em;
    background-color: rgba(0, 0, 0, 0.75);
  }


/*###########################################

Responsiveness

############################################*/

  @media screen and (max-width: 900px) {
    .content-wrapper {
      flex-direction: column;
    }
    #intro p {
      padding: 0;
    }
    .content-wrapper .col {
      padding: 0em;
    }
    #about{
      height: 100%;
    }
    #about .left {
      flex: 0;
    }
  }

  @media screen and (max-width: 600px) {
    /* General Mobile */
    .right{
      margin: 0;
    }
    h1 {
      font-size: 3em;
    }
    h4 {
      height: 0.5em;
      border-left: 0;
    }

    /* Intro Mobile */
    #intro .content-wrapper, #about .right{
      padding: 5em 2em;
    }

    /* Mediums Mobile */
    .mediums {
      padding: 2em;
    }
    .medium h3 {
      padding: 1.5em 0 1em;
    }
    .med-icon {
      font-size: 5em;
      position: absolute;
      top: -75px;
      left: 0; right: 0;
      width: 100%;
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
    #commissions .content-wrapper{
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

  @media screen and (max-width: 500px) {
    /* Hero Mobile */
    #hero, #hero-content {
      height: 100vh;
      max-width: 100vw;
    }
    #hero-content{
      padding: 15em 2em;
    }
    #watermark {
      position: absolute;
      width: 110vw;
      height: 70vw;
      left: -50px;
      bottom: 0px;
    }
    h1 {
      font-size: 3em;
    }
    #hero h4 {
      height: 1em;
      margin-top: 1em;
      border-left: 5px solid white;
    }
  }

  @media screen and (max-width: 350px) {
    h1 {
      font-size: 2em;
    }
  }
</style>