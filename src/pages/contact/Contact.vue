<template>
 <div>
   <slide-transition></slide-transition>
   <hero-header
    title="Contact"
    image='@/assets/images/header.jpg'
    :style="{ background: `linear-gradient(to bottom, rgba(102, 251, 233, 0.47), rgba(102, 251, 233, 0.47)),` + 'url(' + require('./images/contactHero.jpg') + ')',
    backgroundPosition: 'bottom right',
    backgroundSize: 'cover' }">
   </hero-header>
   <div id="content">
    <div class="socials">
        <div class="fix">
            <h2>Socials</h2>
                <ul>
                    <li><a href=""><span class="icon"><font-awesome-icon :icon="insta" /></span>mnjartz</a></li>
                    <li><a href=""><span class="icon"><font-awesome-icon :icon="deviant" /></span>Deviantart</a></li>
                    <li><a href=""><span class="icon"><font-awesome-icon :icon="youtube" /></span>Youtube</a></li>
                </ul>
                <p>mnjart24@gmail.com</p>
        </div>
    </div>
    <div class="right">
        <div class="why">
            <h2>Why Contact Me?</h2>
            <p>
                    I can make custom art for you. Simply email me an inquiry
                    using the form below or with whatever emailing platform you
                    prefer to my email to the left. I will then give you an
                    estimated price and we can sort out the specifics. If you
                    are unsure you can check out my Etsy and see if any of my
                    listings there fit your needs.
            </p>
            <p>
                    <em>Satisfaction Gauranteed:</em> I will make as many
                    revisions as necessary until you are satisfied.
            </p>
            <p><em>The process:</em></p>
            <ul>
                <li>Start by giving me a detailed description of what you want along with optional references.</li>
                <li>I will then begin working on it and send you a finished product with some variants within a couple days.</li>
                <li>You can then request any changes within reason, and I will continue to work on it until you are happy.</li>
            </ul>
        </div>
        <form action="https://formspree.io/f/mgervjyb" method="POST">
            <h2>Send me an email</h2>
            <fieldset>
                <legend>Get a Commission</legend>
                <div>
                    <label>
                        <input type="text" name="name" placeholder="Name" required>
                    </label>
                </div>
                    <label>
                        <input type="text" name="email" placeholder="Email" required>
                    </label>
                <div>
                </div>
                    <label>
                        <input type="text" name="medium" placeholder="Medium and Style" required>
                    </label>
                <div>
                </div>
                <div>
                    <label>
                        <textarea name="message" placeholder="Describe what you want" required></textarea>
                    </label>
                </div>
                <div id="button">
                    <button type="submit">send</button>
                </div>
            </fieldset>
        </form>
    </div>
   </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faDeviantart } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import HeroHeader from '../../components/Layout/HeroHeader.vue';
import SlideTransition from '../../components/Layout/SlideTransition'

