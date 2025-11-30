<script setup lang="ts"></script>

<template>
  <section id="gallery">
    <h1>Here's some snippet of work i've done recently</h1>
    <div class="gallery-container">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
#gallery {
  padding: var(--padding-large);
  height: fit-content;
  min-width: 90vh;
  align-content: center;
  text-align: center;
}

h1 {
  font-size: 4rem;
  padding: calc(var(--padding-large) * 2);
}

.gallery-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
}
</style>
