<script setup lang="ts">
import type { layoutData } from '@/components/SplitLayout.vue'
import SplitLayout from '@/components/SplitLayout.vue'

const ProjectData: layoutData = {
  primaryImage: 'images/BALS_Context.jpg',
  imageAlt: 'Image of the Mine Now! Project i completed for capstone',
  leftSide: true,
}

const ProcessData: layoutData = {
  primaryImage: 'images/BALS_Process.png',
  imageAlt: 'Image of the Mine Now! Project i completed for capstone',
  leftSide: false,
}
</script>

<template>
  <div class="hero-section">
    <h1>B.L.S.</h1>
  </div>
  <SplitLayout :required-data="ProjectData">
    <h2>What is B.L.S?</h2>
    <p>
      B.L.S (Short for Bouldering and Lead Scorer) was a project intended on translating an
      intangible object or data (Scoring in the sport) into something tangible. As our project was
      focused on the 2024 Olympics, considerations of various types of sports were considered and
      the resulting project B.L.S was created with the intention of making it easier to understand
      how scoring works in the sport.
    </p>
    <h3>How was it an important milestone to me?</h3>
    <p>
      This project was a lot of fun to create, as again it incorporated both my interests in
      designing and coding to provide a working project. Additionally, This project expanded my
      perspective on Interaction design from having products being only digital, but also in a
      physical format that can be easier and relatable for people to use.
    </p>
  </SplitLayout>
  <SplitLayout :required-data="ProcessData">
    <h2>Design Process</h2>
    <p>
      This project occurred for a total of 3 months with two sections required to achieve the final
      design. Different design methodologies were used throughout this project including, sketch
      noting, mind storming, SCAMPER and design iteration through prototyping.
    </p>
    <p>
      The first stage of the project involved looking at the different methods of physical movements
      including push, pull, tug, etc. Through this first stage, pulling was decided to be the
      movement type I would follow on for the next stage of the project. Beginning the next stage,
      research was done to consider the best choice for activity, in which bouldering and lead was
      chosen from the ideas made during mind storming. Ideation was done to consider possible
      additions, changes or eliminations from the design. The final stages of the project included
      managing electronics, coding for the experience and fabrication of the prototype, considering
      a design for disassembly approach.
    </p>
    <h3>
      For further details, or if you wanted to look at the entire design documentation, feel free to
      ask!
    </h3>
  </SplitLayout>
  <section id="video-recording">
    <h2>Project Video</h2>
    <p>
      This video focuses on demonstrating the capabilities of the design, in addition to the purpose
      statement.
    </p>
    <iframe id="video" src="https://youtube.com/embed/ZgpM_8NdDDs"></iframe>
    <!-- <video id="video" controls controlslist="nodownload">
      <source src="../../public/videos/BALS_Video.mp4" type="video/mp4" />
      Your browser does not support this tag.
    </video> -->
  </section>
</template>

<style scoped>
/* styling for the hero image section */
.hero-section {
  background-image: url(../../public/images/BALS_hero_.jpg);
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

/* styling for the video section */
#video-recording {
  text-align: center;
  padding: var(--padding-large);

  & p {
    padding: var(--padding-large);
  }

  & iframe {
    height: 1080px;
    width: 1820px;
  }
}
</style>
