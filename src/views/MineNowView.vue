<script setup lang="ts">
import SplitLayout, { type layoutData } from '@/components/SplitLayout.vue'

const AboutProject: layoutData = {
  primaryImage: '/images/Mine_Now_Context.jpg',
  imageAlt:
    'Image of the Mine Now! Project specifically the easel that is being tested by a colleague from class, who is drawing on the paper available.',
  leftSide: true,
}

const ProjectProcess: layoutData = {
  primaryImage: '/images/Mine_Now_Process.png',
  imageAlt:
    'Screenshot of multiple pages of the design documentation for the Mine Now! project, including photo`s and drawings done.',
  leftSide: false,
}

const LearnMore: layoutData = {
  primaryImage: '/images/Mine_Now_links.jpg',
  imageAlt:
    'Image of the Mine Now! Project specifically the Portrait case that holds the Ipad that has the web application for the rest of the experience.',
  leftSide: true,
}

function exhibition() {
  window.location.href = 'https://interaction.2025.qutdesignfestival.com.au/projects/mine-now/'
}
</script>

<template>
  <div class="hero-section">
    <h1>Mine Now!</h1>
  </div>
  <SplitLayout :required-data="AboutProject">
    <h2>What is Mine Now?</h2>
    <p>
      Mine now is a project intended on raising awareness on the issues of Generative AI,
      specifically AI image generation. It is know that AI requires a large amount of data to
      function correctly, some of which is illegally scraped data available on the web, including
      images and artworks from people without credit.
    </p>
    <p>
      Mine Now Provides users with the environment to understand how artists works have been easily
      stolen, put into AI image generation and produce a result that is sold for profit without
      credit to the person there. Additionally, there is the option to view other participants work
      and the respective AI generated versions.
    </p>
    <p>
      NOTE: The technology used for the AI image generation is a Neural Style Transfer that doesn't
      create a new image but instead copies a style image looks to the source image which is the
      persons work that was stolen.
    </p>
    <h3>How was it an important milestone?</h3>
    <p>
      Mine Now! was an important Capstone Project that provided the environment to put all of the
      skills i learned from every previous unit i have complemented. Web development, UX Design, UI
      Design and Coding were all the skills i needed to complete this project successfully. I was
      happy with the final result with this being a fresh perspective of having the freedom and
      creativity to build whatever i want.
    </p>
  </SplitLayout>
  <SplitLayout :required-data="ProjectProcess">
    <h2>Design Process</h2>
    <p>
      Mine now was a project that involved various design methods during a timeframe of 4 months.
      This involved ideation of possible project ideas, SCAMPER, low, medium and high fidelity
      prototyping and user testing.
    </p>
    <p>
      During the initial phase of the development, low level user testing and minor ideation was
      required to consider possible additions to the design. The next phase of the project included
      testing of the different technologies, physical and digital including the AI and the devices
      needed for the experience. The last stage of the project involved fabrication of parts for the
      easel and the portrait cover for the Ipad that would handle the web application for the
      experience. The high-fidelity prototype was lastly developed for both user testing before the
      exhibition where the project was refined and later put on display at the exhibition.
    </p>
    <h3>
      For further details, or if you wanted to look at the entire design documentation, feel free to
      ask!
    </h3>
  </SplitLayout>
  <SplitLayout :required-data="LearnMore">
    <p>
      This project has been such a wonderful experience, having the space and time to put all the
      skills i learned into one project.
    </p>
    <h3>
      If you wanted to learn more or view the video i made detailing how it works, feel free to go
      my project webpage on the exhibition website with the button below.
    </h3>
    <div class="button-group">
      <button class="button" @click="exhibition">Exhibition</button>
    </div>
  </SplitLayout>
</template>

<style scoped>
/* styling for the hero image section */
.hero-section {
  background-image: url(../../public/images/MineNow_hero.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;

  & h1 {
    width: fit-content;
    max-width: 55%;
    font-size: 8rem;
    color: var(--white);
    /* background-color: rgba(224, 224, 224, 0.5); */
    padding: 0 0 var(--padding-large) var(--padding-large);
    transition: color 2s;
  }

  & h1:hover {
    color: var(--complement-colour);
  }
}

/* keyframes for making the header text change colour slightly */
@keyframes color-header {
}
</style>
