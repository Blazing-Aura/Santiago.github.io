<script setup lang="ts">
import { faPhotoFilm, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { useTemplateRef } from 'vue'
import { RouterView } from 'vue-router'

// const headingValue = useTemplateRef('header')

/* function intended on changing the top header to different text depending on location */
// document.addEventListener('scroll', () => {
//   if (headingValue.value != null) {
//     if (window.scrollY < 1269) headingValue.value.textContent = 'Santiago Barreto Barrera'
//     else if (window.scrollY > 1270 && window.scrollY < 2399)
//       headingValue.value.textContent = 'Learn more about me!'
//     else if (window.scrollY > 2400 && window.scrollY < 3519)
//       headingValue.value.textContent = 'Projects i am proud of!'
//     else if (window.scrollY > 3520 && window.scrollY < 4789)
//       headingValue.value.textContent = 'Mine Now!'
//     else if (window.scrollY > 4790 && window.scrollY < 6059)
//       headingValue.value.textContent = 'B.A.L.S'
//     else if (window.scrollY > 6060 && window.scrollY < 6201) headingValue.value.textContent = 'AR'
//   }
// })

function scrollToTop() {
  window.scrollTo(0, 0)
}
</script>

<template>
  <nav>
    <div id="right-links">
      <RouterLink to="/" class="button nav-button" @click="scrollToTop" id="home-button">
        <FontAwesomeIcon :icon="faPhotoFilm" /> Home</RouterLink
      >
      <h1 ref="header">Santiago Barreto Barrera</h1>
    </div>
    <div class="navbar-links">
      <div class="project-dropdown">
        <button class="nav-button button">
          <FontAwesomeIcon :icon="faProjectDiagram" /> Past Projects
        </button>
        <div class="dropdown-links">
          <RouterLink to="/MineNow" class="option" @click="scrollToTop">Mine Now!</RouterLink>
          <RouterLink to="/BLS" class="option" @click="scrollToTop">B.L.S.</RouterLink>
          <RouterLink to="/CaseCompanion" class="option" @click="scrollToTop"
            >Case Companion</RouterLink
          >
        </div>
      </div>
      <RouterLink to="/Gallery" class="button nav-button" @click="scrollToTop"
        ><FontAwesomeIcon :icon="faPhotoFilm" /> Gallery</RouterLink
      >
    </div>
  </nav>
  <RouterView />
  <footer>
    <h1>Santiago Barreto Barrera © 2025</h1>
  </footer>
</template>

<style scoped>
nav,
footer {
  text-align: center;
  position: sticky;
  padding: var(--padding-medium) 0;
  top: 0;
  z-index: 999;
  background-color: var(--color-background);
  color: var(--white);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & h1 {
    margin-left: var(--padding-large);
  }
}

#home-button {
  width: fit-content;
  margin-left: var(--padding-large);
}

.navbar-links,
#right-links {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.nav-button {
  width: 15rem;
  height: fit-content;
  display: block;
  padding: var(--padding-small);
  cursor: pointer;
  margin-right: var(--padding-large);
}

.project-dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-links {
  display: block;
  position: absolute;
  min-width: 15rem;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 1rem;
  opacity: 0;
  visibility: hidden;
  transition: opacity 2s;
}

.dropdown-links a {
  color: black;
  background-color: var(--light-colour);
  padding: var(--padding-small) var(--padding-medium);
  text-decoration: none;
  display: block;
  transition: background-color 0.5s;
  font-family: 'Sono', monospace;
  border-radius: 1rem;
  margin-top: var(--padding-small);
}

.dropdown-links a:hover {
  background-color: var(--light-accent-colour);
}

.project-dropdown:hover .dropdown-links {
  display: block;
  opacity: 1;
  visibility: visible;
}

.project-dropdown:hover .dropdown-button {
  background-color: var(--darker-accent-colour);
}
</style>
