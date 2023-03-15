<template>
    <nav class="navbar">
        <div id="contain">
            <span class="navbar-toggle" @click="toggle" :class="{ rotate: rotate, revrot: revrot}">
                <font-awesome-icon :icon="myIcon" />
            </span>
            <router-link to="/"><span class="logo" @click="toggle"><img src="@/assets/Watermark.png" aria-hidden="true" alt=""/></span></router-link>
            <ul class="main-nav" :class="{ active: active }">
                <li>
                    <router-link to="/#about"><a href="" class="nav-links" v-smooth-scroll  @click="toggle">About</a></router-link>
                </li>
                <li>
                    <router-link to="/contact"><a href="" class="nav-links"  @click="toggle">Contact</a></router-link>
                </li>
                <li>
                    <router-link to="/gallery"><a href="" class="nav-links"  @click="toggle">Gallery</a></router-link>
                    <span class="navbar-toggle2" @click="toggle2" :class="{ rotate2: rotate2, revrot2: revrot2 }">
                        <font-awesome-icon :icon="myIcon2" />
                    </span>
                    <ul class="drop-menu" :class="{ active2: active2 }" @click="toggle">
                        <li>
                            <router-link to="/watercolour"><a href="#" class="nav-links" @click="toggle2">Watercolour</a></router-link>
                        </li>
                        <li>
                            <router-link to="/acrylic"><a href="#" class="nav-links" @click="toggle2">Acrylic</a></router-link>
                        </li>
                        <li>
                            <router-link to="/digital"><a href="#" class="nav-links" @click="toggle2">Digital</a></router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faBars } from '@fortawesome/free-solid-svg-icons'
    import { faTimes } from '@fortawesome/free-solid-svg-icons'
    import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

    export default {
        name: 'TopNavNew',
        data () {
            return {
                myIcon: faBars,
                myIcon2: faChevronDown,
                iconBool: false,
                active: false,
                active2: false,
                rotate: false,
                revrot: true,
                rotate2: false,
                revrot2: true
            }
        },
        methods:{
            toggle() {
                this.iconBool = !this.iconBool;
                if (this.iconBool){
                    this.myIcon = faTimes;
                } else {
                    this.myIcon = faBars;
                }
                this.revrot = !this.revrot;
                this.rotate = !this.rotate;
                this.active = !this.active;
            },
            toggle2() {
                this.revrot2 = !this.revrot2;
                this.rotate2 = !this.rotate2;
                this.active2 = !this.active2;
            },
        },
        components: {
            FontAwesomeIcon
        }
    }

</script>

<style scoped>
/*###########################################

General Styles

############################################*/
    :root{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: "Josefin Sans", sans-serif;
    }

    .navbar {
        font-size: 18px;
        background-color: rgba(0, 0, 0, 0.5);
        filter: drop-shadow(0px 0px 20px rgba(102, 251, 233, 0.65));
        padding-bottom: 10px;
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        z-index: 1000;
    }

    #contain {
        margin: 0 1em;
        width: 100%;
        max-width: 1024px;
    }

    .main-nav {
        border-top: 1px solid white;
        margin: 1em 0 0 0;
        padding: 1em 0 0 0;
        list-style-type: none;
        display: none;
    }


/*###########################################

Nav Link and logo Styles

############################################*/

    a:hover {
        text-decoration: none;
    }

    .nav-links,
    .logo {
        text-decoration: none;
        color: white;
    }

    .logo img {
        height: 2.5em;
        width: auto;
    }

    .main-nav li {
        display: block;
        padding: 0.5em;
        transition: 0.5s;
    }

    /* Drop down menu for gallery mediums */
    .drop-menu {
        display: none;
        position: absolute;
        background-color: #353535;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        padding: 0;
        margin-top: 0.5em;
    }

    .drop-menu a {
        float: none;
        color: white;
        text-decoration: none;
        display: block;
        text-align: left;
        width: 100%;
        height: 100%;
    }

    .drop-menu.active2 {
        display: block;
    }


    /* toggle Icon for hamburger */
    .navbar-toggle {
        opacity:1;
        transition: 1s linear;
        position: absolute;
        top: 8px;
        right: 2em;
        cursor: pointer;
        color: rgba(255, 255, 255, 0.8);
        font-size: 24px;
    }

    /* toggle Icon for drop down menu for gallery mediums */
    .navbar-toggle2 {
        display: inline-block;
        cursor: pointer;
        color: rgba(255, 255, 255, 0.8);
        padding: 0 0.5em;
    }

    .rotate {
        transition: transform 1s ease-in-out;
        transform: rotate(180deg);
    }

    .revrot {
        transition: transform 1s ease-in-out;
        transform: rotate(360deg);
    }

    .rotate2 {
        transition: transform 0.5s ease-in-out;
        transform: rotate(180deg);
    }

    .revrot2 {
        transition: transform 0.5s ease-in-out;
        transform: rotate(360deg);
    }

    .active, .active2 {
    display: block;
    }

    .main-nav li:hover {
        filter: drop-shadow(0px 0px 20px rgba(102, 251, 233, 0.2));
        background-color: rgba(0, 0, 0, 0.85);
        cursor: pointer;
        transition: 1s;
    }


/*###########################################

Responsiveness

############################################*/

    @media screen and (min-width: 768px) {
        .navbar {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding-bottom: 0;
            height: 70px;
        }

        .main-nav {
            flex: 1 1 0;
            display: flex;
            justify-content: flex-end;
            border-top: none;
            position: absolute;
            top: 0;
            right: 5em;
            padding: 0;
            margin: 0;
        }

        .main-nav li {
            padding: 1em 1.5em;
            height: 70px;
        }

        .drop-menu {
            margin-top: 1.4em;
        }

        .logo {
            position: absolute;
            top: 15px;
        }

        .navbar-toggle {
            display: none;
        }

        #contain {
            margin: 0 5em;
            width: 100%;
        }
    }
    
    @media screen and (min-width: 500px) {
        #contain {
            margin: 0 2em;
        }
    }
</style>