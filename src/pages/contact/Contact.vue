<template>
    <div>
        <slide-transition></slide-transition>
        <hero-header title="Contact" image='@/pages/gallery/images/digital/piplup.jpg' :style="{
            background: `linear-gradient(to bottom, rgba(102, 251, 233, 0.47), rgba(102, 251, 233, 0.47)),` + 'url(' + require('../gallery/images/digital/piplup.jpg') + ')',
            backgroundPosition: 'center !important',
            backgroundSize: 'cover !important'
        }">
        </hero-header>
        <div id="content">
            <div class="fix">
                <div class="content-wrapper">
                    <h2 class="mb-0">Socials</h2>
                    <div class="col-6 icons">
                        <div class="d-flex socials mb-2">
                            <a href="https://www.instagram.com/mnjartz/" target="_blank"><span
                                    class="icon"><font-awesome-icon :icon="insta" /></span><span
                                    class="offscreen">Instagram</span></a>
                            <a href="https://www.deviantart.com/mnjartz" target="_blank"><span
                                    class="icon"><font-awesome-icon :icon="deviant" /></span><span class="offscreen">Deviant
                                    Art</span></a>
                            <a href="https://www.youtube.com/@mnjartz" target="_blank"><span class="icon"><font-awesome-icon
                                        :icon="youtube" /></span><span class="offscreen">Youtube</span></a>
                            <a href="https://www.etsy.com/ca/shop/MNJaRtz?ref=profile_header" target="_blank"><span
                                    class="icon"><font-awesome-icon :icon="etsy" /></span><span
                                    class="offscreen">Etsy</span></a>
                            <a href="https://www.tiktok.com/@mnjartz" target="_blank"><span class="icon"><font-awesome-icon
                                        :icon="tiktok" /></span><span class="offscreen">TikTok</span></a>
                            <a href="https://www.pinterest.ca/mnjart24/" target="_blank"><span
                                    class="icon"><font-awesome-icon :icon="pinterest" /></span><span
                                    class="offscreen">Pinterest</span></a>
                        </div>

                        <a href="mailto:mnjart24@gmail.com" class="link-white">mnjart24@gmail.com</a>
                    </div>
                </div>
            </div>
            <div>
                <div class="why">
                    <h2 class="mb-0">Why Contact Me?</h2>
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
                        <li>I will then begin working on it and send you a finished product with some variants within a
                            couple days.</li>
                        <li>You can then request any changes within reason, and I will continue to work on it until you are
                            happy.</li>
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
import { faInstagram, faDeviantart, faEtsy, faYoutube, faTiktok, faPinterest, } from '@fortawesome/free-brands-svg-icons'
import HeroHeader from '../../components/Layout/HeroHeader.vue';
import SlideTransition from '../../components/Layout/SlideTransition'

export default {
    name: 'Contact',
    title() {
        return `MNJaRtz — Contact`
    },
    data() {
        return {
            insta: faInstagram,
            deviant: faDeviantart,
            youtube: faYoutube,
            etsy: faEtsy,
            tiktok: faTiktok,
            pinterest: faPinterest
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


/*Used to keep page content above logo on scroll*/
#content {
    position: relative;
    height: 100%;
    background-color: white;
    overflow-x: hidden;
}

.right {
    padding: 0;
    margin: 0;
}

/*###########################################

Top Page Socials

############################################*/

.content-wrapper {
    max-width: 1200px;
    align-items: center;
    justify-content: flex-start;
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

.icons {
    padding: 2em;
    margin: 2em;
    border-left: 2px solid white;
}

/* Socials Icons Styles*/
.icon {
    font-size: 1.5em;
    display: inline-block;
    text-align: center;
    margin-right: 1em;
    width: 1em;
}

.mob-socials .icon {
    font-size: 1.5em;
}

/* Used to keep the socials visible while scrolling*/
.fix {
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: #353535;
    width: 100vw;
    padding: 0 5em;
}


/*###########################################

Why Contact Styles

############################################*/

.why {
    color: #353535;
    max-width: 1200px;
    margin: 5em auto;
    padding: 0 5em;
}

.why h2 {
    color: #353535;
}


/*###########################################

Contact Form Styles

############################################*/

form {
    position: relative;
    padding: 5em;
    background-color: #353535;
    display: flex;
    margin-bottom: 5em;
    transform: translateX(calc((100vw - 1200px)/2));
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    transition: 1s;
    overflow-x: hidden;
}

form:hover {
    transform: translateX(calc((100vw - 1200px)/2 - 100px));
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
    left: -2em;
    top: 48%;
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

input:focus,
textarea:focus {
    outline: none;
}

form:focus-within {
    transform: translateX(0px);
    filter: drop-shadow(0px 0px 20px rgba(102, 251, 233, 0.47));
}



/*###########################################

Responsiveness

############################################*/

@media screen and (max-width: 1400px) {

    /* Left Page Socials Half Screen*/
    .socials {
        width: 15em;
    }

    /* Form Smaller */
    form,
    form:hover {
        position: relative;
        padding: 2em;
        margin: 0 0 5em 0;
        transform: translateX(0px);
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        flex-direction: column;
    }
}

@media screen and (max-width: 800px) {

    /* General Smaller*/
    #content {
        flex-flow: column;
    }

    /* Socials Smaller*/
    .socials {
        height: auto;
        width: 100%;
        background-position: right 25% top 0;
        background: #353535;
    }

    /* Socials Text Styles*/
    .socials h2 {
        margin-bottom: 0.5em;
    }

    .fix .content-wrapper {
        flex-direction: column;
        align-items: flex-start;
    }

    .icons {
        margin: 0;
        border-left: none;
        border-top: 2px solid white;
        padding-left: 0;
    }

    fieldset {
        margin: 0;
        flex: 5 5 0;
        max-width: 800px;
    }

    form h2 {
        position: relative;
        left: 0;
        top: 48%;
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
}
</style>