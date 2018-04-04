<template>
    <div id="index">
        <Header></Header>
        <div class="hero">
            <div class="hero__content">
                <img src="~/assets/img/dcubed.png" alt="" width="120" height="201" class="hero__logo"/>
                <h1 class="hero__title">Dream Design Develop</h1>
                <p class="hero__blurb"><strong style="font-weight: 400">DCUBED</strong> is a collective of clever people who specialise in creating kick-ass software. <br>We bring your digital dreams to life with creative technology.</p>
                <div class="hero__actions">
                    <nuxt-link to="/projects" class="btn btn--vibrant">Our projects</nuxt-link>
                    <span class="btn btn--outline">How we work</span>
                </div>
            </div>
        </div>
        <div class="bands" hidden>
            <div class="band band--heroku">
                <div class="container">
                    <div class="heroku">
                        <div class="heroku__content">
                            <h2 class="band__title">Watch your app grow</h2>
                            <p>Using Heroku, we are able to create and host any kind of app in seconds.</p>
                            <p>What does this mean for you?</p>
                            <ul>
                                <li>A public URL to share with any stakeholder or users</li>
                                <li>Reduced development costs due to instant app creation</li>
                                <li>(Transportable) Scalable hosting solution created</li>
                            </ul>
                        </div>
                        <img src="~/assets/img/heroku.png" alt="" class="heroku__logo">
                    </div>
                </div>
            </div>
            <div class="band band--slack">
                <div class="container">
                    <div class="comms">
                        <div class="comms__content">
                            <h2 class="band__title">We're over-communicators</h2>
                            <p>We create an environment of transparency and sharing so that you can see as much or as little as you want about the progress of your application.</p>
                            <p>How do we do this?</p>
                            <p>Upon kick-off you will receive an invite to your projects channel in the communication app Slack.</p>
                            <p>In here you will see all ‘commits’ made to the code repository, the moderation of the Trello project board and any commentary made by the development team. </p>
                        </div>
                        <div class="comms__logos">
                            <img src="~/assets/img/slack.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { State } from "vuex-class"
import Header from "~/components/Header.vue"

@Component({
    components: {
        Header
    },
    props: {
        scrolled: Boolean
    }
})
export default class extends Vue {
    @State projects

    scrolled = false
}
</script>

<style scoped>

Header {
    display: none;
}

#index {
    overflow: hidden;
    height: 100%;
    position: relative;
}

.lead-title {
    font-weight: 100;
    font-size: 48px;
    text-align: center;
}
.hero {
    text-align: center;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 5rem;
    width: 100%;
background-color: #0cbaba;
background-image: linear-gradient(315deg, #0cbaba 0%, #380036 74%);
}

.hero__actions {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1.75rem;
}

.hero__actions .btn {
    width: 220px;
    margin: 0 0.3125rem;
}

.hero__logo {
    max-width: 120px;
    margin-bottom: 1.25rem;
}

.hero__title {
    letter-spacing: -1px;
    margin-bottom: 0;
}

.hero__blurb {
    opacity: 0.75;
}

.hero__content {
    margin-top: -60px;
}

.bands {
    padding-top: 5rem;
    position: relative;
}

.band {
    height: calc(100vh - 5rem);
    display: flex;
    align-items: center;
}

.band--heroku {
    background: linear-gradient(-181deg, #062E3E 0%, #75569C 100%);
}

.band--slack {
    background: #fff;
    color: #555;
}

.band__title {
    font-size: 35px;
}

.heroku {
    display: flex;
    align-items: flex-start;
}

.heroku__content {
    flex: 1;
    padding-right: 2.5rem;
}

.heroku__logo {
    width: 300px;
    margin-top: -70px;
}

.comms {
    display: flex;
    align-items: center;
}

.comms__content {
    flex: 1;
    padding-right: 2.5rem;
}

.comms__logos {
    width: 300px;
}

</style>
