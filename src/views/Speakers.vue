<template>
  <section class="container mx-auto">
    <div class="banner-main">
      <div class="hidden sm:block">
        <img src="/images/banner-speakers.png" alt="Banner" />
      </div>
      <div class="block sm:hidden">
        <img src="/images/banner-mobile-speakers.png" alt="Banner" />
      </div>
    </div>
    <h2 class="text-3xl mb-3 mt-3">講師介紹</h2>
    <div class="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
      <div v-for="speaker in speakerData" :key="speaker.title"
      class="bg-blue-900/30 hover:bg-blue-900/50 rounded-lg flex flex-col item-center p-3 text-center">
        <router-link :to="{ name: 'speakerDetail', params: { speakerDetails: speaker.title } }">
          <img :src="getImagePath(speaker.image)" :alt="speaker.title" class="mb-3" />
          <p>{{ speaker.title }}</p>
        </router-link>
      </div>
    </div>
  </section>
</template>
<script>
import { ref } from 'vue'; // Import the necessary Vue composition API
import speakerData from '../data/speakersData'; // Correct the import path

export default {
  setup() {
    const getImagePath = (imageName) => new URL(`../assets/${imageName}`, import.meta.url).href;

    return {
      getImagePath,
      speakerData, // Return the speakerData variable
    };
  },
};
</script>
