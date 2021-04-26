<template>
    <footer>
        <div class="content-wrapper">
            <h2>MNJaRt</h2>
            <div class="row">
                <div class="info">
                    <p>
                      Hi, I am Megan Risebrough, a freelance artist who works in
                      several mediums as shown below. Feel free to check out my
                      work in each medium and if you like what you see, I am
                      available for commission. Contact me by email or checkout
                      my etsy.
                    </p>
                    <p>mnjart24@gmail.com</p>
                </div>
                <div class="info">
                    <h3>Follow</h3>
                    <div class="socials" id="socials">
                        <ul>
                            <li><a href="https://www.instagram.com/mnjartz/" target="_blank"><span class="icon"><font-awesome-icon :icon="myIcon1" /></span>Instagram</a></li>
                            <li><a href="https://www.deviantart.com/mnjartz" target="_blank"><span class="icon"><font-awesome-icon :icon="myIcon2" /></span>Deviantart</a></li>
                            <li><a href="https://www.youtube.com/channel/UCDOI3u69jAPZe1llUpGs55Q" target="_blank"><span class="icon"><font-awesome-icon :icon="myIcon3" /></span>Youtube</a></li>
                            <li><a href="https://www.etsy.com/ca/shop/MNJaRtz?ref=profile_header" target="_blank"><span class="icon"><font-awesome-icon :icon="myIcon4" /></span>Etsy</a></li>
                        </ul>
                    </div>
                </div>
                <div class="info">
                    <h3>Explore</h3>
                    <ul class="main-nav">
                        <li>
                            <router-link to="/#about"><a href="" class="nav-links" v-smooth-scroll >About</a></router-link>
                        </li>
                        <li>
                            <router-link to="/contact"><a href="" class="nav-links" >Contact</a></router-link>
                        </li>
                        <li>
                            <router-link to="/gallery"><a href="" class="nav-links" >Gallery</a></router-link>
                            <ul class="drop-menu">
                                <li>
                                    <router-link to="/watercolour"><a href="#" class="nav-links" >Watercolour</a></router-link>
                                </li>
                                <li>
                                    <router-link to="/acrylic"><a href="#" class="nav-links" >Acrylic</a></router-link>
                                </li>
                                <li>
                                    <router-link to="/digital"><a href="#" class="nav-links" >Digital</a></router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <p>Copyright &#169; 2020 MNJaRt - All Rights Reserved.</p>
                <p>Website designed and developed by Megan Risebrough</p>
            </div>
        </div>
    </footer>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faDeviantart} from '@fortawesome/free-brands-svg-icons'
import { faYoutube} from '@fortawesome/free-brands-svg-icons'
import { faEtsy } from '@fortawesome/free-brands-svg-icons'

export default {
    name: "PageFooter",
    data () {
        return {
        myIcon1: faInstagram,
        myIcon2: faDeviantart,
        myIcon3: faYoutube,
        myIcon4: faEtsy
        }
    },
    components: {
        FontAwesomeIcon
    }
}
</script>

<style scoped>
/* Containers Styles*/
    footer {
        background-color: black;
        position: relative;
        left: 0px;
        bottom: 0px;
        width: 100%;
        z-index: 100;
    }
    footer .row {
        padding: 2.5em;
    }
    .content-wrapper {
        max-width: 1044px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        padding: 5em;
        color: white;
    }
    .info {
        flex: 1 1 0;
        padding: 1em;
    }

/* Headers Styles */
    h2 {
        flex: 1 1 0;
        border-bottom: 1px solid white;
        padding-bottom: 0.25em;
        margin-bottom: 1em;
        width: 100%;
    }

/* Links Styles */
    li {
       list-style: none;
    }
    a {
        text-decoration: none;
        color: white;
    }
    a:hover {
        text-decoration: none;
        color: #A3FFF9;
    }
    .icon {
        padding: 0.5em;
        font-size: 1em;
    }


/*###########################################

Responsiveness

############################################*/

    @media screen and (max-width: 600px) {
        footer .content-wrapper {
            padding: 2em;
        }
        footer .row {
            flex-direction: column;
            padding: 0em;
            margin-bottom: 1.5em;
        }
    }
</style>