export default {
  name: 'Contact',
  data () {
    return {
      insta: faInstagram,
      deviant: faDeviantart,
      youtube: faYoutube
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


/*###########################################

General Page Styles

############################################*/

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

.right {overflow-x: hidden;}

/*Used to keep page content above logo on scroll*/
#content {
    display: flex;
    position: relative;
    height: 100%;
}

/* General Text Styles*/
h1 {
  font-family: 'Source Serif Pro', serif;
  font-weight: bold;
  font-size: 4.5em;
  transition: 1s;
  color: white;
}

h2 {
  font-family: 'PT Sans', sans-serif;
  font-size: 2.5em;
  color: #A3FFF9;
}

a, a:hover {
  text-decoration: none;
  color: white;
}

em {
    font-weight: bolder;
}

li {
    margin: 2em 1em;
}


/*###########################################

Left Page Socials

############################################*/

/* Main Socials Container*/
.socials {
    height: 130em;
    width: 20em;
    position: relative;

    background-color: #353535;
    background-image: url(./images/person.png);
    background-size: cover;
    background-position: right 25% bottom 0;
}

/* Socials Text Styles*/
.socials h2 {
    margin-bottom: 1em;
}

.socials p {
    color: white;
    margin-top: 1.75em;
}

.socials a {
    display: inline-block;
    text-decoration: none;
    color: white;
    transition: 0.75s;
}

.socials a:hover {
    filter: drop-shadow(0px 0px 2px rgba(102, 251, 233, 0.47));
    transform: scale(1.1);
    color: #A3FFF9;
    transition: 0.75s;
}

.socials ul {
    padding: 0;
}

.socials li {
    list-style: none;
    color: white;
    margin: 0.5em 0;
    font-size: 1.25em;
}

/* Socials Icons Styles*/
.icon {
  font-size: 1em;
  display: inline-block;
  text-align: center;
  margin-right: 1em;
  width: 1em;
}

/* Used to keep the socials visible while scrolling*/
.fix {
    padding: 12em 5em;
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
}


/*###########################################

Why Contact Styles

############################################*/

.why {
    color: #353535;
    padding: 12em;
}

.why h2 {
    color: #353535;
    margin-bottom: 1em;
}


/*###########################################

Contact Form Styles

############################################*/

form {
    position: relative;
    padding: 5em;
    background-color: black;
    display: flex;
    margin: 0 0 8em 5em;
    transform: translateX(100px);
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    transition: 1s;
    overflow-x: hidden;
}

form:hover {
    transform: translateX(0px);
    transition: 1s;
    filter: drop-shadow(0px 0px 20px rgba(102, 251, 233, 0.47));
}

fieldset {
    margin: 0 7em;
    flex: 5 5 0;
    max-width: 800px;
}

form h2 {
  position: absolute;
  left: -2em; top: 48%;
  font-family: 'Source Serif Pro', serif;
  transform: rotate(270deg);
}

legend {
    color: lightcyan;
    margin-bottom: 1em;
    width: 100%;
    font-size: 1.25em;
}

label {
    width: 100%;
}

#button {
    max-width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 2em;
}

button {
    background-color: rgb(163, 255, 249);
    color: #353535;
    font-size: 1em;
    border-width: 0em;
    padding: 0.5em 1em;
    margin-right: 0.5em;
    border-radius: 10px;
    transition: 0.5s;
}

button:hover {
    background-color: #353535;
    color: var(--white);
    transition: 0.5s;
}

textarea {
    resize: none;
    width: 100%;
    height: 12em;
    border-width: 0em;
    margin: 1em auto;
    padding: 0.5em;
}

input {
    border-width: 0em;
    color: black;
    padding: 0.5em;
    width: 100%;
    margin-top: 1em;
}

input:focus, textarea:focus {
    outline: none;
}

form:focus-within {
    transform: translateX(0px);
    filter: drop-shadow(0px 0px 20px rgba(102, 251, 233, 0.47));
}

.content-wrapper {
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
}


/*###########################################

Responsiveness

############################################*/

@media screen and (max-width: 1000px) {
    /* Left Page Socials Half Screen*/
    .socials {
        width: 15em;
    }
    .fix {
        padding: 12em 2.5em;
    }

    /* Why Contact Half Screen */
    .why {
        padding: 12em 5em;
    }
}

@media screen and (max-width: 900px) {
    /* Form Smaller */
    form {
        padding: 2em;
    }
}

@media screen and (max-width: 800px) {
    /* General Smaller*/
    #content {
        flex-flow: column;
    }

    /* Socials Smaller*/
    .socials {
        height: 25em;
        width: 100%;
        background-position: right 25% top 0;
    }
    /* Socials Text Styles*/
    .socials h2 {
        margin-bottom: 0.5em;
    }
    .socials ul {
        padding: 0;
        display: flex;
    }
    .fix {
        padding: 5em;
        height: 100%;
    }

    /* Why Contact Even Smaller */
    .why {
        padding: 5em;
    }

    /* Form Even Smaller */
    form {
        position: relative;
        padding: 2em;
        margin: 0 0 5em 0;
        transform: translateX(0px);
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        flex-direction: column;
    }
    fieldset {
        margin: 0;
        flex: 5 5 0;
        max-width: 800px;
    }
    form h2 {
    position: relative;
    left: 0; top: 48%;
    transform: rotate(0deg);
    }
}

@media screen and (max-width: 400px) {
    /* Socials Smallest */
    .socials {
        height: 20em;
        width: 100%;
        background-position: right 25% top 0;
    }
    /* Socials Text Styles*/
    .socials h2 {
        margin-bottom: 0.5em;
    }
    .fix {
        padding: 3.5em 2.5em;
    }
    /* Why Contact Smallest */
    .why {
        padding: 2em;
    }
}
</style>