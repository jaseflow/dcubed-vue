<template>
  <div class="card">
    <h2> {{project.name}} </h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam nesciunt at assumenda harum nulla itaque iste molestiae, quod veritatis eveniet ipsa labore rerum facilis minima delectus sint accusantium est animi.</p>
    <p>
        <a href="">Read More</a>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator"

@Component({})
export default class Card extends Vue {
  @Prop() project
}
</script>

<style scoped>
.card {
  padding: 1rem;
}
</style>
