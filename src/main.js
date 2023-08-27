import { createApp } from 'vue'

import './style.css'
import 'tailwindcss/tailwind.css'

import App from './App.vue'
import router from './router'; // Import the router instance

createApp(App).use(router).mount('#app');
