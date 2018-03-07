<template>
  <div>
    <h1 class="header">Projects</h1>
    <div class="cards">
      <Card v-for="project in projects" :key="project.id" :project="project"></Card>
    </div>
    <nuxt-link to="/">back to home</nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { State } from "vuex-class"
import Card from "~/components/Card.vue"

@Component({
  components: {
    Card
  }
})
export default class extends Vue {
  @State projects
}
</script>
