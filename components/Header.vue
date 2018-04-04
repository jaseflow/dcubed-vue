<template>
    <div class="header">
        <div class="left">
            <nav class="nav">
                <nuxt-link to="/how" class="nav__link">How we work</nuxt-link>
                <nuxt-link to="/projects" class="nav__link">Projects</nuxt-link>
                <nuxt-link to="/team" class="nav__link">Team</nuxt-link>
            </nav>
        </div>
        <nuxt-link to="/" class="logo logo--hidden">
            <img src="~/assets/img/dcubed.png" alt="" class="logo__img"/>
            <h1 class="logo__text">DCUBED</h1>
        </nuxt-link>
        <div class="right">
            <div class="socials">
                <a href="#" class="social">
                    <icon name="twitch"></icon>
                </a>
                <a href="#" class="social">
                    <icon name="twitter"></icon>
                </a>
                <a href="#" class="social">
                    <icon name="instagram"></icon>
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator"
import Icon from "vue-awesome"

@Component({
    components: {
        icon: Icon
    }
})
export default class Header extends Vue {
    mounted() {
        console.log(this.$route);
    }
}
</script>

<style scoped>
.header {
    height: 5rem;
    padding: 0 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
}

.left {
    display: flex;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
    font-family: "Teko";
    margin-right: 1.5rem;
    text-decoration: none;
    color: #fff;
    letter-spacing: 1px;
}

.logo--hidden {
    transform: translateY(100%);
    opacity: 0;
}

.logo__img {
    width: 1.125rem;
    margin-right: 0.625rem;
}

.logo__text {
    font-weight: 400;
    font-size: 1.25rem;
    margin-bottom: -0.3125rem;
}

.nav {
    display: flex;
    align-items: center;
}

.nav__link {
    display: block;
    padding: 0.625rem 1.25rem;
    color: #fff;
    opacity: 0.75;
    font-weight: 500;
    transition: opacity 200ms ease;
    text-decoration: none;
}

.nav__link:hover {
    opacity: 1;
}

.socials {
    display: flex;
    align-items: center;
}

.social {
    font-size: 1.25rem;
    color: #fff;
    width: 2.75rem;
    height: 1.75rem;
    line-height: 1.75rem;
    text-align: center;
    display: block;
    opacity: 0.75;
    transition: opacity 200ms ease;
}

.social:hover {
    opacity: 1;
}
</style>
