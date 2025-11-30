<script setup lang="ts">
import type { layoutData } from '@/components/SplitLayout.vue'
import SplitLayout from '@/components/SplitLayout.vue'

const ProjectData: layoutData = {
  primaryImage: '/images/AR_Context.png',
  imageAlt: 'Image of the Mine Now! Project i completed for capstone',
  leftSide: true,
}

const ProcessData: layoutData = {
  primaryImage: '/images/AR_Process.jpg',
  imageAlt: 'Image of the Mine Now! Project i completed for capstone',
  leftSide: false,
}

const Process2Data: layoutData = {
  primaryImage: '/images/AR_Process_2.jpg',
  imageAlt: 'Image of the Mine Now! Project i completed for capstone',
  leftSide: true,
}
</script>

<template>
  <div class="hero-section">
    <h1>Case Companion</h1>
  </div>
  <SplitLayout :required-data="ProjectData">
    <h2>What is case companion?</h2>
    <p>
      Case companion was a design intended on solving the issue of people needing to refer to the
      provided manual or a video online while trying to build their new computer. Having the AR
      display be incorporated into the computer case provides a location where it can be easily
      accessible when building a computer. Additionally, being incorporated into the case would
      facilitate its ability to be used as a monitoring device so the AR experience would not become
      obsolete after its primary use.
    </p>
    <h3>How was it an important milestone to me?</h3>
    <p>
      As Augmented Reality is still a technology being adopted to this day, with smart glasses and
      headsets being developed, this project inspired me to create something unique, something that
      would allow new and old computer builders to have a straight forward experience. Therefore
      avoiding the need for instructions being needed online or on paper. This project provided the
      chance for me to further develop my skills in demonstrating the design process and creating
      wireframes for the project.
    </p>
  </SplitLayout>
  <SplitLayout :required-data="ProcessData">
    <h2>Design Process</h2>
    <p>
      This project occurred for 2 months to complete the project. Different design methodologies
      were used including wireframes, user testing, ideation and designing through low level
      prototyping.
    </p>
    <p>
      Initially when starting the design process, I did some more digging to figure out what makes a
      good computer building tutorial using the framework website. Brainstorming was required to
      ideate the possible questions users would ask about the many issues faced in computer building
      and find solutions using the prototype. A user persona is created to shape the needs and wants
      of the intended target audience identified in the design brief. The next important part of the
      experience was considering all the possible methods of interaction, including either current
      or AR technology and considering the possible implementations.
    </p>
  </SplitLayout>
  <SplitLayout :required-data="Process2Data">
    <h2>Design Process Cont.</h2>
    <p>
      Checks needed to be done to make sure if the design was viable enough for its intended purpose
      compared to other current mediums of AR, but from feedback and further research, it was deemed
      to be unique. Wireframes are created to ideate the structure for the main UI of the AR
      experience and consider the style to discover any possible changes to it. The first prototype
      was drawn up to include different features and accessories that would include to be part of
      the computer case. The last activity in the design process was to reflect back on the brief,
      user persona and user feedback that was done to discover possible areas that are missing and
      would require further refinement and iteration.
    </p>
    <h3>
      For further details, or if you wanted to look at the entire design documentation, feel free to
      ask!
    </h3>
  </SplitLayout>
</template>

<style scoped>
/* styling for the hero image section */
.hero-section {
  background-image: url(../../public/images/AR_Hero.png);
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
</style>
