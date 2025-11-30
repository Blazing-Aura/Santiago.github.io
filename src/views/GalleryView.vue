<script setup lang="ts"></script>

<template>
  <div class="hero-section">
    <h1>Gallery</h1>
    <p>
      These are all of my favourite photo's I took with my Samsung Galaxy s21 FE, involving birds
      and landscapes with the sky. I hope you enjoy them as much as i do!
    </p>
  </div>
  <div class="gallery-grid">
    <div class="column">
      <img
        src="../../public/gallery/Blue_lake_sky.jpg"
        alt="Photo of a scenery in a hotel that is located next to a lake, with a almost clear blue sky and greenery in the distance."
      />
      <img
        src="../../public/gallery/Brisbane_city.jpg"
        alt="Photo of Brisbane city from the new green bridge near gardens point."
      />
      <img
        src="../../public/gallery/Butcher_bird.jpg"
        alt="Photo of a butcher bird staring towards the camera."
      />
      <img
        src="../../public/gallery/Butcher_bird2.jpg"
        alt="Photo of a butcher bird staring towards the camera."
      />
    </div>
    <div class="column">
      <img
        src="../../public/gallery/clear_sky.jpg"
        alt="Photo of a almost clear sky with some clouds and a yellowish to blue colour range."
      />
      <img
        src="../../public/gallery/Currawong.jpg"
        alt="Photo of a currawong bird on top of a bush."
      />
      <img
        src="../../public/gallery/Finch.jpg"
        alt="Photo of a Finch eatings some crumbs on the floor."
      />
      <img
        src="../../public/gallery/Helicopter.jpg"
        alt="Photo of a old military helicopter stationary on a pole for a memorial."
      />
      <img
        src="../../public/gallery/Indian_Myna.jpg"
        alt="Photo of an indian myna looking at the camera outside the window."
      />
    </div>
    <div class="column">
      <img
        src="../../public/gallery/Pink_sky.jpg"
        alt="Photo of a beautiful pink sky primarily of clouds with a pink and orange colour, with a dark blue background."
      />
      <img
        src="../../public/gallery/Pink_sky2.jpg"
        alt="Photo of a senary with a yellow and blue sky and pink clouds from the setting sun."
      />
      <img
        src="../../public/gallery/Rainbow_Lorekeets.jpg"
        alt="Photo of two rainbow lorekeets sitting on a fence both together taking care."
      />
      <img
        src="../../public/gallery/Rainbow_Lorekeet.jpg"
        alt="Photo of a rainbow lorekeet on the fence with its back facing the camera."
      />
      <img
        src="../../public/gallery/Rainbow_Lorekeets2.jpg"
        alt="Photo of two rainbow lorekeets sitting on a fence both together taking care."
      />
      <img
        src="../../public/gallery/Kookaburra.jpg"
        alt="Photo of a kookaburra that has a stolen sausage in its mouth on a tree branch."
      />
    </div>
    <div class="column">
      <img
        src="../../public/gallery/Rainbow_Lorekeets3.jpg"
        alt="Photo of two rainbow lorekeets sitting on a fence both together taking care."
      />
      <img
        src="../../public/gallery/Rainbow_Lorekeets4.jpg"
        alt="Photo of two rainbow lorekeets sitting on a fence both together taking care."
      />
      <img
        src="../../public/gallery/Shore_bird.jpg"
        alt="Photo of a shore bird standing on the side of the goodwill bridge."
      />
      <img
        src="../../public/gallery/Sky.jpg"
        alt="Photo of the blue sky with clouds complementing the beautiful sky."
      />
      <img
        src="../../public/gallery/Stormy.jpg"
        alt="Photo of a big storm cloud in the distance as it passes by."
      />
      <img
        src="../../public/gallery/Casino_Sunset.jpg"
        alt="Photo of the brisbane sunset on top of the star casino."
      />
      <img
        src="../../public/gallery/City_Sky.jpg"
        alt="Photo of the skyline of the city in Bogota Colombia with the sun setting in the distance."
      />
    </div>
  </div>
</template>

<style scoped>
.gallery-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: var(--padding-large);
  justify-content: center;

  & .column {
    display: flex;
    flex-direction: column;
    padding: 0 var(--padding-large);
    gap: var(--padding-large);
  }

  & img {
    width: calc(100vw / 4 - var(--padding-large) * 3);
  }
}

/* styling for the hero image section */
.hero-section {
  background-image: url(../../public/gallery/clear_sky.jpg);
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

  & p {
    width: fit-content;
    max-width: 23%;
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
</style>
