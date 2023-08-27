<template>
  <setion>
    <div class="container mx-auto">
      <div class="banner-main">
        <div class="hidden sm:block">
          <img src="../assets/banner-agenda.png" alt="Banner" />
        </div>
        <div class="block sm:hidden">
          <img src="../assets/banner-mobile-agenda.png" alt="Banner" />
        </div>
      </div>
      <div class="p-5 pt-10 bg-blue-900/30">
          <h2 class="text-3xl mb-3 mt-3">{{ agendaInfo.topic }}</h2>
          <p>{{ agendaInfo.name }}</p>
          <p>{{ agendaInfo.name2 }}</p>
          <p>{{ agendaInfo.level }}</p>
          <p>{{ agendaInfo.intro }}</p>
          <p>{{ agendaInfo.intro2 }}</p>
          <p>{{ agendaInfo.intro3 }}</p>
          <p>{{ agendaInfo.intro4 }}</p>
          <p>{{ agendaInfo.intro5 }}</p>
          <p>{{ agendaInfo.content }}</p>
          <p>{{ agendaInfo.content2 }}</p>
          <p>{{ agendaInfo.content3 }}</p>
          <p>{{ agendaInfo.content4 }}</p>
          <p>{{ agendaInfo.content5 }}</p>
          <p>{{ agendaInfo.content6 }}</p>
          <p>{{ agendaInfo.content7 }}</p>
          <p>{{ agendaInfo.content8 }}</p>
          <p>{{ agendaInfo.content9 }}</p>
          <p>{{ agendaInfo.content10 }}</p>
          <p>{{ agendaInfo.content11 }}</p>
          <p><a :href="agendaInfo.website" target="_blank">{{ agendaInfo.website }}</a></p>
          <p><a :href="agendaInfo.website2" target="_blank">{{ agendaInfo.website2 }}</a></p>
          <p><a :href="agendaInfo.website3" target="_blank">{{ agendaInfo.website3 }}</a></p>
          <p><a :href="agendaInfo.website4" target="_blank">{{ agendaInfo.website4 }}</a></p>
          <p>{{ agendaInfo.book }}</p>
          <p>{{ agendaInfo.book2 }}</p>
          <div class="text-end"><button @click="$router.back()" class="mt-10 p-2 bg-blue-400/20 hover:bg-blue-400/40 rounded-xl">返回</button></div>
        
      </div>
    </div>
  </setion>
</template>

<script>
import agendaData from '../data/agendaData';

export default {
  computed: {
    agendaInfo() {
      const agendaTitle = decodeURIComponent(this.$route.params.agendaDetails);
      return agendaData.find(agenda => agenda.title === agendaTitle);
    }
  }
};
</script>
