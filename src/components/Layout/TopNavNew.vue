<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav-bar">
        <div class="container-fluid">
            <router-link to="/" class="nav-links navbar-brand"><img src="@/assets/images/profile-red.png" alt="" width="30"
                    height="30" class="round">
                MNJaRtz</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/#about"><a href="" class="nav-link">About</a></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact"><a href="" class="nav-link">Contact</a></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/gallery"><a href="" class="nav-link">Gallery</a></router-link>
                    </li>
                </ul>
                <a type="button" class="btn btn-secondary ms-3 bg-dark" href="https://mnjartz.square.site/s/shop"
                    target="_blank">
                    <font-awesome-icon :icon="cart" /> &nbsp;Shop
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
export default {
    name: 'Navbar',
    data() {
        return {
            cart: faShoppingCart
        }
    },
    components: {
        FontAwesomeIcon
    }
};
</script>

<style scoped>
#nav-bar {
    background-color: #A3FFF9 !important;
    max-width: 1200px;
    margin: 0 auto;
}

.round {
    border-radius: 50%;
}

.nav-link {
    color: #353535 !important;
    font-size: 18px;
}

.nav-link:hover {
    filter: drop-shadow(2px 2px 10px white);
}

.bg-dark {
    background-color: #353535 !important;
}

.btn.bg-dark:hover {
    background-color: black !important;
}

@media (min-width: 992px) {
    .navbar-expand-lg .navbar-nav {
        align-items: center;
    }
}
</style>