<script setup lang="ts">
import HeroWelcome from '@/components/HeroWelcome.vue'
import PhotoGrid from '@/components/PhotoGrid.vue'
import SplitLayout, { type layoutData } from '@/components/SplitLayout.vue'

// Create the correct props for the splitLayout
const AboutMeData: layoutData = {
  primaryImage: '/images/personal_image.jpg',
  imageAlt: 'Image of the Mine Now! Project i completed for capstone',
  leftSide: true,
}

function Instagram() {
  window.location.href = 'https://www.instagram.com/santibarretobarrera/'
}

function linkedIn() {
  window.location.href = 'http://google.com'
}

function exhibition() {
  window.location.href = 'https://interaction.2025.qutdesignfestival.com.au/projects/mine-now/'
}

function scrollToTop() {
  window.scrollTo(0, 0)
}
</script>

<template>
  <main>
    <HeroWelcome />
    <SplitLayout :required-data="AboutMeData">
      <img
        class="added-image"
        src="../../public/images/logo.jpeg"
        alt="Photo of myself posing with my arms crossed to the camera."
      />
      <h2>About Me</h2>
      <p>
        Hi, I'm Santiago! I'm an emerging professional passionate about creating meaningful designs
        and having fun! Currently i'm completing a double degree in interaction design and
        Information Technology at the Queensland University of Technology. Through my studies and
        hands-on projects, I've built strong foundations in web development languages including
        Javascript, and frameworks including React and Vue. I'm excited to bring fresh ideas and
        energy to real-world challenges.
      </p>
      <p>
        My interests include creating engaging user interfaces, in addition to creative based
        projects. I'm motivated by opportunities to create meaningful designs that will support
        companies with their goals, in addition to improving and learning new skills along the way.
      </p>
      <p>
        When I'm not working on projects, you'll find me taking photo's of birds, other beautiful
        landscapes and sky's as a reminder of our wonderful world. I'm eager to connect,
        collaborate, and grow so feel free to reach out if you'd like to work together or even just
        chat on one of my socials below!
      </p>
      <div class="button-group">
        <button type="button" @click="linkedIn" class="button">LinkedIn</button>
        <button type="button" @click="Instagram" class="button">Instagram</button>
      </div>
    </SplitLayout>
    <PhotoGrid>
      <a class="image-container" href="#image-container-minenow">
        <h2>Mine Now!</h2>
        <img
          src="../../public/images/MineNow_Hero.jpg"
          alt="Photograph of the the Mine Now! project i completed for capstone. It includes a easel where the user can draw and an ipad that is used to view and continue with the experience"
        />
      </a>
      <a class="image-container" href="#image-container-BALS">
        <h2>B.L.S</h2>
        <img
          src="../../public/images/BALS_hero.png"
          alt="Photograph of the Bouldering and Lead Scorer (also know as B.A.L.S.), which was a project that made something intangible like the score of the sport, tangible with physical buttons and rotary encoders."
        />
      </a>
      <a class="image-container" href="#image-container-AR">
        <h2>Case Companion</h2>
        <img
          src="../../public/images/AR_Hero.png"
          alt="Photograph of the Case Hero prototype, that include a mock image as to how it would work, as a AR experience that is incorporated directly into the case itself."
        />
      </a>
      <h2 id="additional-project">One additional project may be shown when requested</h2>
    </PhotoGrid>
    <!-- Project display area -->
    <div class="image-container-glideshow" id="image-container-minenow">
      <section class="summary-box">
        <h2>Mine Now!</h2>
        <p>
          Mine now was a project intended on raising awareness of the implications of generative AI,
          specifically AI image generation. The project involved a combination of digital and
          physical design work for the whole project to come to fruition.
        </p>
        <p>
          To learn more about the process that was needed to complete the project, feel free to go
          to <strong>More details</strong>, else feel free to look at the Exhibition website for
          more context about my project.
        </p>
        <div class="button-group">
          <RouterLink to="/MineNow" class="button" @click="scrollToTop">More Details</RouterLink>
          <button class="button" @click="exhibition">Exhibition</button>
        </div>
      </section>
    </div>
    <div class="image-container-glideshow" id="image-container-BALS">
      <section class="summary-box">
        <h2>B.A.L.S</h2>
        <p>
          B.A.L.S. (Short for Bouldering and Lead scorer) is a project intended on changing an
          intangible thing, tangible, which the priority of the project was to represent the score
          of the bouldering and lead in a easy to use prototype.
        </p>
        <p>
          To learn more about the process that was needed to complete the project, feel free to go
          to <strong>More details</strong>.
        </p>
        <div class="button-group">
          <RouterLink to="/BLS" class="button" @click="scrollToTop">More details</RouterLink>
        </div>
      </section>
    </div>
    <div class="image-container-glideshow" id="image-container-AR">
      <section class="summary-box">
        <h2>Case Companion</h2>
        <p>
          Case Companion was an assessed project that involved creating a theoretical augmented
          reality design intended on being relevant to the user. Case Companion intends to use the
          side glass panel as the method of facilitating the AR experience.
        </p>
        <p>
          To learn more about the process that was needed to complete the project, feel free to go
          to <strong>More details</strong>.
        </p>
        <div class="button-group">
          <RouterLink to="/CaseCompanion" class="button" @click="scrollToTop"
            >More details</RouterLink
          >
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  height: 100%;
}

.added-image {
  aspect-ratio: 1;
  max-height: 30vh;
}

#additional-project {
  text-align: center;
  padding: var(--padding-large);
  grid-column: 1 / 4;
}

.image-container {
  width: calc(100vw / 3 - var(--padding-large));
  aspect-ratio: 1;
  text-align: center;
  align-content: center;

  & img {
    /* width: auto;
    height: auto; */
    max-height: calc(100vw / 3 - (var(--padding-large) * 4));
    max-width: calc(100vw / 3 - (var(--padding-large) * 4));
    /* aspect-ratio: 1; */
    contain: content;
  }
}

.image-container-glideshow {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}

#image-container-minenow {
  background-image: url(../../public/images/MineNow_Hero.jpg);
  justify-content: flex-start;
}

#image-container-BALS {
  background-image: url(../../public/images/BALS_hero.png);
  justify-content: flex-end;
}

#image-container-AR {
  background-image: url(../../public/images/AR_Hero.png);
  justify-content: flex-start;
}

.summary-box {
  background-color: var(--faded-background);
  text-align: center;
  margin: 0 12.5%;
  width: 25%;
  height: fit-content;
  padding: var(--padding-large) var(--padding-medium);
  display: flex;
  flex-direction: column;
  gap: var(--padding-medium);
}
</style>
