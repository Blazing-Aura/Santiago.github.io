<script setup lang="ts">
import { ref } from 'vue'

/* exported data type for the props */
export type layoutData = {
  primaryImage: string
  imageAlt: string
  leftSide: boolean
}

const prop = defineProps<{
  requiredData: layoutData
}>()

const viewed = ref(false)

document.addEventListener('scroll', () => {
  if (window.scrollY > 1270 && window.scrollY < 2399) viewed.value = true
})
</script>

<template>
  <div id="layout-container">
    <!-- if LeftSide is true, then image will be on the left -->
    <img
      class="image"
      v-if="prop.requiredData.leftSide"
      :src="prop.requiredData.primaryImage"
      :alt="prop.requiredData.imageAlt"
    />
    <section id="main-container">
      <slot></slot>
    </section>
    <!-- Else if Leftside is false, it will be on thr right -->
    <img
      class="image"
      v-if="!prop.requiredData.leftSide"
      :src="prop.requiredData.primaryImage"
      :alt="prop.requiredData.imageAlt"
    />
  </div>
</template>

<style scoped>
/* styling used for the transition */
.focused-image-enter-active,
.focused-image-leave-active {
  transition: size 1s ease;
}

.focused-image-enter-from,
.focused-image-leave-to {
  size: 2;
}

#layout-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  align-items: center;
  justify-items: center;
}

.image {
  width: 100%;
  height: 100%;
  max-height: 100vh;
  object-fit: cover;
}

#main-container {
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;

  & * {
    margin-bottom: var(--padding-large);
  }
}
</style>
