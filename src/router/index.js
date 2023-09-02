import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Volunteer from '../views/Volunteer.vue';
import Speakers from '../views/Speakers.vue';
import SpeakerDetails from '../views/SpeakerDetails.vue';
import AgendaDayOne from '../views/AgendaDayOne.vue';
import AgendaDayTwo from '../views/AgendaDayTwo.vue';
import AgendaDetails from '../views/AgendaDetails.vue';

const routes = [
  { path: '', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/volunteer', component: Volunteer },
  { path: '/speakers', component: Speakers },
  {
    path: '/speakers/:speakerDetails',
    component: SpeakerDetails,
    name: 'speakerDetail'
  },
  { path: '/agendaDayOne', component: AgendaDayOne },
  { path: '/agendaDayTwo', component: AgendaDayTwo },
  { 
    path: '/agenda/:agendaId',
    component: AgendaDetails,
    name: 'agendaDetails'
  },

];

const router = createRouter({
  history: createWebHistory('/2023/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
});

export default router;