<script setup lang="ts">
// required props used to pass the background image link to display.
defineProps<{
  backgroundLink: string
  leftOrRight: boolean
}>()
</script>

<template>
  <div
    :style="{
      backgroundImage: `url(${backgroundLink})`,
      justifyContent: leftOrRight ? 'left' : 'right',
    }"
    id="image-container"
  >
    <section id="summary-box">
      <slot></slot>
    </section>
  </div>
</template>

<style scoped>
#image-container {
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
}

/* Styling for the summery box that is partially transparent and formats the rest of the text appropriately */
#summary-box {
  background-color: var(--faded-background);
  text-align: center;
  padding: 12.5%;
  width: 25%;
  height: fit-content;
}
</style>
