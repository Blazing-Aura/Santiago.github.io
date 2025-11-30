<script setup lang="ts">
import { faChevronDown, faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useTemplateRef } from 'vue'

// const heroContainer = useTemplateRef('hero')

const mouseElement = useTemplateRef('mousy')

// const squares = ref<HTMLDivElement[]>([]);
// const counter = ref(0)
// const wait = ref(0)

/**
 * Intended on saving the current location of the mouse on the hero background.
 * @param event
 */
// function mouseMoved(event: MouseEvent) {
//   // leave a trail where the mouse goes.
//   if (counter.value < 20 && wait.value >= 50) {
//     const selected = Math.round(Math.random())
//     const newSquare = document.createElement('div')
//     newSquare.id = `square${counter.value}`
//     newSquare.className = 'squareEffect'
//     newSquare.style.position = 'absolute'
//     newSquare.style.borderRadius = 'var(--padding-large)'
//     newSquare.style.top = event.pageY.toString() + 'px'
//     newSquare.style.left = event.pageX.toString() + 'px'
//     newSquare.style.width = '1rem'
//     newSquare.style.height = '1rem'
//     if (selected === 0) newSquare.style.backgroundColor = 'var(--primary-colour)'
//     else newSquare.style.backgroundColor = 'var(--accent-colour)'
//     // Add the new div square to the array of current values
//     heroContainer.value?.appendChild(newSquare)
//     // squares.value.push(newSquare);
//     setTimeout(removeSquare, 2000, counter.value)
//     counter.value = counter.value + 1
//     wait.value = 0
//   }
//   wait.value = wait.value + 1
// }

// function removeSquare(count: number) {
//   const box = document.getElementById(`square${count}`)
//   if (box?.parentElement != null) box.parentElement.removeChild(box)
//   counter.value = counter.value - 1
// }

function mousePressed(event: MouseEvent) {
  // Move selector to where mouse is located on the element
  if (mouseElement.value != null) {
    mouseElement.value.style.top = (event.pageY - 16.225).toString() + 'px'
    mouseElement.value.style.left = (event.pageX - 20).toString() + 'px'
    mouseElement.value.className = 'mouse-explosion'
  }
  setTimeout(hideMouseMarker, 2000)
}

function hideMouseMarker() {
  if (mouseElement.value != null) mouseElement.value.className = ''
}
</script>

<!-- Could change the hero image to a moving image OR consider making it an animation to really represent something more complex than a hero image -->
<template>
  <section id="hero-section" @mousedown="mousePressed" ref="hero">
    <h1>Bridging the gap between UX/UI Design and IT</h1>
    <p>Interaction Design + Computer Science</p>
    <!-- <p>{{ locX }}, {{ locY }}</p> -->
  </section>
  <FontAwesomeIcon :icon="faChevronDown" :size="'10x'" id="continue-indicator" />
  <div ref="mousy" id="header-mouse">
    <FontAwesomeIcon :icon="faCircle" size="2x" />
  </div>
</template>

<style scoped>
@property --x {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 0%;
}

@property --y {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 0%;
}

#header-mouse {
  position: absolute;
  top: 0px;
  left: 0px;
  width: fit-content;
  height: fit-content;
  opacity: 0;
}

.mouse-explosion {
  animation: grow-and-shrink 2s;
}

#hero-section {
  /* background-image: url(../../public/images/hero-image.jpg);
  background-repeat: no-repeat;
  background-size: cover; */
  background: #3a60f0;
  background: radial-gradient(
    circle farthest-corner at var(--x) var(--y),
    rgba(58, 96, 240, 1) 0%,
    rgba(240, 170, 57, 1) 100%
  );
  animation: shift-background 60s infinite alternate;
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
    color: var(--black);
  }

  & p {
    width: fit-content;
    font-size: var(--text-large);
    color: var(--white);
    /* background-color: rgba(224, 224, 224, 0.5); */
    padding: 0 0 0 var(--padding-large);
    transition: color 2s;
  }

  & p:hover {
    color: var(--black);
  }
}

/* Style adjustments to chevron to indicate further content below */
#continue-indicator {
  position: absolute;
  top: calc(90vh - 80px);
  left: calc(50vw - 100px);
  animation: indicator-move 2s infinite alternate ease;
}

/* .squareEffect {
  animation: effect 3s linear;
} */

/* keyframe animation for the squares to grow smaller as time goes by. */
/* @keyframes effect {
  0% {
    transform: rotate(0deg);
    background-color: #3a60f0;
  }
  100% {
    transform: rotate(360deg);
  }
} */

/* keyframe animation for growing and shrinking animation of cursor press*/
@keyframes grow-and-shrink {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  25% {
    transform: scale(0.5);
    opacity: 1;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}

/* keyframe animation for chevron arrow to move in a downwards direction */
@keyframes indicator-move {
  to {
    transform: translate(0, 0);
  }
  from {
    transform: translate(0, 2rem);
  }
}

/* animation keyframes for the background radial gradient to make it seem random */
@keyframes shift-background {
  0% {
    --x: 50%;
    --y: 50%;
  }
  10% {
    --x: 73%;
    --y: 86%;
  }
  20% {
    --x: 92%;
    --y: 1%;
  }
  30% {
    --x: 94%;
    --y: 38%;
  }
  40% {
    --x: 68%;
    --y: 70%;
  }
  50% {
    --x: 60%;
    --y: 52%;
  }
  60% {
    --x: 7%;
    --y: 64%;
  }
  70% {
    --x: 69%;
    --y: 14%;
  }
  80% {
    --x: 10%;
    --y: 33%;
  }
  90% {
    --x: 69%;
    --y: 72%;
  }
  100% {
    --x: 19%;
    --y: 24%;
  }
}
</style>
