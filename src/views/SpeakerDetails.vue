<template>
  <setion>
    <div class="container mx-auto">
      <div class="banner-main">
        <div class="hidden sm:block">
          <img src="../assets/banner-speakers.png" alt="Banner" />
        </div>
        <div class="block sm:hidden">
          <img src="../assets/banner-mobile-speakers.png" alt="Banner" />
        </div>
      </div>
      <div class="sm:flex p-5 pt-10 bg-blue-900/30">
        <div class="mr-0 mb-10 sm:w-1/2 md:w-1/3 sm:mr-5">
          <img :src="speakerInfo.image" :alt="speakerInfo.title" class="rounded mx-auto"/>
        </div>
        <div class="sm:w-1/2 md:-w-2/3">
          <h2 class="text-xl mb-3 mt-3">講師:</h2>
          <h2 class="text-3xl mb-3 mt-3">{{ speakerInfo.title }}</h2>
          <p>{{ speakerInfo.bio }}</p>
          <p>{{ speakerInfo.bio2 }}</p>
          <p>{{ speakerInfo.bio3 }}</p>
          <p>{{ speakerInfo.bio4 }}</p>
          <p>{{ speakerInfo.bio5 }}</p>
          <p>{{ speakerInfo.bio6 }}</p>
          <p><a :href="speakerInfo.website" target="_blank">{{ speakerInfo.website }}</a></p>
          <p><a :href="speakerInfo.website2" target="_blank">{{ speakerInfo.website2 }}</a></p>
          <p><a :href="speakerInfo.website3" target="_blank">{{ speakerInfo.website3 }}</a></p>
          <p><a :href="speakerInfo.website4" target="_blank">{{ speakerInfo.website4 }}</a></p>
          <div class="text-end"><button @click="$router.back()" class="mt-10 p-2 bg-blue-400/20 hover:bg-blue-400/40 rounded-xl">返回</button></div>
        </div>
      </div>
    </div>
  </setion>
</template>

<script>
import speakerData from '../data/speakersData';

export default {
  computed: {
    speakerInfo() {
      const speakerTitle = decodeURIComponent(this.$route.params.speakerDetails);
      return speakerData.find(speaker => speaker.title === speakerTitle);
    }
  }
};
</script>
