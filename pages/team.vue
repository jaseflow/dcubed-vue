<template>
    <div>
        <Header></Header>
        <h1>Team</h1>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { State } from "vuex-class"
import Header from "~/components/Header.vue"

@Component({
    components: {
        Header
    }
})
export default class extends Vue {
}
</script>

<style scoped>
</style>
